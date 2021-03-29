import React,{useState} from 'react'
import Axios from 'axios'
import { set } from 'mongoose'
const SignUp = () => {
    const [$email,setEmail] = useState('')
    const [$pass,setPass] = useState('')
    const [$name,setName] = useState('')
    //send Using Axios
    const sendUser = () =>{
       Axios.post('https://urlshrinker-back.herokuapp.com/signup',
       {
           userEmail :$email,
            userPass :$pass,
            userName :$name
        }
           )
    }
    return (
        <section className="signupSection">
            <h2 className="center-align">Register Once, Enjoy Forever</h2>
            <form>
                <div className="container">
                    <div className="row">
                        <div className="col s12 input-field">
                        <input id="email" autoComplete="off" required="required" onChange={(e)=>setEmail(e.target.value)} type="email" class="validate"/>
                        <label for="email">Email</label>
                        </div>

                        <div className="col s12 input-field">
                        <input id="username" autoComplete="off" required="required" onChange={(e)=>setName(e.target.value)} type="text" class="validate"/>
                        <label for="username">Pseudo Name</label>
                        </div>

                        <div className="col s12 input-field">
                        <input id="userpass" autoComplete="off" required="required" onChange={(e)=>setPass(e.target.value)} type="password" class="validate"/>
                        <label for="userpass">Password</label>
                        </div>
                        <h2 className="center-align">
                            <button className="btn waves-effect waves-light purple z-depth-2"
                            onClick={sendUser}
                            >Sign Up</button>
                        </h2>
                    </div>
                </div>
            </form>
        </section>
    );
}
 
export default SignUp;