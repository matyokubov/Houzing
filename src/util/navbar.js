import Loader from '../components/Loader';
import React from 'react';
import logo from "../assets/logo.png";
const HomePage = React.lazy(() => import('../pages/Home'))
const Properties = React.lazy(() => import('../pages/Properties'))
const HouseDetails = React.lazy(() => import('../pages/HouseDetails'))
const ProfilePage = React.lazy(() => import('../pages/ProfilePage'))

// Logo
export const LogoImg = logo;

export const navbar = [
  {
    id: 1,
    element: (
      <React.Suspense fallback={<React.Fragment><Loader/></React.Fragment>}>
        <HomePage/>
      </React.Suspense>
    ),
    title: 'Home',
    path: '/home',
    private: false,
    hidden: false,
  },
  {
    id: 2,
    element: (
      <React.Suspense fallback={<React.Fragment><Loader/></React.Fragment>}>
        <Properties/>
      </React.Suspense>
    ),
    title: 'Properties',
    path: '/properties',
    private: false,
    hidden: false,
  },
  {
    id: 3,
    element: (
      <React.Suspense fallback={<React.Fragment><Loader/></React.Fragment>}>
        <ProfilePage/>
      </React.Suspense>
    ),
    title: 'Profile',
    path: '/profile',
    private: false,
    hidden: true,
  },
  {
    id: 4,
    element: (
      <React.Suspense fallback={<React.Fragment><Loader/></React.Fragment>}>
        <HouseDetails/>
      </React.Suspense>
    ),
    title: 'House Details',
    path: '/properties/:id',
    private: false,
    hidden: true,
  }
];