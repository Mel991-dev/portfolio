const experiencias = {
  1: {
    date: "Marzo 2024",
    title: "Hackathon de Desarrollo Web",
    description:
      "Participé en mi primer hackathon donde desarrollamos una aplicación web completa en solo 24 horas. Fue una experiencia increíble trabajar en equipo bajo presión y contra el reloj. Nuestro proyecto consistió en una plataforma de gestión de tareas colaborativas con funciones en tiempo real. Utilizamos tecnologías como React, Node.js, Socket.io y MongoDB. Aunque no ganamos el primer lugar, aprendimos muchísimo sobre trabajo en equipo, gestión del tiempo y toma de decisiones rápidas. Esta experiencia me enseñó que la programación va más allá del código: es sobre resolver problemas reales y trabajar eficientemente con otros desarrolladores. Sin duda, una de las experiencias más enriquecedoras de mi formación.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=400&fit=crop",
  },
  2: {
    date: "Mayo 2024",
    title: "Taller de Inteligencia Artificial",
    description:
      "Asistimos a un taller intensivo de tres días sobre Machine Learning y sus aplicaciones prácticas en el desarrollo de software moderno. Durante el taller, aprendimos sobre redes neuronales, procesamiento de lenguaje natural y visión por computadora. Realizamos varios proyectos prácticos, incluyendo un clasificador de imágenes y un chatbot básico. Los instructores eran profesionales de la industria con años de experiencia en IA. Lo más interesante fue ver cómo la inteligencia artificial está transformando todas las áreas del desarrollo de software y cómo podemos integrarla en nuestros propios proyectos. Esta experiencia abrió mi mente a las posibilidades futuras de la tecnología y me motivó a profundizar más en este campo fascinante.",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=400&fit=crop",
  },
  3: {
    date: "Julio 2024",
    title: "Proyecto Final de Módulo",
    description:
      "La presentación del proyecto final del módulo de desarrollo backend fue uno de los momentos más importantes de mi formación. Después de semanas de trabajo, presentamos una API REST completa con autenticación JWT, autorización por roles, y una arquitectura bien estructurada siguiendo el patrón MVC. Implementamos operaciones CRUD completas, validación de datos, manejo de errores robusto y documentación con Swagger. La base de datos fue diseñada cuidadosamente con MySQL, incluyendo relaciones complejas y optimizaciones de consultas. Durante la presentación, demostramos todas las funcionalidades usando Postman y respondimos preguntas técnicas del jurado. Recibimos excelentes comentarios sobre la calidad del código, la documentación y la implementación de buenas prácticas. Este proyecto consolidó todo lo aprendido durante el módulo y me dio confianza en mis habilidades como desarrollador backend.",
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=400&fit=crop",
  },
  4: {
    date: "Septiembre 2024",
    title: "Visita Técnica a Empresa de Software",
    description:
      "La visita a la empresa de desarrollo de software fue una experiencia reveladora que nos mostró el mundo real de la programación profesional. Recorrimos sus instalaciones modernas, conocimos sus áreas de desarrollo, testing, y reuniones de equipo. Nos explicaron cómo trabajan con metodologías ágiles como Scrum, sus ceremonias diarias, sprints y retrospectivas. Vimos en acción sus herramientas de colaboración como Jira, Confluence y GitLab. Lo más valioso fue conversar con desarrolladores de diferentes niveles de experiencia que compartieron sus historias, desafíos y consejos para quienes estamos iniciando en la industria. Nos hablaron sobre la importancia del aprendizaje continuo, la comunicación efectiva y el trabajo en equipo. También nos mostraron algunos de sus proyectos más interesantes y cómo resolvieron problemas técnicos complejos. Esta visita me ayudó a entender mejor qué esperar de mi carrera profesional y qué habilidades debo desarrollar para tener éxito en la industria del software.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=400&fit=crop",
  },
  5: {
    date: "Noviembre 2024",
    title: "Certificación en Cloud Computing",
    description:
      "Completar la certificación en Cloud Computing fue un hito importante en mi desarrollo profesional. El curso abarcó conceptos fundamentales de servicios en la nube, arquitecturas cloud-native, contenedorización con Docker, orquestación con Kubernetes, y despliegue continuo. Aprendimos a trabajar con servicios de AWS, incluyendo EC2, S3, RDS, Lambda y muchos más. Realizamos proyectos prácticos donde desplegamos aplicaciones completas en la nube, configuramos balanceadores de carga, implementamos auto-escalado y monitoreamos el rendimiento de nuestras aplicaciones. La parte más desafiante pero gratificante fue el proyecto final: diseñar y desplegar una arquitectura de microservicios escalable y resiliente. Durante el proceso, aprendí sobre infraestructura como código con Terraform, pipelines CI/CD con GitHub Actions, y mejores prácticas de seguridad en la nube. Obtener esta certificación no solo amplió mis conocimientos técnicos, sino que también me preparó para las demandas actuales del mercado laboral donde el cloud computing es esencial.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop",
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
