import { Container, Title, Reaction, Data, Owner, Settings, Features, Prices,
    LikeIcon,
    ShareIcon,
    BedIcon,
    BathIcon,
    CarIcon,
    AreaIcon,
    CalendarIcon
} from "./style"
import { CButton } from "../../Generic"

const Info = ({house}) => {
    return (
        <Container className="container">
            <Data>
                <Title>
                    <h1>{house.data.name}</h1>
                    <Reaction>
                        <div>
                            <CButton icon={<ShareIcon/>}/>
                            <span>Share</span>
                        </div>
                        <div>
                            <CButton icon={<LikeIcon/>}/>
                            <span>Save</span>
                        </div>
                    </Reaction>
                </Title>
                <span>{`${house.data.address}, ${house.data.country}`}</span>
                <Features>
                    <Settings>
                        <div><BedIcon/> {house.data.houseDetails.beds} Beds</div>
                        <div><BathIcon/> {house.data.houseDetails.bath} Baths</div>
                        <div><CarIcon/> {house.data.houseDetails.garage} Garages</div>
                        <div><AreaIcon/> {house.data.houseDetails.area} Sq Ft</div>
                        <div><CalendarIcon/> Year Built: {house.data.houseDetails.yearBuilt}</div>
                    </Settings>
                    <Prices>
                        <div>
                            <span style={{fontSize: "12px", textDecoration: "line-through"}}>${house.data.price.toLocaleString()}/mo</span>
                            <h2>${house.data.salePrice.toLocaleString()}/mo</h2>
                        </div>
                        <span>{house.data.city}</span>
                    </Prices>
                </Features>
            </Data>
            <Owner>
                Own
            </Owner>
        </Container>
    )
}

export default Info;