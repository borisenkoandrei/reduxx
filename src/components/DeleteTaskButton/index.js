import React from "react";
import { Button } from "antd";
import Modal from "../Modal/index";

class DeleteTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false
    };

    this.handleShow = this.handleShow.bind(this);
  }

  handleShow() {
    this.setState({ showModal: true });
  }

  render() {
    const ml = this.state.modalIsOpen ? (
      <Modal>
        <div className="modal">
          <div>
            With a portal, we can render content into a different part of the
            DOM, as if it were any other React child.
          </div>
          This is being rendered inside the #modal-container div.
          <button onClick={this.handleHide}>Hide modal</button>
        </div>
      </Modal>
    ) : null;

    return (
      <div>
        <Button
          className="deleate-task"
          icon="delete"
          type="danger"
          onClick={() =>
            this.setState({ modalIsOpen: !this.state.modalIsOpen })}
        />
        {ml}
      </div>
    );
  }
}

// this.props.deleateTask(this.props.id);

// function deleteTask({ deleateTask, id }) {

//   return (
//     <Button
//       className="deleate-task"
//       icon="delete"
//       type="danger"
//       onClick={() => deleateTask(id)}
//     />
//   );
// }

export default DeleteTask;
