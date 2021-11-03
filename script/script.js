function ativaNavegacao()
{
const bem_vindo = document.querySelector('.js-bem_vindo');
const sobre = document.querySelector('.js-sobre');
const liAtiva = document.querySelectorAll('.js-nav li');


function navegassao(){
  const containers = [bem_vindo, sobre];
  const controle = document.querySelectorAll('.js-nav li');
  if(containers.length && controle.length){
    containers[0].classList.add('ativo');
    liAtiva[0].classList.add('ativo');
  }
  function ativarControle(on){
    containers.forEach(
      (remove) => {
        remove.classList.remove('ativo')
      }); 
      liAtiva.forEach(
        (remove) => {
          remove.classList.remove('ativo')
        }
      )
      containers[on].classList.toggle('ativo');
      liAtiva[on].classList.toggle('ativo')
  }

  controle.forEach((valorArray, on)=>{
    valorArray.addEventListener('click', ()=>{
      ativarControle(on);
    } )
  })
}

navegassao();
}
ativaNavegacao();




const slides_controle = document.querySelectorAll('.js-sessao_site .js_arrow');
const portfolio = document.querySelectorAll('.js-sessao_site ul li');











function navegassaoPrototipo(){
  const slides_controle = document.querySelectorAll('.js-prototipos .js_arrow_prototipo');
  const prototipo = document.querySelectorAll('.js-prototipos ul li');
  
  function controleNavegacao(){
    if (slides_controle.length && prototipo.length){
      prototipo[0].classList.add('ativo');
      prototipo[1].classList.add('ativo');
    }
    
    function controleAtivo(on){
      prototipo.forEach(
        (remove) => {
          remove.classList.toggle('ativo');
        }); 
      prototipo[on].classList.toggle('ativo');
    }
    slides_controle.forEach((setaNav, on) =>{
      setaNav.addEventListener('click', ()=> {
        controleAtivo(on);
      });
    }
    );
  }
 controleNavegacao();
}
navegassaoPrototipo();



function btn_hamburguer(){
const menuHamnurguer = document.querySelector('.js-menu_hamburguer');
const menuBotton = document.querySelector('.js-button_hamburguer');
const btn = document.querySelector('.icone_hamburguer');

function menuAtivo(event){
  if (event.type === 'touchstart') event.preventDefault();
  menuHamnurguer.classList.toggle('ativo');
  btn.classList.toggle('ativo');
  const ativo = menuHamnurguer.classList.contains('ativo');
  event.currentTarget.setAttribute('aria-expanded', ativo);
  if(ativo) {event.currentTarget.setAttribute('aria-label', 'fechar menu');
}else{event.currentTarget.setAttribute('aria-label', 'abrir menu');
}

}
menuBotton.addEventListener('click', menuAtivo);
menuBotton.addEventListener('touchstart', menuAtivo);
}
btn_hamburguer();


