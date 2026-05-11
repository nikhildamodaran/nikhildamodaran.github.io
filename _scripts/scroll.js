<script>
// Elements to animate on scroll.
// Add or remove selectors here to control what fades in:
//   'section'      — top-level content blocks (#research, #teaching, etc.)
//   'section h2'   — subsection headings (## in the .qmd file)
//   'section h3'   — subsubsection headings (### in the .qmd file)
const elements = document.querySelectorAll('section, section h2, section h3');

// Run this function every time the user scrolls.
window.addEventListener('scroll', function() {

  elements.forEach(el => {
    // The "trigger zone" is a band centred on the middle of the viewport.
    // An element becomes visible when the viewport centre passes into this zone.
    // Increasing the /2 divisor makes the zone wider (elements appear earlier);
    // decreasing it makes the zone narrower (elements appear later).
    const top    = el.offsetTop - window.innerHeight / 2;
    const bottom = el.offsetTop + el.offsetHeight + window.innerHeight / 2;

    // The current scroll position, measured at the centre of the viewport.
    const scrollPosition = window.pageYOffset + window.innerHeight / 2;

    if (scrollPosition >= top && scrollPosition < bottom) {
      // Element is in view — add 'visible' to trigger the CSS fade-in.
      // The actual opacity transition is defined in _styles/index.css.
      el.classList.add('visible');
    } else {
      // Element is out of view — remove 'visible' so it fades out again.
      // To make the fade permanent (never fades back out), delete this else branch.
      el.classList.remove('visible');
    }
  });

});
</script>
