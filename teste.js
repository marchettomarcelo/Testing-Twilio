const accountSid = 'AC4a8d4a82be1c64d97bfb36c6db39dc31'; 
const authToken = '5fe640da5e2ef43b05caf377beade1e3'; 
const client = require('twilio')(accountSid, authToken); 

 

const template = "Your MOM order of 1 dozen frosted cupcakes has shipped and should be delivered on July 10, 2019. Details: http://www.yummycupcakes.com/"

client.messages 
      .create({ 
         body: 'Nada a ver com nada', 
         from: 'whatsapp:+14155238886',       
         to: 'whatsapp:+5511999228962' 
       }) 
      .then(message => console.log(message)) 
      .done();

// const tempo = ()=>{

//     return new Promise((resolve, reject)=>{

//         setTimeout(()=>{
//             return resolve("oiiiii")
//         }, 2000)
       
//     }) 
// }

// const temporizador = async ()=>{
//     const res1 = await tempo()
//     console.log(res1)
//     const res2 = await tempo()
//     console.log(res2)
//     return "concluido"
// }

// temporizador().then(res => console.log(res))