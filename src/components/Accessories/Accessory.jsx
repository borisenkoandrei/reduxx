import React from "react";
import { Button, Input, Checkbox } from "antd";
import Modal from "../Modal/NewModal";

// function Accessory({ accessory }) {
//   const { id, name, cost, finished, changing } = accessory;
//   return (
//     <li>
//       <div>{name}</div>
//       <div>{cost}</div>
//     </li>
//   );
// }

class Accessory extends React.Component {
  constructor(props) {
    super(props);
    this.taskId = this.props.taskId;
    this.id = this.props.accessory.id;

    this.changeAccessory = this.props.changeAccessory;
    this.toggleAccessoryStatus = this.props.toggleAccessoryStatus;

    this.state = {
      changing: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.saveChange = this.saveChange.bind(this);
    this.changeAccessory = this.changeAccessory.bind(this);
    this.toggleStatus = this.toggleStatus.bind(this);
  }

  handleChange() {
    this.setState({ changing: !this.state.changing });
  }

  saveChange(event) {
    event.preventDefault();
    const name = event.target.name.value;
    const cost = event.target.cost.value;

    this.changeAccessory(this.taskId, this.id, name, cost);
    this.handleChange();
  }

  toggleStatus(evetn) {
    this.toggleAccessoryStatus(this.props.taskId, this.props.accessory.id);
  }

  render() {
    if (!this.state.changing) {
      return (
        <li>
          <Checkbox
            checked={this.props.accessory.finished}
            onChange={this.toggleStatus}
          />
          <div>{this.props.accessory.name}</div>
          <div>{this.props.accessory.cost}</div>
          <Button icon="edit" onClick={this.handleChange} />
        </li>
      );
    }

    return (
      <Modal isOpen={this.state.changing} mountTo="#modal">
        <li>
          <form action="submit" onSubmit={this.saveChange}>
            <label htmlFor="name">
              Наименование:<Input
                defaultValue={this.props.accessory.name}
                name="name"
                id="name"
              />
            </label>
            <label htmlFor="cost">
              Цена:<Input
                defaultValue={this.props.accessory.cost}
                name="cost"
                id="cost"
              />
            </label>
            <Button htmlType="submit" icon="check">
              Ok
            </Button>
            <Button icon="close" onClick={this.handleChange}>
              Cancel
            </Button>
          </form>
        </li>
      </Modal>
    );
  }
}

export default Accessory;
