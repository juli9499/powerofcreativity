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
    document.querySelector("#submit").classList.remove("hide");
    document.querySelector("#startbillede").classList.remove("hide");
    document.querySelector("#submit").addEventListener("click", startQuiz);
    document.querySelector("#submit").addEventListener("click", hideSubmit);

    document.querySelector("#resultat").classList.add("hide");
}

function hideSubmit() {
    document.querySelector("#submit").classList.add("hide");
    document.querySelector("#startbillede").classList.add("hide");
}

function startQuiz() {
    document.querySelector("#firstQuestion").classList.remove("hide");
    document.querySelector("#true1").classList.remove("hide");
    document.querySelector("#false1").classList.remove("hide");
    document.querySelector("#true1").addEventListener("click", correctQ1);
    document.querySelector("#false1").addEventListener("click", falseQ1);
}


function correctQ1() {
    document.querySelector("#correctAnswer1").classList.remove("hide");
    document.querySelector("#firstQuestion").classList.add("hide");
    document.querySelector(".firstbillede").classList.remove("hide");
    document.querySelector("#true1").classList.add("hide");
    document.querySelector("#false1").classList.add("hide");
    document.querySelector("#nextQuestionTrue").classList.remove("hide");
    document.querySelector("#nextQuestionTrue").addEventListener("click", secondQuestion);
}

function falseQ1() {
    console.log("false");
    document.querySelector("#falseAnswer1").classList.remove("hide");
    document.querySelector("#firstQuestion").classList.add("hide");
    document.querySelector("#true1").classList.add("hide");
    document.querySelector("#false1").classList.add("hide");
    document.querySelector("#nextQuestionFalse").classList.remove("hide");
    document.querySelector("#nextQuestionFalse").addEventListener("click", secondQuestion);
}

function secondQuestion() {
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
    document.querySelector("#nextQuestionTrue2").addEventListener("click", thirdQuestion);
}

function falseQ2() {
    document.querySelector("#falseAnswer2").classList.remove("hide");
    document.querySelector("#secQuestion").classList.add("hide");
    document.querySelector("#true2").classList.add("hide");
    document.querySelector("#false2").classList.add("hide");
    document.querySelector("#nextQuestionFalse2").classList.remove("hide");
    document.querySelector("#nextQuestionFalse2").addEventListener("click", thirdQuestion);
}

function thirdQuestion() {
    console.log("tredje");

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
    document.querySelector("#nextQuestionTrue3").addEventListener("click", forthQuestion);
}

function falseQ3() {
    document.querySelector("#falseAnswer3").classList.remove("hide");
    document.querySelector("#thirdQuestion").classList.add("hide");
    document.querySelector("#true3").classList.add("hide");
    document.querySelector("#false3").classList.add("hide");
    document.querySelector("#nextQuestionFalse3").classList.remove("hide");
    document.querySelector("#nextQuestionFalse3").addEventListener("click", forthQuestion);
}

function forthQuestion() {
    console.log("fjerde");
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
    document.querySelector("#correctslut").classList.remove("hide");
    document.querySelector("#correctslut").addEventListener("click", Results);
}

function falseQ4() {
    console.log("forkert");
    document.querySelector("#falseAnswer4").classList.remove("hide");
    document.querySelector("#fourthQuestion").classList.add("hide");
    document.querySelector("#true4").classList.add("hide");
    document.querySelector("#false4").classList.add("hide");
    document.querySelector("#falseslut").classList.remove("hide");
    document.querySelector("#falseslut").addEventListener("click", Results);
    document.querySelector("#correctslut").addEventListener("click", Results);
}

function fifthQuestion() {
    console.log("femte");
    document.querySelector("#")
}


function Results() {
    console.log("resultat");
    document.querySelector("#resultat").classList.remove("hide");
    document.querySelector("#correctAnswer4").classList.add("hide");
    document.querySelector("#falseAnswer4").classList.add("hide");
    document.querySelector("#correctslut").classList.add("hide");
    document.querySelector("#falseslut").classList.add("hide");
    document.querySelector("#falseslut").classList.add("hide");
    document.querySelector("#tryAgain").classList.remove("hide");
    document.querySelector("#tryAgain").addEventListener("click", showStart);
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
