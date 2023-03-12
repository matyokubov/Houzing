import { Box, User, Fill } from "./style"
import user from "../../../../assets/user.jpg"
import { Input } from "../../../Generic"

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
            <Input placeholder="Your message" name="area" elem="area" height={"70px"} style={{padding: "3px 0 0 5px"}}/>
        </Box>
    )
}

export default OwnerCard;