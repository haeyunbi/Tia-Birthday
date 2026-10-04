javascript
/* =========================
   VARIABLES
========================= */

const music = document.getElementById("bgMusic");

let musicPlaying = false;


/* =========================
   OPEN GIFT
========================= */

function openGift() {

    const opening = document.getElementById("opening");
    const birthday = document.getElementById("birthday");

    opening.style.animation = "appear 0.7s ease reverse";

    setTimeout(() => {

        opening.classList.add("hidden");

        birthday.classList.remove("hidden");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        startEffects();

        playMusic();

    }, 600);
}


/* =========================
   MUSIC
========================= */

function playMusic() {

    const music = document.getElementById("bgMusic");
    const button = document.getElementById("musicButton");

    music.volume = 0.2;

    music.play()
        .then(() => {

            musicPlaying = true;

            button.innerHTML = "🔊 Music On";

        })
        .catch((error) => {

            console.log("Music could not autoplay:", error);

            button.innerHTML = "🎵 Play Music";

        });
}


/* =========================
   FINAL MESSAGE
========================= */

function showFinalMessage() {

    const message = document.getElementById("finalMessage");

    message.classList.remove("hidden");

    createHeartBurst();

    message.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

}


/* =========================
   FLOATING HEARTS
========================= */

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("floating-heart");

    const hearts = [
        "💗",
        "💕",
        "💖",
        "💞",
        "🌸",
        "🎀",
        "☁️",
        "✨"
    ];

    heart.innerHTML =
        hearts[Math.floor(Math.random() * hearts.length)];

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.bottom =
        "-30px";

    heart.style.fontSize =
        (15 + Math.random() * 20) + "px";

    heart.style.animationDuration =
        (4 + Math.random() * 4) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 8000);

}


/* =========================
   HEART BURST
========================= */

function createHeartBurst() {

    for (let i = 0; i < 25; i++) {

        setTimeout(() => {

            const heart = document.createElement("div");

            heart.classList.add("floating-heart");

            heart.innerHTML = [
                "💗",
                "💕",
                "💖",
                "✨",
                "🌸"
            ][Math.floor(Math.random() * 5)];

            heart.style.left =
                (40 + Math.random() * 20) + "vw";

            heart.style.bottom =
                (25 + Math.random() * 20) + "vh";

            heart.style.fontSize =
                (15 + Math.random() * 25) + "px";

            heart.style.animationDuration =
                (2 + Math.random() * 2) + "s";

            document.body.appendChild(heart);

            setTimeout(() => {
                heart.remove();
            }, 5000);

        }, i * 80);

    }

}


/* =========================
   START EFFECTS
========================= */

function startEffects() {

    setInterval(() => {

        createHeart();

    }, 1000);

}


/* =========================
   STARTUP
========================= */

document.addEventListener("DOMContentLoaded", () => {

    console.log(
        "💗 A little birthday surprise for Tia 💗"
    );

});

