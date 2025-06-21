document.addEventListener("DOMContentLoaded", () => {
  console.log("Tema: Alternativas carregado com sucesso!");

  const main = document.querySelector("main");
  main.animate(
    [{ opacity: 0 }, { opacity: 1 }],
    { duration: 800, fill: "forwards" }
  );
});