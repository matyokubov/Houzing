import { useParams } from "react-router-dom";

const TheHouse = () => {
    const params = useParams()
    console.log(params);
    return (
        <div>House {params.id}</div>
    )
}

export default TheHouse;