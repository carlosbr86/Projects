import React, { Component } from 'react';
import {Link} from 'react-router';
import update from 'react-addons-update';
import axios from 'axios';
// import './App.css';
//MATERIAL



// import MyAwesomeReactComponent from './MyAwesomeReactComponent';
import AppBarExampleComposition from './components/AppBar';
import MaterialTabs from './components/MaterialTabs';
// import Question from './components/Question';
// import quizQuestions from './api/quizQuestions';
// import Quiz from './components/Quiz';
// import Result from './components/Result';
// import QuizPage from './QuizPage';
import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import Divider from 'material-ui/Divider';
import ActionInfo from 'material-ui/svg-icons/action/info';

class App extends Component {
   constructor(props) {
    super(props);
    this.state = {
      page:'quiz',
      logged: false,
      open: false,
      currentCourseId: 1,
      course:[],
      questions: [],
      materials: [],
      picked: false
    };
  	this.login=this.login.bind(this);
    this.getCourseData=this.getCourseData.bind(this);
    // this.changeCourseId=this.changeCourseId.bind(this);
  }
  handleToggle = () => this.setState({open: !this.state.open});
  login(){
    this.setState({
      page:'quiz',
      logged: !this.state.logged
    })
  }

  // changeCourseId(id){
  //   this.setState({
  //     currentCourseId:id
  //   })
  // }

  getCourseData(id){
    axios.get("http://localhost:3005/getCourse/"+id).then(res => {
            console.log("questions=>",res.data[0]);
            console.log("materials =>",res.data[1]);
            console.log("courseData=>",res.data[2])
            this.setState({
              questions: res.data[0],
              materials: res.data[1],
              course: res.data[2],
              currentCourseId:id,
              picked:true
            })
            }).catch(error =>{
                console.log(error);
            })
  }

  //  handleChange = (event, index, value) => this.setState({value});

  render() {
    const songs = this.props.route.songs;
    return (
      <div className="App">
        <AppBarExampleComposition logged={this.state.logged}/>

        <div className="row content">
          <sidebar className="col-xs-2 col-sm-2 col-md-2 col-lg-2 sideBar">
            <List>
              <Link to="/courseList"> <ListItem primaryText="Courses" leftIcon={<ContentInbox />} /></Link>
              <Link to="/learn">      <ListItem primaryText="Learn" open={false} leftIcon={<ActionGrade />} /></Link>
              <Link to="/quiz"> <ListItem primaryText="Quiz" leftIcon={<ContentSend />} /></Link>
              <Link to="/about">  <ListItem primaryText="About" leftIcon={<ContentDrafts />} /></Link>
              <Link to="/contact">  <ListItem primaryText="Contact" leftIcon={<ContentDrafts />} /></Link>
              {/*<Link to="/admin"> <ListItem primaryText="Admin" leftIcon={<ContentInbox />} /></Link>*/}
            </List>
          </sidebar>
          <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10 spa">
            {React.cloneElement(this.props.children, {state:this.state,getCourseData:this.getCourseData,songList: songs, login:this.login})}
          </div>
        </div>
      </div>
    );
  }
}

export default App;

/*
        <div className="row">
          <MaterialTabs />
        </div>*/