import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'projects',
  title: 'Projects',
  type: 'document',
  fields: [
    defineField({
      name: 'project_name',
      title: 'Project Name',
      type: 'string',
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
              title: 'Develoment',
              type: 'array',
              of: [{type: 'block'}]
            },
          ],
        },
      ],
    }),
  ],
})
