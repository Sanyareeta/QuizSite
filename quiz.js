const questions = [
     {
         'que': 'Which of the following is a markup language?',
         'a': 'HTML',
         'b': 'CSS',
         'c': 'C',
         'd': 'C++',
         'correct': 'a'
     }, 
     {
          'que':'Which of following is scripting language?',
           'a':'HTML',
           'b':'CSS',
           'c':'C',
           'd':'Javascript',
           'correct':'d'    
      },
      {
          'que':'Which of following is styling language?',
           'a':'HTML',
           'b':'CSS',
           'c':'C',
           'd':'C++',
           'correct':'b'    
      },
      {
          'que':'Which of following is cpp language?',
           'a':'HTML',
           'b':'CSS',
           'c':'C',
           'd':'C++',
           'correct':'d'    
      }
 ];
 
 let index = 0;
 let total=questions.length;
 let data;
//  const inputOptions = document.querySelectorAll('.options');
let inputOptions;
let right=0,wrong=0;
let timer=0;


 function loadQuestion() {
     if(index==total){
          return end();
     }
     reset();
     const quesBox = document.getElementById("quesBox");
     inputOptions = document.querySelectorAll('.options');
    
     if (quesBox) {
          data = questions[index];
         console.log(data);
         quesBox.innerText = `${index + 1}- ${data.que}`;
         inputOptions[0].nextElementSibling.innerText = data.a;
         inputOptions[1].nextElementSibling.innerText = data.b;
         inputOptions[2].nextElementSibling.innerText = data.c;
         inputOptions[3].nextElementSibling.innerText = data.d;
         startTimer();
     } else {
         console.error("Element with ID 'quesBox' not found.");
     }
 }
 

 function startTimer() {
    let timeLeft = 10; 
    
    timer = setInterval(() => {
        document.getElementById('timer').innerText = `Time Left: ${timeLeft}s`;

        if (timeLeft <= 0) {
            clearInterval(timer);
            submitQuiz();
        }

        timeLeft--;
         
         const percentage = (timeLeft / 10) * 100; 
         timerBar.style.width = `${percentage}%`;
    }, 1000);
}
// Sample quiz with three questions


 function submitQuiz() {
     const quesBox = document.getElementById("quesBox");
     const ans = getAnswer();
     if(ans==data.correct){
     right++;
     }
     else{
          wrong++;
     }
     index++;
     loadQuestion();
     return;
 }
 
 function getAnswer() {
     let answer;
     inputOptions.forEach(function (input) {
         if (input.checked) {
             console.log(input.value);
             answer= input.value;
         }
     //     } else {
     //         console.log('no');
     //     }
     });
     return answer;
 }

 function reset() {
     if (inputOptions) { // Ensure inputOptions is not undefined before using forEach
         inputOptions.forEach((input) => {
             input.checked = false;
         });
     }
 }
 const end=()=>{
document.getElementById("box").innerHTML=`<h3>Thank you playing the Quiz</h3>
                                           <h2>${right}/${total} are correct`
 }
 document.addEventListener("DOMContentLoaded", function () {
     loadQuestion();
 });
//  loadQuestion();
 