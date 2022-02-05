module.exports = {
  siteMetadata: {
    title: `nomada`,
    siteUrl: `https://daniyace.github.io/`,
  },
  pathPrefix: '/',
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
        icon: `src/images/icon.png`,
        icon_options: {
          purpose: `any maskable`,
        },
        lang: `es`,
        background_color: `#321f61`,
        theme_color: `#452b86`,
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
