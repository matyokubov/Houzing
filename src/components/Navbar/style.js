import styled from "styled-components";

export const Container = styled.div`
    background-color: var(--themeColor);
    a{
        color: #fff;
        text-decoration: none;
        padding: 0 32px;
    }
`

export const Main = styled.div`
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 16px;
    img{
        cursor: pointer;
    }
    .active {
        color: var(--routeActiveColor);
    }
`