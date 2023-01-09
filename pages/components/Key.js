import { FONT_LOADER_MANIFEST } from 'next/dist/shared/lib/constants'
import React, { useContext } from 'react'
import { AppContext } from '..'


export default function Key ({keyVal, bigKey}){
    
    const {board, setBoard, currAttempt, setCurrAttemp, onDelete, onEnter, onSelectLetter} = useContext(AppContext)
    const selectLetter = () =>{
        //return to end the function
        if(keyVal === "ENTER"){
         onEnter()
        } else if(keyVal === "DELETE"){
         onDelete()
        } else {
         onSelectLetter(keyVal)
        }
    }
return <div className="key" id={bigKey && "big"} onClick={selectLetter}>{keyVal}</div>
}