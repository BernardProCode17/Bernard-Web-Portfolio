import { useState, useEffect } from 'react'
import './BibleVerse.css'
function VerseOfTheDay() {
   const [verse, setVerse] = useState([]);
   const [text, setText] = useState('');
   const [isTextVisible, setIsTextVisible] = useState(false);
   useEffect(() => {
      const fetchVerse = async () => {
         try {
            const response = await fetch('https://bible-api.com/matthew+22:37-39');
            const data = await response.json();
            const verseData1 = data.verses[0].book_id
            const verseData2 = data.verses[0].chapter
            const verseData3 = data.verses[0].verse
            // console.log(data.text)
            setVerse([verseData1, ' ', verseData2.toString(), ':', verseData3.toString()]);
            setText(data.text)
         } catch (error) {
            console.error(error);
         }
      };

      fetchVerse();
   }, []);


   function toggleText() {
      setIsTextVisible(!isTextVisible);
   }

   return (
      <aside className='bibleVerse' onClick={toggleText}>
         <p className='bibleVerse-p'>{verse}</p>
         {isTextVisible && <p className='BibleVerse-text'>{text}</p>}
      </aside>
   )
}

export default VerseOfTheDay;