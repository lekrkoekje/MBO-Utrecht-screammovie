document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", function (e) {
        const wrapper = e.target.closest(".image-wrapper");
        if (!wrapper) return;

        const img = wrapper.querySelector(".modal-img");
        if (!img) return;

        const link = document.createElement("a");
        link.href = img.src;
        link.download = img.src.split("/").pop();
        link.click();
    });
});