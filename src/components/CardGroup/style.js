import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    h1{
        margin-bottom: 8px;
        font-weight: 600;
        font-size: 28px;
    }
    h2{
        margin-bottom: 2rem;
        font-size: 16px;
    }
    .cards{
        display: flex;
        justify-content: center;
        column-gap: 19px;
    }
`