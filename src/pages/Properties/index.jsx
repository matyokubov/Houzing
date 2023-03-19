import { useEffect } from 'react';
import Properties from '../../components/Properties';
import ToTop from "../../components/HOC/fixScroll"

export const PropertiesPage = ({autoRunFunc}) => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => autoRunFunc(), [])
    return <Properties/>
};

export default ToTop(PropertiesPage);