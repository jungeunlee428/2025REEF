const panels = document.querySelectorAll('.panel');

const appearOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  });
}, appearOptions);

panels.forEach(panel => {
  appearOnScroll.observe(panel);
});

const video = document.getElementById('bgVideo');
const btn = document.getElementById('togglePlay');

btn.addEventListener('click', () => {
  if (video.paused) {
    video.play();
    btn.textContent = '⏸ Pause';
  } else {
    video.pause();
    btn.textContent = '▶ Play';
  }
});
