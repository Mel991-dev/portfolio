const experiencias = {
  1: {
    date: "15 octubre 2025",
    title: "Prueba de resistencia física",
    description:
    "En esta prueba se nos dio bastante bién a la mayoria, cuando recorrimos 10km dando vueltas a la pista. Siendo unas 20 en total, también hicimos test de nuestra velocidad maxima llegando hasta cierto punto. En resumen, la pasamos bien realizando todos estos ejercicios con nuestro instructor Jose Jaiber.",
    image: 
    "/media/img/experiencias/15octubre.jpeg",
  },
  2: {
    date: "10 octubre 2025",
    title: "Foto casual de nuestro querido SENA",
    description:
      "Nos reunimos como grupo despues del cierre por paro nacional y nos fuimos a nuestros hogares. Foto tomada por nuestro instructor Oscar Castro Mopán.",
    image: "/media/img/experiencias/10octubre.jpeg",
  },
  3: {
    date: "21 agosto 2025",
    title: "Haciendo flores decorativas para evento",
    description:
      "Estuvimos haciendo entre todos flores de papeles de colores utilizando tecnicas de origami mientras que otros compañeros se encargaban de hacer el arte ilustrativo como carteleras, logotipos, diseños, etc.",
    image: "/media/img/experiencias/21agostoo.jpeg",
  },
  4: {
    date: "21 agosto 2025",
    title: "Posando para la foto después de tanto trabajo",
    description:
      "Foto para el recuerdo de aquellos dias en el que trabajamos como un equipo para poder ofrecer lo mejor posible a la institución a la que pertenecemos. En esta fotografía mostramos nuestro amor y dedicación por el tecnologo y todo lo que el SENA representa.",
    image: "/media/img/experiencias/21agosto.jpeg",
  },
  5: {
    date: "Noviembre 2024",
    title: "Certificación en Cloud Computing",
    description:
      "Completar la certificación en Cloud Computing fue un hito importante en mi desarrollo profesional. El curso abarcó conceptos fundamentales de servicios en la nube, arquitecturas cloud-native, contenedorización con Docker, orquestación con Kubernetes, y despliegue continuo. Aprendimos a trabajar con servicios de AWS, incluyendo EC2, S3, RDS, Lambda y muchos más. Realizamos proyectos prácticos donde desplegamos aplicaciones completas en la nube, configuramos balanceadores de carga, implementamos auto-escalado y monitoreamos el rendimiento de nuestras aplicaciones. La parte más desafiante pero gratificante fue el proyecto final: diseñar y desplegar una arquitectura de microservicios escalable y resiliente. Durante el proceso, aprendí sobre infraestructura como código con Terraform, pipelines CI/CD con GitHub Actions, y mejores prácticas de seguridad en la nube. Obtener esta certificación no solo amplió mis conocimientos técnicos, sino que también me preparó para las demandas actuales del mercado laboral donde el cloud computing es esencial.",
    image: "/media/img/experiencias/12julio.jpeg",
  },

  5: {
    date: "21 agosto 2025",
    title: "Siendo premiados por ganar el torneo",
    description: 
    "Al dia siguiente de haber ganado el torneo de Voleibol, fuimos recompensados con unos termos de calidad innegable y una toallita personal dentro de este. Para incentivarnos a ser competitivos y siempre buscar ganar.",
    image: "/media/img/experiencias/12julio.jpeg",
  },

  6: {
    date: "11 julio 2024",
    title: "Final del torneo de Voleiból",
    description: 
    "Durante la final del torneo, estuvimos muy parejos contra el equipo rival, la formación de Gestión Empresarial, pero al final logramos ganarles, y como recompensa en ese momento nos reunieron y nos dieron a cada uno unos trofeos transparentes con soporte de madera representando haber jugado limpio y respetar las reglas del juego.",
    image: "/media/img/experiencias/11julio.jpeg",
  },

  7: {
    date: "11 junio 2025",
    title: "Evaluación frontend a la antigua",
    description: 
    "Nuestro instructor Oscar Yanguas organizó una evaluación acerca de nuestros conocimientos en el Frontend. Utilizando marcadores solamente escribiamos el HTML y CSS para representar el mockup que teniamos en el tablero, luego con la ayuda de otro compañero, copiabamos el código tal cual en el tablero y ver si el maquetado coincide. Fue una buena forma de reafirmar conocimientos y demostró que la metodología de nuestro Instructor funciona.",
    image: "/media/img/experiencias/11junio.jpeg",
  },

  8: {
    date: "11 abril 2025",
    title: "Celebrando los cumpleaños de nuestros compañeros",
    description: 
    "Por cada 3 meses acordamos que debiamos celebrarle su cumpleaños a los que vayan a cumplir años dentro de esos 3 meses. Ahí fue cuando organizamos un compartir para nuestros compañeros: Luraine, Micke, Jhorman y Cristian.",
    image: "/media/img/experiencias/11abril.jpeg",
  },
};

function openModal(id) {
  const exp = experiencias[id];
  const modal = document.getElementById("modal");
  const header = document.getElementById("headerId");

  document.getElementById("modal-img").src = exp.image;
  document.getElementById("modal-date").textContent = exp.date;
  document.getElementById("modal-title").textContent = exp.title;
  document.getElementById("modal-description").textContent = exp.description;

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
  header.style.position = "static";
}

function closeModal() {
  const modal = document.getElementById("modal");
  const header = document.getElementById("headerId");
  modal.classList.remove("active");
  document.body.style.overflow = "auto";
  header.style.position = "fixed";
}

// Cerrar modal al hacer clic fuera del contenido
document.getElementById("modal").addEventListener("click", function (e) {
  if (e.target === this) {
    closeModal();
  }
});

// Cerrar modal con tecla ESC
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeModal();
  }
});

// Animación de entrada al hacer scroll
const observerOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

document.querySelectorAll(".timeline-item").forEach((item) => {
  observer.observe(item);
});
