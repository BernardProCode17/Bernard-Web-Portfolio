import { defineField, defineType } from "sanity";
import { HiOutlineDesktopComputer } from "react-icons/hi";
export default defineType({
   name: 'tools',
   title: 'Tools',
   type: 'document',
   icon: HiOutlineDesktopComputer,
   fields: [
      defineField({
         name: 'tool_name',
         title: 'Development Tools',
         type: 'string',
         fieldset: 'tool'
      }),
      defineField({
         name: 'tool_description',
         title: 'Tool Description',
         type: 'array',
         of: [{ type: 'block' }],
         fieldset: 'tool'
      }),
      //List of concepts learned about the skill 
      defineField({
         name: 'tool_list',
         title: 'List Of Concepts',
         type: 'array',
         of: [{ type: 'string' }],
         fieldset: 'tool'
      }),
   ]
})