import React from 'react';
import PropTypes from 'prop-types'; // TODO: upgrade to latest eslint tooling

/* eslint-disable react/prop-types */
export default class CanvasHough extends React.Component {
  static propTypes = {
    brushRadius: PropTypes.number,
    brushColor: PropTypes.string,
    gridColor: PropTypes.string,
    backgroundColor: PropTypes.string,
    hideGrid: PropTypes.bool,
    canvasWidth: PropTypes.number,
    canvasHeight: PropTypes.number,
    drawingWidth: PropTypes.number,
    drawingHeight: PropTypes.number,
  };

  static defaultProps = {
    brushRadius: 10,
    brushColor: '#444',
    gridColor: 'rgba(150,150,150,0.17)',
    backgroundColor: '#FFF',
    hideGrid: false,
    canvasWidth: 400,
    canvasHeight: 400,
    drawingWidth: 400,
    drawingHeight: 400,
  };

  constructor(props) {
    super(props);

    this.canvas = null;
    this.ctx = null;

    this.houghThetaDelta = 4;
    this.numAngleCells = 360;
    this.hough_accum = Array(this.numAngleCells);
    this.rhoMax = Math.sqrt(
      props.drawingWidth * props.drawingWidth + props.drawingHeight * props.drawingHeight,
    );

    this.cosTable = Array(this.numAngleCells);
    this.sinTable = Array(this.numAngleCells);
    for (
      let theta = 0, thetaIndex = 0;
      thetaIndex < this.numAngleCells;
      theta += Math.PI / this.numAngleCells, thetaIndex++
    ) {
      this.cosTable[thetaIndex] = Math.cos(theta);
      this.sinTable[thetaIndex] = Math.sin(theta);
    }
  }

  // Implementation with lookup tables.
  hough(x, y) {
    const curve_points = [];
    let rho;
    let thetaIndex = 0;
    x -= this.props.drawingWidth / 2;
    y -= this.props.drawingHeight / 2;
    for (; thetaIndex < this.numAngleCells; thetaIndex += this.houghThetaDelta) {
      rho = x * this.cosTable[thetaIndex] + y * this.sinTable[thetaIndex];
      //rho >>= 1;
      if (this.hough_accum[thetaIndex] === undefined) {
        this.hough_accum[thetaIndex] = [];
      }
      if (this.hough_accum[thetaIndex][rho] === undefined) {
        this.hough_accum[thetaIndex][rho] = 1;
      } else {
        this.hough_accum[thetaIndex][rho]++;
      }
      curve_points.push({ rho: rho, theta: thetaIndex });
      //drawInHough(rho,thetaIndex);
    }
    return curve_points;
  }

  componentDidMount() {
    this.updateCanvas();
  }
  componentDidUpdate() {
    this.updateCanvas();
  }
  updateCanvas() {
    //const ctx = this.refs.canvas.getContext('2d');
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.drawGrid();
  }

  drawHoughPoints({ x, y }) {
    const points = this.hough(x, y).map(p => ({
      x: (p.theta * (this.props.canvasWidth + this.houghThetaDelta)) / this.numAngleCells,
      y: (p.rho * this.props.canvasHeight) / this.rhoMax + this.props.canvasHeight / 2,
    }));
    //console.log(points);
    this.drawPoints({
      points: points,
      brushColor: this.props.brushColor,
      brushRadius: this.props.brushRadius,
    });
  }

  drawPoints = ({ points, brushColor, brushRadius }) => {
    this.ctx.lineJoin = 'round';
    this.ctx.lineCap = 'round';
    this.ctx.strokeStyle = brushColor;

    this.ctx.lineWidth = brushRadius * 2;

    let p1 = points[0];
    let p2 = points[1];

    this.ctx.moveTo(p2.x, p2.y);
    this.ctx.beginPath();

    for (let i = 1, len = points.length; i < len; i++) {
      // we pick the point between pi+1 & pi+2 as the
      // end point and p1 as our control point
      const midPoint = {
        x: p1.x + (p2.x - p1.x) / 2,
        y: p1.y + (p2.y - p1.y) / 2,
      };
      this.ctx.quadraticCurveTo(p1.x, p1.y, midPoint.x, midPoint.y);
      p1 = points[i];
      p2 = points[i + 1];
    }
    // Draw last line as a straight line while
    // we wait for the next point to be able to calculate
    // the bezier control point
    this.ctx.lineTo(p1.x, p1.y);
    this.ctx.stroke();
  };

  drawGrid = () => {
    if (this.props.hideGrid) {
      return;
    }

    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);

    this.ctx.beginPath();
    this.ctx.setLineDash([5, 1]);
    this.ctx.setLineDash([]);
    this.ctx.strokeStyle = this.props.gridColor;
    this.ctx.lineWidth = 0.5;

    const gridSize = 25;

    let countX = 0;
    while (countX < this.ctx.canvas.width) {
      countX += gridSize;
      this.ctx.moveTo(countX, 0);
      this.ctx.lineTo(countX, this.ctx.canvas.height);
    }
    this.ctx.stroke();

    let countY = 0;
    while (countY < this.ctx.canvas.height) {
      countY += gridSize;
      this.ctx.moveTo(0, countY);
      this.ctx.lineTo(this.ctx.canvas.width, countY);
    }
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.lineWidth = 3;
    this.ctx.moveTo(0, 0);
    this.ctx.lineTo(0, this.ctx.canvas.height);
    this.ctx.lineTo(this.ctx.canvas.width, this.ctx.canvas.height);
    this.ctx.lineTo(this.ctx.canvas.width, 0);
    this.ctx.lineTo(0, 0);
    this.ctx.stroke();
  };

  render() {
    return (
      <div
        className={this.props.className}
        style={{
          display: 'block',
          background: this.props.backgroundColor,
          touchAction: 'none',
          width: this.props.canvasWidth,
          height: this.props.canvasHeight,
          ...this.props.style,
        }}>
        <canvas
          ref={canvas => {
            if (canvas) {
              this.canvas = canvas;
              this.ctx = canvas.getContext('2d');
            }
          }}
          width={this.props.canvasWidth}
          height={this.props.canvasHeight}
        />
      </div>
    );
  }
}
