let firstCard = 10
let secondCard = 4
let cards = [];
let sum = firstCard + secondCard;
let hasBlackjack = false;
let isAlive = false;
let message = "";
let = messageEl
// Build a BlackJack Game
function startGame () { 
}
function newCard() {

}
// variables representing two cards 


//challenge #1
//create a new variable and set it to the sum of the two cards 

//chalenge #2 
// code the statements below based on the conditions shown in blackjack.png from the images folder
// your output should work in the browser's console based on changing the values assigned to the cards
    if (sum < 21) {
        message = "Do you want to draw a new card? 🙂";
    }
     else if (sum == 21 ) {
    message = "Wohoo! You've got Blackjack! 🥳";
   } else {
    message = "You're out of the game! 😭"
   }
console.log(message);
