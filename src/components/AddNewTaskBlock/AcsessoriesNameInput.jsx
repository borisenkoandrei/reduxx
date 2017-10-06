import React from "react";
import { Input } from "antd";

function NameInput(props) {
  function handleChange(event) {
    props.change(event.target.value);
  }

  return (
    // <input onChange={(event)=> {props.change(event.target.value)}} type="text" placeholder="значение" value={props.val}/>
    <Input placeholder="Значение" onChange={handleChange} style={{ width: 200 }} className="sdsdasd" />
  );
}

export default NameInput;
