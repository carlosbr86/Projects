
/*: # Exercises
 #### Quesiton 1
 Create a variable called myName with your name as a String as its value. Create a constant called modernProgrammingLanguage that has a String of your choice as its value, but this time include a type annotation. */

var myName = "Carlos"
let modernProgrammingLanguage: String =  "javascript"

/*:#### Question 2
 Create 5 variables, each containing a different value type. (i.e. the first one contains a string, the second a Boolean, the third an integer, and so on). You can name them whatever you like.*/
var var1 = "Toronto"
var var2 = true
var var3 = 22
var var4 = 3.1415
var var5 = "Brazil"


/*:#### Question 3
 Create a variable called oneHundred that contains the computed value 100 by using the addition and multiplication operators. i.e. the variable should be equal to 100 without writing "var oneHundred = 100".*/
var oneHundred = (2*20+60)*11%1000

/*:#### Question 4
 Using your knowledge of operators, what is the remainder of dividing 1456 by 134.*/
var remaider = 1456%134
/*: #### Question 5
 Create 2 variables with Strings as their values. Then concatenate these two variables to produce a third, new variable.*/

/*: #### Question 6
 Create a constant that contains the value of comparing whether 10 is greater than 7.*/
let greater = 10>7

/*: #### Question 7
 Create a constant that contains the value of comparing whether 10 is equal to 10.*/
let equal = 10==10

/*: #### Question 8
 Create two constants, one containing 1000 and the other containing 1000.0 and then create a third constant containing the value of comparing the first two. What error do you get? Why are you receiving this error?*/
let const1 = 1000
let const2 = 1000.0
//let constEqual = (const1 == const2)

/*:#### Question 9
 Create two variables, one that uses a comparison operator to evaluate to false, the other using a comparison operator to evaluate to true.*/
var Tfalse = 1>2
var Ttrue = 3>1

/*: #### Quesiton 10
 Using the two variables we created in the previous question, create a third variable that contains the value of using the logical AND operator. Create a fourth value that uses the logical OR operator.*/
var Tand = Tfalse && Ttrue
var Tor = Tfalse || Ttrue

/*: #### Question 11
 Explain why you received those answers.*/
//Boolean Logic!

/*: ##### Question 12
 Create a variable that contains an integer and type annotate it. On the next line, update the variable to contain a string. What error do you get? Why are you receiving this error?*/
var integer: Int = 5
//integer = "5" //Cannot assign value of type 'String' to type 'Int'
/*:#### Question 13
 Create an array that holds the numbers 1 through 9, and then append 10 to the end.*/
var array = [1,2,3,4,5,6,7,8,9]
array.append(10)

/*: #### Question 14
 Create a dictionary that holds String keys and Int values. Add any key-value pair to this dictionary and use print() to display it.*/

var dicitionary = ["color" : 1, "saf":3]

