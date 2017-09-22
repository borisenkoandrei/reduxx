import React, { Component } from 'react';
import { connect } from 'react-redux'
import ActiveCarBlock from './containers/activeCarBlock'
import Filter from './components/Filter';
import Tasks from './components/Tasks';

function App(props){
  return(
    <div>
      <ActiveCarBlock/>
      <Filter />
      <Tasks />
    </div>  
  )
}


export default App;
