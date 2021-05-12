const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput ==='paper' || userInput === 'scissors' || userInput === 'bomb') {
      return userInput;
    } else {
      console.log('This is error message!')
    }
  }
  
  function getComputerChoice() {
    switch (Math.floor(Math.random() * 3)) {
      case 0:
      return 'rock';
      case 1:
      return 'paper';
      case 2:
      return 'scissors';
    }
  }
  
  function determineWinner (userChoice, computerChoice) {
    if (userChoice === computerChoice) {
      return 'The game was a tie!'
    }
  
    if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return 'Computer Won!'
      } else {
        return 'User Won!'
      }
    } 
  
    if (userChoice === 'paper') {
      if (computerChoice === 'scissors') {
        return 'Computer Won!'
      } else {
        return 'User Won!'
      }
    }
  
    if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return 'Computer Won!'
      } else {
        return 'User Won!'
      }
    }
  
    if (userChoice === 'bomb') {
      return 'User BOMB!'
    }
    
  }
  
  function playGame() {
    const userChoice = getUserChoice('BOMB');
    const computerChoice = getComputerChoice();
    console.log('User: ' + userChoice);
    console.log('Computer: ' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
  }
  
  playGame();
  