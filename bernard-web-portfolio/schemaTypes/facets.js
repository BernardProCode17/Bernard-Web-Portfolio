import { defineField, defineType } from "sanity";
import { IoIosArrowDropdown } from "react-icons/io";
import { schemaGroups } from "../custom_functions/schemaGroup";
export default defineType({
   name: 'facets',
   title: 'Facets',
   type: 'document',
   icon: IoIosArrowDropdown,
   fieldsets: [
      {
         name: 'development',
         title: 'Development tools',
         options: { collapsible: true, collapsed: false }
      },
      {
         name: 'language',
         title: 'Language',
         options: { collapsible: true, collapsed: false }
      },
      {
         name: 'design',
         title: 'Design',
         options: { collapsible: true, collapsed: false }
      }
   ], fields: [
      {
         name: 'development',
         title: 'Development tools',
         type: 'string',
         fieldset: 'development'
      },
      {
         name: 'language',
         title: 'Language tools',
         type: 'string',
         fieldset: 'language'
      },
      {
         name: 'design',
         title: 'Design tools',
         type: 'string',
         fieldset: 'design'
      },
   ]
})