
(function(){
const skills = [
  {
    "name": "Java",
    "category": "Desarrollo y tecnología",
    "icon": "java",
    "description": "Lenguaje de programación utilizado para desarrollar aplicaciones, estructurar lógica de negocio y organizar componentes reutilizables."
  },
  {
    "name": "JavaScript",
    "category": "Desarrollo y tecnología",
    "icon": "javascript",
    "description": "Permite crear interacciones, validar formularios y actualizar contenido dinámico para responder a las acciones de usuarios."
  },
  {
    "name": "HTML",
    "category": "Desarrollo y tecnología",
    "icon": "html",
    "description": "Estructura el contenido de páginas web mediante elementos semánticos que organizan textos, enlaces, formularios e imágenes."
  },
  {
    "name": "CSS",
    "category": "Desarrollo y tecnología",
    "icon": "css",
    "description": "Define estilos visuales, distribuciones y adaptaciones responsive para presentar interfaces claras en diferentes tamaños de pantalla."
  },
  {
    "name": "Spring Boot",
    "category": "Desarrollo y tecnología",
    "icon": "spring",
    "description": "Facilita la construcción de aplicaciones Java y servicios web mediante configuración simplificada y componentes integrados."
  },
  {
    "name": "Bootstrap",
    "category": "Desarrollo y tecnología",
    "icon": "bootstrap",
    "description": "Ofrece componentes y utilidades de estilos para construir interfaces responsive con estructuras visuales consistentes y reutilizables."
  },
  {
    "name": "PostgreSQL",
    "category": "Desarrollo y tecnología",
    "icon": "postgresql",
    "description": "Sistema de base de datos relacional que permite organizar, consultar y relacionar información mediante lenguaje SQL."
  },
  {
    "name": "Git",
    "category": "Desarrollo y tecnología",
    "icon": "git",
    "description": "Controla versiones de archivos y permite gestionar cambios, crear ramas y coordinar contribuciones durante el desarrollo."
  },
  {
    "name": "GitHub",
    "category": "Desarrollo y tecnología",
    "icon": "github",
    "description": "Plataforma para alojar repositorios Git, revisar cambios y organizar la colaboración y el seguimiento de tareas de desarrollo."
  },
  {
    "name": "Figma",
    "category": "Diseño y herramientas",
    "icon": "figma",
    "description": "Herramienta para diseñar interfaces, crear prototipos visuales y compartir propuestas que facilitan la revisión colaborativa de experiencias."
  },
  {
    "name": "Trello",
    "category": "Diseño y herramientas",
    "icon": "trello",
    "description": "Organiza actividades en tableros, listas y tarjetas para visualizar pendientes, responsables y avances de un proyecto."
  },
  {
    "name": "Scrum",
    "category": "Metodologías y gestión",
    "icon": "scrum",
    "description": "Marco de trabajo ágil que organiza actividades en iteraciones y promueve revisión, adaptación y colaboración del equipo."
  },
  {
    "name": "Gestión y coordinación de proyectos técnicos",
    "category": "Metodologías y gestión",
    "icon": "project-management",
    "description": "Articula tareas, recursos y comunicación para coordinar proyectos técnicos y mantener claridad sobre compromisos, dependencias y objetivos."
  },
  {
    "name": "Organización",
    "category": "Metodologías y gestión",
    "icon": "organization",
    "description": "Ordena información, documentos y actividades para facilitar su consulta, reducir confusiones y mantener procesos de trabajo claros."
  },
  {
    "name": "Planificación",
    "category": "Metodologías y gestión",
    "icon": "planning",
    "description": "Define actividades, prioridades y tiempos de ejecución para anticipar necesidades y orientar el avance hacia objetivos concretos."
  },
  {
    "name": "Seguimiento",
    "category": "Metodologías y gestión",
    "icon": "tracking",
    "description": "Revisa avances y compromisos de manera periódica para identificar desviaciones, actualizar información y facilitar decisiones oportunas."
  },
  {
    "name": "Cumplimiento de normativas",
    "category": "Metodologías y gestión",
    "icon": "compliance",
    "description": "Contrasta actividades y documentación con requisitos aplicables para promover procedimientos consistentes y atender obligaciones de cada contexto."
  },
  {
    "name": "Gestión de solicitudes e incidencias",
    "category": "Metodologías y gestión",
    "icon": "requests",
    "description": "Registra solicitudes e incidencias, organiza prioridades y facilita su seguimiento hasta comunicar una respuesta o solución pertinente."
  },
  {
    "name": "Análisis",
    "category": "Habilidades profesionales",
    "icon": "analysis",
    "description": "Examina información, identifica relaciones y descompone situaciones para comprender necesidades y sustentar decisiones con criterios claros."
  },
  {
    "name": "Resolución de problemas",
    "category": "Habilidades profesionales",
    "icon": "problem-solving",
    "description": "Identifica causas, evalúa alternativas y plantea acciones concretas para resolver dificultades y comprobar la utilidad de una solución."
  },
  {
    "name": "Trabajo en equipo",
    "category": "Habilidades profesionales",
    "icon": "teamwork",
    "description": "Coordina esfuerzos y responsabilidades con otras personas para alcanzar objetivos comunes y mantener una colaboración organizada."
  },
  {
    "name": "Colaboración",
    "category": "Habilidades profesionales",
    "icon": "collaboration",
    "description": "Comparte información, aporta ideas y construye acuerdos para desarrollar tareas conjuntas y facilitar el trabajo entre personas."
  },
  {
    "name": "Comunicación efectiva",
    "category": "Habilidades profesionales",
    "icon": "communication",
    "description": "Expresa ideas con claridad, escucha necesidades y adapta mensajes para facilitar acuerdos, comprensión y coordinación entre personas."
  },
  {
    "name": "Orientación a la calidad",
    "category": "Habilidades profesionales",
    "icon": "quality",
    "description": "Revisa criterios de aceptación y resultados para detectar oportunidades de mejora y favorecer entregables consistentes con las necesidades."
  },
  {
    "name": "Atención",
    "category": "Habilidades profesionales",
    "icon": "attention",
    "description": "Escucha y comprende necesidades para responder con claridad, identificar prioridades y ofrecer un trato respetuoso y oportuno."
  },
  {
    "name": "Soporte a usuarios",
    "category": "Habilidades profesionales",
    "icon": "user-support",
    "description": "Acompaña consultas y dificultades de uso, explica pasos comprensibles y orienta la resolución o escalamiento de incidentes."
  },
  {
    "name": "Aprendizaje continuo",
    "category": "Habilidades profesionales",
    "icon": "learning",
    "description": "Incorpora nuevos conocimientos mediante estudio, práctica y revisión de resultados para adaptarse a herramientas y necesidades cambiantes."
  },
  {
    "name": "Atención al detalle",
    "category": "Habilidades profesionales",
    "icon": "detail",
    "description": "Revisa elementos específicos de información y entregables para detectar inconsistencias y cuidar precisión, presentación y coherencia del resultado."
  }
];

// SVG semánticos originales alternativos; no son logotipos oficiales.
const skillIcons = {
  "java": "M5 9h12v7a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4zm12 1h2a3 3 0 0 1 0 6h-2M8 6V3m4 3V2m4 4V3M4 22h14",
  "javascript": "M4 3h16v12H4zm3 4h5m-5 3h3m3 3 7 4-4 1-2 4z",
  "html": "M5 2h10l4 4v16H5zm10 0v5h4M10 11l-3 3 3 3m4-6 3 3-3 3",
  "css": "M3 5h18M3 12h18M3 19h18M7 2v6m10 1v6m-7 1v6",
  "spring": "M4 3h16v6H4zm0 12h16v6H4zM7 6h1m-1 12h1m4-9v6m-3-3h6",
  "bootstrap": "M3 4h18v16H3zm0 5h18M9 9v11m6-11v11",
  "postgresql": "M3 6c0-5 18-5 18 0s-18 5-18 0zm0 0v12c0 5 18 5 18 0V6M3 12c0 5 18 5 18 0",
  "git": "M6 7v10m12-10v3c0 4-12 0-12 4M6 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM6 17a2 2 0 1 0 0 4 2 2 0 0 0 0-4z",
  "github": "M5 3h14v18H5zm4 0v18m4-13h3m-3 4h3m-3 4h3",
  "figma": "M5 5h14v14H5zm0 0 14 14M3 3h4v4H3zm14 0h4v4h-4zM3 17h4v4H3zm14 0h4v4h-4z",
  "trello": "M3 3h18v18H3zm4 4h3v9H7zm7 0h3v5h-3z",
  "scrum": "M19 8a8 8 0 0 0-13-2L3 9m0-5v5h5m-3 7a8 8 0 0 0 13 2l3-3m0 5v-5h-5",
  "project-management": "M9 3h6v5H9zM2 16h6v5H2zm14 0h6v5h-6zM12 8v4H5v4m7-4h7v4",
  "organization": "M3 7h7l2 3h9v11H3zm0 0V3h7l2 3h9v4",
  "planning": "M3 5h18v16H3zm4-3v6m10-6v6M3 10h18m-14 4h3m4 0h3m-10 4h3",
  "tracking": "M3 3v18h18M6 16l4-5 4 2 6-7m-5 0h5v5",
  "compliance": "M12 2 3 6v6c0 5 9 10 9 10s9-5 9-10V6zm-5 10 3 3 7-7",
  "requests": "M3 4h18v12h-7l-5 5v-5H3zm9 3v4m0 2v1",
  "analysis": "M10 3a7 7 0 1 0 0 14 7 7 0 0 0 0-14zm5 12 6 6M6 12V9m4 3V6m4 6V8",
  "problem-solving": "M4 4h6V2h4v2h6v6h2v4h-2v6h-6v2h-4v-2H4v-6H2v-4h2zm4 8 3 3 6-6",
  "teamwork": "M9 6a3 3 0 1 0 6 0 3 3 0 0 0-6 0zM6 21v-4a6 6 0 0 1 12 0v4M2 9a2 2 0 1 0 4 0 2 2 0 0 0-4zm16 0a2 2 0 1 0 4 0 2 2 0 0 0-4zM2 15v5m20-5v5",
  "collaboration": "M3 4h13v9H9l-4 4v-4H3zm15 5h3v11h-4l-3 2v-2h-4v-4",
  "communication": "M3 9h5l10-5v16L8 15H3zm5 6 2 6h4l-3-5m10-6 2-1m-2 6 2 1",
  "quality": "M12 2 3 7v10l9 5 9-5V7zM7 12l3 3 7-7",
  "attention": "M8 15c-4-5-1-12 4-12s8 7 3 11l-2 2v2m-5-5c0-5 6-5 6-1m-5 7c0 3 5 3 5 0",
  "user-support": "M4 13V9a8 8 0 0 1 16 0v4M4 10H2v7h4zm16 0h2v7h-2zm0 7v3h-6m-4-1h4v3h-4z",
  "learning": "M12 6C8 3 4 3 2 4v15c4-1 7 0 10 2 3-2 6-3 10-2V4c-2-1-6-1-10 2zm0 0v15M5 8h3m-3 4h3m8-4h3m-3 4h3",
  "detail": "M3 3h12v6M3 3v18h9m-6-14h5m-5 4h3m-3 4h3m8-5a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm3 7 3 3",
  "project-coordination": "M9 2h6v6H9zM2 16h6v6H2zm14 0h6v6h-6zM12 8v4H5v4m7-4h7v4m-9-1 2 2 3-3",
  "fiber-network": "M2 3h6v6H2zm14 0h6v6h-6zM9 16h6v6H9zM5 9v3h14V9m-7 3v4M4 5h2m12 0h2m-9 13h2",
  "university-engineering": "M2 8 12 3l10 5-10 5zm4 3v6c4 3 8 3 12 0v-6M22 8v9M8 21h8",
  "fullstack-training": "M3 3h18v12H3zm0 4h18M8 10l-2 2 2 2m8-4 2 2-2 2M9 15v4m6-4v4M6 21h12"
};

// Registros de trayectoria: agregar elementos aquí genera sus tarjetas.
const experiences = [
  { role: 'Project Specialist', company: 'Serdan, asignada a Huawei Technologies.', period: 'enero 2025 – enero 2026', icon: 'project-coordination', description: 'Gestión de permisos de acceso para proyectos FTTH, seguimiento operativo, cumplimiento y control de calidad.' },
  { role: 'Diseñadora FTTH', company: 'FiberHome Telecommunication Technologies.', period: 'marzo 2023 – enero 2025', icon: 'fiber-network', description: 'Elaboración de diseños y planos FTTH, documentación técnica, presupuestos ópticos y conectividad.' }
];
const education = [
  { name: 'Ingeniería Informática', institution: 'Universidad Autónoma de Occidente.', period: 'agosto 2022 – en curso', type: 'Carrera universitaria', icon: 'university-engineering', description: 'Formación académica en ingeniería informática, programación y fundamentos tecnológicos.' },
  { name: 'Junior Full Stack Java Developer', institution: 'Generation Colombia.', period: 'julio – septiembre 2026', type: 'Formación complementaria', icon: 'fullstack-training', description: 'Formación en desarrollo de aplicaciones con tecnologías frontend, backend y herramientas de trabajo colaborativo.' }
];
function recordText(parent,tag,text,className){if(!text)return;const element=document.createElement(tag);element.textContent=text;if(className)element.className=className;parent.append(element);}
function createRecordIcon(key){
const svg=document.createElementNS('http://www.w3.org/2000/svg','svg');svg.setAttribute('viewBox','0 0 24 24');svg.setAttribute('aria-hidden','true');svg.setAttribute('focusable','false');svg.setAttribute('preserveAspectRatio','xMidYMid meet');svg.setAttribute('class','record-icon');
const path=document.createElementNS('http://www.w3.org/2000/svg','path');path.setAttribute('d',skillIcons[key]||'M4 3h16v18H4zm4 5h8m-8 4h8m-8 4h5');svg.append(path);return svg;
}
function createColumnCarousel(id,records,kind){
const list=document.getElementById(id+'-track'),previous=document.getElementById(id+'-prev'),following=document.getElementById(id+'-next'),status=document.getElementById(id+'-position');
for(const record of records){
const card=document.createElement('li');card.className='column-card';card.append(createRecordIcon(record.icon));
if(kind==='skill'){
recordText(card,'p',record.category,'record-category');recordText(card,'h3',record.name);recordText(card,'p',record.description,'record-description');
}else{
recordText(card,'p',record.type,'record-type');recordText(card,'p',record.period,'record-period');recordText(card,'h3',record.role||record.name);recordText(card,'p',record.company||record.institution);recordText(card,'p',record.description);
if(record.achievements?.length){recordText(card,'p','Logros');const achievements=document.createElement('ul');for(const achievement of record.achievements)recordText(achievements,'li',achievement);card.append(achievements);}
}
list.append(card);
}
if(!records.length){const empty=document.createElement('li');empty.className='column-empty';empty.textContent='No hay registros disponibles.';list.append(empty);}
const step=()=> (list.children[0]?.getBoundingClientRect().width||1)+12;
const current=()=>Math.max(0,Math.min(records.length-1,Math.round(list.scrollLeft/step())));
function sync(){previous.disabled=!records.length||list.scrollLeft<=1;following.disabled=records.length<2||list.scrollLeft>=list.scrollWidth-list.clientWidth-1;status.textContent=records.length?(current()+1)+' / '+records.length:'0 / 0';}
function go(index){list.scrollTo({left:Math.max(0,Math.min(records.length-1,index))*step(),behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});}
previous.addEventListener('click',()=>go(current()-1));following.addEventListener('click',()=>go(current()+1));
list.addEventListener('keydown',event=>{const targets={ArrowLeft:current()-1,ArrowRight:current()+1,Home:0,End:records.length-1};if(Object.hasOwn(targets,event.key)){event.preventDefault();go(targets[event.key]);}});
let pending=false;list.addEventListener('scroll',()=>{if(!pending){pending=true;requestAnimationFrame(()=>{sync();pending=false;});}},{passive:true});
if(typeof ResizeObserver!=='undefined')new ResizeObserver(sync).observe(list);else window.addEventListener('resize',sync);sync();
}
createColumnCarousel('experience',experiences,'experience');
createColumnCarousel('education',education,'education');
createColumnCarousel('professional-skills',skills,'skill');
const track=document.getElementById('skills-track'),prev=document.getElementById('skills-prev'),next=document.getElementById('skills-next'),position=document.getElementById('skills-position');
for(const skill of skills){
const card=document.createElement('li');card.className='skill-card';
const svg=document.createElementNS('http://www.w3.org/2000/svg','svg');svg.setAttribute('viewBox','0 0 24 24');svg.setAttribute('aria-hidden','true');svg.setAttribute('focusable','false');svg.setAttribute('preserveAspectRatio','xMidYMid meet');
const path=document.createElementNS('http://www.w3.org/2000/svg','path');path.setAttribute('d',skillIcons[skill.icon]||'M4 4h16v16H4zM8 12h8m-4-4v8');svg.append(path);
const name=document.createElement('strong');name.textContent=skill.name;
const category=document.createElement('small');category.textContent=skill.category;
const description=document.createElement('p');description.className='skill-description';description.textContent=skill.description||'';
card.append(svg,name,category,description);track.append(card);
}
function current(){return Math.round(track.scrollLeft/((track.children[0]?.getBoundingClientRect().width||1)+12))}
function sync(){const last=track.scrollWidth-track.clientWidth;prev.disabled=track.scrollLeft<=1;next.disabled=track.scrollLeft>=last-1;const first=Math.min(skills.length,current()+1);const visible=Math.max(1,Math.round((track.clientWidth+12)/((track.children[0]?.getBoundingClientRect().width||1)+12)));position.textContent=first+(visible>1?'–'+Math.min(skills.length,first+visible-1):'')+' / '+skills.length;}
function go(index){const step=(track.children[0]?.getBoundingClientRect().width||1)+12;track.scrollTo({left:Math.max(0,Math.min(skills.length-1,index))*step,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});}
prev.addEventListener('click',()=>go(current()-1));next.addEventListener('click',()=>go(current()+1));
track.addEventListener('keydown',event=>{const targets={ArrowLeft:current()-1,ArrowRight:current()+1,Home:0,End:skills.length-1};if(Object.hasOwn(targets,event.key)){event.preventDefault();go(targets[event.key]);}});
let pending=false;track.addEventListener('scroll',()=>{if(!pending){pending=true;requestAnimationFrame(()=>{sync();pending=false;});}},{passive:true});
if(typeof ResizeObserver!=='undefined')new ResizeObserver(sync).observe(track);else window.addEventListener('resize',sync);
sync();
})();
