alert("JS carregou");





document.addEventListener("mousemove", function (e) {
  const img = document.createElement("img");

  img.src = "https://i.imgur.com/5z2b1lE.png"; // usa UMA imagem que você JÁ SABE que funciona
  img.style.position = "fixed";
  img.style.left = e.clientX + "px";
  img.style.top = e.clientY + "px";
  img.style.width = "16px";
  img.style.pointerEvents = "none";
  img.style.zIndex = "9999";

  document.body.appendChild(img);

  setTimeout(() => {
    img.remove();
  }, 500);
});
