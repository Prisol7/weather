const searchButton = document.getElementById("search-button");
const searchForm = document.getElementById("search-form");

searchButton.addEventListener("click", () => {
  searchForm.classList.toggle("show");
});