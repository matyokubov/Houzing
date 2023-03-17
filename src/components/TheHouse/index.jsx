import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useRequest } from "../../hooks/useRequest"
import Loader from "./../Loader"
import Gallery from "./Gallery";
import Info from "./Info";
import CardGroup from "../CardGroup"

const TheHouse = () => {
    const params = useParams()
    const [ house, setHouse ] = useState({ok: "pending"})
    const request = useRequest(setHouse)
    useEffect(() => {
        let target = document.getElementById("head");
        document.querySelector("body").scroll({
            top: target.offsetTop,
            behavior: 'smooth'
        });
        request({url: `houses/id/${params.id}`}).then(data => data.data.attachments && setHouse(data))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    console.log(house);
    console.log("from id");
    return (
        <div>
            {
                !house.ok ? <>
                    <Gallery data={house.data.attachments}/>
                    <Info house={house}/>
                    <CardGroup
                        title={"Recent Properties for Rent"}
                        subtitle={"Nulla quis curabitur velit volutpat auctor bibendum consectetur sit."}
                        recent
                        reloadMode
                    />
                </> : 
                house.ok === "pending" ? <Loader>Loading data of the propertie...</Loader> :
                house.ok === "unknownError" ? <Loader>No Internet Connection</Loader> : <></>
            }
        </div>
    )
}

export default TheHouse;