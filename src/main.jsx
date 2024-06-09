import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {ErrorPage} from "./components/errorPage.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <ErrorPage/>
    },
    {
        path: "/about",
        element: <App/>,
        errorElement: <ErrorPage/>
    },
    {
        path: "/portfolio",
        element: <App/>,
        errorElement: <ErrorPage/>
    },
    {
        path: "/footer",
        element: <App/>,
        errorElement: <ErrorPage/>
    },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
