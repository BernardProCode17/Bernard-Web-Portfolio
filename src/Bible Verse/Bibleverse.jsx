import { useState, useEffect } from 'react'

function VerseOfTheDay() {
   const [verse, setVerse] = useState('');

   useEffect(() => {
      const fetchVerse = async () => {
         try {
            const response = await fetch('https://bible-api.com/matthew+22:37-39');
            const data = await response.json();
            const verseData = data.reference
            setVerse(verseData);
         } catch (error) {
            console.error(error);
         }
      };

      fetchVerse();
   }, []);
   return (
      <aside>
         <p>{verse}</p>
      </aside>
   )
}

export default VerseOfTheDay;