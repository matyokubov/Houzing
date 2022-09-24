import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    padding: var(--containerPadding);
    background-color: #0D263B;
    a{
        color: #fff;
        text-decoration: none;
        padding: 0 32px;
    }
`

export const Main = styled.div`
    width: 100%;
    height: 64px;
    max-width: 1440px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 16px;
    .active {
        color: #b8ff06;
    }
`