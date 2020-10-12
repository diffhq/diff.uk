import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const NotFoundPage = ({
  data: {
    contentfulCompany: {
      name,
      description: { description },
      twitterHandle,
      address,
      companyNumber,
    },
  },
}) => (
  <Layout {...{ address, companyNumber }}>
    <SEO title="404: Not found" {...{ name, description, twitterHandle }} />
    <h1>404 NOT FOUND</h1>
    <p>
      There aren't any other pages on this site I'm afraid! Best just heading
      back to the <Link to="/">homepage</Link>...
    </p>
  </Layout>
);

export const pageQuery = graphql`
  query FourOhFourQuery {
    contentfulCompany(name: { regex: "/diff/i" }) {
      address {
        line1
        city
        country
        postcode
      }
      companyNumber
      name
      description {
        description
      }
      twitterHandle
    }
  }
`;

export default NotFoundPage;
