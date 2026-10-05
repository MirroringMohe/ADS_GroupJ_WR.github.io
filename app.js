// Small helpers for the web report: active section highlight + back-to-top.
// Nothing here depends on the report content, so you can leave it as it is.
(function () {
  "use strict";

  // 1. Highlight the table-of-contents link for the section in view.
  var links = Array.prototype.slice.call(document.querySelectorAll(".toc a[href^='#']"));
  var sections = links
    .map(function (link) {
      return document.querySelector(link.getAttribute("href"));
    })
    .filter(Boolean);

  if ("IntersectionObserver" in window && sections.length) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          links.forEach(function (link) {
            var match = link.getAttribute("href") === "#" + entry.target.id;
            if (match) {
              link.setAttribute("aria-current", "true");
            } else {
              link.removeAttribute("aria-current");
            }
          });
        });
      },
      { rootMargin: "-25% 0px -65% 0px", threshold: 0 }
    );
    sections.forEach(function (section) {
      observer.observe(section);
    });
  }

  // 2. Back-to-top button.
  var button = document.querySelector(".to-top");
  if (button) {
    window.addEventListener("scroll", function () {
      button.classList.toggle("show", window.scrollY > 600);
    });
    button.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // 3. Footer year.
  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
})();
