import wordBank from './api/wordle-bank.txt'


export const boardDeafult = [
[" ", " ", " ", " ", " "],
[" ", " ", " ", " ", " "], 
[" ", " ", " ", " ", " "], 
[" ", " ", " ", " ", " "], 
[" ", " ", " ", " ", " "], 
[" ", " ", " ", " ", " "]
];

export const generateWordSet = async () =>{
    //Datastructure: set is like an array but no duplicates and no index numbers
    let wordSet;
    await fetch(wordBank)
    .then((response)=> response.text())
    .then((result)=>{
        const wordArr = result.split("\n")
        wordSet = new Set(wordArr)
    })


    return {wordSet}
}

// const generateSuperSet = () =>{
// going to be the same as above but for 7 letterwords.
// }