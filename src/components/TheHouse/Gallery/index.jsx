import { Container, Primary, Secondary } from "./style";
// import defaultImg from "../../../assets/noimg.jpg"
import ReactFullscreenSlideshow from './react-fullscreen-slideshow';
import "./main.css"

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
    console.log(firstImg, otherImgs)
    return (
        <Container className="container">
            {
                images.length>0 && <>
                    <Primary>
                        <ReactFullscreenSlideshow width={"580px"} height={"400px"} images={images} title={"Example Image slideshow"}/>
                    </Primary>
                    <Secondary>
                        {
                            otherImgs.map((imgURL, i) => <ReactFullscreenSlideshow width={"280px"} height={"190px"} currentSlideIndex={i+1} BannerImgIndex={i+1} images={images} title={"Example Image slideshow"}/>)
                        }
                        {images.length>3 && <ReactFullscreenSlideshow width={"280px"} height={"190px"} currentSlideIndex={4} BannerImgIndex={4} images={images} more={images.length-4} title={"Example Image slideshow"}/>}
                    </Secondary>
                </>
            }
        </Container>
    )
}

export default Gallery;