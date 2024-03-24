const inverter_string = (string) => {
    const array = []
    let resposta = ''

    for (let letra of string) { array.unshift(letra) }

    for (let letra of array) { resposta += letra }

    console.log(resposta)
}

inverter_string('Olá, meu nome é Luis')


