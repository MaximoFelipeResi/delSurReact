import React from 'react'
import { Container } from "reactstrap";
import "../../styles/common-section.css";

const CommonSection = ({ title }) => {
  return (
    <section className="common__section">
      <Container className="text-center">
        <br /> <br /> <br /> <br /> <br />
        <h1>{title}</h1>
        <br /> <br /> <br /> 
      </Container>
    </section>
  )
}

export default CommonSection