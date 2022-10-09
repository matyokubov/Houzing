import { Button, Input } from "../Generic";
import { Container, Menu, Btns, AntSelect } from "./style";
import { Dropdown } from "antd";
import { ReactComponent as HousesIcon } from '../../assets/icons/houses.svg';
import { ReactComponent as FilterIcon } from '../../assets/icons/setting-lines.svg';
import { ReactComponent as SearchIcon } from '../../assets/icons/search.svg';
import { useRef, useState, useContext } from "react";
import { setParam } from "../../hooks/onSearch"
import { useNavigate } from "react-router-dom";
import { useSearch } from "../../hooks/useSearch";
import { ContextAPI } from "../../context";

const Filter = () => {
  const currentProcess = useRef(
    {
      message: "Loading... 1",
      success: false,
      data: [],
      map: {
        size: 0,
        total_elements: 0,
        total_pages: 0
      }
    }
  )
  const { setHousesList } = useContext(ContextAPI)
  const address = useRef()
  const country = useRef()
  const region = useRef()
  const city = useRef()
  const zipCode = useRef()
  const rooms = useRef()
  const size = useRef()
  const sort = useRef("")
  const minPrice = useRef()
  const maxPrice = useRef()
  const [visible, setVisible] = useState(false)
  const handleVisibleChange = (flag) => {
    setVisible(flag);
  };
  const navigate = useNavigate()
  const query = useSearch()
  const onSubmit = () => {
    let advancedFilterData = {
      country: country.current.value,
      region: region.current.value,
      city: city.current.value,
      zipCode: zipCode.current.value,
      room: rooms.current.value,
      size: size.current.value,
      sort: sort.current.value,
      min_price: minPrice.current.value,
      max_price: maxPrice.current.value,
    }
    Object.keys(advancedFilterData).forEach((query, i) => {
      navigate(`/properties${setParam(query, Object.values(advancedFilterData)[i])}`)
    })
    setHousesList(currentProcess.current)
    console.log("advanced search");
  }
  const quickSearch = () => {
    let data = {
      address: address.current.value
    }
    Object.keys(data).forEach((query, i) => {
      navigate(`/properties${setParam(query, Object.values(data)[i])}`)
    })
    setHousesList(currentProcess.current)
    console.log("quick search");
  }
  const changeSort = (value) => {
    sort.current = {value}
  }
  const advancedMenu = (
    <Menu>
      <div>
        <Menu.Item>
          <span>Address</span>
          <div className="inputs-group">
            <Input placeholder="Country" className={"country"} name="country" ref={country} defaultValue={query.get("country")}/>
            <Input placeholder="Region" className={"region"} name="region" ref={region}  defaultValue={query.get("region")}/>
            <Input placeholder="City" className={"city"} name="city" ref={city} defaultValue={query.get("city")}/>
            <Input placeholder="Zip Code" className={"zip_code"} name="zip_code" ref={zipCode} defaultValue={query.get("zip_code")}/>
          </div>
        </Menu.Item>
        <Menu.Item>
          <span>Apartment info</span>
          <div className="inputs-group">
            <Input placeholder="Rooms" className={"rooms"} name="rooms" ref={rooms} defaultValue={query.get("rooms")}/>
            <Input placeholder="Size" className={"size"} name="size" ref={size} defaultValue={query.get("size")}/>
            <AntSelect name="sort" onChange={changeSort} defaultValue={query.get("sort") || ""}>
                <AntSelect.Option value="">Default sort</AntSelect.Option>
                <AntSelect.Option value="asc">Asc</AntSelect.Option>
                <AntSelect.Option value="desc">Desc</AntSelect.Option>
            </AntSelect>
          </div>
        </Menu.Item>
        <Menu.Item>
          <span>Price</span>
          <div className="inputs-group">
            <Input placeholder="Min price" className={"minprice"} name="min_price" ref={minPrice} defaultValue={query.get("min_price")}/>
            <Input placeholder="Max price" className={"maxprice"} name="max_price" ref={maxPrice} defaultValue={query.get("min_price")}/>
          </div>
        </Menu.Item>
      </div>
      <Btns>
        <div>
          <Button type={"light"} style={{borderColor: "var(--themeColor)"}} on={() => setVisible(false)}>Cancel</Button>
          <Button on={onSubmit}>Submit</Button>
        </div>
      </Btns>
    </Menu>
  )
  return (
    <Container className="container">
      <Input placeholder="Enter an address, neighborhood, city, or ZIP code" icon={<HousesIcon/>} className={"filter"} ref={address}  defaultValue={query.get("address")}/>
      <div className="btn-group">
        <Dropdown overlay={advancedMenu} placement={"bottomRight"} arrow={{ pointAtCenter: true }} trigger="click" visible={visible} onVisibleChange={handleVisibleChange}>
          <div>
            <Button type={"light"}>
              <FilterIcon/>Advanced
            </Button>
          </div>
        </Dropdown>
        <Button width={"180px"} on={quickSearch}>
          <SearchIcon/>
          Search
        </Button>
      </div>
    </Container>
  )
};

export default Filter;