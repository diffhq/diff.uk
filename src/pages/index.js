import React from "react";
import logo from "../images/diff.svg";
import SEO from "../components/seo.js";
import Layout from "../components/layout.js";
import styled from "styled-components";
import { graphql } from "gatsby";

const IndexPage = ({
  data: {
    contentfulCompany: {
      type,
      byline,
      contactEmail,
      name,
      description: { description },
      twitterHandle,
      address,
      companyNumber
    }
  }
}) => {
  return (
    <Layout {...{ address, companyNumber }}>
      <SEO {...{ name, description, twitterHandle }} />
      <Row>
        <Content style={{ margin: "1.45rem" }}>
          <FluidImg src={logo} alt="logo" />
        </Content>
        <Content>
          <h1 style={{ marginTop: 0, marginBottom: "0.4rem" }}>{type}</h1>
          <h2 style={{ marginTop: 0, marginBottom: "0.8rem" }}>{byline}</h2>
          <h3 style={{ marginTop: 0, marginBottom: "0.4rem" }}>
            <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
          </h3>
        </Content>
      </Row>
    </Layout>
  );
};

export const pageQuery = graphql`
  query CompanyQuery($contentfulCompanyId: String!) {
    contentfulCompany(id: { eq: $contentfulCompanyId }) {
      type
      byline
      contactEmail
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
const Content = styled.div`
  @media (max-width: 1280px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  @media (max-width: 1280px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const FluidImg = styled.img`
  width: 550px;
  @media (max-width: 600px) {
    width: 350px;
  }
  @media (max-width: 430px) {
    width: 300px;
  }
  @media (max-width: 319px) {
    width: 250px;
  }
`;

export default IndexPage;
