import { Container } from './style'

const Loader = ({load, children}) => {
    return (
        <Container load={load}>
            <h1>{children ? children : "Please, wait..."}</h1>
        </Container>
    )
}

export default Loader;