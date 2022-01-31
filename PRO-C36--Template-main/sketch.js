/**********************/
//Coded by Harkirat
//Purpose: project 36
/*********************/

//making variables
var canvas, backgroundImage;

var questions;

var question, contestant, quiz;

//setup function
function setup(){
  //creating canvas and data base
  canvas = createCanvas(850,400);
  database = firebase.database();
  //new quiz object
  quiz = new Quiz();
  quiz.start();
}

//draw function
function draw(){
  background("pink");

}
