document.addEventListener("DOMContentLoaded", () => {
  console.log("Tema: Agronegócio x Agricultura Familiar carregado.");

  const h1 = document.querySelector("h1");
  h1.addEventListener("mouseenter", () => {
    h1.style.color = "#2e7d32";
  });
  h1.addEventListener("mouseleave", () => {
    h1.style.color = "#1b5e20";
  });
});