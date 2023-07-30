(function () {
    const letters = "ABcdefghijklmnopqrstuvwxyz";

    let interval = null;


    document.querySelector(".nam").onmouseover = (event) => {
        let iteration = 0;

        clearInterval(interval);

        interval = setInterval(() => {
            event.target.innerText = event.target.innerText
                .split("")
                .map((_letter, index) => {
                    if (index < iteration) {
                        return event.target.dataset.value[index];
                    }

                    return letters[Math.floor(Math.random() * 26)];
                })
                .join("");

            if (iteration >= event.target.dataset.value.length) {
                clearInterval(interval);
            }

            iteration += 1 / 3;
        }, 26);
    };




    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function () {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    const themes = ["root", "light-mode2", "dark-mode2", "light-mode"];
    const themeButton = document.querySelector(".theme-btn");
    let currentThemeIndex = 0;
    let rot = 1;
    themeButton.addEventListener("click", () => {

        document.body.classList.remove(themes[currentThemeIndex]);
        currentThemeIndex++;

        if (currentThemeIndex >= themes.length) { currentThemeIndex = 0; }
        document.body.classList.add(themes[currentThemeIndex]);

        themeButton.style.transform = `rotate(${90 * rot++}deg)`;
    });


})();
