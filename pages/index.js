import next from 'next'
import Head from 'next/head'
import {useEffect, useState, useRef} from 'react'
import Board from './components/Board'
import Keyboard from './components/Keyboard'
import SuperWord from './components/SuperWord'
import { boardDeafult, generateWordSet } from './Words'
import { createContext } from 'react'
export const AppContext = createContext()

//Gotta think of some ways to expand this. Prob have a super word. Probably 7 letter word.

export default function Home() {
  const [board, setBoard] =useState(boardDeafult)
  const [currAttempt, setCurrAttempt] = useState({attempt: 0, letterPos: 0})

  const correctWord = "RIGHT"

  const onSelectLetter = (keyVal) =>{
    if(currAttempt.letterPos > 4) return; 
    const newBoard = [...board]
    newBoard[currAttempt.attempt][currAttempt.letterPos] = keyVal
    setBoard(newBoard)
    setCurrAttempt({...currAttempt, letterPos: currAttempt.letterPos+1})
  }

  const onDelete =() =>{
    if(currAttempt.letterPos === 0) return;
    const newBoard = [...board]
    newBoard[currAttempt.attempt][currAttempt.letterPos-1] = " "
    setBoard(newBoard)
    setCurrAttempt({...currAttempt, letterPos: currAttempt.letterPos -1})
  }

  const onEnter = () =>{
    if(currAttempt.letterPos !== 5) return;
    setCurrAttempt({attempt: currAttempt.attempt +1, letterPos: 0})
  }

  return (
    <div className= "App">
      <nav>
        <h1>Jordle</h1>
      </nav>
      <AppContext.Provider value ={{board, setBoard, currAttempt, setCurrAttempt, onDelete, onEnter, onSelectLetter, correctWord}}>
        <div className="game">
        <Board/>
        <Keyboard/>
        </div>
      </AppContext.Provider>
    </div>
  )
}
