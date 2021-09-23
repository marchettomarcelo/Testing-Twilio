const fs = require("fs")

const tudo = fs.readFileSync("./user.json")
const string = tudo.toString()
const todosOsUsuarios = JSON.parse(string)

const agora ={
    minute:30,
    hour: 18,
    day:1
}

let Mensageiro = []

// Analiza todos os usuarios da base de dados para chegar se alguem precisa tomar remedio
todosOsUsuarios.forEach(usuario => {
    
    //Acha todos os usuarios de remedios cadastrados em uma conta e retorna um array
    const usuariosDeRemedios = usuario.user.usuáriosRemédio

    // Analiza idividualmente cada usuario de remedio
    usuariosDeRemedios.forEach((usuarioAtual) => {

        // Analiza induvidualmente cada remedio de cada usuario de remedio registrado em uma conta
        const remediosDoUsuarioAtual = usuarioAtual.remedios

        remediosDoUsuarioAtual.forEach((remedio)=>{
            
            // Se bater a mesma hora, minuto e dia da semana, a funcao achou alguel que precissa tomar nesse momento
            if( remedio.quando.hour.includes(agora.hour) && remedio.quando.day.includes(agora.day) && remedio.quando.minute.includes(agora.minute)){
                console.log("yayyyy")
                

                Mensageiro.push({
                    nome: usuarioAtual.nome, 
                    telefone: "99129845",
                    remedioParaTomarImediatamente: {nomeDoRemedio: remedio.nome, dose: remedio.dose}
                })

                console.log(remedio)
            }

        })
    
        console.log('--------------------------------------------------------')
    })

    console.log('------------------------------------------------------------------------------------------------------------')
    

})

console.log(Mensageiro)



// if(1 in Json[0].user.usuáriosRemédio[0].remedios[0].quando.day){
//     console.log("oiiiii")
// }


//console.log(Json[0].user.usuáriosRemédio[0].remedios[0].quando.day)