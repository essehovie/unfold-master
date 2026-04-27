/* =====================================================
   hero.js — Typewriter animation for hero section
   ===================================================== */

(function () {

  var words = [
    "Web Developer.",
    "Full-stack developer.",
    "UI Builder.",
    "Problem Solver."
  ];

  var wordIndex   = 0;
  var charIndex   = 0;
  var isDeleting  = false;
  var el          = document.getElementById('typewriter');

  var typeSpeed     = 90;
  var deleteSpeed   = 50;
  var pauseAfter    = 1800;
  var pauseBefore   = 400;

  function type() {
    if (!el) return;

    var currentWord = words[wordIndex];

    if (isDeleting) {
      el.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
    } else {
      el.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
    }

    var delay = isDeleting ? deleteSpeed : typeSpeed;

    if (!isDeleting && charIndex === currentWord.length) {
      delay      = pauseAfter;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex  = (wordIndex + 1) % words.length;
      delay      = pauseBefore;
    }

    setTimeout(type, delay);
  }

  // Start after subheading fades in
  setTimeout(type, 1400);

})();