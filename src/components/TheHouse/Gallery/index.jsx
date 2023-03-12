import { Container, Primary, Secondary } from "./style";
// import defaultImg from "../../../assets/noimg.jpg"
import ReactFullscreenSlideshow from './react-fullscreen-slideshow';
import "./main.css"
import fillwhite from "../../../assets/repeats/forhouseimg.jpg"

const Gallery = ({data}) => {
    // data = data.map((val) => val.imgPath ? val.imgPath : defaultImg)
    const images = []
    data.forEach((val) => {
        if(val.imgPath.includes("/")) images.push({
            image: val.imgPath,
            caption: 'Test Caption',
            description: 'Description for image'
        })
        // else images.push({
        //     image: defaultImg,
        //     caption: 'Unknown caption',
        //     description: 'Unknown description'
        // })
    })
    console.log(images)
    const firstImg = images[0]
    const otherImgs = images.length>3 ? images.slice(1, 4) : images.slice(1, data.length)
    const slideShowWidth = images.length === 1 || images.length === 2 ? "580px" : "580px"
    console.log(firstImg, otherImgs)
    return (
        <Container className="container gallery" fillwhite={fillwhite} dcount={images.length}>
            {
                images.length>0 && <>
                    <Primary className="primary">
                        <ReactFullscreenSlideshow width={slideShowWidth} images={images} title={"Gallery"}/>
                    </Primary>
                    <Secondary className="secondary">
                        {
                            otherImgs.map((imgURL, i) => <ReactFullscreenSlideshow width={"280px"} height={"190px"} currentSlideIndex={i+1} BannerImgIndex={i+1} images={images} title={"Gallery"}/>)
                        }
                        {images.length>4 && <ReactFullscreenSlideshow width={"280px"} height={"190px"} currentSlideIndex={4} BannerImgIndex={4} images={images} more={images.length-4} title={"Gallery"}/>}
                    </Secondary>
                </>
            }
        </Container>
    )
}

export default Gallery;