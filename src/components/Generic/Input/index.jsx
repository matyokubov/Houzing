import { Input, Container } from "./style";

const InputComp = ({on, classic, value, defaultValue, placeholder, icon, className}) => {
    return (
        <Container className={className}>
            {
                icon && <div className="icon">
                    {icon}
                </div>
            }
            <Input 
                onClick={on}
                type={"text"}
                classic={classic}
                value={value}
                defaultValue={defaultValue}
                placeholder={placeholder}
            />
        </Container>
    )
}

export default InputComp;