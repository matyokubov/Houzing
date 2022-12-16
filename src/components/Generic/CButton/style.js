import styled from "styled-components";

export const Button = styled.div`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background-color: var(--gray1);
    transition-duration: 300ms;
    cursor: pointer;
    :hover{
        background-color: #dfdfdf;
    }
`