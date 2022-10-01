import Card from "../Card";
import { useContext } from "react";
import { ContextAPI } from "../../context";
import Filter from "../Filter"
import { Houses } from "./style";

const Properties = () => {
    const { housesList } = useContext(ContextAPI)
    console.log(housesList);
    return (
        <div>
            <Filter/>
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
    )
}

export default Properties;