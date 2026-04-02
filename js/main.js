document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.nav-links li');
  const mainContent = document.querySelector('.main-content');
  const sections = document.querySelectorAll('.section, .featured-banner');

  function scrollToSection(id) {
    const el = document.getElementById(id);
    if (el && mainContent) {
      const top = el.offsetTop - mainContent.offsetTop;
      mainContent.scrollTo({ top, behavior: 'smooth' });
    }
  }

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      const target = link.dataset.target;
      if (target) {
        scrollToSection(target);
      }
    });
  });

  function updateActiveNav() {
    let currentId = '';
    const scrollTop = mainContent.scrollTop;
    const offset = 80;

    sections.forEach(section => {
      const top = section.offsetTop - offset;
      if (scrollTop >= top) {
        currentId = section.id;
      }
    });

    navLinks.forEach(link => {
      link.classList.toggle('active', link.dataset.target === currentId);
    });
  }

  mainContent.addEventListener('scroll', updateActiveNav);
  updateActiveNav();

  document.querySelector('.nav-logo')?.addEventListener('click', () => {
    mainContent.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
