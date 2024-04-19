/*
    Cola:
    Lembrem-se da condição de parada do loop.
    Dentro do loop, pode haver qualquer bloco de código que se repetirá
    Loops: for, while e do while
*/

function listaImpares(limite) {
    // Retorna um array contendo todos os números ímpares até 'limite'
    let impares = [];
    for (let index = 1; index <= limite; index++) {
        if (index % 2 != 0)
        {
            impares.push(index)
        }
    }
    return impares;
}

/*aa
    Cola: Texto é um array de caracteres,
    então você pode acessar cada caractere individualmente com texto[i]
*/
function contaCaracteres(texto, caracter) {
    // Retorna a quantidade de vezes que 'caracter' aparece em 'texto'
    let contador = 0;
    for (let index = 0; index <= texto.length; index++) {
        if (caracter == texto[index])
        {
            contador++
        }
    }
    return contador;
}

module.exports = {
    listaImpares,
    contaCaracteres,
};