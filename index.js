let email = prompt('digite seu email corretamente: ')

while(email != 'gabriel-wender.prado@gmail.com'){
    console.log(`O email digitado foi: ${email}`)


    email = prompt('digite seu email corretamente: ')
}

class dados {
    constructor (email , nome , sobreNome, idade) {
        this.email = email;
        this.nome = nome;
        this.sobreNome = sobreNome;
        this.idade = idade
    }
    apresentar= () => {
        console.log ( `Ola meu Email É ${this.email} , Meu nome é ${this.nome} ${this.sobreNome}, E a minha idade é ${this.idade} `)
    }
}
 const dados1 = new dados ("gabriel@gmail.com", "gabriel","wender", 28)

 dados1.apresentar()