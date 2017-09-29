import React from 'react';
import Item from './AcsessoriesItem'

function AcsessoriesList({acsessories}){
    return(
        <ul>
            {acsessories.length > 0?acsessories.map(function(item){
                return(
                    <Item id={item.id} key={item.id} name={item.name} amount={item.amount} />
                )
            }):<li>Пока ничего нет</li>
            }
        </ul>
    )
}

export default AcsessoriesList;