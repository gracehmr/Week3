const audio1 = document.getElementById("boom");
const audio2 = document.getElementById("clap");
const audio3 = document.getElementById("hihat");
const audio4 = document.getElementById("kick");
const audio5 = document.getElementById("openhat");
const audio6 = document.getElementById("ride");
const audio7 = document.getElementById("snare");
const audio8 = document.getElementById("tink");
const audio9 = document.getElementById('tom');

document.addEventListener("keydown", keyDrum)

//function for sounds on keydown
function keyDrum(event){
    let eventKey = event.key;
//boom sound
    if(eventKey == "a"){
        audio1.pause();
        audio1.currentTime = 0;
        audio1.play();
    }
//clap sound
    else if(eventKey == "b"){
        audio2.pause();
        audio2.currentTime = 0;
        audio2.play();
    }
//hihat sound
    else if(eventKey == "c"){
        audio3.pause();
        audio3.currentTime = 0;
        audio3.play();
    }
//kick sound
    else if(eventKey == "d"){
        audio4.pause();
        audio4.currentTime = 0;
        audio4.play();
    }
//openhat sound
    else if(eventKey == "e"){
        audio5.pause();
        audio5.currentTime = 0;
        audio5.play();
    }
//ride sound
    else if(eventKey == "f"){
        audio6.pause();
        audio6.currentTime = 0;
        audio6.play();
    }
//snare sound
    else if(eventKey == "g"){
        audio7.pause();
        audio7.currentTime = 0;
        audio7.play();
    }
//tink sound
    else if(eventKey == "h"){
        audio8.pause();
        audio8.currentTime = 0;
        audio8.play();
    }
//tom sound
    else if(eventKey == "i"){
        audio9.pause();
        audio9.currentTime = 0;
        audio9.play();
    }
// console.log(eventKey)

}

// function for sounds onclick button
function play1 (){
    let audio = audio1;
    audio1.pause();
    audio1.currentTime = 0;
    audio.play();
}

function play2 (){
    let audio = audio2;
    audio2.pause();
    audio2.currentTime = 0;
    audio.play();
}

function play3 (){
    let audio = audio3;
    audio3.pause();
    audio3.currentTime = 0;
    audio.play();
}

function play4 (){
    let audio = audio4;
    audio4.pause();
    audio4.currentTime = 0;
    audio.play();
}

function play5 (){
    let audio = audio5;
    audio5.pause();
    audio5.currentTime = 0;
    audio.play();
}

function play6 (){
    let audio = audio6;
    audio6.pause();
    audio6.currentTime = 0;
    audio.play();
}

function play7 (){
    let audio = audio7;
    audio7.pause();
    audio7.currentTime = 0;
    audio.play();
}

function play8 (){
    let audio = audio8;
    audio8.pause();
    audio8.currentTime = 0;
    audio.play();
}

function play9 (){
    let audio = audio9;
    audio9.pause();
    audio9.currentTime = 0;
    audio.play();
}


//function for animation on keydown
