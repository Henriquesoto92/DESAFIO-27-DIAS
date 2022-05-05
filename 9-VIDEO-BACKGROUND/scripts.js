//video 

const btn = document.querySelector(".switch-btn");
const video = document.querySelector(".video-container");

btn.addEventListener("click", function () {
    if (!btn.classList.contains("slide")) {
        btn.classList.add("slide");
        video.pause();
    } else {
        btn.classList.remove("slide");
        video.play();
    }
});

// loading

const preloader = document.querySelector(".preloader")

window.addEventListener("load", function () {
    preloader.classList.add("hide-preloader");
});

//interação com o texto
const text = [
    {
        id: "1",
        title: "rode o scroll",

    },
    {
        id: "2",
        title: "para ver",

    },
    {
        id: "3",
        title: "essa bela",

    },
    {
        id: "4",
        title: "interação",

    },
    {
        id: "5",
        title: "Obrigado",

    }
]

const interaction = document.querySelector(".interaction")


