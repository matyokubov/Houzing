import Card from "../Card";
import { useContext, useEffect } from "react";
import { ContextAPI } from "../../context";
import Filter from "../Filter"
import { Houses, Head, AntSelect } from "./style";
import { useLocation, useNavigate } from "react-router-dom";
import { setParam } from "../../hooks/onSearch";
import useSearch from "../../hooks/useSearch";

const Properties = () => {
    const { housesList, setHousesList } = useContext(ContextAPI)
    const { search } = useLocation()
    const { REACT_APP_BASE_URL: url } = process.env
    const navigate = useNavigate()
    const query = useSearch()
    const changeCategory = (value) => {
        navigate(`/properties${setParam("category_id", value)}`)
    }
    console.log(housesList);
    console.log("pp");
    useEffect(() => {
        fetch(`${url}houses/list${search}`)
            .then((res) => res.json())
            .then((data) => data.status !== 500 ? setHousesList(data) : setHousesList(
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
            ))
            .catch((err) => console.log("error", err))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [search])
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
                                houseImg={house.attachments[0].imgPath}
                                afterPrice={house.price}
                                pricePerMonth={house.salePrice}
                            />
                        ) : !housesList.map.total_elements ? <h1>{housesList.message}</h1> : []
                    }
                </Houses>
            </div>
        </div>
    )
}

export default Properties;