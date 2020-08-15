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
                  buildHookId: '5f377067d56b5bee7cb42317',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-7y8tzk92',
                  apiId: '84b602af-b84e-4f2e-9f31-63ae91db1699'
                },
                {
                  buildHookId: '5f3770671c84898288facca8',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-sxogav3f',
                  apiId: '7c93a654-8ce5-4a1d-9429-c09dcc848a0b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/peyssoa/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-sxogav3f.netlify.app',
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
