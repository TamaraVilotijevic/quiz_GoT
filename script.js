let question1 = {
    text: 'How many seasons of Game of Thrones are there?',
    answers: [7, 4, 5, 8],
    correctAnswerIndex: 3
};
let question2 = {
    text: 'In which season can you spot a Starbucks cup?',
    answers: [4, 3, 8, 6],
    correctAnswerIndex: 2
};
let question3 = {
    text: 'To which house does Cersei belong?',
    answers: ['Targaryen', 'Baratheon', 'Lannister', 'Tyrell'],
    correctAnswerIndex: 2
};
let question4 = {
    text: 'What is the name of the character played by Jason Momoa in the series?',
    answers: ['Jon Snow', 'Khal Drogo', 'Robb Stark', 'Tyrion Lannister'],
    correctAnswerIndex: 1
};
let question5 = {
    text: 'In which season did the famous "Red Wedding" occur?',
    answers: [6, 3, 4, 8],
    correctAnswerIndex: 1
};
let question6 = {
    text: 'What does "Valar Morghulis" mean?',
    answers: ['All men must live', 'All men must work', 'All men must serve', 'All men must die'],
    correctAnswerIndex: 3
};
let question7 = {
    text: 'What is the motto of House Stark?',
    answers: ['Winter is coming', 'Ours is the fury', 'Fire and blood', 'Hear me roar'],
    correctAnswerIndex: 0
};
let question8 = {
    text: 'What is the blood relation between Jon Snow and Daenerys Targaryen?',
    answers: ['Brother and sister', 'Nephew and aunt', 'Boyfriend and girlfriend', 'Father and daughter'],
    correctAnswerIndex: 1
};
let question9 = {
    text: 'What is the name of the Game of Thrones prequel?',
    answers: ['House of Targaryen', 'House of Dragons', 'A Song of Ice and Fire', 'Kings Landing'],
    correctAnswerIndex: 1
};
let question10 = {
    text: 'What is the name of Jon Snow\'s direwolf?',
    answers: ['Nymeria', 'Summer', 'Ghost', 'Grey Wind'],
    correctAnswerIndex: 2
};
let question11 = {
    text: 'What is the name of the actress who portrays the character Daenerys Targaryen?',
    answers: ['Lena Headey', 'Sophie Turner', 'Emilia Clarke', 'Maisie Williams'],
    correctAnswerIndex: 2
};
let question12 = {
    text: 'What was the name of Arya\'s sword?',
    answers: ['Ice', 'Needle', 'Fire', 'Dagger'],
    correctAnswerIndex: 1
};
let question13 = {
    text: 'What is Jon Snow\'s true name?',
    answers: ['Jon Stark', 'Rhegar Baratheon', 'Jon Tully', 'Aegon Targaryen'],
    correctAnswerIndex: 3
};
let question14 = {
    text: 'Which of the offered dragons was not Daenerys\'?',
    answers: ['Haggo', 'Drogon', 'Rhegal', 'Viserion'],
    correctAnswerIndex: 0
};
let question15 = {
    text: 'How did King Joffrey die?',
    answers: ['Stabbed with a sword', 'Burned by a dragon', 'Poisoned', 'Stoned'],
    correctAnswerIndex: 2
};
let question16 = {
    text: 'Which material can kill a White Walker in the series?',
    answers: ['Dragon glass', 'Valyrian steel', 'Gold', 'Copper'],
    correctAnswerIndex: 1
};
let question17 = {
    text: 'What is the name of the capital of the Seven Kingdoms in the series?',
    answers: ['Winterfell', 'King\'s Landing', 'Dragonstone', 'Storm\'s End'],
    correctAnswerIndex: 1
};
let question18 = {
    text: 'Who is the author of the book series "A Song of Ice and Fire" on which Game of Thrones is based?',
    answers: ['George R. R. Martin', 'J. R. R. Tolkien', 'Terry Brooks', 'Robert Jordan'],
    correctAnswerIndex: 0
};
let question19 = {
    text: 'What is the nickname given to Jaime Lannister in the series?',
    answers: ['Kingslayer', 'Golden Spearman', 'King Cheater', 'King of Dragons'],
    correctAnswerIndex: 0
};
let question20 = {
    text: 'Who was the ruler of the Dothraki during Daenerys Targaryen\'s time?',
    answers: ['Khal Drogo', 'Khal Moro', 'Khal Pono', 'Khal Jhaqo'],
    correctAnswerIndex: 0
};

let questions = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10, question11, question12, question13, question14, question15, question16, question17, question18, question19, question20];

let quizForm = document.getElementById('quizForm');
let btnSubmit = document.getElementById('submit');
let btnNewQuestions = document.getElementById('newQuestions');
let resultsDiv = document.getElementById('results');

let shuffleQuestions = (array) => {
    for (let i = array.length - 1; i >= 1; i--) {
        let randomIndex = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[randomIndex];
        array[randomIndex] = temp;
    }
    return array;
}

let showQuiz = () => {
    let shuffledQuestions = shuffleQuestions(questions);
    for (let i = 0; i < 5; i++) {
        quizForm.innerHTML +=
            `<div class="question">
                <h4>${i + 1}. ${shuffledQuestions[i].text}</h4>
                <input type="radio" name="questions${i}" value="0" checked> ${shuffledQuestions[i].answers[0]}<br>
                <input type="radio" name="questions${i}" value="1"> ${shuffledQuestions[i].answers[1]}<br>
                <input type="radio" name="questions${i}" value="2"> ${shuffledQuestions[i].answers[2]}<br>
                <input type="radio" name="questions${i}" value="3"> ${shuffledQuestions[i].answers[3]}<br>
            </div>`;
    }
}
showQuiz();

btnSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    showResults();
    let radioBtns = document.querySelectorAll('input[type="radio"]');
    radioBtns.forEach(r => {
        r.disabled = true;
    });
});

let showResults = () => {
    let results = '';
    for (let i = 0; i < 5; i++) {
        let selectedAnswer = document.querySelector(`input[name="questions${i}"]:checked`);
        let questionIndex = parseInt(selectedAnswer.value);
        if (questionIndex == questions[i].correctAnswerIndex) {
            results += `<p style="color: green">You answered question ${i + 1} correctly</p>`;
        } else {
            results += `<p style="color: red">You did not answer question ${i + 1} correctly</p>`;
        }
    }
    resultsDiv.innerHTML = results;
    resultsDiv.classList.add('question');
}

btnNewQuestions.addEventListener('click', () => {
    quizForm.innerHTML = '';
    resultsDiv.innerHTML = '';
    resultsDiv.classList.remove('question');
    showQuiz();
});