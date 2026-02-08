
<script>
document.addEventListener("mousemove", (e) => {
  const particle = document.createElement("div");
  particle.className = "particle";

  particle.style.left = e.clientX + "px";
  particle.style.top = e.clientY + "px";

  document.body.appendChild(particle);

  setTimeout(() => {
    particle.remove();
  }, 800);
});
</script>
