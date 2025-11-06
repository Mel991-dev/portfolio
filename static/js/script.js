// Elementos del DOM
const themeToggleBtn = document.querySelector('.btn-theme');
const sunIcon = themeToggleBtn.querySelector('svg:first-child');
const moonIcon = themeToggleBtn.querySelector('svg:last-child');
const root = document.documentElement;
const paradiseFondo = document.querySelector('.paradise-fondo');
const oscurecer = document.querySelector('.oscurecer');

// Verificar el tema guardado en localStorage o usar el predeterminado
const currentTheme = localStorage.getItem('theme') || 'light';

// Función para aplicar el tema
function applyTheme(theme) {
    if (theme === 'dark') {
        // === INICIO: PALETA 1 (OSCURO) ===
        root.style.setProperty('--text-primary', '#22c55e');
        root.style.setProperty('--text-secondary', 'rgb(248, 243, 243)'); // Mantenido de tu original
        root.style.setProperty('--text-accent', '#10b981');
        root.style.setProperty('--background', '#111827');
        root.style.setProperty('--surface', '#1f2937');
        root.style.setProperty('--text', '#e5e7eb');
        root.style.setProperty('--text-muted', '#9ca3af');
        root.style.setProperty('--border', '#374151');
        
        // Sombras para tema oscuro (mantenidas de tu original)
        root.style.setProperty('--shadow-sm', '0 1px 2px rgba(0, 0, 0, 0.4)');
        root.style.setProperty('--shadow-md', '0 4px 6px rgba(0, 0, 0, 0.5)');
        root.style.setProperty('--shadow-lg', '0 10px 15px rgba(0, 0, 0, 0.6)');
        root.style.setProperty('--shadow-xl', '0 20px 25px rgba(0, 0, 0, 0.7)');
        // === FIN: PALETA 1 (OSCURO) ===
        
        // Cambiar imagen de fondo a oscura
        if (paradiseFondo) {
            paradiseFondo.style.backgroundImage = "url('/media/img/fondo_paradise_dark.jpg')";
        }
        
        // Cambiar el color del oscurecedor a oscuro
        if (oscurecer) {
            oscurecer.style.backgroundColor = 'rgba(10, 10, 10, 0.7)';
        }
        
        // Cambiar iconos
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'block';
        
        // Cambiar fondo del botón (para coincidir con --surface)
        themeToggleBtn.style.backgroundColor = '#1f2937'; 
        
        // Agregar clase al body
        document.body.classList.add('dark-theme');
        document.body.classList.remove('light-theme');
    } else {
        // === INICIO: PALETA 1 (CLARO) ===
        root.style.setProperty('--text-primary', '#16a34a');
        root.style.setProperty('--text-secondary', '#3d3d3d');
        root.style.setProperty('--text-accent', '#10b981');
        root.style.setProperty('--background', '#f9f9f9');
        root.style.setProperty('--surface', '#ffffff');
        root.style.setProperty('--text', '#1f2937');
        root.style.setProperty('--text-muted', '#6b7280');
        root.style.setProperty('--border', '#e5e7eb');
        
        // Sombras para tema claro (mantenidas de tu original)
        root.style.setProperty('--shadow-sm', '0 1px 2px rgba(15, 23, 42, 0.08)');
        root.style.setProperty('--shadow-md', '0 4px 6px rgba(15, 23, 42, 0.12)');
        root.style.setProperty('--shadow-lg', '0 10px 15px rgba(15, 23, 42, 0.16)');
        root.style.setProperty('--shadow-xl', '0 20px 25px rgba(15, 23, 42, 0.2)');
        // === FIN: PALETA 1 (CLARO) ===

        // Cambiar imagen de fondo a clara
        if (paradiseFondo) {
            paradiseFondo.style.backgroundImage = "url('/media/img/fondo_paradise_white.jpg')";
        }
        
        // Cambiar el color del oscurecedor a claro
        if (oscurecer) {
            oscurecer.style.backgroundColor = 'rgba(216, 216, 216, 0.534)';
        }
        
        // Cambiar iconos
        sunIcon.style.display = 'block';
        moonIcon.style.display = 'none';
        
        // Cambiar fondo del botón (para coincidir con --surface)
        themeToggleBtn.style.backgroundColor = '#ffffff'; 
        
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