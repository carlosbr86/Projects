import React from 'react';
import {Link} from 'react-router';
import ReactPlayer from 'react-player';
import axios from 'axios';
import Slider from 'material-ui/Slider';

const styles = {
  customWidth: {
    width: 200,
  },
}
let strCourse = localStorage.getItem("courseList")
let courseMaterial =  JSON.parse(strCourse)[1].material;

class Learn extends React.Component{
    constructor(props){
    super(props);   // should be the first thing
    this.state = {               // State is an object
        musicIndex: 0,
        playing: false,
        value: 1,
        render:0
    }
    this.skipMusic=this.skipMusic.bind(this);
    this.playPauseMusic=this.playPauseMusic.bind(this);
    this.playThisSong=this.playThisSong.bind(this);
}

    handleChange = (event, index, value) => this.setState({value});
    

    skipMusic(add,audioRef) {
        this.setState({
        musicIndex:  this.state.musicIndex + add,
        })
    }

    playPauseMusic(){ 

        this.setState({
            playing: !this.state.playing
        })
    }

    playThisSong(index){
        this.setState({
            musicIndex: Number(index),
            playing: true
        })
    }

    componentWillMount(){

    }


    render(){
    if(this.props.state.materials.length === 0) {
        return (
            <div>
                <Link to="/courseList">Pick Up a Course</Link>
            </div>
        )
    }
    
    console.log("actualID=>",this.props.state);
        return( 
            <div className="learn  ">
                <h2 className="row "> {this.props.state.course.name} - {this.props.state.currentCourseId}</h2>
                <div className="row video-container player col-xs-12 col-sm-12 col-md-12 col-lg-12 " >
                    <ReactPlayer className="player" ref="audioRef" url={this.props.state.materials[this.state.musicIndex].url} 
                    controls={true} playing={this.state.playing} playing onEnded={()=>{alert('wow')}}/> 
                </div>


                <div className="row" >
                    <button disabled={this.state.musicIndex===0? true: false} type="button" className="btn btn-default btn-lg play"  onClick={()=>{this.skipMusic(-1)}} >
                        <span className="glyphicon glyphicon-step-backward" aria-hidden="true"></span>
                    </button>
                    <button disabled={this.state.musicIndex===(this.props.songList.length-1)? true: false} type="button" className="btn btn-default btn-lg  play" onClick={()=>{this.skipMusic(+1)}}>
                        <span className="glyphicon glyphicon-step-forward "  aria-hidden="true"></span> 
                    </button><p/>
                    <h4> {(this.state.musicIndex+1)} of {this.props.state.materials.length}</h4>
                    {(this.state.musicIndex)===(this.props.songList.length-1)? <Link to="/quiz"> Let's check our learning! </Link>:<p/>}
                </div>
            </div>
        )
    }
        
}

export default Learn;
{/*<Slider step={(this.state.musicIndex+1)/this.props.state.materials.length} value={0} />*/}