// Canvas Template

// Canvas Setup
let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");
cnv.width = 600;
cnv.height = 400;

// Global Variables
let mouseX;
let mouseY;

let blackRect = {
  x: Math.random() * cnv.width,
  y: Math.random() * cnv.height,
  w: Math.random() * 30 + 20,
  h: Math.random() * 30 + 20,
};

// Call draw function once all page resources have loaded
window.addEventListener("load", draw);

function draw() {
  // LOGIC - test if mouse in rectangles
  if (ptInRect(mouseX, mouseY, 50, 50, 200, 80)) {
    document.body.style.backgroundColor = "red";
  } else if (ptInRect(mouseX, mouseY, 350, 125, 150, 100)) {
    document.body.style.backgroundColor = "green";
  } else if (ptInRect(mouseX, mouseY, 150, 225, 75, 150)) {
    document.body.style.backgroundColor = "blue";
  } else { document.body.style.backgroundColor = "white"; }

  if (ptInRect(mouseX, mouseY, blackRect.x, blackRect.y, blackRect.w, blackRect.h)) {
    document.body.style.backgroundColor = "white";
    blackRect = {
      x: Math.random() * cnv.width,
      y: Math.random() * cnv.height,
      w: Math.random() * 30 + 20,
      h: Math.random() * 30 + 20,
  
    }
  }
  // DRAW - draw rectangles
  ctx.fillStyle = "red";
  ctx.fillRect(50, 50, 200, 80);

  ctx.fillStyle = "green";
  ctx.fillRect(350, 125, 150, 100);

  ctx.fillStyle = "blue";
  ctx.fillRect(150, 225, 75, 150);

  ctx.fillStyle = "black";
  ctx.fillRect(blackRect.x, blackRect.y, blackRect.w, blackRect.h);

  // Redraw
  requestAnimationFrame(draw);

}

// Event Stuff
document.addEventListener("mousemove", mousemoveHandler);

function mousemoveHandler(e) {
  // Get rectangle info about canvas location
  let cnvRect = cnv.getBoundingClientRect();

  // Calc mouse coordinates using mouse event and canvas location info
  mouseX = Math.round(e.clientX - cnvRect.left);
  mouseY = Math.round(e.clientY - cnvRect.top);
}


//helper function


// test if a point is in a rectangle
function ptInRect(x1, y1, x, y, w, h) {
if (x1 > x && x1 < x + w && y1 > y && y1 < y + h) {
  return true;
} else {
  return false;
}

}