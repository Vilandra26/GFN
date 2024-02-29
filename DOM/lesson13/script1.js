'use strict'
/* Eine erste Variante sind die chasing Lights. Dabei muss der Anwender das Lauflicht mit der Maus »jagen«. Immer wenn der Mauszeiger sich über einer Glühbirne befindet, schaltet sich die nächste Birne ein und die aktuelle aus. Versucht der Benutzer, mit dem Mauszeiger die leuchtende Glühbirne zu berühren, springt das Licht auf die nächste über. Er »jagt« quasi das Lauflicht. Bei der letzten Lampe beginnt das Spiel wieder von vorn! */

            const lightbulbs = document.querySelectorAll('img');
            let currentLight = 0;

            lightbulbs.forEach((lightbulb, index) => {
                lightbulb.addEventListener('mouseover', () => {
                    lightbulbs[currentLight].src = 'light_off.png';
                    lightbulb.src = 'light_on.png';
                    currentLight = index + 1;
                    if (currentLight === lightbulbs.length) {
                        currentLight = 0;
                    }
                });
            });