
const player0ne = {
    name: "Player 1",
    marker: "X",
    score: 0
}
const playerTwo = {
    name: "Player 2",
    marker: "O",
    score: 2
}


const gameboard = document.getElementsByClassName("grid");

const children = document.getElementsByClassName("cell");

// reset button
const resetButton = document.getElementById("resetButton");

// for(let i; i < 9;i++){
//     gameboard[i] = children[i]; 
// }
let myTurn = true;
let currentPlayer = myTurn ? player0ne : playerTwo;
let gameFinished = false;

const output = document.querySelector(".output");

const case1 = children[0];
const case2 = children[1];
const case3 = children[2];
const case4 = children[3];
const case5 = children[4];
const case6 = children[5];
const case7 = children[6];
const case8 = children[7];
const case9 = children[8];



for(let i=0; i < 9; i++){
    children[i].addEventListener("click", () => {
        if (gameFinished) return;
        if(children[i] === case1 ){
            if(children[i].innerHTML === ''){
                children[i].innerHTML = currentPlayer.marker;
                // case1 1,2,3 4,5, 7,9
                 if((case1.innerHTML === case2.innerHTML && case1.innerHTML === case3.innerHTML) || (case1.innerHTML === case4.innerHTML && case1.innerHTML === case7.innerHTML) || (case1.innerHTML === case5.innerHTML && case1.innerHTML === case9.innerHTML)){
                     output.textContent = currentPlayer.name + " is the winner 🏆🎉";
                     gameFinished = true;
                 }
            }
        }else if(children[i] === case2){
         if(children[i].innerHTML === ''){
             children[i].innerHTML = currentPlayer.marker;
             // case2 
             if((case2.innerHTML === case1.innerHTML && case2.innerHTML === case3.innerHTML) || (case2.innerHTML === case5.innerHTML && case2.innerHTML === case8.innerHTML)){
                 output.textContent = currentPlayer.name + " is the winner 🏆🎉";

                 gameFinished = true;
             }
         }
        }else if(children[i] === case3){
         if(children[i].innerHTML === ''){
             children[i].innerHTML = currentPlayer.marker;
             // case3
             if((case3.innerHTML === case2.innerHTML && case3.innerHTML === case1.innerHTML) || (case3.innerHTML === case6.innerHTML && case3.innerHTML === case9.innerHTML) || (case3.innerHTML === case5.innerHTML && case3.innerHTML === case7.innerHTML)){
                 output.textContent = currentPlayer.name + " is the winner 🏆🎉";
                 gameFinished = true;
             }
         }
        }else if(children[i] === case4){
         if(children[i].innerHTML === ''){
             children[i].innerHTML = currentPlayer.marker;
 
             // case4
             if((case4.innerHTML === case1.innerHTML && case4.innerHTML === case7.innerHTML) || (case4.innerHTML === case5.innerHTML && case4.innerHTML === case6.innerHTML)){
                 output.textContent = currentPlayer.name + " is the winner 🏆🎉";
                 gameFinished = true;
             }
         }
        }else if(children[i] === case5){
         if(children[i].innerHTML === ''){
             children[i].innerHTML = currentPlayer.marker;
             // case5
             if((case5.innerHTML === case1.innerHTML && case5.innerHTML === case9.innerHTML) || (case5.innerHTML === case2.innerHTML && case5.innerHTML === case8.innerHTML) || (case5.innerHTML === case4.innerHTML && case5.innerHTML === case6.innerHTML)){
                 output.textContent = currentPlayer.name + " is the winner 🏆🎉";
                 gameFinished = true;
             }
         }
        }else if(children[i] === case6){
         if(children[i].innerHTML === ''){
             children[i].innerHTML = currentPlayer.marker;
 
             // case6
             if((case6.innerHTML === case3.innerHTML && case6.innerHTML === case9.innerHTML) || (case6.innerHTML === case4.innerHTML && case6.innerHTML === case5.innerHTML)){
                 output.textContent = currentPlayer.name + " is the winner 🏆🎉";
                 gameFinished = true;
             }
         }
        }else if(children[i] === case7){
         if(children[i].innerHTML === ''){
             children[i].innerHTML = currentPlayer.marker;
 
             // case7
             if((case7.innerHTML === case1.innerHTML && case7.innerHTML === case4.innerHTML) || (case7.innerHTML === case5.innerHTML && case7.innerHTML === case3.innerHTML) || (case7.innerHTML === case8.innerHTML && case7.innerHTML === case9.innerHTML)){
                 output.textContent = currentPlayer.name + " is the winner 🏆🎉";
                 gameFinished = true;
 
             }
         }
        }else if(children[i] === case8){
         if(children[i].innerHTML === ''){
             children[i].innerHTML = currentPlayer.marker;
 
             // case8
             if((case8.innerHTML === case2.innerHTML && case8.innerHTML === case5.innerHTML) || (case8.innerHTML === case7.innerHTML && case8.innerHTML === case9.innerHTML)){
                 output.textContent = currentPlayer.name + " is the winner 🏆🎉";
                 gameFinished = true;
             }
         }
        }else if(children[i] === case9){
         if(children[i].innerHTML === ''){
             children[i].innerHTML = currentPlayer.marker;
 
             // case9
             if((case9.innerHTML === case3.innerHTML && case9.innerHTML === case6.innerHTML) || (case9.innerHTML === case7.innerHTML && case9.innerHTML === case8.innerHTML) || (case9.innerHTML === case1.innerHTML && case9.innerHTML === case5.innerHTML)){
                 output.textContent = currentPlayer.name + " is the winner 🏆🎉";
                 gameFinished = true;
             }
         }
        }
        //verifier si toutes les cases sont remplis sans gagnant
        let isDraww = true;
        for(let j = 0; j < 9; j++){
            if(children[j].innerHTML === ''){
                isDraww = false;
                break;
            }
        }
        if(isDraww && !gameFinished){
            output.textContent = "🤝 Match nul !";
            gameFinished = true;
        }
        myTurn = !myTurn;
        currentPlayer = myTurn ? player0ne : playerTwo;
     });
    
}

// réinitialisation du jeu
resetButton.addEventListener('click', () =>{
    for(let k=0 ; k<9; k++){
        children[k].innerHTML = '';
        output.textContent = "";
    }
})


