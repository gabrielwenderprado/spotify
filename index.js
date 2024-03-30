 

    const login = document.getElementById("login")
    const senha = document.getElementById("senha")

    const senha1 = document.querySelector('#senha');
    const confirma = document.querySelector('#senhaConfirma');

   
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
    
        console.log(...Dados)
    }

    
        //testando conferer senha 
        const input1 = document.querySelector("#password")
        const input2 = document.querySelector("#confirmPassword")
    
        input1.addEventListener("change", (event1)=> {
        input2.addEventListener("change", (event2)=> {
            if(event1.target.value === event2.target.value){
                alert("Senhas iguais")
            }else{
                alert("Senhas não conferem")
            }
        })
        })
    
        //testando validaçao de senha 
            const senhaImpar = document.querySelector("#password")
            const senhaPar = document.querySelector("#confirmPassword")
            const button = document.querySelector("#button")
            
            
            function valida(){
            if(senhaImpar.value === senhaPar.value){
                console.log("Senhas iguais")
            }else{
                console.log("Senhas não conferem")
            }
            }
            button.addEventListener("click", valida)
    
            input1.addEventListener("change", (event1)=> {
            input2.addEventListener("change", (event2)=> {
                if(event1.target.value === event2.target.value){
                console.log("Senhas iguais")
                }else {
                console.log("Senhas não conferem")
                }
            })
            })

            





            
    let primeiraSenha = ""
    senha1.addEventListener('change', (e) => primeiraSenha = e.target.value)
    console.log(primeiraSenha)
    
    function confereSenha(){
        
        console.log()
        if (confirma.value === senha1.value) {
            confirma.setCustomValidity('');
        } else {
            confirma.setCustomValidity('As senhas nao conferem');
        }
        
    }

    function senhaOk() {
        alert("senhas conferem")
    }










    const idade = {
        idadePessoa: prompt(parseInt('digite sua idade: '))
    }

    const VerificaIdade = ({ idadePessoa}) => {
        idadePessoa >= 18 && alert (`Maior de idade ${idadePessoa ?? 'Nenhum numero inserido'}`)
        idadePessoa < 18 && alert (`Menor de idade ${idadePessoa ?? 'nenhum numero inserido'}`)
    }

    VerificaIdade (idade)












    
    

