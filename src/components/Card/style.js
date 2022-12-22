import styled from "styled-components";
import { ReactComponent as bed } from "../../assets/icons/bed2.svg";
import { ReactComponent as bath } from "../../assets/icons/bath2.svg";
import { ReactComponent as car } from "../../assets/icons/car2.svg";
import { ReactComponent as area } from "../../assets/icons/area2.svg";
import { ReactComponent as full } from "../../assets/icons/full.svg";
import { ReactComponent as like } from "../../assets/icons/like.svg";

export const Container = styled.div`
    width: 380px;
    border: 1px solid var(--grayBorder);
    border-radius: 3px;
    margin-bottom: 48px;
    .style{
        padding: 20px 20px 0 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background-image: url(${({houseImg}) => houseImg});
        background-size: cover;
        background-position: center;
        height: 220px;
        .badges{
            display: flex;
            justify-content: space-between;
            >*{
                width: 73px;
                height: 23px;
                font-weight: 600;
                font-size: 10px;
                display: inline-flex;
                justify-content: center;
                align-items: center;
                border-radius: 3px;
            }
        }
        .image{
            display: flex;
            justify-content: flex-end;
            margin-bottom: -19px;
            .ownerImg{
                width: 38px;
                height: 38px;
            }
            img{
                border: 2px solid #fff;
                border-radius: 50%;
                width: 100%;
            }
        }
    }
    h2{
        font-size: 16px;
        font-weight: 600;
        margin: 0;
        margin-bottom: 4px !important;
        color: var(--themeColor);
    }
`

export const Info = styled.div`
    padding: 24px 20px 0 20px;
    h3{
        font-size: 14px;
        font-weight: 400;
        margin: 0;
        color: #696969;
    }
    .settings{
        margin: 16px 0;
        display: inline-flex;
        width: 100%;
        justify-content: space-between;
        color: #696969;
        >div{
            display: inline-flex;
            flex-direction: column;
            align-items: center;
            row-gap: 6.7px;
        }
    }
`

export const Prices = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 20px 6px 20px;
    .action{
        display: inline-flex;
        column-gap: 8px;
    }
`

export const Bed = styled(bed)``
export const Bath = styled(bath)``
export const Car = styled(car)``
export const Area = styled(area)``
export const Full = styled(full)``
export const Like = styled(like)``