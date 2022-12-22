import Filter from "../Filter"
import Carousel from "../Carousel"
import CardGroup from "../CardGroup"
import Why from "../Why"
import Categories from "../Categories"
import Banner from "../Banner"
import Testimonials from "../Testimonials"

const Home = () => {
    return (
        <div>
            <Filter/>
            <Carousel/>
            <CardGroup
                title={"Recommended"}
                subtitle={"Nulla quis curabitur velit volutpat auctor bibendum consectetur sit."}
                recommended
            />
            <Why/>
            <Categories/>
            <Banner/>
            <CardGroup
                title={"Recent Properties for Rent"}
                subtitle={"Nulla quis curabitur velit volutpat auctor bibendum consectetur sit."}
                recent
            />
            <Testimonials/>
        </div>
    )
}

export default Home;