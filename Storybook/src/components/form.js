import React from "react";

import Input from "./input";
import Label from "./label";
import Button from "./button";




const Form=()=>{
  return (
    <form>
        <div className="user-box">
            <Input typeText="text">
            </Input>
            <Label Text="Username">
            </Label>
        </div>

        <div className="user-box">
            <Input typeText="password">
            </Input>
            <Label Text="Password">
            </Label>
        </div>

        <Button Text="Submit">
        </Button>

    </form>

  );
}

export default Form;