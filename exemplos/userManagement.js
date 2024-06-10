function validandoSenha(senha) {
    // Expressões regulares para verificar os diferentes tipos de caracteres
    const caracteresEspeciais = /[!@#$%^&*(),.?":{}|<>]/;
    const numeros = /[0-9]/;
    const letrasMaiusculas = /[A-Z]/;

    // Verificar Tamanho da senha
    const tamanhoMinimo = senha.length > 7
    // Verificar se a senha contém pelo menos um caractere especial, um número e uma letra maiúscula
    const contemCaractereEspecial = caracteresEspeciais.test(senha);
    const contemNumero = numeros.test(senha);
    const contemMaiuscula = letrasMaiusculas.test(senha);

    return contemCaractereEspecial && contemNumero && contemMaiuscula && tamanhoMinimo;
}


module.exports = {
    validandoSenha
}