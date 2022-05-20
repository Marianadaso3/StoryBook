import React from "react";
import "./button.css";


const Button=(props)=>{
  return (
    <div className="login-box">
    
    <form>
      <a href="#" >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        {props.Text}
      </a>
    </form>
  </div>

  );
}

export default Button;