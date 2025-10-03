function initMenuToggle(toggleId, menuId) {
  const toggle = document.getElementById(toggleId);
  const menu = document.getElementById(menuId);

  toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
}

// Initialize
initMenuToggle("menuToggle", "nav_bar1");
