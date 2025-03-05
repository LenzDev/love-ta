document.addEventListener("DOMContentLoaded", function () {
    let audio = document.getElementById("background-audio");
    let button = document.getElementById("toggle-audio");

    button.addEventListener("click", function () {
        if (audio.paused) {
            audio.play();
            button.textContent = "⏸ Pause";
        } else {
            audio.pause();
            button.textContent = "▶ Play";
        }
    });
});
