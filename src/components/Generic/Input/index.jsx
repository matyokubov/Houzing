import { forwardRef } from "react";
import { Input, Container } from "./style";

const InputComp = forwardRef(
    (
        {
            classic,
            value,
            defaultValue,
            placeholder,
            icon,
            className,
            name,
            onPress
        },
        ref
    ) => {
        return (
            <Container className={className}>
                {
                    icon && <div className="icon">
                        {icon}
                    </div>
                }
                <Input 
                    ref={ref}
                    type={"text"}
                    classic={classic}
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