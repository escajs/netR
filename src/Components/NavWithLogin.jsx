import React,{useEffect} from 'react'
import M from "materialize-css";
const NavWithNoLogin = () => {
    const lgout = e =>{
        e.preventDefault()
        window.localStorage.removeItem('token')
        window.location.replace('/')
    }
    useEffect(()=>{
        var elems = document.querySelectorAll('.sidenav')
         M.Sidenav.init(elems, {})
    })
    return (
        <>
        <nav className="purple">
            <div className="nav-wrapper">
                <div className="container">
                    <a href="/" className="brand-logo">SHRINKIT</a>
                    <a href="#" data-target="mobSide" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                    <ul className="hide-on-med-and-down right">
                        <li><a href="/dash">Dashboard</a></li>
                        <li><a href="/newlink">New Link</a></li>
                        <li><a href="#" onClick={(e)=>lgout(e)}>Log Out</a></li>
                    </ul>
                </div>
            </div>
        </nav>

        <ul className="sidenav" id="mobSide">
             <li><a href="/dash">Dashboard</a></li>
             <li><a href="/newlink">New Link</a></li>
            <li><a href="#" onClick={(e)=>lgout(e)}>Log Out</a></li>
        </ul>
        </>
    );
}
 
export default NavWithNoLogin;