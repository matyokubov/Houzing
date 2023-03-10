import { Container, Info, Bed, Bath, Car, Area, Prices, Full, Like } from "./style";
import { CButton } from "../Generic"
import unknownUser from "../../assets/user.jpg"
import noImg from "../../assets/noimg.jpg"
import { useNavigate } from "react-router-dom"

const Card = ({
        settings = {beds: 0, baths: 0, garage: 0, area: 0},
        title="Unknown Home",
        subtitle="No short description",
        afterPrice="0",
        pricePerMonth="0",
        houseImg,
        ownerImg,
        id=null
    }) => {
    const navigate = useNavigate()
    const badgeStyles = {
        featured: {
            background: "var(--primaryBlue)",
            color: "#fff"
        },
        forSale: {
            background: "var(--themeColor)",
            color: "#fff"
        }
    }
    return (
        <Container houseImg={houseImg && houseImg !== 'string' ? houseImg : noImg}>
            <div>
                <div className="style">
                    <div className="badges">
                        <span style={badgeStyles.featured}>FEATURED</span>
                        <span style={badgeStyles.forSale}>FOR SALE</span>
                    </div>
                    <div className="image">
                        <div className="ownerImg">
                            <img src={ownerImg ? ownerImg : unknownUser} alt="owner" className="owner" />
                        </div>
                    </div>
                </div>
                <Info onClick={() => navigate(`/properties/${id}`)}>
                    <h2 style={{cursor: "pointer"}}>{title}</h2>
                    <h3>{subtitle}</h3>
                    <div className='settings'>
                        <div>
                            <Bed/>
                            <span>{settings.beds || 0} Beds</span>
                        </div>
                        <div>
                            <Bath/>
                            <span>{settings.bath || 0} Bath</span>
                        </div>
                        <div>
                            <Car/>
                            <span>{settings.garage || 0} Garages</span>
                        </div>
                        <div>
                            <Area style={{width: "19px", height: "19px"}}/>
                            <span>{settings.area || 0} Sq Ft</span>
                        </div>
                    </div>
                </Info>
                <hr />
                <Prices>
                    <div className="current">
                        <span style={{textDecoration: "line-through"}}>${afterPrice || 0}/mo</span>
                        <h2>${pricePerMonth || 0}/mo</h2>
                    </div>
                    <div className="action">
                        <CButton icon={<Full/>}/>
                        <CButton icon={<Like/>}/>
                    </div>
                </Prices>
            </div>
        </Container>
    )
}

export default Card;