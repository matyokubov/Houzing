import { Container } from "./style";
import {
    PinIcon,
    PhoneIcon,
    EmailIcon,
    FacebookIcon,
    TwitterIcon,
    InstagramIcon,
    LinkedinIcon,
    Logo,
    ToUp
} from "./style";

const Footer = () => {
    const scrollToTop = () => {
        let target = document.getElementById("head");
        document.querySelector("body").scroll({
            top: target.offsetTop,
            behavior: 'smooth'
        });
    }
    return (
        <Container>
            <div>
                <div className="toCenter container">
                    <div className="cols">
                        <div className="col">
                            <h3>Contact Us</h3>
                            <div className="item">
                                <PinIcon/>
                                <span>329 Queensberry Street, North <br /> Melbourne VIC 3051, Australia.</span>
                            </div>
                            <div className="item">
                                <PhoneIcon/>
                                <span>123 456 7890</span>
                            </div>
                            <div className="item">
                                <EmailIcon/>
                                <span>support@houzing.com</span>
                            </div>
                            <div className="social">
                                <FacebookIcon/>
                                <TwitterIcon/>
                                <InstagramIcon/>
                                <LinkedinIcon/>
                            </div>
                        </div>
                        <div className="col">
                            <h3>Discover</h3>
                            <div>Chicago</div>
                            <div>Los Angeles</div>
                            <div>Miami</div>
                            <div>New York</div>
                        </div>
                        <div className="col">
                            <h3>Lists by Category</h3>
                            <div>Apartments</div>
                            <div>Cottages</div>
                            <div>Office</div>
                            <div>Villas</div>
                        </div>
                        <div className="col">
                            <h3>More</h3>
                            <div>About Us</div>
                            <div>Terms & Conditions</div>
                            <div>Support Center</div>
                            <div>Contact Us</div>
                        </div>
                    </div>
                </div>
                <div className="fend">
                    <div className="toCenter">
                        <div className="logo">
                            <Logo/>
                        </div>
                        <div className="copyr">
                            <span>Copyright © 2022 CreativeLayers. All Right Reserved.</span>
                            <div className="up" onClick={scrollToTop}>
                                <ToUp/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Footer;