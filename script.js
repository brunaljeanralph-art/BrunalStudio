document.addEventListener("DOMContentLoaded", () => {

  // Small visual feedback when a link/button is pressed.
  document.querySelectorAll("a.button, a.info-row").forEach((link) => {
    link.addEventListener("click", () => {
      link.classList.add("pressed");
      setTimeout(() => link.classList.remove("pressed"), 180);
    });
  });

});
