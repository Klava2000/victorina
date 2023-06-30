const button = document.querySelector("#btn");
const par = document.querySelector("#par");
const submit = document.querySelector("#submit");

button.addEventListener("click", result);
submit.addEventListener("click", answer);

function result(e) {
    e.preventDefault();

    let points=0;

    if (document.querySelector('#answerOne').checked) {
        points++;
    }
    if (document.querySelector('#answerTwo').checked) {
        points++;
    }
    if (document.querySelector('#answerThree').checked) {
        points++;
    }
    if (document.querySelector('#answerFour').checked) {
        points++;
    }
    if (document.querySelector('#answerFive').checked) {
        points++;
    }
    if (document.querySelector('#answerSix').checked) {
        points++;
    }
    if (document.querySelector('#answerSeven').checked) {
        points++;
    }
    if (document.querySelector('#answerEight').checked) {
        points++;
    }
    if (document.querySelector('#answerNine').checked) {
        points++;
    }
    if (document.querySelector('#answerTen').checked) {
        points++;
    }
    if (document.querySelector('#answerEleven').checked) {
        points++;
    }
    if (document.querySelector('#answerTwelve').checked) {
        points++;
    }
    if (document.querySelector('#answerThirteen').checked) {
        points++;
    }
    if (document.querySelector('#answerFourteen').checked) {
        points++;
    }
    if (document.querySelector('#answerFifteen').checked) {
        points++;
    }
    if (document.querySelector('#answerSixteen').checked) {
        points++;
    }
    if (document.querySelector('#answerSeventeen').checked) {
        points++;
    }
    if (document.querySelector('#answerEighteen').checked) {
        points++;
    }
    if (document.querySelector('#answerNineteen').checked) {
        points++;
    }
    if (document.querySelector('#answerTwenty').checked) {
        points++;
    }

    par.textContent = "Ваши баллы: " + points;
}

function answer() {
    window.open('two-index.html', '_blank');
}