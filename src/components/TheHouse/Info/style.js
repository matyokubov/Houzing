import styled from "styled-components";
import { ReactComponent as like } from "../../../assets/icons/like.svg";
import { ReactComponent as share } from "../../../assets/icons/share.svg";
import { ReactComponent as bed } from "../../../assets/icons/bed2.svg";
import { ReactComponent as bath } from "../../../assets/icons/bath2.svg";
import { ReactComponent as car } from "../../../assets/icons/car2.svg";
import { ReactComponent as area } from "../../../assets/icons/area2.svg";
import { ReactComponent as calendar } from "../../../assets/icons/calendar.svg";

export const Container = styled.div`
    display: flex;
    margin-top: 24px;
    h1, h2{
        margin: 0;
        font-weight: 600;
    }
`

export const Title = styled.div`
    display: flex;
    justify-content: space-between;
`

export const Reaction = styled.div`
    display: inline-flex;
    column-gap: 26px;
    >div{
        display: inline-flex;
        align-items: center;
        column-gap: 10px;
        transition-duration: 300ms;
        cursor: pointer;
        :hover{
            span{
                color: var(--primaryBlue);
            }
        }
    }
`

export const Data = styled.div`
    width: 100%;
`

export const Settings = styled.div`
    display: inline-flex;
    column-gap: 24px;
    margin: 30px 0;
    div{
        display: inline-flex;
        column-gap: 8px;
    }
`

export const Features = styled.div`
    display: flex;
    justify-content: space-between;
`

export const Prices = styled.div`
    text-align: right;
    >div{
        display: flex;
        align-items: center;
        column-gap: 8px;
    }
`

export const LikeIcon = styled(like)``
export const ShareIcon = styled(share)``
export const BedIcon = styled(bed)``
export const BathIcon = styled(bath)``
export const CarIcon = styled(car)``
export const AreaIcon = styled(area)``
export const CalendarIcon = styled(calendar)``