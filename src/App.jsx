import {About} from "./components/about.jsx";
import {Routes, Route} from "react-router-dom";
import {Footer} from "./components/footer.jsx";
import {Portfolio} from "./components/portfolio.jsx";
import {Navbar} from "./components/navbar.jsx";

function App() {
  return (
    <div>
        <Navbar/>
        <About id={"about"}/>
        <Portfolio id={"portfolio"}/>
        <Footer id={"footer"}/>
    </div>
  )
}

export default App
