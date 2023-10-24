//3.1
console.log(3.1);
let shoppingList = ["Milk", "Bread", "Apples"];
console.log(shoppingList.length);
shoppingList[1] = "bananas";
console.log(shoppingList);

//3.2
console.log(3.2);
let shoppingList2 = [];
shoppingList2.push("Milk", "Bread", "Apples");
shoppingList2[1] = "Bananas";
shoppingList2.push("Eggs");
let removedItem = shoppingList2.pop();
console.log("Removed item:", removedItem)
shoppingList2.sort();
console.log(shoppingList2);
let indexOfMilk =
    shoppingList2.indexOf("Milk");
console.log(indexOfMilk);
let indexOfBananas = shoppingList2.indexOf("Bananas");
shoppingList2.splice(indexOfBananas + 1, 0, "Carrots", "Lettuce");
let newList = ["Juice", "Pop"];
shoppingList2 = shoppingList.concat(newList, newList);
let lastIndexPop = shoppingList2.lastIndexOf("Pop");
console.log("Last index value of 'Pop':", lastIndexPop);
let finalShoppingList = ["Milk", "Bananas", "Carrots", "Lettuce", "Apples", "Juice", "Pop", "Juice", "Pop"]
console.log("Final Shopping List:", finalShoppingList);

//3.3
console.log(3.3);
let originalArray = [1, 2, 3];
let nestedArrays = [originalArray, originalArray, originalArray];
console.log(nestedArrays[1][1]);

//3.4
console.log(3.4);
let myCar = {
    make: "toyota",
    model: "revo",
    year: 2022,
    colour: "white",
    isElectric: false
};
console.log("My car:", myCar);
let colorProperty = "color";
myCar[colorProperty] = "Black";
property = "forSale";
myCar[property] = true;
console.log("Make:", myCar.make);
console.log("Model:", myCar.model);
console.log("For Sale:", myCar.forsale);

//3.5
console.log(3.5)
let people = {
    friends: []
};
let friend1 = {
    firstName: "John",
    lastName: "Doe",
    id: 1
};
let friend2 = {
    firstName: "Sara",
    lastName: "Ali",
    id: 2
};
let friend3 = {
    firstName: "Alicia",
    lastName: "Key",
    id: 3
};
people.friends.push(friend1, friend2, friend3);
console.log("Friends list:", people.friends);

//Chapter Project
//Manipulating an array
let originalArray1 = ["lawrence", "steve", true, 35, null, undefined, { test: "one", score: "55" }, ["one", "two"]];
originalArray1.shift();
originalArray1.pop();
originalArray1.unshift("first");
originalArray1[3] = "hello world";
originalArray1[2] = "middle";
originalArray1.push("last");
console.log("Original array:", originalArray1);

//Company prouct catalog
let inventory = [];
let item1 = {
    name: "item 1",
    model: "a03",
    cost: 80,
    quantity: 10
};
let item2 = {
    name: "item 2",
    model: "b73",
    cost: 50,
    quantity: 20
};
let item3 = {
    name: "item 3",
    model: "c49",
    cost: 100,
    quantity: 50
};
inventory.push(item1, item2, item3);
console.log("Inventory Array:", inventory);
console.log("Quantity of item 3:", inventory[2].quantity);
item1.discountPercentage = 10;
console.log("Discount of item 1:", item1.discountPercentage);
item2.quantity = 25;
console.log("Updated Quantity of Item 2:", item2.quantity);

//4.1
console.log(4.1);
let isTrue = true;
console.log("Variable value:", isTrue);
if (isTrue) {
    console.log("The variable is true!");
}
if (!isTrue) {
    console.log("The variable is not true!");
} else {
    console.log("The variable is true when using the 'else' statement!");
}
isTrue = !isTrue;
console.log("UPdated variable value:", isTrue);
if (isTrue) {
    console.log("Now, the variable is true!");
}
if (!isTrue) {
    console.log("Now, the variable is not true!");
} else {
    console.log("Now, the variable is true when using the 'else' statement!");
}

//4.2
console.log(4.2);
let userAge = Number(prompt("Please enter your age:"));
let message2;
if (userAge >= 21) {
    message2 = "Welcome! You can enter the venue and purchase alcohol.";
} else if (userAge >= 19) {
    message2 = "Welcome! You can enter the venue but cannot purchase alcohol.";
} else {
    message2 = "Sorry, you are not allowed to enter the venue.";
}
console.log(message2);

//4.3
console.log(4.3);
let isValidID = true; 
let messagee = isValidID ? "Welcome! You are allowed into the venue." : "Sorry, you are not allowed into the venue.";
console.log(messagee);

//4.4
console.log(4.4);
let randomNumber = Math.floor(Math.random() * 6);
let userQuestion = prompt("Ask me a question:");
let response;
switch (randomNumber) {
    case 0:
        response = "Yes, definitely.";
        break;
    case 1:
        response = "No, not at all.";
        break;
    case 2:
        response = "I'm not sure, try again later.";
        break;
    case 3:
        response = "Possibly, but proceed with caution.";
        break;
    case 4:
        response = "Outlook is not good.";
        break;
    case 5:
        response = "Absolutely, go for it!";
        break;
    default:
        response = "I don't understand the question.";
}
console.log(`You asked: ${userQuestion}`);
console.log(`Magic 8-Ball says: ${response}`);

//4.5
console.log(4.5);
let prize = prompt("Set the prize value by selecting a number between 0 and 10:");
prize = Number(prize);
let outputMessage = "My Selection: ";
switch (prize) {
    case 0:
        outputMessage += "You won a sticker!";
        break;
    case 1:
    case 2:
        outputMessage += "You won a small toy!";
        break;
    case 3:
    case 4:
        outputMessage += "You won a coupon!";
        break;
    case 5:
    case 6:
        outputMessage += "You won a gift card!";
        break;
    case 7:
    case 8:
        outputMessage += "You won a gadget!";
        break;
    case 9:
        outputMessage += "You won a weekend getaway!";
        break;
    case 10:
        outputMessage += "Congratulations! You won the grand prize!";
        break;
    default:
        outputMessage += "Invalid selection. Please choose a number between 0 and 10.";
}
console.log(outputMessage);

//Chapter Project
//Evaluating a number game
const dynamicNumber = Math.floor(Math.random() * 100) + 1; 
let userNumber = prompt("Enter a number:");
userNumber = Number(userNumber);
if (userNumber > dynamicNumber) {
    console.log(`Your number ${userNumber} is greater than the dynamic number ${dynamicNumber}.`);
} else if (userNumber === dynamicNumber) {
    console.log(`Congratulations! Your number ${userNumber} is equal to the dynamic number ${dynamicNumber}.`);
} else {
    console.log(`Sorry, your number ${userNumber} is less than the dynamic number ${dynamicNumber}.`);
}

//Friend checker game
let userName = prompt("Enter a name:");
userName = userName.toLowerCase();
let message;
switch (userName) {
    case "alice":
        message = "Yes, Alice is your friend!";
        break;
    case "bob":
        message = "Yes, Bob is your friend!";
        break;
    case "charlie":
        message = "Yes, Charlie is your friend!";
        break;
    case "dave":
        message = "Yes, Dave is your friend!";
        break;
    default:
        message = "Sorry, I don't know this person.";
}
console.log(message);

//Rock paper scissors game
// Step 1: Create an array containing Rock, Paper, and Scissors
const choices = ["Rock", "Paper", "Scissors"];

// Step 2: Generate random numbers for player and computer selections
let playerIndex = Math.floor(Math.random() * 3); // 0, 1, or 2 for Rock, Paper, Scissors
let computerIndex = Math.floor(Math.random() * 3);

// Step 3: Create variables for response messages
let playerChoice = choices[playerIndex];
let computerChoice = choices[computerIndex];
let resultMessage;

// Step 4 and 5: Check conditions to determine the winner
if (playerChoice === computerChoice) {
    resultMessage = "It's a tie!";
} else if ((playerIndex === 0 && computerIndex === 2) || 
           (playerIndex === 1 && computerIndex === 0) || 
           (playerIndex === 2 && computerIndex === 1)) {
    resultMessage = `You win! ${playerChoice} beats ${computerChoice}.`;
} else {
    resultMessage = `You lose! ${computerChoice} beats ${playerChoice}.`;
}

// Step 6: Output the player and computer selections along with the game result
console.log(`Player chose: ${playerChoice}`);
console.log(`Computer chose: ${computerChoice}`);
console.log(resultMessage);
