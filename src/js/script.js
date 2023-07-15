

const key ="8393820d485cf2c1a9e2d0189712dbd2"

function colocarDadosNaTela(dados){
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = dados.main.humidity + "%"
    document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`

}


async function buscarCidade(cidade){
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric `).then(resposta => resposta.json())
   
    colocarDadosNaTela(dados)

}

function cliqueiNoBotao() {
    const cidade = document.querySelector(".input-cidade").value

    buscarCidade(cidade)
}

/*
// Array de URLs das imagens
const imagens = [
    "https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
    "https://images.unsplash.com/photo-1562155618-e1a8bc2eb04f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2691&q=80",
    "https://images.unsplash.com/photo-1561553873-e8491a564fd0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1247&q=80",
    // Adicione mais URLs de imagens aqui, se desejar
  ];
  
  // Função para obter um número aleatório
  function getRandomIndex(max) {
    return Math.floor(Math.random() * max);
  }
  
  // Seleciona um elemento body
  const body = document.querySelector("body");
  
  // Obtém um número aleatório dentro do intervalo do array de imagens
  const randomIndex = getRandomIndex(imagens.length);
  
  // Define a imagem de fundo aleatória
  body.style.backgroundImage = `url('${imagens[randomIndex]}')`;
  */
  

