import next from 'next'
import Head from 'next/head'
import {useEffect, useState, useRef} from 'react'

//I'll need to create a componets folder. I think anyway. 

export default function Home() {
 
 const numOfField = 5
 const [letter, setLetter] = useState({
  letter1: "", 
  letter2: "", 
  letter3: "", 
  letter4: "",
  letter5: ""
 })

 

 const handleChange = (e) => {
  //need to check the current input and see if it's value length is the same as the max length. 
  //shouldnt be too hard, but how do i get it to move to the next input?
  setLetter({...letter, [e.target.name]: e.target.value})
  console.log(e.target.value)
 }



  return (
    <>
     <div>Let's Get It Started!</div>
     <div>Going to attempt to re-create wordle</div>
     {/* working on input component  */}
    <div>
      <input name="letter1" id="first" type="text" maxLength={1} onChange={handleChange} />
      <input name="letter2"  id="second" type="text" maxLength={1} onChange={handleChange}/>
      <input name="letter3"  id="third" type="text" maxLength={1} onChange={handleChange}/>
      <input name="letter4" id="fourth" type="text" maxLength={1} onChange={handleChange}/>
      <input name="letter5" id="fifth" type="text" maxLength={1} onChange={handleChange}/>
     </div>

    </>
  )
}
