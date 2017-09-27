import React from 'react';

function Accessories(props){
    function toggleAction(event) {
        event.preventDefault();
        let id = event.target.id;
        props.onToggle(id)        
    };

    return(
        <ul>
            {props.accessories.map(function(item, index){
                if (item.finished === true){
                    return(<li key={index} ><a href="#1" id={item.id} className='finished' onClick={toggleAction}>{item.name}</a></li>)
                } else {
                    return(<li key={index}><a href="#1" id={item.id} onClick={toggleAction}>{item.name}</a></li>)
                }
                
            })}
        </ul>
    )
}

export default Accessories;