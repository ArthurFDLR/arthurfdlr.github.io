import React, { useRef, useEffect } from 'react';
import CanvasDraw from '../components/hough-transform/canvas-draw/canvasdraw.js';
import CanvasHough from '../components/hough-transform/canvashough';
import { Layout } from '@components';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import sr from '@utils/sr';
import PropTypes from 'prop-types';
import { srConfig } from '@config';

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

  .content {
    max-width: 95vh;
    display: block;
    margin-left: auto;
    margin-right: auto;
    -o-object-fit: contain;
    object-fit: contain;
  }

  .container {
    margin-top: 30px;
    box-shadow: 0px 0px 30px rgba(10, 10, 10, 0.7);
    -o-object-fit: contain;
    object-fit: contain;
    border-radius: 1.5%;
    background-color: #fff;
    padding: 10px;
    display: flex;
  }

  .canvas-custom {
    display: inline-block;
    margin-left: auto;
    margin-right: auto;
    min-width: 300px;
  }
`;

const HoughPage = ({ location }) => {
  const canvasSize = 300;
  const houghCanvasRef = useRef(null);
  const revealTitle = useRef(null);
  const onPointDraw = ({ x, y }) => {
    houghCanvasRef.current.drawHoughPoints({ x, y });
  };

  useEffect(() => {
    sr.reveal(revealTitle.current, srConfig());
  }, []);

  return (
    <Layout location={location}>
      <Helmet title="This Night Sky Does Not Exist" />
      <main>
        <StyledMainContainer>
          <div className="content">
            <header ref={revealTitle}>
              <h1 className="heading">Hough transform</h1>
              <p className="inner">
                The Hough transform is a feature extraction technique used in image analysis,
                computer vision, and digital image processing.
              </p>
            </header>
            <div className="container">
              <CanvasDraw
                className="canvas-custom"
                onPointDraw={onPointDraw}
                canvasWidth={canvasSize}
                canvasHeight={canvasSize}
                brushRadius={2}
                lazyRadius={10}
              />
              <CanvasHough
                className="canvas-custom"
                ref={houghCanvasRef}
                canvasWidth={canvasSize}
                canvasHeight={canvasSize}
                drawingWidth={canvasSize}
                drawingHeight={canvasSize}
                brushRadius={1}
                brushColor="rgba(50, 50, 93, 0.15)"
              />
            </div>
          </div>
        </StyledMainContainer>
      </main>
    </Layout>
  );
};

HoughPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default HoughPage;
