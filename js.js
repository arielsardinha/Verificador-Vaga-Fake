const caixa = document.getElementById('caixa')
const btnVerificar = document.getElementById('btnVerificar')
const texto = document.getElementById('caixaTXT')
function verificar(){
    setTimeout(verificar => caixa.style.display = 'block', 1000);
    btnVerificar.style.display = 'none' 
}
function verificarxps(){
    caixa.style.display = 'none'
    texto.innerHTML = 'para se candidatar nao pode ter experiencia'
    btnVerificar.style.display = 'inline-block'   
}
function verificarxpn(){
    caixa.style.display = 'none'
    texto.innerHTML = 'Você nao tem experiencia para o estagio'
    btnVerificar.style.display = 'inline-block'
}
