let woord = 0;
let letter = 0;
let volgendewoord = false;


// Hulp gehad met A.I om het te fixen---------------------------------------------
const textElement = document.getElementById('tekst') as HTMLElement;
// -------------------------------------------------------------------------------
function typeffect() {
    let woorden = [
        "Software Developer",
        "toekomstige rijinstrecteur",
        "ROC Student"
    ]

   
    if (volgendewoord) {
        letter--;
    } else {
        letter++;
    }
    
    textElement.innerHTML = woorden[woord]!.slice(0, letter);

    let speed = 50;

    if (!volgendewoord && letter === woorden[woord]!.length - 1) {
        volgendewoord = true;
        speed = 100;
    } else if (volgendewoord && letter === 0) {
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