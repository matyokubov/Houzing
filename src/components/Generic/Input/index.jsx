import { forwardRef } from "react";
import { Input, Container, Area } from "./style";

const InputComp = forwardRef(
    (
        {
            typeInput,
            value,
            defaultValue,
            placeholder,
            icon,
            className,
            name,
            onPress,
            width,
            height,
            elem="input",
            style
        },
        ref
    ) => {
        return (
            <Container className={className} typeInput={typeInput} width={width} height={height} style={style}>
                {
                    icon && <div className="icon">
                        {icon}
                    </div>
                }
                {
                    elem === "input" ? 
                    <Input 
                        ref={ref}
                        type={"text"}
                        value={value}
                        defaultValue={defaultValue}
                        placeholder={placeholder}
                        name={name}
                        onKeyPress={onPress}
                    /> : elem === "area" ?
                    <Area
                        ref={ref}
                        value={value}
                        defaultValue={defaultValue}
                        placeholder={placeholder}
                        name={name}
                        onKeyPress={onPress}
                    ></Area> : <></>
                }
            </Container>
        )
    }
)

export default InputComp;