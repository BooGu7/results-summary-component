document.addEventListener("DOMContentLoaded", function () {
  fetch("data.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      const summaryTitle = "Summary";
      document.querySelector(".box-right h3").textContent = summaryTitle;
      const detailDiv = document.querySelector(".box-right .detail");
      data.forEach(function (item, index) {
        const taskDiv = document.createElement("div");
        taskDiv.className = `task task${index + 1}`;
        taskDiv.innerHTML = `
      <img class="icon type${index + 1}" src="${item.icon}" alt="type${index + 1}"/>
      <div class="content type${index + 1}">${item.category}</div>
      <div class="number-1">${item.score}</div>
      <div class="number-2">/ 100</div>
    `;
        detailDiv.appendChild(taskDiv);
      });
    });
});
