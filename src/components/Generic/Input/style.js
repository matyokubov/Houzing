import styled from "styled-components"

export const Container = styled.div`
    font-size: 14px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #E6E9EC;
    border-radius: 3px;
    height: 44px;
    padding-left: 15px;
    column-gap: 9px;
    >input{
        border: 0;
        color: var(--themeColor);
        outline: none;
    }
`

export const Input = styled.input`
    height: 100%;
    width: 100%;
    font-family: 'Montserrat', sans-serif;
`