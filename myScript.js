
//I used AI assistance, ChatGPT, to simplify some of the code that I had
//into more efficient chunks

//All my previous code (less efficient) is commented out

const audio1 = new Audio("project2Sounds/classical1.mp3");
const audio2 = new Audio("project2Sounds/classical2.mp3");
const audio3 = new Audio("project2Sounds/classical3.mp3");
const audio4 = new Audio("project2Sounds/classical4.mp3");
const audio5 = new Audio("project2Sounds/classical5.mp3");


const grunge1 = new Audio("project2Sounds/grunge1.mp3");
const grunge2 = new Audio("project2Sounds/grunge2.mp3");
const grunge3 = new Audio("project2Sounds/grunge3.mp3");
const grunge4 = new Audio("project2Sounds/grunge4.mp3");
const grunge5 = new Audio("project2Sounds/grunge5.mp3");

const newAge1 = new Audio("project2Sounds/newAge1.mp3");
const newAge2 = new Audio("project2Sounds/newAge2.mp3");
const newAge3 = new Audio("project2Sounds/newAge3.mp3");
const newAge4 = new Audio("project2Sounds/newAge4.mp3");
const newAge5 = new Audio("project2Sounds/newAge5.mp3");

const designer1 = new Audio("project2Sounds/designer1.mp3");
const designer2 = new Audio("project2Sounds/designer2.mp3");
const designer3 = new Audio("project2Sounds/designer3.mp3");
const designer4 = new Audio("project2Sounds/designer4.mp3");
const designer5 = new Audio("project2Sounds/designer5.mp3");

const classicalAudio = [
    audio1,
    audio2,
    audio3,
    audio4,
    audio5,
]

const newAgeAudio = [
    newAge1,
    newAge2,
    newAge3,
    newAge4,
    newAge5,
]


const grungeAudio = [
    grunge1,
    grunge2,
    grunge3,
    grunge4,
    grunge5,
]

const designerAudio = [
    designer1,
    designer2,
    designer3,
    designer4,
    designer5,
]



/*

function relaxAnimation(origin,values){
    const relaxation = document.getElementById("relaxation");
    const relaxKeyframes = [
        { width: origin},    
        { width: values}, 
        { width: origin}
    ]

    const timing = {
        duration: 1000,       
    };
    
    relaxation.animate(relaxKeyframes, timing);
}

function caringAnimation(origin, values){
    const caring = document.getElementById("caring");
    const caringKeyframes = [
        { width: origin },    
        { width: values}, 
        { width: origin}  
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
        { width: origin},    
        { width: values}, 
        { width: origin}  
    ]

    const timing = {
        duration: 1000,       
    };
    
    mental.animate(mentalKeyframes, timing);
}

function vigorAnimation(origin, values){
    const vigor = document.getElementById("vigor");
    const vigorKeyframes = [
        { width: origin},    
        { width: values}, 
        { width: origin}  
    ]

    const timing = {
        duration: 1000,       
    };
    
    vigor.animate(vigorKeyframes, timing);
}

function hostilityAnimation(origin, values){
    const hostility = document.getElementById("hostility");
    const hostilityKeyframes = [
        { width: origin},    
        { width: values}, 
        { width: origin}  
    ]

    const timing = {
        duration: 1000,       
    };
    
    hostility.animate(hostilityKeyframes, timing);
}

function fatigueAnimation(origin, values){
    const fatigue = document.getElementById("fatigue");
    const fatigueKeyframes = [
        { width: origin},    
        { width: values}, 
        { width: origin}  
    ]

    const timing = {
        duration: 1000,       
    };
    
    fatigue.animate(fatigueKeyframes, timing);
}

function sadAnimation(origin, values){
    const sad = document.getElementById("sadness");
    const sadKeyframes = [
        { width: origin},    
        { width: values}, 
        { width: origin}  
    ]

    const timing = {
        duration: 1000,       
    };
    
    sad.animate(sadKeyframes, timing);
}

function tenseAnimation(origin, values){
    const tense = document.getElementById("tension");
    const tenseKeyframes = [
        { width: origin},    
        { width: values}, 
        { width: origin}  
    ]

    const timing = {
        duration: 1000,       
    };
    
    tense.animate(tenseKeyframes, timing);
}

*/

/*
document.addEventListener('click', (event) => {

    const box = document.querySelector(".box");
    box.classList.add('box2');
    box.classList.remove('box1');

    document.getElementById("intro").style.opacity = 0;
});*/



  /*
    mentalAnimation('7px', '6.5px');
    relaxAnimation('7px', '14px');
    vigorAnimation('7px','6.5px');
    hostilityAnimation('7px', '5.5px');
    fatigueAnimation('7px', '6px');
    sadAnimation('7px', '2px');
    tenseAnimation('7px', '14px');*/


const dropdown = document.querySelector('.genre');

const genreTypes = {
    classical: {
        audio: classicalAudio,
        lengths: [700, 500, 1100, 500, 400, 750, 380, 100],
        direction: [1, 1, 1, 1, 1, 1, 1, 1],

    },

    newAge: {
        audio: newAgeAudio,
        lengths: [530, 160, 1900, 300, 10, 730, 670, 100],
        direction: [1, -1, 1, -1, 1, 1, 1, -1]
    },

    grungeRock: {
        audio: grungeAudio,
        lengths: [1530, 900, 2000, 640, 2590, 1200, 1300, 2400],
        direction: [-1, -1, -1, -1, 1, 1, 1, 1]
    },

    designerMusic: {
        audio: designerAudio,
        lengths: [1000, 1130, 1760, 1100, 120, 200, 100, 70],
        direction: [1, 1, 1, 1, 1, -1, 1, -1]
    }
};

let selectedGenre = genreTypes.classical;

dropdown.addEventListener('change', (event) => {

    selectedGenre = genreTypes[event.target.value];


});


const emotions = [
    'caring',
    'mentalClarity',
    'relaxation',
    'vigor',
    'hostility',
    'fatigue',
    'sadness',
    'tension'
];

const pathOrigins = [0, 50, 100, 150, 200, 250, 300, 350];
const color1 = ["#fba038 0%", 
    "#8ce1cc 0%", 
    "#ceeb6f 0%", 
    "#e38191 0%", 
    "#fb6f2e 0%",
    "#b2b39e 0%",
    "#7c939c 0%",
    "#ecd930 0%"];

const color2 = ["#FFF170 100%", 
    "#f0fd7a 100%", 
    "#f0e761 100%", 
    "#eb5b5b 100%", 
    "#df1b1b 100%",
    "#768066 100%",
    "#354f72 100%",
    "#d02d2d 100%"];
    
const colorDiv = document.getElementById("box__bg");


emotions.forEach((id, i) => {

    const myDiv = document.getElementById(id);

    myDiv.addEventListener('click', (event) => {
        colorDiv.style.background = `radial-gradient(circle, ${color1[i]}, ${color2[i]})`;
        wobble(id, pathOrigins[i], 20, selectedGenre.lengths[i], selectedGenre.direction[i]);
        clickAni(selectedGenre.audio, event);

    });

});

/*

  const dropdown = document.querySelector('.genre');

  // 2. Add an event listener for when the selection changes
  dropdown.addEventListener('change', (event) => {
    console.log(event);

    if (event.target.value == "classical"){
        
        console.log('class');

        elementClick('caring', 0, 700, classicalAudio);
        elementClick('mentalClarity', 50, 500, classicalAudio);
        elementClick('relaxation', 100, 1100, classicalAudio);
        elementClick('vigor', 150, 500, classicalAudio);
        elementClick('hostility', 200, 400, classicalAudio);
        elementClick('fatigue', 250, 750, classicalAudio);
        elementClick('sadness', 300, 380, classicalAudio);
        elementClick('tension', 350, 100, classicalAudio);

    } else if (event.target.value == "newAge"){

        console.log('newage');
        elementClick('caring', 0, 530, newAgeAudio);
        elementClick('mentalClarity', 50, -160, newAgeAudio);
        elementClick('relaxation', 100, 1900, newAgeAudio);
        elementClick('vigor', 150, -300, newAgeAudio);
        elementClick('hostility', 200, 10, newAgeAudio);
        elementClick('fatigue', 250, 730, newAgeAudio);
        elementClick('sadness', 300, 670, newAgeAudio);
        elementClick('tension', 350, -100, newAgeAudio);

    } else if (event.target.value == "grungeRock"){
        elementClick('caring', 0, -1530, grungeAudio);
        elementClick('mentalClarity', 50, -900, grungeAudio);
        elementClick('relaxation', 100, -2000, grungeAudio);
        elementClick('vigor', 150, -640, grungeAudio);
        elementClick('hostility', 200, 2590, grungeAudio);
        elementClick('fatigue', 250, 1200, grungeAudio);
        elementClick('sadness', 300, 1300, grungeAudio);
        elementClick('tension', 350, 2400, grungeAudio);
    } else if (event.target.value == "designerMusic"){
        elementClick('caring', 0, 1000, designerAudio);
        elementClick('mentalClarity', 50, 1130, designerAudio);
        elementClick('relaxation', 100, 1760, designerAudio);
        elementClick('vigor', 150, 1100, designerAudio);
        elementClick('hostility', 200, 120, designerAudio);
        elementClick('fatigue', 250, -200, designerAudio);
        elementClick('sadness', 300, 100, designerAudio);
        elementClick('tension', 350, -70, designerAudio);
    }
  });
  
  */
/*
function elementClick(id, origin, length, type){
    const myDiv = document.getElementById(id);
    // Listen for clicks directly on that element
    myDiv.addEventListener('click', (event) => {
        console.log(event);
        wobble(id, origin, 50, length);
        clickAni(type, event);
    });

}*/

 function getMousePosition(event) {
    
    let x = event.pageX ;
    let y = event.pageY ;
    console.log("Coordinate x: " + x, "Coordinate y: " + y);
    return [x, y];
}

function clickAni(type){
  playSound(type, 2, 3);
}



function playSound(type, start, stop) {

    //var audio = document.getElementById("audio");
    var audio = type[Math.floor(Math.random()*type.length)];
    console.log('the type is');
    console.log(type);

    audio.currentTime = start;
    audio.play();
    audio.int = setInterval(function() {
        if (audio.currentTime > stop) {
            audio.pause();
            clearInterval(audio.int);
        }
    }, 10);
} 

let direction = 1;
let bounceBack = true;


function wobble(name, originCoord, wobbleAmount, length2, direction) {

    const myPath = document.getElementById(name);

    const wave = {
        amplitude: 0,
        length: 500,
    };

  
    function makeWave(amplitude, length, bounceBack) {

        let d = `M0,${originCoord}`;
;

        if (direction === 1 || bounceBack){
            for (let x = 0; x <= length; x += 2) {

                const y = originCoord + amplitude * Math.sin(x * 0.06);

                d += ` L${x},${y}`;
            }
        } else {
            for (let x = 0; x >= -length; x -= 2) {

                const y = originCoord + amplitude * Math.sin(x * 0.06);

                d += ` L${x},${y}`;
        }

        }
        

        return d;
    }

         const tl = gsap.timeline();

          tl.to(wave, {
            amplitude: wobbleAmount,
            length: length2,
            duration: 0.7,
            ease: "elastic.out(1, 0.3)",
            onUpdate: () => {
                myPath.setAttribute(
                    "d",
                    makeWave(wave.amplitude, wave.length)
                );
            }
    })
            .to({}, {
        duration: 0.3
             })

            .to(wave, {
                amplitude: 0,
                length: 500,
                duration: 0.7,
                ease: "elastic.out(1, 0.3)",
                onUpdate: () => {
                    myPath.setAttribute(
                        "d",
                        makeWave(wave.amplitude, wave.length, true)
                     );
                }
            });

}


/*
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
*/



