import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'Paragraph',
  title: 'Paragraph',
  type: 'document',
  fields: [
   
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
  ]
})
