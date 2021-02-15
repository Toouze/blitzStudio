function Navbar() {
    return(
        <>
        <div className="navbar" id="navbar">
            <div className="nav__items">
                <div className="nav__home">HOME</div>
                <div className="nav__about">ABOUT ME</div>
                <div className="nav__portfolio">PORTFOLIO</div>
                <div className="nav__contact"> CONTACT</div>
            </div>
            <div className="nav__line" id="nav__line"></div>
        </div>
        <div className="material-icons menu" id="menu">drag_handle MENU</div>
        </>
    );
}

export default Navbar