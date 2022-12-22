import styled from 'styled-components'

export const Container = styled.div`
    height: ${({load}) => load ? "40vh" : "100vh"};
    margin-bottom: ${({load}) => load && "3rem"};
    display: flex;
    align-items: center;
    justify-content: center;
`