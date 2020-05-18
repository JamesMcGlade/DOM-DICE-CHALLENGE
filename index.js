// var scores, roundScores, activePlayer, gamePlaying;

// init(); 

// document.querySelector(".btn-roll").addEventListener("click", function(){
//     if (gamePlaying){
//         // Get a random number for the dice
//         var dice = Math.floor(Math.random() * 6) + 1;

//         // Display the result of the dice
//         var diceDOM = document.querySelector(".dice")
//         diceDOM.style.display = "block";
//         diceDOM.src = `img/dice` + dice + ".png";

//         // Update the round score IF the rolled numer is NOT a 1
//         if (dice !== 1){
//             roundScore += dice;
//             document.querySelector("#current-" + activePlayer).textContent = roundScore;
//         } else {
//         nextPlayer();
//         }
//     }
// });

const main = () => {
    console.log('step 1');
    
    setTimeout(() => {
    console.log('step 2');
    }, 2000);
    
    console.log('step 3');
    }

main();