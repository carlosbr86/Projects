const bodyParser    = require('body-parser');
const fs            = require('fs');
const bcrypt        = require('bcryptjs');
const jwt           = require('jsonwebtoken');
const express       = require('express');
const app = express();

let JWT_SECRET_KEY= 'brainstation';

//middleware
const authorize     = require('./middleware/authorize');

//application
const PORT = 3005;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false})); //MidleWare
//defines which origins and headers are permitted
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, authorization1");
  next();
});

// require and configure knex
const knex = require('knex')({
  client: 'postgres',
  connection: {
    host     : '127.0.0.1',
    user     : 'postgres',
    password : 'postgres',
    database : 'usersANDcourses',
    charset  : 'utf8'
  }
});
// then connect bookshelf with knex
const bookshelf = require('bookshelf')(knex);
//BEFORE MAKE THE LINK BETWEEN TABLES

//we will create our model:   It is conventional to give models a singular, capitalized name.
//relations between tables
const User = bookshelf.Model.extend({
    tableName: 'users',
    courses: function() {
        return this.hasMany(Course);
    }
})

const Course = bookshelf.Model.extend({
    tableName: 'courses',
    user: function(){
        return this.belongsTo(User);//,'user_id'
    },
    materials: function() {
        return this.hasMany(Material);
    },
    questions: function() {
        return this.hasMany(Question);
    }
})

const Material = bookshelf.Model.extend({
    tableName: 'materials',
    course: function(){
        return this.belongsTo(Course);//,'user_id'
    }
})

const Question = bookshelf.Model.extend({
    tableName: 'questions',
    course: function(){
        return this.belongsTo(Course);//,'user_id'
    }
})
//POST endpoint for password encryption and creating user profiles
app.post('/encrypt',(req,res) => {
    let username = req.body.username;
    let password = req.body.password;
    //generate salt and create a hash the password
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, (err, hash) => {
                // Store hash in your password DB. 
                if(err) console.log(err);

                fs.writeFile('notpasswords/'+username+'.txt',hash, (err) => {
                    if(err) throw err;
                    res.json('Password Saved');
                });
            });
        });


});

//POST endpoint for logging in to the server
app.post('/login', (req,res) => {
    let username = req.body.username;
    let password = req.body.password;
    /*
        TASK 1: Check if the user provides the right password for their username.
        If the password is correct, then create a token with the username, using a secret key of your choice, and send the token back
    */
    if (username) {
        fs.readFile('notpasswords/'+username+'.txt','UTF8', (err, data) => {
            if(err) {
                throw err;
            }else{
                bcrypt.compare(password, data, (err, result) => {
                    if(result==true){
                        let token = jwt.sign({username:username}, JWT_SECRET_KEY)
				        res.status(200).json({token:token})
                        console.log("Valid Credentials")
			        }else{
				        res.status(403)
				        .json({error: "Invalid Credentials"})
                        console.log("Invalid Credentials")
			        };
                });
            };
       });
   }else{
        res.send("Invalid User")    
    };
});   
 
//GET endpoint for '/privatedata' goes here:
/* 
    TASK 5: This endpoint should require that all requests to this endpoint pass through the middleware created in the previous task.
    TASK 6: If the request passes through the middleware and makes it to this endpoint, send back the username that was stored in the token. 
*/


// app.get('/private', authorize(JWT_SECRET_KEY), (req, res)=>{
//     let username = req.decoded.username;
//     res.send(username)
// })



app.listen(PORT, () => {
    console.log('Server Started on http://localhost:%s',PORT);
    console.log('Press CTRL + C to stop server');
});


// POSTGRES METHODS

// const newUser = new User({
//   username: "will",
//   name: "Will Crane",
//   password: "will",
//   email:"will@gmail.com",
//   admin:"true"
// });


    User.fetchAll()
        .then((users)=>{
            console.log("Users:",users.models.length );
            if(users.models.length===0){
                const newUser = new User({
                    username: "G",
                    name: "Carlos Rodrigues",
                    password: "carlos",
                    email:"carlos@gmail.com",
                    admin:"true"
                    });
                    newUser.save().then(result=>{
                    console.log("sucessfully saved");
                    console.log(result.attributes);
                })
            }
        });

// User.fetchAll()
//     .then((users)=>{
//         console.log(users);
//         console.log("#################################################################");
//     });
// User.fetchAll()
//         .then((users)=>{
//             if(users){
//                 console.log("users->",users.attributes)
//                 // const newUser = new User({
//                 // username: "carlos",
//                 // name: "Carlos Rodrigues",
//                 // password: "carlos",
//                 // email:"carlos@gmail.com",
//                 // admin:"true"
//                 // });
//                 // newUser.save().then(result=>{
//                 // console.log("sucessfully saved");
//                 // console.log(result.attributes);
//                 // })

//             }
            
            
//         })


app.get('/getAllUsers', (req, res) => {
    console.log("######################### GET ALL USERS ##########################");
    User.fetchAll()
        .then((users)=>{
            res.send(users);
            console.log(users);
        });
});




app.get('/getAllCourses', (req, res) => {
    console.log("######################### GET ALL COURSES ##########################");
    Course.fetchAll()
        .then((courses)=>{
            res.send(courses);
            console.log(courses);
        }).catch(e=>res.send(e));
    });



app.post('/postCourse', (req,res) =>{
    console.log("######################### CREATE NEW COURSE ##########################");
    let newCourse = new Course({
        name: req.body.name,
        imgsrc: req.body.imgsrc,
        type: req.body.type,
        user_id: req.body.adminId
    })
    let courseId= null;
    newCourse.save()
        .then(course => {
            console.log(course.attributes.id);
            courseId=course.attributes.id;
            let materials = req.body.materials;
            let quizQuestions = req.body.quizQuestions;
            materials.map((material)=>{
                let newMaterial = new Material({
                    url: material.url,
                    course_id: courseId
                })
                newMaterial.save()
                .then(material => {
                    // console.log("material=>",material);
                })
            })
            quizQuestions.map((quiz)=>{
                let newQuizQuestion = new Question({
                    course_id: courseId,
                    question: quiz.question,
                    trueAnswer: quiz.answers[0].content,
                    wrongAnswer1: quiz.answers[1].content,
                    wrongAnswer2: quiz.answers[2].content,
                })
               newQuizQuestion.save()
                .then(quiz => {
                    // console.log("quiz=>",quiz);
                })
            })
    })
    res.send(newCourse);
})

app.get('/getCourse/:id', (req,res) =>{
    let sendCourse=[];
    Course.where({id:req.params.id}) //req.params.id
        .fetch()
        .then(course=>{
            Course.where({id: req.params.id}).fetch({withRelated: ['questions', 'materials']}).then(function(courses) {
                console.log("############################# GET REQUEST ####################################")
                let questions = courses.related( 'questions').models;
                let questionsArray = questions.map((question)=>{

                    let objectItem =   {
                        question: question.attributes.question,
                        answers: [
                            {type: "True",content: question.attributes.trueAnswer},
                            {type: "False",content: question.attributes.wrongAnswer1},
                            {type: "False",content: question.attributes.wrongAnswer2}
                        ]
                    }
                    return objectItem
                })
                console.log(questionsArray)
                sendCourse.push(questionsArray);
                sendCourse.push(courses.related( 'materials'));
                sendCourse.push(course);
                res.send(sendCourse);
            });


        })  
})

