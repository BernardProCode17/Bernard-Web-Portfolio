import {defineField, defineType} from 'sanity'
import { IoFingerPrintOutline } from "react-icons/io5";

export default defineType({
  name: 'projects',
  title: 'Projects',
  type: 'document',
  icon: IoFingerPrintOutline,
  fields: [
    defineField({
      name: 'project_name',
      title: 'Project Name',
      type: 'string',
    }),   
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'project_name',
      }
    }),
    defineField({
      name: 'short_description',
      title: 'Short Description',
      type: 'text',
    }),
    defineField({
      name: 'long_description',
      title: 'Long Description',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'featured_description',
      title: 'Featured Description',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'project_image',
      title: 'Project Image',
      type: 'image',
    }),
    defineField({
      name: 'development_tools',
      title: 'Development Tools',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'development_language',
      title: 'Development Language',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'designDevelop',
      title: 'Design and Development Process',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'design',
              title: 'Design',
              type: 'array',
              of: [{type: 'block'}]
            },
          ],
          fields: [
            {
              name: 'development',
              title: 'Development',
              type: 'array',
              of: [{type: 'block'}]
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'project_link',
      title: 'Link',
      type: 'url'
    }),
    defineField({
      name: 'github_link',
      title: 'GitHub',
      type: 'url'
    }),
  ],
})
