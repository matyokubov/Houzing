import { useEffect } from 'react';
import Profile from '../../components/Profile';
import ToTop from "../../components/HOC/fixScroll"

export const ProfilePage = ({autoRunFunc}) => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => autoRunFunc(), [])
    return <Profile/>
};

export default ToTop(ProfilePage);