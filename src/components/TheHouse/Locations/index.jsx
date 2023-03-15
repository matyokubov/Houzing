import "./index.css"

const Locations = ({
    address = "Unknown",
    county = "Unknown",
    city = "Unknown",
    zip = "Unknown",
    area = "Unknown",
    country ="Unknown"
}) => {
    return (
        <div className="loc">
            <h2>Locations</h2>
            <div className="options">
                <div>
                    <span><b>Address: </b>{address}</span>
                    <span><b>State/County: </b>{county}</span>
                </div>
                <div>
                    <span><b>City: </b>{city}</span>
                    <span><b>Zip: </b>{zip}</span>
                </div>
                <div>
                    <span><b>Area: </b>{area}</span>
                    <span><b>Country: </b>{country}</span>
                </div>
            </div>
        </div>
    )
}

export default Locations;