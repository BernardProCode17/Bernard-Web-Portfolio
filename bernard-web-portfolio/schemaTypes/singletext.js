import {defineField, defineType} from 'sanity'
import { IoBrushOutline } from "react-icons/io5";

export default defineType({
   name: 'singletext',
   title: 'Text',
   type: 'document',
   icon: IoBrushOutline,
   fields: [
      defineField({
            name: 'textContent',
            title: 'Text Content',
            type: 'string'
         })
   ],
})