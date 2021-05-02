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
  margin: -350px 0;
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
    -o-object-fit: contain;
    object-fit: contain;
  }

  .canvas-container {
    -o-object-fit: contain;
    object-fit: contain;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
  }

  .hover-window {
    margin-top: 30px;
    padding-top: 0;
    padding-bottom: 1%;
    box-shadow: 0px 0px 30px rgba(10, 10, 10, 0.7);
    -o-object-fit: contain;
    object-fit: contain;
    border-radius: 1.5%;
    background-color: #fff;
  }

  .canvas-custom {
    margin-top: 2%;
    margin-bottom: 2%;
  }

  .clear-button {
    ${({ theme }) => theme.mixins.button};
    margin-left: auto;
    margin-right: auto;
    display: block;
    padding: 10px;
  }
`;

const HoughPage = ({ location }) => {
  const canvasSize = 350;
  const gridColor = 'rgba(150,150,150,0.17)';

  const houghCanvasRef = useRef(null);
  const drawCanvasRef = useRef(null);
  const revealTitle = useRef(null);

  const onPointDraw = ({ x, y }) => {
    houghCanvasRef.current.drawHoughPoints({ x, y });
  };

  const clear = () => {
    houghCanvasRef.current.drawGrid();
    drawCanvasRef.current.clear();
  };

  useEffect(() => {
    sr.reveal(revealTitle.current, srConfig());
  }, []);

  return (
    <Layout location={location}>
      <Helmet title="Hough Transform" />
      <main>
        <StyledMainContainer>
          <div className="content">
            <header ref={revealTitle}>
              <h1 className="heading">Hough transform</h1>
              <p className="inner">Draw edges and see their hough transforms.</p>
            </header>
            <div className="hover-window">
              <div className="canvas-container" style={{ minWidth: '360px' }}>
                <CanvasDraw
                  className="canvas-custom"
                  ref={drawCanvasRef}
                  onPointDraw={onPointDraw}
                  canvasWidth={canvasSize}
                  canvasHeight={canvasSize}
                  brushRadius={1}
                  lazyRadius={10}
                  gridColor={gridColor}
                />
                <CanvasHough
                  className="canvas-custom"
                  ref={houghCanvasRef}
                  canvasWidth={canvasSize}
                  canvasHeight={canvasSize}
                  drawingWidth={canvasSize}
                  drawingHeight={canvasSize}
                  brushRadius={1}
                  brushColor="rgba(0, 24, 78, 0.15)"
                  gridColor={gridColor}
                />
              </div>
              <button className="clear-button" onClick={clear}>
                {' '}
                Clear{' '}
              </button>
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
