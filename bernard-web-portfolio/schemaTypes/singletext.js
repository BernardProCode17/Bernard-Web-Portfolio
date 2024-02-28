import {defineField, defineType} from 'sanity'

export default defineType({
   name: 'singletext',
   title: 'Text',
   type: 'document',
   fields: [
      defineField({
            name: 'textContent',
            title: 'Text Content',
            type: 'string'
         })
   ],
})