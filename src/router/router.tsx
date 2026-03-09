import DashboardLayout from "@/Layouts/dashboard-layout";
import MainLayout from "@/Layouts/main-layout";
import AboutUsPage from "@/Pages/about-us-page";
import DashboardHomePage from "@/Pages/dashboard-home-page";
import DashboardOrdersPage from "@/Pages/dashboards-orders-page";
import DashboardProductsPage from "@/Pages/dashboards-prodect-page";
import HomePage from "@/Pages/home-page";
import { createBrowserRouter } from "react-router-dom";

export const router= createBrowserRouter( [
    {
        element: <MainLayout/>,
        children:[
            {path:"/", element:<HomePage/>},
            {path:"/about-us", element:<AboutUsPage/>},
            {path:"/products", element:<DashboardProductsPage/>},
        ],
    },
    {
        path:"/dashboard",
        element:  <DashboardLayout/>,
        children:[
            {index:true, element:<DashboardHomePage/>},
            {path:"/dashboard/products", element:<DashboardProductsPage/>},
            {path:"/dashboard/orders", element:<DashboardOrdersPage/>},
        ]
    }
])