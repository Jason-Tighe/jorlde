import { FONT_LOADER_MANIFEST } from 'next/dist/shared/lib/constants'
import React, { useContext } from 'react'
import { AppContext } from '..'


export default function Key ({keyVal, bigKey}){
    
    const {board, setBoard, currAttempt, setCurrAttempt} = useContext(AppContext)
    const selectLetter = () =>{
        //return to end the function
        if(currAttempt.letterPos > 4) return 
        const newBoard = [...board]
        newBoard[currAttempt.attempt][currAttempt.letterPos] = keyVal
        setBoard(newBoard)
        setCurrAttempt({...currAttempt, letterPos: currAttempt.letterPos+1})
    }
return <div className="key" id={bigKey && "big"} onClick={selectLetter}>{keyVal}</div>
}