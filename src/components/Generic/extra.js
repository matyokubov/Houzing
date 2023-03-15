import styled from 'styled-components';

const getThemeForInput = ({theme}) => {
    switch (theme) {
        case 'dark':
            return {
                background: '#4a4a4a',
                color: '#cbcbcb',
                border: "1px solid #646464"
            };
        case 'light':
            return {
                color: "#212529",
                backgroundColor: "#fff",
                border: "1px solid #ced4da"
            }
        case 'classic':
            return {
                color: "#212529",
                backgroundColor: "#fff",
                border: "none",
                borderBottom: "2px solid #adadad",
                borderRadius: 0,
                padding: "2px 0"
            }
        default:
            return {
                color: "#000",
                backgroundColor: "#fafafa",
                border: "1px solid #ced4da"
            }
    }
}

const getThemeForSpan = ({theme}) => {
    switch (theme) {
        case 'dark':
            return {
                background: '#3a3a3a',
                color: '#cbcbcb',
                border: "1px solid #646464"
            };
        case 'light':
            return {
                color: "#212529",
                backgroundColor: "#e9ecef",
                border: "1px solid #ced4da"
            }
        default:
            return {
                color: "#000",
                backgroundColor: "#fafafa",
                border: "1px solid #ced4da"
            }
    }
}

const getShadowColor = ({theme}) => {
    switch (theme) {
        case 'dark':
            return "0 0 0 0.25rem rgb(10 10 10 / 25%)"
        case 'light':
            return "0 0 0 0.25rem rgb(04 110 253 / 25%)"
        default:
            return "none"
    }
}

const changeWidth = ({width})=>!width ? "100%" : width

const Input = styled.input`
    display: block;
    width: ${changeWidth};
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    background-clip: padding-box;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out, border-bottom .25s ease-in-out;
    font-family: system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
    padding: 0.375rem 0.75rem;
    border-radius: 0.25rem;
    :focus {
        outline: 0;
        box-shadow: ${getShadowColor};
        border-bottom: ${({theme})=>theme==="classic" ? "2px solid #24808f" : "auto"};
        position: relative;
        z-index: 1;
    }
    ${getThemeForInput}
`;

const Hint = styled.span`
    font-family: system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
`

const MergeInputs = styled.div`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    width: ${changeWidth};
    >input{
        position: relative;
        flex: 1 1 auto;
        width: 1%;
        min-width: 0;
        border-radius: 0;
        ${getThemeForInput}
        :focus {
            position: relative;
            z-index: 1;
            outline: 0;
            box-shadow: ${getShadowColor};
        }
    }
    >span{
        user-select: none;
        display: flex;
        align-items: center;
        padding: 0.375rem 0.75rem;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
        text-align: center;
        white-space: nowrap;
        ${getThemeForSpan}
    }
    >:nth-last-child(1){
        border-radius: 0.25rem;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }
    >:nth-child(1){
        border-radius: 0.25rem;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }
    >*{
        margin-left: -1px;
    }
`

export {Input, MergeInputs, Hint};