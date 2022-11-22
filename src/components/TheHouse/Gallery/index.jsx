import { Container, Primary, Secondary } from "./style";
import defaultImg from "../../../assets/noimg.jpg"

const Gallery = ({data}) => {
    data = data.map((val) => val.imgPath ? val.imgPath : false)
    const firstImg = data[0]
    const otherImgs = data.slice(1, data.length)
    return (
        <Container className="container">
            <Primary>
                <img src={firstImg ? firstImg : defaultImg} alt="primary" />
            </Primary>
            <Secondary>
                {
                    otherImgs.map(imgURL => <img src={imgURL ? imgURL : defaultImg} alt="houseImg" />)
                }
            </Secondary>
        </Container>
    )
}

export default Gallery;