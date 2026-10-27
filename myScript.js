
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


function relaxAnimation(origin,values){
    const relaxation = document.getElementById("relaxation");
    const relaxKeyframes = [
        { strokeWidth: origin},    
        { strokeWidth: values}, 
        { strokeWidth: origin}
    ]

    const timing = {
        duration: 1000,       
    };
    
    relaxation.animate(relaxKeyframes, timing);
}

function caringAnimation(origin, values){
    const caring = document.getElementById("caring");
    const caringKeyframes = [
        { strokeWidth: origin },    
        { strokeWidth: values}, 
        { strokeWidth: origin}  
    ]
    console.log(caringKeyframes)

    const timing = {
        duration: 1000,       
    };
    
    caring.animate(caringKeyframes, timing);
}

function mentalAnimation(origin, values){
    const mental = document.getElementById("mentalClarity");
    const mentalKeyframes = [
        { strokeWidth: origin},    
        { strokeWidth: values}, 
        { strokeWidth: origin}  
    ]

    const timing = {
        duration: 1000,       
    };
    
    mental.animate(mentalKeyframes, timing);
}

function vigorAnimation(origin, values){
    const vigor = document.getElementById("vigor");
    const vigorKeyframes = [
        { strokeWidth: origin},    
        { strokeWidth: values}, 
        { strokeWidth: origin}  
    ]

    const timing = {
        duration: 1000,       
    };
    
    vigor.animate(vigorKeyframes, timing);
}

function hostilityAnimation(origin, values){
    const hostility = document.getElementById("hostility");
    const hostilityKeyframes = [
        { strokeWidth: origin},    
        { strokeWidth: values}, 
        { strokeWidth: origin}  
    ]

    const timing = {
        duration: 1000,       
    };
    
    hostility.animate(hostilityKeyframes, timing);
}

function fatigueAnimation(origin, values){
    const fatigue = document.getElementById("fatigue");
    const fatigueKeyframes = [
        { strokeWidth: origin},    
        { strokeWidth: values}, 
        { strokeWidth: origin}  
    ]

    const timing = {
        duration: 1000,       
    };
    
    fatigue.animate(fatigueKeyframes, timing);
}

function sadAnimation(origin, values){
    const sad = document.getElementById("sadness");
    const sadKeyframes = [
        { strokeWidth: origin},    
        { strokeWidth: values}, 
        { strokeWidth: origin}  
    ]

    const timing = {
        duration: 1000,       
    };
    
    sad.animate(sadKeyframes, timing);
}

function tenseAnimation(origin, values){
    const tense = document.getElementById("tension");
    const tenseKeyframes = [
        { strokeWidth: origin},    
        { strokeWidth: values}, 
        { strokeWidth: origin}  
    ]

    const timing = {
        duration: 1000,       
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

    wobble('caring', 0, 50);
    wobble('mentalClarity', 50, 50);
    wobble('relaxation', 100, 50);
    wobble('vigor', 150, 50);
    wobble('hostility', 200, 50);
    wobble('fatigue', 250, 50);
    wobble('sadness', 300, 50);
    wobble('tension', 350, 50);



    caringAnimation('7px', '6.5px');
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

  console.log('circle');
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

function wobble(name, originCoord, wobbleAmount){

gsap.registerPlugin(Elastic); //we must register the Elastic plugin with GSAP before using it

const myPath = document.getElementById(name); // select the SVG path element that's in the HTML

// Define the different path states for the line: still, left swing, and right swing
const STILL_D = `M0,${originCoord} Q250,${originCoord} 500,${originCoord}` // "M250,0 Q250,250 250,500"
const LEFT_D = `M0,${originCoord} Q250,${originCoord-wobbleAmount} 500,${originCoord}`
const RIGHT_D = `M0,${originCoord} Q250,${originCoord+ wobbleAmount} 500,${originCoord}` 
const SWING_DURATION = 0.2 // seconds for each swing of the line
const WOBBLE_DURATION = 0.7 // seconds the line undulates on its own before returning to the still position

// Create a GSAP timeline to control the sequence of the line's animation swings 
// "tl" can be named whatever you want, just make sure you use it consistently throughout the code


    console.log(myPath);

        const tl = gsap.timeline({
        // When the timeline completes, return the line to the still position with an elastic ease
        onComplete: () => {
            console.log('hi');
            gsap.to(myPath, {
                duration: 1,
                ease: Elastic.easeOut.config(1, 0.3),
                attr: { d: STILL_D } // return the line to the still position
            })
        }
    })

    // Ease smoothly from the still center position into the first swing...
    tl.to(myPath, { duration: SWING_DURATION, ease: "sine.inOut", attr: { d: LEFT_D } })
        // ...and then ease smoothly into the right swing
        .fromTo(myPath,
            { attr: { d: LEFT_D } }, // start from the left swing position
            {
                duration: SWING_DURATION, // duration of each swing in seconds
                ease: "sine.inOut", // use a smooth sine easing for the swing motion
                attr: { d: RIGHT_D }, // swing to the right position
                repeat: Math.round(WOBBLE_DURATION / SWING_DURATION) - 1, // repeat the left-right swing enough times to match the wobble duration
                yoyo: true // make the animation reverse direction after each repeat to create a back-and-forth wobble effect
            }
        )

    }



