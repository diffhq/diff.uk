import React from "react";
import styled from "styled-components";

const Footer = ({ name, address, companyNumber }) => (
  <Row>
    <footer>
      {name} <Em>|</Em>{" "}
      {Object.values(address || {})
        .filter(Boolean)
        .join(", ")}{" "}
      <Em>|</Em> #{companyNumber}
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
