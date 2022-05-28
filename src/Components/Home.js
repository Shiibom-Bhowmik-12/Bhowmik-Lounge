import React from 'react';
import './Home.css';
import Footer from './Footer';
import {useHistory} from 'react-router-dom';

function Home() {
  const history = useHistory();
  const gotoMenu = () => {
    history.push('/menu');
  }


  return (
    <>
        <div className='main'>
            <div className="overlay"></div>
            <video src="cd_new.mp4" autoPlay loop muted />
            <div className="content">
                <h1 style={{fontFamily:"Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif",fontSize:"45px"}}>Welcome</h1>
                <p style={{fontFamily:"Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif",fontSize:"25px"}}>to Bhowmik Lounge</p>
                {/* <button >Goto to Dining Table</button> */}
                <br/>
                <img className="mn" style={{width:"178px",height:"60px"}}src="mn.png" alt="" onClick={()=>gotoMenu()}/>
            </div>    
       </div>
       <Footer/>
    </>
  )
}

export default Home;