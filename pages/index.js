import next from 'next'
import Head from 'next/head'
import {useEffect, useState, useRef} from 'react'
import Board from './components/Board'
import Keyboard from './components/Keyboard'

//Gotta think of some ways to expand this. Prob have a super word. Probably 7 letter word.

export default function Home() {

  return (
    <div>
      <nav>
        <h1>Jordle</h1>
      </nav>
        <Board/>
        <SuperWord/>
        <Keyboard/>
    </div>
  )
}
