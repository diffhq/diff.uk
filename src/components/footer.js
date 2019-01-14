import React from "react";
import styled from "styled-components";
import { StaticQuery, graphql } from "gatsby";

const Footer = () => (
  <StaticQuery
    query={footerQuery}
    render={({
      site: {
        siteMetadata: { address, companyNumber }
      }
    }) => (
      <Row>
        <h5>
          Diff Ltd <Em>|</Em> {address} <Em>|</Em> #{companyNumber}
        </h5>
      </Row>
    )}
  />
);

const footerQuery = graphql`
  query FooterQuery {
    site {
      siteMetadata {
        address
        companyNumber
      }
    }
  }
`;

const Em = styled.em`
  color: gray;
`;

const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export default Footer;
