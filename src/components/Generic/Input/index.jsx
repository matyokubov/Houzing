import { forwardRef } from "react";
import { Input, Container } from "./style";

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
            height
        },
        ref
    ) => {
        return (
            <Container className={className} typeInput={typeInput} width={width} height={height}>
                {
                    icon && <div className="icon">
                        {icon}
                    </div>
                }
                <Input 
                    ref={ref}
                    type={"text"}
                    value={value}
                    defaultValue={defaultValue}
                    placeholder={placeholder}
                    name={name}
                    onKeyPress={onPress}
                />
            </Container>
        )
    }
)

export default InputComp;