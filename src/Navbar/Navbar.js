function Navbar() {
    return (
        <>
            <div className="header">
                <div className="weblogo">
                    <img src="image/Logo.png" alt="logo" />
                </div>
                <div className="logo">
                    <h1>LOGO</h1>
                </div>
                <div className="icone">
                    <a href=""> <i className="fa-solid fa-magnifying-glass"></i></a>
                    &nbsp;&nbsp;
                    <a href=""><i className="fa-regular fa-heart"></i></a>
                    &nbsp;&nbsp;
                    <a href=""><i className="fa-solid fa-bag-shopping"></i></a>
                    &nbsp;&nbsp;
                    <a href=""><i className="fa-regular fa-user"></i></a>
                    &nbsp;&nbsp;
                    <select name="">
                        <option>ENG</option>
                        <option>Hindi</option>
                    </select>
                </div>
            </div>
            <nav className="navbar navbar-expand-md navbar-light  ">

                {/* <!--mobile menu--> */}
                <button className="navbar-toggler" data-bs-target="#na" data-bs-toggle="collapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                {/* <!--menu div start--> */}
                <div className="nav navbar-collapse collapse" id="na">
                    <ul className="navbar-nav ms-auto text-center">
                        <li><a href="#" className="nav-link">Shop</a></li>
                        <li><a href="#" className="nav-link">Skills</a></li>
                        <li><a href="#" className="nav-link">Stories</a></li>
                        <li><a href="#" className="nav-link">About</a></li>
                        <li><a href="#" className="nav-link">contact us</a></li>

                    </ul>
                </div>
                {/* <!--menu div end--> */}


                {/* <!--container-fluid end--> */}

            </nav >
            <hr />


        </>
    )
}
export default Navbar;