var counterContainer = document.querySelector(".website-counter");
var resetButton = document.querySelector("#reset");

var visitCount = localStorage.getItem("page_view");

visitCount = Number(visitCount) + 1;
localStorage.setItem("page_view", visitCount);

counterContainer.innerHTML = visitCount;

resetButton.addEventListener("click", () => {
  visitCount = 1;
  localStorage.setItem("page_view", 1);
  counterContainer.innerHTML = visitCount;
});