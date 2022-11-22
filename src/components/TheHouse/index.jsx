import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useRequest } from "../../hooks/useRequest"

const TheHouse = () => {
    const params = useParams()
    const request = useRequest()
    const [ house, setHouse ] = useState("Loading...")
    useEffect(() => {
        request({url: `houses/id/${params.id}`}).then(data => setHouse(data))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    console.log(house, "from id");
    return (
        <div>House {params.id}</div>
    )
}

export default TheHouse;