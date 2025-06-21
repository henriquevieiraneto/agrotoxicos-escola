document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".sidebar a");
  const current = window.location.pathname.split("/").pop();

  links.forEach(link => {
    if (link.getAttribute("href") === current || (current === "" && link.getAttribute("href") === "index.html")) {
      link.classList.add("ativo");
    }
  });

  const botaoTopo = document.createElement("button");
  botaoTopo.innerText = "↑ Topo";
  botaoTopo.id = "voltar-topo";
  botaoTopo.style.display = "none";
  document.body.appendChild(botaoTopo);

  botaoTopo.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  window.addEventListener("scroll", () => {
    botaoTopo.style.display = window.scrollY > 300 ? "block" : "none";
  });
});