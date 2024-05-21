import { useState } from 'react' 
import './App.css';
import Box from './component/Box'

const choice = {
  rock: {
    name: 'Rock',
    img: `${process.env.PUBLIC_URL}/img/rockImg.png`
  },
  scissors: {
    name: 'Scissors',
    img:`${process.env.PUBLIC_URL}/img/scissorsImg.png`
  },
  paper: {
    name: 'Paper',
    img:`${process.env.PUBLIC_URL}/img/paper.png`
  }
}

function App() {
  const [userSelect, setUserSelect] = useState(null)
  const [computerSelect, setComputerSelect] = useState(null)
  const [result, setResult] = useState(null)
  const [computerResult,setComputerResult] = useState(null)
  
  const playGame = (userChoice) => { 
    setUserSelect(choice[userChoice])
    let computerItem = getRandomItem()
    setComputerSelect(computerItem)
    let userResult = getResult(choice[userChoice], computerItem)
    setResult(userResult) 
    setComputerResult(getComputerResult(userResult))
  }
  const getRandomItem = () => {
    let itemArray = Object.keys(choice)
    let randomIndex = Math.floor(Math.random() * itemArray.length)
    let randomItem = itemArray[randomIndex]
    return choice[randomItem]
  }

  const getResult = (user,computer) => {
    if (user.name === computer.name) {
      return "Tie"
    } else if (user.name === "Rock") return computer.name === "Scissors"? "Win" : "Lose";
    else if (user.name === "Scissors") return computer.name === "Paper"? "Win" : "Lose";
    else if (user.name === "Paper") return computer.name === "Rock"? "Win" : "Lose";
  }

  const getComputerResult = (userResult) => {
    return userResult === "Tie" ? "Tie" : userResult === "Win"? "Lose" : "Win";
  }

  return (
    <div className="wrapper">
      <div className="gameBoxs">
        <Box player="You" item={userSelect} result={result} />
        <Box player="Computer" item={computerSelect} result={computerResult} />
      </div>
      <div className="btnsBox">
        <button onClick={()=>playGame('scissors')} className="iconBtn">✌️</button>
        <button onClick={()=>playGame('rock')} className="iconBtn">✊</button>
        <button onClick={()=>playGame('paper')} className="iconBtn">🖐️</button>
        <p className={`text${result}`}>{result? `${result}`:"Choose the icon!"}</p>
      </div>
    </div>
    
  );
}

export default App;
