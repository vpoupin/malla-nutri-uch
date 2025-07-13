const ramos = [
  // 1er Semestre
  { id: "anatomia", nombre: "Anatomía", requisitos: [] },
  { id: "histologia", nombre: "Histología", requisitos: [] },
  { id: "biocel", nombre: "Biología Celular y Molecular", requisitos: [] },
  { id: "quimica_general", nombre: "Química General", requisitos: [] },
  { id: "matematicas", nombre: "Matemáticas", requisitos: [] },
  { id: "alimentos1", nombre: "Alimentos 1", requisitos: [] },
  { id: "intro_prof", nombre: "Introducción a la Profesión", requisitos: [] },

  // 2do Semestre
  { id: "busqueda", nombre: "Búsqueda y Sistematización de Información Científica", requisitos: [] },
  { id: "fisiologia_general", nombre: "Fisiología General", requisitos: ["biocel"] },
  { id: "agentes", nombre: "Agentes Vivos de Enfermedad", requisitos: ["biocel"] },
  { id: "quimica_organica", nombre: "Química Orgánica y Bioquímica General", requisitos: ["quimica_general", "matematicas"] },
  { id: "alimentos2", nombre: "Alimentos 2", requisitos: ["alimentos1"] },
  { id: "css", nombre: "Ciencias Sociales y Salud", requisitos: [] },

  // 3er Semestre
  { id: "fisiologia_sistemas", nombre: "Fisiología de Sistemas", requisitos: ["anatomia", "histologia", "fisiologia_general"] },
  { id: "bioquimica", nombre: "Bioquímica Nutricional", requisitos: ["quimica_organica"] },
  { id: "evaluacion", nombre: "Evaluación del Estado Nutricional", requisitos: ["fisiologia_general", "alimentos2"] },
  { id: "culinarias1", nombre: "Técnicas Culinarias I", requisitos: ["alimentos2"] },
  { id: "tecnologia", nombre: "Tecnología de los Alimentos", requisitos: ["alimentos2"] },
  { id: "epidemiologia", nombre: "Epidemiología y Bioestadística", requisitos: ["css"] },

  // 4to Semestre
  { id: "dietetica_infantil", nombre: "Dietética Infanto Juvenil", requisitos: ["fisiologia_sistemas", "bioquimica", "evaluacion"] },
  { id: "fundamentos", nombre: "Fundamentos de Alimentación", requisitos: ["bioquimica"] },
  { id: "genetica", nombre: "Genética y Nutrigenómica", requisitos: ["bioquimica"] },
  { id: "culinarias2", nombre: "Técnicas Culinarias II", requisitos: ["culinarias1"] },
  { id: "bromatologia", nombre: "Bromatología", requisitos: ["tecnologia"] },
  { id: "salud_publica", nombre: "Sistema de Salud Pública", requisitos: ["epidemiologia"] },
  { id: "educacion_conducta", nombre: "Educación, Conducta y Salud", requisitos: ["css"] },

  // 5to Semestre
  { id: "dietetica_adulto", nombre: "Dietética del Adulto y Adulto Mayor", requisitos: ["dietetica_infantil"] },
  { id: "inmunologia", nombre: "Inmunología", requisitos: ["genetica"] },
  { id: "planificacion_servicios", nombre: "Planificación en Servicios de Alimentación Colectiva", requisitos: ["culinarias2"] },
  { id: "higiene", nombre: "Higiene en la Producción de Alimentos", requisitos: ["agentes"] },
  { id: "cultura", nombre: "Cultura y Seguridad Alimentaria", requisitos: ["alimentos2", "css"] },
  { id: "comunicacion", nombre: "Comunicación y Educación en Alimentación y Nutrición", requisitos: ["educacion_conducta"] },
  { id: "gestion", nombre: "Gestión en Salud", requisitos: ["salud_publica"] },
  { id: "modulo1", nombre: "Módulo Integrado Interdisciplinario Multiprofesional I", requisitos: [] },

  // 6to Semestre
  { id: "dietoterapia1", nombre: "Dietoterapia I", requisitos: ["dietetica_adulto", "inmunologia"] },
  { id: "fisiopato1", nombre: "Fisiopatología y Farmacología I", requisitos: ["inmunologia"] },
  { id: "organizacion", nombre: "Organización en Servicios de Alimentación Colectiva", requisitos: ["planificacion_servicios"] },
  { id: "desarrollo", nombre: "Desarrollo Social y Comunitario", requisitos: ["cultura"] },
  { id: "planificacion_educativa", nombre: "Planificación de Programas Educativos", requisitos: ["dietetica_adulto", "comunicacion"] },
  { id: "metodologia", nombre: "Metodología de Investigación", requisitos: ["epidemiologia"] },

  // 7mo Semestre
  { id: "dietoterapia2", nombre: "Dietoterapia II", requisitos: ["dietoterapia1"] },
  { id: "fisiopato2", nombre: "Fisiopatología y Farmacología II", requisitos: ["fisiopato1"] },
  { id: "calidad", nombre: "Calidad e Inocuidad Alimentaria", requisitos: ["higiene"] },
  { id: "direccion", nombre: "Dirección de Servicios de Alimentación Colectiva", requisitos: ["organizacion"] },
  { id: "nutricion1", nombre: "Nutrición Comunitaria I", requisitos: ["desarrollo", "planificacion_educativa"] },
  { id: "diseno", nombre: "Diseño de Proyecto de Investigación", requisitos: ["metodologia"] },

  // 8vo Semestre
  { id: "ejercicio", nombre: "Ejercicio y Salud", requisitos: ["dietoterapia2"] },
  { id: "nutricion_clinica", nombre: "Nutrición Clínica", requisitos: ["dietoterapia2", "fisiopato2"] },
  { id: "seminario", nombre: "Seminario Alimentos y Nutrición", requisitos: ["dietoterapia2", "calidad"] },
  { id: "control", nombre: "Control de Servicios de Alimentación Colectiva", requisitos: ["direccion"] },
  { id: "nutricion2", nombre: "Nutrición Comunitaria II", requisitos: ["nutricion1"] },
  { id: "ejecucion", nombre: "Ejecución Proyecto de Investigación", requisitos: ["diseno"] },
  { id: "modulo2", nombre: "Módulo Integrado Interdisciplinario Multiprofesional II", requisitos: ["modulo1"] }
];

const mallaDiv = document.getElementById("malla");

const semestres = [
  "1er Semestre", "2do Semestre", "3er Semestre", "4to Semestre",
  "5to Semestre", "6to Semestre", "7mo Semestre", "8vo Semestre"
];

const ramosPorSemestre = {
  "1er Semestre": ["anatomia", "histologia", "biocel", "quimica_general", "matematicas", "alimentos1", "intro_prof"],
  "2do Semestre": ["busqueda", "fisiologia_general", "agentes", "quimica_organica", "alimentos2", "css"],
  "3er Semestre": ["fisiologia_sistemas", "bioquimica", "evaluacion", "culinarias1", "tecnologia", "epidemiologia"],
  "4to Semestre": ["dietetica_infantil", "fundamentos", "genetica", "culinarias2", "bromatologia", "salud_publica", "educacion_conducta"],
  "5to Semestre": ["dietetica_adulto", "inmunologia", "planificacion_servicios", "higiene", "cultura", "comunicacion", "gestion", "modulo1"],
  "6to Semestre": ["dietoterapia1", "fisiopato1", "organizacion", "desarrollo", "planificacion_educativa", "metodologia"],
  "7mo Semestre": ["dietoterapia2", "fisiopato2", "calidad", "direccion", "nutricion1", "diseno"],
  "8vo Semestre": ["ejercicio", "nutricion_clinica", "seminario", "control", "nutricion2", "ejecucion", "modulo2"]
};

for (const semestre of semestres) {
  const contenedor = document.createElement("div");
  contenedor.className = "semestre";
  const titulo = document.createElement("h2");
  titulo.textContent = semestre;
  contenedor.appendChild(titulo);

  ramosPorSemestre[semestre].forEach(id => {
    const ramo = ramos.find(r => r.id === id);
    const div = document.createElement("div");
    div.className = "ramo";
    div.textContent = ramo.nombre;
    div.id = ramo.id;
    div.onclick = () => aprobarRamo(ramo);
    contenedor.appendChild(div);
  });

  mallaDiv.appendChild(contenedor);
}

function aprobarRamo(ramo) {
  const div = document.getElementById(ramo.id);
  if (div.classList.contains("aprobado")) return;
  div.classList.add("aprobado");
  actualizarRamos();
}

function actualizarRamos() {
  ramos.forEach(ramo => {
    const div = document.getElementById(ramo.id);
    if (!div.classList.contains("aprobado")) {
      const requisitosCumplidos = ramo.requisitos.every(req =>
        document.getElementById(req)?.classList.contains("aprobado")
      );
      div.style.opacity = requisitosCumplidos ? 1 : 0.3;
      div.style.pointerEvents = requisitosCumplidos ? "auto" : "none";
    }
  });
}

actualizarRamos();
