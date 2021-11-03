
   
window.onload = function() {
    "use strict";




    let textArea = document.getElementById("text-area");
    let start = document.getElementById("start");
    let stop = document.getElementById("stop");
    let animation = document.getElementById("animation");
    let fontsze = document.getElementById("fontsize");
    let turbo = document.getElementById("turbo");

    let isTurbo = false;
    let isAnimating = false;
    let animationcontent = [];

    // animation.onchange = () => {
    //         textArea.value = ANIMATIONS[animation.value];
    //     }
    animation.onchange = function change() {
        textArea.value = ANIMATIONS[animation.value];
    }

    fontsze.onchange = function() {
        if (fontsze.value === "Tiny") {
            textArea.style.fontSize = "7pt";
        } else if (fontsze.value === "Small") {
            textArea.style.fontSize = "10pt";
        } else if (fontsze.value === "Medium") {
            textArea.style.fontSize = "12pt";
        } else if (fontsze.value === "Large") {
            textArea.style.fontSize = "16pt";
        } else if (fontsze.value === "Extra Large") {
            textArea.style.fontSize = "24pt";
        } else {
            textArea.style.fontSize = "32pt";
        }
    }


    turbo.onclick = function() {
        isTurbo = turbo.checked;
    }



    start.onclick = function() {
        if (textArea.value === "") {
            alert("Select Animation First!");
        } else {
            isAnimating = true;
            animationcontent = textArea.value.split("=====");

            let disableOnStart = document.getElementsByClassName("disable-on-start");
            for (let i = 0; i < disableOnStart.length; i++) {
                disableOnStart[i].disabled = true;
            }

            let disableOnStop = document.getElementById("stop");
            disableOnStop.disabled = false;

            animate(0);
        }

    }
    stop.onclick = function() {
        isAnimating = false;
        textArea.value = animationcontent.join("=====");

        let disableOnStart = document.getElementsByClassName("disable-on-start");
        for (let i = 0; i < disableOnStart.length; i++) {
            disableOnStart[i].disabled = false;
        }

        let disableOnStop = document.getElementById("stop");
        disableOnStop.disabled = true;

    }

    function animate(index) {
        if (index >= animationcontent.length) {
            isAnimating = false
        }
        if (isAnimating) {
            document.getElementById("text-area").value = animationcontent[index];
            setTimeout(function() {
                animate((index + 1) % animationcontent.length)
            }, isTurbo ? 40 : 300);
        }
    }
}