import Filter from "../Filter"
import Carousel from "../Carousel"
import CardGroup from "../CardGroup"
import Why from "../Why"
import Categories from "../Categories"
import Banner from "../Banner"

const Home = () => {
    return (
        <div>
            <Filter/>
            <Carousel/>
            <CardGroup/>
            <Why/>
            <Categories/>
            <Banner/>
        </div>
    )
}

export default Home;