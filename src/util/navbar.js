import HomePage from '../pages/Home';
import Properties from '../pages/Properties';
import logo from "../assets/logo.png"

export const LogoImg = logo;

export const navbar = [
  {
    id: 1,
    element: <HomePage />,
    title: 'Home',
    path: '/home',
    private: false,
    hidden: false,
  },
  {
    id: 2,
    element: <Properties />,
    title: 'Properties',
    path: '/properties',
    private: false,
    hidden: false,
  },
  {
    id: 3,
    element: <h1>sign in comp</h1>,
    title: 'Sign In',
    path: '/signin',
    private: false,
    hidden: true,
  },
];