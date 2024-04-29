const soma = (num1, num2, callbackSuccess, callbackError) => {
    return (num1 + num2) % 2 === 0 ? callbackSuccess(num1 + num2) : callbackError(num1 + num2)
}

soma(2,5,
    (sum) => console.log("Sucesso, O resultado é par:", sum),
    (sum) => console.log("Ocorreu um erro, O resultado é impar:",sum))
