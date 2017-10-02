import React from 'react';
import AcsessoriesList from '../AddAcsessories/AcsessoriesList'
import AcsessoresName from './AcsessoriesNameInput';
import AcsessoresAmount from './AcsessoriesAmountInput';
import AddButton from './AcsessoriesAddButton';

class AddAcsessories extends React.Component{
    constructor(props){
        super(props);
        this.state={
            acsessories: [],
            acsessoriesName:"",
            acsessoriesAmount:'',
            id: 9999,
        }

        this.changeAmount = this.changeAmount.bind(this);
        this.changeName = this.changeName.bind(this);
        this.addAcsessories = this.addAcsessories.bind(this);
        this.deleateAcsessories = this.deleateAcsessories.bind(this);
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

    changeName(name){
        this.setState({acsessoriesName: name});
    }

    changeAmount(amount){
        this.setState({acsessoriesAmount: amount});
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
    
    render(){
        return(
            <div>
                <AcsessoriesList deleate={this.deleateAcsessories} acsessories={this.state.acsessories} />
                <div className='addBlock'>
                    <AcsessoresName change= {this.changeName} />
                    <AcsessoresAmount change= {this.changeAmount} />
                    <AddButton add={this.addAcsessories} />
                </div>
            </div>


            

        )
    }
}

export default AddAcsessories;