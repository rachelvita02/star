if (!CSS.supports("animation-timeline: scroll()")) {
    // Fallback to JavaScript-based scroll animation
    gsap.to(".star", {
        scale: 0.685,
        scrollTrigger: {
            trigger: ".star",
            start: "top center",
            end: "bottom center",
            scrub: true,
        },
    });
}