import React, { Component } from 'react';
import { Icon, Form, Input, Button, Table } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import '../App.css';
import EmpForm from '../empform/empform';


class Record extends Component{
    constructor(props){
        super(props);


    }

    render(){

        return (
            <Table.Row key={this.props.id}>
                <Table.Cell>{this.props.fnf.name}</Table.Cell>
                <Table.Cell>{this.props.fnf.date}</Table.Cell>
                <Table.Cell>{this.props.fnf.email}</Table.Cell>
                <Table.Cell>{this.props.fnf.gender}</Table.Cell>
                <Table.Cell>{this.props.fnf.salary}</Table.Cell>
                <Table.Cell>
                <Button circular icon='edit' color='blue' size='small' onClick={() =>{this.props.delete.props.btnp.state.r.map((f, index) => {
            
            if(f.email == this.props.id){
                console.log('d');
                this.props.delete.props.btnp.setState({edit: true, index: index})

            }
        })
                    
                }}/>



                <Button circular icon='user delete' color='red' size='small' onClick={() =>{this.props.delete.props.btnp.state.r.map((f, index) => {
            
            if(f.email == this.props.id){
                let arr = this.props.delete.props.btnp.state.r.splice(index, 1)
                this.props.delete.props.btnp.setState({r: this.props.delete.props.btnp.state.r})
            }
        })
                    
                }}/>
                </Table.Cell>
            </Table.Row>
        );
    }
}

export default Record;