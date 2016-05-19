(function () {

    var Game = function () {
        
    };
    Game.prototype.start = function () {
        document.getElementById('winner').innerHTML = "?"
    }
    Game.prototype.play = function (playersPick) {
        pickWinner(playersPick, computerPick())
    };
    function computerPick() {
        computerChoice = Math.floor((Math.random() * 3) + 1);
        if (computerChoice === 1) {
            return computerChoice = "paper";
        } else if (computerChoice === 2) {
            return computerChoice = "rock";
        } else {
            return computerChoice = "scissors";
        }
    };
    function pickWinner(playerChoice, computerChoice) {
        if (playerChoice === computerChoice) {
            document.getElementById('winner').innerHTML = "Tie"
        } else if ((playerChoice === "rock" && computerChoice === "scissors") || (playerChoice === "paper" && computerChoice === "rock") || (playerChoice === "scissors" && computerChoice === "paper")) {
            document.getElementById('winner').innerHTML = "Player"
        } else {
            document.getElementById('winner').innerHTML = "Computer"
        }
    }
    window.RockPaperScissors = Game;
})();
// if you do a self encapusaltion function (one that will excute when the win dows loads AND keeps variablies out of the scope)
// you need to make certain functions accessable to the HTML side of the page by declaring it as the "windows.function" to make it work.
// windows.restart = function (){

// }