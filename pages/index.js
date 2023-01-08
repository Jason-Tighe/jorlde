import next from 'next'
import Head from 'next/head'
import {useEffect, useState, useRef} from 'react'
import Board from './components/Board'
import Keyboard from './components/Keyboard'
import SuperWord from './components/SuperWord'
import { boardDeafult } from './Words'
import { createContext } from 'react'
export const AppContext = createContext()
//Gotta think of some ways to expand this. Prob have a super word. Probably 7 letter word.

export default function Home() {
  const [board, setBoard] =useState(boardDeafult)

  return (
    <div className= "App">
      <nav>
        <h1>Jordle</h1>
      </nav>
      <AppContext.Provider value ={{board, setBoard}}>
        <Board/>
        <Keyboard/>
      </AppContext.Provider>
    </div>
  )
}
