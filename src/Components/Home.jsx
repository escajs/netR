import React from 'react'
const Home = () => {
    return (
      <>
      <section className="landing">
            <div>
               <div className="container">
               <h2 className="center-align">Hey</h2>
                <h5>Solid links repository built for you.</h5>
                <h5>Join Us For Free!</h5>
                <a href="/signup" target="_self" className="btn waves-effect waves-light">Join</a>
               </div>
            </div>
            <div>
            <img src="workerslanding.svg" alt="land"/>
            </div>
        </section>
        <div className="divider"></div>
        <section className="section" style={{padding:'4em 0'}}>
            <h2 className="center-align">Features</h2>
            <div className="container">
                <div className="row">
                    <div className="col s4 center-align">
                        <i style={{userSelect:'none'}} className="material-icons large">all_inclusive</i>
                        <h6>Unlimited Links</h6>
                    </div>
                    <div className="col s4 center-align">
                        <i style={{userSelect:'none'}} className="material-icons large">flash_on</i>
                        <h6>Practical UX.</h6>
                    </div>
                    <div className="col s4 center-align">
                        <i style={{userSelect:'none'}} className="material-icons large">money_off</i>
                        <h6>Free Of Charge.</h6>
                    </div>
                </div>
            </div>
        </section>
      </>
    );
}
 
export default Home;