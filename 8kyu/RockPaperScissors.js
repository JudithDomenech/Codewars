/*  Let's play! You have to return which player won! In case of a draw return Draw!.

rps('scissors','paper') Player 1 won!
rps('scissors','rock') Player 2 won!
rps('paper','paper') Draw! */

// if 
const rps = (p1, p2) => {
    if (p1 == p2)
      return 'Draw!';
      
     if (p1 == 'rock' && p2 == 'scissors') 
       return 'Player 1 won!'
     else if (p1 == 'scissors' && p2 == 'paper') 
       return 'Player 1 won!'
     else if (p1 == 'paper' && p2 == 'rock') 
       return 'Player 1 won!'
     else
       return 'Player 2 won!';
  }

  // REFACTOR (if ternario)
  
  const rps = (p1, p2) => p1 == p2 ? 'Draw!' : (p1 == 'rock' && p2 == 'scissors') || (p1 == 'scissors' && p2 == 'paper') || (p1 == 'paper' && p2 == 'rock') ? 'Player 1 won!' : 'Player 2 won!';