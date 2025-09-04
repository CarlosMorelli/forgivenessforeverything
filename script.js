// Função para mostrar a mensagem de amor
function showLoveMessage() {
    const welcomeSection = document.querySelector('.welcome-section');
    const loveMessageSection = document.getElementById('loveMessage');
    
    // Adiciona efeito de fade out na seção de boas-vindas
    welcomeSection.style.opacity = '0';
    welcomeSection.style.transform = 'translateY(-50px)';
    welcomeSection.style.transition = 'all 0.8s ease-in-out';
    
    setTimeout(() => {
        welcomeSection.style.display = 'none';
        loveMessageSection.style.display = 'flex';
        loveMessageSection.classList.add('fade-in');
        
        // Adiciona efeito de digitação na mensagem
        typeWriterEffect();
    }, 800);
}

// Função para mostrar as memórias
function showMemories() {
    const loveMessageSection = document.getElementById('loveMessage');
    const memoriesSection = document.getElementById('memories');
    
    loveMessageSection.style.opacity = '0';
    loveMessageSection.style.transform = 'translateY(-50px)';
    loveMessageSection.style.transition = 'all 0.8s ease-in-out';
    
    setTimeout(() => {
        loveMessageSection.style.display = 'none';
        memoriesSection.style.display = 'flex';
        memoriesSection.classList.add('fade-in');
        
        // Anima as fotos uma por uma
        animatePhotos();
    }, 800);
}

// Função para mostrar as razões
function showReasons() {
    const memoriesSection = document.getElementById('memories');
    const reasonsSection = document.getElementById('reasons');
    
    memoriesSection.style.opacity = '0';
    memoriesSection.style.transform = 'translateY(-50px)';
    memoriesSection.style.transition = 'all 0.8s ease-in-out';
    
    setTimeout(() => {
        memoriesSection.style.display = 'none';
        reasonsSection.style.display = 'flex';
        reasonsSection.classList.add('fade-in');
        
        // Anima os cartões de razões
        animateReasonCards();
    }, 800);
}

// Função para mostrar a mensagem final
function showFinalMessage() {
    const reasonsSection = document.getElementById('reasons');
    const finalSection = document.getElementById('finalMessage');
    
    reasonsSection.style.opacity = '0';
    reasonsSection.style.transform = 'translateY(-50px)';
    reasonsSection.style.transition = 'all 0.8s ease-in-out';
    
    setTimeout(() => {
        reasonsSection.style.display = 'none';
        finalSection.style.display = 'flex';
        finalSection.classList.add('fade-in');
        
        // Adiciona confetes de corações
        createHeartConfetti();
    }, 800);
}

// Função para reiniciar a jornada
function restartJourney() {
    const finalSection = document.getElementById('finalMessage');
    const welcomeSection = document.querySelector('.welcome-section');
    
    finalSection.style.opacity = '0';
    finalSection.style.transform = 'translateY(-50px)';
    finalSection.style.transition = 'all 0.8s ease-in-out';
    
    setTimeout(() => {
        finalSection.style.display = 'none';
        welcomeSection.style.display = 'flex';
        welcomeSection.style.opacity = '1';
        welcomeSection.style.transform = 'translateY(0)';
        welcomeSection.classList.add('fade-in');
        
        // Remove classes de animação das outras seções
        document.getElementById('loveMessage').classList.remove('fade-in');
        document.getElementById('memories').classList.remove('fade-in');
        document.getElementById('reasons').classList.remove('fade-in');
        finalSection.classList.remove('fade-in');
    }, 800);
}

// Efeito de digitação
function typeWriterEffect() {
    const textElements = document.querySelectorAll('.love-text p');
    let elementIndex = 0;
    
    function typeElement() {
        if (elementIndex < textElements.length) {
            const element = textElements[elementIndex];
            const text = element.textContent;
            element.textContent = '';
            element.style.opacity = '1';
            
            let charIndex = 0;
            const typeInterval = setInterval(() => {
                element.textContent += text[charIndex];
                charIndex++;
                
                if (charIndex === text.length) {
                    clearInterval(typeInterval);
                    elementIndex++;
                    setTimeout(typeElement, 500);
                }
            }, 50);
        }
    }
    
    // Esconde todos os parágrafos inicialmente
    textElements.forEach(p => p.style.opacity = '0');
    
    // Inicia o efeito após um pequeno delay
    setTimeout(typeElement, 1000);
}

// Anima as fotos
function animatePhotos() {
    const photoCards = document.querySelectorAll('.photo-card');
    
    photoCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.6s ease-out';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 300 + 500);
    });
}

// Anima os cartões de razões
function animateReasonCards() {
    const reasonCards = document.querySelectorAll('.reason-card');
    
    reasonCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'scale(0.8) translateY(30px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.5s ease-out';
            card.style.opacity = '1';
            card.style.transform = 'scale(1) translateY(0)';
        }, index * 200 + 500);
    });
}

// Cria confetes de corações
function createHeartConfetti() {
    const container = document.querySelector('.final-container');
    const hearts = ['❤️', '💕', '💖', '💗', '💝', '💘'];
    
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
            heart.style.position = 'fixed';
            heart.style.left = Math.random() * window.innerWidth + 'px';
            heart.style.top = '-50px';
            heart.style.fontSize = '2rem';
            heart.style.pointerEvents = 'none';
            heart.style.zIndex = '1000';
            heart.style.animation = 'confettiFall 3s linear forwards';
            
            document.body.appendChild(heart);
            
            setTimeout(() => {
                heart.remove();
            }, 3000);
        }, i * 100);
    }
}

// Adiciona CSS para animação de confetes
const style = document.createElement('style');
style.textContent = `
    @keyframes confettiFall {
        to {
            transform: translateY(${window.innerHeight + 100}px) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Adiciona efeitos de hover nos botões
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.enter-btn, .next-btn, .restart-btn');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Adiciona partículas de corações flutuantes no fundo
function createFloatingHearts() {
    const heartsContainer = document.querySelector('.hearts-animation');
    const hearts = ['❤️', '💕', '💖', '💗'];
    
    setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'floating-particle';
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
        heart.style.opacity = Math.random() * 0.5 + 0.3;
        heart.style.fontSize = (Math.random() * 1 + 0.5) + 'rem';
        
        heartsContainer.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 5000);
    }, 2000);
}

// Adiciona CSS para partículas flutuantes
const particleStyle = document.createElement('style');
particleStyle.textContent = `
    .floating-particle {
        position: absolute;
        animation: floatUp linear infinite;
        pointer-events: none;
    }
    
    @keyframes floatUp {
        from {
            transform: translateY(100vh) rotate(0deg);
        }
        to {
            transform: translateY(-100px) rotate(360deg);
        }
    }
`;
document.head.appendChild(particleStyle);

// Inicia as partículas flutuantes quando a página carrega
document.addEventListener('DOMContentLoaded', createFloatingHearts);

// Adiciona efeito de cursor de coração
document.addEventListener('mousemove', function(e) {
    if (Math.random() < 0.1) { // 10% de chance de criar um coração
        const heart = document.createElement('div');
        heart.textContent = '💖';
        heart.style.position = 'fixed';
        heart.style.left = e.clientX + 'px';
        heart.style.top = e.clientY + 'px';
        heart.style.pointerEvents = 'none';
        heart.style.fontSize = '1rem';
        heart.style.zIndex = '999';
        heart.style.animation = 'cursorHeart 1s ease-out forwards';
        
        document.body.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 1000);
    }
});

// CSS para animação do cursor
const cursorStyle = document.createElement('style');
cursorStyle.textContent = `
    @keyframes cursorHeart {
        0% {
            opacity: 1;
            transform: scale(1);
        }
        100% {
            opacity: 0;
            transform: scale(0.5) translateY(-30px);
        }
    }
`;
document.head.appendChild(cursorStyle);

