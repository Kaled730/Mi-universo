const loader = document.getElementById('loader');

if(loader){

    function createHeart(){

        const heart = document.createElement('div');

        heart.classList.add('heart');

        heart.style.left = Math.random() * 100 + 'vw';

        heart.style.width = 15 + Math.random() * 20 + 'px';
        heart.style.height = heart.style.width;

        heart.style.position = 'absolute';
        heart.style.background = '#ff4fa3';
        heart.style.transform = 'rotate(45deg)';
        heart.style.animation = 'float 5s linear infinite';

        loader.appendChild(heart);

        const before = document.createElement('div');
        const after = document.createElement('div');

        before.style.position = after.style.position = 'absolute';

        before.style.width = after.style.width = '100%';
        before.style.height = after.style.height = '100%';

        before.style.background = after.style.background = '#ff4fa3';

        before.style.borderRadius = after.style.borderRadius = '50%';

        before.style.top = '-50%';
        after.style.left = '-50%';

        heart.appendChild(before);
        heart.appendChild(after);

        setTimeout(()=>{
            heart.remove();
        },5000);

    }
    const interval = setInterval(createHeart,150);

    setTimeout(()=>{

        loader.style.opacity = '0';
        loader.style.transition = '1s';

        setTimeout(()=>{
            loader.style.display = 'none';
            clearInterval(interval);
        },1000);

    },3500);

}

// FRASES

const phrases = [
    'Contigo todo se siente más bonito ♥',
    'Eres mi lugar favorito.',
    'Quiero más recuerdos contigo.',
    'Tu sonrisa ilumina todo.',
    'Las estrellas no brillan tanto como tú.'
];

const randomPhrase = document.getElementById('randomPhrase');

if(randomPhrase){

    let random = Math.floor(Math.random() * phrases.length);

    randomPhrase.innerHTML = phrases[random];

}

// MENU HAMBURGUESA

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

if(hamburger){

    hamburger.addEventListener('click',()=>{

        navLinks.classList.toggle('active');

    });

}
const cards = document.querySelectorAll('.card,.song-card,.memory-card,.timeline-content,img');

const observer = new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0px)';

        }

    });

},{threshold:0.2});

cards.forEach(card=>{

    card.style.opacity = '0';
    card.style.transform = 'translateY(40px)';
    card.style.transition = '0.8s';

    observer.observe(card);

});

// CORAZONES CLICK

window.addEventListener('click',(e)=>{

    const heart = document.createElement('div');

    heart.innerHTML = '♥';

    heart.style.position = 'fixed';
    heart.style.left = e.clientX + 'px';
    heart.style.top = e.clientY + 'px';
    heart.style.color = '#ff7dc2';
    heart.style.fontSize = '25px';
    heart.style.pointerEvents = 'none';
    heart.style.animation = 'fadeUp 1s forwards';

    document.body.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },1000);

});
const style = document.createElement('style');

style.innerHTML = `

@keyframes fadeUp{

    0%{
        opacity:1;
        transform:translateY(0);
    }

    100%{
        opacity:0;
        transform:translateY(-80px);
    }

}

@keyframes float{

    0%{
        transform:translateY(100vh) rotate(45deg);
        opacity:0;
    }

    100%{
        transform:translateY(-120vh) rotate(45deg);
        opacity:1;
    }

}

`;


document.head.appendChild(style);

const music = document.getElementById("bgMusic");

function startMusic(){

    music.play();

    document.removeEventListener("click", startMusic);

}

document.addEventListener("click", startMusic);