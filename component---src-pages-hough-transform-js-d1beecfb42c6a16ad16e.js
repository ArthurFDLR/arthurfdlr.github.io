(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"+Gmq":function(t,e){var n=Math.expm1;t.exports=!n||n(10)>22025.465794806718||n(10)<22025.465794806718||-2e-17!=n(-2e-17)?function(t){return 0==(t=+t)?t:t>-1e-6&&t<1e-6?t+t*t/2:Math.exp(t)-1}:n},"1RH0":function(t,e,n){var i=n("P8UN"),a=Math.exp;i(i.S,"Math",{cosh:function(t){return(a(t=+t)+a(-t))/2}})},ctAC:function(t,e){t.exports=Math.log1p||function(t){return(t=+t)>-1e-8&&t<1e-8?t-t*t/2:Math.log(1+t)}},lAej:function(t,e,n){var i=n("P8UN"),a=n("ctAC"),r=Math.sqrt,o=Math.acosh;i(i.S+i.F*!(o&&710==Math.floor(o(Number.MAX_VALUE))&&o(1/0)==1/0),"Math",{acosh:function(t){return(t=+t)<1?NaN:t>94906265.62425156?Math.log(t)+Math.LN2:a(t-1+r(t-1)*r(t+1))}})},n0hJ:function(t,e,n){var i=n("P8UN");i(i.P,"Array",{fill:n("Y++M")}),n("Dq1/")("fill")},vZLz:function(t,e,n){"use strict";n.r(e);var i=n("q1tI"),a=n.n(i),r=(n("q8oJ"),n("8npG"),n("YbXK"),n("cFtU"),n("rzGZ"),n("m210"),n("4DPX"),n("pJf4"),n("n0hJ"),n("E5k/"),function(t,e){this.x=t,this.y=e});var o=function(t){var e,n;function i(){return t.apply(this,arguments)||this}n=t,(e=i).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n;var a=i.prototype;return a.update=function(t){this.x=t.x,this.y=t.y},a.moveByAngle=function(t,e){var n=t+Math.PI/2;this.x=this.x+Math.sin(n)*e,this.y=this.y-Math.cos(n)*e},a.equalsTo=function(t){return this.x===t.x&&this.y===t.y},a.getDifferenceTo=function(t){return new r(this.x-t.x,this.y-t.y)},a.getDistanceTo=function(t){var e=this.getDifferenceTo(t);return Math.sqrt(Math.pow(e.x,2)+Math.pow(e.y,2))},a.getAngleTo=function(t){var e=this.getDifferenceTo(t);return Math.atan2(e.y,e.x)},a.toObject=function(){return{x:this.x,y:this.y}},i}(r),s=function(){function t(t){var e=void 0===t?{}:t,n=e.radius,i=void 0===n?30:n,a=e.enabled,r=void 0===a||a,s=e.initialPoint,h=void 0===s?{x:0,y:0}:s;this.radius=i,this._isEnabled=r,this.pointer=new o(h.x,h.y),this.brush=new o(h.x,h.y),this.angle=0,this.distance=0,this._hasMoved=!1}var e=t.prototype;return e.enable=function(){this._isEnabled=!0},e.disable=function(){this._isEnabled=!1},e.isEnabled=function(){return this._isEnabled},e.setRadius=function(t){this.radius=t},e.getRadius=function(){return this.radius},e.getBrushCoordinates=function(){return this.brush.toObject()},e.getPointerCoordinates=function(){return this.pointer.toObject()},e.getBrush=function(){return this.brush},e.getPointer=function(){return this.pointer},e.getAngle=function(){return this.angle},e.getDistance=function(){return this.distance},e.brushHasMoved=function(){return this._hasMoved},e.update=function(t,e){var n=(void 0===e?{}:e).both,i=void 0!==n&&n;return this._hasMoved=!1,!(this.pointer.equalsTo(t)&&!i)&&(this.pointer.update(t),i?(this._hasMoved=!0,this.brush.update(t),!0):(this._isEnabled?(this.distance=this.pointer.getDistanceTo(this.brush),this.angle=this.pointer.getAngleTo(this.brush),this.distance>this.radius&&(this.brush.moveByAngle(this.angle,this.distance-this.radius),this._hasMoved=!0)):(this.distance=0,this.angle=0,this.brush.update(t),this._hasMoved=!0),!0))},t}(),h=(n("xclO"),n("lAej"),n("1RH0"),function(){function t(t,e){this.x=t,this.y=e}var e=t.prototype;return e.update=function(t){this.x=t.x,this.y=t.y},e.getDifferenceTo=function(e){return new t(this.x-e.x,this.y-e.y)},e.getDistanceTo=function(t){var e=this.getDifferenceTo(t);return Math.sqrt(Math.pow(e.x,2)+Math.pow(e.y,2))},t}()),c=function(){function t(t){var e=void 0===t?{}:t,n=e.segments,i=void 0===n?50:n,a=e.iterationLimit,r=void 0===a?100:a;this.p1=new h,this.p2=new h,this.segments=i,this.iterationLimit=r}var e=t.prototype;return e.drawToCanvas=function(t,e,n,i){this.p1.update(e),this.p2.update(n);var a=this.p1.x>this.p2.x,r=a?this.p2:this.p1,o=a?this.p1:this.p2,s=[],h=!0;if(r.getDistanceTo(o)<i)if(o.x-r.x>.01){var c=o.x-r.x,u=o.y-r.y,d=-this.getCatenaryParameter(c,u,i,this.iterationLimit),l=.5*(d*Math.log((i+u)/(i-u))-c),p=d*Math.cosh(l/d),v=r.x-l,g=r.y-p;s=this.getCurve(d,r,o,v,g,this.segments),h=!1}else{var f=.5*(r.x+o.x),m=.5*(r.y+o.y+i);s=[[r.x,r.y],[f,m],[o.x,o.y]]}else s=[[r.x,r.y],[o.x,o.y]];return h?this.drawLine(s,t):this.drawCurve(s,t),s},e.getCatenaryParameter=function(t,e,n,i){for(var a=Math.sqrt(n*n-e*e)/t,r=Math.acosh(a)+1,o=-1,s=0;Math.abs(r-o)>1e-6&&s<i;)o=r,r-=(Math.sinh(r)-a*r)/(Math.cosh(r)-a),s++;return t/(2*r)},e.getCurve=function(t,e,n,i,a,r){for(var o=[e.x,t*Math.cosh((e.x-i)/t)+a],s=n.x-e.x,h=r-1,c=0;c<h;c++){var u=e.x+s*(c+.5)/h,d=t*Math.cosh((u-i)/t)+a;o.push(u,d)}return o.push(n.x,t*Math.cosh((n.x-i)/t)+a),o},e.drawLine=function(t,e){e.moveTo(t[0][0],t[0][1]),e.lineTo(t[1][0],t[1][1])},e.drawCurve=function(t,e){var n=.5*t.length-1,i=t[2],a=t[3],r=[];e.moveTo(t[0],t[1]);for(var o=2;o<n;o++){var s=t[2*o],h=t[2*o+1],c=.5*(s+i),u=.5*(h+a);r.push([i,a,c,u]),e.quadraticCurveTo(i,a,c,u),i=s,a=h}return n=t.length,e.quadraticCurveTo(t[n-4],t[n-3],t[n-2],t[n-1]),r},t}();function u(t){return function(t){if(Array.isArray(t))return d(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return d(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return d(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function l(t,e){return{x:t.x+(e.x-t.x)/2,y:t.y+(e.y-t.y)/2}}var p={display:"block",position:"absolute"},v=[{name:"interface",zIndex:15},{name:"drawing",zIndex:11},{name:"temp",zIndex:12},{name:"grid",zIndex:10}],g=function(t){var e,n;function i(e){var n;return(n=t.call(this,e)||this).drawImage=function(){n.props.imgSrc&&(n.image=new Image,n.image.crossOrigin="anonymous",n.image.onload=function(){return function(t){var e=void 0===t?{}:t,n=e.ctx,i=e.img,a=e.x,r=e.y,o=e.w,s=e.h,h=e.offsetX,c=e.offsetY;"number"!=typeof a&&(a=0),"number"!=typeof r&&(r=0),"number"!=typeof o&&(o=n.canvas.width),"number"!=typeof s&&(s=n.canvas.height),"number"!=typeof h&&(h=.5),"number"!=typeof c&&(c=.5),h<0&&(h=0),c<0&&(c=0),h>1&&(h=1),c>1&&(c=1);var u,d,l,p,v=i.width,g=i.height,f=Math.min(o/v,s/g),m=v*f,x=g*f,y=1;m<o&&(y=o/m),Math.abs(y-1)<1e-14&&x<s&&(y=s/x),(u=(v-(l=v/((m*=y)/o)))*h)<0&&(u=0),(d=(g-(p=g/((x*=y)/s)))*c)<0&&(d=0),l>v&&(l=v),p>g&&(p=g),n.drawImage(i,u,d,l,p,a,r,o,s)}({ctx:n.ctx.grid,img:n.image})},n.image.src=n.props.imgSrc)},n.undo=function(){var t=n.lines.slice(0,-1);n.clear(),n.simulateDrawingLines({lines:t,immediate:!0}),n.triggerOnChange()},n.getSaveData=function(){return JSON.stringify({lines:n.lines,width:n.props.canvasWidth,height:n.props.canvasHeight})},n.loadSaveData=function(t,e){if(void 0===e&&(e=n.props.immediateLoading),"string"!=typeof t)throw new Error("saveData needs to be of type string!");var i=JSON.parse(t),a=i.lines,r=i.width,o=i.height;if(!a||"function"!=typeof a.push)throw new Error("saveData.lines needs to be an array!");if(n.clear(),r===n.props.canvasWidth&&o===n.props.canvasHeight)n.simulateDrawingLines({lines:a,immediate:e});else{var s=n.props.canvasWidth/r,h=n.props.canvasHeight/o,c=(s+h)/2;n.simulateDrawingLines({lines:a.map((function(t){return Object.assign({},t,{points:t.points.map((function(t){return{x:t.x*s,y:t.y*h}})),brushRadius:t.brushRadius*c})})),immediate:e})}},n.simulateDrawingLines=function(t){var e=t.lines,i=t.immediate,a=0,r=i?0:n.props.loadTimeOffset;e.forEach((function(t){var e=t.points,o=t.brushColor,s=t.brushRadius;if(i)return n.drawPoints({points:e,brushColor:o,brushRadius:s}),n.points=e,void n.saveLine({brushColor:o,brushRadius:s});for(var h=function(t){a+=r,window.setTimeout((function(){n.drawPoints({points:e.slice(0,t+1),brushColor:o,brushRadius:s})}),a)},c=1;c<e.length;c++)h(c);a+=r,window.setTimeout((function(){n.points=e,n.saveLine({brushColor:o,brushRadius:s})}),a)}))},n.handleDrawStart=function(t){t.preventDefault(),n.isPressing=!0;var e=n.getPointerPos(t),i=e.x,a=e.y;t.touches&&t.touches.length>0&&n.lazy.update({x:i,y:a},{both:!0}),n.handlePointerMove(i,a)},n.handleDrawMove=function(t){t.preventDefault();var e=n.getPointerPos(t),i=e.x,a=e.y;n.handlePointerMove(i,a)},n.handleDrawEnd=function(t){t.preventDefault(),n.handleDrawMove(t),n.isDrawing=!1,n.isPressing=!1,n.saveLine()},n.setCanvasSize=function(t,e,n){t.width=e,t.height=n,t.style.width=e,t.style.height=n},n.getPointerPos=function(t){var e=n.canvas.interface.getBoundingClientRect(),i=t.clientX,a=t.clientY;return t.changedTouches&&t.changedTouches.length>0&&(i=t.changedTouches[0].clientX,a=t.changedTouches[0].clientY),{x:i-e.left,y:a-e.top}},n.handlePointerMove=function(t,e){if(!n.props.disabled){n.lazy.update({x:t,y:e});var i=!n.lazy.isEnabled();(n.isPressing&&!n.isDrawing||i&&n.isPressing)&&(n.isDrawing=!0,n.points.push(n.lazy.brush.toObject())),n.isDrawing&&(n.points.push(n.lazy.brush.toObject()),n.drawPoints({points:n.points,brushColor:n.props.brushColor,brushRadius:n.props.brushRadius}),n.updateCurrentPoint({x:t,y:e})),n.mouseHasMoved=!0}},n.drawPoints=function(t){var e=t.points,i=t.brushColor,a=t.brushRadius;n.ctx.temp.lineJoin="round",n.ctx.temp.lineCap="round",n.ctx.temp.strokeStyle=i,n.ctx.temp.clearRect(0,0,n.ctx.temp.canvas.width,n.ctx.temp.canvas.height),n.ctx.temp.lineWidth=2*a;var r=e[0],o=e[1];n.ctx.temp.moveTo(o.x,o.y),n.ctx.temp.beginPath();for(var s=1,h=e.length;s<h;s++){var c=l(r,o);n.ctx.temp.quadraticCurveTo(r.x,r.y,c.x,c.y),r=e[s],o=e[s+1]}n.ctx.temp.lineTo(r.x,r.y),n.ctx.temp.stroke()},n.updateCurrentPoint=function(t){var e=t.x,i=t.y;i|=0,(e|=0)===n.currentPositionX&&i===n.currentPositionY||(n.currentPositionX=e,n.currentPositionY=i,n.props.onPointDraw({x:e,y:i}))},n.saveLine=function(t){var e=void 0===t?{}:t,i=e.brushColor,a=e.brushRadius;if(!(n.points.length<2)){n.lines.push({points:u(n.points),brushColor:i||n.props.brushColor,brushRadius:a||n.props.brushRadius}),n.points.length=0;var r=n.canvas.temp.width,o=n.canvas.temp.height;n.ctx.drawing.drawImage(n.canvas.temp,0,0,r,o),n.ctx.temp.clearRect(0,0,r,o),n.triggerOnChange()}},n.triggerOnChange=function(){n.props.onChange&&n.props.onChange(function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(n))},n.clear=function(){n.lines=[],n.valuesChanged=!0,n.ctx.drawing.clearRect(0,0,n.canvas.drawing.width,n.canvas.drawing.height),n.ctx.temp.clearRect(0,0,n.canvas.temp.width,n.canvas.temp.height)},n.loop=function(t){var e=(void 0===t?{}:t).once,i=void 0!==e&&e;if(n.mouseHasMoved||n.valuesChanged){var a=n.lazy.getPointerCoordinates(),r=n.lazy.getBrushCoordinates();n.drawInterface(n.ctx.interface,a,r),n.mouseHasMoved=!1,n.valuesChanged=!1}i||window.requestAnimationFrame((function(){n.loop()}))},n.drawGrid=function(t){if(!n.props.hideGrid){t.clearRect(0,0,t.canvas.width,t.canvas.height),t.beginPath(),t.setLineDash([5,1]),t.setLineDash([]),t.strokeStyle=n.props.gridColor,t.lineWidth=.5;for(var e=0;e<t.canvas.width;)e+=25,t.moveTo(e,0),t.lineTo(e,t.canvas.height);t.stroke();for(var i=0;i<t.canvas.height;)i+=25,t.moveTo(0,i),t.lineTo(t.canvas.width,i);t.stroke(),t.beginPath(),t.lineWidth=3,t.moveTo(0,0),t.lineTo(0,t.canvas.height),t.lineTo(t.canvas.width,t.canvas.height),t.lineTo(t.canvas.width,0),t.lineTo(0,0),t.stroke()}},n.drawInterface=function(t,e,i){n.props.hideInterface||(t.clearRect(0,0,t.canvas.width,t.canvas.height),t.beginPath(),t.fillStyle=n.props.brushColor,t.arc(i.x,i.y,n.props.brushRadius,0,2*Math.PI,!0),t.fill(),t.beginPath(),t.fillStyle=n.props.catenaryColor,t.arc(e.x,e.y,4,0,2*Math.PI,!0),t.fill(),n.lazy.isEnabled()&&(t.beginPath(),t.lineWidth=2,t.lineCap="round",t.setLineDash([2,4]),t.strokeStyle=n.props.catenaryColor,n.catenary.drawToCanvas(n.ctx.interface,i,e,n.chainLength),t.stroke()),t.beginPath(),t.fillStyle=n.props.catenaryColor,t.arc(i.x,i.y,2,0,2*Math.PI,!0),t.fill())},n.canvas={},n.ctx={},n.catenary=new c,n.points=[],n.lines=[],n.mouseHasMoved=!0,n.valuesChanged=!0,n.isDrawing=!1,n.isPressing=!1,n.currentPositionX=0,n.currentPositionY=0,n}n=t,(e=i).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n;var r=i.prototype;return r.componentDidMount=function(){var t=this;this.lazy=new s({radius:this.props.lazyRadius*window.devicePixelRatio,enabled:!0,initialPoint:{x:window.innerWidth/2,y:window.innerHeight/2}}),this.chainLength=this.props.lazyRadius*window.devicePixelRatio,this.drawImage(),this.drawGrid(this.ctx.grid),this.loop(),window.setTimeout((function(){var e=window.innerWidth/2,n=window.innerHeight/2;t.lazy.update({x:e-t.chainLength/4,y:n},{both:!0}),t.lazy.update({x:e+t.chainLength/4,y:n},{both:!1}),t.mouseHasMoved=!0,t.valuesChanged=!0,t.clear(),t.props.saveData&&t.loadSaveData(t.props.saveData)}),100)},r.componentDidUpdate=function(t){t.lazyRadius!==this.props.lazyRadius&&(this.chainLength=this.props.lazyRadius*window.devicePixelRatio,this.lazy.setRadius(this.props.lazyRadius*window.devicePixelRatio)),t.saveData!==this.props.saveData&&this.loadSaveData(this.props.saveData),JSON.stringify(t)!==JSON.stringify(this.props)&&(this.valuesChanged=!0)},r.render=function(){var t=this;return a.a.createElement("div",{className:this.props.className,style:Object.assign({display:"block",background:this.props.backgroundColor,touchAction:"none",width:this.props.canvasWidth,height:this.props.canvasHeight},this.props.style),ref:function(e){e&&(t.canvasContainer=e)}},v.map((function(e){var n=e.name,i=e.zIndex,r="interface"===n;return a.a.createElement("canvas",{key:n,ref:function(e){e&&(t.canvas[n]=e,t.ctx[n]=e.getContext("2d"))},width:t.props.canvasWidth,height:t.props.canvasHeight,style:Object.assign({},p,{zIndex:i}),onMouseDown:r?t.handleDrawStart:void 0,onBlur:function(){},onMouseMove:r?t.handleDrawMove:void 0,onMouseUp:r?t.handleDrawEnd:void 0,onMouseOut:r?t.handleDrawEnd:void 0,onTouchStart:r?t.handleDrawStart:void 0,onTouchMove:r?t.handleDrawMove:void 0,onTouchEnd:r?t.handleDrawEnd:void 0,onTouchCancel:r?t.handleDrawEnd:void 0})})))},i}(i.PureComponent);g.defaultProps={onChange:null,loadTimeOffset:5,lazyRadius:12,brushRadius:10,brushColor:"#444",catenaryColor:"#0a0302",gridColor:"rgba(150,150,150,0.17)",backgroundColor:"#FFF",hideGrid:!1,canvasWidth:400,canvasHeight:400,disabled:!1,imgSrc:"",saveData:"",immediateLoading:!1,hideInterface:!1,onPointDraw:function(){return null}};var f=function(t){var e,n;function i(e){var n;(n=t.call(this,e)||this).drawPoints=function(t){var e=t.points,i=t.brushColor,a=t.brushRadius;n.ctx.lineJoin="round",n.ctx.lineCap="round",n.ctx.strokeStyle=i,n.ctx.lineWidth=2*a;var r=e[0],o=e[1];n.ctx.moveTo(o.x,o.y),n.ctx.beginPath();for(var s=1,h=e.length;s<h;s++){var c={x:r.x+(o.x-r.x)/2,y:r.y+(o.y-r.y)/2};n.ctx.quadraticCurveTo(r.x,r.y,c.x,c.y),r=e[s],o=e[s+1]}n.ctx.lineTo(r.x,r.y),n.ctx.stroke()},n.drawGrid=function(){if(!n.props.hideGrid){n.ctx.clearRect(0,0,n.ctx.canvas.width,n.ctx.canvas.height),n.ctx.beginPath(),n.ctx.setLineDash([5,1]),n.ctx.setLineDash([]),n.ctx.strokeStyle=n.props.gridColor,n.ctx.lineWidth=.5;for(var t=0;t<n.ctx.canvas.width;)t+=25,n.ctx.moveTo(t,0),n.ctx.lineTo(t,n.ctx.canvas.height);n.ctx.stroke();for(var e=0;e<n.ctx.canvas.height;)e+=25,n.ctx.moveTo(0,e),n.ctx.lineTo(n.ctx.canvas.width,e);n.ctx.stroke(),n.ctx.beginPath(),n.ctx.lineWidth=3,n.ctx.moveTo(0,0),n.ctx.lineTo(0,n.ctx.canvas.height),n.ctx.lineTo(n.ctx.canvas.width,n.ctx.canvas.height),n.ctx.lineTo(n.ctx.canvas.width,0),n.ctx.lineTo(0,0),n.ctx.stroke()}},n.canvas=null,n.ctx=null,n.houghThetaDelta=4,n.numAngleCells=360,n.hough_accum=Array(n.numAngleCells),n.rhoMax=Math.sqrt(e.drawingWidth*e.drawingWidth+e.drawingHeight*e.drawingHeight),n.cosTable=Array(n.numAngleCells),n.sinTable=Array(n.numAngleCells);for(var i=0,a=0;a<n.numAngleCells;i+=Math.PI/n.numAngleCells,a++)n.cosTable[a]=Math.cos(i),n.sinTable[a]=Math.sin(i);return n}n=t,(e=i).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n;var r=i.prototype;return r.hough=function(t,e){var n,i=[],a=0;for(t-=this.props.drawingWidth/2,e-=this.props.drawingHeight/2;a<this.numAngleCells;a+=this.houghThetaDelta)n=t*this.cosTable[a]+e*this.sinTable[a],void 0===this.hough_accum[a]&&(this.hough_accum[a]=[]),void 0===this.hough_accum[a][n]?this.hough_accum[a][n]=1:this.hough_accum[a][n]++,i.push({rho:n,theta:a});return i},r.componentDidMount=function(){this.updateCanvas()},r.componentDidUpdate=function(){this.updateCanvas()},r.updateCanvas=function(){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.drawGrid()},r.drawHoughPoints=function(t){var e=this,n=t.x,i=t.y,a=this.hough(n,i).map((function(t){return{x:t.theta*(e.props.canvasWidth+e.houghThetaDelta)/e.numAngleCells,y:t.rho*e.props.canvasHeight/e.rhoMax+e.props.canvasHeight/2}}));this.drawPoints({points:a,brushColor:this.props.brushColor,brushRadius:this.props.brushRadius})},r.render=function(){var t=this;return a.a.createElement("div",{className:this.props.className,style:Object.assign({display:"block",background:this.props.backgroundColor,touchAction:"none",width:this.props.canvasWidth,height:this.props.canvasHeight},this.props.style)},a.a.createElement("canvas",{ref:function(e){e&&(t.canvas=e,t.ctx=e.getContext("2d"))},width:this.props.canvasWidth,height:this.props.canvasHeight}))},i}(a.a.Component);f.defaultProps={brushRadius:10,brushColor:"#444",gridColor:"rgba(150,150,150,0.17)",backgroundColor:"#FFF",hideGrid:!1,canvasWidth:400,canvasHeight:400,drawingWidth:400,drawingHeight:400};var m=n("Kvkj"),x=n("qhky"),y=n("vOnD"),b=n("nLfd"),w=n("20nU"),C=y.d.main.withConfig({displayName:"hough-transform__StyledMainContainer",componentId:"v5wd5o-0"})(["margin:-300px 0;@media (max-width:768px){margin:-200px 0;}@media (max-width:480px){margin:-180px 0;}h1{margin:10vh 0 15px 5px;}.content{-o-object-fit:contain;object-fit:contain;}.canvas-container{-o-object-fit:contain;object-fit:contain;display:flex;flex-wrap:wrap-reverse;justify-content:space-evenly;align-items:center;}.hover-window{margin-top:30px;padding-top:0;padding-bottom:1%;box-shadow:0px 0px 30px rgba(10,10,10,0.7);-o-object-fit:contain;object-fit:contain;border-radius:1.5%;background-color:#fff;}.canvas-custom{margin-top:2%;margin-bottom:2%;}.clear-button{",";margin-left:auto;margin-right:auto;display:block;padding:10px;}"],(function(t){return t.theme.mixins.button}));e.default=function(t){var e=t.location,n=360;("undefined"!=typeof window&&window.screen.width)<480&&(n=250);var r=Object(i.useRef)(null),o=Object(i.useRef)(null),s=Object(i.useRef)(null);return Object(i.useEffect)((function(){b.a.reveal(s.current,Object(w.srConfig)())}),[]),a.a.createElement(m.h,{location:e},a.a.createElement(x.a,{title:"Hough Transform"}),a.a.createElement("main",null,a.a.createElement(C,null,a.a.createElement("div",{className:"content"},a.a.createElement("div",{className:"hover-window",style:{minWidth:n+10}},a.a.createElement("div",{className:"canvas-container"},a.a.createElement(g,{className:"canvas-custom",ref:o,onPointDraw:function(t){var e=t.x,n=t.y;r.current.drawHoughPoints({x:e,y:n})},canvasWidth:n,canvasHeight:n,brushRadius:1,lazyRadius:10,gridColor:"rgba(150,150,150,0.17)"}),a.a.createElement(f,{className:"canvas-custom",ref:r,canvasWidth:n,canvasHeight:n,drawingWidth:n,drawingHeight:n,brushRadius:1,brushColor:"rgba(0, 24, 78, 0.15)",gridColor:"rgba(150,150,150,0.17)"})),a.a.createElement("button",{className:"clear-button",onClick:function(){r.current.drawGrid(),o.current.clear()}}," ","Clear"," ")),a.a.createElement("header",{ref:s},a.a.createElement("h1",{className:"heading"},"Hough transform"),a.a.createElement("p",{className:"inner"},"Draw edges and see their hough transforms."))))))}},xclO:function(t,e,n){var i=n("P8UN"),a=n("+Gmq"),r=Math.exp;i(i.S+i.F*n("96qb")((function(){return-2e-17!=!Math.sinh(-2e-17)})),"Math",{sinh:function(t){return Math.abs(t=+t)<1?(a(t)-a(-t))/2:(r(t-1)-r(-t-1))*(Math.E/2)}})}}]);
//# sourceMappingURL=component---src-pages-hough-transform-js-d1beecfb42c6a16ad16e.js.map