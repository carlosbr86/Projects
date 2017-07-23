import React, { Component } from 'react';
import {Link,Router} from 'react-router';
import TextField from 'material-ui/TextField';
import axios from 'axios';

class Admin extends React.Component {
  constructor(){
    super();
    // this.formSubmit = this.formSubmit.bind(this);
     this.makeCourse = this.makeCourse.bind(this);   
  }
  
	makeCourse(e) {
		e.preventDefault();
    let formElements = document.getElementById("newCourse").elements;

    var newCourse = {
      courseId: '1',
      name: formElements.courseName.value,
      imgsrc: formElements.courseImgSrc.value,
      type: formElements.courseType.value,
      quizQuestions: [],
      materials: [],
      adminId:'1'
    }
    
		newCourse.materials = [
      {
        url: formElements.url1.value
      },
      {
        url:formElements.url2.value
      },
      {
        url:formElements.url3.value
      }
        
    ]

    newCourse.quizQuestions = [
      {
        question: formElements.question1.value,
        answers: [
            {
              type: "True",
                content: formElements.answer11.value
            },
            {
                type: "False",
                content: formElements.answer12.value
            },
            {
                type: "False",
                content: formElements.answer13.value
            }
        ]
    },
    {
        question: formElements.question2.value,
        answers: [
            {
                type: "True",
                content: formElements.answer21.value
            },
            {
                type: "False",
                content: formElements.answer22.value
            },
            {
                type: "False",
                content: formElements.answer23.value
            }
        ]
    },
    {
        question: formElements.question3.value,
        answers: [
            {
                type: "True",
                content: formElements.answer31.value
            },
            {
                type: "False",
                content: formElements.answer32.value
            },
            {
                type: "False",
                content: formElements.answer33.value
            }
        ]
    },
    {
        question: formElements.question4.value,
        answers: [
            {
                type: "True",
                content: formElements.answer41.value
            },
            {
                type: "False",
                content: formElements.answer42.value
            },
            {
                type: "False",
                content: formElements.answer43.value
            }
        ]
    },
{
    question: formElements.question5.value,
    answers: [
        {
            type: "True",
            content: formElements.answer51.value
        },
        {
            type: "False",
            content: formElements.answer52.value
        },
        {
            type: "False",
            content: formElements.answer53.value
        }
    ]
  }
];

  console.log("materials=>",newCourse.materials)
    // console.log("Course Material=>",courseList);
    axios.post("http://localhost:3005/postCourse",
      {
        name: formElements.courseName.value,
        imgsrc: formElements.courseImgSrc.value,
        type: formElements.courseType.value,
        quizQuestions: newCourse.quizQuestions,
        materials: newCourse.materials,
        adminId:'1'
      }
    );    

    // let str = localStorage.getItem("courseList");
    // let courseList =  JSON.parse(str);
    // courseList.push(newCourse);
    // localStorage.setItem('courseList',JSON.stringify(courseList));

    
	}

  render() {
    return (
      <div id="auth">
        <h3>Registration Form</h3>
        <form id="newCourse" onSubmit={this.formSubmit}>
          <div className="form-group">
            <input placeholder="Course Name"  name="courseName" defaultValue='Course Name' className="form-control" type="text"  />
          </div>          
          <div className="form-group">
            <input placeholder="Course Image"  name="courseImgSrc" defaultValue='http://i1176.photobucket.com/albums/x338/nolovesca11/owl6.jpg' className="form-control" type="text"  />
          </div>
          <div className="form-group">
            <input placeholder="Course Type"  name="courseType" defaultValue='Math' className="form-control" type="text"  />
          </div>  
          <h4>Youtube Urls</h4>
          <div className="form-group">
            <input placeholder="url1"  name="url1" defaultValue='https://www.youtube.com/watch?v=hNA0WLQ0jcw' className="form-control" type="text"  />
          </div>          
          <div className="form-group">
            <input placeholder="url2" name="url2" defaultValue='https://www.youtube.com/watch?v=Tllw4EPhLiQ' className="form-control" type="text"  />
          </div>          
          <div className="form-group">
            <input placeholder="url3" name="url3"  defaultValue='https://www.youtube.com/watch?v=GhbhD1HR5vk' className="form-control" type="text"  />
          </div>

                  <h4>Questions</h4>  
          <div className="form-group">
            <input placeholder="question1" defaultValue="Question1" name="question1"   className="form-control" type="text"  />
          </div>
          <div className="form-group">
            <input placeholder="answer11" name="answer11"  defaultValue="Q1-true" className="form-control" type="text"  />
            <input placeholder="answer12" name="answer12" defaultValue="Q1-false1" className="form-control" type="text"  />
            <input placeholder="answer13" name="answer13"  defaultValue="Q1-false2" className="form-control" type="text"  />
          </div>
          <div className="form-group">
            <input placeholder="question2" name="question2" defaultValue="Question2"  className="form-control" type="text"  />
          </div>
          <div className="form-group">
            <input placeholder="answer21" name="answer21"  defaultValue="Q2-true" className="form-control" type="text"  />
            <input placeholder="answer22" name="answer22" defaultValue="Q2-false1" className="form-control" type="text"  />
            <input placeholder="answer23" name="answer23"  defaultValue="Q2-false2" className="form-control" type="text"  />
          </div>
          <div className="form-group">
            <input placeholder="question3" name="question3" defaultValue="Question3"  className="form-control" type="text"  />
          </div>
          <div className="form-group">
          <div className="form-group">
            <input placeholder="answer31" name="answer31"  defaultValue="Q3-true" className="form-control" type="text"  />
            <input placeholder="answer32" name="answer32" defaultValue="Q3-false1" className="form-control" type="text"  />
            <input placeholder="answer33" name="answer33"  defaultValue="Q3-false2" className="form-control" type="text"  />
          </div>
          </div>
          <div className="form-group">
            <input placeholder="question4" name="question4" defaultValue="Question4" className="form-control" type="text"  />
          </div>
          <div className="form-group">
            <input placeholder="answer41" name="answer41"  defaultValue="Q4-true" className="form-control" type="text"  />
            <input placeholder="answer42" name="answer42" defaultValue="Q4-false1" className="form-control" type="text"  />
            <input placeholder="answer43" name="answer43"  defaultValue="Q4-false2" className="form-control" type="text"  />
          </div>
          <div className="form-group">
            <input placeholder="question5" name="question5" defaultValue="Question5" className="form-control" type="text"  />
          </div>
          <div className="form-group">
            <input placeholder="answer51" name="answer51"  defaultValue="Q5-true" className="form-control" type="text"  />
            <input placeholder="answer52" name="answer52" defaultValue="Q5-false1" className="form-control" type="text"  />
            <input placeholder="answer53" name="answer53"  defaultValue="Q5-false2" className="form-control" type="text"  />
          </div>

          <div className="form-group">
            <button onClick={this.makeCourse} className="btn btn-primary" type="button">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}


export default Admin;;