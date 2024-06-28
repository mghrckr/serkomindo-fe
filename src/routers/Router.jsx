import { createBrowserRouter, redirect } from "react-router-dom";

import UserHome from "../views/UserHome"
import Layout from "../components/Layout";
import { Login } from "../views/Login";
import CekProduk from "../views/AboutUs";
import AboutUs from "../views/AboutUs";
import Team from "../views/Team";
import Services from "../views/Services";
import EventPelatihan from "../views/Event Pelatihan";
import Portofolio from "../views/Portofolio";


// const requireAuth = (element) =>
//     localStorage.access_token ? element : <Navigate to="/login" />;

const Router = createBrowserRouter([
    {
        element: <Layout />,
        // loader: () => (localStorage.access_token ? null : redirect("/login")),
        children: [
            {
                path: '/portofolio',
                element: <Portofolio />
            },
            {
                path: '/eventPelatihan',
                element: <EventPelatihan />
            },
            {
                path: '/services',
                element: <Services />
            },
            {
                path: '/team',
                element: <Team />
            }
        ]
    },
    {
        path: '/',
        element: <UserHome />
    },
    {
        path: '/aboutus',
        element: <AboutUs />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/cek/:id/:startDate/:endDate',
        element: <CekProduk />
    },
]);



export default Router
