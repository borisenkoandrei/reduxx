import React from 'react';
import './style/style.css'
import ActiveCarBlock from './containers/activeCarBlock';
import TableWithFilter from './containers/TableWithFilter';
import AddNewTask from './components/AddNewTaskBlock/AddNewTaskBlock'

function App(props){
  return(
    <div>
      <div className="appWrapper">
        <ActiveCarBlock/>
        <TableWithFilter />
      </div>  
      <AddNewTask />
    </div>
  )
}


export default App;
