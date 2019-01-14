module.exports = {
  siteMetadata: {
    title: "Diff Ltd",
    description:
      "Javascript consultancy based in Sheffield, England. Specializing in React and Node.",
    author: "@diffhq",
    header: "Javascript Consultancy",
    byline: "Specializing in React and Node",
    contactEmail: "hello@diff.uk",
    address: "1 Concourse Way, Sheffield, England, S1 2BJ",
    companyNumber: "11749046"
  },
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
    `gatsby-plugin-styled-components`
  ]
};
