
/*:
 #### Question 1
 Create a `class` called `Rectangle` that has an optional double (`Double?`) property called `length` and another optional double (`Double?`) property called `width`. Create an instance of this class and assign values to its `length` and `width` properties.
 */
//class Rectangle {
//
//    var length:Double?
//    var width:Double?
//}
//
//let rect = Rectangle()
//
//rect.length = 5
//rect.width = 10
/*:
 #### Question 2
 Try modifying your `Rectangle` class so its `length` property is a non-optional double (`Double`). What error do you get? Why does this happen?
 */
class Rectangle {
    
    var length:Double
    var width:Double?
    
    init( length : Double,  width:Double) {
        self.length = length
        self.width = width
    }
}

let rect = Rectangle(length: 40, width: 50)

rect.length = 5
rect.width = 10
/*:
 #### Question 3
 Create a copy of your `Rectangle` class and call it `Rectangle2`. Add a method (`func`) to your `Rectangle2` class that returns the rectangle's area if it's `length` and `width` properties are both set. The method should return `nil` otherwise. Create an instance of this class and use this new method to print the area of the `Rectangle2` instance. Hint: The area of a rectangle is its length multiplied by its width.
 */
class Rectangle2{
    var height: Double
    var width: Double
    
    init(_ width: Double, _ height: Double) {
        self.width = width
        self.height = height
    }
    
    func area() -> Double {
        return self.height * self.width
    }
}

var rect2 = Rectangle2(100, 5)
rect2.area()

rect2.width = 80
rect2.area()
/*:
 #### Question 4
 Create a `class` called `Creature` that has a string (`String`) property called `name` and an integer (`Int`) property called `age`. Create an instance of this class with your initializer. Then, print the values of your instance's properties.
 */
class Creature{
    var name: String
    var age: Int
    
    init(_ name: String, _ age: Int) {
        self.name = name
        self.age = age
    }
    func text() -> String {
        return (self.name + "  \(self.age)")
    }

}

var dog = Creature  ("Lucky", 7)
dog.text()

dog.age = 8
rect2.area()
/*: 
 #### Question 5
 Create a `class` called `Cheetah` that is a subclass of `Creature`. Give it an integer (`Int`) property to represent the number of spots it has and assign it a default value of `0`. Create a `Cheetah` instance using the initializer inherited from its superclass (`Creature`). Then, give your `Cheetah` instance any non-zero number of spots.
 */
class Cheetah: Creature{
    var numOfSpots:Int = 0
}

let cheetah = Cheetah("Speedy", 29)
cheetah.numOfSpots = 100
/*: 
 #### Question 6
 Create a `class` called `Person` that is a subclass of `Creature`. Give it a `String?` property called `occupation`. Create an initializer for the Person class that assigns values to all of the instance's properties (including inherited properties). Create an instance of this class with your new initializer. Hint: Your initializer will need to call the superclass' initializer at some point.
 */

/*:
[Closures]:
https://blp.brainstation.io/student-content/xdLT2
#### Question 7
 Construct a `ContactList` class that manages a list of people. Add a method for adding people to the list. Also add a method for printing the names of people in the list. Hint: Which collection type behaves like a list?
 
 For a more advanced problem, add a method for removing a person from the list. Hint: You'll need to use `Array`'s `index(where:)` method to find the person and then remove(at:) to actually perform the removal. You will also need to understand [Closures] to use `Array`'s `index(where:)` method. Hint: Use the person's `name` to evaluate equality in the closure.
*/

/*:
 #### Question 8
 Create an instance of your `ContactList` class. Add at least three people to the list using the method you defined. If you also added a method to remove people, try that out as well.
 */
