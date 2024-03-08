import { useState, useEffect } from 'react'

function VerseOfTheDay() {
   const [verse, setVerse] = useState('');

   useEffect(() => {
      const fetchVerse = async () => {
         try {
            const response = await fetch('https://bible-api.com/matthew+22:37-39');
            const data = await response.json();
            console.log(data)
            setVerse(data.text);
         } catch (error) {
            console.error(error);
         }
      };

      fetchVerse();
   }, []);

   console.log(verse)
   return (
      <p>{verse}</p>
   )
}

export default VerseOfTheDay;