'use strict'
/* Anwender sind häufig ungeduldig und neigen dazu, mehrmals auf etwas zu klicken, wenn nicht sofort etwas Sichtbares passiert. Damit der Käufer die neue Heimkino-Anlage oder das Segelboot nicht versehentlich mehrfach bestellt, hat es sich bewährt, Buttons zu deaktivieren, nachdem sie geklickt wurden.

Schreibe eine entsprechende Funktion für den im Begleitmaterial (buy_button.html) hinterlegten Button. */

const buyButton = document.getElementById('buy');
buyButton.addEventListener('click', () => {
    buyButton.disabled = true;
});