import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

import { Layout } from '@components';

const StyledMainContainer = styled.main`
  margin: -300px 0;
  @media (max-width: 768px) {
    margin: -200px 0;  
  }
  @media (max-width: 480px) {
    margin: -150px 0;  
  }
  h1 {
    margin: 10vh 0 15px 5px;
  }
  .main-image {
    display: block;
    margin-left: auto;
    margin-right: auto;
    max-width: 75vh;
    border-radius: 1.5%;
    -o-object-fit: contain;
    object-fit: contain;
    box-shadow: 0px 0px 30px rgba(10, 10, 10, 0.7);
    }
  }
`;

const NightSkyPage = ({ location }) => {
  const revealTitle = useRef(null);
  const revealTable = useRef(null);
  const revealProjects = useRef([]);

  useEffect(() => {
    sr.reveal(revealTitle.current, srConfig());
    sr.reveal(revealTable.current, srConfig(200, 0));
    revealProjects.current.forEach((ref, i) => sr.reveal(ref, srConfig(i * 10)));
  }, []);

  const img_id = Math.floor(Math.random() * 5) + 1;
  const img_url = 'https://firebasestorage.googleapis.com/v0/b/thisnightskydoesnotexist.appspot.com/o/images%2F'.concat(
    img_id.toString().concat('.jpg?alt=media'),
  );

  return (
    <Layout location={location}>
      <Helmet title="This Night Sky Does Not Exist" />
      <main>
        <StyledMainContainer>
          <img id="imgDisplay" alt="Night sky GAN" src={img_url} className="main-image" />
          <header ref={revealTitle}>
            <h1 className="heading">This Night Sky Does Not exist</h1>
            <p className="subtitle">
              <q>The coolest idea in deep learning in the last 20 years</q>, Yann LeCun about GANs.
            </p>
          </header>
        </StyledMainContainer>
      </main>
    </Layout>
  );
};
NightSkyPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default NightSkyPage;
