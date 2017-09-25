import React from 'react';
import './style/style.css'
import ActiveCarBlock from './containers/activeCarBlock';
import TableWithFilter from './containers/TableWithFilter';

function App(props){
  return(
    <div className="appWrapper">
      <ActiveCarBlock/>
      <TableWithFilter />
    </div>  
  )
}


export default App;
