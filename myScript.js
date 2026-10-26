
const audio1 = new Audio("project2Sounds/classical1.mp3");
const audio2 = new Audio("project2Sounds/classical2.mp3");
const audio3 = new Audio("project2Sounds/classical3.mp3");
const audio4 = new Audio("project2Sounds/classical4.mp3");
const audio5 = new Audio("project2Sounds/classical5.mp3");





const classicalAudio = [
    audio1,
    audio2,
    audio3,
    audio4,
    audio5,
]


function relaxAnimation(values){
    const relaxation = document.getElementById("relaxation");
    const relaxKeyframes = [
        { height: '2px'},    
        { height: values}, 
        { height: '2px'}  
    ]

    const timing = {
        duration: 700,       
    };
    
    relaxation.animate(relaxKeyframes, timing);
}

function caringAnimation(values){
    const caring = document.getElementById("caring");
    const caringKeyframes = [
        { height: '2px'},    
        { height: values}, 
        { height: '2px'}  
    ]

    const timing = {
        duration: 700,       
    };
    
    caring.animate(caringKeyframes, timing);
}

function mentalAnimation(values){
    const mental = document.getElementById("mentalClarity");
    const mentalKeyframes = [
        { height: '2px'},    
        { height: values}, 
        { height: '2px'}  
    ]

    const timing = {
        duration: 700,       
    };
    
    mental.animate(mentalKeyframes, timing);
}

function vigorAnimation(values){
    const vigor = document.getElementById("vigor");
    const vigorKeyframes = [
        { height: '2px'},    
        { height: values}, 
        { height: '2px'}  
    ]

    const timing = {
        duration: 700,       
    };
    
    vigor.animate(vigorKeyframes, timing);
}

function hostilityAnimation(origin, values){
    const hostility = document.getElementById("hostility");
    const hostilityKeyframes = [
        { height: origin},    
        { height: values}, 
        { height: origin}  
    ]

    const timing = {
        duration: 700,       
    };
    
    hostility.animate(hostilityKeyframes, timing);
}

function fatigueAnimation(origin, values){
    const fatigue = document.getElementById("fatigue");
    const fatigueKeyframes = [
        { height: origin},    
        { height: values}, 
        { height: origin}  
    ]

    const timing = {
        duration: 700,       
    };
    
    fatigue.animate(fatigueKeyframes, timing);
}

function sadAnimation(origin, values){
    const sad = document.getElementById("sadness");
    const sadKeyframes = [
        { height: origin},    
        { height: values}, 
        { height: origin}  
    ]

    const timing = {
        duration: 700,       
    };
    
    sad.animate(sadKeyframes, timing);
}

function tenseAnimation(origin, values){
    const tense = document.getElementById("tension");
    const tenseKeyframes = [
        { height: origin},    
        { height: values}, 
        { height: origin}  
    ]

    const timing = {
        duration: 700,       
    };
    
    tense.animate(tenseKeyframes, timing);
}

document.addEventListener('click', (event) => {

    const box = document.querySelector(".box");
    box.classList.add('box2');
    box.classList.remove('box1');

    document.getElementById("intro").style.opacity = 0;
    console.log('u clicked');
    playSound(2, 3);
    console.log('line bigged');

    caringAnimation('7px', '3.5px');
    mentalAnimation('7px', '6.5px');
    relaxAnimation('7px', '14px');
    vigorAnimation('7px','6.5px');
    hostilityAnimation('7px', '5.5px');
    fatigueAnimation('7px', '6px');
    sadAnimation('7px', '2px');
    tenseAnimation('7px', '14px');

    clickAni(event);

});


 function getMousePosition(event) {
    
    let x = event.pageX ;
    let y = event.pageY ;
    console.log("Coordinate x: " + x, "Coordinate y: " + y);
    return [x, y];
}

function clickAni(event){
    const x = getMousePosition(event)[0] - 50;
    const y = getMousePosition(event)[1] - 50;
    const circle = document.getElementById("circle");
    circle.style.transform = `translate(${x}px, ${y}px)`;
    circle.style.animation = 'mouseAni 1000ms';

     setTimeout(() => {
        circle.style.transform = "none";
        circle.style.animation = "none";
  }, 1000);
}






function playSound(start, stop) {
    //var audio = document.getElementById("audio");
    var audio = classicalAudio[Math.floor(Math.random()*classicalAudio.length)];
    console.log(audio);
    console.log('sound');
   // audio.play();

    audio.currentTime = start;
    audio.play();
    audio.int = setInterval(function() {
        if (audio.currentTime > stop) {
            audio.pause();
            clearInterval(audio.int);
        }
    }, 10);
} 

