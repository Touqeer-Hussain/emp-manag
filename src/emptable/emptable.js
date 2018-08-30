import React, { Component } from 'react';
import { Icon, Form, Input, Button, Table } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import '../App.css';
import Record from '../record/record'

class EmpTable extends Component{
    constructor(props){
        super(props);
    }

    

btnpre(){
  this.props.btnp.setState({btnPressed:{btp:'a'}})
}

    render(){
        return (
    <div>
    <Table singleLine>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Name</Table.HeaderCell>
        <Table.HeaderCell>Registration Date</Table.HeaderCell>
        <Table.HeaderCell>E-mail address</Table.HeaderCell>
        <Table.HeaderCell>Gender</Table.HeaderCell>
        <Table.HeaderCell>Salary</Table.HeaderCell>
        <Table.HeaderCell></Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
        {this.props.btnp.state.r.map(fn=> <Record fnf={fn} id={fn.email} delete={this}/> )}
        
    </Table.Body>
    </Table>
    <div className='addBtn'>
    <Button circular onClick={() => this.btnpre()} icon='add' color='blue' size='huge' floated='right' style={{marginRight: '10px'}}/>
    </div>
    </div>

        );
    }
}

export default EmpTable;