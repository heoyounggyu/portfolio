

var tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#page1",
        scroller: "#main",
        // markers: true,
        start: "top -5%",
        scrub: 3
    }
})

tl.to("#page2-circle svg .snake__text-path", {
    onStart: function snake() {
        var a = document.querySelector("#page2-circle svg .snake__text-path");
        var b = 100;

        function animate() {
            a.setAttribute("startOffset", `${b--}%`);
            if (b < -150) {
                b = 100; // Reset b to 100 when it becomes negative
            }
        }

        var intervalId = setInterval(animate, 100); // Start the animation

        // Save intervalId on the element to use later to clear the interval
        a.intervalId = intervalId;
    },
    onComplete: function() {
        clearInterval(this.intervalId); // Stop the animation when the tl.to() is complete
    },
    repeat: -1, // Infinite repeat
    repeatDelay: 0.1, // Optional delay between repeats
}, "anim1");