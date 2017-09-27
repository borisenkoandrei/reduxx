import React from 'react';
import { connect } from 'react-redux';

import Filter from '../components/Filter';
import Tasks from '../components/Tasks';

import { toggleAccessories, changeFilter } from '../actions/actions'

function TableWithFilter(props){
    return (
        <div className='work-block'>
            <Filter changeFilter={props.changeFilter} />
            <Tasks filter={props.filter} tasks={props.tasks} onToggle={props.toggleAccessories}/>
        </div>
    )    
}

function getActiveCarTasks (id, cars){
    let result;
    cars.forEach(function(car){
        if(car.id === +id){
            result= car.workItems;
        }
    })

    return result;
    
  };

const mapStateToProps = (state) => {
  return {
      tasks: getActiveCarTasks (state.activeCarId, state.cars),
      filter: state.filter,
  }
}

const mapDispatchToProps  = (dispatch) =>{
    return{
        toggleAccessories: (id) => {
            dispatch(toggleAccessories(id))
        },
        changeFilter: (filter) => {
            dispatch(changeFilter(filter))
        }
    }
} 


export default connect(mapStateToProps, mapDispatchToProps)(TableWithFilter)