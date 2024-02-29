'use strict'

/* Der folgende Button soll beim Betätigen eine Alert-Box öffnen mit dem Text »Hey I like it when you click me!«. */

const button1 = document.getElementById('btn1');

button1.addEventListener('click', () => {
    alert('Hey I like it when you click me!');
}); 

/* 2. Entferne die Alert-Box. Beim Betätigen des Buttons soll sich stattdessen der Button-Text ändern. */

const button2 = document.getElementById('btn2');

button2.addEventListener('click', () => {
    button2.textContent = 'Cool, you found an easteregg';
});

/* 3. Ändere den Text in »Cool, you found an easteregg«, für den Fall, dass der Anwender beim Klicken die Taste alt gedrückt hält. */

const button3 = document.getElementById('btn3');

button3.addEventListener('click', e => {
    if (e.altKey) {
        button3.textContent = 'Cool, you found an easteregg';
    }
});

