import { Button, Input } from "../Generic";
import { Container, Menu, Btns } from "./style";
import { Dropdown } from "antd";
import { ReactComponent as HousesIcon } from '../../assets/icons/houses.svg';
import { ReactComponent as FilterIcon } from '../../assets/icons/setting-lines.svg';
import { ReactComponent as SearchIcon } from '../../assets/icons/search.svg';
import { useRef } from "react";

const Home = () => {
  const advancedFilter = useRef({})
  const setFilterData = ({target}) => {
    advancedFilter.current = {...advancedFilter.current, [target.name]: target.value}
  }
  const onSubmit = () => {
    console.log(advancedFilter.current);
  }
  const advancedMenu = (
    <Menu>
      <div>
        <Menu.Item>
          <span>Address</span>
          <div className="inputs-group">
            <Input placeholder="Country" className={"country"} name="country" on={setFilterData}/>
            <Input placeholder="Region" className={"reqion"} name="region" on={setFilterData}/>
            <Input placeholder="City" className={"city"} name="city" on={setFilterData}/>
            <Input placeholder="Zip Code" className={"zip_code"} name="zip_code" on={setFilterData}/>
          </div>
        </Menu.Item>
        <Menu.Item>
          <span>Apartment info</span>
          <div className="inputs-group">
            <Input placeholder="Rooms" className={"rooms"} name="rooms" on={setFilterData}/>
            <Input placeholder="Size" className={"size"} name="size" on={setFilterData}/>
            <Input placeholder="Sort" className={"sort"} name="sort" on={setFilterData}/>
          </div>
        </Menu.Item>
        <Menu.Item>
          <span>Price</span>
          <div className="inputs-group">
            <Input placeholder="Min price" className={"minprice"} name="minprice" on={setFilterData}/>
            <Input placeholder="Max price" className={"maxprice"} name="maxprice" on={setFilterData}/>
          </div>
        </Menu.Item>
      </div>
      <Btns>
        <div>
          <Button type={"light"} style={{borderColor: "var(--themeColor)"}}>Cancel</Button>
          <Button on={onSubmit}>Submit</Button>
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