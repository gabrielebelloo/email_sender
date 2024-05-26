setTimeout(() => activeNavbar(), 500);

const activeNavbar = () => {
  document.querySelectorAll(".nav-link").forEach((link) => {
    if (link.href === window.location.href) {
        link.classList.add("active");
    }
  });
} 

