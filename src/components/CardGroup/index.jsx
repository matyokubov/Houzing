import { useEffect, useState } from "react"
import Card from '../Card'
import { Container } from './style'
import { cards as mock } from '../../mock/data'

const CardGroup = ({title, subtitle, recommended, recent}) => {
    const { REACT_APP_BASE_URL: url } = process.env
    const [ data, setData ] = useState(mock)
    useEffect(() => {
        fetch(`${url}houses/list`)
            .then((res) => res.json())
            .then((houses) => {
                if(recommended) setData(houses.data.slice(0, 3))
                else if(recent) setData(houses.data.slice(-3))
            })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <Container className="container subcontainer">
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <div className='cards'>
                {
                    data?.map((house, i) => {
                        return (
                            <Card
                                key={i}
                                title={house.name}
                                subtitle={`${house.address}, ${house.country}`}
                                settings={house.houseDetails}
                                houseImg={house.attachments[0] ? house.attachments[0].imgPath : ""}
                                afterPrice={house.price}
                                pricePerMonth={house.salePrice}
                                id={house.id}
                            />
                        )
                    })
                }
            </div>
        </Container>
    )
}

export default CardGroup;