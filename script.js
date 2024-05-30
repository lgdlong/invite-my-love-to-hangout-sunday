function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');

    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.top = Math.random() * 100 + 'vh';
    heart.style.animationDuration = Math.random() * 2 + 3 + 's';

    document.querySelector('.hearts').appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 200);

document.getElementById('yes').addEventListener('click', () => {
    alert('Yay! Em rất mong chờ.');
});

document.getElementById('no').addEventListener('click', () => {
    alert('Oh, không sao. Hy vọng lần sau.');
});

const noButton = document.getElementById('no');
const choices = document.querySelector('.choices');

function swapButtons() {
    const yesButton = document.getElementById('yes');
    choices.insertBefore(noButton, yesButton);
}

noButton.addEventListener('mouseover', swapButtons);
noButton.addEventListener('click', swapButtons);
