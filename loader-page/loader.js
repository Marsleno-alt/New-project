window.addEventListener("load", () => {

    const loader = document.getElementById("preloader");

    setTimeout(() => {

        loader.classList.add("preloader-hide");

        setTimeout(() => {
            loader.remove();
        }, 600);

    }, 1500);

});