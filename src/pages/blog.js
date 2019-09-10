import React from "react";
import logo from "../images/diff.svg";
import SEO from "../components/seo.js";
import Layout from "../components/layout.js";
import styled from "styled-components";
import Blogpost from "../components/blogpost.js";
import { graphql } from "gatsby";

const IndexPage = ({
  data: {
    allContentfulBlogPost: { edges }
  }
}) => {
  return (
    <Layout {...{ address: "Sheffield", companyNumber: 1 }}>
      <SEO
        {...{
          name: "Diff Ltd",
          description: "javascript",
          twitterHandle: "@diffhq"
        }}
      />
      <Row>
        <Content style={{ margin: "1.45rem" }}>
          <FluidImg src={logo} alt="logo" />
        </Content>
        <Content>
          <Blogpost node={edges[0].node.text.json} />
        </Content>
      </Row>
    </Layout>
  );
};

export const pageQuery = graphql`
  query BlogQuery() {
    allContentfulBlogPost {
      edges {
        node {
          title
          tags
          text {
            json
          }
        }
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
