export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fb03ad9c40d47e04e57278c',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-c8d33hwz',
                  apiId: '8e43dd9d-c7a1-4e8a-96d1-40d385096065'
                },
                {
                  buildHookId: '5fb03ad95a2902cb9732e2d1',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-5am66h6j',
                  apiId: '28f6cd26-f308-48b1-b793-6af213ad9ba1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/gemouhi/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-5am66h6j.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
