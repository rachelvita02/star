document.addEventListener("DOMContentLoaded", function () {
    const star = document.querySelector(".star");
    const star2 = document.querySelector(".star2");

    // Check if the browser supports animation-timeline: scroll();
    const supportsScrollTimeline = CSS.supports("animation-timeline", "scroll");

    if (!supportsScrollTimeline) {
        console.warn("Scroll-driven animations not supported. Using JavaScript fallback.");
        window.addEventListener("scroll", handleScroll);

        if (star) {
            star.style.transform = "scale(1.3)"; // Initial state
        }
        if (star2) {
            star2.style.transform = "scale(0.685)"; // Initial state
        }
    }
});

function handleScroll() {
    const star = document.querySelector(".star");
    const star2 = document.querySelector(".star2");

    if (star) {
        updateScale(star, 1.3, 0.685);
    }
    if (star2) {
        updateScale(star2, 0.685, 0.07);
    }
}

function updateScale(element, startScale, endScale) {
    const scrollPosition = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const scrollRatio = Math.min(scrollPosition / maxScroll, 1); // Normalize to [0,1]

    const newScale = startScale - (startScale - endScale) * scrollRatio;
    const newBlur = 1 + scrollRatio * 30; // Adjust blur dynamically

    element.style.transform = `scale(${newScale})`;
    element.style.filter = `drop-shadow(${newBlur}px ${newBlur}px ${newBlur}px white)`;
}
