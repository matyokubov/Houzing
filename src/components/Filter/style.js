import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    padding: var(--containerPadding);
    padding-top: 10px;
    padding-bottom: 10px;
    column-gap: 20px;
    .btn-group{
        display: flex;
        column-gap: 20px;
    }
    .filter{
        width: 100%;
        input::placeholder {
            color: var(--themeColor);
        }
        .icon{
            display: inline-flex;
            align-items: center;
        }
    }
`

const Menu = styled.div`
    border: 1px solid #fff;
    border-radius: 5px;
    background-color: #fff;
    span{
        font-size: 16px;
        font-weight: 600;
        margin-bottom: 10px;
    }
    .inputs-group > *{
        margin: 10px 20px 0 0;
    }
`
Menu.Item = styled.div`
    margin: 30px 30px 20px 30px;
`
export { Menu }

export const Btns = styled.div`
    display: flex;
    justify-content: flex-end;
    padding: 20px 8px 20px 0;
    background-color: var(--gray1);
    button{
        margin-right: 22px;
    }
`