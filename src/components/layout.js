import React from "react";
import styled from "styled-components";
import Footer from "./footer.js";

import "../components/layout.css";

const Layout = ({ children }) => (
  <Page>
    <Content>{children}</Content>
    <Footer />
  </Page>
);

const Page = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Content = styled.div`
  max-width: 960px;
  padding: 0 1.0875rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default Layout;
