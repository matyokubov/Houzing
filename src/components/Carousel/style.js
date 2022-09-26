import styled from "styled-components";
import { ReactComponent as arrowIcon } from "../../assets/icons/arrow.svg";

export const Container = styled.div`
    position: relative;
    height: 570px;
    user-select: none;
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
`

export const Arrow = styled(arrowIcon)`
    transform: ${({right}) => right && "rotateY(-180deg)"}
`