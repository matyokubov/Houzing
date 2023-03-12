import styled from "styled-components";

const customImgsStyles = ({dcount}) => {
    switch (dcount) {
        case 0:
            break;
        case 1:
            return `
                >.secondary{
                    display: none;
                }
                >.primary{
                    width: 100%;
                    >div{
                        width: 100%;
                    }
                }
            `
        case 2:
            return `
                >.secondary{
                    display: none;
                }
                >.primary{
                    width: 100%;
                    >div{
                        width: 100%;
                    }
                }
            `
        case 3:
            return `
                >.secondary{
                    flex-wrap: nowrap;
                    flex-direction: column;
                }
                .react-fullscreen-slideshow-modal-gallery{
                    margin: 7px 0 0 7px;
                }
            `
        case 4:
            return `
                >.secondary{
                    justify-content: center;
                    column-gap: 5px;
                    row-gap: 5px;
                }
                >.primary{
                    margin-left: 1rem;
                }
                @media (max-width: 990px) {
                    align-items: center;
                    flex-direction: column;
                    .primary{
                        margin: 0;
                    }
                }
            `
        case 5:
            return `
                >.secondary{
                    justify-content: center;
                    column-gap: 5px;
                    row-gap: 5px;
                }
                >.primary{
                    margin-left: 1rem;
                }
            `
        default:
            break;
    }
}

export const Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    .react-fullscreen-slideshow-modal-gallery{
        /* background-image: url(${({fillwhite}) => fillwhite}); */
        background: linear-gradient(212deg, rgba(2,48,147,1) 0%, rgba(63,160,227,1) 100%);
    }
    ${customImgsStyles}
`

export const Primary = styled.div``
export const Secondary = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 5px;
    .react-fullscreen-slideshow-modal-gallery{
        height: 190px;
        width: 280px;
    }
`