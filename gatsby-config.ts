require("dotenv").config({
  path: `.env`,
})

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {}, // option to add more headers. `Link` headers are transformed by the below criteria
        allPageHeaders: [], // option to add headers for all pages. `Link` headers are transformed by the below criteria
        mergeSecurityHeaders: true, // boolean to turn off the default security headers
        mergeCachingHeaders: true, // boolean to turn off the default caching headers
        transformHeaders: (headers, path) => headers, // optional transform for manipulating headers under each path (e.g.sorting), etc.
        generateMatchPathRewrites: true, // boolean to turn off automatic creation of redirect rules for client only paths
      },
    },
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true,
        jsxPragma: `jsx`,
        allExtensions: true,
      },
    },
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [
          `https://fonts.googleapis.com`,
          `https://fonts.gstatic.com`,
        ],
        web: [
          {
            name: `Open Sans`,
            file: `https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: process.env.PRISMIC_REPOSITORY_NAME,
        accessToken: process.env.PRISMIC_ACCESS_TOKEN,
        schemas: {
          // list of Prismic document schemas
          homepage: require("./src/schemas/homepage.json"),
        },
      },
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: false,
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        excludes: ["/404", "/preview"],
        query: `
              {
                allSitePage {
                  nodes {
                    path
                  }
                }
              }`,
        resolveSiteUrl: () => process.env.WEBSITE_BASE_URL,
        resolvePages: ({ allSitePage: { nodes: allPages } }) => {
          return allPages.map(page => {
            return { ...page }
          })
        },
        serialize: ({ path }) => {
          return {
            url: path,
          }
        },
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: `${process.env.WEBSITE_BASE_URL}`,
        sitemap: `${process.env.WEBSITE_BASE_URL}/sitemap-index.xml`,
        policy: [
          {
            userAgent: "*",
            allow: "/",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `${process.env.WEBSITE_NAME}`,
        short_name: `${process.env.WEBSITE_NAME}`,
        start_url: `/`,
        lang: "fr",
        description: `${process.env.WEBSITE_DESCRIPTION}`,
        background_color: `${process.env.WEBSITE_THEME_COLOR}`,
        theme_color: `${process.env.WEBSITE_THEME_COLOR}`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`,
      },
    },
  ],
}
