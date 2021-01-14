import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Layout, Hero, About, Featured, Projects, Contact } from '@components'; //Jobs

const StyledMainContainer = styled.main`
  counter-reset: section;
`;

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <StyledMainContainer className="fillHeight">
      <Hero />
      <About />
      <Featured />
      <Projects />
      <Contact />
    </StyledMainContainer>
  </Layout>
);
//<Jobs />
IndexPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default IndexPage;
