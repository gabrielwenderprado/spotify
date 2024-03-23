 

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
        idadePessoa: prompt(parseInt('digite sua idade: '))
    }

    const VerificaIdade = ({ idadePessoa}) => {
        idadePessoa >= 18 && alert (`Maior de idade ${idadePessoa ?? 'Nenhum numero inserido'}`)
        idadePessoa < 18 && alert (`Menor de idade ${idadePessoa ?? 'nenhum numero inserido'}`)
    }

    VerificaIdade (idade)









    const image = document.querySelector('conteudo');

    image.addEventListener('click', (event) => {
    const {} = event.target;
    alert(`Atributo de origem da imagem: "${pagode.html}".`);

    // Redirecionar para outra página:
    location.replace(pagode.html);
});

    

