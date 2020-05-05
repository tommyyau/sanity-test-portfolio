export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5eb1dbb0e731c673c4f131c8',
                  title: 'Sanity Studio',
                  name: 'sanity-test-portfolio-studio-ya4epnkf',
                  apiId: '8e9c2f5d-8ec9-41d7-9591-0a9e93850102'
                },
                {
                  buildHookId: '5eb1dbb0a26c788a77090a3c',
                  title: 'Portfolio Website',
                  name: 'sanity-test-portfolio-web',
                  apiId: 'f39c80ef-5538-45fd-8cf0-092ffcc54fdb'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tommyyau/sanity-test-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-test-portfolio-web.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
