const numbers = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
const suits = ['♦', '♥', '♠', '♣'];

const getNumber = () => {
    return numbers[Math.floor(Math.random() * numbers.length)]
};

const getSuit = () => {
    return suits[Math.floor(Math.random() * suits.length)]
};

const cardNumber = document.querySelector('#number');
const cardSuits = document.querySelectorAll('.suit');

const setCard = () => {
    let selectedSuit = getSuit();
    let color = (selectedSuit === '♥' || selectedSuit === '♦') ? 'red' : 'black';

    cardSuits.forEach((suit) => {
        suit.innerHTML = selectedSuit;
        suit.style.color = color;
    });
    cardNumber.innerHTML = getNumber();
    cardNumber.style.color = color;
}

const button = document.querySelector('#button')
button.addEventListener('click', setCard)