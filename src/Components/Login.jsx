import React,{useState} from 'react'
import Axios from 'axios'
const Login = () => {
    const [userName,setUserName] = useState('')
    const [userPassword,setUserPassword] = useState('')
    const [passErr,setpassErr] = useState('')
    const signIn = () =>{
        Axios.post('http://localhost:2000/login',
        {
           name : userName,
           passcode : userPassword 
        }).then(response=>{
            // hit wakha ykono info ghalat token ghada tkon but valid value is empty
            // hna knt2kdo wax auth = true
          if(response.data.auth){
            window.localStorage.setItem('token',response.data['token'])
            window.location.replace('/dash')
          }else{
             setpassErr('Incorrect username or password.')
          }
        })
    }

    return (
        <section className="loginSection">
            <h3 className="center-align">Authentification Panel</h3>
            <form onSubmit={(e)=>e.preventDefault()}>
                <div className="container">
                    <div className="row">
                        <div className="col s12 input-field">
                        <input id="username" autoComplete="off" onChange={(e)=>setUserName(e.target.value)} type="text" className="validate"/>
                        <label for="username">Pseudo Name</label>
                        <span class="red-text helper-text">{passErr}</span>
                        </div>

                        <div className="col s12 input-field">
                        <input id="userpass" autoComplete="off" onChange={(e)=>setUserPassword(e.target.value)} type="password" className="validate"/>
                        <label for="userpass">Password</label>
                        <span class="red-text helper-text">{passErr}</span>
                        </div>
                        <h2 className="center-align">
                            <button className="btn waves-effect waves-light purple z-depth-2"
                            onClick={signIn}
                            >Login</button>
                        </h2>
                    </div>
                </div>
            </form>
        </section>
    );
}
 
export default Login;