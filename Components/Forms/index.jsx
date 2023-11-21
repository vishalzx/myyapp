import React from 'react';
import "./index.css";
import send from "./send.png";


export default function index() {
  return (
    <div>
      <div className="forms">
                <h1 style={{fontSize:'100%',fontFamily:'Gilroy-Bold', fontWeight:"Bold"}}>ENQUIRY FORM</h1>
                <h4 style={{fontWeight:'Regular'}}>Your gateway to reaching out and connecting with us. We value your feedback, inquiries, and suggestions, and we are here to assist you in any way we can.</h4>
                <input type="text" placeholder="Your Name" />
                <div className="phem">
                <input type="text" placeholder="Phone Number" />
                <input type="text" placeholder="Email" />
                </div>
                <textarea name="" id="" cols="30" rows="7" placeholder="Hi! I would like some more information on..."></textarea>
                <button><img src={send} alt="" />Send Message</button>
            </div>
    </div>
  )
}
