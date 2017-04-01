var stage = DDD.canvas(document.body);
var ctx = stage.ctx;
var data = [];
var animReq;
var rate = 1;
var tick = 0;
var i = 0;

// Here we load the data we want and start the program when it is ready.
DDD.json('./data/violencia-2008.json').then(init).catch(ifError);

// Runs once and we use it to setup our program.
function init(d) {
  data = d.data;
  animate();
}

// Our loop function - It will repeat itself as long as there is data being read.
function animate() {
  if (i <= data.length) {
    if (tick === rate) {
      // Your program logic goes here
      tick = 0;
    }
    tick++;
    animReq = requestAnimationFrame(animate);
  } else {
    console.log('done');
  }
}

// Let's print the error on the console in case something goes wrong.
function ifError(err) {
  console.error('Error when loading data', err);
}

// In case you want to control the resize of the screen (optional)
window.onresize = function() {
  stage.canvas.width = window.innerWidth;
  stage.canvas.height = window.innerHeight;
};
