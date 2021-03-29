import React,{useState} from 'react'
import Axios from 'axios'
const NewLinkPage = () => {
    const [url,setUrl] = useState('')

    const sendUrl = _ =>{
        if(url.startsWith('https://') || url.startsWith('https://') ){


            Axios.post('http://localhost:2000/newLink',{_url : url,tk : localStorage.getItem('token')
        }).then(rsp=>{
           if(rsp.data.added){
               window.location.replace('/dash')
           }
        })


        }
    }
    return (
        <>
        <h2 className="center-align">Shrink</h2>
        <div className="divider"></div>
        <form onSubmit={e=>e.preventDefault()}>
            <div className="container">
                <input onChange={(e)=>setUrl(e.target.value)} type="url" required autoComplete="off" placeholder="Your Url ..."/>
            <h2 className="center-align"><button onClick={sendUrl} className=" btn btn-large waves-effect waves-light">Shrink</button></h2>
            </div>
        </form>
        </>
    );
}
 
export default NewLinkPage;