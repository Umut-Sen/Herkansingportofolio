var woord = 0;
var letter = 0;
var volgendewoord = false;
// Hulp gehad met A.I om het te fixen---------------------------------------------
var textElement = document.getElementById('tekst');
// -------------------------------------------------------------------------------
function typeffect() {
    var woorden = [
        "Software Developer",
        "toekomstige rijinstrecteur",
        "ROC Student"
    ];
    if (volgendewoord) {
        letter--;
    }
    else {
        letter++;
    }
    textElement.innerHTML = woorden[woord].slice(0, letter);
    var speed = 50;
    if (!volgendewoord && letter === woorden[woord].length - 1) {
        volgendewoord = true;
        speed = 100;
    }
    else if (volgendewoord && letter === 0) {
        volgendewoord = false;
        speed = 2500;
        woord++;
        if (woord === woorden.length) {
            woord = 0;
        }
    }
    setTimeout(typeffect, speed);
}
typeffect();
