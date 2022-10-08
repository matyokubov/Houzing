import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    background-image: url(${({img}) => img});
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 570px;
    h1{
        color: #fff;
        margin-bottom: 48px;
    }
    .darklayer{
        position: absolute;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.65);
        z-index: 0;
    }
    .center{
        z-index: 1;
    }
`