module.exports = {
  siteMetadata: {
    title: "SH/TO",
    siteUrl: `https://portfolio35362.gatsbyjs.io/`
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
          implementation: require('sass')
      }
    },
  ],
}
