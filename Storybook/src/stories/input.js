import React from "react";
import "./input.css";



const Input=(props)=>{
  return (
<div class="login-box">
  
  <form>
    <div className="user-box">
      <input type={props.typeText} name required>
      </input>
      <label>{props.Text}</label>
    </div>
  </form>
</div>

    
  );
}

export default Input;
