import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    padding: 2.5rem 0;
`

export const Form = styled.form`
    background: #FFFFFF;
    border: 1px solid #E6E9EC;
    box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
    border-radius: 3px;
    padding: 0 30px;
    width: 580px;
    >h2{
        text-align: center;
        margin: 1.5rem auto;
    }
    >input, select{
        border-bottom-color: #E6E9EC;
        margin-bottom: 44px;
        &:focus{
            border-bottom-color: #0061DF;
        }
    }
    .mb16{
        margin-bottom: 16px !important; 
    }
    >:nth-last-child(2){
        margin-bottom: 32px;
    }
`

export const Submit = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px 40px;
    gap: 10px;
    width: 100%;
    height: 44px;
    margin-bottom: 48px;
    background: #0061DF;
    color: #fff;
    border: none;
    border-radius: 2px;
    cursor: pointer;
`

export const Remember = styled.div`
    display: flex;
    justify-content: space-between;
    color: #696969;
    label{
        padding: 0 4px;
        user-select: none;
    }
    .check{
        display: inline-flex;
        align-items: center;
    }
    .forgot>span{
        color: #0061DF;
        text-decoration: underline;
        font-weight: 600;
        cursor: pointer;
    }
`

export const Select = styled.select`
    width: 100%;
    border: 0;
    border-bottom: 2px solid;
    background-color: #fff;
    outline: 0;
    padding: 4px 0px;
    color: #757575;
`