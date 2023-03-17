import styled from "styled-components";

export const Container = styled.div`
    position: sticky;
    top: 0;
    z-index: 99;
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