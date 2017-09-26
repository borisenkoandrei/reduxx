import React from 'react';

function Accessories(props){
    console.log(props)
    return(
        <ul>
            {props.accessories.map(function(item, index){
                if (item.finished === true){
                    return(<li key={index}>{item.name}</li>)
                } else {
                    return(<li key={index}>{item.name}!!</li>)
                }
                
            })}
        </ul>
    )
}

export default Accessories;