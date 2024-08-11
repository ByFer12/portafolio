window.addEventListener('scroll', () => {
    const skills = document.querySelectorAll('.progress');

    skills.forEach(skill => {
        const skillTop = skill.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (skillTop < windowHeight) {
            skill.style.width = skill.getAttribute('data-width');
        }
    });
});

// Script para las partículas
const canvas = document.getElementById('backgroundCanvas');
const ctx = canvas.getContext('2d');

let particlesArray;

// Ajustar el tamaño del canvas al tamaño de la ventana
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();
});
// JavaScript para animar las barras de progreso y actualizar los números
document.addEventListener('DOMContentLoaded', function() {
    const progressElements = document.querySelectorAll('.progress');

    progressElements.forEach(progress => {
        const targetWidth = progress.getAttribute('data-width');
        const span = document.createElement('span');
        span.textContent = '0%';
        progress.appendChild(span);

        // Animación de la barra de progreso
        let currentWidth = 0;
        const targetWidthNumber = parseInt(targetWidth, 10);
        const interval = setInterval(() => {
            if (currentWidth < targetWidthNumber) {
                currentWidth += 1;
                progress.style.width = `${currentWidth}%`;
                span.textContent = `${currentWidth}%`;
            } else {
                clearInterval(interval);
            }
        }, 50); // Ajusta la velocidad de la animación aquí
    });
});


// Crear las partículas
class Particle {
    constructor(x, y, directionX, directionY, size, color) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
    }

    // Dibuja la partícula en el canvas
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
    }

    // Revisa la posición de la partícula, mueve la partícula, y dibuja de nuevo
    update() {
        if (this.x > canvas.width || this.x < 0) {
            this.directionX = -this.directionX;
        }
        if (this.y > canvas.height || this.y < 0) {
            this.directionY = -this.directionY;
        }

        this.x += this.directionX;
        this.y += this.directionY;
        this.draw();
    }
}

// Crear array de partículas
function init() {
    particlesArray = [];
    let numberOfParticles = (canvas.height * canvas.width) / 9000;
    for (let i = 0; i < numberOfParticles; i++) {
        let size = (Math.random() * 5) + 1;
        let x = (Math.random() * ((canvas.width - size * 2) - (size * 2)) + size * 2);
        let y = (Math.random() * ((canvas.height - size * 2) - (size * 2)) + size * 2);
        let directionX = (Math.random() * 2) - 1.5;
        let directionY = (Math.random() * 2) - 1.5;
        let color = '#1abc9c';

        particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
    }
}

// Animar las partículas
function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
    }
}


//alterar oscuro y claro
// Alternar entre temas claro y oscuro
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    body.classList.toggle('light-theme');

    // Cambiar el icono del botón según el tema actual
    if (body.classList.contains('dark-theme')) {
        themeToggle.textContent = '☀️';
    } else {
        themeToggle.textContent = '🌙';
    }
});

// Establecer el tema predeterminado como oscuro
body.classList.add('dark-theme');
themeToggle.textContent = '☀️';



init();
animate();
