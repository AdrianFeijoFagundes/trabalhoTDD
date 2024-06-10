const sum = require("../sum")

function testSum() {
    // Arrange (Preparação)

    let num1 = 10;
    let num2 = 20;

    // Act (Execução)
    let result = sum(num1 , num2)

    // Assert (Verificação)
    let expected = 30
    if (result === expected) {
        console.log(`O teste foi um sucesso. Resultado esperado: ${expected}, resultado obtido: ${result}`)
    } else {
        console.log(`O teste falhou. Resultado esperado: ${expected}, resultado obtido: ${result}`)
    }
}

testSum()