import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {ErrorPage} from "./components/errorPage.jsx";
import {Portfolio} from "./components/portfolio.jsx";
import {Footer} from "./components/footer.jsx";
import {About} from "./components/about.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <ErrorPage/>,
        children: [{
            index: true
        }]
    },
    {
        path: "/about",
        element: <About/>,
        errorElement: <ErrorPage/>,
        children: [{
            index: true
        }]
    },
    {
        path: "/portfolio",
        element: <Portfolio/>,
        errorElement: <ErrorPage/>,
        children: [{
            index: true
        }]
    },
    {
        path: "/footer",
        element: <Footer/>,
        errorElement: <ErrorPage/>,
        children: [{
            index: true
        }]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
