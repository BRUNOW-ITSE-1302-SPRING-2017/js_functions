/*
	Today we're going to reinforce some of the things we've learned in C#
	by doing the same thing in another programming language: JavaScript. JavaScript
	is the programming language used by browsers and in the last few years has
	also started to be used on servers like PHP, Ruby, and C#.

	Everything you see below that isn't in comments is real JavaScript code. We're
	going to run it in the browser so you can see your changes immediately.

	Unlike C#, JavaScript is not strongly typed. What does that mean?

	First, it means that I can create a new variable as simply as this:
*/

var newVariable;

/*
	It also means that I can change the type of thing in that variable
	without getting any errors:
*/

newVariable = "I am a variable";
newVariable = 42;

/*
	Load the index.html page in your browser -- you won't see any errors. As you 
	can tell, JavaScript is very flexible. Another nice thing about it is that 
	the semicolons are optional -- you can leave them off if you want to:

*/

newVariable = "I don't need no semicolons, just double negatives"

/*
	JavaScript has something similar to Console.WriteLine() that we've been
	using in C#, called console.log:
*/

console.log("This is how I can write to the console");
console.log("I can also log variables by concatenating a string, " + newVariable);
console.log("Or I can make a comment and then share the variable separately", newVariable);

/*
	Like creating variables, creating methods (called functions in JavaScript) is
	much simpler in JavaScript. You don't have to worry about return types, 
	parameter types, or access control:
*/

function myFunction(oneParameter, anotherParameter)
{
	// simple, right?
}

/*
	Writing console.log() takes more keystrokes than I'd prefer. Please write a function
	called "print" that does the same thing as console.log(). It should take two parameters
	and pass them both into console.log()
*/

// CREATE print FUNCTION HERE
function print(aString, aVariable)
{
	console.log(aString, aVariable);
}

/*
	OK now you've gotten your feet wet with creating a simple function that doesn't return
	anything. Next, let's work with a function that returns a value. Here's an 
	example that takes a width and height as parameters and returns the area:
*/

function area(width, height)
{
	return width * height;
}

/*
	I'm going to use the print() function you created above to show off how this 
	works. You'll need to uncomment the code below once you've written that function.
*/

var myArea = area(25, 10);

print("This is my area: ", myArea);

/*
	OK now it is your turn again. Write a function that returns the area of a triangle,
	called areaOfTriangleFromBaseAndHeight() which takes two parameters, base and height:
*/

// CREATE areaOfTriangleFromBaseAndHeight FUNCTION HERE
function areaOfTriangleFromBaseAndHeight(base, height)
{
	return 0.5 * base * height
}


/*
	Now call that function passing in the variables 71 for the height and 256 for
	the base. Use the print() function you wrote before to display the area of the
	triangle:
*/

// CALL areaOfTriangleFromBaseAndHeight FUNCTION HERE
var myArea = areaOfTriangleFromBaseAndHeight(256, 71)
print("This is my area: ", myArea)

/*
	Let's make things a little more difficult. This time, create a function called
	areaOfTriangleFromThreeSides() which takes three parameters, one for each side
	of the triangle, and returns the area:
*/

// CREATE areaOfTriangleFromThreeSides FUNCTION HERE
function areaOfTriangleFromThreeSides()
{

}

/*
	Now call that function passing in the variables 5, 6, and 7 for the three 
	sides. Use the print() function you wrote before to display the area of the
	triangle:
*/

// CALL areaOfTriangleFromThreeSides FUNCTION HERE

/*
	Now we're going to do some visual things. Unfortunately things get a little
	more complicated here so I'm going to start you off with some code and you'll
	just have to take my word for it working. If you load the index.html page in
	a browser, you'll see that there is text on the page that says "I AM TEXT".

	This text is in an HTML element called a DIV. A DIV is just a container for
	holding things, in this case it is holding text. We can create a variable for
	this DIV like so:
*/

var thisDiv = document.getElementById("myDiv");

/*
	Now if I print out this DIV using the function you defined earlier, I can see
	more info about it (uncomment the code once you've written the print() function
	to see the output):
*/

print("This is my DIV: ", thisDiv);

/*
	Not much to it. As you can see, it just prints out the HTML because that is
	all that a DIV is. But we can change other properties of a DIV as well (uncomment 
	the code below to see it work):
*/

 thisDiv.innerHTML = "Whatever I want";
 thisDiv.style.backgroundColor = "#000000";
 thisDiv.style.color = "#FFFFFF";
 thisDiv.style.textAlign = "center";
 thisDiv.style.padding = "5px";
 thisDiv.style.borderRadius = "4px";

/*
	Like GUI programming in C#, we can react to events like clicking on a button.
	First we need to create a variable for the button and then we can assign a
	function that will be called when the button is clicked:
*/

var thisButton = document.getElementById("myButton");

thisButton.onclick = function ()
{
	changeStyle("NEW TEXT", "#FF0000", "#00FFFF")
}

print("This is a background color: ", thisDiv.style.backgroundColor)

/*
	Now if you click the button in the console you'll see the output of "click".

	Next, let's change the styling of the DIV when you click on the button. Create
	a function called changeStyle() that will take 3 parameters: the text to be 
	displayed, a background color in hexadecimal, and a color in hexadecimal. Then 
	call that function when the button is clicked.
*/

// CREATE changeStyle FUNCTION HERE
function changeStyle()
{
    if (thisDiv.style.backgroundColor == "rgb(0, 0, 0)")
    {
        print("yep")
    }
}
// CALL changeStyle WHEN THE BUTTON IS CLICKED HERE