function getArray <T>(items : T[] ): T[]{
    return new Array<T>().concat(items);
}
    
    let idade = getArray<number>([50, 35, 22])
    let nome = getArray<string>(["Maria",'Jose', 'Lucas'])

    idade.push(42)
    nome.push("Pedro")
    console.log(idade)
    console.log(nome)

function base<T, U>(n1:T, n2:U){
    console.log(`${n1}, ${n2}`)
}

    let boletim = base<string, number>('José', 7)
    let func1 = base<string, boolean>('João', true)
    let func2 = base<string, boolean>('Pedro', false)