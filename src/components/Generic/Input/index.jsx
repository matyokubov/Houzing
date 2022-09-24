import { Input, Container } from "./style";

const InputComp = ({on, classic, value, defaultValue, placeholder, icon, className, name}) => {
    return (
        <Container className={className}>
            {
                icon && <div className="icon">
                    {icon}
                </div>
            }
            <Input 
                onChange={on}
                type={"text"}
                classic={classic}
                value={value}
                defaultValue={defaultValue}
                placeholder={placeholder}
                name={name}
            />
        </Container>
    )
}

export default InputComp;