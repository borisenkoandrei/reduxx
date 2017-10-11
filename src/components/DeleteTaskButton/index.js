import React from "react";
import { Button } from "antd";
import Modal from "../Modal/index";
import DeleateModal from "../Modal/DeleateTaskModal"

class DeleteTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false
    };

    this.handleShow = this.handleShow.bind(this);
    this.handleHide = this.handleHide.bind(this);
    this.ok = this.ok.bind(this);
  }

  handleShow() {
    this.setState({ modalIsOpen: true });
  }

  handleHide(){
    this.setState({ modalIsOpen: false });
  }

  ok(){
    this.setState({ modalIsOpen: false });
    this.props.deleateTask(this.props.id);
    console.log(typeof this.props.id)
  }

  render() {
    const ml = this.state.modalIsOpen ? (
      <Modal>
        <DeleateModal hide={this.handleHide} ok={this.ok} />
      </Modal>
    ) : null;

    return (
      <div className="deleate-task">
        <Button
          icon="delete"
          type="danger"
          onClick={() =>
            this.handleShow()}
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
