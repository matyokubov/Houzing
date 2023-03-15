import "./../Locations/index.css"
import { CButton } from "./../../Generic"
import {
    AirConditioning,
    Barbeque,
    Dryer,
    Gym,
    Lawn,
    Laundry,
    Microwave,
    OutdoorShower,
    Refrigerator,
    Sauna,
    SwimmingPool,
    TVCable,
    Washer,
    WiFi,
    WindowCoverings,
    DiningRoom,
    Box
} from "./style"
const Features = () => {
    return (
        <Box>
            <h2>Features</h2>
            <div className="options">
                <div>
                    <div>
                        <CButton icon={<AirConditioning/>}/>
                        <span>Air Conditioning</span>
                    </div>
                    <div>
                        <CButton icon={<Barbeque/>}/>
                        <span>Barbeque</span>
                    </div>
                    <div>
                        <CButton icon={<Dryer/>}/>
                        <span>Dryer</span>
                    </div>
                    <div>
                        <CButton icon={<Gym/>}/>
                        <span>Gym</span>
                    </div>
                </div>
                <div>
                    <div>
                        <CButton icon={<Lawn/>}/>
                        <span>Lawn</span>
                    </div>
                    <div>
                        <CButton icon={<Laundry/>}/>
                        <span>Laundry</span>
                    </div>
                    <div>
                        <CButton icon={<Microwave/>}/>
                        <span>Microwave</span>
                    </div>
                    <div>
                        <CButton icon={<OutdoorShower/>}/>
                        <span>Outdoor Shower</span>
                    </div>
                </div>
                <div>
                    <div>
                        <CButton icon={<Refrigerator/>}/>
                        <span>Refrigerator</span>
                    </div>
                    <div>
                        <CButton icon={<Sauna/>}/>
                        <span>Sauna</span>
                    </div>
                    <div>
                        <CButton icon={<SwimmingPool/>}/>
                        <span>Swimming Pool</span>
                    </div>
                    <div>
                        <CButton icon={<TVCable/>}/>
                        <span>TV Cable</span>
                    </div>
                </div>
                <div>
                    <div>
                        <CButton icon={<Washer/>}/>
                        <span>Washer</span>
                    </div>
                    <div>
                        <CButton icon={<WiFi/>}/>
                        <span>WiFi</span>
                    </div>
                    <div>
                        <CButton icon={<WindowCoverings/>}/>
                        <span>Window Coverings</span>
                    </div>
                    <div>
                        <CButton icon={<DiningRoom/>}/>
                        <span>Dining Room</span>
                    </div>
                </div>
            </div>
        </Box>
    )
}

export default Features;