import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useRequest } from "../../hooks/useRequest"
import { house as defaultData } from "./default"
import Gallery from "./Gallery";

const TheHouse = () => {
    const params = useParams()
    const request = useRequest()
    const [ house, setHouse ] = useState(defaultData)
    useEffect(() => {
        request({url: `houses/id/${params.id}`}).then(data => setHouse(data))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    console.log(house.data.attachments);
    const imgs = house.data.attachments
    console.log("from id");
    return (
        <div>
            <Gallery data={imgs}></Gallery>
        </div>
    )
}

export default TheHouse;