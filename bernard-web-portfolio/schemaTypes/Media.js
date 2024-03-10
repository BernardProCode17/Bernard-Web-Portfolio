import {defineField, defineType} from 'sanity'
import { IoMdPhotos } from "react-icons/io";
export default defineType({
   name: 'media',
   title: 'Media',
   type: 'document',
   icon: IoMdPhotos,
   fields:[
      defineField({
         name: 'photo_video',
         title: 'Photo / Video',
         type: 'image'
      }),
      defineField({
         name: 'video',
         title: 'Video',
         type: 'string'
      }),
      defineField({
         name: 'alt_text',
         title: 'Alt Text',
         type: 'string'
      })
   ]
})