(function () {
  "use strict";

  // Year in footer
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // Mobile nav
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");

  function closeNav() {
    if (!toggle || !nav) return;
    toggle.setAttribute("aria-expanded", "false");
    nav.classList.remove("is-open");
  }

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      nav.classList.toggle("is-open", !open);
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeNav);
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeNav();
    });
  }

  // Product thumbnails
  document.querySelectorAll(".thumb").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var gallery = btn.getAttribute("data-gallery");
      var src = btn.getAttribute("data-src");
      if (!gallery || !src) return;

      var card = btn.closest(".product-card");
      if (!card) return;

      var mainImg = card.querySelector(".product-main img");
      if (mainImg) {
        mainImg.src = src;
        // keep a sensible alt based on gallery
        var alts = {
          pens: "Pix din lemn gravat, personalizat",
          martisor: "Mărțișor / breloc din lemn gravat",
          plaque: "Plăcuță inimă din lemn personalizată",
        };
        mainImg.alt = alts[gallery] || mainImg.alt;
      }

      card.querySelectorAll('.thumb[data-gallery="' + gallery + '"]').forEach(function (t) {
        t.classList.toggle("is-active", t === btn);
      });
    });
  });

  // Lightbox
  var lightbox = document.getElementById("lightbox");
  var lightboxImg = lightbox && lightbox.querySelector(".lightbox-img");
  var lightboxClose = lightbox && lightbox.querySelector(".lightbox-close");

  function openLightbox(src, alt) {
    if (!lightbox || !lightboxImg) return;
    lightboxImg.src = src;
    lightboxImg.alt = alt || "";
    lightbox.hidden = false;
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    if (!lightbox || !lightboxImg) return;
    lightbox.hidden = true;
    lightboxImg.src = "";
    document.body.style.overflow = "";
  }

  document.querySelectorAll(".product-main img").forEach(function (img) {
    img.addEventListener("click", function () {
      openLightbox(img.src, img.alt);
    });
  });

  if (lightboxClose) {
    lightboxClose.addEventListener("click", function (e) {
      e.stopPropagation();
      closeLightbox();
    });
  }

  if (lightbox) {
    lightbox.addEventListener("click", function (e) {
      if (e.target === lightbox) closeLightbox();
    });
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeLightbox();
  });

  // Soft header shadow on scroll
  var header = document.querySelector(".site-header");
  if (header) {
    var onScroll = function () {
      header.style.boxShadow =
        window.scrollY > 8 ? "0 4px 24px rgba(42, 31, 24, 0.08)" : "none";
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }
})();
