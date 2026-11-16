document.addEventListener("DOMContentLoaded", () => {
  const footerYear = document.querySelector("footer small");

  if (footerYear) {
    footerYear.textContent =
      `© ${new Date().getFullYear()} CONNECTA. All rights reserved.`;
  }

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const target = document.querySelector(link.getAttribute("href"));

      if (target) {
        event.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});
