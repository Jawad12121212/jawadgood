const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

gsap.from(".page1 h1", {
    y: 100,
    opacity: 0,
    delay: 0.5,
    duration: 1,
    stagger: 0.2
})

let box = document.querySelector("video")
let btn = document.querySelector(".play")

// box.addEventListener("mouseenter", function(){
//     btn.style.transform = 'translate(-50%, -50%) scale(1)'
//     opacity = "1"
// })

// box.addEventListener("mouseleave", function(){
//     btn.style.transform = 'translate(-50%, -50%) scale(0)'
//     opacity = "0"
// })

// box.addEventListener("mousemove", function(dets){
//     btn.style.left = dets.x+"px"
//     btn.style.top = dets.y+"px"
// })

box.addEventListener("mouseenter", function () {
    gsap.to(btn, {
        scale: 1,
        opacity: 1
    })
})

box.addEventListener("mouseleave", function () {
    gsap.to(btn, {
        scale: 0,
        opacity: 0
    })
})

box.addEventListener("mousemove", function (dets) {
    gsap.to(btn, {
        left: dets.x,
        top: dets.y
    })

})

gsap.from(".page5 .items img", {
    y: 100,
    // opacity:0,
    delay: 4,
    duration: 1,
    stagger: 0.2
})

let koni1 = document.querySelector(".hover")
let koni = document.querySelectorAll(".items")


// koni.addEventListener("mouseenter", function() {
//     koni1.style.transform = "translate(-50%, -50%) scale(1)"
//     koni1.style.opacity = "1"

// })

// koni.addEventListener("mouseleave", function() {
//     koni1.style.transform = "translate(-50%, -50%) scale(0)"
//     koni1.style.opacity = "0"

// })

// koni.addEventListener("mousemove", function(dets) {
//     koni1.style.left = dets.x+"px"
//     koni1.style.top = dets.y+"px"

// })

koni.forEach(function (e) {
    e.addEventListener("mouseenter", function () {
        gsap.to(koni1, {
            transform: "translate(-50%, -50%) scale(1)",
            opacity: 1
        })
    })
    e.addEventListener("mouseleave", function () {
        gsap.to(koni1, {
            transform: "translate(-50%, -50%) scale(0)",
            opacity: 0
        })
    })

})

koni.forEach(function (e) {
    e.addEventListener("mousemove", function (dets) {
        gsap.to(koni1, {
            left:dets.x,
            top:dets.y
        })
    })
})