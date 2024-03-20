import { defineField, defineType } from 'sanity'
import { IoLinkSharp } from "react-icons/io5";
export default defineType({
   name: "links_urls",
   title: 'Links & URLs',
   type: 'document',
   icon: IoLinkSharp,
   fields: [
      defineField({
         name: 'post_title',
         title: 'Post Title',
         type: 'string'
      }),
      defineField({
         name: 'link',
         title: 'Link',
         type: 'url'
      }),
      defineField({
         name: 'links',
         title: 'Links',
         type: 'array',
         of: [{ type: 'url' }]
      }),
      defineField({
         name: 'linkStrings',
         title: 'Link as String',
         type: 'array',
         of: [{ type: 'string' }]
      })
   ]
})