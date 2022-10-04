import Card from '../Card'
import { Container } from './style'
import { cards } from '../../mock/data'

const CardGroup = () => {
    return (
        <Container className="container subcontainer">
            <h1>Recommended</h1>
            <h2>Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.</h2>
            <div className='cards'>
                {
                    cards?.map(({id, title, subtitle, settings, pricePerMonth, img, afterPrice, ownerImg}) => {
                        return (
                            <Card 
                                key={id}
                                title={title}
                                subtitle={subtitle}
                                settings={settings}
                                afterPrice={afterPrice}
                                pricePerMonth={pricePerMonth}
                                houseImg={img}
                                ownerImg={ownerImg}
                            />
                        )
                    })
                }
            </div>
        </Container>
    )
}

export default CardGroup;