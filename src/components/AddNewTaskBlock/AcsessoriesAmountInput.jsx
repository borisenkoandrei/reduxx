import React from "react";
import { InputNumber } from "antd";

function AmountInput(props) {
  function changeEvent(value) {
    if (value !== undefined) {
      props.change(value);
    } else {
      props.change(1);
    }
  }

  // function onlyNum(e) {
  //   console.log(e);
  //   let key = +e.key;
  //   if (isNaN(key)) {
  //     e.preventDefault();
  //   }
  // }

  return (
    // <input onKeyPress={onlyNum} onChange={changeEvent} className="acsessories-amount" type="text" placeholder="Количество" value={props.val}/>
    <InputNumber
      value={props.val}
      onClick={e => console.log(e)}
      onChange={changeEvent}
      onKeyPress={e => console.log(e)}
      placeholder="Количество"
    />
  );
}

export default AmountInput;
