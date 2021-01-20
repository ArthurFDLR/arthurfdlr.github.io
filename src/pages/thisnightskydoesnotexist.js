import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Icon } from '@components/icons';
import { Layout } from '@components';

const database_size = 5000; //Number of generated images in the database

function get_random_image_url() {
  let img_id = (Math.floor(Math.random() * database_size) + 1).toString();
  img_id = '0'.repeat(4 - img_id.length).concat(img_id);
  return `https://firebasestorage.googleapis.com/v0/b/thisnightskydoesnotexist.appspot.com/o/images%2Fseed${img_id}.jpg?alt=media`;
}

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
  .content {
    max-width: 75vh;
    display: block;
    margin-left: auto;
    margin-right: auto;
    -o-object-fit: contain;
    object-fit: contain;
  }
  .project-links {
    display: flex;
    align-items: center;
    position: relative;
    margin-top: 10px;
    margin-left: -10px;
    color: var(--lightest-slate);

    a {
      ${({ theme }) => theme.mixins.flexCenter};
      padding: 10px;
      &.external {
        svg {
          width: 22px;
          height: 22px;
          margin-top: -4px;
        }
      }
      svg {
        width: 20px;
        height: 20px;
      }
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

  return (
    <Layout location={location}>
      <Helmet title="This Night Sky Does Not Exist" />
      <main>
        <StyledMainContainer>
          <div className="content">
            <img
              id="imgDisplay"
              alt="Night sky GAN"
              src={get_random_image_url()}
              className="main-image"
            />
            <div className="project-links">
              <a href="." aria-label="New image">
                <Icon name="Refresh" />
              </a>
              <a
                href="https://colab.research.google.com/github/ArthurFDLR/GANightSky/blob/main/GANightSky.ipynb"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google Colab Notebook">
                <Icon name="Colab" />
              </a>
              <a
                href="https://github.com/ArthurFDLR/GANightSky"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Link">
                <Icon name="GitHub" />
              </a>
              <a
                href="https://youtu.be/dcb4Ckpkx2o"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Youtube Link">
                <Icon name="Youtube" />
              </a>
            </div>
            <header ref={revealTitle}>
              <h1 className="heading">This Night Sky Does Not exist</h1>
              <p className="subtitle">
                <q>The coolest idea in deep learning in the last 20 years</q>, Yann LeCun about
                GANs.
              </p>
              <p>
                <a href="https://mega.nz/file/jugDECiD#Qs6qXAo20g1KKA29o1hq5fTPj8zVikoawDfT1Lm8IGs">
                  Pickle download
                </a>
              </p>
            </header>
          </div>
        </StyledMainContainer>
      </main>
    </Layout>
  );
};
NightSkyPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default NightSkyPage;
