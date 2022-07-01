function abrirMenu(){
    let menu = document.getElementById('menu');
    let linhas = document.getElementById('linhas')
    let classeMenu = menu.getAttribute('class');

    if(classeMenu == "menu"){
        menu.classList.add('Clicado');
        linhas.classList.add('Clicado');
    }else{
        menu.classList.remove('Clicado');
        linhas.classList.remove('Clicado');

    }
}