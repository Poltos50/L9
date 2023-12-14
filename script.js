// Task 1

function changeColors() {
    var randomBackgroundColor = getRandomColor();
    var randomTextColor = getRandomColor();

    document.getElementById("myButton").style.backgroundColor = randomBackgroundColor;
    document.getElementById("myButton").style.color = randomTextColor;
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Task 2

function showAverage() {
    var numbers = [];
    var input;

    do {
        input = prompt("Введіть число:");

        if (input === null) {
            break;
        }

        var number = parseFloat(input);

        if (!isNaN(number)) {
            numbers.push(number);
        } else {
            alert("Введено невірне число. Спробуйте ще раз.");
        }

    } while (true);

    if (numbers.length > 0) {
        var sum = numbers.reduce(function (acc, val) {
            return acc + val;
        }, 0);

        var average = sum / numbers.length;
        alert("Середнє арифметичне: " + average.toFixed(2));
    } else {
        alert("Ви не ввели жодного числа.");
    }
}


// Task 3


function runMiniTest() {
    var questions = [
        { question: "Чи є Земля плоскою?", correctAnswer: false },
        { question: "Чи сонце обертається навколо Землі?", correctAnswer: false },
        { question: "Чи кіт - це ссавець?", correctAnswer: true },
        { question: "Чи Париж - столиця Франції?", correctAnswer: true },
        { question: "Чи кіт може летіти?", correctAnswer: false }
    ];

    var userAnswers = [];

    for (var i = 0; i < questions.length; i++) {
        var answer = confirm(questions[i].question);

        // Перевіряємо, чи відповідь користувача вірна
        if (answer === questions[i].correctAnswer) {
            userAnswers.push(true);
        } else {
            userAnswers.push(false);
        }
    }

    var correctAnswers = userAnswers.filter(function (answer) {
        return answer;
    }).length;

    var userName = prompt("Введіть ваше ім'я:");

    alert(userName + ", ви дали " + correctAnswers + " правильних відповідей з " + questions.length + ".");
}