/* Fish and Ships Tackle Shop – scripts */
(function () {
  "use strict";

  // Icônes Lucide
  if (window.lucide) window.lucide.createIcons();

  // Header : fond au scroll
  var header = document.querySelector(".site-header");
  function onScroll() {
    if (!header || header.classList.contains("solid")) return;
    header.classList.toggle("scrolled", window.scrollY > 40);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Menu mobile
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      document.body.style.overflow = open ? "hidden" : "";
    });
    nav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
      });
    });
  }

  // Apparition au scroll
  var items = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("visible"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add("visible"); });
  }

  // Pré-sélection du sujet du formulaire depuis les CTA (data-subject)
  var select = document.getElementById("sujet");
  function setSubject(value) {
    if (!select || !value) return;
    for (var i = 0; i < select.options.length; i++) {
      if (select.options[i].value === value) { select.selectedIndex = i; break; }
    }
  }
  document.querySelectorAll("[data-subject]").forEach(function (el) {
    el.addEventListener("click", function () { setSubject(el.getAttribute("data-subject")); });
  });
  // via l'URL : index.html?sujet=...#contact
  try {
    var p = new URLSearchParams(window.location.search).get("sujet");
    if (p) setSubject(p);
  } catch (e) {}

  // Lightbox galerie
  var lb = document.querySelector(".lightbox");
  if (lb) {
    var lbImg = lb.querySelector("img");
    var lastFocus = null;
    document.querySelectorAll(".gallery button").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var img = btn.querySelector("img");
        lastFocus = btn;
        lbImg.src = btn.getAttribute("data-full") || img.src;
        lbImg.alt = img.alt;
        lb.classList.add("open");
        lb.querySelector(".lightbox-close").focus();
      });
    });
    function closeLb() { lb.classList.remove("open"); lbImg.src = ""; if (lastFocus) lastFocus.focus(); }
    lb.addEventListener("click", function (e) { if (e.target === lb || e.target.closest(".lightbox-close")) closeLb(); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape" && lb.classList.contains("open")) closeLb(); });
  }

  // Année du footer
  document.querySelectorAll("[data-year]").forEach(function (el) { el.textContent = new Date().getFullYear(); });
})();
