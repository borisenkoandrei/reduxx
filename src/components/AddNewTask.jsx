import React from "react";
import Modal from "../components/AddTaskModal/index";
import Button from "../components/AddNewTaskButton";

class AddNewTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    this.setState({ modalIsOpen: !this.state.modalIsOpen });
  }

  render() {
    return (
      <div>
        <Modal open={this.state.modalIsOpen} />
        <Button Click={this.handleClick} />
      </div>
    );
  }
}

export default AddNewTask;
