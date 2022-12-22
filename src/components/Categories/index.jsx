import { Container } from "./style";
import { useNavigate } from "react-router-dom";
import { ContextAPI } from '../../context'
import { useContext } from "react";

// Backgrounds
import houseImg from "../../assets/categories/house.png";
import apartmentImg from "../../assets/categories/apartment.png";
import officeImg from "../../assets/categories/office.png";
import villaImg from "../../assets/categories/villa.png";

// Icons
import { 
    CottageIc,
    DomIc,
    OfficeIc,
    VillaIc
} from "./style";

const Categories = () => {
    const navigate = useNavigate()
    const { setHousesList } = useContext(ContextAPI)
    const category = {
        cottage: {bg: houseImg, id: 4},
        dom: {bg: apartmentImg, id: 1},
        office: {bg: officeImg, id: 65},
        villa: {bg: villaImg, id: 2}
    }
    const categoryVeiw = ({target: {id}}) => {
        navigate(`/properties?category_id=${id}`)
        setHousesList({
            message: "Loading...",
            success: false,
            data: [],
            map: {
              size: 0,
              total_elements: 0,
              total_pages: 0
            }
        })
    }
    return (
        <Container className="container subcontainer">
            <h1>Category</h1>
            <h2>Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.</h2>
            <div className="categories">
                <div style={{backgroundImage: `url(${category.cottage.bg})`}}>
                    <div className="layer" id={category.cottage.id} onClick={categoryVeiw}></div>
                    <CottageIc/>
                    <span>Cottage</span>
                </div>
                <div style={{backgroundImage: `url(${category.dom.bg})`}}>
                    <div className="layer" id={category.dom.id} onClick={categoryVeiw}></div>
                    <DomIc/>
                    <span>Apartment</span>
                </div>
                <div style={{backgroundImage: `url(${category.office.bg})`}}>
                    <div className="layer" id={category.office.id} onClick={categoryVeiw}></div>
                    <OfficeIc/>
                    <span>Office</span>
                </div>
                <div style={{backgroundImage: `url(${category.villa.bg})`}}>
                    <div className="layer" id={category.villa.id} onClick={categoryVeiw}></div>
                    <VillaIc/>
                    <span>Villa</span>
                </div>
            </div>
        </Container>
    )
}

export default Categories;