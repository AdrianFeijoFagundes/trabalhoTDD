const { validandoSenha } = require("../userManagement")
const { verificandoEmail } = require("../userManagement")

test("Verificando se a senha 'Senha!1234' tem números, letras maiusculas, caracteres especiais e pelo menos 8 caracteres", () => {

    let senha = 'Senha!1234' 
    expect(validandoSenha(senha)).toBe(true)
})

test("Verificando se o email joao123@gmail.com está na lista", () => {

    const listaDeEmails = ["joao123@gmail.com", "lucas123@gmail.com", "matheus123@gmail.com", "stevao123@gmail.com"]
    const email = "joao123@gmail.com"
 
    expect(verificandoEmail(email, listaDeEmails)).toBe(true)
})