import { Button, Input } from "../Generic";
import { Container, Menu, Btns } from "./style";
import { Dropdown } from "antd";
import { ReactComponent as HousesIcon } from '../../assets/icons/houses.svg';
import { ReactComponent as FilterIcon } from '../../assets/icons/setting-lines.svg';
import { ReactComponent as SearchIcon } from '../../assets/icons/search.svg';
import { useRef } from "react";

const Home = () => {
  const country = useRef()
  const region = useRef()
  const city = useRef()
  const zipCode = useRef()
  const rooms = useRef()
  const size = useRef()
  const sort = useRef()
  const minPrice = useRef()
  const maxPrice = useRef()

  const onSubmit = () => {
    let advancedFilterData = {
      country: country.current.value,
      region: region.current.value,
      city: city.current.value,
      zipCode: zipCode.current.value,
      rooms: rooms.current.value,
      size: size.current.value,
      sort: sort.current.value,
      minPrice: minPrice.current.value,
      maxPrice: maxPrice.current.value,
    }
    console.log(advancedFilterData);
  }
  const advancedMenu = (
    <Menu>
      <div>
        <Menu.Item>
          <span>Address</span>
          <div className="inputs-group">
            <Input placeholder="Country" className={"country"} name="country" ref={country}/>
            <Input placeholder="Region" className={"region"} name="region" ref={region}/>
            <Input placeholder="City" className={"city"} name="city" ref={city}/>
            <Input placeholder="Zip Code" className={"zip_code"} name="zip_code" ref={zipCode}/>
          </div>
        </Menu.Item>
        <Menu.Item>
          <span>Apartment info</span>
          <div className="inputs-group">
            <Input placeholder="Rooms" className={"rooms"} name="rooms" ref={rooms}/>
            <Input placeholder="Size" className={"size"} name="size" ref={size}/>
            <Input placeholder="Sort" className={"sort"} name="sort" ref={sort}/>
          </div>
        </Menu.Item>
        <Menu.Item>
          <span>Price</span>
          <div className="inputs-group">
            <Input placeholder="Min price" className={"minprice"} name="minprice" ref={minPrice}/>
            <Input placeholder="Max price" className={"maxprice"} name="maxprice" ref={maxPrice}/>
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