import React from 'react';

function Filter(props){
    return(
        <div className='filter-block'>
            <button className='filter-block_button'>all</button>
            <button className='filter-block_button'>complit</button>
            <button className='filter-block_button'>in work</button>
        </div>
    );
}

export default Filter;
