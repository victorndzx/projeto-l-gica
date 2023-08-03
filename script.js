
function algoritmo60() {
    let fruta1, fruta2, fruta3;
    fruta1 = prompt("Qual fruta adicionar:");
    fruta2 = prompt("Qual fruta adicionar:");
    fruta3 = prompt("Adicione uma cereja para terminar a salada de frutas:");

    if (fruta3.toLowerCase() !== "cereja") {
      document.getElementById("resultado").textContent = "Sua salada de frutas não está pronta! :c";
    } else {
      document.getElementById("resultado").textContent = "Sua salada de frutas está pronta!";
    }
  }
  
  // Chamar a função diretamente quando a página for carregada
// Nesta tradução para JavaScript, usei o método prompt para obter entradas do usuário,
// e o console.log para exibir mensagens de saída. 
//Note que a tradução mantém a estrutura lógica do algoritmo original,
//porém utiliza a sintaxe do JavaScript para realizar as operações equivalentes.