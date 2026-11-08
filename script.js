const menu = document.getElementById('menu');
const navigation = document.getElementById('navigation');
function closeMenu(){menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Abrir menu');navigation.classList.remove('open')}
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Fechar menu':'Abrir menu');navigation.classList.toggle('open',open)});
navigation.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&menu.getAttribute('aria-expanded')==='true'){closeMenu();menu.focus()}});
window.matchMedia('(min-width:851px)').addEventListener('change',e=>{if(e.matches)closeMenu()});
document.getElementById('year').textContent=String(new Date().getFullYear());
document.querySelectorAll('[data-vehicle-gallery]').forEach(card=>{
  const photo=card.querySelector('[data-main-photo]');
  const thumbs=[...card.querySelectorAll('.gallery-thumb')];
  const status=card.querySelector('[data-gallery-status]');
  thumbs.forEach((button,index)=>button.addEventListener('click',()=>{
    photo.src='/images/'+button.dataset.photo+'.webp';
    photo.alt=button.dataset.alt;
    photo.classList.toggle('front-view',button.dataset.photo==='honda-city-frente-wide');
    thumbs.forEach(thumb=>thumb.setAttribute('aria-pressed',String(thumb===button)));
    status.textContent=button.textContent.trim()+' · foto '+(index+1)+' de '+thumbs.length;
  }));
});
