import {Link} from "react-router-dom";

export const Navbar = () => {
    const Routes = [
        {name: "About me", link: "/about"},
        {name: "Portfolio", link: "/portfolio"},
        {name: "Buy me coffee", link: "/footer"},
    ]
    return(
        <div className={"bg-gray-100"}>
            <div className={"max-w-6xl mx-auto"}>
                <div className={"flex justify-between"}>
                    <div className={"flex space-x-4"}>
                        <div className={"flex items-center"}>Logo</div>
                        <div className={"flex items-center space-x-3"}>
                            {Routes.map((route) => (
                                <span className={"py-4 px-3 text-gray-800"} key={route.name}>
                                    <Link to={route.link}>{route.name}</Link>
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className={"text-black"}>Second navbar</div>
                </div>
            </div>
        </div>
    )
}