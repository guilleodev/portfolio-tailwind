  const btn = document.getElementById("menuBtn");
  const menu = document.getElementById("mobileMenu");
  const iconOpen = document.getElementById("iconOpen");
  const iconClose = document.getElementById("iconClose");

  function toggleMenu(open) {
    menu.classList.toggle("hidden", !open);
    iconOpen.classList.toggle("hidden", open);
    iconClose.classList.toggle("hidden", !open);
    btn.setAttribute("aria-expanded", open ? "true" : "false");
  }

  btn.addEventListener("click", () => {
    const isOpen = !menu.classList.contains("hidden");
    toggleMenu(!isOpen);
  });

  // Cierra al hacer click en un enlace
  menu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => toggleMenu(false));
  });

  // Cierra con ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") toggleMenu(false);
  });