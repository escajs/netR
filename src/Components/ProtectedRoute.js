import React from 'react'
import {Route} from 'react-router-dom'
const ProtectedRoute = ({isAuth : isAuth , Component : Component , ...rest }) => {
    // we dont return jsx template , but a Route
    return (
        <Route {...rest} render={props=>{
            if(isAuth){
                return <Component/>
            }else{
                //return <Redirect to={{pathname:'/'}}/>
                return <h1>You are not allowed</h1>
            }
        }}/>
    )
}
 
export default ProtectedRoute;