import { defineField, defineType } from "sanity";
import { IoLogoJavascript } from "react-icons/io";

export default defineType({
   name: 'language',
   title: 'Language',
   type: 'document',
   icon: IoLogoJavascript,
   fields: [
      defineField({
         name: 'language_name',
         title: 'Language Name',
         type: 'string',
      }),
      defineField({
         name: 'language_description',
         title: 'Language Description',
         type: 'array',
         of: [{ type: 'block' }],
      }),
      //List of concepts learned about the skill 
      defineField({
         name: 'language_list',
         title: 'List Of Concepts',
         type: 'array',
         of: [{ type: 'string' }],
      }),
      defineField({
         name: 'language_icon',
         title: 'Logo',
         type: 'image'
      }),
   ],
})