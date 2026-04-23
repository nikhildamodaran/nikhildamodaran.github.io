<script>
const sections = document.querySelectorAll('section');
window.addEventListener('scroll', function() {
  sections.forEach(section => {
    const sectionTop = section.offsetTop - window.innerHeight / 2;
    const sectionBottom = section.offsetTop + section.offsetHeight + window.innerHeight / 2;
    const scrollPosition = window.pageYOffset + window.innerHeight / 2;

    if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
      section.classList.add('visible');
    } else {
      section.classList.remove('visible');
    }
  });
});
</script>
