const abreMenu = document.querySelector('#menuBarrinhas');

abreMenu.addEventListener('click', () => {
    const navbar = document.querySelector('#menuResponsivo');
    navbar.classList.toggle('active');
   
    
    const novoExemplo = document.querySelector('#bodyLogin')
    novoExemplo.classList.toggle('activeLogin');
    
})

//ocultar senha

const mudarInputPassword = (event) =>{
    event.preventDefault()
    const inputSenha = document.getElementById("password")
    // inputSenha.setAttribute("type", "password")

    if(inputSenha.type === "password"){
        inputSenha.type = "text"
    }else{
        inputSenha.type = "password"
    }
}




//enviar informacoes clicando no botao

function limparCampos() {
    const loginInput = document.getElementById('login');
    const senhaInput = document.getElementById('password');

    if (loginInput || senhaInput) {
        loginInput.value = '';
        senhaInput.value = '';
    }
}