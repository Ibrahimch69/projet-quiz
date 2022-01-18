 /* class Question {
    constructor(text,choix,reponse){
        this.text = text;
        this.choix = choix;
        this.reponse = reponse;
    }
    isCorrectAnswer(choix){
        return this.reponse === choix;
    }
}
let question =[
       new Question("Qui e st le meilleur jouer de foot en 2014?",
       ["messi()","ronaldo()","benzemz()","zidan()"],
        "ronaldo()"),
       new Question('qui est le meilleur buteur en 2021',
    [  "kelyan()", "lewandowski()", "naymar()","messi()"],
    "lewandowski()")
];
console.log(question); 

class quiz{
    constructor(question){
        this.score=0; 
        this.question=question;
        this.currentQuestionsIndex =0;
    }
    getCurrentQuestion(){
        return thiq.question[this.currentQuestionsIndex];
        }
    } */
  
          
        
    
    class Question {
        constructor(text, choices, answer) {
          this.text = text;
          this.choices = choices;
          this.answer = answer;
        }
        isCorrectAnswer(choice) {
          return this.answer === choice;
        }
      }
      let questions = [
        new Question("Qui e st le meilleur jouer de foot en 2014?", ["messi","ronaldo","benzemz","zidan"],
        "ronaldo"),
        new Question("Qui est le meilleur buteur en 2021 ?",["kylian mbappé", "lewandowski", "neymar","messi"],
        "lewandowski"),
        new Question("Qui a gagné la coupe du monde de football en 2018 ?", ["Croatie","Angleterre", "belgique", "France"], 
        "France"),
        new Question("quel est le joueur de foot qui a le plus de ballon d'or ?", ["messi","ronaldo", "benzema", "neymar"], 
        "messi"),
        new Question("Qui est le meilleurs tireurs de coup-francs ?" ,["messi","ronaldo","benzema","Juninho"],
        "Juninho"),

      ];
      
      console.log(questions);
      
      class Quiz {
        constructor(questions) {
          this.score = 0;
          this.questions = questions;
          this.currentQuestionIndex = 0;
        }
        getCurrentQuestion() {
          return this.questions[this.currentQuestionIndex];
        }
        guess(answer) {
          if (this.getCurrentQuestion().isCorrectAnswer(answer)) {
            this.score++;
          }
          this.currentQuestionIndex++;
        }
        hasEnded() {
          return this.currentQuestionIndex >= this.questions.length;
        }
      }
      
      // Regroup all  functions relative to the App Display
      const display = {
        elementShown: function(id, text) {
          let element = document.getElementById(id);
          element.innerHTML = text;
        },
        endQuiz: function() {
          endQuizHTML = `
            <h1>⚽uiz terminé   !</h1>
            <h3> Votre score est de : ${quiz.score} / ${quiz.questions.length}</h3>`;
          this.elementShown("quiz", endQuizHTML);
        },
        question: function() {
          this.elementShown("question", quiz.getCurrentQuestion().text);
        },
        choices: function() {
          let choices = quiz.getCurrentQuestion().choices;
      
          guessHandler = (id, guess) => {
            document.getElementById(id).onclick = function() {
              quiz.guess(guess);
              quizApp();
            }
          }
          // display choices and handle guess
          for(let i = 0; i < choices.length; i++) {
            this.elementShown("choice" + i, choices[i]);
            guessHandler("guess" + i, choices[i]);
          }
        },
        progress: function() {
          let currentQuestionNumber = quiz.currentQuestionIndex + 1;
          this.elementShown("progress", "Question " + currentQuestionNumber + " sur " + quiz.questions.length);
        },
      };
      
      // Game logic
      quizApp = () => {
        if (quiz.hasEnded()) {
          display.endQuiz();
        } else {
          display.question();
          display.choices();
          display.progress();
        } 
      }
      // Create Quiz
      let quiz = new Quiz(questions);
      quizApp();
      
      console.log(quiz);
      
























/*let quiz [
    {
        question:' Qui est le meilleur jouer de foot en 2014? ',
        answers: [
            "messi",
            "ronaldo",
            "benzemz",
            "zidan",
        ],
        correct: 1
    },
    {
        question:'qui est le meilleur buteur en 2021',
        answers:[
            "kelyan"
            "lewandowski"
            "naymar"
            "messi"
        ]
    }*/
 