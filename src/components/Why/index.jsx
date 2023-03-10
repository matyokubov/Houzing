import { Container } from "./style";
import { DiscordIc, HouseIc, CalcIc, MapsIc } from "./style";

const Why = () => {
    return (
        <Container className="subcontainer">
            <div className="container">
                <h1>Why Choose Us?</h1>
                <h2>Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.</h2>
                <div className="cols">
                    <div>
                        <DiscordIc/>
                        <h3>Trusted By Thousands</h3>
                        <h2>With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.</h2>
                    </div>
                    <div>
                        <HouseIc/>
                        <h3>Wide Renge Of Properties</h3>
                        <h2>With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.</h2>
                    </div>
                    <div>
                        <CalcIc/>
                        <h3>Financing Made Easy</h3>
                        <h2>With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.</h2>
                    </div>
                    <div>
                        <MapsIc/>
                        <h3>See Neighborhoods</h3>
                        <h2>With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.</h2>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Why;