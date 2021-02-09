import React from "react";
import imglogo from "../images/cr7.jpg";
import videohd from ".//videos/Butterfly.mp4";
import audiomp3 from "../audios/1998.mp3.mp3"; 
export const HeaderSection=()=>{

    return(
        <div>
            
            <header>
                <a href="">Home</a>
                <a href="">services</a>
                <a href="">About us</a>
                <a href=""> Contact us</a>
                <h1> welcome</h1>
                <div>
               <img  src={imglogo}></img>
               </div>
               <br/>
               <div>
               <video controls src={videohd} width="400px" height="400px"></video>
            <br/>
            </div>
            <br/>
            <div>
            <audio controls src={audiomp3}></audio>
            </div>
            <div>
            <audio controls src={audiomp3}></audio>
            </div>
            <div>
            <audio controls src={audiomp3}></audio>
            </div>
            <div>
            <audio controls src={audiomp3}></audio>
            </div>
            <div>
            <audio controls src={audiomp3}></audio>
            </div>
            <div>
            <audio controls src={audiomp3}></audio>
            </div>
            <div>
            <audio controls src={audiomp3}></audio>
            </div>
            <div>
            <audio controls src={audiomp3}></audio>
            </div>
            <div>
            <audio controls src={audiomp3}></audio>
            </div>
            <div>
            <audio controls src={audiomp3}></audio>
            </div>
            <div>
            <audio controls src={audiomp3}></audio>
            </div>
            <div>
            <audio controls src={audiomp3}></audio>
            </div>
            <div>
            <audio controls src={audiomp3}></audio>
            </div>
 
            </header>
        </div>
    )
    }