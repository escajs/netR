import React,{useEffect} from 'react'
import M from "materialize-css";
const NavNoLogin = () => {
    useEffect(()=>{
        var elems = document.querySelectorAll('.sidenav')
         M.Sidenav.init(elems, {})
    })
    return (
        <>
        <nav className="purple z-depth-0">
            <div className="nav-wrapper">
                <div className="container">
                    <a href="/" className="brand-logo">SHRINKIT</a>
                    <a href="#" data-target="mobSide" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                    <ul className="hide-on-med-and-down right">
                        <li><a href="/signin">Log In</a></li>
                        <li><a href="/signup">New Account</a></li>
                        <li><a href="/FAQ">FAQ</a></li>
                    </ul>
                </div>
            </div>
        </nav>

        <ul className="sidenav" id="mobSide">
        <li><a href="/signin">Log In</a></li>
        <li><a href="/signup">New Account</a></li>
        <li><a href="/FAQ">FAQ</a></li>
        </ul>
        </>
    );
}
 
export default NavNoLogin;