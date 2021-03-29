/*************************************************************** 
 * Crafted By : Othmane Bejja
 * Licence : MIT
 * ************************************************************/
import {useState,useEffect} from 'react'
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Home from './Components/Home';
import Footer from './Components/Footer';
import SignUp from './Components/SignUp';
import Login from './Components/Login';
import FAQ from './Components/fAQ';
import Dashboard from './Components/Dashboard';
import ProtectedRoute from './Components/ProtectedRoute';
import NavNoLogin from './Components/NavNoLogin';
import NavWithNoLogin from './Components/NavWithLogin';
import NewLinkPage from './NewLink';
function App() {
  const [isAuth,setIsAuth] = useState(false)

  useEffect(()=>{
    let storageToken = window.localStorage.getItem('token')
    if(storageToken !== null) {setIsAuth(true)}
    else setIsAuth(false)
    //console.log(storageToken)
  },[])

  return (
    <>
    {isAuth ? <NavWithNoLogin/> : <NavNoLogin/>}
    <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/signin">
          <Login/>
        </Route>
        <Route exact path="/signup">
          <SignUp/>
        </Route>
        <Route exact path="/FAQ">
          <FAQ/>
        </Route>
        <Route exact path="/newLink">
          <NewLinkPage/>
        </Route>
        {/*protected route*/}
        <ProtectedRoute path="/dash" Component={Dashboard} isAuth={isAuth}/>
         {/*protected route*/}
        <Route exact path="*">
         404 page not found
        </Route>
      </Switch>
    </Router>
    <Footer/>
    </>
  );
}

export default App;
