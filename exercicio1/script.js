const num = Number(prompt("Digite um número"))

// Questão 1
    if (num % 2 == 0) {
        if (num % 3 == 0){
            console.log("Número divisível por 2 ou 3")
        } else {
            console.log("Número divisível por 2")
        } 
    } else if (num % 3 == 0){
        console.log("Número divisível por 3")
    } else {
        console.log("Número não divisível por 2 ou 3")
    }

// Questão 2
    // if (num % 2 == 0 || num % 3 == 0) {
    //     console.log("Número divisível por 2 ou 3")
    // } else {
    //     console.log("Número não é divisível por 2 ou 3")
    // }


