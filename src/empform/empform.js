import React, { Component } from 'react';
import { Icon, Form, Input, Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import '../App.css';


const options = [
    { key: 'm', text: 'Male', value: 'Male' },
    { key: 'f', text: 'Female', value: 'Female' },
  ]

class EmpForm extends Component{
    constructor(props){
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            gender: '',
            email: '',
            salary: '',
            date: '',
        }
    }

    componentDidMount(){
      if(this.props.edt){
      let emp = this.props.edt.state.r[this.props.id];
      document.getElementById('form-input-control-first-name').value = emp.name.split(' ')[0]
      document.getElementById('form-input-control-last-name').value = emp.name.split(' ')[1]
      document.getElementById('form-input-control-salary').value = emp.salary;
      document.getElementById('form-input-control-date').value = emp.date;
      document.getElementById('form-input-control-email').value = emp.email;
      console.log(emp.name.split(' ')[0] + ' ' + emp.name.split(' ')[1])
      console.log(emp.name.split(' ')[1])
      let fname = emp.name.split(' ')[0] + ' ' + emp.name.split(' ')[1]
      this.setState({
        firstName: emp.name.split(' ')[0],
        lastName:  emp.name.split(' ')[1],
        date: emp.date,
        gender: emp.gender,
        email: emp.email,
        salary: emp.salary,  
      })

  
      console.log(this.props.edt.state.r[this.props.id])




    }
      
    }

handleFirstName(e){ this.setState({ firstName: e.target.value})}
handlelastName(e){ this.setState({ lastName: e.target.value})}
handleGender = (e, { value }) => this.setState({ gender: value })
handleEmail(e){ this.setState({ email: e.target.value})}
handleSalary(e){ this.setState({ salary: e.target.value})}
handleDate(e){ this.setState({ date: e.target.value})}

handleForm(){

  let d = new Date(this.state.date)

    if(this.props.edt){
  
      this.props.edt.setState({
        name: this.state.firstName + ' ' + this.state.lastName,
        date: this.state.date,
        gender: this.state.gender,
        email: this.state.email,
        salary: this.state.salary  
      })
      this.props.edt.state.r.splice(this.props.id, 1)
      this.props.edt.state.r.push({
        name: this.state.firstName + ' ' + this.state.lastName,
        date: this.state.date,
        gender: this.state.gender,
        email: this.state.email,
        salary: this.state.salary      
      })
        
        this.props.edt.setState({edit: false})
        this.props.edt.setState({btnPressed: null})
    }else{
    this.props.cnc.setState({
      name: this.state.firstName + ' ' + this.state.lastName,
      date: d.getDate() + '/' + d.getMonth()+1 + '/' + d.getUTCFullYear(),
      gender: this.state.gender,
      email: this.state.email,
      salary: this.state.salary  
    })
    
    this.props.cnc.state.r.push({
      name: this.state.firstName + ' ' + this.state.lastName,
      date: d.getDate() + '/' + d.getMonth()+1 + '/' + d.getUTCFullYear(),
      gender: this.state.gender,
      email: this.state.email,
      salary: this.state.salary  
    })
    this.props.cnc.setState({btnPressed: null})
  }

}

cancel(){
  this.props.cnc.setState({btnPressed: null})
}
    render() {
        return (
<div className="form" style={{width: '700px', margin: '20px auto'}}>
      <h3>Add Employee.</h3>
          <Form onSubmit={() => this.handleForm()}>
            <Form.Group widths='equal'>
            <Form.Field required
              id='form-input-control-first-name'
              control={Input}
              label='First Name'
              placeholder='First Name'
              type="text"
              onChange={this.handleFirstName.bind(this)}
            />
            <Form.Field
              id='form-input-control-last-name'
              control={Input}
              label='Last Name'
              placeholder='Last Name'
              type="text"
              onChange={this.handlelastName.bind(this)}
            />
            <Form.Select 
            fluid 
            label='Gender' 
            options={options} 
            id='form-input-control-gender'
            placeholder='Gender' 
            onChange={this.handleGender}
            />
            
            </Form.Group>

            <Form.Group widths='equal'>
                
            <Form.Field
              id='form-input-control-email'
              control={Input}
              label='Email'
              placeholder='abc@domain.com'
              type="email"
              onChange={this.handleEmail.bind(this)}
            />
            
            <Form.Field
              id='form-input-control-salary'
              control={Input}
              label='Salary'
              placeholder='xxxxx'
              type="number"
              onChange={this.handleSalary.bind(this)}
            />
            
            <Form.Field
              id='form-input-control-date'
              control={Input}
              label='Date'
              type="date"
              onChange={this.handleDate.bind(this)}
            />
            </Form.Group>
          <Form.Group>
          <Button animated color='blue' size='large'>
            <Button.Content visible>Save</Button.Content>
            <Button.Content hidden>
            <Icon name='add' />
            </Button.Content>
          </Button>
          <Button animated size='large' onClick={() => this.cancel()}>
            <Button.Content visible>cancel</Button.Content>
            <Button.Content hidden>
            <Icon name='cancel' />
            </Button.Content>
          </Button>
          </Form.Group>
        </Form>
        </div>
        );
    }
}

export default EmpForm;