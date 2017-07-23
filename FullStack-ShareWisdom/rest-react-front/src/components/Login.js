import React, { Component } from 'react';
import {Link,Router} from 'react-router';
import TextField from 'material-ui/TextField';
import axios from 'axios';
import Admin from './Admin';


class Login extends Component {
  constructor(){
    super();
    this.state = {
      username:null,
      password:null,
      warning:'no-warning'
    };

    this.formSubmit = this.formSubmit.bind(this);
    this.txtFieldChange = this.txtFieldChange.bind(this);
  }

  formSubmit(e){
    let self = this;
    e.preventDefault();
    axios
      .post('http://localhost:3005/login',this.state)
      .then((res) => {
        console.log(res);
        /*
          TASK 2: If the login request is successful, store the authToken from the server in localStorage
            Once token is stored, redirect user to the private page
            If the login request was unsuccessful, do not redirect user and show a warning message.
        */
        if(res.status === 200){
          localStorage.authToken = res.data.token;
          window.location.href = "http://localhost:3000/private";
          // Router.transitionTo('/quiz');
          console.log("sucessfull=>",res.data.token);
          self.setState({
            warning:''
          })
        }


      })
      .catch(()=>{
          self.setState({
            warning:'no-warning'
          })
      })
  }

  txtFieldChange(e){
    if(e.target.name === "username"){
      this.state.username = e.target.value
    }
    else if(e.target.name === "password"){
      this.state.password = e.target.value
    }

    this.setState({
      username:this.state.username,
      password:this.state.password
    });
  }

  render() {

    return (
      <div id="auth">
        <h3>Login Form</h3>
        {this.state.warning==='no-warning' ? <p className={"alert alert-danger no-warning "+ this.state.warning}>Incorrect username or password</p> :  <p/> }
        <form onSubmit={this.formSubmit}>
          <div className="form-group">
            <input 
              onChange={this.txtFieldChange}
              className="form-control"
              type="text" 
              placeholder="Username" 
              name="username" />
          </div>
          <div className="form-group">
            <input 
              onChange={this.txtFieldChange}
              className="form-control"
              type="password" 
              placeholder="Password" 
              name="password" />
          </div>
          <div className="form-group">
            <button className="btn btn-primary">Login</button>
          </div>
            {/*<button className="pull-right btn btn-primary btn-size"  onClick={this.props.login}>login toogle</button>*/}
        </form>
      </div>
    );
  }
}

class PrivatePage extends React.Component{
  constructor(){
    super();
    this.state = {
        data:null,
        loading:true, 
        auth:false
      }
  }
  componentDidMount(){
    /* 
      TASK 3: When accessing this page/component, make sure that there is an authToken in your local storage.
        If there is no authToken, redirect to the login page.
        If there is an authToken, send a request to the '/privatedata' endpoint with the authToken included in the headers.
      */
    const self = this;
    if(localStorage.authToken !== undefined && localStorage.authToken !== null){
        //Add token to request header
        console.log('We got here!')
        axios
        .get('http://localhost:3005/private',{headers:{'authorization1':localStorage.authToken}})
        .then((res) => {
            console.log(res);
            if(res.status === 200){
                self.setState({
                    loading:false,
                    auth:true,
                    data:res.data
                });
            }
        }).catch((err) => {
            //send user back to login page if token is invalid
          window.location.href = 'http://localhost:3000/admin';
        })
    }
    else{
        window.location.href = 'http://localhost:3000';
    }
      
      /*
      TASK 7: The response should include the username, display "Hello, [USERNAME]" on this page.
    */
  }
  render(){
    if (this.state.loading) {
      return <div>loading ...</div>;
    }
    else {
      return (
        <div>
          <h1>Admin page</h1>
          <p>Hello, {this.state.data}</p>
          <Admin />
        </div>
        );
    }
  }
}
class Register extends React.Component {
  constructor(){
    super();
    this.state = {username:null,password:null};

    this.formSubmit = this.formSubmit.bind(this);
    this.txtFieldChange = this.txtFieldChange.bind(this);
  }

  formSubmit(e){
    e.preventDefault();
    axios
      .post('http://localhost:3005/encrypt',this.state)
      .then( (res) =>{
        console.log(res);
      })
  }

  txtFieldChange(e){
    if(e.target.name === "username"){
        this.state.username = e.target.value;
    }
    else if(e.target.name === "password"){
        this.state.password = e.target.value;
    }
    this.setState({
      username:this.state.username,
      password:this.state.password
    });
  }

  render() {
    return (
      <div id="auth">
        <h3>Registration Form</h3>
        <form onSubmit={this.formSubmit}>
          <div className="form-group">
            <input 
              onChange={this.txtFieldChange}
              className="form-control"
              type="text" 
              placeholder="Username" 
              name="username" />
          </div>
          <div className="form-group">
            <input 
              onChange={this.txtFieldChange}
              className="form-control"
              type="password" 
              placeholder="Password" 
              name="password" />
          </div>
          <div className="form-group">
            <button className="btn btn-primary">Register</button>
          </div>
        </form>
      </div>
    );
  }
}

class App extends React.Component{
   render() {
        return (
            <div>
                <ul>
                    <li><Link to="/">Login</Link></li>
                    <li><Link to="/register">Register</Link></li>
                </ul>
                {this.props.children}               
            </div>
        )
    }
}

export {App,Register,Login,PrivatePage};