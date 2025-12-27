// Toggle dark/light mode
const themeToggle = document.getElementById('themeToggle');
const icon = themeToggle.querySelector('i');
const body = document.body;

// Verificar preferencia guardada o preferencia del sistema
const savedTheme = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

// Aplicar tema inicial
if (savedTheme === 'light' || (!savedTheme && !prefersDark)) {
    body.classList.remove('dark-mode');
    body.classList.add('light-mode');
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
} else {
    body.classList.add('dark-mode');
    body.classList.remove('light-mode');
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');
    
    if (body.classList.contains('light-mode')) {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        localStorage.setItem('theme', 'light');
    } else {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        localStorage.setItem('theme', 'dark');
    }
});

// Script para el modal de certificaciones
const modal = document.getElementById('certModal');
const modalImg = document.getElementById('certImage');
const closeModal = document.querySelector('.close-modal');

// Mapeo de certificaciones a imágenes
const certData = {
    word: {
        img: 'word.png',
    },
    excel: {
        img: 'excel.png',
    },
    scrum: {
        img: 'scrum.png',
    },
    TI: {
        img: 'TI.png',
    },
    bachiller: {
        img: 'bachiller.jpg',
    },
    universidad: {
        img: 'universidad.jpg',
    }
};

// Manejar clics en certificaciones y diplomas
document.querySelectorAll('.cert-item, .view-diploma-btn').forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        const certId = this.getAttribute('data-cert');
        const cert = certData[certId];
        
        if (cert) {
            modal.style.display = 'block';
            modalImg.src = cert.img;
        }
    });
});

closeModal.addEventListener('click', function() {
    modal.style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});