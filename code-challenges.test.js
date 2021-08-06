// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with an expect statement using the variables provided.

describe("codedMessage", () => {
    test("takes in a string and converts letters a to 4 e to 3 i to 1 and o to 0 and returns a new string", () => {
        let secretCodeWord1 = "Lackadaisical"
        // Expected output: "L4ck4d41s1c4l"
        let secretCodeWord2 = "Gobbledygook"
        // Expected output: "G0bbl3dyg00k"
        let secretCodeWord3 = "Eccentric"
        // Expected output: "3cc3ntr1c"
        expect(codedMessage(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
        expect(codedMessage(secretCodeWord2)).toEqual("G0bbl3dyg00k")
        expect(codedMessage(secretCodeWord3)).toEqual("3cc3ntr1c")
    })
})
//  Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.
// b) Create the function that makes the test pass.
// --> Pseudo Code
    // create a function that takes a string as an argument
    // declare a variable and assign the value of the string converted into an array -- use the .split('') string built in method
    // iterate through the array using the .map() array built in method
    // check if each element of the array is equals to 'a', 'e', 'i' or 'o'. Remember to check for capital letters! using conditional statements. I am going to try to use the ternary operators syntax to check for the condition and reasign the value (accordingly) for the elements that check the conditions
    // reasign the value of that specific element in the array to the respective coded value (4, 3, 1 or 0)

const codedMessage = (str) => {
    return str.split('').map(item =>
        item === 'a' || item === 'A' ? item = '4' : 
        item === 'e' || item === 'E' ? item = '3' : 
        item === 'i' || item === 'I' ? item = '1' : 
        item === 'o' || item === 'O' ? item = '0' : 
        item
    ).join('')
}


// --------------------2) Create a function that takes in an array and returns all the words that contain the letter a.

// a) Create a test with an expect statement using the variable provided.

var arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
// Expected output: ["Apple", "Banana", "Orange"]
var arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
// Expected output: ["Mango", "Apricot", "Peach"]



// b) Create the function that makes the test pass.



// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with an expect statement using the variable provided.

var hand1 = [5, 5, 5, 3, 3]
// Expected output: true
var hand2 = [5, 5, 3, 3, 4]
// Expected output: false
var hand3 = [5, 5, 5, 5, 4]
// Expected output: false



// b) Create the function that makes the test pass.
