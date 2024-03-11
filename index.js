let email = prompt('digite seu email corretamente: ')

while(email != 'gabriel-wender.prado@gmail.com'){
    console.log(`O email digitado foi: ${email}`)


    email = prompt('digite seu email corretamente: ')
}

function coletaDados(e, t, n, sn) {
    this.email = e;
    this.tipo = t;
    this.nome = n;
    this.sobreNome = sn;
}

const coletaDados1 = new coletaDados("gabriel-wender.prado", "@gmail.com", "gabriel", "wender")

console.log(coletaDados1)