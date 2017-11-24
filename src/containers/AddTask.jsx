import React from "react";
import { connect } from "react-redux";
import Modal from "../components/Modal/NewModal";
import AddNewTaskWindow from "../components/AddNewTask/index";
import { Button } from "antd";

class AddNewTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false
    };

    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({ modalIsOpen: !this.state.modalIsOpen });
  }

  render() {
    return (
      <div className="new-task">
        <Button icon="plus" onClick={this.toggleModal}>
          Добавить задачу
        </Button>
        <Modal isOpen={this.state.modalIsOpen} mountTo="#modal">
          <div className="modal">
            <AddNewTaskWindow toggleModal={this.toggleModal} />
          </div>
        </Modal>
      </div>
    );
  }
}

export default AddNewTask;
