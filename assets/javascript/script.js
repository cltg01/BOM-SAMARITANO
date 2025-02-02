function escolherOpcao(opcao) {
    let storyText = document.getElementById("story-text");
    let storyTexto = document.getElementById("story-texto");
    let storyTexto2 = document.getElementById("story-texto2");
    let buttonsContainer = document.getElementById("buttons-container");
    
    if (opcao === 1) {
        storyText.innerHTML = "Um homem caminhava do Jereissati I para o Jereissati II, quando caiu nas mãos de assaltantes. Estes lhe tiraram as roupas, espancaram-no e se foram, deixando-o quase morto. Você está descendo pela mesma estrada, o que você faz?";
        storyTexto.innerHTML =""
        storyTexto2.innerHTML =" "
        buttonsContainer.innerHTML = '<button onclick="escolherOpcao(-1)">Passo direto</button>' +
                                        '<button onclick="escolherOpcao(2)">Paro para ajuda-lo</button>';
    } else if (opcao === 2) {
        storyText.innerHTML = "Você parou para ajudar. O homem está muito ferido. O que você faz agora?";
        storyTexto.innerHTML =""
        buttonsContainer.innerHTML = '<button onclick="escolherOpcao(-4)">Decido ignorar, pois a situação dele é critica</button>' +
                                     '<button onclick="escolherOpcao(3)">Ajudo ligando para ambulância</button>';
    } else if (opcao === 3) {
        storyText.innerHTML = "Você acionou uma ambulância, mas o homem precisa de uma pessoa para acompanha-lo. O que você faz agora?";
        storyTexto.innerHTML =""
         storyTexto2.innerHTML =" "
        buttonsContainer.innerHTML = '<button onclick="escolherOpcao(4)">O acompanho</button>' +
                                        '<button onclick="escolherOpcao(-2)">Estou atrasado, não posso ajudar</button>';
    } else if (opcao === 4) {
        storyText.innerHTML = "Você chegou no hospital com o homem, mas ele necessita pagar pelo atendimento. O que você faz?";
        storyTexto.innerHTML =""
         storyTexto2.innerHTML =" "
        buttonsContainer.innerHTML = '<button onclick="escolherOpcao(5)">Pago o atendimento e o que ele necessitar</button>' +
                                     '<button onclick="escolherOpcao(-5)">Me recuso a pagar, pois preciso do dinheiro</button>';
    } else if (opcao === 5) {
        storyText.innerHTML = "Excelente! O homem conseguiu atendimento. Parabéns, você salvou uma vida!";
        storyTexto.innerHTML =""
         storyTexto2.innerHTML =" "
        buttonsContainer.innerHTML = '<button onclick="reiniciarJogo()">Tentar novamente</button>';
    }
    else if (opcao === -1) {
        storyText.innerHTML = "Você seguiu viagem, mas poderia ter salvado uma vida. Tente novamente e reveja suas decisões!";
        storyTexto.innerHTML =" "
        storyTexto2.innerHTML =" "
        buttonsContainer.innerHTML = '<button onclick="reiniciarJogo()">Tentar novamente</button>';
    }
    else if (opcao === -2) {
        storyText.innerHTML = "Você seguiu viagem. Infelizmente o homem não conseguiu atendimento no hospital, pois estava sem acompanhante. Tente novamente e reveja suas escolhas!";
        storyTexto.innerHTML =""
         storyTexto2.innerHTML =" "
        buttonsContainer.innerHTML = '<button onclick="reiniciarJogo()">Tentar novamente</button>';
    }
    else if (opcao === -4) {
        storyText.innerHTML = "Você seguiu viagem. Infelizmente o homem morreu, pois ninguém o ajudou. Tente novamente e reveja suas escolhas!";
        storyTexto.innerHTML =""
         storyTexto2.innerHTML =" "
        buttonsContainer.innerHTML = '<button onclick="reiniciarJogo()">Tentar novamente</button>';
    }
    else if (opcao === -5) {
        storyText.innerHTML = "Infelizmente o homem não conseguiu atendimento no hospital, pois estava sem dinheiro para pagar o atendimento. Tente novamente e reveja suas escolhas!";
        storyTexto.innerHTML =""
         storyTexto2.innerHTML =" "
        buttonsContainer.innerHTML = '<button onclick="reiniciarJogo()">Tentar novamente</button>';
    }
}

function reiniciarJogo() {
    location.reload();
}
