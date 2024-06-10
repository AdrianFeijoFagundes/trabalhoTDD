const { validandoSenha } = require("../userManagement")
const { verificandoEmail } = require("../userManagement")

function testValidandoSenha() {
    console.log("\nVerificando se a senha 'Senha!1234' tem números, letras maiusculas, caracteres especiais e pelo menos 8 caracteres")
    // Arrange (Preparação)
    const senha = 'Senha!1234'
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

function testVerificandoEmail() {
    console.log("\nVerificando se o email joao123@gmail.com está na lista")
    const listaDeEmails = ["joao123@gmail.com", "lucas123@gmail.com", "matheus123@gmail.com", "stevao123@gmail.com"]
    const email = "joao123@gmail.com"

    let result = verificandoEmail(email, listaDeEmails)

    let expected = true
    
    if (result === expected) {
        console.log(`O teste foi um sucesso. Resultado esperado: ${expected}, resultado obtido: ${result}`)
    } else {
        console.log(`O teste falhou. Resultado esperado: ${expected}, resultado obtido: ${result}`)
    }
}


testValidandoSenha()
testVerificandoEmail()