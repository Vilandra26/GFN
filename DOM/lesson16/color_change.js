'use strict'

// Mit HTML Edits (Section 1)
function red() {
    document.body.style.backgroundColor = "red";
}

function green() {
    document.body.style.backgroundColor = "green";
}

function blue() {
    document.body.style.backgroundColor = "blue";
}


// Ohne HTML Edits (Section 2)
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('button');

    buttons.forEach(function(button) {
        button.addEventListener('click', function() {

            document.body.style.backgroundColor = button.textContent;
        });
    });
});
