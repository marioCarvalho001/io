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






 
function navegassaoAtiva(){

const divProjetos = document.querySelectorAll('.proj-js');

const imgs = document.querySelectorAll('.imgs-js');

const sessao = document.querySelector('.galeria-js');

const portfolioFlex = document.querySelector('.sessao_portfolio');

function galeriaAtiva(i){
  
  divProjetos.forEach((ina)=>{
    ina.classList.add('inativo')
  });
  
  portfolioFlex.classList.add('ativo')
  sessao.classList.add('ativo');
  imgs[i].classList.toggle('ativo');
  divProjetos[i].classList.toggle('ativo');
}


divProjetos.forEach((item,i)=>{
  item.addEventListener('click', ()=>{
    galeriaAtiva(i)
  })
});


const reset =  document.querySelector('.reset-js');

function resetClass(){
  reset.addEventListener('click', ()=>{
  
      divProjetos.forEach((ina)=>{
        ina.classList.remove('inativo')
      });
      imgs.forEach((i)=>{
        i.classList.remove('ativo');
      });
      divProjetos.forEach((i)=>{
        i.classList.remove('ativo');
      })
      portfolioFlex.classList.remove('ativo');
      sessao.classList.remove('ativo');
    
  })
}
resetClass();

}

navegassaoAtiva();


