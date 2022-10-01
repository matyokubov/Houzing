import styled from "styled-components";

export const Houses = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`

export const Head = styled.div`
    margin-top: 60px;
    text-align: center;
    >div{
        display: flex;
        justify-content: space-between;
        margin: 70px 0 16px 0;
        p{
            margin: 0;
            font-weight: 400;
        }
        h1{
            margin: 0 0 8px 0;
            font-weight: 700;
        }
    }
`