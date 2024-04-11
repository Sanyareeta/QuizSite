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
        'que': 'Which of following is scripting language?',
        'a': 'HTML',
        'b': 'CSS',
        'c': 'C',
        'd': 'Javascript',
        'correct': 'd'
    },
    {
        'que': 'Which of following is styling language?',
        'a': 'HTML',
        'b': 'CSS',
        'c': 'C',
        'd': 'C++',
        'correct': 'b'
    },
    {
        'que': 'Which of following is cpp language?',
        'a': 'HTML',
        'b': 'CSS',
        'c': 'C',
        'd': 'C++',
        'correct': 'd'
    }
];

let currentQuestionIndex = 0;

function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById('question').innerHTML = `<p>${currentQuestion.que}</p>`;

    const options = document.querySelectorAll('.option');
    options.forEach((option, index) => {
        option.textContent = currentQuestion[String.fromCharCode(97 + index)];
    });
}

function checkAnswer(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];
    const isCorrect = selectedOption === currentQuestion.correct;

    if (isCorrect) {
        // Add your animation or visual feedback for correct answers
        alert('Correct!');
    } else {
        // Add your animation or visual feedback for incorrect answers
        alert('Incorrect!');
    }

    // Move to the next question
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        alert('Quiz completed!');
        // Add your logic to handle quiz completion
    }
}

// Initial setup
displayQuestion();
