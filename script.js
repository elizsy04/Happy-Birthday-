function openSurprise() {

    const letter = document.getElementById("letter");

    const music = document.getElementById("birthdayMusic"); 
    music.play();

    letter.classList.remove("hidden");

    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
    });

    createHearts();
    createConfetti();

}


function createHearts(){

    for(let i = 0; i < 30; i++){

        let heart = document.createElement("div");

        heart.innerHTML = "❤️";

        heart.style.position = "fixed";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.top = "-20px";
        heart.style.fontSize = Math.random()*20 + 15 + "px";
        heart.style.animation = "heartFall 4s linear";

        document.body.appendChild(heart);


        setTimeout(()=>{
            heart.remove();
        },4000);

    }

}

function createConfetti(){

    for(let i = 0; i < 50; i++){

        let confetti = document.createElement("div");

        confetti.innerHTML = "🎊";

        confetti.style.position = "fixed";
        confetti.style.left = Math.random()*100 + "vw";
        confetti.style.top = "-20px";
        confetti.style.fontSize = "25px";

        confetti.style.animation =
        "heartFall 3s linear";

        document.body.appendChild(confetti);


        setTimeout(()=>{
            confetti.remove();
        },3000);

    }

}
