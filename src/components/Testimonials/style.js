import styled from 'styled-components'
import { ReactComponent as arrowIcon } from "../../assets/icons/arrowb.svg";

export const Container = styled.div`
    padding-top: 48px;
    text-align: center;
    background-color: var(--gray2);
    >.main{
        padding: 0 53px;
    }
    .group{
        display: flex;
        justify-content: space-between;
        column-gap: 20px;
        height: 285px;
        margin: 0 53px;
    }
`

export const Move = styled.div`
    width: 45px;
    height: 45px;
    border-radius: 50%;
    border: 1px solid var(--grayBorder);
    background-color: #fff;
    box-shadow: 0px 10px 50px rgba(13, 38, 59, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`

export const MoveControl = styled.div`
    position: relative;
    top: -142.5px;
    display: flex;
    justify-content: space-between;
    width: 100%;
`

export const Card = styled.div`
    width: 380px;
    .description{
        width: 100%;
        height: 197px;
        position: relative;
        background: #FFFFFF;
        box-shadow: 0px 10px 50px rgba(13, 38, 59, 0.1);
        border-radius: 3px;
        display: inline-flex;
        flex-direction: column;
        align-items: center;
        p{
            padding-top: 40px;
            width: 284px;
            height: 96px;
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;
        }
    }
    .image{
        display: flex;
        flex-direction: column;
        align-items: center;
        position: absolute;
        bottom: -5.3rem;
        .ownerImg{
            width: 38px;
            height: 38px;
        }
        img{
            border: 2px solid #fff;
            border-radius: 50%;
            width: 100%;
        }
        h5{
            margin-top: 1rem;
            margin-bottom: 0;
            font-size: 16px;
            font-weight: 600;
            color: var(--themeColor);
        }
        h6{
            margin: 0;
            font-size: 16px;
            font-weight: 400;
            color: #696969;
        }
    }
`

export const Arrow = styled(arrowIcon)`
    transform: ${({right}) => right && "rotateY(-180deg)"}
`