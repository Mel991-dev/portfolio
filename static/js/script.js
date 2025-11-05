// Elementos del DOM
const themeToggleBtn = document.querySelector('.btn-theme');
const sunIcon = themeToggleBtn.querySelector('svg:first-child');
const moonIcon = themeToggleBtn.querySelector('svg:last-child');
const root = document.documentElement;
const paradiseFondo = document.querySelector('.paradise-fondo');
const oscurecer = document.querySelector('.oscurecer'); // Corregido: querySelector en lugar de getElementsByClassName

// Verificar el tema guardado en localStorage o usar el predeterminado
const currentTheme = localStorage.getItem('theme') || 'light';

// Función para aplicar el tema
function applyTheme(theme) {
    if (theme === 'dark') {
        // Aplicar variables del tema oscuro
        root.style.setProperty('--text-primary', '#3b82f6');
        root.style.setProperty('--text-secondary', 'rgb(248, 243, 243)');
        root.style.setProperty('--text-accent', '#22d3ee');
        root.style.setProperty('--background', '#0a0a0a');
        root.style.setProperty('--surface', '#171717');
        root.style.setProperty('--text', '#f8fafc');
        root.style.setProperty('--text-muted', '#94a3b8');
        root.style.setProperty('--border', '#2d3748');
        
        // Sombras para tema oscuro
        root.style.setProperty('--shadow-sm', '0 1px 2px rgba(0, 0, 0, 0.4)');
        root.style.setProperty('--shadow-md', '0 4px 6px rgba(0, 0, 0, 0.5)');
        root.style.setProperty('--shadow-lg', '0 10px 15px rgba(0, 0, 0, 0.6)');
        root.style.setProperty('--shadow-xl', '0 20px 25px rgba(0, 0, 0, 0.7)');
        
        // Cambiar imagen de fondo a oscura
        if (paradiseFondo) {
            paradiseFondo.style.backgroundImage = "url('/media/img/fondo_paradise_dark.jpg')";
        }
        
        // Cambiar el color del oscurecedor a oscuro (más oscuro y transparente)
        if (oscurecer) {
            oscurecer.style.backgroundColor = 'rgba(10, 10, 10, 0.7)'; // Negro transparente
        }
        
        // Cambiar iconos
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'block';
        
        // Cambiar fondo del botón
        themeToggleBtn.style.backgroundColor = '#171717';
        
        // Agregar clase al body para estilos adicionales si es necesario
        document.body.classList.add('dark-theme');
        document.body.classList.remove('light-theme');
    } else {
        // Aplicar variables del tema claro (valores originales de globals.css)
        root.style.setProperty('--text-primary', '#0066ff');
        root.style.setProperty('--text-secondary', '#3d3d3d');
        root.style.setProperty('--text-accent', '#06b6d4');
        root.style.setProperty('--background', '#ebebebff');
        root.style.setProperty('--surface', '#ffffff');
        root.style.setProperty('--text', '#0f172a');
        root.style.setProperty('--text-muted', '#64748b');
        root.style.setProperty('--border', '#d1d7dfff');
        
        // Sombras para tema claro
        root.style.setProperty('--shadow-sm', '0 1px 2px rgba(15, 23, 42, 0.08)');
        root.style.setProperty('--shadow-md', '0 4px 6px rgba(15, 23, 42, 0.12)');
        root.style.setProperty('--shadow-lg', '0 10px 15px rgba(15, 23, 42, 0.16)');
        root.style.setProperty('--shadow-xl', '0 20px 25px rgba(15, 23, 42, 0.2)');

        // Cambiar imagen de fondo a clara
        if (paradiseFondo) {
            paradiseFondo.style.backgroundImage = "url('/media/img/fondo_paradise_white.jpg')";
        }
        
        // Cambiar el color del oscurecedor a claro (blanco transparente)
        if (oscurecer) {
            oscurecer.style.backgroundColor = 'rgba(216, 216, 216, 0.534)'; // Color original claro
        }
        
        // Cambiar iconos
        sunIcon.style.display = 'block';
        moonIcon.style.display = 'none';
        
        // Cambiar fondo del botón
        themeToggleBtn.style.backgroundColor = 'white';
        
        // Agregar clase al body
        document.body.classList.add('light-theme');
        document.body.classList.remove('dark-theme');
    }
    
    // Guardar el tema en localStorage
    localStorage.setItem('theme', theme);
}

// Función para alternar entre temas
function toggleTheme() {
    const currentTheme = localStorage.getItem('theme') || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    // Agregar animación de rotación al botón
    themeToggleBtn.style.transform = 'rotate(360deg)';
    
    // Agregar fade effect
    if (paradiseFondo) {
        paradiseFondo.style.opacity = '0.7';
    }
    if (oscurecer) {
        oscurecer.style.opacity = '0.7';
    }
    
    setTimeout(() => {
        applyTheme(newTheme);
        themeToggleBtn.style.transform = 'rotate(0deg)';
        
        // Restaurar opacidad
        if (paradiseFondo) {
            paradiseFondo.style.opacity = '1';
        }
        if (oscurecer) {
            oscurecer.style.opacity = '1';
        }
    }, 300);
}

// Event listener para el botón
themeToggleBtn.addEventListener('click', toggleTheme);

// Aplicar el tema guardado al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    applyTheme(currentTheme);
    
    // Inicializar el display de los iconos
    if (currentTheme === 'dark') {
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'block';
    } else {
        sunIcon.style.display = 'block';
        moonIcon.style.display = 'none';
    }
});

// Agregar transición suave a todos los elementos
document.body.style.transition = 'background-color 0.3s ease, color 0.3s ease';