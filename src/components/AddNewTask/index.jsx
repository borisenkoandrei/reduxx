import React from "react";
import { Input, Button, DatePicker } from "antd";
import AcccessoriesList from "../AddNewTask/AccessoriesList";
import { connect } from "react-redux";

import { addAccessory } from "../../actions/accessoriesAction";
import { addTask } from "../../actions/taskAction";

class addNewTaskWindow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      taskId: Date.now(),
      taskName: "",
      activeCarId: "",
      workName: "",
      taskCost: "",
      currentDate: "",
      accessories: {}
    };

    this.taskNameChange = this.taskNameChange.bind(this);
    this.taskCostChange = this.taskCostChange.bind(this);
    this.changeDate = this.changeDate.bind(this);
    this.addAccessory = this.addAccessory.bind(this);
    this.deleteAccessory = this.deleteAccessory.bind(this);
    this.saveTask = this.saveTask.bind(this);
  }

  taskNameChange(event) {
    this.setState({ taskName: event.target.value });
  }

  taskCostChange(event) {
    this.setState({ taskCost: event.target.value });
  }

  changeDate(date, dateString) {
    this.setState({ currentDate: dateString });
  }

  addAccessory(event) {
    event.preventDefault();
    const id = Date.now();
    let accessory = {
      id: id,
      name: event.target.name.value,
      cost: event.target.cost.value,
      finished: false,
      changing: false
    };

    this.setState({
      accessories: Object.assign({}, this.state.accessories, {
        [id]: accessory
      })
    });

    event.target.name.value = "";
    event.target.cost.value = "";
  }

  deleteAccessory(id) {
    let accessories = this.state.accessories;
    delete accessories[id];
    this.setState({ accessories: accessories });
  }

  saveTask(event) {
    const taskObj = {
      id: this.state.taskId,
      complited: false,
      deleted: false,
      workName: this.state.taskName,
      cost: this.state.taskCost,
      currentDate: this.state.currentDate,
      pastDate: ""
    };

    Object.keys(this.state.accessories).map(key => {
      this.props.addAccessories(this.state.taskId, this.state.accessories[key]);
    });

    this.props.addTask(this.props.activeCar, taskObj);
    this.props.toggleModal();
  }

  render() {
    return (
      <div className="new-task-window">
        <Input
          placeholder="Название"
          className="task-name"
          onChange={this.taskNameChange}
        />
        <Input
          placeholder="Стоимость"
          className="task-cost"
          onChange={this.taskCostChange}
        />
        <DatePicker onChange={this.changeDate} />
        <div className="add-accessories">
          <form onSubmit={this.addAccessory}>
            <div className="view-accessori">
              <AcccessoriesList
                accessories={this.state.accessories}
                deleteAccessory={this.deleteAccessory}
              />
            </div>
            <div className="add-new-accessory">
              <Input
                placeholder="Название"
                id="name"
                className="accessory-name"
              />
              <Input
                placeholder="Стоимость"
                id="cost"
                className="accessory-cost"
              />
              <Button htmlType="submit">Добавить</Button>
            </div>
          </form>
        </div>
        <div className="new-task-window_root-button">
          <Button onClick={this.saveTask}>Добавить здачу</Button>
          <Button onClick={() => this.props.toggleModal()}>Отмена</Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    activeCar: store.settings.activeCarId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addTask: (carid, task) => dispatch(addTask(carid, task)),
    addAccessories: (id, acessories) => dispatch(addAccessory(id, acessories))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(addNewTaskWindow);
