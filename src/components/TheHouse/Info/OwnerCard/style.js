import styled from "styled-components";

export const Box = styled.div`
    width: 280px;
    height: 476px;
    margin-left: 20px;
    padding: 18px;
    border: 1px solid var(--grayBorder);
    border-radius: 3px;
    .image{
        .ownerImg{
            width: 52px;
            height: 52px;
        }
        img{
            border: 2px solid #fff;
            border-radius: 50%;
            width: 100%;
        }
    }
`

export const User = styled.div`
    display: flex;
    column-gap: 10px;
    align-items: center;
    h3{
        margin: 0;
        font-weight: 600;
    }
`

export const Fill = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 22px;
    margin-top: 28px;
`