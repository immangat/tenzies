import './styles/App.css';
import Die from './components/Die';
import React from 'react';
import {nanoid} from 'nanoid'
import Confetti from 'react-confetti'

function App() {

  const[winStatus, setWinStatus] = React.useState(false)
  const[gameStart, setGameStart] = React.useState(false)
  const[scoreBoard, setScoreBoard] = React.useState({})

  function getRandomValue(){
    return Math.floor(Math.random() * 6) + 1
  }
  function generateRandomDice() {
    const dice = [];
    for (let i = 0; i < 10; i++) {
      const value = getRandomValue()
      dice.push({
        key : nanoid(),
        value: value,
        isHeld: false
      })
    }
    return dice
  }

  function checkifWon(){
    var isHeldCount = 0;
    dice.forEach(die => {
      if(die.isHeld){
        isHeldCount++
      }
    })

    return isHeldCount === 10
  }


  

  function changeHeld(dieKey){
    setDice(prev => prev.map(prevDie => dieKey === prevDie.key ? {...prevDie, isHeld : !prevDie.isHeld} : prevDie))
  }


  const [dice, setDice] = React.useState(generateRandomDice())

  React.useEffect(()=>{
        const oneDieValue = dice[0].value
        const allHeld = dice.every(die => die.isHeld)
        const allSame = dice.every(die => die.value === oneDieValue)
    setWinStatus(allHeld && allSame)
  },[dice])
  
  function rollDice() {

    setDice(prev => prev.map(die => die.isHeld ? die : {...die, value: getRandomValue() }))
  }


  function reset(){
    setDice(generateRandomDice())
    setWinStatus(false)
  }
  const diceElements = dice.map(
    die => <Die 
            value = { die.value}
            handleClick = {() => changeHeld(die.key)}
            isHeld = {die.isHeld}
            
            />)

    

    return (
         
    <main >
        {winStatus && <Confetti />}
      <div className = 'content' >
        <div className='content--title'>
        <h1>Tenzies</h1>
        {!gameStart &&  <p>Roll until all dice are the same. Click each die to freeze at its current value between rolls</p>}
     
        </div>
    

          < div className = 'dies' > 
      { gameStart && diceElements} 
      </div> 

      {!gameStart && <button className = 'startGameButton'
              onClick = {() => setGameStart(prev => !prev)}> Start Game 
      </button> }
      {gameStart && <button className = 'rollButton'
              onClick = {winStatus ? reset : rollDice}> {winStatus ? "New Game" : "Roll"} 
      </button> }
      
      </div > 
      </main>
    );
  }

  export default App;