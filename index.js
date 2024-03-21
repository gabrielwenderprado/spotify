 

    const login = document.getElementById("login")
    const senha = document.getElementById("senha")

   
    const Dados = [];

    function SalvarInfosLogar () {
        Dados.push ({
            login: login.value,
            senha: senha.value
        })
        if(login.value == "gabriel@gmail.com" && senha.value == "gabriel"){
            alert('Olá, Gabriel');
            location.href = "posEntrar.html";
        } else{
            alert('Usuario ou senha incorretos');
        }
    
        console.log(Dados)
    }
 


    const idade = {
        idadePessoa: prompt(parent('digite sua idade: '))
    }

    const VerificaIdade = ({ idadePessoa}) => {
        idadePessoa >= 18 && alert (`Maior de idade ${idadePessoa ?? 'Nenhum numero inserido'}`)
    }

    VerificaIdade (idade)


    // cadastro

    

