import styled from "styled-components";
import { ReactComponent as arrowIcon } from "../../assets/icons/arrow.svg";
import { ReactComponent as bed } from "../../assets/icons/bed.svg";
import { ReactComponent as bath } from "../../assets/icons/bath.svg";
import { ReactComponent as car } from "../../assets/icons/car.svg";
import { ReactComponent as area } from "../../assets/icons/area.svg";

export const Container = styled.div`
    position: relative;
    height: 570px;
    user-select: none;
    margin-bottom: 6rem;
    .arrow{
        position: absolute;
        transform: translateY(-295px);
        width: 100%;
        padding: 0 32px;
        display: flex;
        justify-content: space-between;
        >div{
            background: rgba(255, 255, 255, 0.2);
            width: 45px;
            height: 45px;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
            user-select: none;
            cursor: pointer;
        }
    }
    .productImg{
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

export const Content = styled.div`
    position: relative;
    z-index: 3;
    >*{
        color: #fff;
    }
    .title{
        font-size: 44px;
        font-weight: 700;
    }
    .subtitle{
        font-size: 16px;
        font-weight: 400;
    }
    .settings{
        margin: 24px 0;
        display: inline-flex;
        column-gap: 24px;
        >div{
            display: inline-flex;
            flex-direction: column;
            align-items: center;
            row-gap: 6.7px;
        }
    }
    .price{
        font-size: 28px;
        font-weight: 600;
        margin-bottom: 34px;
    }
    .readmore>button{
        height: 50px;
        width: 178px;
    }
`

export const DarkLayer = styled.div`
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.65);
`
export const Bed = styled(bed)``
export const Bath = styled(bath)``
export const Car = styled(car)``
export const Area = styled(area)``
export const Arrow = styled(arrowIcon)`
    transform: ${({right}) => right && "rotateY(-180deg)"}
`
