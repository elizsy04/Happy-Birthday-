function openSurprise() {

    const letter = document.getElementById("letter");

    letter.classList.remove("hidden");

    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
    });

    createHearts();

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
