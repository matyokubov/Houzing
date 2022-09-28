import Card from '../Card'
import { Container } from './style'

const CardGroup = () => {
    return (
        <Container className="container">
            <h1>Recommended</h1>
            <h2>Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.</h2>
            <div className='cards'>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </Container>
    )
}

export default CardGroup;