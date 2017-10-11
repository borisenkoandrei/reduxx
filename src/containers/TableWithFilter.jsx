import React from "react";
import { connect } from "react-redux";

import Filter from "../components/Table/Filter";
import Tasks from "../components/Table/Tasks";

import {
  toggleAccessories,
  changeFilter,
  compliteTask,
  acsessoriesChanging,
  deleteTask
} from "../actions/actions";

function TableWithFilter(props) {
  return (
    <div className="work-block">
      <Filter changeFilter={props.changeFilter} />
      <Tasks
        compliteTask={props.compliteTask}
        filter={props.filter}
        tasks={props.tasks}
        onToggle={props.toggleAccessories}
        acsessoriesChanging={props.acsessoriesChanging}
        deleteTask={props.deleteTask}
      />
    </div>
  );
}

function getActiveCarTasks(id, cars) {
  let result;
  cars.forEach(function(car) {
    if (car.id === +id) {
      result = car.workItems;
    }
  });

  return result;
}

const mapStateToProps = state => {
  return {
    tasks: getActiveCarTasks(state.activeCarId, state.cars),
    filter: state.filter
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleAccessories: id => {
      dispatch(toggleAccessories(id));
    },
    changeFilter: filter => {
      dispatch(changeFilter(filter));
    },
    compliteTask: id => {
      dispatch(compliteTask(id));
    },
    acsessoriesChanging: acsessoriesItem => {
      dispatch(acsessoriesChanging(acsessoriesItem));
    },
    deleteTask: id => {
      dispatch(deleteTask(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TableWithFilter);
