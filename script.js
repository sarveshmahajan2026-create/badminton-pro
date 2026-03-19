// Scroll animation
const elements = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

elements.forEach(el => observer.observe(el));


// ✅ WORKING VIDEO LOADER
function loadVideo() {
    document.getElementById("videoContainer").innerHTML = `
        <iframe 
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/aqz-KE-bpKQ?autoplay=1"
        title="Badminton Training"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
        </iframe>
    `;
}