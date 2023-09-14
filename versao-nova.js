//menu hamburguer

const abreMenu = document.querySelector('#menuBarrinhas');

abreMenu.addEventListener('click', () => {
    const navbar = document.querySelector('#menuResponsivo');
    navbar.classList.toggle('active');
    bodyId.classList.toggle('active');
    
    const novoExemplo = document.querySelector('body')
    novoExemplo.classList.toggle('activeSobre');
    
})




