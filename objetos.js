function retornaPropriedade(objeto, propriedade) {
    // Retorna o valor da propriedade especificada do objeto
    return objeto[propriedade];
}

function adicionaPropriedade(objeto, propriedade, valor) {
    // Adiciona uma nova propriedade ao objeto com o valor especificado
    objeto[propriedade] = valor;
}

module.exports = {
    retornaPropriedade,
    adicionaPropriedade,
};