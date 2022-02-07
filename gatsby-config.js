module.exports = {
  pathPrefix: '/nomada',
  siteMetadata: {
    title: `nomada`,
    siteUrl: `https://daniyace.github.io/nomada/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Shy Menu`,
        short_name: `Shy Menu`,
        start_url: `/`,
        description: `Menú web para restaurantes`,
        icon: `src/images/appicon.png`,
        icon_options: {
          purpose: `any maskable`,
        },
        lang: `es`,
        background_color: `#000`,
        theme_color: `#000`,
        display: `standalone`,
        crossOrigin: `use-credentials`,
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Montserrat\:300,400,500,300i,700`],
        display: 'swap',
      },
    },
  ],
};
