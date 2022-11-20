import { Button } from "./style";

const ButtonComp = ({on, type, children, width, height, style}) => {
    return (
        <Button onClick={on} type={type} width={width} height={height} style={style}>{children}</Button>
    )
}

export default ButtonComp;