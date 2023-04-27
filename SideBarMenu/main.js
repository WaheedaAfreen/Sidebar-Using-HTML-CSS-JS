// document.querySelector(".sidebar")
//     .addEventListener("click", () => {
//         document.querySelector(".main")
//             .classList.toggle("active");
//     });


/* =============================================NEW*/

document.addEventListener("DOMContentLoaded", () => {
    const darkCodeElement = document.querySelector(".pic-text");
    darkCodeElement.style.display = "none";

    document.querySelector(".sidebar").addEventListener("click", () => {
        const mainElement = document.querySelector(".main");

        mainElement.classList.toggle("active");

        if (mainElement.classList.contains("active")) {
            darkCodeElement.style.display = "block";
        } else {
            darkCodeElement.style.display = "none";
        }
    });
});
