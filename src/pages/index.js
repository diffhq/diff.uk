import React from "react";
import logo from "../images/diff.svg";
import SEO from "../components/seo.js";
import Layout from "../components/layout.js";
import styled from "styled-components";
import { StaticQuery, graphql } from "gatsby";

const Index = () => (
  <StaticQuery
    query={indexQuery}
    render={({
      site: {
        siteMetadata: { header, byline, contactEmail }
      }
    }) => (
      <Layout>
        <SEO />
        <Row>
          <Content style={{ margin: "1.45rem" }}>
            <FluidImg src={logo} alt="logo" />
          </Content>
          <Content>
            <h1 style={{ marginTop: 0, marginBottom: "0.4rem" }}>{header}</h1>
            <h2 style={{ marginTop: 0, marginBottom: "0.8rem" }}>{byline}</h2>
            <strong>
              <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
            </strong>
          </Content>
        </Row>
      </Layout>
    )}
  />
);

const indexQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        header
        byline
        contactEmail
      }
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
  @media (max-width: 800px) {
    width: 500px;
  }
  @media (max-width: 600px) {
    width: 450px;
  }
  @media (max-width: 400px) {
    width: 250px;
  }
`;

export default Index;
