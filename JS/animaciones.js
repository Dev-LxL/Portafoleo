
// Capa visual independiente: no modifica datos ni controladores existentes.
(function(){
const root=document.documentElement;if(root.dataset.lxlMotion==='ready')return;root.dataset.lxlMotion='ready';
const reduced=matchMedia('(prefers-reduced-motion: reduce)'),printing=matchMedia('print');
const tokens=getComputedStyle(root),duration=name=>parseFloat(tokens.getPropertyValue(name))||160,easing=tokens.getPropertyValue('--motion-ease').trim()||'ease-out';
const active=new Set(),timers=new Map();
function play(element,keyframes,options={}){
if(!element||typeof element.animate!=='function'||reduced.matches||printing.matches)return;
const animation=element.animate(keyframes,{duration:duration('--motion-base'),easing,...options});active.add(animation);animation.finished.then(()=>active.delete(animation),()=>active.delete(animation));return animation;
}
function enter(element,delay=0){play(element,[{opacity:.72,translate:'0 8px'},{opacity:1,translate:'0 0'}],{delay});}
function drawCode(badge){
[...badge.querySelectorAll('svg path')].forEach((path,i)=>{if(typeof path.getTotalLength!=='function')return;const length=path.getTotalLength();if(!length)return;play(path,[{strokeDasharray:length+' '+length,strokeDashoffset:length,opacity:.6},{strokeDasharray:length+' '+length,strokeDashoffset:0,opacity:1}],{duration:duration('--motion-slow'),delay:i*45});});
}
const entrances=document.querySelectorAll('.hero-layout>.tiny,.hero-title,.hero-subtitle,.hero-sticker,.intro .big-hello,.avatar-panel,.triptych>.strip,.big-blue h2,.code-badge,.work-head,.services .container>h2,.service,.quote-section .section-title,.quote-layout>.sheet,.contact-grid>div,.foot');
function reveal(element){
const delay=element.matches('.hero-subtitle')?100:element.matches('.hero-sticker')?180:0;enter(element,delay);
if(element.matches('.code-badge')){drawCode(element);element.querySelectorAll('svg circle').forEach((circle,i)=>play(circle,[{opacity:.6},{opacity:1}],{duration:duration('--motion-base'),delay:i*60}));}
if(element.matches('.avatar-panel'))play(element.querySelector('.tech-art .art-accent'),[{opacity:.8},{opacity:1}],{duration:duration('--motion-slow')});
if(element.matches('.hero-title')){
const mark=document.querySelector('.hero-mark');play(mark,[{translate:'0 0'},{translate:'0 -2px',offset:.5},{translate:'0 0'}],{duration:duration('--motion-slow')*3,iterations:1});
}
}
if(typeof IntersectionObserver!=='undefined'){
const observer=new IntersectionObserver(entries=>{for(const entry of entries)if(entry.isIntersecting){observer.unobserve(entry.target);reveal(entry.target);}},{threshold:.12});entrances.forEach(element=>observer.observe(element));
}
// Sin IntersectionObserver se conserva la presentación estática, siempre visible.
const hero=document.querySelector('.hero-layout'),monogram=document.querySelector('.scribble svg');let frame=0;
if(hero&&monogram&&matchMedia('(hover: hover) and (pointer: fine)').matches){
hero.addEventListener('pointermove',event=>{if(reduced.matches||printing.matches||frame)return;const x=event.clientX,y=event.clientY;frame=requestAnimationFrame(()=>{frame=0;if(reduced.matches||printing.matches)return;const box=hero.getBoundingClientRect();const dx=Math.max(-1,Math.min(1,(x-box.left)/box.width*2-1))*3,dy=Math.max(-1,Math.min(1,(y-box.top)/box.height*2-1))*2;monogram.style.translate=dx+'px '+dy+'px';});},{passive:true});
hero.addEventListener('pointerleave',()=>{if(frame)cancelAnimationFrame(frame);frame=0;monogram.style.removeProperty('translate');});
}
// Un único listener delegado para todos los carruseles, incluidos sus futuros registros.
const lastCard=new WeakMap();
document.addEventListener('scroll',event=>{
const track=event.target;if(!(track instanceof Element)||!track.matches('.skills-track,.column-track,.projects')||reduced.matches||printing.matches)return;
clearTimeout(timers.get(track));timers.set(track,setTimeout(()=>{timers.delete(track);const first=track.children[0];if(!first)return;const gap=parseFloat(getComputedStyle(track).columnGap)||0,index=Math.round(track.scrollLeft/(first.getBoundingClientRect().width+gap));const card=track.children[index];if(card&&lastCard.get(track)!==card){lastCard.set(track,card);play(card,[{opacity:.8},{opacity:1}],{duration:duration('--motion-fast')});}},100));
},{capture:true,passive:true});
// Feedback visual sobre los resultados existentes, sin alterar sus cálculos ni validaciones.
if(typeof MutationObserver!=='undefined'){
const resultSelector='#details,#skills-position,#experience-position,#education-position,#professional-skills-position,#projects-position';
const observer=new MutationObserver(records=>{const changed=new Set();for(const record of records){const node=record.target.nodeType===1?record.target:record.target.parentElement;const result=node?.closest(resultSelector);if(result)changed.add(result);}for(const result of changed)play(result,[{opacity:.65},{opacity:1}],{duration:duration('--motion-fast')});});
document.querySelectorAll(resultSelector).forEach(element=>observer.observe(element,{childList:true,characterData:true,subtree:true}));
}
function stop(){for(const animation of active)animation.cancel();active.clear();for(const timer of timers.values())clearTimeout(timer);timers.clear();if(frame)cancelAnimationFrame(frame);frame=0;monogram?.style.removeProperty('translate');}
reduced.addEventListener?.('change',()=>{if(reduced.matches)stop();});window.addEventListener('beforeprint',stop);
})();
