import {defineField, defineType} from 'sanity'
import { IoDocumentTextOutline } from "react-icons/io5";

export default defineType({
  name: 'paragraph',
  title: 'Paragraph',
  type: 'document',
  icon: IoDocumentTextOutline,
  fields: [
   
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
  ]
})
