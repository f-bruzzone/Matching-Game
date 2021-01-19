const grid = document.querySelector('.grid');
const matches = document.getElementById('matches');
const text = document.getElementById('text');

const imgArray = [
    {
        name: 'hotdog',
        image: 'src/images/hotdog.png'
    },
    {
        name: 'cheeseburger',
        image: 'src/images/cheeseburger.png'
    },
    {
        name: 'fries',
        image: 'src/images/fries.png'
    },
    {
        name: 'ice cream',
        image: 'src/images/ice-cream.png'
    },
    {
        name: 'milkshake',
        image: 'src/images/milkshake.png'
    },
    {
        name: 'pizza',
        image: 'src/images/pizza.png'
    },
    {
        name: 'hotdog',
        image: 'src/images/hotdog.png'
    },
    {
        name: 'cheeseburger',
        image: 'src/images/cheeseburger.png'
    },
    {
        name: 'fries',
        image: 'src/images/fries.png'
    },
    {
        name: 'ice cream',
        image: 'src/images/ice-cream.png'
    },
    {
        name: 'milkshake',
        image: 'src/images/milkshake.png'
    },
    {
        name: 'pizza',
        image: 'src/images/pizza.png'
    }
]

imgArray.sort(() => 0.5 - Math.random());
console.log(imgArray);


let cardsChosen = [];
let cardsChosenIds = [];
let numMatches = 0;

const createBoard = function () {
    for (let i = 0; i < imgArray.length; i++) {
        const card = document.createElement('img');
        card.setAttribute('src', 'src/images/blank.png');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard);
        grid.appendChild(card);
    }
}

const flipCard = function () {
    let cardId = this.getAttribute('data-id');
    cardsChosen.push(imgArray[cardId].name);
    cardsChosenIds.push(cardId);
    this.setAttribute('src', imgArray[cardId].image);
    if (cardsChosen.length === 2) {
        setTimeout(checkMatch, 250);
    }
}

const checkMatch = function () {
    let cards = document.querySelectorAll('img');
    let firstCardId = cardsChosenIds[0], secondCardId = cardsChosenIds[1];
    let firstCard = cardsChosen[0], secondCard = cardsChosen[1];

    if (firstCardId === secondCardId) {
        alert('You have selected the same card.');
        cards[firstCardId].setAttribute('src', 'src/images/blank.png');
        cards[secondCardId].setAttribute('src', 'src/images/blank.png');
    } else if (firstCard === secondCard) {
        alert('Congratulations! You\'ve got a match!');
        cards[firstCardId].setAttribute('src', 'src/images/white.png');
        cards[secondCardId].setAttribute('src', 'src/images/white.png');
        numMatches++;
        matches.innerHTML = `${numMatches}`;
        if (numMatches === 6) {
            text.innerHTML = 'Congratulations! You\'ve matched all of the cards!';
        }
    } else {
        alert('Sorry! That is not a match.');
        cards[firstCardId].setAttribute('src', 'src/images/blank.png');
        cards[secondCardId].setAttribute('src', 'src/images/blank.png');
    }
    cardsChosen = [];
    cardsChosenIds = [];
}

createBoard();


