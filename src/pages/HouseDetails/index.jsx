import { useEffect } from 'react';
import TheHouse from '../../components/TheHouse';
import ToTop from "../../components/HOC/fixScroll"

export const HouseDetails = ({autoRunFunc}) => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => autoRunFunc(), [])
    return <TheHouse/>
};

export default ToTop(HouseDetails);