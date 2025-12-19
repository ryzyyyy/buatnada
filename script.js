// Efek hati jatuh romantis
const colors = ['#ffb6c1', '#ff69b4', '#ff1493', '#db7093', '#e75480'];
function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'falling-heart';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (2 + Math.random() * 3) + 's';
    heart.style.color = colors[Math.floor(Math.random() * colors.length)];
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
}
setInterval(createHeart, 400);
