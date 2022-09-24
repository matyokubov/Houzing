import { Button } from "./style";

const ButtonComp = ({on, type, children, width, style}) => {
    return (
        <Button onClick={on} type={type} width={width} style={style}>{children}</Button>
    )
}

export default ButtonComp;