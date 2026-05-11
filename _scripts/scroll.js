<script>
const elements = document.querySelectorAll('section, section h2, section h3');
window.addEventListener('scroll', function() {
  elements.forEach(el => {
    const top = el.offsetTop - window.innerHeight / 2;
    const bottom = el.offsetTop + el.offsetHeight + window.innerHeight / 2;
    const scrollPosition = window.pageYOffset + window.innerHeight / 2;

    if (scrollPosition >= top && scrollPosition < bottom) {
      el.classList.add('visible');
    } else {
      el.classList.remove('visible');
    }
  });
});
</script>
