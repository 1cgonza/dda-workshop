/*eslint-env browser */
/*globals DDD*/
/*
-----------------------------------------------------
Global Variables
-----------------------------------------------------
*/
var stage = DDD.canvas(document.body);
var ctx = stage.ctx;
var data = [];
var animReq;
var rate = 1;
var tick = 0;
var i = 0;
var dataUrl = '../data/article19_2016.json';

/*
-----------------------------------------------------
Drawing logic
-----------------------------------------------------
*/

function draw() {
  // Add your logic here
}


/*
-----------------------------------------------------
Configuration and animation setup
-----------------------------------------------------
*/

// Our loop function - It will repeat itself as long as there is data being read.
function animate() {
  if (i <= data.length) {
    if (tick === rate) {
      draw();
      tick = 0;
    }
    tick++;
    i++;
    animReq = requestAnimationFrame(animate);
  } else {
    //console.log('done');
    window.cancelAnimationFrame(animReq);
  }
}

// Runs once and we use it to setup our program.
function init(d) {
  data = d;
  //console.log(d);
  animate();
}

// Let's print the error on the console in case something goes wrong.
function ifError(err) {
  console.error('Error when loading data', err);
}

// Here we load the data we want and start the program when it is ready.
DDD.json(dataUrl).then(init).catch(ifError);

// In case you want to control the resize of the screen (optional)
window.onresize = function() {
  stage.canvas.width = window.innerWidth;
  stage.canvas.height = window.innerHeight;
};
