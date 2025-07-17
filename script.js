const ramos = [
  // SEMESTRE 1
  { id: "bio1", nombre: "Fund. Biológicos", creditos: 6, semestre: 1 },
  { id: "soc1", nombre: "Fund. Socioculturales", creditos: 6, semestre: 1 },
  { id: "hab1", nombre: "Habilidades Pers.", creditos: 4, semestre: 1 },
  { id: "hist1", nombre: "Historia Psicología", creditos: 6, semestre: 1 },
  { id: "estad1", nombre: "Fund. Estadísticos", creditos: 4, semestre: 1 },
  { id: "herr1", nombre: "Herr. de Apoyo", creditos: 4, semestre: 1 },

  // SEMESTRE 2
  { id: "proc1", nombre: "Proc. Psicológicos I", creditos: 6, semestre: 2, prereq: ["bio1"] },
  { id: "social1", nombre: "Psicología Social I", creditos: 6, semestre: 2, prereq: ["soc1"] },
  { id: "evo1", nombre: "Psicología Evolutiva I", creditos: 5, semestre: 2, prereq: ["hab1"] },
  { id: "enf1", nombre: "Enfoques Psic. I", creditos: 5, semestre: 2, prereq: ["hist1"] },
  { id: "met1", nombre: "Metodología I", creditos: 4, semestre: 2, prereq: ["estad1"] },
  { id: "ing1", nombre: "Inglés I", creditos: 3, semestre: 2 },

  // SEMESTRE 3
  { id: "proc2", nombre: "Proc. Psicológicos II", creditos: 6, semestre: 3, prereq: ["proc1"] },
  { id: "social2", nombre: "Psicología Social II", creditos: 6, semestre: 3, prereq: ["social1"] },
  { id: "evo2", nombre: "Psicología Evolutiva II", creditos: 5, semestre: 3, prereq: ["evo1"] },
  { id: "enf2", nombre: "Enfoques Psic. II", creditos: 5, semestre: 3, prereq: ["enf1"] },
  { id: "met2", nombre: "Metodología II", creditos: 4, semestre: 3, prereq: ["met1"] },
  { id: "ing2", nombre: "Inglés II", creditos: 3, semestre: 3, prereq: ["ing1"] },

  // SEMESTRE 4
  { id: "neuro", nombre: "Neurociencias", creditos: 6, semestre: 4, prereq: ["proc2"] },
  { id: "aprendizaje", nombre: "Psicol. del Aprendizaje", creditos: 4, semestre: 4, prereq: ["proc2"] },
  { id: "evo3", nombre: "Psicología Evolutiva III", creditos: 5, semestre: 4, prereq: ["evo2"] },
  { id: "personalidad", nombre: "Personalidad", creditos: 5, semestre: 4, prereq: ["enf2"] },
  { id: "introfe", nombre: "Introducción a la Fe", creditos: 2, semestre: 4 },

  // SEMESTRE 5
  { id: "psicoeducacional", nombre: "Psicología Educacional", creditos: 5, semestre: 5, prereq: ["aprendizaje"] },
  { id: "salud", nombre: "Psicología de la Salud", creditos: 5, semestre: 5, prereq: ["evo3"] },
  { id: "teoria", nombre: "Teoría y Construcción", creditos: 5, semestre: 5, prereq: ["met2"] },
  { id: "educacional2", nombre: "Psicología Educacional II", creditos: 5, semestre: 5, prereq: ["psicoeducacional"] },
  { id: "juridica", nombre: "Psicología Jurídica", creditos: 5, semestre: 5, prereq: ["personalidad"] },
  { id: "etica", nombre: "Ética Cristiana", creditos: 2, semestre: 5 },

  // SEMESTRE 6
  { id: "clinica1", nombre: "Psicología Clínica I", creditos: 5, semestre: 6, prereq: ["salud"] },
  { id: "educacional3", nombre: "Psicología Educacional III", creditos: 5, semestre: 6, prereq: ["educacional2"] },
  { id: "organizacional", nombre: "Psicología Organizacional", creditos: 5, semestre: 6, prereq: ["juridica"] },
  { id: "tecnicas1", nombre: "Técnicas Evaluación I", creditos: 5, semestre: 6, prereq: ["teoria"] },
  { id: "intervencion1", nombre: "Taller Intervención I", creditos: 5, semestre: 6, prereq: ["juridica"] },
  { id: "cert1", nombre: "Certificación I", creditos: 2, semestre: 6 },

  // SEMESTRE 7
  { id: "clinica2", nombre: "Psicología Clínica II", creditos: 5, semestre: 7, prereq: ["clinica1"] },
  { id: "educacional4", nombre: "Taller de Intervención Educacional", creditos: 5, semestre: 7, prereq: ["educacional3"] },
  { id: "laboral", nombre: "Psicología Laboral", creditos: 5, semestre: 7, prereq: ["organizacional"] },
  { id: "tecnicas2", nombre: "Técnicas Evaluación II", creditos: 5, semestre: 7, prereq: ["tecnicas1"] },
  { id: "comunitario", nombre: "Taller Intervención SocioComunitaria", creditos: 5, semestre: 7, prereq: ["intervencion1"] },
  { id: "cert2", nombre: "Certificación II", creditos: 2, semestre: 7, prereq: ["cert1"] },

  // SEMESTRE 8
  { id: "intervencionclinica", nombre: "Taller de Intervención Clínica", creditos: 5, semestre: 8, prereq: ["clinica2"] },
  { id: "optativo1", nombre: "Optativo I", creditos: 4, semestre: 8 },
  { id: "intervencionorgan", nombre: "Taller Intervención Organizacional", creditos: 5, semestre: 8, prereq: ["laboral"] },
  { id: "seminario", nombre: "Seminario Investigación", creditos: 4, semestre: 8, prereq: ["tecnicas2"] },
  { id: "integrativo2", nombre: "Taller Integrativo II", creditos: 6, semestre: 8, prereq: ["comunitario"] },
  { id: "cert3", nombre: "Certificación III", creditos: 2, semestre: 8, prereq: ["cert2"] },

  // SEMESTRE 9
  { id: "practica1", nombre: "Práctica Profesional Inicial", creditos: 25, semestre: 9, prereq: ["intervencionclinica", "intervencionorgan", "integrativo2", "seminario"] },

  // SEMESTRE 10
  { id: "practica2", nombre: "Práctica Profesional Avanzada", creditos: 25, semestre: 10, prereq: ["practica1"] },
  { id: "optativo2", nombre: "Optativo II", creditos: 4, semestre: 10 },
  { id: "optativo3", nombre: "Optativo III", creditos: 4, semestre: 10 }
];

const mallaContainer = document.querySelector(".malla");
const semestres = {};

ramos.forEach(ramo => {
  if (!semestres[ramo.semestre]) {
    const box = document.createElement("div");
    box.className = "semestre";
    box.id = `semestre-${ramo.semestre}`;
    box.innerHTML = `<h2>Semestre ${ramo.semestre}</h2>
    <button onclick="aprobarSemestre(${ramo.semestre})" class="boton-aprobar">Aprobar semestre</button>`;
    mallaContainer.appendChild(box);
    semestres[ramo.semestre] = box;
  }

  const div = document.createElement("div");
  div.className = "ramo";
  div.id = ramo.id;
  div.textContent = `${ramo.nombre}\n(${ramo.creditos} créditos)`;

  if (ramo.prereq) div.classList.add("bloqueado");

  div.addEventListener("click", () => aprobarRamo(div, ramo));
  semestres[ramo.semestre].appendChild(div);
});

function aprobarRamo(element, ramo) {
  if (element.classList.contains("bloqueado")) return;

  element.classList.toggle("aprobado");

  ramos.forEach(r => {
    if (r.prereq && r.prereq.includes(ramo.id)) {
      const prereqCumplido = r.prereq.every(p => document.getElementById(p).classList.contains("aprobado"));
      const elem = document.getElementById(r.id);
      if (prereqCumplido) elem.classList.remove("bloqueado");
      else elem.classList.add("bloqueado");
    }
  });
}

function aprobarSemestre(nro) {
  const ramosSemestre = ramos.filter(r => r.semestre === nro);
  ramosSemestre.forEach(r => {
    const el = document.getElementById(r.id);
    if (!el.classList.contains("bloqueado")) {
      el.classList.add("aprobado");
      aprobarRamo(el, r);
    }
  });
}

