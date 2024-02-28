import { useState, useEffect } from 'react'
function VerseOfTheDay() {
   const [verse, setVerse] = useState('');

   useEffect(() => {

      fetch('https://bible-api.com/matthew+22:37-39')
         .then((data) => {
            console.log(data);
            data.json();
         })   
   }, [])
console.log(verse)
   return (
      <p>{verse}</p>
   )
}

export default VerseOfTheDay;