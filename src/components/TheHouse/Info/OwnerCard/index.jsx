import { Box, User, Fill } from "./style"
import user from "../../../../assets/user.jpg"
import { Input } from "../../../Generic"
import { Checkbox } from "antd"
import { Button } from "../../../Generic"

const OwnerCard = () => {
    return (
        <Box>
            <User>
                <div className="image">
                    <div className="ownerImg">
                        <img src={user} alt="owner" className="owner" />
                    </div>
                </div>
                <div>
                    <h3>Name</h3>
                    <span>(123)456-7890</span>
                </div>
            </User>
            <Fill>
                <Input placeholder="Name" name="name" typeInput="c" height="24px"/>
                <Input placeholder="Phone" name="phone" typeInput="c" height="24px"/>
                <Input placeholder="Email" name="email" typeInput="c" height="24px"/>
            </Fill>
            <h4>Message</h4>
            <Input placeholder="Your message" name="area" elem="area" height={"70px"} width={"100%"} style={{padding: "3px 0 0 5px"}}/>
            <br /><br />
            <Checkbox>By submitting this form<br />I agree to Terms of Use</Checkbox>
            <br /><br />
            <Button width={"232px"} height={"44px"}>Send request</Button>
        </Box>
    )
}

export default OwnerCard;