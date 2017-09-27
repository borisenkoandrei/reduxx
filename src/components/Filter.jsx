import React from 'react';

function Filter({ changeFilter }){
    function getFilter(event){
        event.preventDefault();
        const filter = event.target.getAttribute('filter');
        changeFilter(filter);
    }

    return(
        <div className='filter-block'>
            <button className='filter-block_button' onClick={getFilter} filter="ALL">all</button>
            <button className='filter-block_button' onClick={getFilter} filter="CCOMPLITED">complit</button>
            <button className='filter-block_button' onClick={getFilter} filter="INWORK">in work</button>
        </div>
    );
}

export default Filter;
