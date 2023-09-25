document.addEventListener("DOMContentLoaded", function () {
    const showMoreButton = document.getElementById("show-more-button");
    const hobbiesGrid = document.getElementById("hobbies-grid");

    // Initially hide the hobbies grid
    hobbiesGrid.style.display = "none";

    showMoreButton.addEventListener("click", function () {
        if (hobbiesGrid.style.display === "none") {
            hobbiesGrid.style.display = "grid";
            showMoreButton.textContent = "Show Less";
        } else {
            hobbiesGrid.style.display = "none";
            showMoreButton.textContent = "Show More";
        }
    });
});
