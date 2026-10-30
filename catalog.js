/* =====================================================
   catalog.js  |  ANGGOTA 3
   Isi: geser antar akun + galeri foto tiap akun
===================================================== */

/* 1. Navigasi antar kartu akun (tombol < 1 / 3 >) */
(function () {
  const list = document.getElementById("catalog-list");
  const count = document.getElementById("catalog-count");
  const cards = list.querySelectorAll(".catalog-card");
  const step = () => cards[0].offsetWidth + 24;

  document.getElementById("catalog-next").addEventListener("click", () => {
    list.scrollBy({ left: step(), behavior: "smooth" });
  });

  document.getElementById("catalog-prev").addEventListener("click", () => {
    list.scrollBy({ left: -step(), behavior: "smooth" });
  });

  list.addEventListener("scroll", () => {
    const i = Math.round(list.scrollLeft / step());
    count.textContent = (Math.min(i, cards.length - 1) + 1) + " / " + cards.length;
  });
})();

/* 2. Galeri foto di dalam tiap kartu (tombol + drag mouse) */
document.querySelectorAll(".catalog-gallery").forEach((gallery) => {
  const track = gallery.querySelector(".catalog-track");
  const next = gallery.querySelector(".gallery-next");
  const prev = gallery.querySelector(".gallery-prev");

  next.addEventListener("click", () => {
    track.scrollBy({ left: track.clientWidth, behavior: "smooth" });
  });

  prev.addEventListener("click", () => {
    track.scrollBy({ left: -track.clientWidth, behavior: "smooth" });
  });

  let isDragging = false;
  let startX = 0;
  let startScrollLeft = 0;

  track.addEventListener("mousedown", (event) => {
    isDragging = true;
    startX = event.pageX;
    startScrollLeft = track.scrollLeft;
  });

  window.addEventListener("mouseup", () => {
    isDragging = false;
  });

  track.addEventListener("mousemove", (event) => {
    if (!isDragging) return;

    event.preventDefault();
    const distance = event.pageX - startX;
    track.scrollLeft = startScrollLeft - distance;
  });
});
