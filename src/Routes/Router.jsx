import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../Pages/Home";
import MainLayout from "../Layout/MainLayout";
import Apps from "../Pages/Apps";
import Installation from "../Pages/Installation";
import AppDetails from "../Pages/AppDetails";
import ErrorLoading from "../Pages/ErrorLoading";
import LoadingLoader from "../component/LoadingLoader";
import ErrorAppFinding from "../component/ErrorAppFinding";

const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        errorElement: <ErrorLoading></ErrorLoading>,
        hydrateFallbackElement: <LoadingLoader></LoadingLoader>,
        children: [
            {
                index: true,
                loader: ()=>fetch('/data.json').then(res=>res.json()).then(data=>data),
                Component: Home
            },
            {
                path: '/home',
                loader: ()=>fetch('/data.json').then(res=>res.json()).then(data=>data),
                Component: Home
            },
            {
                path: '/apps',
                
                Component: Apps
            },
            {
                path: '/installation',
                loader: ()=>fetch('/data.json').then(res=>res.json()).then(data=>data),
                Component: Installation
            },
            {
                path: '/app-details/:id',
                 errorElement:<ErrorAppFinding></ErrorAppFinding>,
                loader: ()=>fetch('/data.json').then(res=>res.json()).then(data=>data),
                Component: AppDetails,
                
            },
            // {
            //     path: '*',
            //     Component: ErrorAppFinding
            // }
        ]
        
    }
]);

export { router };