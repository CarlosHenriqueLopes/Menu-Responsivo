function mostrarmeno(){
    let menuMobile = document.querySelector('.menu-hamburguer');
    if (menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = [imagem];
    } else{
            menuMobile.classList.add('open');
            document.querySelector('.icon').src = [imagem];
        }
    }
}