$(document).ready(function() {
  //trivia questions array
  var questions = [
    {
      difficulty: 1,
      question:
        "Which of the three main heroes (Luke, Leia, and Han Solo) in the first Star Wars trilogy refused to sign a three-picture deal?",
      answers: {
        a: "Mark Hamill",
        b: "Carrie Fisher",
        c: "Harrison Ford",
        d: "They all signed"
      },
      correctAnswer: "c",
      showAnswer: "C: Harrison Ford",
      trivia:
        "Having Han Solo frozen in carbonite was (at least in part) due to the fact that they were not sure that Harrison Ford would return for a third film. When the original Star Wars was made, Carrie Fisher and Mark Hammill were signed for a three picture deal, but Ford refused."
    },
    {
      difficulty: 1,
      question: "What color is Mace Windu's lightsaber?",
      answers: {
        a: "Purple",
        b: "Blue",
        c: "Green",
        d: "Red"
      },
      correctAnswer: "a",
      showAnswer: "A: Purple",
      trivia:
        'There is no mystical significance in the color of Mace Windu\'s lightsaber. Samuel L. Jackson, after a joking conversation with stunt coordinator Nick Gillard, asked Lucas if he could have a purple lightsaber and Lucas agreed. In an interview on UK TV, Jackson said he "thought it would be cool."'
    },
    {
      difficulty: 1,
      question: "Approximately how many languages can C-3PO speak?",
      answers: {
        a: "6 hundred",
        b: "6 trillion",
        c: "6 thousand",
        d: "6 million"
      },
      correctAnswer: "d",
      showAnswer: "D: 6 million",
      trivia: "C-3PO is fluent in over six million languages."
    },
    {
      difficulty: 2,
      question: "Which Star Wars movie was filmed entirely in the studio?",
      answers: {
        a: "A New Hope",
        b: "Attack of the Clones",
        c: "The Force Awakens",
        d: "Revenge of the Sith"
      },
      correctAnswer: "d",
      showAnswer: "D: Revenge of the Sith",
      trivia:
        "Unlike the previous Star Wars films, which were shot both on soundstages and on location, Star Wars: Episode III - Revenge of the Sith was filmed entirely in the studio. The only location work was a background plate shot during the production of Episode II."
    },
    {
      difficulty: 2,
      question:
        "Who is the only non Jedi in the original Star Wars trilogy to use a lightsaber?",
      answers: {
        a: "Princess Leia",
        b: "Chewbacca",
        c: "Han Solo",
        d: "R2-D2"
      },
      correctAnswer: "c",
      showAnswer: "C: Han Solo",
      trivia:
        "Han Solo uses Luke's lightsaber to cut open the tauntaun's belly in The Empire Strikes Back."
    },
    {
      difficulty: 3,
      question:
        "In Episode VI: Return of the Jedi, the growls and sounds of the Rancor in Jabba's Palace were actually made by what animal?",
      answers: {
        a: "Wolverine",
        b: "Pigeon",
        c: "Panther",
        d: "Dachsund"
      },
      correctAnswer: "d",
      showAnswer: "D: Dachsund",
      trivia:
        "The growls and sounds of the Rancor in Jabba's Palace were actually remixed from an audio recording of an aggressive dachshund."
    },
    {
      difficulty: 3,
      question:
        '"The Star Wars Holiday Special" marked the first appearance of which Star Wars character?',
      answers: {
        a: "Lando Calrissian",
        b: "Jabba the Hutt",
        c: "Jar-Jar Binks",
        d: "Boba Fett"
      },
      correctAnswer: "d",
      showAnswer: "D: Boba Fett",
      trivia:
        '"The Star Wars Holiday Special", which aired on November 17, 1978, marked the first appearance of the character Boba Fett, in an animated segment of the show. This special has never been released on video -- however, bootleg home-recorded videos have been circulating for years and are now all over the internet. George Lucas once remarked at an Australian convention, "If I had the time and a sledgehammer, I would track down every bootlegged copy of that program and smash it."'
    },
    {
      difficulty: 3,
      question:
        "What actor pulled out of Episode III: Revenge of the Sith when he discovered that non-union actors were being used in the film?",
      answers: {
        a: "George Clooney",
        b: "Gary Oldman",
        c: "Ian McKellan",
        d: "Mel Gibson"
      },
      correctAnswer: "b",
      showAnswer: "B: Gary Oldman",
      trivia:
        "Gary Oldman had agreed to be the voice of General Grievous, but pulled out of the film because it was being made using actors who were not part of the Screen Actor's Guild, of which Oldman was a member."
    },
    {
      difficulty: 3,
      question: "What character did George Lucas consider making a midget?",
      answers: {
        a: "Chewbacca",
        b: "Princess Leia",
        c: "Jar-Jar Binks",
        d: "Luke Skywalker"
      },
      correctAnswer: "d",
      showAnswer: "D: Luke Skywalker",
      trivia:
        "At one point, Lucas planned for the character of Luke Skywalker, along with his aunt and uncle, to be midgets. According to some sources, Leia's line when Luke rescues her (\"Aren't you a little short for a stormtrooper?\") is a remnant of this story idea."
    },
    {
      difficulty: 4,
      question: " Who served as Jabba the Hutt's chief of staff?",
      answers: {
        a: "Maz Kanata",
        b: "Sarlacc",
        c: "Bib Fortuna",
        d: "Nute Gunray"
      },
      correctAnswer: "c",
      showAnswer: "C: Bib Fortuna",
      trivia:
        "Bib Fortuna was a male Twi'lek who handled all of the day-to-day operations at Jabba's palace."
    }
  ];

  /*
{
    difficulty: "",
    question: "",
    answers: {
        a: "",
        b: "",
        c: "",
        d: ""
    },
    correctAnswer: "",
    trivia: "",
},
*/

  //question array
  //player begins game
  //call questions in order, easy questions first
  //30 sec timer
  //if correct, congrats and trivia
  //if wrong, correct answer and trivia

  $("#timer").hide();
  $("#question").hide();
  $("#answers").hide();
  $("#submit").hide();
  var i = 0;
  i++;
  var questionArray = questions.slice(i);
  var currentQuestion = questionArray.shift();

  //timer function
  //   var timer = window.setInterval(countdown(), 1000);

  //   function countdown() {
  //     var seconds = 15000;
  //     if (seconds > 0) {
  //       seconds - 1000;
  //       $("#timer").text("Seconds Remaining: " + seconds);
  //     }
  //   }

                            
                            
  //start game (prevents need for page reload)
  $("#start").on("click", function() {
    $("#start").hide();
    var currentQuestion = questionArray.shift();
    function timer() {
        setTimeout(myTimeout1, 1000);
        setTimeout(myTimeout2, 2000);
        setTimeout(myTimeout3, 3000);
        setTimeout(myTimeout4, 4000);
        setTimeout(myTimeout5, 5000);
        setTimeout(myTimeout6, 6000);
        setTimeout(myTimeout7, 7000);
        setTimeout(myTimeout8, 8000);
        setTimeout(myTimeout9, 9000);
        setTimeout(myTimeout10, 10000);
        setTimeout(timeOut, 11000);
      }
      function myTimeout1() {
        $("#timer").text("Seconds Remaining: " + 10);
      }
      function myTimeout2() {
        $("#timer").text("Seconds Remaining: " + 9);
      }
      function myTimeout3() {
        $("#timer").text("Seconds Remaining: " + 8);
      }
      function myTimeout4() {
        $("#timer").text("Seconds Remaining: " + 7);
      }
      function myTimeout5() {
        $("#timer").text("Seconds Remaining: " + 6);
      }
      function myTimeout6() {
        $("#timer").text("Seconds Remaining: " + 5);
      }
      function myTimeout7() {
        $("#timer").text("Seconds Remaining: " + 4);
      }
      function myTimeout8() {
        $("#timer").text("Seconds Remaining: " + 3);
      }
      function myTimeout9() {
        $("#timer").text("Seconds Remaining: " + 2);
      }
      function myTimeout10() {
        $("#timer").text("Seconds Remaining: " + 1);
      }
      function timeOut() {
          var userResponse = $(".active").val();
          var correctAnswer = currentQuestion.correctAnswer;
          var trivia = currentQuestion.trivia;
          if (userResponse === correctAnswer) {
            console.log("Right!");
            $(".question-check").modal({ backdrop: "static" });
            $(".modal-title").text("Correct!");
            $(".modal-body").text(trivia);
            $(".question-check").modal("show");
          } else {
            console.log("Nope.");
            $(".question-check").modal({ backdrop: "static" });
            $(".modal-title").text(
              "Sorry! The answer was " + currentQuestion.showAnswer + "."
            );
            $(".modal-body").text(trivia);
            $(".question-check").modal("show");
          }
          $("#timer").text("Seconds Remaining: " + 10);
      }
    currentQuestion;
    console.log(currentQuestion);
    $("#question").text(currentQuestion.question);
    $("#a").text("A: " + currentQuestion.answers.a);
    $("#b").text("B: " + currentQuestion.answers.b);
    $("#c").text("C: " + currentQuestion.answers.c);
    $("#d").text("D: " + currentQuestion.answers.d);
    $("#timer").show();
    $("#question").show();
    $("#answers").show();
    $("#submit").show();
    timer();
    console.log(timer);
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

  //call next question
  $("#next").on("click", function() {
    var currentQuestion = questionArray.shift();
    function timer() {
        setTimeout(myTimeout1, 1000);
        setTimeout(myTimeout2, 2000);
        setTimeout(myTimeout3, 3000);
        setTimeout(myTimeout4, 4000);
        setTimeout(myTimeout5, 5000);
        setTimeout(myTimeout6, 6000);
        setTimeout(myTimeout7, 7000);
        setTimeout(myTimeout8, 8000);
        setTimeout(myTimeout9, 9000);
        setTimeout(myTimeout10, 10000);
        setTimeout(timeOut, 11000);
      }
      function myTimeout1() {
        $("#timer").text("Seconds Remaining: " + 10);
      }
      function myTimeout2() {
        $("#timer").text("Seconds Remaining: " + 9);
      }
      function myTimeout3() {
        $("#timer").text("Seconds Remaining: " + 8);
      }
      function myTimeout4() {
        $("#timer").text("Seconds Remaining: " + 7);
      }
      function myTimeout5() {
        $("#timer").text("Seconds Remaining: " + 6);
      }
      function myTimeout6() {
        $("#timer").text("Seconds Remaining: " + 5);
      }
      function myTimeout7() {
        $("#timer").text("Seconds Remaining: " + 4);
      }
      function myTimeout8() {
        $("#timer").text("Seconds Remaining: " + 3);
      }
      function myTimeout9() {
        $("#timer").text("Seconds Remaining: " + 2);
      }
      function myTimeout10() {
        $("#timer").text("Seconds Remaining: " + 1);
      }
      function timeOut() {
          var userResponse = $(".active").val();
          var correctAnswer = currentQuestion.correctAnswer;
          var trivia = currentQuestion.trivia;
          if (userResponse === correctAnswer) {
            console.log("Right!");
            $(".question-check").modal({ backdrop: "static" });
            $(".modal-title").text("Correct!");
            $(".modal-body").text(trivia);
            $(".question-check").modal("show");
          } else {
            console.log("Nope.");
            $(".question-check").modal({ backdrop: "static" });
            $(".modal-title").text(
              "Sorry! The answer was " + currentQuestion.showAnswer + "."
            );
            $(".modal-body").text(trivia);
            $(".question-check").modal("show");
          }
          $("#timer").text("Seconds Remaining: " + 10);
      }
    console.log(currentQuestion);
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
    timer();
    $("#submit").on("click", function() {
      window.clearInterval(timer);
      var userResponse = $(".active").val();
      var correctAnswer = currentQuestion.correctAnswer;
      var trivia = currentQuestion.trivia;
      if (userResponse === correctAnswer) {
        console.log("Right!");
        $(".question-check").modal({ backdrop: "static" });
        $(".modal-title").text("Correct!");
        $(".modal-body").text(trivia);
        $(".question-check").modal("show");
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
