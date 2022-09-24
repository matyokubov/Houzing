import { Button, Input } from "../Generic";
import { Container, Menu, Btns } from "./style";
import { Dropdown } from "antd";
import { ReactComponent as HousesIcon } from '../../assets/icons/houses.svg';
import { ReactComponent as FilterIcon } from '../../assets/icons/setting-lines.svg';
import { ReactComponent as SearchIcon } from '../../assets/icons/search.svg';

const Home = () => {
  const advancedMenu = (
    <Menu>
      <div>
        <Menu.Item>
          <span>Address</span>
          <div className="inputs-group">
            <Input placeholder="Country" className={"country"} name="country"/>
            <Input placeholder="Region" className={"reqion"} name="region"/>
            <Input placeholder="City" className={"city"} name="city"/>
            <Input placeholder="Zip Code" className={"zip_code"} name="zip_code"/>
          </div>
        </Menu.Item>
        <Menu.Item>
          <span>Apartment info</span>
          <div className="inputs-group">
            <Input placeholder="Rooms" className={"rooms"} name="rooms"/>
            <Input placeholder="Size" className={"size"} name="size"/>
            <Input placeholder="Sort" className={"sort"} name="sort"/>
          </div>
        </Menu.Item>
        <Menu.Item>
          <span>Price</span>
          <div className="inputs-group">
            <Input placeholder="Min price" className={"minprice"} name="minprice"/>
            <Input placeholder="Max price" className={"maxprice"} name="maxprice"/>
          </div>
        </Menu.Item>
      </div>
      <Btns>
        <div>
          <Button type={"light"} style={{borderColor: "var(--themeColor)"}}>Cancel</Button>
          <Button>Cancel</Button>
        </div>
      </Btns>
    </Menu>
  )
  return (
    <Container>
      <Input placeholder="Enter an address, neighborhood, city, or ZIP code" icon={<HousesIcon/>} className={"filter"} />
      <div className="btn-group">
        <Dropdown overlay={advancedMenu} placement={"bottomRight"} arrow={{ pointAtCenter: true }}>
          <div>
            <Button type={"light"}>
              <FilterIcon/>Advanced
            </Button>
          </div>
        </Dropdown>
        <Button width={"180px"}>
          <SearchIcon/>
          Search
        </Button>
      </div>
    </Container>
  )
};

export default Home;