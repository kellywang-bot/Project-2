
     
       
gsap.registerPlugin(Elastic); //we must register the Elastic plugin with GSAP before using it

const myPath = document.querySelector('path'); // select the SVG path element that's in the HTML

// Define the different path states for the line: still, left swing, and right swing
const STILL_D = "M250,0 Q250,250 250,500"
const LEFT_D = "M250,0 Q150,250 250,500"
const RIGHT_D = "M250,0 Q350,250 250,500"
const SWING_DURATION = 0.3 // seconds for each swing of the line
const WOBBLE_DURATION = 3 // seconds the line undulates on its own before returning to the still position

// Create a GSAP timeline to control the sequence of the line's animation swings 
// "tl" can be named whatever you want, just make sure you use it consistently throughout the code
const tl = gsap.timeline({
    // When the timeline completes, return the line to the still position with an elastic ease
    onComplete: () => {
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
