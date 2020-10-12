import React from "react";
import styled from "styled-components";

const Footer = ({ name, address, companyNumber }) => (
  <>
    <Row>
      <a
        href="https://ecologi.com/diff"
        target="_blank"
        rel="noopener noreferrer"
        title="View our Ecologi profile"
        style={{ width: "200px", display: "inline-block" }}
      >
        <img
          alt="We offset our carbon footprint via Ecologi"
          src="https://api.ecologi.com/badges/cpw/5e3fed1c59ec630016e27dd7?black=true&landscape=true"
          style={{ width: "200px" }}
        />
      </a>
    </Row>
    <Row>
      <footer>
        {name} <Em>|</Em>{" "}
        {Object.values(address || {})
          .filter(Boolean)
          .join(", ")}{" "}
        <Em>|</Em> #{companyNumber}
      </footer>
    </Row>
  </>
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
