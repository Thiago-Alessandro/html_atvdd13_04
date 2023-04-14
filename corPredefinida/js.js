let cores = ['yellow','orange','pink','red','green','purple','gray','blue']
let corpo = document.querySelector('body')
let descricao
let indice = -1;

function trocarCor(){
    if(indice>=7){
        indice=0
    }else{
        indice++;
    }
    corpo.style.backgroundColor=cores[indice]
    console.log(indice)
    descricao = 'Background Color : ' + cores[indice]
    document.querySelector('#descricaoCor').innerTEXT=descricao
    console.log(cores[indice])
}
console.log(document.querySelector('#descricaoCor').innerTEXT)