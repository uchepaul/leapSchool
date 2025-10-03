function initMenuToggle(toggleId, menuId, menuId2) {
  const toggle = document.getElementById(toggleId);
  const menu = document.getElementById(menuId);
  const menuLeft = document.getElementById(menuId2);

  toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
    menuLeft.classList.toggle("active");
  });
}

// Initialize
initMenuToggle(
  "menuToggle",
  "digitalMakersnavbarcontent2",
  "digitalMakersnavbarcontent3"
);
