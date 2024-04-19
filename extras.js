function encontrarAluno(nomeAluno, listaNomeAlunos) {
    // Retorna true se o nome do aluno está na lista, false caso contrário
    return listaNomeAlunos.indexOf(nomeAluno) >=0 ? true : false

}

function filtrarAlunos(nomeAluno, listaNomeAlunos) {
    // Retorna uma lista de alunos que correspondem ao nome fornecido
    let novalistaNomeAlunos = []
    for (let index = 0; index <= listaNomeAlunos.length; index++) {
        if (listaNomeAlunos[index] == nomeAluno)
        {
            novalistaNomeAlunos.push(nomeAluno);
        }
    }
    return novalistaNomeAlunos;
}

function construirAluno(nomeAluno, idadeAluno) {
    // Constrói e retorna um objeto aluno com nome e idade
    let aluno = {
        nome : nomeAluno,
        idade : idadeAluno
    }
    return aluno
}

module.exports = {
    encontrarAluno,
    filtrarAlunos,
    construirAluno
};