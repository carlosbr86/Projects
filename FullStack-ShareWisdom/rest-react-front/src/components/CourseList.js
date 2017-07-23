import React from 'react';
import axios from 'axios';
import {Link} from 'react-router';

import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';


const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 450,
    overflowY: 'auto',
  },
};

class CourseList extends React.Component{
    constructor(){
    super();
    this.state = {
        courseList: [],
        expanded: false,
    }
    // this.addNewToDo=this.addNewToDo.bind(this);
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


    componentWillMount(){

    axios.get("http://localhost:3005/getAllcourses").then(res => {
        console.log(res.data)
			this.setState({
                courseList: res.data})
		}).catch(error =>{
    		console.log(error);
		})
	 }
        
    render(){
        // let str = localStorage.getItem("courseList");
        // console.log(str);
        // let courseList = [];// JSON.parse(str);
// this.state.courseList
    
        console.log("this.state.courselist=>",this.state.courseList);
        if(this.state.courseList.length === 0) {
            return (
                <div>
                    <Link to="/Login">Create a Course</Link>
                </div>
            )
        }
    
        return(
                <div style={styles.root}>
                    <GridList
                    cellHeight={180}
                    style={styles.gridList}
                    >
                    <Subheader>List of Courses</Subheader>
                    {
                        this.state.courseList.map((course) => (
                        <Link to={"/course/details/"+course.id}>
                            <GridTile
                            key={course.imgsrc}
                            title={course.name}
                            subtitle={<span>by <b>{course.id}</b></span>}
                            actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
                            onClick={()=>this.props.getCourseData(course.id)}
                            >
                            <img src={course.imgsrc} />
                            </GridTile>
                        </Link>
                    ))}
                    </GridList>
                </div>      
        )
    }
}

export default CourseList;


     /*<div className="row photos">
                        <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                            <img className="imgDef  imgCourseList"  src={course.imgsrc}  />
                             <Link to={"/course/details/"+course.id}> <p onClick={()=>this.props.getCourseData(course.id)} className="Photo">Title: {course.name} </p> </Link>
                        </div>
                    </div>*/