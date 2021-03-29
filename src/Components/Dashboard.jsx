import React,{useEffect,useState} from 'react'
import Axios from 'axios'
import {withRouter} from 'react-router-dom'
import QRCode from "react-qr-code";
import Loader from './Loader';
const Dashboard = () => {
    const [userLinks,setUserLinks] = useState([])
    const [isLoading,setIsLoading] = useState(true)
    useEffect(()=>{
        Axios.get('http://localhost:2000/userLinks',{
            headers : {"x-access-token" : localStorage.getItem('token')}
        })
        .then(resp =>{
            setUserLinks(resp.data.links)
            let username = resp.data.uName
            document.title = `ShrinkIT | ${username.charAt(0).toUpperCase()}${username.substr(1)}`
            setIsLoading(false)
            //console.log(resp)
        })
    },[])

    return (
        <>
    <h2 className="center-align">User dashboard.</h2>
    <div className="container">
        <table className="responsive-table highlight ">
            <thead>
                <tr>
                    <th>Long Url</th>
                    <th>Short Url</th>
                    <th>Qr Code</th>
                </tr>
                </thead>
                {isLoading && <Loader/>}
                <tbody>
                {userLinks.map(url=>{
                    return (
                        <tr key={Math.random().toString(36).substr(2,6)}>
                            <td><a href={url['LONGURL']}>{url['LONGURL']}</a></td>
                            <td><a href={"http://localhost:2000/"+url['SHORTURL']}>http://localhost:2000/{url['SHORTURL']}</a></td>
                            <td><QRCode size={60} value={url['LONGURL']} /></td>
                        </tr>
                    )
                })}
                </tbody>
        </table>
    </div>
        </>
    );
}
 
export default withRouter(Dashboard);