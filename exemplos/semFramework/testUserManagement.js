const { validandoSenha } = require("../userManagement")

function testValidandoSenha() {
    // Arrange (Preparação)

    const senha = 'Senha!123'
    // Act (Execução)
    let result = validandoSenha(senha)

    // Assert (Verificação)
    let expected = true
    if (result === expected) {
        console.log(`O teste foi um sucesso. Resultado esperado: ${expected}, resultado obtido: ${result}`)
    } else {
        console.log(`O teste falhou. Resultado esperado: ${expected}, resultado obtido: ${result}`)
    }
}


testValidandoSenha()