var inputTamanho = document.querySelector('[name=tamanho]');                    //Criiou-se uma variavel que seleciona o elemento que possui name=tamanho; nesse caso o INPUT RANGE//
var outputTamanho = document.querySelector('[name=valortamanho]');

function mostraTamanho(){
    outputTamanho.value = inputTamanho.value;
}

inputTamanho.oninput = mostraTamanho;