import React from 'react';
import { connect } from 'react-redux';
import { addNewTask } from '../../actions/actions'
import { DatePicker } from 'antd';
import '../../../node_modules/antd/lib/date-picker/style/index.css'

import Input from './ModalInput'
import AcsessoriesList from './AcsessoriesList'
import AcssName from './AcsessoriesNameInput'
import AcsseAmount from './AcsessoriesAmountInput'

import { Button } from 'antd';
import 'antd/lib/button/style/index.css';

class AddNewTaskBlock extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            modalIsOpen: false,
            work:"",
            cost:"",
            date:"",

            acsessories: [],
            acsessoriesName:"",
            acsessoriesAmount:'',
            id: 9999,
        }
        
        this.taskId = props.taskId;
        this.changeName=this.changeName.bind(this);
        this.changeAmount = this.changeAmount.bind(this);
        this.changeWork = this.changeWork.bind(this);
        this.changeCost = this.changeCost.bind(this);
        this.getDate = this.getDate.bind(this);
        this.addAcsessories = this.addAcsessories.bind(this);
        this.deleateAcsessories = this.deleateAcsessories.bind(this);
        this.getTaskObject = this.getTaskObject.bind(this);
    }

    changeWork(value){
        this.setState({work: value});
    }

    changeCost(value){
        this.setState({cost: value});
    }

    changeName(value){
        this.setState({acsessoriesName: value});
    }

    changeAmount(value){
        this.setState({acsessoriesAmount: value});
    }

    addAcsessories(event){
         if (this.state.acsessoriesName === "" || this.state.acsessoriesAmount === ""){
             event.preventDefault();
         } else{
            let newAcsessories = {
                name: this.state.acsessoriesName,
                amount: this.state.acsessoriesAmount,
                id: ++this.state.id,
                finished: false,
            }

            this.setState({acsessories:[...this.state.acsessories, newAcsessories]})

            console.log(this.state)
         }
    }

    deleateAcsessories(id){
        let acsessories = this.state.acsessories;
        let currentid;
        acsessories.forEach(function(item, index){
            if(item.id === +id){
                currentid = index;
            }
        })
        acsessories.splice(currentid, 1);

        this.setState({acsessories: acsessories})
    }

    getDate(date, dateString){
        console.log(dateString)
        this.setState({date:dateString})
    }

    getTaskObject(){
        let taskObj = {
            id: ++this.taskId,
            workType: this.state.work,
            cost: this.state.cost,
            accessories: this.state.acsessories,
            currentDate: this.state.date,
            pastDate: "",
        }

        this.props.ADD_TASK(taskObj);
    }


    render(){
        return(
            <div>
                <Input label="Работа" id="work" change={this.changeWork} />
                <Input label="Стоимость" id="cost" change={this.changeCost} />
                <DatePicker onChange={this.getDate} />
                <AcsessoriesList acsessories={this.state.acsessories} deleate={this.deleateAcsessories}/>
                <AcssName change={this.changeName} />
                <AcsseAmount change={this.changeAmount} />
                <Button onClick={this.addAcsessories}>Добавить</Button>
                <Button onClick={this.getTaskObject}>Сохранить</Button>
                <Button>Отмена</Button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
  return {
      taskId: state.taskId,
      
  }
}

const mapDispatchToProps  = (dispatch) =>{
    return{
        ADD_TASK: (task) => {
            dispatch(addNewTask(task))
        },
    }
} 

export default connect()(AddNewTaskBlock)