import React from "react";
import { connect } from "react-redux";

import { Button } from "antd";
import { changeFilter } from "../../actions/settingsAction";
import { ALL, IN_WORK, FINISHED, DELETE } from "../../const/filter";

function Filter(props) {
  return (
    <div className="filter">
      <Button onClick={e => props.changeFilter(ALL)}>All</Button>
      <Button onClick={e => props.changeFilter(IN_WORK)}>In work</Button>
      <Button onClick={e => props.changeFilter(FINISHED)}>Finished</Button>
      <Button onClick={e => props.changeFilter(DELETE)}>Delete tasks</Button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    activeFilter: state.settings.filter
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeFilter: filter => dispatch(changeFilter(filter))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
