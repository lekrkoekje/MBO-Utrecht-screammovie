document.addEventListener("DOMContentLoaded", () => {
    // click functies
    document.body.addEventListener("click", function(e) {
        // de vergrotte afbeeling worden geselecteerd
        if (e.target.classList.contains("modal-img")) {
            const link = document.createElement("a");
            link.href = e.target.src;
            link.download = e.target.src.split("/").pop();
            link.click();
        }
    });
});