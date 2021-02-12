const patropi = new PatropiGame(cards_es);
const chooseSpanish = document.getElementById('es');
const chooseEnglish = document.getElementById('en');


function selectLanguage(language) {
    if (language === 'es') {
        patropi.cards = cards_es;
    } else {
        patropi.cards = cards_en;
    }
}
const links = document.getElementsByTagName('a');

function showOptions() {
    const threeOptions = [];
    threeOptions.push(patropi.actualCard);

    const newcards = patropi.cards.filter(item => item.place != patropi.actualCard.place);

    for (let i = 0; i < 2; i++) {
        let idx = Math.floor(Math.random() * newcards.length);
        threeOptions.push(newcards[idx]);
        newcards.splice(idx + 1, 1);
    }

    if (threeOptions[0].state === threeOptions[1].state || threeOptions[0].state === threeOptions[2].state || threeOptions[1].state === threeOptions[2].state) {
        threeOptions.push({ place: 'some place', state: 'Amapá', img: './images/cristo_redentor.jpg', right_text: 'something' })
    }

    const links = document.getElementsByTagName('a');
    for (let i = 0; i < links.length; i++) {
        for (let j = 0; j < threeOptions.length; j++) {
            if (links[i].title === threeOptions[j].state) {
                links[i].style.display = 'inline';
                links[i].style.backgroundColor = 'black';
                links[i].style.border = 'grey 1px solid';
                links[i].style.boxShadow = "0px 0px 10px #fff";
            }
        }
    }
}

function deleteOptions() {
    const threeOptions = [];

}

function startGame() {

    document.getElementById('firstPage').style.display = 'none';
    document.getElementById('play-now').style.display = 'flex';

    const startButton = document.getElementById('start-button');
    startButton.innerHTML = patropi.cards === cards_es ? START_BUTTON[0] : START_BUTTON[1];
    // title.classList.add('title-up')

    const app_title = document.getElementById('welcome');
    app_title.innerHTML = patropi.cards === cards_es ? TITLE[0] : TITLE[1];

    const text_samba = document.getElementById('samba');
    text_samba.innerHTML = patropi.cards === cards_es ? TX_SAMBA[0] : TX_SAMBA[1];

    const findOut = document.getElementById('play');
    findOut.innerHTML = patropi.cards === cards_es ? FIND_OUT[0] : FIND_OUT[1];

    const howToPlay = document.getElementById('how');
    howToPlay.innerHTML = patropi.cards === cards_es ? HOW_TO_PLAY[0] : HOW_TO_PLAY[1];

    const rulesText = document.getElementsByTagName('li')
    rulesText[0].innerHTML = patropi.cards === cards_es ? RULES_0NE[0] : RULES_0NE[1];
    rulesText[1].innerHTML = patropi.cards === cards_es ? RULES_TWO[0] : RULES_TWO[1];
    rulesText[2].innerHTML = patropi.cards === cards_es ? RULES_THREE[0] : RULES_THREE[1];
    rulesText[3].innerHTML = patropi.cards === cards_es ? RULES_FOUR[0] : RULES_FOUR[1];
    rulesText[4].innerHTML = patropi.cards === cards_es ? RULES_FIVE[0] : RULES_FIVE[1];


    let enRound = document.getElementById('rounds');
    enRound.innerHTML = patropi.cards === cards_es ? ROUNDS[0] : ROUNDS[1];

    let enPoints = document.getElementById('points');
    enPoints.innerHTML = patropi.cards === cards_es ? POINTS[0] : POINTS[1];


    startButton.addEventListener('click', event => {
        document.getElementById('title').classList.add('title-up');
        patropi.shuffleArray();
        showOptions();
        console.log(patropi.cards)
        const theBoard = document.getElementById('board');
        theBoard.classList.add('column-board')
        function clickMap(e) {
            const map = document.getElementById('map').style.pointerEvents = 'none';
            const backText = document.getElementById('back-text');
            const links = document.getElementsByTagName('a');
            for (let i = 0; i < links.length; i++) {
                links[i].style.backgroundColor = "rgb(209, 209, 209)";
                links[i].style.display = 'none';
                links[i].style.border = 'grey 1px solid';
            }
            if (patropi.actualCard.state === e.target.title) {
                patropi.playRightSound();
                backText.innerHTML = patropi.actualCard.right_text;
                backText.classList.remove('font-wrong-answer')
                backText.classList.add('font-right-answer')

            } else {
                patropi.playWrongSound();
                if (patropi.cards === cards_es) {
                    const wrong = Math.floor(Math.random() * wrongAns_es.length);
                    backText.innerHTML = wrongAns_es[wrong];
                    backText.classList.remove('font-right-answer')
                    backText.classList.add('font-wrong-answer')
                } else {
                    const wrong = Math.floor(Math.random() * wrongAns_en.length);
                    backText.innerHTML = wrongAns_en[wrong];
                    backText.classList.remove('font-right-answer')
                    backText.classList.add('font-wrong-answer')
                }
            }

            const card = document.querySelector('#card-container');
            card.classList.add('is-flipped');

            patropi.upDate(e.target.title);

            const round = document.querySelector('#rounds span');
            round.innerHTML = patropi.rounds;
            const puntos = document.querySelector('#points span');
            puntos.innerHTML = patropi.points;


            if (patropi.gameOver()) {
                const nextPhotoButton = document.getElementById('next-button');
                nextPhotoButton.innerHTML = patropi.cards === cards_es ? END_GAME[0] : END_GAME[1];

                nextPhotoButton.addEventListener('click', event => {
                    const cardContainer = document.getElementById('card-container')
                    cardContainer.classList.add('is-flipped');
                    const map = document.getElementById('map').style.display = 'none';
                    const card = document.getElementById('cards');
                    card.classList.add('card-big-scren')
                    cardContainer.classList.add('card-container-big-screen')
                    const text = document.getElementById('back-text');
                    text.classList.remove('font-wrong-answer')
                    text.classList.remove('font-right-answer')

                    // card.style.marginTop = "70px";
                    // card.style.width = '100%'


                    nextPhotoButton.innerText = patropi.cards === cards_es ? TRY_AGAIN[0] : TRY_AGAIN[1];
                    const playMusic = document.getElementById('music');
                    playMusic.controls = true;

                    playMusic.play()

                    const tryAgainButton = document.getElementById('next-button');
                    tryAgainButton.addEventListener('click', event => {
                        window.location.reload()
                    })

                    const hideText = document.getElementsByClassName('textPhoto')
                    hideText[0].style.display = 'none';

                    const backText = document.getElementById('back-text');
                    if (patropi.cards === cards_es) {
                        if (patropi.points === 0) {
                            backText.innerHTML = ZERO_POINTS[0];
                        } else if (patropi.points > 0 && patropi.points < 4) {
                            backText.innerHTML = VERY_LOW_POINTS_ONE[0] + patropi.points + VERY_LOW_POINTS_TWO[0];
                        } else if (patropi.points > 3 && patropi.points < 7) {
                            backText.innerHTML = MIDDLE_POINTS_ONE[0] + patropi.points + MIDDLE_POINTS_TWO[0];
                        } else if (patropi.points > 6 && patropi.points < 10) {
                            backText.innerHTML = HIGH_POINTS_ONE[0] + patropi.points + HIGH_POINTS_TWO[0];
                        } else {
                            backText.innerHTML = TEN_POINTS_ONE[0] + patropi.points + TEN_POINTS_TWO[0];
                        }
                    } else {
                        if (patropi.points === 0) {
                            backText.innerHTML = ZERO_POINTS[1];
                        } else if (patropi.points > 0 && patropi.points < 4) {
                            backText.innerHTML = VERY_LOW_POINTS_ONE[1] + patropi.points + VERY_LOW_POINTS_TWO[1];
                        } else if (patropi.points > 3 && patropi.points < 7) {
                            backText.innerHTML = MIDDLE_POINTS_ONE[1] + patropi.points + MIDDLE_POINTS_TWO[1];
                        } else if (patropi.points > 6 && patropi.points < 10) {
                            backText.innerHTML = HIGH_POINTS_ONE[1] + patropi.points + HIGH_POINTS_TWO[1];
                        } else {
                            backText.innerHTML = TEN_POINTS_ONE[1] + patropi.points + TEN_POINTS_TWO[1];
                        }
                    }

                });
            }
        }

        const play = document.getElementById('play-now').style.display = 'none';

        map.style.display = 'flex';
        const posts = document.getElementById('cards').style.display = 'flex';
        const cardContainer = document.getElementById('card-container');
        const postCardFront = document.createElement('DIV');
        postCardFront.classList.add('front');
        postCardFront.classList.add('face');

        const photoName = document.createElement('DIV');
        photoName.classList.add('textPhoto');
        photoName.innerHTML = patropi.actualCard.place;
        postCardFront.appendChild(photoName);

        const postCardBack = document.createElement('DIV');
        postCardBack.classList.add('back');
        postCardBack.classList.add('face');

        backText = document.createElement('P');
        backText.classList.add('card-text');
        backText.id = 'back-text';
        postCardBack.appendChild(backText);

        cardContainer.appendChild(postCardFront);
        cardContainer.appendChild(postCardBack);


        const nextPhotoButton = document.createElement('BUTTON')
        nextPhotoButton.id = 'next-button';
        nextPhotoButton.innerHTML = patropi.cards === cards_es ? NEXT_QUESTION[0] : NEXT_QUESTION[1];
        postCardBack.appendChild(nextPhotoButton);

        nextPhotoButton.addEventListener('click', event => {
            showOptions();
            deleteOptions();
            map.style.pointerEvents = 'auto'
            const image = document.getElementById('frontPhoto');
            image.src = patropi.actualCard.img;

            var card = document.querySelector('#card-container');
            card.classList.remove('is-flipped');

            photoName.getElementsByClassName('textPhoto')
            photoName.innerHTML = patropi.actualCard.place;
        })

        const image = document.createElement('IMG');
        image.id = 'frontPhoto'
        image.src = patropi.actualCard.img;
        postCardFront.appendChild(image);

        const mapState = document.querySelectorAll('.states');


        for (let i = 0; i < mapState.length; i++) {
            mapState[i].onclick = clickMap;
        }
    });
}

chooseSpanish.addEventListener('click', event => {
    selectLanguage('es');
    startGame();
})

chooseEnglish.addEventListener('click', event => {
    selectLanguage('en');
    startGame();
})
