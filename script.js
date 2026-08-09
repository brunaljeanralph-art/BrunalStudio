/* =========================================================
   BRUNAL STUDIO — SCRIPT
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  // Petit effet discret sur les boutons.
  document.querySelectorAll(".action, .info-row").forEach((link) => {

    link.addEventListener("click", () => {
      link.style.transform = "scale(0.99)";

      setTimeout(() => {
        link.style.transform = "";
      }, 120);
    });

  });

});
