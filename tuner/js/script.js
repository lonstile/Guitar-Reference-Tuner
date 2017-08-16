var timer;
var sound;

function playNote(note) {
    sound = new Audio("resources\\" + note + ".mp3");
	sound.play();
}

function play(note) {
	stop();

	fnPlaySound = function() {
		pause();
		playNote(note)
	};

	fnPlaySound();
	timer = setInterval(fnPlaySound, 12000);
}

function pause() {
	if(sound) {
		sound.pause();
	}
}

function stop() {
	pause();
	clearInterval(timer);
}

function on(btn) {
	off();
	btn.className = "active";
}

function off() {
	var buttons = document.getElementsByTagName('button');
	for (var i = 0; i < buttons.length; i++) {
	    var button = buttons[i];
	    button.classList.remove("active");
	}
}