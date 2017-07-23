import React from 'react';
import {Link} from 'react-router';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';

class CourseDetails extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
        expanded: false,
        };
    }

    handleExpandChange = (expanded) => {
        this.setState({expanded: expanded});
    };

    handleToggle = (event, toggle) => {
        this.setState({expanded: toggle});
    };

    handleExpand = () => {
        this.setState({expanded: true});
    };

    handleReduce = () => {
        this.setState({expanded: false});
    };


    render(){
        console.log("details id",this.props.state.course)
        if(this.props.state.course.length===0){
            return ( <p>Loading.... </p>)
        }
        return(
            <div className="CourseDetails">
                <h2> Course Description</h2>
                
                <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
                <CardHeader 
                    title={this.props.state.course.name}
                    subtitle={this.props.state.course.name}
                    avatar={this.props.state.course.imgsrc}
                    actAsExpander={true}
                    showExpandableButton={true}
                    /> 
                    <CardText>
                      <Link to={"/course/learn/"+this.props.state.course.id}> Start learning</Link>
                    </CardText>
                  
                    <CardMedia
                    expandable={true}
                    overlay={<CardTitle title={this.props.state.course.name} subtitle="Overlay subtitle" />}
                    >
                    <img src={this.props.state.course.imgsrc} alt="" />
                    </CardMedia>
                     
    
                    <CardTitle title={this.props.state.course.name} subtitle="Card subtitle" expandable={true}  />
            
                    <CardText expandable={true}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                    Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                    Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                    </CardText>
                    <CardActions>
                    <FlatButton label="Expand" onTouchTap={this.handleExpand} />
                    <FlatButton label="Reduce" onTouchTap={this.handleReduce} />
                    </CardActions>
                </Card>
               
            </div>
        )
    }
}

export default CourseDetails;
