/* =========================================================
   SPLASH SCREEN
   ========================================================= */

const splash = document.getElementById("splash");
const startButton = document.getElementById("startButton");


startButton.addEventListener("click", () => {

    splash.classList.add("hide");

    setTimeout(() => {

        scrollToSection("profile");

    }, 400);

});



/* =========================================================
   NEXT SECTION BUTTONS
   ========================================================= */

const nextButtons =
    document.querySelectorAll(".next-button");


nextButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const target =
            button.dataset.target;

        scrollToSection(target);

    });

});



/* =========================================================
   SMOOTH SCROLL FUNCTION
   ========================================================= */

function scrollToSection(sectionId) {

    const section =
        document.getElementById(sectionId);


    if (!section) {
        return;
    }


    section.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}
