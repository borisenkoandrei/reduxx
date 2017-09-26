import React from 'react';
import { connect } from 'react-redux';

import Filter from '../components/Filter';
import Tasks from '../components/Tasks'

function TableWithFilter(props){
    return (
        <div className='work-block'>
            <Filter />
            <Tasks tasks={props.tasks}/>
        </div>
    )    
}

function getActiveCarTasks (id, cars){
    let result;
    cars.forEach(function(car){
        if(car.id === +id){
            result= car.workItem;
        }
    })

    return result;
    
  };

const mapStateToProps = (state) => {
  return {
      tasks: getActiveCarTasks (state.activeCarId, state.cars)
   
  }
}


export default connect(mapStateToProps)(TableWithFilter)