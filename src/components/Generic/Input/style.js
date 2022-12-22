import styled from "styled-components"

const types = ({typeInput}) => {
    switch(typeInput){
        case "c":
            return `
                border: 0;
                border-bottom: 1px solid #E6E9EC;
                padding: 0;
            `
        default:
            return `
                border: 1px solid #E6E9EC;
                border-radius: 3px;
            `
    }
}

export const Container = styled.div`
    font-size: 14px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding-left: 15px;
    column-gap: 9px;
    >input{
        border: 0;
        color: var(--themeColor);
        outline: none;
    }
    height: ${({height}) => height ? height : "44px"};
    width: ${({width}) => width && width};
    ${types}
`

export const Input = styled.input`
    height: 100%;
    width: 100%;
    font-family: 'Montserrat', sans-serif;
`