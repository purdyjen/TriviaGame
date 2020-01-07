$(document).ready(function() {
//trivia questions array
var questions = [
  {
    difficulty: "Easy",
    question:
      "Which of the three main heroes (Luke, Leia, and Han Solo) in the first Star Wars trilogy refused to sign a three-picture deal?",
    answers: {
      a: "Mark Hamill",
      b: "Carrie Fisher",
      c: "Harrison Ford",
      d: "They all signed"
    },
    correctAnswer: "c",
    trivia:
      "Having Han Solo frozen in carbonite was (at least in part) due to the fact that they were not sure that Harrison Ford would return for a third film. When the original Star Wars was made, Carrie Fisher and Mark Hammill were signed for a three picture deal, but Ford refused."
  },
  {
    difficulty: "Easy",
    question: "What color is Mace Windu's lightsaber?",
    answers: {
      a: "Purple",
      b: "Blue",
      c: "Green",
      d: "Red"
    },
    correctAnswer: "a",
    trivia:
      'There is no mystical significance in the color of Mace Windu\'s lightsaber. Samuel L. Jackson, after a joking conversation with stunt coordinator Nick Gillard, asked Lucas if he could have a purple lightsaber and Lucas agreed. In an interview on UK TV, Jackson said he "thought it would be cool."'
  },
  {
    difficulty: "Easy",
    question: "Approximately how many languages can C-3PO speak?",
    answers: {
      a: "6 hundred",
      b: "6 trillion",
      c: "6 thousand",
      d: "6 million"
    },
    correctAnswer: "d",
    trivia: "C-3PO is fluent in over six million languages."
  },
  {
    difficulty: "Medium",
    question: "Which Star Wars movie was filmed entirely in the studio?",
    answers: {
      a: "A New Hope",
      b: "Attack of the Clones",
      c: "The Force Awakens",
      d: "Revenge of the Sith"
    },
    correctAnswer: "d",
    trivia:
      "Unlike the previous Star Wars films, which were shot both on soundstages and on location, Star Wars: Episode III - Revenge of the Sith was filmed entirely in the studio. The only location work was a background plate shot during the production of Episode II."
  },
  {
    difficulty: "Medium",
    question:
      "Who is the only non Jedi in the original Star Wars trilogy to use a lightsaber?",
    answers: {
      a: "Princess Leia",
      b: "Chewbacca",
      c: "Han Solo",
      d: "R2-D2"
    },
    correctAnswer: "c",
    trivia:
      "Han Solo uses Luke's lightsaber to cut open the tauntaun's belly in The Empire Strikes Back."
  },
  {
    difficulty: "Hard",
    question:
      "In Episode VI: Return of the Jedi, the growls and sounds of the Rancor in Jabba's Palace were actually made by what animal?",
    answers: {
      a: "Wolverine",
      b: "Pigeon",
      c: "Panther",
      d: "Dachsund"
    },
    correctAnswer: "d",
    trivia:
      "The growls and sounds of the Rancor in Jabba's Palace were actually remixed from an audio recording of an aggressive dachshund."
  },
  {
    difficulty: "Hard",
    question:
      '"The Star Wars Holiday Special" marked the first appearance of which Star Wars character?',
    answers: {
      a: "Lando Calrissian",
      b: "Jabba the Hutt",
      c: "Jar-Jar Binks",
      d: "Boba Fett"
    },
    correctAnswer: "d",
    trivia:
      '"The Star Wars Holiday Special", which aired on November 17, 1978, marked the first appearance of the character Boba Fett, in an animated segment of the show. This special has never been released on video -- however, bootleg home-recorded videos have been circulating for years and are now all over the internet. George Lucas once remarked at an Australian convention, "If I had the time and a sledgehammer, I would track down every bootlegged copy of that program and smash it."'
  },
  {
    difficulty: "Hard",
    question:
      "What actor pulled out of Episode III: Revenge of the Sith when he discovered that non-union actors were being used in the film?",
    answers: {
      a: "George Clooney",
      b: "Gary Oldman",
      c: "Gary Coleman",
      d: "Mel Gibson"
    },
    correctAnswer: "b",
    trivia:
      "Gary Oldman had agreed to be the voice of General Grievous, but pulled out of the film because it was being made using actors who were not part of the Screen Actor's Guild, of which Oldman was a member."
  },
  {
    difficulty: "Hard",
    question: "What character did George Lucas consider making a midget?",
    answers: {
      a: "Chewbacca",
      b: "Princess Leia",
      c: "Jar-Jar Binks",
      d: "Luke Skywalker"
    },
    correctAnswer: "d",
    trivia:
      "At one point, Lucas planned for the character of Luke Skywalker, along with his aunt and uncle, to be midgets. According to some sources, Leia's line when Luke rescues her (\"Aren't you a little short for a stormtrooper?\") is a remnant of this story idea."
  },
  {
    difficulty: "Expert",
    question: " Who served as Jabba the Hutt's chief of staff?",
    answers: {
      a: "Maz Kanata",
      b: "Sarlacc",
      c: "Bib Fortuna",
      d: "Nute Gunray"
    },
    correctAnswer: "c",
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


// function testQuestion (
//     difficulty,
//     question,
//     answers,
//     correctAnswer,
//     trivia
// ) {
//     this.difficulty = difficulty;
//     this.answers = question;
//     this.answers = answers;
//     this.correctAnswer = correctAnswer;
//     this.trivia = trivia
// }

// var one = new testQuestion(
//     "Easy",
//     "Which of the three main heroes (Luke, Leia, and Han Solo) in the first Star Wars trilogy refused to sign a three-picture deal?",
//     {
//   a: "Mark Hamill",
//   b: "Carrie Fisher",
//   c: "Harrison Ford",
//   d: "They all signed"
//     },
//     "c",
//   "Having Han Solo frozen in carbonite was (at least in part) due to the fact that they were not sure that Harrison Ford would return for a third film. When the original Star Wars was made, Carrie Fisher and Mark Hammill were signed for a three picture deal, but Ford refused."
// );

var i = 0;
i++
var questionArray = questions.slice(i);

$("#question").hide();
$("#answers").hide();
$("#submit").hide();

$("#start").on("click", function() {
    $("#start").hide();
    var currentQuestion = questionArray.shift();
    console.log(currentQuestion);
    $("#question").text(currentQuestion.question);
    $("#a").text(currentQuestion.answers.a);
    $("#b").text(currentQuestion.answers.b);
    $("#c").text(currentQuestion.answers.c);
    $("#d").text(currentQuestion.answers.d);
    $("#question").show();
    $("#answers").show();
    $("#submit").show();
});

$("#submit").on("click", function() {
 
    var currentQuestion = questionArray.shift();
    console.log(currentQuestion);
    $("#question").text(currentQuestion.question);
    $("#a").text(currentQuestion.answers.a);
    $("#b").text(currentQuestion.answers.b);
    $("#c").text(currentQuestion.answers.c);
    $("#d").text(currentQuestion.answers.d);
    $("#question").show();
    $("#answers").show();
});

}); //doc ready closing tag