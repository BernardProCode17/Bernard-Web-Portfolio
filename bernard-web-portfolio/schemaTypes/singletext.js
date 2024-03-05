import { defineField, defineType } from 'sanity'
import { IoBrushOutline } from "react-icons/io5";
import schemaID from '../../src/Functions/schemaID'

export default defineType({
   name: 'singletext',
   title: 'Text',
   type: 'document',
   icon: IoBrushOutline,
   fields: [
      {
         name: 'textContent',
         title: 'Text Content',
         type: 'array',
         of: [
            {
               type: 'object',
               fields: [
                  defineField({
                     name: 'textContent',
                     title: 'Text Content',
                     type: 'string'
                  }),
                  defineField({
                     name: schemaID(),
                     title: 'Unique Key',
                     type: 'string'
                  })
               ]

            }
         ]
      }
   ],
})