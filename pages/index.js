import next from 'next'
import Head from 'next/head'
import {useEffect, useState, useRef} from 'react'

//I'll need to create a componets folder. I think anyway. 

export default function Home() {
 const [guess, setGuess] =useState("")
 const [letter, setLetter] = useState({
  letter1: "", 
  letter2: "", 
  letter3: "", 
  letter4: "",
  letter5: ""
 })

 const [background, setBackground] = useState({
  letter1: "", 
  letter2: "", 
  letter3: "", 
  letter4: "",
  letter5: ""
 })

 const [test, setTest] = useState(true)

 

 const handleChange = (e) => {
  //need to check the current input and see if it's value length is the same as the max length. 
  //shouldnt be too hard, but how do i get it to move to the next input?
  setLetter({...letter, [e.target.name]: e.target.value})
  console.log(e.target.value)
 }

 
 //lets just test 1 word
 let wordOfDay = "logic"

//  submit works kinda. I do need to add the logic, but hey it's something.
//I'm going to have to look into this more... I'll pro start over from scratch...
 const handleSubmit = (e) =>{
  e.preventDefault()
  //not sure how i'm going to  change the background on submit.
  let wordArr  = [letter.letter1, letter.letter2, letter.letter3, letter.letter4, letter.letter5]
  for(let i = 0; i<5; i++){
    if(wordOfDay.split("").includes(wordArr[i]) && wordOfDay.split("").indexOf(wordArr[i])){
      let test1 = `letter${i+1}`
      setBackground({...background, [test1]: "green"})
    } else if(wordOfDay.split("").includes(wordArr[i])){
      let test2 = `letter${i+1}`
      setBackground({...background,[test2]: "orange"})
    } else {
      let test3 = `letter${i+1}`
      setBackground({...background,[test3]: "grey"})
    }
  }
  // setGuess(x)
 }

//  const handleSubmit = (e) =>{
//     e.preventDefault()

//   setBackground({["letter1"]: "green"})
//  }

  return (
    <>
     <div>Let's Get It Started!</div>
     <div>Going to attempt to re-create wordle</div>
     {/* working on input component  */}
    <form onSubmit={handleSubmit}>
      <input name="letter1" id="first" style={{ backgroundColor: background.letter1}} type="text" maxLength={1} onChange={handleChange} />
      <input name="letter2" id="second" style={{ backgroundColor: background.letter2}} type="text" maxLength={1} onChange={handleChange}/>
      <input name="letter3" id="third" style={{ backgroundColor: background.letter3}} type="text" maxLength={1} onChange={handleChange}/>
      <input name="letter4" id="fourth" style={{ backgroundColor: background.letter4}} type="text" maxLength={1} onChange={handleChange}/>
      <input name="letter5" id="fifth" style={{ backgroundColor: background.letter5}} type="text" maxLength={1} onChange={handleChange}/>
      <button type='submit'>Submit</button>

     </form>

    </>
  )
}
