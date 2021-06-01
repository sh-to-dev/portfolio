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
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
          fonts: [
              `poppins:300,400,500,600,700`       
          ], display: 'swap'       
      }
    },
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true, // defaults to false
        jsxPragma: `jsx`, // defaults to "React"
        allExtensions: true, // defaults to false
      },
    },
  ],
}
