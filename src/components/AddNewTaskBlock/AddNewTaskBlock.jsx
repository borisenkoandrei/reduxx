import React from "react";
import { connect } from "react-redux";
import { addNewTask } from "../../actions/actions";
import { DatePicker } from "antd";
import "../../../node_modules/antd/dist/antd.css";
import { LocaleProvider } from "antd";
import enUS from "antd/lib/locale-provider/en_US";

import Input from "./ModalInput";
import AcsessoriesList from "./AcsessoriesList";
import AcssName from "./AcsessoriesNameInput";
import AcsseAmount from "./AcsessoriesAmountInput";

import { Button } from "antd";
import "antd/lib/button/style/index.css";

class AddNewTaskBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      work: "",
      cost: "",
      date: "",

      acsessories: [],
      acsessoriesName: "",
      acsessoriesAmount: "",
      id: 9999
    };

    this.taskId = this.props.taskId;
    this.changeName = this.changeName.bind(this);
    this.changeAmount = this.changeAmount.bind(this);
    this.changeWork = this.changeWork.bind(this);
    this.changeCost = this.changeCost.bind(this);
    this.getDate = this.getDate.bind(this);
    this.addAcsessories = this.addAcsessories.bind(this);
    this.deleateAcsessories = this.deleateAcsessories.bind(this);
    this.getTaskObject = this.getTaskObject.bind(this);
    this.ADD_TASK = this.props.ADD_TASK.bind(this);
    this.cancel = this.cancel.bind(this);
  }

  toggleModal = () => {
    this.setState({ modalIsOpen: !this.state.modalIsOpen });
  };

  changeWork(value) {
    this.setState({ work: value });
  }

  changeCost(value) {
    this.setState({ cost: value });
  }

  changeName(value) {
    this.setState({ acsessoriesName: value });
  }

  changeAmount(value) {
    this.setState({ acsessoriesAmount: value });
  }

  addAcsessories(event) {
    if (
      this.state.acsessoriesName === "" ||
      this.state.acsessoriesAmount === ""
    ) {
      event.preventDefault();
    } else {
      let newAcsessories = {
        name: this.state.acsessoriesName,
        amount: this.state.acsessoriesAmount,
        id: ++this.state.id,
        finished: false
      };

      this.setState({
        acsessories: [...this.state.acsessories, newAcsessories],
        acsessoriesName: "",
        acsessoriesAmount: ""
      });
    }
  }

  deleateAcsessories(id) {
    let acsessories = this.state.acsessories;
    let currentid;
    acsessories.forEach(function(item, index) {
      if (item.id === +id) {
        currentid = index;
      }
    });
    acsessories.splice(currentid, 1);

    this.setState({ acsessories: acsessories });
  }

  getDate(date, dateString) {
    this.setState({ date: dateString });
  }

  getTaskObject() {
    let taskObj = {
      id: ++this.taskId,
      workType: this.state.work,
      cost: this.state.cost,
      accessories: this.state.acsessories,
      currentDate: this.state.date,
      pastDate: ""
    };

    this.ADD_TASK(taskObj);

    this.setState({
      acsessories: [],
      acsessoriesName: "",
      acsessoriesAmount: "",
      modalIsOpen: !this.state.modalIsOpen,
      work: "",
      cost: "",
      date: ""
    });
  }

  cancel() {
    this.setState({
      acsessories: [],
      acsessoriesName: "",
      acsessoriesAmount: "",
      work: "",
      cost: "",
      date: ""
    });
  }

  render() {
    return (
      <div>
        {!this.state.modalIsOpen ? null : (
          <div>
            <Input
              label="Работа"
              id="work"
              change={this.changeWork}
              value={this.state.work}
            />
            <Input
              label="Стоимость"
              id="cost"
              change={this.changeCost}
              value={this.state.cost}
            />
            <LocaleProvider locale={enUS}>
              <DatePicker onChange={this.getDate} locale={enUS} />
            </LocaleProvider>
            <AcsessoriesList
              acsessories={this.state.acsessories}
              deleate={this.deleateAcsessories}
            />
            <AcssName
              change={this.changeName}
              val={this.state.acsessoriesName}
            />
            <AcsseAmount
              change={this.changeAmount}
              val={this.state.acsessoriesAmount}
            />
            <Button onClick={this.addAcsessories}>Добавить</Button>
          </div>
        )}
        {!this.state.modalIsOpen ? (
          <Button icon="plus" onClick={this.toggleModal}>
            Добавить
          </Button>
        ) : null}
        {!this.state.modalIsOpen ? null : (
          <div>
            <Button icon="save" onClick={this.getTaskObject}>
              Сохранить
            </Button>
            <Button icon="close" onClick={this.cancel}>
              Отмена
            </Button>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    taskId: state.taskId
  };
};

const mapDispatchToProps = dispatch => {
  return {
    ADD_TASK: task => {
      dispatch(addNewTask(task));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddNewTaskBlock);
