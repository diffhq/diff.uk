import React from "react";
import styled from "styled-components";

const Footer = ({ address, companyNumber }) => (
  <Row>
    <footer>
      Diff Ltd <Em>|</Em> {Object.values(address || {}).join(", ")} <Em>|</Em> #
      {companyNumber}
    </footer>
  </Row>
);

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
