import { Container } from "./style";
import { Button } from '../Generic'
import img from '../../assets/house2.png'

const Why = () => {
    return (
        <Container className="subcontainer" img={img}>
            <div className="darklayer"></div>
            <div className="center">
                <h1>Vermont Farmhouse With Antique Jail Is <br/> the Week's Most Popular Home</h1>
                <Button width="180px">Read more</Button>
            </div>
        </Container>
    )
}

export default Why;