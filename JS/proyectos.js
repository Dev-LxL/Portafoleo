
(function(){
// Fuente única de proyectos: imagen opcional { src, alt } y enlace público verificado.
const projects = [
  {
    "id": "huellavet-sistema-veterinario",
    "name": "HuellaVet — Sistema de gestión veterinaria",
    "headline": [
      "HUELLA",
      "VET"
    ],
    "description": "Plataforma web para la gestión de servicios y citas veterinarias. Participación en el desarrollo de interfaces y colaboración frontend/backend.",
    "category": "PROYECTO ACADÉMICO",
    "period": "2026",
    "color": "red",
    "decoration": "✳",
    "tags": [],
    "image": null,
    "publicUrl": "https://jorgegutierrezvallejo.github.io/ProyectoFinalJava13-Grupo6/",
    "urlVerified": true,
    "status": "demo"
  },
  {
    "id": "tareas-lihen",
    "name": "Tareas LIHEN — Planificador de tareas web",
    "headline": [
      "TAREAS",
      "LIHEN"
    ],
    "description": "Aplicación web para crear, consultar y administrar tareas, con fechas de entrega, estados y gestión dinámica de actividades.",
    "category": "PROYECTO ACADÉMICO",
    "period": "2026",
    "color": "blue",
    "decoration": "↗",
    "tags": [],
    "image": null,
    "publicUrl": "https://lizeth-londono.github.io/Gen-c13-Planificador-tareas-web/",
    "urlVerified": true,
    "status": "demo"
  },
  {
    "id": "la-exquisita",
    "name": "La Exquisita — Lechona Tolimense",
    "headline": [
      "LA EXQ.",
      "LECHONA"
    ],
    "description": "Experiencia web gastronómica con catálogo y carrito demostrativo.",
    "category": "PROPUESTA WEB COMERCIAL",
    "publicUrl": "https://dev-lxl.github.io/Lechona-La-Exquisita/",
    "color": "orange",
    "decoration": "✳",
    "period": "2026",
    "tags": [],
    "image": null,
    "urlVerified": true,
    "status": "demo"
  },
  {
    "id": "oink-buen-sabor",
    "name": "OINK! — Lechonería El Buen Sabor",
    "headline": [
      "OINK!",
      "LECHONA"
    ],
    "description": "Propuesta de identidad digital con menú visual y consultas demostrativas.",
    "category": "BRANDING Y PROPUESTA WEB",
    "publicUrl": "https://dev-lxl.github.io/OINK--Lechoner-a-El-Buen-Sabor/",
    "color": "red",
    "decoration": "✺",
    "period": "2026",
    "tags": [],
    "image": null,
    "urlVerified": true,
    "status": "demo"
  },
  {
    "id": "ecard-ingrid-honda",
    "name": "eCARD Ingrid Honda",
    "headline": [
      "eCARD",
      "INGRID"
    ],
    "description": "Tarjeta digital interactiva con catálogo, contacto e información comercial.",
    "category": "TARJETA COMERCIAL DIGITAL",
    "publicUrl": "https://dev-lxl.github.io/eCARD-Ingrid-Honda/",
    "color": "blue",
    "decoration": "↗",
    "period": "2026",
    "tags": [],
    "image": null,
    "urlVerified": true,
    "status": "demo"
  },
  {
    "id": "hrxl-ugc",
    "name": "HRXL — Portafolio UGC",
    "headline": [
      "HRXL",
      "UGC"
    ],
    "description": "Portafolio UGC con contenido, testimonios, tarifas y cotización demostrativa.",
    "category": "PORTAFOLIO DEMOSTRATIVO",
    "publicUrl": "https://lizeth-londono.github.io/LXL---PROPUESTA-HRXL/",
    "color": "orange",
    "decoration": "✳",
    "period": "2026",
    "tags": [],
    "image": null,
    "urlVerified": true,
    "status": "demo"
  },
  {
    "id": "kj-parfums",
    "name": "KJ PARFUMS",
    "headline": [
      "KJ",
      "PARFUMS"
    ],
    "description": "Catálogo ilustrativo de fragancias y experiencia comercial de marca.",
    "category": "PROPUESTA WEB COMERCIAL",
    "publicUrl": "https://lizeth-londono.github.io/LXL-Propuesta-KJ-PARFUMS/",
    "color": "red",
    "decoration": "✺",
    "period": "2026",
    "tags": [],
    "image": null,
    "urlVerified": true,
    "status": "demo"
  },
  {
    "id": "say-it-correctly",
    "name": "Say-it-correctly.org",
    "headline": [
      "SAY IT",
      "CORRECT"
    ],
    "description": "Sitio educativo para aprender y practicar inglés.",
    "category": "PROYECTO WEB EDUCATIVO",
    "publicUrl": "https://say-it-correctly.github.io/Say-it-correctly.org/home/index.html",
    "color": "blue",
    "decoration": "↗",
    "period": "2026",
    "tags": [],
    "image": null,
    "urlVerified": true,
    "status": "demo"
  }
];
const track=document.getElementById('projects-track'),prev=document.getElementById('projects-prev'),next=document.getElementById('projects-next'),position=document.getElementById('projects-position');
const colors=new Set(['red','blue','orange']);
function text(parent,tag,value,className){const node=document.createElement(tag);node.textContent=value;if(className)node.className=className;parent.append(node);return node;}
function safePublicUrl(value){try{const url=new URL(value);return ['https:','http:'].includes(url.protocol)?url.href:null}catch{return null}}
function safeImage(value){return typeof value==='string'&&(value.startsWith('assets/')||safePublicUrl(value));}
const ids=new Set();
for(const project of projects){
if(ids.has(project.id))continue;ids.add(project.id);
const card=document.createElement('article');card.className='project-card';card.setAttribute('role','listitem');card.dataset.projectId=project.id;card.dataset.color=colors.has(project.color)?project.color:'red';card.dataset.status=project.status;
const graphic=document.createElement('div');graphic.className='project-graphic';
function headline(){graphic.replaceChildren();const orb=document.createElement('div');orb.className='orb';orb.setAttribute('aria-hidden','true');graphic.append(orb);const title=document.createElement('b');for(const [i,line]of project.headline.entries()){if(i)title.append(document.createElement('br'));title.append(document.createTextNode(line));}graphic.append(title);const spark=text(graphic,'div',project.decoration||'','spark');spark.setAttribute('aria-hidden','true');}
if(project.image?.alt&&safeImage(project.image.src)){const image=document.createElement('img');image.src=project.image.src;image.alt=project.image.alt;image.loading='lazy';image.addEventListener('error',headline,{once:true});graphic.append(image);}else headline();
const info=document.createElement('div');info.className='project-info';text(info,'h3',project.name);text(info,'p',project.description);text(info,'div',[project.category,project.period].filter(Boolean).join(' · '),'tiny');
if(project.tags?.length){const tags=document.createElement('ul');tags.className='project-tags';tags.setAttribute('aria-label','Tecnologías');for(const tag of project.tags)text(tags,'li',tag);info.append(tags);}
const url=project.urlVerified&&project.publicUrl?safePublicUrl(project.publicUrl):null;if(url){const link=text(info,'a','VER PROYECTO ↗','project-link');link.href=url;link.target='_blank';link.rel='noopener noreferrer';link.setAttribute('aria-label','Ver proyecto: '+project.name+' (abre en una pestaña nueva)');}
card.append(graphic,info);track.append(card);
}
const cards=[...track.children],count=cards.length;
if(!count)text(track,'p','No hay proyectos disponibles.','projects-empty');
function geometry(){const width=cards[0]?.getBoundingClientRect().width||1;return {step:width+20,visible:Math.min(count,Math.max(1,Math.round((track.clientWidth-14+20)/(width+20))))};}
function current(){return Math.max(0,Math.min(count-1,Math.round(track.scrollLeft/geometry().step)));}
function sync(){prev.disabled=!count||track.scrollLeft<=1;next.disabled=count<2||track.scrollLeft>=track.scrollWidth-track.clientWidth-1;const first=current()+1,last=Math.min(count,first+geometry().visible-1);position.textContent=count?(first===last?first:first+'–'+last)+' / '+count:'0 / 0';}
function go(index){track.scrollTo({left:Math.max(0,Math.min(count-1,index))*geometry().step,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});}
prev.addEventListener('click',()=>go(current()-1));next.addEventListener('click',()=>go(current()+1));
track.addEventListener('keydown',event=>{if(event.target!==track)return;const targets={ArrowLeft:current()-1,ArrowRight:current()+1,Home:0,End:count-1};if(Object.hasOwn(targets,event.key)){event.preventDefault();go(targets[event.key]);}});
let pending=false;track.addEventListener('scroll',()=>{if(!pending){pending=true;requestAnimationFrame(()=>{sync();pending=false;});}},{passive:true});
if(typeof ResizeObserver!=='undefined')new ResizeObserver(sync).observe(track);else window.addEventListener('resize',sync);sync();
})();
