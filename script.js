

window.addEventListener("scroll", reveal);

function reveal() {
    let reveals = document.querySelectorAll(".reveal");

    reveals.forEach(r => {
        let windowHeight = window.innerHeight;
        let elementTop = r.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            r.classList.add("active");
        }
    });
}
