import {defineField, defineType} from 'sanity'

export default defineType({
   name: 'singleText',
   title: 'Single Text',
   type: 'document',
   fields: [
      defineField({
            name: 'textContent',
            title: 'Text Content',
            type: 'blockContent'
         })
   ]
})