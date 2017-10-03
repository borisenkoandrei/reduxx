import React from 'react';

function Accessories(props){
    function toggleAction(event) {
        event.preventDefault();
        let id = event.target.id;
        props.onToggle(id)        
    };

    function itemValue(item){
        if (item.amount > 1){
            let str =`${item.name} X ${item.amount}`;
            return str;
        } else {
            return item.name;
        }
    }

    return(
        <ul>
            {props.accessories.map(function(item, index){
                if (item.finished === true){
                    return(<li key={index} ><a href="#1" id={item.id} className='finished' onClick={toggleAction}>{itemValue(item)}</a></li>)
                } else {
                    return(<li key={index}><a href="#1" id={item.id} onClick={toggleAction}>{itemValue(item)}</a></li>)
                }
                
            })}
        </ul>
    )
}

export default Accessories;