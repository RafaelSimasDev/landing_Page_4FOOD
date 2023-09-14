const abreMenu = document.querySelector('#menuBarrinhas');

abreMenu.addEventListener('click', () => {
    const navbar = document.querySelector('#menuResponsivo');
    navbar.classList.toggle('active');
   
    
    const novoExemplo = document.querySelector('#bodySobre')
    novoExemplo.classList.toggle('activeSobre');
    
})