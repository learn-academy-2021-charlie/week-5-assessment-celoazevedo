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

describe("countainLetterA", () => {
    test("takes in an array of strings and returns all of the words that contains the letter a", () => {
        let arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
        // Expected output: ["Apple", "Banana", "Orange"]
        let arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
        // Expected output: ["Mango", "Apricot", "Peach"]
        expect(countainLetterA(arrayOfWords1)).toEqual(["Apple", "Banana", "Orange"])
        expect(countainLetterA(arrayOfWords2)).toEqual(["Mango", "Apricot", "Peach"])
    })
})

// b) Create the function that makes the test pass.

// --> Pseudo Code
    // create a function that takes in an array as an argument
    // iterate through the array accessing each element -- maybe able to use .filter()
    // humm.. i wonder if JS has a .include? method (thinking in Ruby right now...) 
        //! and JS does have an .includes() method. Also added an OR condition inside the filter to check for capital letter A
    // ... this way we can use the method to check if the word includes the letter a or A
    // and return an array with only the words that have a letter a or A

const countainLetterA = (arr) => {
    return arr.filter((item) => item.includes('a') || item.includes('A'))
}

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with an expect statement using the variable provided.

describe("isFullHouse", () => {
    test("check if the array is a full house and returns a boolean", () => {
        let hand1 = [5, 5, 5, 3, 3]
        // Expected output: true
        let hand2 = [5, 5, 3, 3, 4]
        // Expected output: false
        let hand3 = [5, 5, 5, 5, 4]
        // Expected output: false
        expect(isFullHouse(hand1)).toEqual(true)
        expect(isFullHouse(hand2)).toEqual(false)
        expect(isFullHouse(hand3)).toEqual(false)
    })
  })
  
// b) Create the function that makes the test pass.
// Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.
// --> Pseudo Code
    // create a function that takes in an array as an argument
    // iterate through the array and check each element - use the forEach() higher order function

    ///// initial approach....
    // use a counter to check the number of instances of each element
    // use the value from the counter (ex: counter1 = 3, and counter2 = 2) to check if we have a full house! 

    ///// ... i found this snipet online in which we are declaring a variable counts and assigning an empty object. we apply the forEach method to iterate through the array and for every item in the array we store the item as a key in the counts object and we count the occurances of the item and store as the value of the key. 
    // now I can check for the key values in the counts object (Object.values(counts)) --> this returns an array. 
    // we can iterate through the values array (numOfsameItemsArr) for the presence of an element with the value of 2 and the value of 3!!!
    // return true is the array includes 2 and includes 3. else return false

const isFullHouse = (arr) => {
    let counts = {}
    // populate the counts object with the element value as the key and the number of occurances as the value.
    arr.forEach((item) => { counts[item] = (counts[item] || 0) + 1 })
    // console.log(counts)
    // console.log(Object.keys(counts))
    // create an array with only the number of occurances of each element -- just the values of the counts object.
    let numOfsameItemsArr = Object.values(counts)
    // now we can check if the array includes two elements, one with a value of 2 and another with a value of 3. if it does, it is a full house -> return true, else return false.
    return numOfsameItemsArr.includes(2) 
        && numOfsameItemsArr.includes(3) 
        ? true : false
}
