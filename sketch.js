/*PONG GAME v2
by MSS

ENJOY :)

*/

//setting up variables
var best_score = 0;
var score = 0;
var paddle_x = 5;
var paddle_y = 400;
var lifes = 3;
var scoreable = true;
var x = 0;
var y = 0;
var r = 255;
var g = 255;
var b = 255;

//Difficulty is the speed at wich the ball travels
var difficulty = 5;
var leftright = difficulty;
var updown = difficulty;

//creates canvas
function setup() {
  createCanvas(600, 400);

}
//initialazes the loop
function draw() {
  background(0);

  //sets the lifes on the screen
  textSize(20);
  fill(255);
  text("lifes " + lifes, 10, 25);

  //sets the score on the screen
  textSize(20);
  fill(255);
  text("SCORE " + score, 500, 25);

  //puts a "game over" comment when lifes get to 0
  if (lifes <= 0) {

    if (mouseIsPressed) {

      restart()
    }

    fill(243, 38, 22);
    textSize(100);
    text("Game over!", 40, 200);
    fill(255);
    textSize(20);
    text("YOUR SCORE: " + score, 220, 270);
    if (best_score < score) {
      best_score = score
    }
    fill(255);
    textSize(20);
    text("BEST SCORE: " + best_score, 222, 300);
    fill(234, 245, 29)
    text("Game by MSS", 235, 350)
    textSize(15);
    fill(145, 145, 129)
    text("(Press the mouse button to restart)", 190, 380)


  }
  //conditional that makes that the program can only work i've the lifes are greather tan 0
  if (lifes > 0) {

    //this creates the paddle on the down part, and sets its cordinates/position
    var paddle_x = mouseX;
    rectMode(CENTER);
    fill(243, 85, 22);
    stroke(0, 5);
    rect(mouseX, 400, 100, 20);

    //makes the ball turn out when it hits on the LEFT SIDE
    if (x > width) {
      leftright = leftright * -1;
      scoreable = true;

    }
    //makes the ball turn out when it hits on the RIGHT SIDE
    if (x < 0) {
      leftright = leftright * -1;
      scoreable = true;

    }
    //makes the ball turn out when it hits on the UPPER SIDE
    if (y < 0) {
      updown = updown * -1;
      scoreable = true;
    }
    //makes the ball turn out when it hits on the DOWN SIDE
    if (y > 385) {
      updown = updown * -1;
      lifes = lifes - 1;
      scoreable = false;
    }
    //commands that set up when the ball has touched the paddle
    if (x < paddle_x + 60 && x > paddle_x - 60 && y > paddle_y - 40) {
      updown = updown * -1;
      if (scoreable == true) {
        score = score + 1
      }
      scoreable = false

    }
    //makes the direction turn into the ball position
    x = x + leftright;
    y = y + updown;

    //creates the ball on the x, y position
    noStroke();
    fill(219, 225, 41);
    ellipse(x, y, 50, 50);
  }
}


function restart() {
  lifes = 3;
  score = 0;
  x = 200
  y = 0

}