var img1 = document.querySelector(".img1");
const img2 = document.querySelector(".img2");
const img3 = document.querySelector(".img3");

const body = document.querySelector("body");
const h1 = document.querySelector(".headings h1");
const p = document.querySelector(".headings p");

h1.style.color= "inherit";
p.style.color= "inherit";

gsap.to("body",{
    ease: "power3.in",
    backgroundColor: "#3c6c83",
    opacity: 1,
    delay: 0.7,
    duration: 0.8, 
});

gsap.to(".outerContainer",{
    ease: "power2.out",
    top: 0,
    delay: 0.9,
    duration: 2, 
});

gsap.to(".headings",{
    ease: "power2.out",
    top: 90,
    delay: 0.9,
    duration: 2.8, 
});

const tl = gsap.timeline({repeat: -1, defaults: {duration: 2, delay: 5.05}});

tl.to(".img1", {
width: 0,
ease: Expo.easeInOut,
onComplete: function(){
    img3.style.width= 800+"px";
}
})
.to(".img2", {
    width: 0,
    ease: Expo.easeInOut,
    onComplete: function() {
        img1.style.zIndex = "3";
        img3.style.zIndex = "5";
        img1.style.width= 800+"px";
    }
})
.to(".img3", {
    width: 0,
    ease: Expo.easeInOut,
    onComplete: function() {
        img1.style.zIndex = "5";
        img3.style.zIndex = "3";
        img2.style.width= 800+"px";
}
});

const tl2 = gsap.timeline({repeat: -1, defaults:{duration: 2, delay: 5.05}})

tl2.to("body",{
    ease: Expo.easeInOut,
    backgroundColor: "#4d2525",
})
.to("body",{
    ease: Expo.easeInOut,
    backgroundColor: "#23242c",
})
.to("body", {
    backgroundColor: "#3c6c83"
})

const tl3 = gsap.timeline({repeat: -1, defaults:{duration: 2, delay: 5.05}})


tl3.to(".headings",{
    color: "#d1c057"
})
.to(".headings",{
    color: "#1e1e1e"
})
.to(".headings",{
    color: "#47824a"
})

const tl4 = gsap.timeline({ repeat: -1 , defaults:{duration: 2, delay: 5.05}}); // Infinite repeat

// Add animations to the timeline
tl4.to(".line3", {
    ease: Expo.easeInOut,
    // backgroundColor: "rgb(185, 185, 185)"
    backgroundColor: "white"
})
.to(".line2", {
    ease: Expo.easeInOut,
    backgroundColor: "black"
}, "-=7.05") // Start this animation 7.05 second before the end of the previous animation
.to(".line1", {
    ease: Expo.easeInOut,
    backgroundColor: "black"
})
.to(".line2", {
    ease: Expo.easeInOut,
    backgroundColor: "white"
}, "-=7.05")
.to(".line1", {
    ease: Expo.easeInOut,
    backgroundColor: "white"
})
.to(".line3", {
    ease: Expo.easeInOut,
    backgroundColor: "black"
}, "-=7.05");