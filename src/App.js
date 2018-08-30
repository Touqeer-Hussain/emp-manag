import React, { Component } from 'react';
import logo from './logo.svg';
import { Icon, Form, Input, Button, Table } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import Login from './login/login';
import EmpForm from './empform/empform';
import EmpTable from './emptable/emptable';




class App extends Component {
constructor(){
  super();
  
  this.state = {
    currentUser: null,
    btnPressed: null,
    name: null,
    date: null,
    email: null,
    gender: null,
    salary: null,
    r: [],
    edit: false,
    index: -1

  }
}  


  renderHead() {
    return (
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Dashboard</h1>
          {this.state.currentUser ? 
          <Button onClick={() => this.setState({currentUser: null})} icon='sign-out' color='red' size='huge' floated='right' style={{marginRight: '10px'}}/> : ''
          }
        </header>
      </div>
    )
  }
  
  
  
  render() {
      return(
        <div className="App">
        {this.renderHead()}
        {!this.state.currentUser && <Login user={this}/>}
        {this.state.currentUser && !this.state.btnPressed && !this.state.edit && <EmpTable btnp={this}/>}
        {this.state.currentUser && this.state.btnPressed && !this.state.edit && <EmpForm cnc={this}/>}
        {this.state.edit && <EmpForm id={this.state.index} edt={this}/>}
        </div>
      );
  }
}

export default App;
