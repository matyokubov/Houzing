import Card from "../Card";
import { useContext } from "react";
import { ContextAPI } from "../../context";
import Filter from "../Filter"
import { Houses, Head } from "./style";

const Properties = () => {
    const { housesList } = useContext(ContextAPI)
    console.log(housesList);
    return (
        <div>
            <Filter/>
            <div className='container'>
                <Head>
                    <h1>Properties</h1>
                    <p>Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.</p>
                    <div>
                        <span>
                            <b>{housesList.map.size}</b> results
                        </span>
                        <select name="sort" id="sort" defaultValue={"all"}>
                            <option value="all">All houses</option>
                        </select>
                    </div>
                </Head>
                <Houses>
                    {
                        housesList ? housesList.data?.map((house, i) => 
                            <Card
                                key={i}
                                title={house.name}
                                subtitle={`${house.address}, ${house.country}`}
                                settings={house.houseDetails}
                                houseImg={house.attachments[0].imgPath}
                                afterPrice={house.price}
                                pricePerMonth={house.salePrice}
                            />
                        ) : <h1>Loading...</h1>
                    }
                </Houses>
            </div>
        </div>
    )
}

export default Properties;