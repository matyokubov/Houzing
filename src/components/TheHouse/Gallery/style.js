import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    .react-fullscreen-slideshow-modal-gallery{
        background-image: url(${({fillwhite}) => fillwhite});
    }
`

export const Primary = styled.div`
    
`
export const Secondary = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 580px;
    height: 280px;
    .react-fullscreen-slideshow-modal-gallery{
        height: 190px;
        width: 280px;
    }
`