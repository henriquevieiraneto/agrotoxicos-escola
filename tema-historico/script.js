document.addEventListener("DOMContentLoaded", () => {
  console.log("Tema: Histórico dos Agrotóxicos carregado com sucesso!");

  const link = document.querySelector("a");
  link.addEventListener("mouseenter", () => {
    link.style.color = "#d9ed92";
  });

  link.addEventListener("mouseleave", () => {
    link.style.color = "#b5e48c";
  });
});