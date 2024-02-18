document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("toggleButton");
  const closeButton = document.getElementById("closeButton");
  const mobileMenu = document.querySelector(".mobile-menu");
  let isOpen = false;

  function toggleMenu() {
    isOpen = !isOpen;
    if (isOpen) {
      mobileMenu.style.opacity = "1";
      mobileMenu.style.visibility = "visible";
      mobileMenu.style.pointerEvents = "auto";
    } else {
      mobileMenu.style.opacity = "0";
      mobileMenu.style.visibility = "hidden";
      mobileMenu.style.pointerEvents = "none";
    }
  }

  function closeMenu() {
    isOpen = false;
    mobileMenu.style.opacity = "0";
    mobileMenu.style.visibility = "hidden";
    mobileMenu.style.pointerEvents = "none";
  }

  toggleButton.addEventListener("click", toggleMenu);
  closeButton.addEventListener("click", closeMenu);
});

document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("openModal");
  const closeButton = document.getElementById("closeModal");
  const modal = document.querySelector(".backdrop");
  let isOpen = false;

  function toggleMenu() {
    isOpen = !isOpen;
    if (isOpen) {
      modal.style.opacity = "1";
      modal.style.visibility = "visible";
      modal.style.pointerEvents = "auto";
    } else {
      modal.style.opacity = "0";
      modal.style.visibility = "hidden";
      modal.style.pointerEvents = "none";
    }
  }

  function closeMenu() {
    isOpen = false;
    modal.style.opacity = "0";
    modal.style.visibility = "hidden";
    modal.style.pointerEvents = "none";
  }

  toggleButton.addEventListener("click", (evt) => {
    evt.preventDefault();
    toggleMenu();
  });
  closeButton.addEventListener("click", closeMenu);
});
