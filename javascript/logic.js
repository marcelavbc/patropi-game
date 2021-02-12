class PatropiGame {
    constructor(cards) {
        this.cards = cards;
        this.actualCard = [];
        this.index = 0;
        this.points = 0;
        this.rounds = 0;
    }

    shuffleArray() {
        for (let i = this.cards.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let x = this.cards[i];
            this.cards[i] = this.cards[j];
            this.cards[j] = x;
        }
        this.actualCard = this.cards[this.index];
    }

    upDate(state) {
        if (state === this.actualCard.state) {
            this.points++;
        }
        this.rounds++;
        this.index++;
        this.actualCard = this.cards[this.index];
    }

    gameOver() {
        if (this.rounds > 9) {
            return true;
        }
    }

    playWrongSound() {
        let sounds = ['./sounds/wrong/Ahh-sound-effect.mp3', './sounds/wrong/Uh-oh-sound-effect.mp3', './sounds/wrong/Nope-sound-effect.mp3', './sounds/wrong/Ouch-sound-effect.mp3', './sounds/wrong/what.mp3', './sounds/wrong/alerta-por-subnormal-graciosos-.mp3', './sounds/wrong/anybody_there.mp3', './sounds/wrong/bob_esponja.mp3', './sounds/wrong/correct-cbt-sound.mp3', './sounds/wrong/cristal.mp3', './sounds/wrong/fart2.mp3', './sounds/wrong/gritoahh 2346.mp3', './sounds/wrong/minions_risa.mp3', './sounds/wrong/nanana_burla.mp3', './sounds/wrong/oh-no.mp3', './sounds/wrong/QUE PENAAAQUE_PENA.mp3', './sounds/wrong/respuesta_incorrecta.mp3', './sounds/wrong/risas_cartoon.mp3', './sounds/wrong/surprise_motherf.mp3', './sounds/wrong/wa_wa_wa_wavavavava.mp3', './sounds/wrong/Wha Wha Wha WhaWha_Wha_Wha_Wha.mp3'];
        let randSound = sounds[Math.floor(Math.random() * sounds.length)];
        let mySounds = document.getElementById("sounds");
        mySounds.setAttribute('src', randSound);
        mySounds.play();
    }

    playRightSound() {
        let sounds = ['./sounds/right/Game-ending-sound-effect.mp3', './sounds/right/Quiz-correct-sound-with-applause.mp3', './sounds/right/Rimshot-sound.mp3', './sounds/right/Yeah-sound.mp3', './sounds/right/Collect-item-sound-effect.mp3', './sounds/right/applause3.mp3', './sounds/right/aleluya.mp3', './sounds/right/dragon-ball.mp3', './sounds/right/iuujuu_woohoo.mp3', './sounds/right/jojojo.mp3', './sounds/right/corr.mp3', './sounds/right/lalala.mp3', './sounds/right/Oleole.mp3', './sounds/right/Rupertinaahi dolor.mp3'];
        let randSound = sounds[Math.floor(Math.random() * sounds.length)];
        let mySounds = document.getElementById("sounds");
        mySounds.setAttribute('src', randSound)
        mySounds.play();
    }
}







