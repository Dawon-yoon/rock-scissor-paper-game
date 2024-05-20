import Box from './component/Box'
import './App.css';
import { useState } from 'react';

const choice = {
  rock: {
    name: 'Rock',
    img: './img/rock.png'
  },
  scissor: {
    name: 'Scissors',
    img: './img/scissors.png'
  },
  paper: {
    name: 'Paper',
    img: './img/fabric.png'
  }
}

function App() {
  const [computerSelect, setComputerSelect] = useState(null)
  
  const [userSelect, setUserSelect] = useState(null)

  const [result, setResult] = useState("")

  const [computerResult,setComputerResult] = useState(null)
  
  const playGame = (userChoice) => {
    setUserSelect(choice[userChoice])
    let computerChoice = randomChoice()
    setComputerSelect(computerChoice)
    setResult(jedgement(choice[userChoice], computerChoice))
    setComputerResult(computerJedgement(jedgement(choice[userChoice], computerChoice)))
  }

  const computerJedgement = (result) => { 
    if (result === "Tie") {
      return "Tie"
    } else if (result === "Win") {
      return "Lose"
    } else { 
      return "Win"
    }
  }

  const jedgement = (user, computer) => { 
    if (user.name === computer.name) {
      return "Tie"
    } else if (user.name === "Rock") return computer.name === "Scissors" ? "Win" : "lose"
    else if (user.name === "Scissors") return computer.name === "Paper" ? "Win" : "Lose"
    else if(user.name === "Paper") return computer.name === "Rock" ? "Win" : "Lose"

  }
  const randomChoice = () => { 
    let itemArray = Object.keys(choice) //
    let randomItem = Math.floor(Math.random()*itemArray.length)
    let final = itemArray[randomItem]
    return choice[final]
  }
  return (
    <div>
      <div className='main'>
        <Box title='You' item={userSelect} result={result} />
        <Box title='Computer' item={computerSelect} result={computerResult} />
      </div>
      <div className='main'>
        <button onClick={()=>playGame('scissor')}>✌️</button>
        <button onClick={()=>playGame('rock')}>✊</button>
        <button onClick={() => playGame('paper')}>🖐️</button>
      </div>
      <h2>{result? `You ${result}!`:'Choose the icon!'}</h2>
    </div>
  );
}

export default App;
