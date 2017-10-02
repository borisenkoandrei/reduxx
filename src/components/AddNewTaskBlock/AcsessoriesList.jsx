import React from 'react';
import Item from './AcsessoriesItem'

function AcsessoriesList({acsessories, deleate}){
    return(
        <ul>
            {acsessories.length > 0?acsessories.map(function(item){
                return(
                    <Item deleate={deleate} id={item.id} key={item.id} name={item.name} amount={item.amount}/>
                )
            }):<li>Пока ничего нет</li>
            }
        </ul>
    )
}

export default AcsessoriesList;