import styled from "styled-components";
import { Select } from "antd";

export const Houses = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`

export const Head = styled.div`
    margin-top: 60px;
    text-align: center;
    >div{
        display: flex;
        justify-content: space-between;
        margin: 70px 0 16px 0;
        p{
            margin: 0;
            font-weight: 400;
        }
        h1{
            margin: 0 0 8px 0;
            font-weight: 700;
        }
    }
`

export const AntSelect = styled(Select)`
    min-width: 150px;
    max-width: 150px;
    width: 100%;
`