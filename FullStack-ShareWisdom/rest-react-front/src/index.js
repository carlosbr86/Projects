import React from 'react';
import ReactDOM from 'react-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import {Register,Login,PrivatePage} from './components/Login';//AUTHORIZATION
import About from './components/About';
import Contact from './components/Contact';
import Learn from './components/Learn';
import QuizPage from './QuizPage';
import Admin from './components/Admin';
import CourseList from './components/CourseList';
import CourseDetails from './components/CourseDetails';
import {Router, Route,browserHistory,IndexRoute} from 'react-router';

import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';

import AppBar from 'material-ui/AppBar';



//(darkBaseTheme)
const muiTheme = getMuiTheme({
  palette: {
    textColor: '#424242 ',
  },
  appBar: {
    height: 70,
    color:  '#424242   ',
  }
});
injectTapEventPlugin();

function Song(source, title, description, id) {
  this.source = source;
  this.title = title;
  this.description = description;
  this.id = id;
}

const songs = [
  new Song('https://www.youtube.com/watch?v=hNA0WLQ0jcw', 'Upstep', 'Brutal beat and bulky bass are the foundation for a dubstep frenzy featuring synths, wailing guitar and jitters and glitches. Tempo: 140bpm', 0),
  new Song('https://www.youtube.com/watch?v=Tllw4EPhLiQ', 'Olympian', 'An energetic, vibrant track featuring positive electric guitar licks and modern drums creates useful sports theme. Tempo: 130bpm', 1),
  new Song('https://www.youtube.com/watch?v=GhbhD1HR5vk', 'Transmission', 'Energetic electronic melody featuring modern drums, snaking bass and explosive electric guitar. Tempo: 120bpm', 2)
]

ReactDOM.render(
  <MuiThemeProvider muiTheme={muiTheme}>
    <Router history={browserHistory}>
      <Route songs={songs} path="/" component={App}>
          <IndexRoute component={Admin} />
          <Route path="quiz" component={QuizPage}/>
          <Route path="learn" component={Learn}/>
          <Route path="about" component={About}/>
          <Route path="contact" component={Contact}/>
          <Route path="login" component={Login}/>
          <Route path="/register" component={Register} />
          <Route path="/private" component={PrivatePage} />
          <Route path="/admin" component={Admin} />
          <Route path="/courseList" component={CourseList} />
          <Route path="/course/details/:id" component={CourseDetails} />
          <Route path="/course/learn/:id" component={Learn} />
          <Route path="/course/quiz/:id" component={QuizPage} />           
      </Route>
    </Router>
  </MuiThemeProvider>,
  document.getElementById('root')
);
