import styled from "styled-components";
import { ReactComponent as discord } from "../../assets/icons/discord.svg";
import { ReactComponent as house } from "../../assets/icons/house.svg";
import { ReactComponent as calc } from "../../assets/icons/calculator.svg";
import { ReactComponent as maps } from "../../assets/icons/maps.svg";

export const Container = styled.div`
    background-color: var(--gray2);
    text-align: center;
    padding: 48px 0;
    margin-top: 81px;
    h3{
        font-size: 18px;
        font-weight: 600;
    }
    .cols{
        display: flex;
        column-gap: 60px;
        >div{
            text-align: center;
            h2{
                margin-bottom: 0;
            }
        }
        svg{
            margin-bottom: 24px;
        }
    }
`

export const DiscordIc = styled(discord)``
export const HouseIc = styled(house)``
export const CalcIc = styled(calc)``
export const MapsIc = styled(maps)``