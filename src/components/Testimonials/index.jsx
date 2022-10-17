import { Container, Move, MoveControl, Card, Arrow } from './style'
import { Carousel } from 'antd';
import { useRef } from 'react';
import { t } from "../../mock/data"

const Testimonials = () => {
    const slider = useRef()
    const onMove = ({target: {dataset: {name}}}) => {
        console.log(name)
        if(name === "next") slider.current.next();
        else if(name === "prev") slider.current.prev();
    }
    return (
        <Container className="subcontainer">
            <h1>Testimonials</h1>
            <h2>Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.</h2>
            <div className='main'>
                <Carousel autoplay ref={slider} className="container carousel">
                    <div>
                        <div className='group'>
                            {
                                t.slice(0, 3)?.map(({user, job, description, userImg}) => {
                                    return (
                                        <Card>
                                            <div className='description'>
                                                <p>
                                                    “ 
                                                        {description}
                                                    “ 
                                                </p>
                                                <div className="image">
                                                    <div className="ownerImg">
                                                        <img src={userImg} alt="owner" className="owner" />
                                                    </div>
                                                    <div className='who'>
                                                        <h5>{user}</h5>
                                                        <h6>{job}</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </Card>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div>
                        <div className='group'>
                            {
                                t.slice(3, 6)?.map(({user, job, description, userImg}) => {
                                    return (
                                        <Card>
                                            <div className='description'>
                                                <p>
                                                    “ 
                                                        {description}
                                                    “ 
                                                </p>
                                                <div className="image">
                                                    <div className="ownerImg">
                                                        <img src={userImg} alt="owner" className="owner" />
                                                    </div>
                                                    <div className='who'>
                                                        <h5>{user}</h5>
                                                        <h6>{job}</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </Card>
                                    )
                                })
                            }
                        </div>
                    </div>
                </Carousel>
                <MoveControl>
                    <Move data-name="prev" onClick={onMove}>
                        <Arrow/>
                    </Move>
                    <Move data-name="next" onClick={onMove}>
                        <Arrow right/>
                    </Move>
                </MoveControl>
            </div>
        </Container>
    )
}

export default Testimonials;