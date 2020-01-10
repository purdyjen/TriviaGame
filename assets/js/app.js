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
      question: 'What have fans of "The Mandalorian" named "The Child"?',
      answers: {
        a: "Baby Jabba",
        b: "Baby Oola",
        c: "Baby Mando",
        d: "Baby Yoda"
      },
      correctAnswer: "d",
      showAnswer: "D: Baby Yoda",
      trivia:
        'The Child, colloquially referred to as "Baby Yoda" by fans and the media, is a member of the same alien species as Jedi Master Yoda.'
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
    // {
    //   difficulty: 1,
    //   question: "Approximately how many languages can C-3PO speak?",
    //   answers: {
    //     a: "6 hundred",
    //     b: "6 trillion",
    //     c: "6 thousand",
    //     d: "6 million"
    //   },
    //   correctAnswer: "d",
    //   showAnswer: "D: 6 million",
    //   trivia: "C-3PO is fluent in over six million languages."
    // },
    // {
    //     difficulty: 2,
    //     question: "During the first episode of \"The Mandalorian,\" what creature is seen roasting on a spit?",
    //     answers: {
    //         a: "Spice Spider",
    //         b: "Geonosian Brain Worm",
    //         c: "Kowakian Monkey Lizard",
    //         d: "Space Slug"
    //     },
    //     correctAnswer: "c",
    //     showAnswer: "C: Kowakian Monkey Lizard",
    //     trivia: "A Kowakian monkey lizard is briefly seen roasting on a spit. This is the same species as Salacious Crumb, who sat with Jabba The Hutt on his throne in \"Return of the Jedi.\"",
    // },
    // {
    //   difficulty: 2,
    //   question: "Which Star Wars movie was filmed entirely in the studio?",
    //   answers: {
    //     a: "A New Hope",
    //     b: "Attack of the Clones",
    //     c: "The Force Awakens",
    //     d: "Revenge of the Sith"
    //   },
    //   correctAnswer: "d",
    //   showAnswer: "D: Revenge of the Sith",
    //   trivia:
    //     "Unlike the previous Star Wars films, which were shot both on soundstages and on location, Star Wars: Episode III - Revenge of the Sith was filmed entirely in the studio. The only location work was a background plate shot during the production of Episode II."
    // },
    // {
    //   difficulty: 2,
    //   question: "What sort of business did Luke's Uncle Owen run?",
    //   answers: {
    //     a: "Speeder Repair Shop",
    //     b: "Moisture Farm",
    //     c: "Droid Repair Shop",
    //     d: "Cantina"
    //   },
    //   correctAnswer: "b",
    //   showAnswer: "B: Moisture Farm",
    //   trivia:
    //     "On hot and arid desert worlds like Tatooine, moisture farming was a vital activity."
    // },
    // {
    //   difficulty: 2,
    //   question:
    //     "What is the first Star Wars film in which Yoda is completely computer-generated?",
    //   answers: {
    //     a: "Phantom Menance",
    //     b: "Attack of the Clones",
    //     c: "Empire Strikes Back",
    //     d: "Revenge of the Sith"
    //   },
    //   correctAnswer: "b",
    //   showAnswer: "B: Attack of the Clones",
    //   trivia:
    //     "Episode II: Attack of the Clones is the first Star Wars film in which Yoda (Frank Oz) is entirely computer-generated. Oz was only required on the set to help the actors by providing the voice of Yoda."
    // },
    // {
    //   difficulty: 2,
    //   question:
    //     "Who is the only non Jedi in the original Star Wars trilogy to use a lightsaber?",
    //   answers: {
    //     a: "Princess Leia",
    //     b: "Chewbacca",
    //     c: "Han Solo",
    //     d: "R2-D2"
    //   },
    //   correctAnswer: "c",
    //   showAnswer: "C: Han Solo",
    //   trivia:
    //     "Han Solo uses Luke's lightsaber to cut open the tauntaun's belly in The Empire Strikes Back."
    // },
    // {
    //   difficulty: 2,
    //   question:
    //     'Of whom did Jabba the Hutt say: "This bounty hunter is my kind of scum ... fearless and inventive"?',
    //   answers: {
    //     a: "Boba Fett",
    //     b: "Han Solo",
    //     c: "Asajj Ventress",
    //     d: "Princess Leia"
    //   },
    //   correctAnswer: "d",
    //   showAnswer: "D: Princess Leia",
    //   trivia:
    //     'In "Return of the Jedi," Leia infiltrates Jabba\'s palace on Tatooine, disguised as a bounty hunter, with Chewbacca as her prisoner.'
    // },
    // {
    //     difficulty: 2,
    //     question: "\"In The Empire Strikes Back,\" what odds does C-3P0 give Han for successfully navigating the asteroid field?",
    //     answers: {
    //         a: "3,720 t0 1",
    //         b: "720 to 1",
    //         c: "643,720 to 1",
    //         d: "43,720 to 1"
    //     },
    //     correctAnswer: "a",
    //     showAnswer: "A: 3,720 to 1",
    //     trivia: "Upon entering the asteroid field, C-3PO informs Han that the possibility of successfully navigating an asteroid field is approximately 3,720 to 1. Han, of course, replies: \"Never tell me the odds.\"",
    // },
    // {
    //   difficulty: 3,
    //   question: "Who plays Chewbacca in the original Star Wars trilogy?",
    //   answers: {
    //     a: "Anthony Daniels",
    //     b: "David Prowse",
    //     c: "Peter Mayhew",
    //     d: "Kenny Baker"
    //   },
    //   correctAnswer: "c",
    //   showAnswer: "C: Peter Mayhew",
    //   trivia:
    //     'Mayhew got his first acting job in 1976 when the producers of "Sinbad and the Eye of the Tiger" discovered him from a photograph in a newspaper article about men with large feet, and cast him in the role of the minotaur.'
    // },
    // {
    //   difficulty: 3,
    //   question:
    //     "In Episode VI: Return of the Jedi, the growls and sounds of the Rancor in Jabba's Palace were actually made by what animal?",
    //   answers: {
    //     a: "Wolverine",
    //     b: "Pigeon",
    //     c: "Panther",
    //     d: "Dachsund"
    //   },
    //   correctAnswer: "d",
    //   showAnswer: "D: Dachsund",
    //   trivia:
    //     "The growls and sounds of the Rancor in Jabba's Palace were actually remixed from an audio recording of an aggressive dachshund."
    // },
    // {
    //   difficulty: 3,
    //   question:
    //     '"The Star Wars Holiday Special" marked the first appearance of which Star Wars character?',
    //   answers: {
    //     a: "Lando Calrissian",
    //     b: "Jabba the Hutt",
    //     c: "Jar-Jar Binks",
    //     d: "Boba Fett"
    //   },
    //   correctAnswer: "d",
    //   showAnswer: "D: Boba Fett",
    //   trivia:
    //     '"The Star Wars Holiday Special", which aired on November 17, 1978, marked the first appearance of the character Boba Fett, in an animated segment of the show. This special has never been released on video -- however, bootleg home-recorded videos have been circulating for years and are now all over the internet. George Lucas once remarked at an Australian convention, "If I had the time and a sledgehammer, I would track down every bootlegged copy of that program and smash it."'
    // },
    // {
    //   difficulty: 3,
    //   question: "Who did Obi-Wan Kenobi defeat in the Battle of Naboo?",
    //   answers: {
    //     a: "Darth Tyranus",
    //     b: "Darth Maul",
    //     c: "Darth Sidious",
    //     d: "Darth Malak"
    //   },
    //   correctAnswer: "b",
    //   showAnswer: "B: Darth Maul",
    //   trivia:
    //     "Although his master, Qui-Gon Jinn, was mortally wounded in the battle, Kenobi became the first Jedi in a millennium to defeat a Sith Lord when he defeated Darth Maul."
    // },
    // {
    //     difficulty: 3,
    //     question: "What U.S. magazine declared Star Wars \"the year's best movie\" in its May 30, 1977 issue?",
    //     answers: {
    //         a: "Entertainment",
    //         b: "Time",
    //         c: "Forbes",
    //         d: "TV Guide"
    //     },
    //     correctAnswer: "b",
    //     showAnswer: "B: Time",
    //     trivia: "When the film hit theaters on May 25, 1977, no one expected the movie to be successful, let alone a blockbuster hit, but it made $510 million in its initial run.",
    // },
    // {
    //   difficulty: 3,
    //   question:
    //     'Which character said: "Why, you slimy, double-crossing, no-good swindler"?',
    //   answers: {
    //     a: "Lando Calrissian",
    //     b: "Han Solo",
    //     c: "Leia Organa",
    //     d: "Luke Skywalker"
    //   },
    //   correctAnswer: "a",
    //   showAnswer: "A: Lando Calrissian",
    //   trivia:
    //     'When Han lands in Cloud City, this is the greeting he gets from his "old friend", Lando Calrissian.'
    // },
    // {
    //   difficulty: 3,
    //   question:
    //     "What actor pulled out of Episode III: Revenge of the Sith when he discovered that non-union actors were being used in the film?",
    //   answers: {
    //     a: "George Clooney",
    //     b: "Gary Oldman",
    //     c: "Ian McKellan",
    //     d: "Mel Gibson"
    //   },
    //   correctAnswer: "b",
    //   showAnswer: "B: Gary Oldman",
    //   trivia:
    //     "Gary Oldman had agreed to be the voice of General Grievous, but pulled out of the film because it was being made using actors who were not part of the Screen Actor's Guild, of which Oldman was a member."
    // },
    // {
    //   difficulty: 3,
    //   question: "What character did George Lucas consider making a midget?",
    //   answers: {
    //     a: "Chewbacca",
    //     b: "Princess Leia",
    //     c: "Jar-Jar Binks",
    //     d: "Luke Skywalker"
    //   },
    //   correctAnswer: "d",
    //   showAnswer: "D: Luke Skywalker",
    //   trivia:
    //     "At one point, Lucas planned for the character of Luke Skywalker, along with his aunt and uncle, to be midgets. According to some sources, Leia's line when Luke rescues her (\"Aren't you a little short for a stormtrooper?\") is a remnant of this story idea."
    // },
    // {
    //   difficulty: 3,
    //   question:
    //     'The animators who brought the AT-AT Imperial Walkers to life in "Episode V: The Empire Strikes Back" based their movements on what kind of animal?',
    //   answers: {
    //     a: "Elephant",
    //     b: "Giraffe",
    //     c: "Stork",
    //     d: "Camel"
    //   },
    //   correctAnswer: "a",
    //   showAnswer: "A: Elephant",
    //   trivia:
    //     "For realism, the animators who brought the AT-AT Imperial walkers to life analyzed frame-by-frame footage of elephants walking."
    // },
    // {
    //   difficulty: 3,
    //   question: "What is Count Dooku's Sith name?",
    //   answers: {
    //     a: "Darth Nihilus",
    //     b: "Darth Tyranus",
    //     c: "Darth Maul",
    //     d: "Darth Sidious"
    //   },
    //   correctAnswer: "b",
    //   showAnswer: "B: Darth Tyranus",
    //   trivia:
    //     "Once a respected Jedi Master, Dooku falls to the dark side after the death of his former Padawan, Qui-Gon Jinn. Taking the name Darth Tyranus, he becomes Darth Sidious' second apprentice."
    // },
    // {
    //   difficulty: 3,
    //   question: "Which species stole the plans to the Death Star?",
    //   answers: {
    //     a: "Bothans",
    //     b: "Khommites",
    //     c: "Mynocks",
    //     d: "Selonians"
    //   },
    //   correctAnswer: "a",
    //   showAnswer: "A: Bothans",
    //   trivia:
    //     "The Bothan Spynet acquired secret top priority Imperial codes from the Death Star and transferred them to rogue Imperial Moff Kalast who, in turn, delivered them to the Rebellion."
    // },
    // {
    //   difficulty: 4,
    //   question: " Who served as Jabba the Hutt's chief of staff?",
    //   answers: {
    //     a: "Maz Kanata",
    //     b: "Sarlacc",
    //     c: "Bib Fortuna",
    //     d: "Nute Gunray"
    //   },
    //   correctAnswer: "c",
    //   showAnswer: "C: Bib Fortuna",
    //   trivia:
    //     "Bib Fortuna was a male Twi'lek who handled all of the day-to-day operations at Jabba's palace."
    // },
    // {
    //   difficulty: 4,
    //   question:
    //     'Which bounty hunter in "The Empire Strikes Back" is wearing an old costume from a "Doctor Who" episode?',
    //   answers: {
    //     a: "Bossk",
    //     b: "IG-88",
    //     c: "Dengar",
    //     d: "Boba Fett"
    //   },
    //   correctAnswer: "a",
    //   showAnswer: "A: Bossk",
    //   trivia:
    //     'Look up the episode "The Tenth Planet" to see a pilot dressed just like Bossk.'
    // },
    // {
    //   difficulty: 4,
    //   question: "What is the name of Boba Fett's ship?",
    //   answers: {
    //     a: "Ebon Hawk",
    //     b: "Ravager",
    //     c: "Tantive IV",
    //     d: "Slave 1"
    //   },
    //   correctAnswer: "d",
    //   showAnswer: "D: Slave 1",
    //   trivia:
    //     "Slave I was a modified Firespray-31-class patrol and attack craft Boba Fett inherited from his father."
    // },
    // {
    //   difficulty: 4,
    //   question:
    //     'Which Golden Girl played the role of Ackmena, the nightshift bartender in the "Star Wars Holiday Special"?',
    //   answers: {
    //     a: "Betty White",
    //     b: "Bea Arthur",
    //     c: "Rue McClanahan",
    //     d: "Estelle Getty"
    //   },
    //   correctAnswer: "b",
    //   showAnswer: "B: Bea Arthur",
    //   trivia:
    //     "During the filming of the Holiday Special, Arthur had no idea she was participating in anything related to Star Wars."
    // }
  ];

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
