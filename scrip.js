const box_img = window.document.querySelector('.img-box-hamburguer')
const lista = window.document.querySelector('ul')

function mostrarmeno(){

    if (lista.style.display == 'block'){
        lista.style.display = 'none'
    } else {
        lista.style.display = 'block'
    }
}