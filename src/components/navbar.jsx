
export const Navbar = () => {
    const Routes = [
        {name: "About me", link: "#about"},
        {name: "Portfolio", link: "#portfolio"},
    ]
    return(
        <div className={"bg-gray-100 sticky top-0"}>
            <div className={"max-w-6xl mx-auto"}>
                <div className={"flex justify-between"}>
                    <div className={"flex space-x-4"}>
                        <div className={"flex items-center"}>Logo</div>
                        <div className={"flex items-center space-x-3"}>
                            {Routes.map((route) => (
                                <span className={"py-4 px-3 text-gray-800"} key={route.name}>
                                    <a href={route.link}>{route.name}</a>
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className={"flex items-center space-x-3"}>
                        <span className={"py-4 px-3 text-gray-100"}>
                            <a className={"bg-purple-500 rounded-2xl py-2 px-4"} href={"#footer"}>Buy me a coffee!</a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}