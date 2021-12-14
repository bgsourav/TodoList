import React from 'react'
import './footer.css'
import {FaFacebookSquare,FaInstagramSquare,FaYoutubeSquare} from "react-icons/fa";
const Footer = () => {
    return (
        <div id="footer">
        <h4><a href="/">Todolist</a></h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, tempora!</p>
           <div className="socialmedia">
               <ul>
               <a href="https://www.instagram.com/webdesign.tips/" target="_link"><FaInstagramSquare/></a>
                       <a href="https://www.facebook.com/groups/websworld" target="_link"><FaFacebookSquare/></a>
                       <a href="https://www.youtube.com/results?search_query=react+js+tutorial" target="_link"><FaYoutubeSquare/></a>
               </ul>
            </div> 
        </div>
    )
}

export default Footer;
