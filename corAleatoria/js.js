let corpo = document.querySelector('body')
let r
let g
let b
let descricao

function trocarCor(){

    r = Math.random(1) * 255
    g = Math.random(1) * 255
    b = Math.random(1) * 255

    
    let cor = 'rgba(' + r +','+ g +',' + b + ')'
    corpo.style.backgroundColor=cor
    console.log(cor)
    descricao = 'Background Color : ' + cor
    document.querySelector('#descricaoCor').innerTEXT=cor
    console.log(cor)
}
console.log(document.querySelector('#descricaoCor').innerTEXT)