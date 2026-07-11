// Fills in the current year in the footer.
// Feel free to add your own interactions below as you learn more JS.
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
