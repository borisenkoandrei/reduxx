import React from "react";
import { connect } from "react-redux";
import Accessory from "./Accessory";
import { Button, Input } from "antd";
import Modal from "../Modal/NewModal";

import {
  addAccessory,
  deleteAccessory,
  changeAccessory,
  toggleAccessoryStatus
} from "../../actions/accessoriesAction";

class Accessories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false
    };
  }

  toggleModal = () => {
    this.setState({ modalIsOpen: !this.state.modalIsOpen });
  };

  addAccessory = event => {
    event.preventDefault();
    const accessoryObj = {
      id: Date.now(),
      name: event.target.name.value,
      cost: event.target.cost.value,
      finished: false,
      changing: false
    };

    this.props.addAccessory(this.props.taskId, accessoryObj);
    this.toggleModal();
  };

  render() {
    const currentAccessories = this.props.accessories(this.props.taskId);

    if (!currentAccessories) {
      return <li>Пусто</li>;
    }

    return (
      <div>
        <ul>
          {Object.keys(currentAccessories).map(key => {
            let accessories = currentAccessories[key];
            return (
              <Accessory
                key={key}
                taskId={this.props.taskId}
                accessory={accessories}
                changeAccessory={this.props.changeAccessory}
                deleteAccessory={this.props.deleteAccessory}
                toggleAccessoryStatus={this.props.toggleAccessoryStatus}
              />
            );
          })}
        </ul>
        <Button icon="plus" onClick={this.toggleModal} />
        <Modal isOpen={this.state.modalIsOpen} mountTo="#modal">
          <div className="modal">
            <li>
              <form action="submit" onSubmit={this.addAccessory}>
                <label htmlFor="name">
                  Наименование:<Input
                    placeholder="Название"
                    name="name"
                    id="name"
                  />
                </label>
                <label htmlFor="cost">
                  Цена:<Input placeholder="Стоимость" name="cost" id="cost" />
                </label>
                <Button htmlType="submit" icon="check">
                  Ok
                </Button>
                <Button icon="close" onClick={this.toggleModal}>
                  Cancel
                </Button>
              </form>
            </li>
          </div>
        </Modal>
      </div>
    );
  }
}
// function Accessories(props) {
//   const { taskId, accessories, changeAccessory, toggleAccessoryStatus } = props;
//   const currentAccessories = accessories(taskId);

//   if (!currentAccessories) {
//     return <li>Пусто</li>;
//   }

//   return (
//     <div>
//       <ul>
//         {Object.keys(currentAccessories).map(key => {
//           let accessories = currentAccessories[key];
//           return (
//             <Accessory
//               key={key}
//               taskId={props.taskId}
//               accessory={accessories}
//               changeAccessory={changeAccessory}
//               toggleAccessoryStatus={toggleAccessoryStatus}
//             />
//           );
//         })}
//       </ul>
//       <button />
//     </div>
//   );
// }

const mapStateToProps = state => {
  return {
    accessories: id => state.accessories[id]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeAccessory: (taskId, accessoriesId, name, cost) =>
      dispatch(changeAccessory(taskId, accessoriesId, name, cost)),
    toggleAccessoryStatus: (taskId, accessoriesId) =>
      dispatch(toggleAccessoryStatus(taskId, accessoriesId)),
    addAccessory: (taskId, accessoryObj) =>
      dispatch(addAccessory(taskId, accessoryObj)),
    deleteAccessory: (taskId, accessoryId) => {
      dispatch(deleteAccessory(taskId, accessoryId));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Accessories);
