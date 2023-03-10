import Card from "../Card";
import { Button } from "../Generic"
import { useContext, useEffect, useRef, useState } from "react";
import { ContextAPI } from "../../context";
import Filter from "../Filter"
import Loader from "../Loader"
import { Houses, Head, AntSelect } from "./style";
import { useLocation, useNavigate } from "react-router-dom";
import { setParam } from "../../hooks/onSearch";
import useSearch from "../../hooks/useSearch";

const Properties = () => {
    const { housesList, setHousesList, changingReq, setChangingReq } = useContext(ContextAPI)
    const { search } = useLocation()
    const { REACT_APP_BASE_URL: url } = process.env
    const navigate = useNavigate()
    const query = useSearch()
    const changeCategory = (value) => {
        setChangingReq(changingReq+1)
        navigate(`/properties${setParam("category_id", value)}`)
    }
    const hsize = useRef(20)
    const [smv, setSmv] = useState(false)
    console.log("Properties");
    useEffect(() => {
        hsize.current = 20
        fetch(`${url}houses/list${search}`)
            .then((res) => res.json())
            .then((data) => {
                if(data.status !== 500) {
                    setHousesList(data)
                    data.map.total_elements >= 20 ? setSmv(true) : setSmv(false)
                }
                else setHousesList(
                    {
                        message: "Internal Server Error",
                        success: false,
                        data: [],
                        map: {
                        size: 0,
                        total_elements: 0,
                        total_pages: 0
                        }
                    }
                )
            })
            .catch(() => {
                setHousesList({
                    message: "Connection Error",
                    success: false,
                    data: [],
                    map: {
                      size: 0,
                      total_elements: 0,
                      total_pages: 0
                    }
                })
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [changingReq])
    const showMore = () => {
        hsize.current = hsize.current <= housesList.map.total_elements ? housesList.map.size+hsize.current : hsize.current
        hsize.current >= housesList.map.total_elements && setSmv(false)
        const newReqSmv = new URLSearchParams(search)
        newReqSmv.set("size", hsize.current);
        fetch(`${url}houses/list?${newReqSmv.toString()}`)
            .then((res) => res.json())
            .then((data) => {
                if(data.status !== 500) {
                    setHousesList(data)
                }
            })
        console.log(`${url}houses/list${newReqSmv.toString()}`);
    }
    console.log(smv);
    return (
        <div>
            <Filter/>
            <div className='container'>
                <Head>
                    <h1>Properties</h1>
                    <p>Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.</p>
                    <div>
                        <span>
                            <b>{housesList && housesList.map.total_elements}</b> results
                        </span>
                        <AntSelect onChange={changeCategory} defaultValue={query.get("category_id") || ""}>
                            <AntSelect.Option value="">All houses</AntSelect.Option>
                            <AntSelect.Option value="4">Cottages</AntSelect.Option>
                            <AntSelect.Option value="1">Apartment</AntSelect.Option>
                            <AntSelect.Option value="65">Office</AntSelect.Option>
                            <AntSelect.Option value="2">Villa</AntSelect.Option>
                        </AntSelect>
                    </div>
                </Head>
                <Houses>
                    {
                        housesList.map.total_elements ? housesList.data?.map((house, i) => 
                            <Card
                                key={i}
                                title={house.name}
                                subtitle={`${house.address}, ${house.country}`}
                                settings={house.houseDetails}
                                houseImg={house.attachments[0] ? house.attachments[0].imgPath : ""}
                                afterPrice={house.price}
                                pricePerMonth={house.salePrice}
                                id={house.id}
                            />
                        ) : !housesList.map.total_elements ? <Loader load>{housesList.message}</Loader> : []
                    }
                </Houses>
                <div style={{display: "flex", justifyContent: "center", marginBottom: "96px"}}>
                    {smv && <Button width={"250px"} height={"44px"} on={showMore}>Show More</Button>}
                </div>
            </div>
        </div>
    )
}

export default Properties;