document.addEventListener("DOMContentLoaded", function () {
    const showMoreButton = document.getElementById("show-more-button");
    const hobbiesGrid = document.getElementById("hobbies-grid");

    showMoreButton.addEventListener("click", function () {
        if (hobbiesGrid.classList.contains("hidden")) {
            hobbiesGrid.classList.remove("hidden");
            showMoreButton.textContent = "Show Less";
        } else {
            hobbiesGrid.classList.add("hidden");
            showMoreButton.textContent = "Show More";
        }
    });
});
