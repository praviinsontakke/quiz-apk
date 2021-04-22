const quizDB = [
    {
        question: "Q1: what is the full form of HTML?",
        a: "Hello To My Land",
        b: "Hey Text Markup Language",
        c: "Hyper Text Makeup Language",
        d: "Hyper Text Markup Language",
        ans: "ans4"
    },
    {
        question: "Q2: What is the full form of CSS?",
        a: "Cascading Style Sheets",
        b: " Cascading Style Sheep",
        c: "Cartoon Style Sheets",
        d: "Cascading Super Sheets",
        ans: "ans1"
    },
    {
      question:  " Q3: What is the full form of HTTP?",
      a: "Hypertext Transfer Product",
      b: "Hyper Text Test Protocol",
      c: "Hypertext Transfer Protocol",
      d: "Hey Transfer Protocol",
      ans:"ans4"
    },
    {
     question: "Q4: What is the full form of JS?",
     a: "JavaScript",
     b: " JavaSuper",
     c: "JordenShoes",
     d: "JustScript",
     ans: "ans1"   
    }
];
const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('answer');
const showScore = document,queryselector('#showScore');


let questioncount = 0;
let score = 0;
const loadQuestion = ()  {
    question.innerText =  quizDB[questionCount];
    question.innerText = questionlist.question;

    option1.innertext = questionlist.a;
    option2.innertext = questionlist.b;
    option3.innertext = questionlist.c;
    option4.innertext = questionlist.d;
    
}
loadQuestion();
const getCheckAnswer = () {
      let answer;

      answers.forEach((curAnsElem) {
        if(curAnsElem.checked){
        answer = curAnsElem.id
        }
        
      });

      return answer;
};
    const deselectAll = () {
        answers.forEach(curAnsElem)   curAnsElem.checked= false ;
    }

submit.addEventListener('click',() {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer ==  quizDB[questionCount].ans)
       score++
};
    
   questioncount++;
   deselectAll();

   if(questionCount < quizDB.length){
        loadQuestion();    
   } else {

    showScore.innerHTML = ''
    <h3> you scored ${score}/${quizDB.length} </h3>
    <button class="btn" onclick="Location.reload"> play again </button>
    ;
     showScore.classlist.remove('ScoreArea');
   }

};

