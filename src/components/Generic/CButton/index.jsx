import { Button } from "./style";

const CButton = ({on, icon, width, height, style}) => {
    return (
        <Button onClick={on} width={width} height={height} style={style}>{icon}</Button>
    )
}

export default CButton;