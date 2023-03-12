import { Container, Title, Reaction, Data, Settings, Features, Prices,
    LikeIcon,
    ShareIcon,
    BedIcon,
    BathIcon,
    CarIcon,
    AreaIcon,
    CalendarIcon
} from "./style"
import { CButton } from "../../Generic"
import OwnerCard from "./OwnerCard"
import Description from "./../Description"

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
                        <div><BedIcon/> <span>{house.data.houseDetails.beds} Beds</span></div>
                        <div><BathIcon/> <span>{house.data.houseDetails.bath} Baths</span></div>
                        <div><CarIcon/> <span>{house.data.houseDetails.garage} Garages</span></div>
                        <div><AreaIcon/> <span>{house.data.houseDetails.area} Sq Ft</span></div>
                        <div><CalendarIcon/> <span>Year Built: {house.data.houseDetails.yearBuilt}</span></div>
                    </Settings>
                    <Prices>
                        <span>
                            <div>
                                <span style={{fontSize: "12px", textDecoration: "line-through"}}>${house.data.price.toLocaleString()}/mo</span>
                                <h2>${house.data.salePrice.toLocaleString()}/mo</h2>
                            </div>
                            {house.data.city}
                        </span>
                    </Prices>
                </Features>
                <Description>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et optio accusamus consequuntur omnis cupiditate illo, culpa pariatur incidunt corrupti maiores quas officiis sed. Doloremque minus quibusdam aliquid cumque? Beatae, eos.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et optio accusamus consequuntur omnis cupiditate illo, culpa pariatur incidunt corrupti maiores quas officiis sed. Doloremque minus quibusdam aliquid cumque? Beatae, eos.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et optio accusamus consequuntur omnis cupiditate illo, culpa pariatur incidunt corrupti maiores quas officiis sed. Doloremque minus quibusdam aliquid cumque? Beatae, eos.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et optio accusamus consequuntur omnis cupiditate illo, culpa pariatur incidunt corrupti maiores quas officiis sed. Doloremque minus quibusdam aliquid cumque? Beatae, eos.
                </Description>
            </Data>
            <OwnerCard/>
        </Container>
    )
}

export default Info;