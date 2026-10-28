module.exports = {
  siteMetadata: {
    title: `winery.lv`,
    description: `Directory of Latvia's small and craft wineries, with addresses and websites.`,
    siteUrl: `https://winery.lv`,
    image: `/og-image.jpg`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `winery.lv: Latvian craft wineries`,
        short_name: `winery.lv`,
        start_url: `/`,
        background_color: `#f6f2ec`,
        theme_color: `#0d0d0c`,
        display: `minimal-ui`,
        icon: `src/images/wine-icon.png`,
      },
    },
  ],
};
