import React from "react";
import "./Smarttv.css";
import yamaha from './yamaha.jpg';
import img1 from './img1.jpg';
import img2 from './img2.jpg';
import img3 from './img3.jpg';
import img4 from './img4.jpg';
import { Link } from "react-router-dom";
export const Smarttv = () =>{
    return(
        <div>
        <div className="first">
            <h1 className="ue"><i><b>Upcoming Events</b></i></h1><br></br>
            <button className="butt">FZ-X Overnight Tour</button>
            <h3 className="koc"><b>Kochi</b><br></br>
            28th & 29th Oct 2023</h3>
            <Link to='/register'><img className="bike" src={yamaha} alt="img"/></Link>
        </div>
        <div className="second">
            <h1 className="wsn"><i><b>WHAT'S NEW?</b></i></h1>
            <div className="pictures">
                <div className="pic1"><Link to='#'><img className="im1" src={img1} alt="img"/></Link><span className="sp1">Masterful Ride Earns Quartararo Third Place In Mandalika Race</span></div>
                <div className="pic1"><Link to='#'><img className="im1" src={img2} alt="img"/></Link></div>
                <div className="pic1"><Link to='#'><img className="im1" src={img3} alt="img"/></Link></div>
                <div className="pic1"><Link to='#'><img className="im1" src={img4} alt="img"/></Link></div>
            </div>
        </div>
        
        </div>
        
    )
}