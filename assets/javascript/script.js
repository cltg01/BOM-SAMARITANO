function escolherOpcao(opcao) {
    let storyText = document.getElementById("story-text");
    let buttonsContainer = document.getElementById("buttons-container");
    
    if (opcao === 1) {
        storyText.innerHTML = "Você seguiu seu caminho, mas perdeu a chance de ajudar alguém. Tente novamente!";
        buttonsContainer.innerHTML = '<button onclick="reiniciarJogo()">Tentar novamente</button>';
    } else if (opcao === 2) {
        storyText.innerHTML = "Você parou para ajudar. O homem está muito ferido. O que você faz agora?";
        buttonsContainer.innerHTML = '<button onclick="escolherOpcao(3)">Levar para uma hospedaria</button>' +
                                     '<button onclick="escolherOpcao(4)">Deixar alguns trocados e seguir viagem</button>';
    } else if (opcao === 3) {
        storyText.innerHTML = "Você levou o homem para uma hospedaria e pagou suas despesas. Você demonstrou grande compaixão!";
        buttonsContainer.innerHTML = '<button onclick="reiniciarJogo()">Jogar novamente</button>';
    } else if (opcao === 4) {
        storyText.innerHTML = "Você deu algum dinheiro, mas o homem ainda precisa de mais ajuda. O que você faz?";
        buttonsContainer.innerHTML = '<button onclick="escolherOpcao(3)">Levar para uma hospedaria</button>' +
                                     '<button onclick="escolherOpcao(5)">Seguir viagem sem ajudar mais</button>';
    } else if (opcao === 5) {
        storyText.innerHTML = "Você seguiu viagem, mas poderia ter feito mais para ajudar. Tente novamente!";
        buttonsContainer.innerHTML = '<button onclick="reiniciarJogo()">Tentar novamente</button>';
    }
}

function reiniciarJogo() {
    location.reload();
}