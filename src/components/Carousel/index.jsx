import { Carousel } from 'antd';
import { useRef } from 'react';
import { Container, Arrow } from "./style.js"

const contentStyle = {
  height: '570px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const GenCarousel = () => {
    const slider = useRef()
    const onMove = ({target: {dataset: {name}}}) => {
        console.log(name)
        if(name === "next") slider.current.next();
        else if(name === "prev") slider.current.prev();
    }
    return (
        <Container>
            <Carousel autoplay ref={slider}>
                <div>
                    <h3 style={contentStyle}>Hello</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>I'm Carousel</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>Move me</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>It's Enjoy!</h3>
                </div>
            </Carousel>
            <div className="arrow">
                <div data-name="prev" onClick={onMove}>
                    <Arrow/>
                </div>
                <div data-name="next" onClick={onMove}>
                    <Arrow right='true'/>
                </div>
            </div>
        </Container>
    )
}

export default GenCarousel;