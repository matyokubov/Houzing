import styled from "styled-components";
import { ReactComponent as houseIc } from "../../assets/categories/house.svg";
import { ReactComponent as apartmentIc } from "../../assets/categories/apartment.svg";
import { ReactComponent as officeIc } from "../../assets/categories/office.svg";
import { ReactComponent as villaIc } from "../../assets/categories/villa.svg";

export const Container = styled.div`
    text-align: center;
    .categories{
        display: flex;
        justify-content: space-between;
        >div{
            position: relative;
            display: inline-flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            row-gap: 24px;
            width: 280px;
            height: 350px;
            box-shadow: 0px 20px 38px rgba(0, 0, 0, 0.06), 0px 7px 46px rgba(0, 0, 0, 0.06), 0px 8px 15px rgba(0, 0, 0, 0.06);
            border-radius: 3px;
            background-position: center;
            background-size: cover;
            color: #fff;
            font-size: 18px;
            font-weight: 600;
            cursor: pointer;
            svg{
                margin-top: 3.4rem;
            }
        }
        .layer{
            position: absolute;
            width: 100%;
            height: 100%;
            z-index: 2;
        }
    }
`

export const CottageIc = styled(houseIc)``
export const DomIc = styled(apartmentIc)``
export const OfficeIc = styled(officeIc)``
export const VillaIc =   styled(villaIc)``
