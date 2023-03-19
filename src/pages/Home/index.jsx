import { useEffect } from 'react';
import Home from '../../components/Home';
import ToTop from "../../components/HOC/fixScroll"

export const HomePage = ({autoRunFunc}) => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => autoRunFunc(), [])
    return <Home/>
};

export default ToTop(HomePage);