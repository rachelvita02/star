document.addEventListener("DOMContentLoaded", function () {
    const star = document.querySelector(".star");
    const star2 = document.querySelector(".star2");

    let supportsScrollTimeline = false;

    // Feature detection for @scroll-timeline
    try {
        document.documentElement.style.setProperty("--test", "test");
        supportsScrollTimeline = CSS.supports("animation-timeline", "scroll");
    } catch (e) {
        supportsScrollTimeline = false;
    }

    if (!supportsScrollTimeline) {
        console.warn("Scroll-driven animations not supported. Using JavaScript fallback.");
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleScroll); // Ensures correct scaling on resize

        // Set initial state
        if (star) {
            star.style.transform = "scale(1.3)";
            star.style.filter = "drop-shadow(0px 0px 0px white)";
        }
        if (star2) {
            star2.style.transform = "scale(0.685)";
            star2.style.filter = "drop-shadow(0px 0px 0px white)";
        }

        handleScroll(); // Ensure correct state on page load
    }
});

function handleScroll() {
    const star = document.querySelector(".star");
    const star2 = document.querySelector(".star2");

    if (star) {
        updateScaleAndShadow(star, 1.3, 0.685, 30);
    }
    if (star2) {
        updateScaleAndShadow(star2, 0.685, 0.07, 20);
    }
}

function updateScaleAndShadow(element, startScale, endScale, maxBlur) {
    const scrollPosition = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const scrollRatio = Math.min(scrollPosition / maxScroll, 1); // Normalize between 0 and 1

    const newScale = startScale - (startScale - endScale) * scrollRatio;
    const blurAmount = maxBlur * scrollRatio; // Smooth transition for drop shadow

    element.style.transform = `scale(${newScale})`;
    element.style.filter = `drop-shadow(${blurAmount}px ${blurAmount}px ${blurAmount}px white)`;
}
