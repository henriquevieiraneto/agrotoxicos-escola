document.addEventListener("DOMContentLoaded", () => {
  console.log("Tema: Problemas dos Agrotóxicos carregado!");

  const body = document.querySelector("body");
  body.style.transition = "background-color 0.5s ease-in-out";

  const link = document.querySelector("a");
  link.addEventListener("mouseenter", () => {
    link.style.textDecoration = "underline";
  });

  link.addEventListener("mouseleave", () => {
    link.style.textDecoration = "none";
  });
});