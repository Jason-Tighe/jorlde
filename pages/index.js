import next from 'next'
import Head from 'next/head'
import {useEffect, useState, useRef} from 'react'
import Board from './components/Board'
import Keyboard from './components/Keyboard'


export default function Home() {

  return (
    <div>
      <nav>
        <h1>Jordle</h1>
      </nav>
        <Board/>
        <Keyboard/>
    </div>
  )
}
