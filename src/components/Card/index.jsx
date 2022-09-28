import { Container, Info, Bed, Bath, Car, Area, Prices, Full, Like } from "./style";
import img1 from "../../mock/owner.png"

const Card = ({settings = {beds: 0, baths: 0, garage: 0, area: 0}}) => {
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
        <Container>
            <div>
                <div className="style">
                    <div className="badges">
                        <span style={badgeStyles.featured}>FEATURED</span>
                        <span style={badgeStyles.forSale}>FOR SALE</span>
                    </div>
                    <div className="image">
                        <div className="ownerImg">
                            <img src={img1} alt="owner" className="owner" />
                        </div>
                    </div>
                </div>
                <Info>
                    <h2>New Apartment Nice Wiew</h2>
                    <h3>Quincy St, Brooklyn, NY, USA</h3>
                    <div className='settings'>
                        <div>
                            <Bed/>
                            <span>{settings.beds} Beds</span>
                        </div>
                        <div>
                            <Bath/>
                            <span>{settings.baths} Bath</span>
                        </div>
                        <div>
                            <Car/>
                            <span>{settings.garage} Garages</span>
                        </div>
                        <div>
                            <Area style={{width: "19px", height: "19px"}}/>
                            <span>{settings.area} Sq Ft</span>
                        </div>
                    </div>
                </Info>
                <hr />
                <Prices>
                    <div className="current">
                        <span>$0/mo</span>
                        <h2>$1000/mo</h2>
                    </div>
                    <div className="action">
                        <div>
                            <Full/>
                        </div>
                        <div>
                            <Like/>
                        </div>
                    </div>
                </Prices>
            </div>
        </Container>
    )
}

export default Card;