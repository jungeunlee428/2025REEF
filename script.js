document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.animated-element');
    const fullScreenSections = document.querySelectorAll('.full-screen');

    const checkVisibility = () => {
        animatedElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight - (rect.height * 0.1)) {
                element.classList.add('visible');
            }
        });
    };
    checkVisibility();


    window.addEventListener('scroll', checkVisibility);

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    let currentSection = 0;
    window.addEventListener('wheel', function(e) {
        e.preventDefault();

        const delta = e.deltaY;
        const totalSections = fullScreenSections.length;

        if (delta > 0 && currentSection < totalSections - 1) {

            currentSection++;
        } else if (delta < 0 && currentSection > 0) {

            currentSection--;
        }

        fullScreenSections[currentSection].scrollIntoView({
            behavior: 'smooth'
        });
    }, { passive: false });
});
