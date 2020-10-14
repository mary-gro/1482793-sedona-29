const searchLink = document.querySelector(".search-link");
const searchWindow = document.querySelector(".search-window");
const dateFrom = searchWindow.querySelector("[name=date-from]");
const dateTo = searchWindow.querySelector("[name=date-to]");
const quantityAdults = searchWindow.querySelector("[name=adults]");
const quantityChildren = searchWindow.querySelector("[name=children]");

function checkLocalStorage() {
  try {
    return "localStorage" in window && window["localStorage"] !== null;
  } catch(e) {
    return false;
  }
}

let isStorageSupport = checkLocalStorage();

dateFrom.focus();

if (localStorage.getItem("adults") !== null) {
  quantityAdults.value = localStorage.getItem("adults");
}

if (localStorage.getItem("children") !== null) {
  quantityChildren.value = localStorage.getItem("children");
}

searchLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  searchWindow.classList.toggle("search-window-show");
});

searchWindow.addEventListener("submit", function (evt) {
  if (!dateFrom.value || !dateTo.value || !quantityChildren.value || !quantityAdults.value) {
    evt.preventDefault();
    searchWindow.classList.remove("search-window-error");
    searchWindow.offsetWidth = searchWindow.offsetWidth;
    searchWindow.classList.add("search-window-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("adults", quantityAdults.value);
      localStorage.setItem("children", quantityChildren.value);
    }
  }
});
