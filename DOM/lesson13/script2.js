'use strict'

/* Programmiere ein weiteres Lauflicht. Diesmal soll das Lauflicht weiterspringen, wenn der Benutzer auf eine der Lampen klickt. Auch hier gilt: Nach der letzten Lampe fängt das Licht wieder von vorn an zu laufen. */
                
const lightbulbs = document.querySelectorAll('img');
let currentLight = 0;

lightbulbs.forEach((lightbulb, index) => {
    lightbulb.addEventListener('click', () => {
        lightbulbs[currentLight].src = 'light_off.png';
        lightbulb.src = 'light_on.png';
        currentLight = index + 1;
        if (currentLight === lightbulbs.length) {
            currentLight = 0;
        }
    });
});