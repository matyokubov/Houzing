import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useRequest } from "../../hooks/useRequest"
import Gallery from "./Gallery";

const TheHouse = () => {
    const params = useParams()
    const request = useRequest()
    const [ house, setHouse ] = useState(false)
    useEffect(() => {
        request({url: `houses/id/${params.id}`}).then(data => data.data.attachments && setHouse(data))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    console.log(house);
    console.log("from id");
    return (
        <div>
            {
                house ? <Gallery data={house.data.attachments}/> : <div>Loading...</div>
            }
        </div>
    )
}

export default TheHouse;