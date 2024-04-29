
const soma = (num1, num2) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let sum = num1 + num2
            return sum % 2 === 0 ? resolve(sum) : reject(sum)
        },1000)
    })
}

soma(2,4)
    .then((sum) => console.log("Sucesso, O resultado é par:", sum))
    .catch((sum) => console.log("Ocorreu um erro, O resultado é impar:",sum))
