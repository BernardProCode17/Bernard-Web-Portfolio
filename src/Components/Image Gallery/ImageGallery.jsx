import { useState, useEffect, useContext } from 'react';
import { GlobalContext } from '../../Context/GlobalContext';
function ShuffleGallery({ images }) {

   const { urlFor } = useContext(GlobalContext)
   const [imageFrames, setImageFrames] = useState([]);
   const [remainingImages, setRemainingImages] = useState([...images])

   useEffect(() => {
      const timer = setInterval(() => {

         setImageFrames(prevFrames => {

            const newFrames = [...prevFrames];
            const updatingRemainingImages = [...remainingImages]
            for (let i = 0; i < newFrames.length; i++) {
               if (updatingRemainingImages.length === 0) {
                  updatingRemainingImages.push(...images);
                  continue;
               }
               const randomIndex = Math.floor(Math.random() * updatingRemainingImages.length);
               const selectedImages = updatingRemainingImages[randomIndex];

               if (!selectedImages.photo_video.asset._ref) {
                  console.error('Invalid image: image should be defined');
                  continue;
               }

               newFrames[i] = {
                  src: urlFor(selectedImages.photo_video.assest._ref).url(),
                  width: Math.random() * (100 - 50) + 50,
                  height: Math.random() * (100 - 50) + 50,
               };

               updatingRemainingImages.splice(randomIndex, 1);
            }
            setRemainingImages(updatingRemainingImages)
            return newFrames;
         });
      }, 3000);

      return () => clearInterval(timer);
   }, [images, remainingImages, urlFor, setImageFrames, setRemainingImages]);

   useEffect(() => {
      if (!Array.isArray(images)) {
         console.error('Invalid prop: images should be an array');
         return;
      }

      const initialFrames = images.map((image) => {
         if (!image) {
            console.error('Invalid image: image should be defined');
            return null;
         }
         return {
            src: urlFor(image).url(),
            width: Math.random() * (100 - 50) + 50,
            height: Math.random() * (100 - 50) + 50,
         };
      }).filter(Boolean);

      setImageFrames(initialFrames);
   }, [images, urlFor]);

   return (
      <div>
         {imageFrames.map((frame, index) => (
            <img
               key={index}
               src={frame.src}
               style={{ width: `${frame.width}%`, height: `${frame.height}%` }}
               alt=""
            />
         ))}
      </div>
   );
}

export default ShuffleGallery;

// function ShuffleGallery(){

//    return()
// }

// export default ShuffleGallery