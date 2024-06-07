let btnEstrai = document.getElementById("gioca");

let cartaPlayer = document.querySelector("#you span")

let cartaCpu = document.querySelector("#cpu span")


let h2Message = document.querySelector("h2")


btnEstrai.addEventListener("click", estrai)

function estrai() {
    let cartaPlayerRandom = Math.floor(Math.random() * 10) + 1;
    let cartaCpuRandom = Math.floor(Math.random() * 10) + 1;
    console.log(cartaPlayer)
    console.log(cartaCpu)

    if(cartaPlayerRandom > cartaCpuRandom) {
        cartaPlayer.textContent = cartaPlayerRandom;
        cartaCpu.textContent = cartaCpuRandom
        h2Message.textContent = "Complimenti, hai vinto!";    
    } else if(cartaPlayerRandom == cartaCpuRandom) {
        cartaPlayer.textContent = cartaPlayerRandom;
        cartaCpu.textContent = cartaCpuRandom;
        h2Message.textContent = "Pareggio"
        
    } else{
        cartaPlayer.textContent = cartaPlayerRandom;
        cartaCpu.textContent = cartaCpuRandom;
        h2Message.textContent = "Hai perso"
        

    }
   
}
