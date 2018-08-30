import React, { Component } from 'react';
import { Icon, Form, Input, Button } from 'semantic-ui-react';
import swal from 'sweetalert';
import 'semantic-ui-css/semantic.min.css';
import '../App.css';

class Login extends Component{
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
    }
  }


  handleUser(e){
    this.setState({
      username: e.target.value,
    });
  }

  handlePass(e){
    this.setState({
      password: e.target.value,
    })
  }

  submitForm(e){
    e.preventDefault();

    if(!this.state.username || !this.state.password){
      swal('', 'Please Provide Credentials!', 'warning');
      this.setState({
        username: '',
        password: ''
      })
      document.getElementById('loginform').reset();
      
    }else{
         if(this.state.username !== 'admin@domain.com' || this.state.password !== 'admin'){
              swal('', 'Wrong Credentials!', 'error');
              this.setState({
                username: '',
                password: ''
              })
              document.getElementById('loginform').reset();
          }else{
            
              this.props.user.setState({currentUser:{uname:'Admin'}})
          }
    }
    
  }

    render(){
        return (
      <div className="form" style={{width: '600px', margin: '20px auto'}}>
      <h3>Please Sign in to continue!</h3>
          <Form onSubmit={this.submitForm.bind(this)} id="loginform">
    
            <Form.Field
              id='form-input-control-first-name'
              control={Input}
              label='Email'
              placeholder='admin@domain.com'
              type="email"
              onChange={this.handleUser.bind(this)}
            />
            <Form.Field
              id='form-input-control-last-name'
              control={Input}
              label='Password'
              placeholder='admin'
              type="password"
              onChange={(this.handlePass.bind(this))}
            />
          <Form.Group>
          <Button animated color='blue'>
            <Button.Content visible>Sign in</Button.Content>
            <Button.Content hidden>
            <Icon name='arrow right' />
            </Button.Content>
          </Button>
          </Form.Group>
        </Form>
        </div>
        );
    }
}

export default Login;