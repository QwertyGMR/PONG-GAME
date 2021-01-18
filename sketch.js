/*PONG GAME v3 (color update)
by MSS

ENJOY :)

*/

//setting up variables
var best_score = 0;
var score = 0;
var paddle = {
  x: 5,
  y: 400
}
var lifes = 3;
var ball = {
  scoreable: true,
  x: 0,
  y: 0,
  r: 219,
  g: 255,
  b: 41
}

//Difficulty is the speed at wich the ball travels
var difficulty = 5;
var leftright = difficulty;
var updown = difficulty;
var damage_animation = 0

//creates canvas
function setup() {
  createCanvas(600, 400);

}
//initialazes the loop
function draw() {
  background(59, 72, 115);

  //sets the lifes on the screen
  textSize(20);
  fill(255);
  text("lifes " + lifes, 10, 25);

  //sets the score on the screen
  textSize(20);
  fill(255);
  text("SCORE " + score, 500, 25);

  //initializes game over menu
  if (lifes <= 0) {

    //restart button
    if (mouseIsPressed) {


      if (mouseX > 224 && mouseX < 375 && mouseY > 250 && mouseY < 310) {
        restart();
      }
    }

    //game over menu

    fill(158, 87, 81);
    textSize(100);
    text("Game over!", 40, 120);
    fill(255);
    textSize(20);
    text("YOUR SCORE: " + score, 220, 180);
    if (best_score < score) {
      best_score = score
    }
    //score and best score
    fill(255);
    textSize(20);
    text("BEST SCORE: " + best_score, 222, 210);
    fill(250, 233, 170);
    text("Game by MSS", 235, 380);
    damage_animation = 0;
    //restart button (text)
    fill(255);
    rectMode(CORNER);
    rect(222, 250, 150, 60);
    fill(0);
    textSize(30);
    text("RESTART", 229, 290);

  }
  //conditional that makes that the program can only work if the lifes are greather tan 0
  if (lifes > 0) {

    //this creates the paddle on the down part, and sets its cordinates/position
    paddle.x = mouseX;
    rectMode(CENTER);
    fill(237, 198, 114);
    stroke(0, 5);
    rect(mouseX, 400, 100, 20);

    //makes the ball turn out when it hits on the LEFT SIDE
    if (ball.x > width) {
      leftright = leftright * -1;
      scoreable = true;

    }
    //makes the ball turn out when it hits on the RIGHT SIDE
    if (ball.x < 0) {
      leftright = leftright * -1;
      scoreable = true;

    }
    //makes the ball turn out when it hits on the UPPER SIDE
    if (ball.y < 0) {
      updown = updown * -1;
      ball.scoreable = true;
    }
    //makes the ball turn out when it hits on the DOWN SIDE
    if (ball.y > 385) {
      updown = updown * -1;
      lifes = lifes - 1;
      ball.scoreable = false;
      damage_animation = 20;
    }
    //commands that set up when the ball has touched the paddle
    if (ball.x < paddle.x + 60 && ball.x > paddle.x - 60 && ball.y > paddle.y - 40) {
      if (ball.scoreable == true){
          updown = updown * -1;
      }
      if (ball.scoreable == true) {
        score = score + 1
      }
      ball.scoreable = false

    }
    //makes the direction turn into the ball position
    ball.x = ball.x + leftright;
    ball.y = ball.y + updown;

    //creates the ball on the x, y position
    noStroke();
    fill(ball.r, ball.g, ball.b);
    ellipse(ball.x, ball.y, 50, 50);

    //damage animation
    if (damage_animation <= 0) {

      ball.r = 250
      ball.g = 233
      ball.b = 170

    } else {

      ball.r = 158;
      ball.g = 87;
      ball.b = 81;

      damage_animation = damage_animation - 1

    }

  }
}

//function that resets all variables when restarting
function restart() {
  lifes = 3;
  score = 0;
  ball.x = 200
  ball.y = 0

  ball.r = 219
  ball.g = 225
  ball.b = 41

  damage_animaiton = 0
}
  

