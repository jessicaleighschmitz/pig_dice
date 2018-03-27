
function PlayerOne(roll) {
  this.roll = roll;
  this.currentScore = 0;
  this.totalScore = 0;
  this.turn = true;

}



// Player.prototype.totalScore = function() {
//   return this.score + this.roll;
// }
//
PlayerOne.prototype.turn = function() {
  debugger;
  var newScore = (this.roll += this.currentScore);
  return newScore;
}

function diceRoll() {
  var number = Math.floor(Math.random() * 6) + 1;
  return number;
}



$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();
    var roll = diceRoll();
    debugger;
    var playerOneScore = new PlayerOne(roll);
    function roundScore() {
      return playerOneScore.currentScore.turn;
    }

    var roundScore = roundScore();
    console.log(roundScore);

    // $("button").click(function(event) {
    //   var newTotal = playerOneTotal.turn();
    //   console.log(newTotal);
    // })

    // if (endTurn) {
    //
    // } else if (playerOneScore.playerOneTotal === 1) {
    //   return playerOneScore.playerOneTotal += 0;
    // } else {
    //   return playerOneScore.playerOneTotal += roll;
    // };
  });
});
