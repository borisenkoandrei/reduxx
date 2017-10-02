import React from 'react';

function AmountInput(props){

    function changeEvent(event){
        props.change(event.target.value)
    }

    function onlyNum(e){
        let key = +e.key
        if(isNaN(key)){
            e.preventDefault();
        }
    }

    return(
        <input onKeyPress={onlyNum} onChange={changeEvent} className="acsessories-amount" type="text" placeholder="Количество"/>
    )
}

export default AmountInput;