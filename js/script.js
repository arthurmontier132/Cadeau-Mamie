
const btnAudio = document.querySelectorAll(".message");
let audioActuel = null

btnAudio.forEach(x => {
    x.classList.add("btn-audio");
    
    x.addEventListener("click", function() {
        const idAudio = x.dataset.audio;
        if (!idAudio) return

        const audio = document.getElementById(idAudio);
        if (!audio) return

        if (audioActuel && audioActuel !== audio) {
            audioActuel.pause();
            audioActuel.currentTime = 0;
        }

        if (audio.paused) {
            audio.play();
            audioActuel = audio;
        } else {
            audio.pause();
        }
    })
});

