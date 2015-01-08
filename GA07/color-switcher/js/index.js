document.getElementById('grayButton').onmouseover = switchGray;
document.getElementById('whiteButton').onmouseover = switchWhite;

function switchGray() {
	document.body.style.backgroundColor = 'gray';
	document.body.style.color = 'white';
}

function switchWhite() {
	document.body.style.backgroundColor = 'white';
	document.body.style.color = 'black';

}