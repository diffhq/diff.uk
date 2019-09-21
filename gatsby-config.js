require("dotenv").config({
  path: `.env`
});

const contentfulConfigOptions = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  host: process.env.CONTENTFUL_HOST
};

module.exports = {
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Diff Ltd",
        short_name: "Diff",
        start_url: "/",
        background_color: "#E6E6FA",
        theme_color: "#E6E6FA",
        display: "minimal-ui",
        icon: "src/images/diff-compact-transp.png" // This path is relative to the root of the site.
      }
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-source-contentful",
      options: contentfulConfigOptions
    }
  ]
};
