//-------------------------------------- H J E R N E N  -------------------------------
//-------------------------------------- H J E R N E N  -------------------------------

function selectHotspot(e) {
    const clickedHotspot = e.target.parentElement;
    const container = clickedHotspot.parentElement;

    // only include hotspots within same image to allow one open hotspot per image; change "container" to "document" to allow only one open hotspot for entire page:
    const hotspots = container.querySelectorAll(".lg-hotspot");
    hotspots.forEach(hotspot => {
        if (hotspot === clickedHotspot) {
            hotspot.classList.toggle("lg-hotspot--selected");
        } else {
            hotspot.classList.remove("lg-hotspot--selected");
        }
    });
}

(() => {
    const buttons = document.querySelectorAll(".lg-hotspot__button");
    buttons.forEach(button => {
        button.addEventListener("click", selectHotspot);
    });
})();


//-------------------------------------- Q U I Z  M Y T E R N E -------------------------------

window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("Siden vises");
    showStart();

}

function showStart() {
    document.querySelector("#resultat").classList.add("hide");
    document.querySelector("#beginningQuiz").classList.remove("hide");
    document.querySelector("#submit").classList.add("pulse");
    document.querySelector("#submit").addEventListener("click", hideSubmit);



}

function hideSubmit() {
    document.querySelector("#beginningQuiz").classList.add("dissappear");
    document.querySelector("#beginningQuiz").addEventListener("animationend", startQuiz);


}

function startQuiz() {
    document.querySelector("#firstQuestion").classList.add("show");
    document.querySelector("#beginningQuiz").classList.add("hide");
    document.querySelector("#firstQuestion").classList.remove("hide");
    document.querySelector("#true1").addEventListener("click", correctQ1);
    document.querySelector("#false1").addEventListener("click", falseQ1);
}


function correctQ1() {
    document.querySelector("#correctAnswer1").classList.remove("hide");
    document.querySelector("#firstQuestion").classList.add("hide");
    document.querySelector(".firstbillede").classList.remove("hide");
    document.querySelector("#nextQuestionTrue").classList.remove("hide");
    document.querySelector("#nextQuestionTrue").classList.add("pulse");
    document.querySelector("#nextQuestionTrue").addEventListener("click", slideOutAnimation1);
}

function falseQ1() {
    console.log("false");
    document.querySelector("#falseAnswer1").classList.remove("hide");
    document.querySelector("#firstQuestion").classList.add("hide");
    document.querySelector("#true1").classList.add("hide");
    document.querySelector("#false1").classList.add("hide");
    document.querySelector("#nextQuestionFalse").classList.remove("hide");
    document.querySelector("#nextQuestionFalse").classList.add("pulse");
    document.querySelector("#nextQuestionFalse").addEventListener("click", slideOutAnimation1);
}

function slideOutAnimation1() {
    document.querySelector("#falseAnswer1").classList.add("dissappear");
    document.querySelector("#falseAnswer1").addEventListener("animationend", secondQuestion);
    document.querySelector("#correctAnswer1").classList.add("dissappear");
    document.querySelector("#correctAnswer1").addEventListener("animationend", secondQuestion);
}

function secondQuestion() {
    document.querySelector("#secQuestion").classList.add("show");
    document.querySelector("#secQuestion").classList.remove("hide");
    document.querySelector("#true2").classList.remove("hide");
    document.querySelector("#false2").classList.remove("hide");
    document.querySelector("#correctAnswer1").classList.add("hide");
    document.querySelector("#falseAnswer1").classList.add("hide");
    document.querySelector("#nextQuestionTrue").classList.add("hide");
    document.querySelector("#nextQuestionFalse").classList.add("hide");
    document.querySelector("#true2").addEventListener("click", correctQ2);
    document.querySelector("#false2").addEventListener("click", falseQ2);
}

function correctQ2() {
    document.querySelector("#correctAnswer2").classList.remove("hide");
    document.querySelector("#secQuestion").classList.add("hide");
    document.querySelector("#true2").classList.add("hide");
    document.querySelector("#false2").classList.add("hide");
    document.querySelector("#nextQuestionTrue2").classList.remove("hide");
    document.querySelector("#nextQuestionTrue2").classList.add("pulse");
    document.querySelector("#nextQuestionTrue2").addEventListener("click", slideOutAnimation2);
}

function falseQ2() {
    document.querySelector("#falseAnswer2").classList.remove("hide");
    document.querySelector("#secQuestion").classList.add("hide");
    document.querySelector("#true2").classList.add("hide");
    document.querySelector("#false2").classList.add("hide");
    document.querySelector("#nextQuestionFalse2").classList.remove("hide");
    document.querySelector("#nextQuestionFalse2").classList.add("pulse");
    document.querySelector("#nextQuestionFalse2").addEventListener("click", slideOutAnimation2);
}

function slideOutAnimation2() {
    document.querySelector("#falseAnswer2").classList.add("dissappear");
    document.querySelector("#falseAnswer2").addEventListener("animationend", thirdQuestion);
    document.querySelector("#correctAnswer2").classList.add("dissappear");
    document.querySelector("#correctAnswer2").addEventListener("animationend", thirdQuestion);
}

function thirdQuestion() {
    console.log("tredje");
    document.querySelector("#thirdQuestion").classList.add("show");
    document.querySelector("#thirdQuestion").classList.remove("hide");
    document.querySelector("#true3").classList.remove("hide");
    document.querySelector("#false3").classList.remove("hide");
    document.querySelector("#correctAnswer2").classList.add("hide");
    document.querySelector("#falseAnswer2").classList.add("hide");
    document.querySelector("#nextQuestionTrue2").classList.add("hide");
    document.querySelector("#nextQuestionFalse2").classList.add("hide");
    document.querySelector("#true3").addEventListener("click", correctQ3);
    document.querySelector("#false3").addEventListener("click", falseQ3);

}

function correctQ3() {
    document.querySelector("#correctAnswer3").classList.remove("hide");
    document.querySelector("#thirdQuestion").classList.add("hide");
    document.querySelector("#true3").classList.add("hide");
    document.querySelector("#false3").classList.add("hide");
    document.querySelector("#nextQuestionTrue3").classList.remove("hide");
    document.querySelector("#nextQuestionTrue3").classList.add("pulse");
    document.querySelector("#nextQuestionTrue3").addEventListener("click", slideOutAnimation3);
}

function falseQ3() {
    document.querySelector("#falseAnswer3").classList.remove("hide");
    document.querySelector("#thirdQuestion").classList.add("hide");
    document.querySelector("#true3").classList.add("hide");
    document.querySelector("#false3").classList.add("hide");
    document.querySelector("#nextQuestionFalse3").classList.remove("hide");
    document.querySelector("#nextQuestionFalse3").classList.add("pulse");
    document.querySelector("#nextQuestionFalse3").addEventListener("click", slideOutAnimation3);
}

function slideOutAnimation3() {
    document.querySelector("#falseAnswer3").classList.add("dissappear");
    document.querySelector("#falseAnswer3").addEventListener("animationend", forthQuestion);
    document.querySelector("#correctAnswer3").classList.add("dissappear");
    document.querySelector("#correctAnswer3").addEventListener("animationend", forthQuestion);
}

function forthQuestion() {
    console.log("fjerde");
    document.querySelector("#fourthQuestion").classList.add("show");
    document.querySelector("#fourthQuestion").classList.remove("hide");
    document.querySelector("#true4").classList.remove("hide");
    document.querySelector("#false4").classList.remove("hide");
    document.querySelector("#correctAnswer3").classList.add("hide");
    document.querySelector("#falseAnswer3").classList.add("hide");
    document.querySelector("#nextQuestionTrue3").classList.add("hide");
    document.querySelector("#nextQuestionFalse3").classList.add("hide");

    document.querySelector("#true4").addEventListener("click", correctQ4);
    document.querySelector("#false4").addEventListener("click", falseQ4);

}


function correctQ4() {
    console.log("rigtigt");
    document.querySelector("#correctAnswer4").classList.remove("hide");
    document.querySelector("#fourthQuestion").classList.add("hide");
    document.querySelector("#true4").classList.add("hide");
    document.querySelector("#false4").classList.add("hide");
    document.querySelector("#nextQuestionTrue4").classList.remove("hide");
    document.querySelector("#nextQuestionTrue4").classList.add("pulse");
    document.querySelector("#nextQuestionTrue4").addEventListener("click", slideOutAnimation4);
}

function falseQ4() {
    console.log("forkert");
    document.querySelector("#falseAnswer4").classList.remove("hide");
    document.querySelector("#fourthQuestion").classList.add("hide");
    document.querySelector("#true4").classList.add("hide");
    document.querySelector("#false4").classList.add("hide");
    document.querySelector("#nextQuestionFalse4").classList.remove("hide");
    document.querySelector("#nextQuestionFalse4").classList.add("pulse");
    document.querySelector("#nextQuestionFalse4").addEventListener("click", slideOutAnimation4);
}

function slideOutAnimation4() {
    document.querySelector("#falseAnswer4").classList.add("dissappear");
    document.querySelector("#falseAnswer4").addEventListener("animationend", fifthQuestion);
    document.querySelector("#correctAnswer4").classList.add("dissappear");
    document.querySelector("#correctAnswer4").addEventListener("animationend", fifthQuestion);
}

function fifthQuestion() {
    console.log("femte");
    document.querySelector("#fifthQuestion").classList.add("show");
    document.querySelector("#fifthQuestion").classList.remove("hide");
    document.querySelector("#true5").classList.remove("hide");
    document.querySelector("#false5").classList.remove("hide");
    document.querySelector("#correctAnswer4").classList.add("hide");
    document.querySelector("#falseAnswer4").classList.add("hide");
    document.querySelector("#nextQuestionTrue4").classList.add("hide");
    document.querySelector("#nextQuestionFalse4").classList.add("hide");

    document.querySelector("#true5").addEventListener("click", correctQ5);
    document.querySelector("#false5").addEventListener("click", falseQ5);

}

function correctQ5() {
    console.log("rigtigt");
    document.querySelector("#correctAnswer5").classList.remove("hide");
    document.querySelector("#fifthQuestion").classList.add("hide");
    document.querySelector("#true5").classList.add("hide");
    document.querySelector("#false5").classList.add("hide");
    document.querySelector("#nextQuestionTrue5").classList.remove("hide");
    document.querySelector("#nextQuestionTrue5").classList.add("pulse");
    document.querySelector("#nextQuestionTrue5").addEventListener("click", slideOutAnimation5);
}

function falseQ5() {
    console.log("forkert");
    document.querySelector("#falseAnswer5").classList.remove("hide");
    document.querySelector("#fifthQuestion").classList.add("hide");
    document.querySelector("#true5").classList.add("hide");
    document.querySelector("#false5").classList.add("hide");
    document.querySelector("#nextQuestionFalse5").classList.remove("hide");
    document.querySelector("#nextQuestionFalse5").classList.add("pulse");
    document.querySelector("#nextQuestionFalse5").addEventListener("click", slideOutAnimation5);

}

function slideOutAnimation5() {
    document.querySelector("#falseAnswer5").classList.add("dissappear");
    document.querySelector("#falseAnswer5").addEventListener("animationend", sixthQuestion);
    document.querySelector("#correctAnswer5").classList.add("dissappear");
    document.querySelector("#correctAnswer5").addEventListener("animationend", sixthQuestion);
}

function sixthQuestion() {
    console.log("sjette");
    document.querySelector("#sixthQuestion").classList.add("show");
    document.querySelector("#sixthQuestion").classList.remove("hide");
    document.querySelector("#true6").classList.remove("hide");
    document.querySelector("#false6").classList.remove("hide");
    document.querySelector("#correctAnswer5").classList.add("hide");
    document.querySelector("#falseAnswer5").classList.add("hide");
    document.querySelector("#nextQuestionTrue5").classList.add("hide");
    document.querySelector("#nextQuestionFalse5").classList.add("hide");
    document.querySelector("#true6").addEventListener("click", correctQ6);
    document.querySelector("#false6").addEventListener("click", falseQ6);

}

function correctQ6() {
    console.log("rigtigt");
    document.querySelector("#correctAnswer6").classList.remove("hide");
    document.querySelector("#sixthQuestion").classList.add("hide");
    document.querySelector("#true6").classList.add("hide");
    document.querySelector("#false6").classList.add("hide");
    document.querySelector("#nextQuestionTrue6").classList.remove("hide");
    document.querySelector("#nextQuestionTrue6").classList.add("pulse");
    document.querySelector("#nextQuestionTrue6").addEventListener("click", slideOutAnimation6);
}

function falseQ6() {
    console.log("forkert");
    document.querySelector("#falseAnswer6").classList.remove("hide");
    document.querySelector("#sixthQuestion").classList.add("hide");
    document.querySelector("#true6").classList.add("hide");
    document.querySelector("#false6").classList.add("hide");
    document.querySelector("#nextQuestionFalse6").classList.remove("hide");
    document.querySelector("#nextQuestionFalse6").classList.add("pulse");
    document.querySelector("#nextQuestionFalse6").addEventListener("click", slideOutAnimation6);
}

function slideOutAnimation6() {
    document.querySelector("#falseAnswer6").classList.add("dissappear");
    document.querySelector("#falseAnswer6").addEventListener("animationend", Results);
    document.querySelector("#correctAnswer6").classList.add("dissappear");
    document.querySelector("#correctAnswer6").addEventListener("animationend", Results);
}

function Results() {
    console.log("resultat");
    document.querySelector("#resultat").classList.add("show");
    document.querySelector("#resultat").classList.remove("hide");
    document.querySelector("#correctAnswer6").classList.add("hide");
    document.querySelector("#falseAnswer6").classList.add("hide");
    document.querySelector("#tryAgain").classList.remove("hide");
    document.querySelector("#tryAgain").classList.add("pulse");
    document.querySelector("#tryAgain").addEventListener("click", reset);
}

function reset() {
    window.history.go(0);
}


//-------------------------------------- I M A G E     S L I D E R -------------------------------
function beforeAfter() {
    document.getElementById('compare').style.width = document.getElementById('slider').value + "%";
}

//-------------------------------------- T I M E L I N E -------------------------------
(function () {

    'use strict';

    // define variables
    var items = document.querySelectorAll(".timeline li");

    // check if an element is in viewport
    // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function callbackFunc() {
        for (var i = 0; i < items.length; i++) {
            if (isElementInViewport(items[i])) {
                items[i].classList.add("in-view");
            }
        }
    }

    // listen for events
    window.addEventListener("load", callbackFunc);
    window.addEventListener("resize", callbackFunc);
    window.addEventListener("scroll", callbackFunc);

})();









//------------------------------------ K R E A T I V   Q U I Z -------------------------------

window.addEventListener("load", loadSiden);

function loadSiden () {
    document.querySelector("#startSpil").classList.remove("hide");
    document.querySelector(".playButton").classList.add("pulse");
    document.querySelector(".checkAnswers").classList.add("hide");
    document.querySelector("#startSpil").addEventListener("click", startQuizzen);


}


function startQuizzen () {
    document.querySelector("#startSpil").classList.add("hide");
    document.querySelector(".checkAnswers").classList.remove("hide");
    
    var questionArea = document.getElementsByClassName('questions')[0],
        answerArea = document.getElementsByClassName('answers')[0],
        checker = document.getElementsByClassName('checker')[0],
        current = 0,

        // An object that holds all the questions + possible answers.
        // In the array --> last digit gives the right answer position
        allQuestions = {
            'Hvem kan blive iværksætter?': ['En der har mange penge', 'En der har mange kontakter', 'En der har en idé, som kan føres ud i livet', 'En der har studeret business på universitetet', 2],

            'Børn har ekstraordinære evner når det kommer til…': ['Skrive kundskaber', 'Innovation', 'Matematik', 'Stå på hænder', 1],

            'Hvordan kan man blive en bedre innovator? ': ['Vente på at få en god idé/åbenbaring', 'Læs om andres idéer', 'Træne sin kreativitet', 'Gør ingenting', 2],

            'Hvorfor er iværksætteri vigtigt?': ['Man tjener mange penge på det', 'Vi har brug for flere materielle produkter i verden', 'Verden er under konstant forandring og vi har brug for nye innovative idéer for at følge med i udviklingen', 'Der er ikke nok iværksætterer i verden', 2],

            'For at komme på en original idé skal man være forberedt på hvad?': ['Ikke fortælle nogen om det. Andre vil prøve at stjæle din idé', 'At man kan lave mange fejl undervejs', 'At man skal have et team bag sig', 'At det ikke tager lang tid', 1]
        };

    function loadQuestion(curr) {
        // This function loads all the question into the questionArea
        // It grabs the current question based on the 'current'-variable

        var question = Object.keys(allQuestions)[curr];

        questionArea.innerHTML = '';
        questionArea.innerHTML = question;
    }

    function loadAnswers(curr) {
        // This function loads all the possible answers of the given question
        // It grabs the needed answer-array with the help of the current-variable
        // Every answer is added with an 'onclick'-function

        var answers = allQuestions[Object.keys(allQuestions)[curr]];

        answerArea.innerHTML = '';

        for (var i = 0; i < answers.length - 1; i += 1) {
            var createDiv = document.createElement('div'),
                text = document.createTextNode(answers[i]);

            createDiv.appendChild(text);
            createDiv.addEventListener("click", checkAnswer(i, answers));


            answerArea.appendChild(createDiv);
        }
    }

    function checkAnswer(i, arr) {
        // This is the function that will run, when clicked on one of the answers
        // Check if givenAnswer is sams as the correct one
        // After this, check if it's the last question:
        // If it is: empty the answerArea and let them know it's done.

        return function () {
            var givenAnswer = i,
                correctAnswer = arr[arr.length - 1];

            if (givenAnswer === correctAnswer) {
                addChecker(true);
            } else {
                addChecker(false);
            }

            if (current < Object.keys(allQuestions).length - 1) {
                current += 1;

                loadQuestion(current);
                loadAnswers(current);
            } else {
                questionArea.innerHTML = 'Done';
                document.querySelector("#tryAgain").classList.remove("hide");

                answerArea.innerHTML = 'Tak fordi du tog vores quiz. <br> <br> Vi håber at du har fået en bedre forstående for kreativ læring og iværksætteri.'
                document.querySelector("#tryAgain").addEventListener("click", reset);
            }

        };
    }

    function addChecker(bool) {
        // This function adds a div element to the page
        // Used to see if it was correct or false

        var createDiv = document.createElement('div'),
            txt = document.createTextNode(current + 1);

        createDiv.appendChild(txt);

        if (bool) {

            createDiv.className += 'correct';
            checker.appendChild(createDiv);
        } else {
            createDiv.className += 'false';
            checker.appendChild(createDiv);
        }
    }


    // Start the quiz right away
    loadQuestion(current);
    loadAnswers(current);

};
