import Card from "../Card";
import { useContext, useEffect } from "react";
import { ContextAPI } from "../../context";
import Filter from "../Filter"
import { Houses, Head } from "./style";
import { useLocation, useNavigate } from "react-router-dom";
import { setParam } from "../../hooks/onSearch";
import useSearch from "../../hooks/useSearch";

const Properties = () => {
    const { housesList, setHousesList } = useContext(ContextAPI)
    const { search } = useLocation()
    const { REACT_APP_BASE_URL: url } = process.env
    const navigate = useNavigate()
    const query = useSearch()
    const changeCategory = ({target: {value}}) => {
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
                        <select name="sort" id="sort" onChange={changeCategory} defaultValue={query.get("category_id")}>
                            <option value="">All houses</option>
                            <option value="4">Cottages</option>
                            <option value="1">Apartment</option>
                            <option value="65">Office</option>
                            <option value="2">Villa</option>
                        </select>
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