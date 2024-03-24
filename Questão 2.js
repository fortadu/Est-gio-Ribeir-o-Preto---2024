const pertence_ou_nao = (numero_informado) => {
    const fibonacci = [0, 1]

    let numero1 = fibonacci[fibonacci.length - 2]
    let numero2 = fibonacci[fibonacci.length - 1]

    for (let soma = 0; soma != soma - 1; soma = numero1 + numero2) {
        fibonacci.push(soma)
        numero1 = numero2
        numero2 = soma
    }

    const resposta = fibonacci.includes(numero_informado) ? "Pertence" : "Não pertence"

    console.log(resposta)
}

pertence_ou_nao(377)