// let email = prompt('digite seu email corretamente: ')

// while(email != 'gabriel@gmail.com'){
//     console.log(`O email digitado foi: ${email}`)


//     email = prompt('digite seu email corretamente: ')
// }

function xicara(c, f, p, cp) {
    this.cor = c;
    this.forma = f;
    this.peso = p;
    this.capacidade = cp;
}

const xicara1 = new xicara("azul", "redonda", 25, 100)

console.log(xicara1)