import { Carousel } from 'antd';
import { useRef } from 'react';
import { Container, Arrow, Content, DarkLayer, Bed, Bath, Car, Area } from "./style.js"
import { data } from '../../mock/data.js';
import { Button } from '../Generic'

const contentStyle = {
  height: '570px',
  color: '#fff',
  textAlign: 'center',
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  background: '#364d79',
  position: "relative"
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
                {
                    data?.map(({id, title, subtitle, settings, pricePerMonth, img}) => {
                        return (
                            <div key={id}>
                                <div style={contentStyle}>
                                    <img src={img} alt={title} className="productImg"/>
                                    <DarkLayer/>
                                    <Content>
                                        <div className='title'>{title}</div>
                                        <div className='subtitle'>{subtitle}</div>
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
                                        <div className='price'>${pricePerMonth}/mo</div>
                                        <div className='readmore'>
                                            <Button type={"dark"}>Read more</Button>
                                        </div>
                                    </Content>
                                </div>
                            </div>
                        )
                    })
                }
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