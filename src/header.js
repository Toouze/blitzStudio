import Navbar from './elems/navbar'
import MoreBtn from './elems/more-btn'

function Header() {
    return(
        <>
        <div className="header">
            <Navbar />
            <MoreBtn />
        </div>
        </>
    )
}

export default Header