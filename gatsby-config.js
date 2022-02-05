require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

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
        name: `Nómada`,
        short_name: `Nómada`,
        start_url: `/`,
        description: `Carta de nómada`,
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
