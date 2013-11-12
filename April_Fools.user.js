// ==UserScript==
// @name           April Fools
// @namespace      aprilFools@richard.parnaby-king.co.uk
// @description    Randomly insert a character after several keystrokes
// @include        *
// ==/UserScript==
var count = 0;
var limit = getRandomInt(100,150);
var alphabet = 'abcdefghijklmnopqrstuvwxyz';

function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.onkeypress = function (e) {
	count++;
	if (count > limit)
	{
		count = 0;
		limit = getRandomInt(100,150);
		document.activeElement.value = document.activeElement.value + alphabet.charAt(getRandomInt(0, 25));
	}
};
 