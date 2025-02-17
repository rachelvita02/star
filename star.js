document.addEventListener("DOMContentLoaded", function () {
    const star = document.querySelector(".star");
    const star2 = document.querySelector(".star2");

    // Check if the browser supports animation-timeline: scroll();
    const supportsScrollTimeline = CSS.supports("animation-timeline", "scroll");

    if (!supportsScrollTimeline) {
        console.warn("Scroll-driven animations not supported. Using JavaScript fallback.");
        
        if (star) {
            animateStar(star, 1.3, 0.685);
        }
        if (star2) {
            animateStar(star2, 0.685, 0.07);
        }
    }
});

function animateStar(element, startScale, endScale) {
    const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
                element.style.transition = "transform 1s ease-in-out, filter 1s ease-in-out";
                element.style.transform = `scale(${endScale})`;
                element.style.filter = "drop-shadow(30px 30px 50px white)";
            } else {
                element.style.transform = `scale(${startScale})`;
                element.style.filter = "drop-shadow(1px 1px 1px white)";
            }
        },
        { threshold: 0.5 }
    );
    observer.observe(element);
}