import { useState, useEffect } from 'react'
import './BibleVerse.css'
function VerseOfTheDay() {
   const [verse, setVerse] = useState([]);

   useEffect(() => {
      const fetchVerse = async () => {
         try {
            const response = await fetch('https://bible-api.com/matthew+22:37-39');
            const data = await response.json();
            const verseData1 = data.verses[0].book_id 
            const verseData2 = data.verses[0].chapter
            setVerse([verseData1, ' ', verseData2]);
         } catch (error) {
            console.error(error);
         }
      };
      
      fetchVerse();
   }, []);

   return (
      <aside className='bibleVerse'>
         <p>{verse}</p>
      </aside>
   )
}

export default VerseOfTheDay;