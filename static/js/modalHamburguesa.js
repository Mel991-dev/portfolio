// ============================================
// MENÚ HAMBURGUESA - OPTIMIZADO
// ============================================

class MenuHamburguesa {
  constructor() {
    this.header = document.querySelector('.cabecera');
    this.nav = document.querySelector('.secciones');
    this.menuToggle = null;
    this.overlay = null;
    this.isOpen = false;
    
    this.init();
  }

  init() {
    this.createMenuToggle();
    this.createOverlay();
    this.attachEventListeners();
  }

  createMenuToggle() {
    // Crear botón hamburguesa
    this.menuToggle = document.createElement('button');
    this.menuToggle.className = 'menu-toggle';
    this.menuToggle.setAttribute('aria-label', 'Menú de navegación');
    this.menuToggle.setAttribute('aria-expanded', 'false');
    this.menuToggle.innerHTML = `
      <span></span>
      <span></span>
      <span></span>
    `;
    
    // Insertar antes del nav
    this.header.insertBefore(this.menuToggle, this.nav);
  }

  createOverlay() {
    // Crear overlay
    this.overlay = document.createElement('div');
    this.overlay.className = 'menu-overlay';
    document.body.appendChild(this.overlay);
  }

  attachEventListeners() {
    // Toggle del menú
    this.menuToggle.addEventListener('click', () => this.toggleMenu());
    
    // Cerrar al hacer clic en el overlay
    this.overlay.addEventListener('click', () => this.closeMenu());
    
    // Cerrar al hacer clic en un enlace
    const menuLinks = this.nav.querySelectorAll('.seccion');
    menuLinks.forEach(link => {
      link.addEventListener('click', () => this.closeMenu());
    });
    
    // Cerrar con tecla ESC
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isOpen) {
        this.closeMenu();
      }
    });
    
    // Manejar cambios de tamaño de ventana
    window.addEventListener('resize', () => this.handleResize());
  }

  toggleMenu() {
    this.isOpen ? this.closeMenu() : this.openMenu();
  }

  openMenu() {
    this.isOpen = true;
    this.menuToggle.classList.add('active');
    this.nav.classList.add('active');
    this.overlay.classList.add('active');
    document.body.classList.add('menu-open');
    this.menuToggle.setAttribute('aria-expanded', 'true');
  }

  closeMenu() {
    this.isOpen = false;
    this.menuToggle.classList.remove('active');
    this.nav.classList.remove('active');
    this.overlay.classList.remove('active');
    document.body.classList.remove('menu-open');
    this.menuToggle.setAttribute('aria-expanded', 'false');
  }

  handleResize() {
    // Cerrar menú si la ventana se hace más grande que el breakpoint
    if (window.innerWidth > 767 && this.isOpen) {
      this.closeMenu();
    }
  }
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
  new MenuHamburguesa();
});

// ============================================
// SMOOTH SCROLL PARA ANCLAS
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('a[href^="#"]');
  
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      
      // Solo aplicar si no es solo '#'
      if (href !== '#' && href !== '') {
        e.preventDefault();
        const target = document.querySelector(href);
        
        if (target) {
          const headerHeight = document.querySelector('.cabecera').offsetHeight;
          const targetPosition = target.offsetTop - headerHeight - 20;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });
});

// ============================================
// OPTIMIZACIÓN DE RENDIMIENTO
// ============================================

// Debounce para eventos de resize
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Lazy loading para imágenes
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
          observer.unobserve(img);
        }
      }
    });
  });

  // Observar imágenes con data-src
  document.addEventListener('DOMContentLoaded', () => {
    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(img => imageObserver.observe(img));
  });
}