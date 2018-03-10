//: # Unit 2 Pre-Class Exercises

import UIKit

/*: 
 #### Question 1
 Imagine you are creating a database that can hold usernames, passwords, addresses, and phone numbers. The username and password fields are required while the address and phone number fields may be blank. What types in Swift would you use to represent these fields? Why?
 */

/*:
 #### Question 2
 Create the variables described in Exercise 1 and use type annotation to explicitly define their types.
 */
var username: String = "Carlos"
var password: String = "password"
var adress: String? = "Toronto"
var phone: Float? = 6475732239
/*:
 #### Question 3
 Given the following optional String variable, use an if let statement along with string interpolation to print a greeting when a value is present.
 */
var name:String?
if let user = name{
    print("Hi \(user)")
}

/*:
 #### Question 4
 Write an else condition on your if let statement from Exercise 3 which prints "No one's here" when the variable 'name' has no value. Experiment between giving 'name' a String value and a nil value.
*/
else{
    print("No Name")
}
/*:
 #### Question 5
 Using arithmetic operators, create a function to change any given temperature from Fahrenheit to Celsius.
 */
//function template:
func convertTemperatureToCelsius(fahrenheitTemp: Double) -> Double {
    //add correct code here   0 -> 32 / 100C -> 212F
    let celsiusTemp = (fahrenheitTemp - 32)*100/180
    return celsiusTemp
}

var fah:Double = 32
var celsius = convertTemperatureToCelsius(fahrenheitTemp:fah)
print(celsius)
/*:
 #### Question 6
 Use the function you just wrote, along with string interpolation, to print a temperature conversion in a human-readable form, e.g. print "32F is equal to 0C".
 */
print("\(fah)F is equal to \(celsius)C")
/*:
 #### Question 7
 Create an array of 10 songs where each song is a dictionary. The dictionary contains the following keys: title, artist and album.
 */

let dictionarySong = ["title": "song", "artist":"artist1", "album": "one"]
var array = [dictionarySong,dictionarySong,dictionarySong,dictionarySong,dictionarySong,dictionarySong,dictionarySong,dictionarySong,dictionarySong]
print(array)
/*:
 #### Question 8
 Create a range of numbers from 1 to 20, then write a loop which prints out whether a number is a odd or even.
 */
var numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
for number in numbers{
    if(number%2==0){
    print("\(number) even")
    }
    else{
          print("\(number) odd")
    }
}
/*:
 #### Question 9
 Create a basic enumeration that holds the different values of chess pieces
 */
enum ChessPiece {
   case pawn
    case knight
    case bishop
    case rook
    case queen
}

/*:
 #### Question 10
 Modify the enumeration you just wrote so that each enumeration case is given an implicitly defined String raw value
 */

/*:
 #### Question 11
 Create an array of chess pieces and use a for-in loop to print the type of each chess piece in the array
 */
