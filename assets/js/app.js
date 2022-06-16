import { questions } from './questionsArray.js';

$(document).ready(function() {


//initial state
  $("#points").hide();
  $("#question").hide();
  $("#answers").hide();
  $("#submit").hide();
  $("#timer").hide();
  $("#new").hide();
  $("#results").hide();
  $("#no-more").hide();

//initial variables
  var i = 0;
  var questionArray = questions.slice(i);
  var currentQuestion = questionArray.shift();
  var interval;
  var points = 0;

//player selects answer
  //player selection becomes active and deactivates other answers

  $("#a").on("click", function() {
    $("#a").addClass("active");
    $("#b").removeClass("active");
    $("#c").removeClass("active");
    $("#d").removeClass("active");
  });

  $("#b").on("click", function() {
    $("#b").addClass("active");
    $("#a").removeClass("active");
    $("#c").removeClass("active");
    $("#d").removeClass("active");
  });

  $("#c").on("click", function() {
    $("#c").addClass("active");
    $("#b").removeClass("active");
    $("#a").removeClass("active");
    $("#d").removeClass("active");
  });

  $("#d").on("click", function() {
    $("#d").addClass("active");
    $("#b").removeClass("active");
    $("#c").removeClass("active");
    $("#a").removeClass("active");
  });

  //timer function
  var seconds = 30000;

  function countdown() {
    var questionArray = questions.slice(i);
    var currentQuestion = questionArray.shift();
    var userResponse = $(".active").val();
    var correctAnswer = currentQuestion.correctAnswer;
    var trivia = currentQuestion.trivia;
    if (seconds > 0) {
      seconds -= 1000;
      $("#timer").text("Seconds Remaining: " + seconds / 1000);
      console.log(seconds);
    } else if (userResponse === correctAnswer) {
      console.log("Right!");
      $(".question-check").modal({ backdrop: "static" });
      $(".modal-title").text("Correct!");
      $(".modal-body").text(trivia);
      $(".question-check").modal("show");
      clearInterval(interval);
      seconds = 30000;
      points += currentQuestion.difficulty;
      console.log("Points: " + points);
    } else {
      console.log("Nope.");
      $(".question-check").modal({ backdrop: "static" });
      $(".modal-title").text(
        "Sorry! The answer was " + currentQuestion.showAnswer + "."
      );
      $(".modal-body").text(trivia);
      $(".question-check").modal("show");
      clearInterval(interval);
      seconds = 30000;
    }
  }

  //start game (prevents need for page reload)
  $("#start").on("click", function() {
    $("#start").hide();
    var questionArray = questions.slice(i);
    var currentQuestion = questionArray.shift();
    interval = setInterval(countdown, 1000);
    $("#question").text(currentQuestion.question);
    $("#a").text("A: " + currentQuestion.answers.a);
    $("#b").text("B: " + currentQuestion.answers.b);
    $("#c").text("C: " + currentQuestion.answers.c);
    $("#d").text("D: " + currentQuestion.answers.d);
    $("#question").show();
    $("#answers").show();
    $("#submit").show();
    $("#timer").show();
    $("#submit").on("click", function() {
      clearInterval(interval);
      var userResponse = $(".active").val();
      var correctAnswer = currentQuestion.correctAnswer;
      var trivia = currentQuestion.trivia;
      if (userResponse === correctAnswer) {
        console.log("Right!");
        $(".question-check").modal({ backdrop: "static" });
        $(".modal-title").text("Correct!");
        $(".modal-body").text(trivia);
        $(".question-check").modal("show");
        points += currentQuestion.difficulty;
        console.log("Points: " + points);
      } else {
        console.log("Nope.");
        $(".question-check").modal({ backdrop: "static" });
        $(".modal-title").text(
          "Sorry! The answer was " + currentQuestion.showAnswer + "."
        );
        $(".modal-body").text(trivia);
        $(".question-check").modal("show");
        console.log("Points: " + points);
      }
    });
  });

  $("#new").on("click", function() {
    $("#new").hide();
    i=0;
    points=0;
    var questionArray = questions.slice(i);
    var currentQuestion = questionArray.shift();
    interval = setInterval(countdown, 1000);
    $("#question").text(currentQuestion.question);
    $("#a").text("A: " + currentQuestion.answers.a);
    $("#b").text("B: " + currentQuestion.answers.b);
    $("#c").text("C: " + currentQuestion.answers.c);
    $("#d").text("D: " + currentQuestion.answers.d);
    $("#question").show();
    $("#answers").show();
    $("#submit").show();
    $("#timer").show();
    $("#results").hide();
    $("#no-more").hide();
    $("#points").hide();
    $("#submit").on("click", function() {
      clearInterval(interval);
      var userResponse = $(".active").val();
      var correctAnswer = currentQuestion.correctAnswer;
      var trivia = currentQuestion.trivia;
      if (userResponse === correctAnswer) {
        console.log("Right!");
        $(".question-check").modal({ backdrop: "static" });
        $(".modal-title").text("Correct!");
        $(".modal-body").text(trivia);
        $(".question-check").modal("show");
        points += currentQuestion.difficulty;
        console.log("Points: " + points);
      } else {
        console.log("Nope.");
        $(".question-check").modal({ backdrop: "static" });
        $(".modal-title").text(
          "Sorry! The answer was " + currentQuestion.showAnswer + "."
        );
        $(".modal-body").text(trivia);
        $(".question-check").modal("show");
        console.log("Points: " + points);
      }
    });
  });

  

  //call next question
  $("#next").on("click", function() {
    if (questionArray.length !== 0) {
      i++;
      var currentQuestion = questionArray.shift();
      console.log(questionArray);
      interval = setInterval(countdown, 1000);
      seconds = 30000;
      $("#question").text(currentQuestion.question);
      $("#a")
        .removeClass("active")
        .text("A: " + currentQuestion.answers.a);
      $("#b")
        .removeClass("active")
        .text("B: " + currentQuestion.answers.b);
      $("#c")
        .removeClass("active")
        .text("C: " + currentQuestion.answers.c);
      $("#d")
        .removeClass("active")
        .text("D: " + currentQuestion.answers.d);
      $("#question").show();
      $("#answers").show();
    } else {
      $("#points")
        .show()
        .text("Total Points:  " + points);
      $("#results").show();
      $("#question").hide();
      $("#answers").hide();
      $("#submit").hide();
      $("#timer").hide();
      $("#new").show();
      $("#no-more").show();
    }

    $("#submit").on("click", function() {
      var userResponse = $(".active").val();
      var correctAnswer = currentQuestion.correctAnswer;
      var trivia = currentQuestion.trivia;
      if (userResponse === correctAnswer) {
        console.log("Right!");
        $(".question-check").modal({ backdrop: "static" });
        $(".modal-title").text("Correct!");
        $(".modal-body").text(trivia);
        $(".question-check").modal("show");
        points += currentQuestion.difficulty;
        console.info("Points: " + points);
      } else {
        console.log("Nope.");
        $(".question-check").modal({ backdrop: "static" });
        $(".modal-title").text(
          "Sorry! The answer was " + currentQuestion.showAnswer + "."
        );
        $(".modal-body").text(trivia);
        $(".question-check").modal("show");
      }
    });
  });
}); //doc ready closing tag
