import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
// import Toggle from 'material-ui/Toggle';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
// import NavigationClose from 'material-ui/svg-icons/navigation/close';
import {Link} from 'react-router';

class Login extends Component {
  static muiName = 'FlatButton';

  render() {

    return (
      <Link to="/login"><FlatButton {...this.props} label="Login" onClick={this.props.login} /></Link>
    );
  }
}

const Logged = (props) => (
  <IconMenu
    {...props}
    iconButtonElement={
      <IconButton><MoreVertIcon /></IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
    <MenuItem primaryText="My Progess" />
    <MenuItem primaryText="Help" />
    <Link to="/login"><MenuItem primaryText="Sign out"/></Link>
  </IconMenu>
);

Logged.muiName = 'IconMenu';

class AppBarExampleComposition extends Component {
  
  state = {
    logged: true,
  };

  render() {
    return (
      <div>
        {/*<Toggle
          label="Logged"
          defaultToggled={true}
          onToggle={this.handleChange}
          labelPosition="right"
          style={{margin: 20}}
        />*/}
        <AppBar
          title="Share Knowledge"
          iconElementLeft={<IconButton>         {/*<NavigationClose />*/}</IconButton>}
          iconElementRight={this.props.logged ? <Logged /> : <Login />}      
        />

      </div>
    );
  }
}

export default AppBarExampleComposition;