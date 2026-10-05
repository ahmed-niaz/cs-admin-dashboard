import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import { Categories } from "./pages/categories";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>
    },
    {
        path: '/categories',
        element: <Categories/>
    }
])