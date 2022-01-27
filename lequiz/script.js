        /*Ici j'ai Cree ma première class question ou y aurai mes question
         qui sont contenue dans un Class ou y aura la question + le choix et la bonne réponse*/
        class Question {
        constructor(text, choices, answer) {
          this.text = text;
          this.choices = choices;
          this.answer = answer;
        } // j'ai utlise un founction qui si le choix qui a chosi est bon ses vrai 
        isCorrectAnswer(choice) {
          return this.answer === choice;
        }
      } // ici ya tous mes objets question + le choix + la bonne réponse
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
      // ici ses pour le score pour stock la bonne réponse
      class Quiz {
        constructor(questions) {
          this.score = 0;
          this.questions = questions;
          this.currentQuestionIndex = 0;
        }
        getCurrentQuestion() {
          return this.questions[this.currentQuestionIndex];
        } //pour vérifier la réponse si elle est vrai ou pas en rajoutan 1 si elle est vrai
        guess(answer) {
          if (this.getCurrentQuestion().isCorrectAnswer(answer)) {
            this.score++;
          }
          this.currentQuestionIndex++;
        } 
        // la pour defenir la fin du quiz
        hasEnded() {
          return this.currentQuestionIndex >= this.questions.length;
        }
      }
      
      // Regrouper toutes les fonctions relatives à l'affichage des questions
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
          // 
//afficher les choix et gérer les suppositions
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
 