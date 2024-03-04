const groups = [

   {
      name: 'development',
      title: 'Development tools',
      fields: [
         {
            name: 'development',
            title: 'Development Facet Name',
            type: 'string'
         }
      ]
   },
   {
      name: 'languages',
      title: 'Languages',
      fields: [
         {
            name: 'language',
            title: 'Language Facet Name',
            type: 'string'
         }
      ]
   },
   {
      name: 'design',
      title: 'Design',
      fields: [
         {
            name: 'design',
            title: 'Design Facet Name',
            type: 'string'
         }
      ]
   }

]
export const schemaGroups = groups.map(group => ({
   name: group.name,
   title: group.title,
   type: 'object',
   fields: group.fields,
}));