// Capy_game_R0_250915.js - Lógica principal do jogo (COMPLETO E CORRIGIDO PARA V/F)

// --- MAPEAMENTO DOS ELEMENTOS HTML ---
let cabecalhoPergunta, perguntaObjetiva, telaInicial, telaPergunta, telaGabarito,
    progressBar, progressText, contextoPergunta, opcoesRespostaDiv,
    areaRespostaAberta, inputResposta, feedbackImediato, btnAcao, btnSalvar,
    navegacaoQuestoes, containerPrincipal, somAcerto, somErro,
    headerIcon, headerTitle, audioPlayerContainer, audioPlayerIframe;

// --- VARIÁVEIS GLOBAIS DO JOGO ---
let perguntaAtual = 0;
let pontuacao = 0;
let respostasDoUsuario; // Armazena a resposta salva ou respondida pelo usuário
let statusDasQuestoes;  // 'nao_respondida', 'salva', 'correta', 'incorreta'
let bancoDeQuestoesAtual;
let arenaAtual = ''; // 'matematica' ou 'portugues'
let nomeArenaAtual = '';

function mapearElementos() {
    cabecalhoPergunta = document.getElementById('cabecalho-pergunta');
    perguntaObjetiva = document.getElementById('pergunta-objetiva');
    telaInicial = document.getElementById('tela-inicial');
    telaPergunta = document.getElementById('tela-pergunta');
    telaGabarito = document.getElementById('tela-gabarito');
    progressBar = document.getElementById('progress-bar');
    progressText = document.getElementById('progress-text');
    contextoPergunta = document.getElementById('contexto-pergunta');
    opcoesRespostaDiv = document.getElementById('opcoes-resposta');
    areaRespostaAberta = document.getElementById('area-resposta-aberta');
    inputResposta = document.getElementById('input-resposta');
    feedbackImediato = document.getElementById('feedback-imediato');
    btnAcao = document.getElementById('btn-acao'); // Botão "Responder"
    btnSalvar = document.getElementById('btn-salvar'); // Botão "Gravar"
    navegacaoQuestoes = document.getElementById('navegacao-questoes');
    containerPrincipal = document.querySelector('.container-principal');
    somAcerto = document.getElementById('som-acerto');
    somErro = document.getElementById('som-erro');
    headerIcon = document.getElementById('header-icon');
    headerTitle = document.getElementById('header-title');
    audioPlayerContainer = document.getElementById('audio-player-container');
    audioPlayerIframe = document.getElementById('audio-player-iframe');
}

// --- FUNÇÕES DE NAVEGAÇÃO E CONTROLE ---
function selecionarArena(tipoArena) {
    if (tipoArena === 'matematica') {
        bancoDeQuestoesAtual = dadosDoQuiz; // Carrega dados de matematica
        nomeArenaAtual = 'Arena dos Números';
        arenaAtual = 'matematica';
        headerIcon.src = 'ICON_Matematica.png';
    } else if (tipoArena === 'portugues') {
        bancoDeQuestoesAtual = dadosDoQuizLP; // Carrega dados de portugues
        nomeArenaAtual = 'Torre das Palavras';
        arenaAtual = 'portugues';
        headerIcon.src = 'ICON_Portugues.png';
    } else if (tipoArena === 'historia') {
        bancoDeQuestoesAtual = questoesHistoria; // Carrega dados de historia
        nomeArenaAtual = 'Castelo do Tempo';
        arenaAtual = 'historia';
        headerIcon.src = 'ICON_Historia.png';
    }

    respostasDoUsuario = new Array(bancoDeQuestoesAtual.length).fill(null);
    statusDasQuestoes = new Array(bancoDeQuestoesAtual.length).fill('nao_respondida');
    
    iniciarJogo();
}

function iniciarJogo() {
    telaInicial.style.display = 'none';
    telaGabarito.style.display = 'none';
    telaPergunta.style.display = 'block';
    
    headerTitle.innerText = `Capy Game - ${nomeArenaAtual}`;
    headerIcon.style.display = 'inline-block'; // Mostra o ícone da arena no cabeçalho

    perguntaAtual = 0;
    pontuacao = 0;
    
    criarNavegadorDeQuestoes();
    irParaQuestao(0);
}

function reiniciarJogo() {
    if (confirm("Você tem certeza que deseja retornar ao menu principal? Todo o progresso na arena atual será perdido.")) {
        telaPergunta.style.display = 'none';
        telaGabarito.style.display = 'none';
        telaInicial.style.display = 'flex';
        headerIcon.style.display = 'none'; // Esconde o ícone no menu principal
        headerTitle.innerText = 'Capy Game'; // Reseta o título
        // Resetar variáveis globais para um novo jogo
        perguntaAtual = 0;
        pontuacao = 0;
        respostasDoUsuario = [];
        statusDasQuestoes = [];
        bancoDeQuestoesAtual = null;
        arenaAtual = '';
        nomeArenaAtual = '';
    }
}

function carregarPergunta() {
    atualizarBarraDeProgresso();
    feedbackImediato.style.display = 'none';
    feedbackImediato.innerHTML = ''; // Limpa feedback anterior
    
    btnAcao.innerText = 'Responder';
    btnAcao.onclick = verificarResposta;
    btnAcao.disabled = false;
    btnSalvar.style.display = 'inline-block';
    btnSalvar.disabled = false;

    const dados = bancoDeQuestoesAtual[perguntaAtual];
    
    cabecalhoPergunta.innerText = `Questão ${perguntaAtual + 1} - "${dados.titulo}"`;
    contextoPergunta.innerText = dados.contexto || ''; // Garante que não apareça "undefined"
    contextoPergunta.style.display = dados.contexto ? 'block' : 'none';

    perguntaObjetiva.innerText = dados.pergunta;

    opcoesRespostaDiv.style.display = 'none';
    areaRespostaAberta.style.display = 'none';
    opcoesRespostaDiv.innerHTML = '';
    inputResposta.value = '';
    inputResposta.disabled = false;
    inputResposta.className = 'resposta-aberta'; // Reseta classes de estilo

    // Lógica para MÚLTIPLA ESCOLHA E VERDADEIRO/FALSO (com múltiplas afirmações)
    if (dados.tipo === 'multipla_escolha' || dados.tipo === 'verdadeiro_falso') {
        opcoesRespostaDiv.style.display = 'block';
        const prefixos = ['a)', 'b)', 'c)', 'd)', 'e)'];
        
        // Se for V/F, exibe as afirmações antes das opções
        if (dados.tipo === 'verdadeiro_falso' && dados.afirmacoes && dados.afirmacoes.length > 0) {
            const afirmacoesContainer = document.createElement('div'); // Usar um div para flexibilidade, sem bullets
            afirmacoesContainer.className = 'afirmacoes-container'; // Nova classe para o container de afirmações
            dados.afirmacoes.forEach((afirmacao, index) => {
                const afirmacaoItem = document.createElement('p'); // Usar <p> para cada afirmação
                afirmacaoItem.className = 'afirmacao-item'; // Classe para cada item
                
                const inputVF = document.createElement('input'); // Cria o input digitável
                inputVF.type = 'text';
                inputVF.maxLength = '1'; // Limita a 1 caractere (V ou F)
                inputVF.className = 'input-vf'; // Classe para estilizar o input
                inputVF.id = `input-vf-${perguntaAtual}-${index}`; // ID único para cada input
                inputVF.placeholder = '_'; // Placeholder para indicar o que digitar
                inputVF.oninput = (event) => {
                    // Converte para maiúscula e permite apenas 'V' ou 'F'
                    let value = event.target.value.toUpperCase();
                    if (value !== 'V' && value !== 'F' && value !== '') {
                        event.target.value = ''; // Limpa se não for V, F ou vazio
                    } else {
                        event.target.value = value;
                    }
                };

                // Recupera o valor do input se a questão já foi salva ou respondida
                if (respostasDoUsuario[perguntaAtual] && respostasDoUsuario[perguntaAtual].inputVFValues) {
                    inputVF.value = respostasDoUsuario[perguntaAtual].inputVFValues[index] || '';
                }

                const textoAfirmacao = document.createElement('span'); // Span para o texto da afirmação
                textoAfirmacao.innerText = `) ${afirmacao}`;

                afirmacaoItem.appendChild(inputVF);
                afirmacaoItem.appendChild(textoAfirmacao); // Adiciona o texto após o input
                afirmacoesContainer.appendChild(afirmacaoItem);
            });
            opcoesRespostaDiv.appendChild(afirmacoesContainer); // Adiciona o container de afirmações
        }        
        
        // Em seguida, exibe as opções (seja de múltipla escolha ou as combinações de V/F)
        dados.opcoes.forEach((opcao, index) => {
            const botao = document.createElement('button');
            botao.innerText = `${prefixos[index]} ${opcao}`;
            botao.onclick = () => {
                // Só permite selecionar se a questão ainda não foi respondida
                if (statusDasQuestoes[perguntaAtual] !== 'correta' && statusDasQuestoes[perguntaAtual] !== 'incorreta') {
                    const botoes = opcoesRespostaDiv.querySelectorAll('button');
                    // Garante que só os botões de opção sejam desmarcados/marcados
                    Array.from(botoes).filter(b => b.parentNode === opcoesRespostaDiv).forEach(b => b.classList.remove('selecionada'));
                    botao.classList.add('selecionada');
                }
            };
            opcoesRespostaDiv.appendChild(botao);
        });
    } else if (dados.tipo === 'aberta') {
        areaRespostaAberta.style.display = 'block';
    }
    
    // Restaurar estado da resposta e feedback se já houver
    if (statusDasQuestoes[perguntaAtual] === 'correta' || statusDasQuestoes[perguntaAtual] === 'incorreta') {
        mostrarFeedbackAnterior();
    } else if (statusDasQuestoes[perguntaAtual] === 'salva') {
        preencherRespostaSalva();
    }
    
    atualizarNavegador();
}

function obterRespostaAtual() {
    const dados = bancoDeQuestoesAtual[perguntaAtual];
    if (dados.tipo === 'multipla_escolha' || dados.tipo === 'verdadeiro_falso') {
        const botaoSelecionado = opcoesRespostaDiv.querySelector('button.selecionada');
        return botaoSelecionado ? botaoSelecionado.innerText.substring(3).trim() : null; // Remove o prefixo (a), b), etc)
    } else if (dados.tipo === 'aberta') {
        return inputResposta.value.trim();
    }
    return null;
}

function verificarResposta() {
    const respostaUsuario = obterRespostaAtual();
    const dados = bancoDeQuestoesAtual[perguntaAtual];
    const respostaCorreta = dados.respostaCorreta;
    let isCorrect = false;

    if (!respostaUsuario) {
        alert("Por favor, selecione uma opção ou digite sua resposta antes de verificar.");
        return;
    }

    // Para questões abertas, uma comparação mais flexível
    if (dados.tipo === 'aberta') {
        const respFormatada = respostaUsuario.toLowerCase().replace(/[.,!?;]/g, '').trim();
        const corretaFormatada = respostaCorreta.toLowerCase().replace(/[.,!?;]/g, '').trim();
        isCorrect = respFormatada === corretaFormatada;
    } else { // Múltipla Escolha e Verdadeiro/Falso (combinação)
        isCorrect = (respostaUsuario === respostaCorreta);
    }

    if (isCorrect) {
        pontuacao++;
        statusDasQuestoes[perguntaAtual] = 'correta';
        somAcerto.play();
        containerPrincipal.classList.add('pulse-correct');
    } else {
        statusDasQuestoes[perguntaAtual] = 'incorreta';
        somErro.play();
        containerPrincipal.classList.add('shake-error');
    }

    // Remove classes de animação após a execução
    containerPrincipal.addEventListener('animationend', () => {
        containerPrincipal.classList.remove('pulse-correct', 'shake-error');
    }, { once: true });

    respostasDoUsuario[perguntaAtual] = respostaUsuario; // Salva a resposta do usuário
    
    mostrarFeedback(isCorrect, dados.justificativa, respostaCorreta, dados.tipo);
    desabilitarControlesDeResposta();
    atualizarNavegador();
}

function salvarResposta() {
    const respostaUsuario = obterRespostaAtual();
    if (!respostaUsuario) {
        alert("Por favor, selecione uma opção ou digite sua resposta para gravar.");
        return;
    }

    if (statusDasQuestoes[perguntaAtual] !== 'correta' && statusDasQuestoes[perguntaAtual] !== 'incorreta') {
        const jaEstavaSalva = statusDasQuestoes[perguntaAtual] === 'salva'; // Verifica se já estava salva
        
        respostasDoUsuario[perguntaAtual] = respostaUsuario;
        statusDasQuestoes[perguntaAtual] = 'salva';
        
        if (!jaEstavaSalva) { // Somente exibe o alerta se não estava salva antes
            alert("Sua resposta foi gravada! Você pode voltar e responder mais tarde.");
        }
        btnSalvar.disabled = true; 
    }
    atualizarNavegador();
}

function mostrarFeedback(isCorrect, justificativa, respostaCorreta, tipoQuestao) {
    feedbackImediato.style.display = 'block';
    let feedbackHTML = `<p><strong>${isCorrect ? 'Correto!' : 'Incorreto!'}</strong></p>`;
    
    if (tipoQuestao === 'aberta') {
        inputResposta.disabled = true;
        inputResposta.classList.add(isCorrect ? 'correta' : 'incorreta');
        feedbackHTML += `<p>Resposta Correta: <strong>${respostaCorreta}</strong></p>`;
    } else { // Múltipla Escolha e Verdadeiro/Falso (combinação)
        const botoes = opcoesRespostaDiv.querySelectorAll('button');
        botoes.forEach(botao => {
            const textoOpcao = botao.innerText.substring(3).trim(); // Pega só o texto da opção, removendo o prefixo
            if (textoOpcao === respostaCorreta) {
                botao.classList.add('correta');
            }
            // Se a opção clicada pelo usuário foi incorreta, marca-a
            if (botao.classList.contains('selecionada') && !isCorrect) {
                botao.classList.add('incorreta');
            }
            botao.disabled = true; // Desabilita todas as opções após resposta
        });
    }

    feedbackHTML += `<p><strong>Justificativa:</strong> ${justificativa}</p>`;
    feedbackImediato.innerHTML = feedbackHTML;
}

function mostrarFeedbackAnterior() {
    const dados = bancoDeQuestoesAtual[perguntaAtual];
    const respostaSalva = respostasDoUsuario[perguntaAtual];
    const isCorrect = (statusDasQuestoes[perguntaAtual] === 'correta');

    feedbackImediato.style.display = 'block';
    let feedbackHTML = `<p><strong>${isCorrect ? 'Correto!' : 'Incorreto!'}</strong></p>`;

    if (dados.tipo === 'aberta') {
        inputResposta.value = respostaSalva;
        inputResposta.disabled = true;
        inputResposta.classList.add(isCorrect ? 'correta' : 'incorreta');
        feedbackHTML += `<p>Sua Resposta: <strong>${respostaSalva}</strong></p>`;
        feedbackHTML += `<p>Resposta Correta: <strong>${dados.respostaCorreta}</strong></p>`;
    } else { // Múltipla Escolha e Verdadeiro/Falso (combinação)
        const botoes = opcoesRespostaDiv.querySelectorAll('button');
        botoes.forEach(botao => {
            const textoOpcao = botao.innerText.substring(3).trim();
            if (textoOpcao === dados.respostaCorreta) {
                botao.classList.add('correta');
            }
            if (textoOpcao === respostaSalva && !isCorrect) { // Se a resposta do usuário foi incorreta
                botao.classList.add('incorreta');
            }
            if (textoOpcao === respostaSalva) { // Marca a que o usuário escolheu
                botao.classList.add('selecionada');
            }
            botao.disabled = true;
        });
        feedbackHTML += `<p>Sua Resposta: <strong>${respostaSalva}</strong></p>`;
    }
    
    feedbackHTML += `<p><strong>Justificativa:</strong> ${dados.justificativa}</p>`;
    feedbackImediato.innerHTML = feedbackHTML;
    desabilitarControlesDeResposta();
}

function preencherRespostaSalva() {
    const dados = bancoDeQuestoesAtual[perguntaAtual];
    const respostaSalva = respostasDoUsuario[perguntaAtual];
    
    if (dados.tipo === 'aberta') {
        inputResposta.value = respostaSalva;
    } else { // Múltipla Escolha e Verdadeiro/Falso (combinação)
        const botoes = opcoesRespostaDiv.querySelectorAll('button');
        botoes.forEach(botao => {
            const textoOpcao = botao.innerText.substring(3).trim();
            if (textoOpcao === respostaSalva) {
                botao.classList.add('selecionada');
            }
        });
    }
    btnSalvar.disabled = true; // Já está salva, desabilita o salvar
    // O botão de responder permanece habilitado
}

function desabilitarControlesDeResposta() {
    btnAcao.disabled = true; // Já respondeu, não pode responder de novo
    btnSalvar.style.display = 'none'; // Não faz sentido salvar depois de responder
    inputResposta.disabled = true; // Desabilita input para abertas
    // As opções de múltipla escolha já são desabilitadas no mostrarFeedback
}


// --- NAVEGAÇÃO ENTRE QUESTÕES ---
function criarNavegadorDeQuestoes() {
    navegacaoQuestoes.innerHTML = '';
    bancoDeQuestoesAtual.forEach((_, index) => {
        const btn = document.createElement('button');
        btn.classList.add('nav-button');
        btn.innerText = index + 1;
        btn.onclick = () => irParaQuestao(index);
        navegacaoQuestoes.appendChild(btn);
    });
}

function atualizarNavegador() {
    const botoesNav = navegacaoQuestoes.querySelectorAll('.nav-button');
    botoesNav.forEach((btn, index) => {
        btn.classList.remove('atual', 'salva', 'correta', 'incorreta');
        if (index === perguntaAtual) {
            btn.classList.add('atual');
        }
        btn.classList.add(statusDasQuestoes[index]); // Aplica a classe de status
    });
}

function irParaQuestao(index) {
    perguntaAtual = index;
    carregarPergunta();
}


// --- PROGRESSO DO QUIZ ---
function atualizarBarraDeProgresso() {
    const totalQuestoes = bancoDeQuestoesAtual.length;
    const respondidas = statusDasQuestoes.filter(s => s === 'correta' || s === 'incorreta').length;
    const porcentagem = (respondidas / totalQuestoes) * 100;
    
    progressBar.style.width = `${porcentagem}%`;
    progressText.innerText = `Questão ${perguntaAtual + 1} de ${totalQuestoes} (${respondidas} respondidas)`;
}


// --- PODCAST E OUTROS MENUS ---
function abrirAudioPlayerPopup(arena) {
    let audioSrc = '';
    if (arena === 'matematica') {
        audioSrc = 'Cap_10_Matematica_podcast_compressed.mp4';
    } else if (arena === 'portugues') {
        audioSrc = 'Cap_10_Portugues_podcast_compressed.mp4';
    } else if (arena === 'historia') {
        audioSrc = 'Cap_06_Historia_podcast_compressed.mp4';
    } else {
        alert("Podcast não disponível para esta arena.");
        return;
    }

    // Definir título baseado na arena
    let tituloArena = '';
    if (arena === 'matematica') {
        tituloArena = 'Matemática';
    } else if (arena === 'portugues') {
        tituloArena = 'Português';
    } else if (arena === 'historia') {
        tituloArena = 'História';
    }

    // Conteúdo HTML para o iframe
    const iframeContent = `
        <!DOCTYPE html>
        <html>
        <head>
            <title>Podcast Capy Game</title>
            <style>
                body { 
                    font-family: sans-serif; 
                    margin: 0; 
                    padding: 10px; 
                    background-color: #f4f7f9; 
                    display: flex; 
                    flex-direction: column; 
                    justify-content: center; 
                    align-items: center; 
                    min-height: calc(100vh - 20px); 
                }
                audio { 
                    width: 90%; 
                    margin-top: 10px; 
                }
                h3 { 
                    color: #34495e; 
                    margin-bottom: 15px;
                }
                .controls {
                    display: flex;
                    gap: 10px;
                    margin-top: 10px;
                    flex-wrap: wrap;
                    justify-content: center;
                }
                .control-btn {
                    background-color: #3498db;
                    color: white;
                    border: none;
                    padding: 8px 12px;
                    border-radius: 5px;
                    cursor: pointer;
                    font-size: 12px;
                    transition: background-color 0.3s;
                }
                .control-btn:hover {
                    background-color: #2980b9;
                }
                .control-btn:active {
                    background-color: #21618c;
                }
            </style>
        </head>
        <body>
            <h3>Podcast de Revisão - ${tituloArena}</h3>
            <audio id="audioPlayer" controls autoplay>
                <source src="${audioSrc}" type="audio/mp4">
                Seu navegador não suporta o elemento de áudio.
            </audio>
            <div class="controls">
                <button class="control-btn" onclick="retroagir30s()">⏪ 30s</button>
                <button class="control-btn" onclick="retroagir10s()">⏪ 10s</button>
                <button class="control-btn" onclick="avancar10s()">10s ⏩</button>
                <button class="control-btn" onclick="avancar30s()">30s ⏩</button>
            </div>
            
            <script>
                const audio = document.getElementById('audioPlayer');
                
                function retroagir30s() {
                    audio.currentTime = Math.max(0, audio.currentTime - 30);
                }
                
                function retroagir10s() {
                    audio.currentTime = Math.max(0, audio.currentTime - 10);
                }
                
                function avancar10s() {
                    audio.currentTime = Math.min(audio.duration, audio.currentTime + 10);
                }
                
                function avancar30s() {
                    audio.currentTime = Math.min(audio.duration, audio.currentTime + 30);
                }
            </script>
        </body>
        </html>
    `;

    // Define o conteúdo do iframe
    audioPlayerIframe.srcdoc = iframeContent;
    audioPlayerContainer.style.display = 'flex'; // Mostra o container do iframe
}

function fecharAudioPlayer() {
    audioPlayerIframe.srcdoc = ''; // Limpa o conteúdo do iframe
    audioPlayerContainer.style.display = 'none'; // Esconde o container
}

function registrarDiscordancia() {
    const questao = bancoDeQuestoesAtual[perguntaAtual];
    const respostaDoAluno = respostasDoUsuario[perguntaAtual] || "Não respondida / Salva sem verificação";
    const status = statusDasQuestoes[perguntaAtual];

    const mensagem = `
        Questão: ${perguntaAtual + 1} - "${questao.titulo}"
        Pergunta: ${questao.pergunta}
        Sua Resposta: ${respostaDoAluno}
        Status: ${status}
        Resposta Correta: ${questao.respostaCorreta}
        Justificativa: ${questao.justificativa}
        
        Por favor, descreva sua discordância:
    `;

    const discordancia = prompt(mensagem);
    if (discordancia) {
        alert("Sua discordância foi registrada e será analisada. Obrigado por sua contribuição!");
        // Aqui você pode adicionar lógica para enviar a discordância para um servidor ou log
        console.log("Discordância registrada:", { questao, respostaDoAluno, status, discordancia });
    }
}

function mostrarGabarito(tipo) {
    telaPergunta.style.display = 'none';
    telaGabarito.style.display = 'block';
    const totalQuestoes = bancoDeQuestoesAtual.length;

    let gabaritoHTML = '';
    let tituloGabarito = '';

    if (tipo === 'parcial') {
        tituloGabarito = 'Gabarito Parcial';
        gabaritoHTML += '<p>Aqui estão as respostas das questões que você já respondeu:</p>';
    } else {
        tituloGabarito = 'Gabarito Total';
        gabaritoHTML += '<p>Aqui estão as respostas de todas as questões:</p>';
    }

    document.getElementById('gabarito-titulo').innerText = tituloGabarito;
    document.getElementById('gabarito-texto').innerHTML = gabaritoHTML;

    const corpoTabela = document.getElementById('corpo-tabela-resultados');
    corpoTabela.innerHTML = ''; // Limpa a tabela anterior

    bancoDeQuestoesAtual.forEach((questao, index) => {
        if (tipo === 'total' || statusDasQuestoes[index] === 'correta' || statusDasQuestoes[index] === 'incorreta') {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${index + 1}</td>
                <td>${questao.titulo}</td>
                <td>${respostasDoUsuario[index] || 'Não respondida'}</td>
                <td>${questao.respostaCorreta}</td>
                <td>${statusDasQuestoes[index] === 'correta' ? 'Correta' : (statusDasQuestoes[index] === 'incorreta' ? 'Incorreta' : 'N/A')}</td>
            `;
            corpoTabela.appendChild(tr);
        }
    });
}

function voltarAoJogo() {
    telaGabarito.style.display = 'none';
    telaPergunta.style.display = 'block';
}

// --- INICIALIZAÇÃO ---
window.onload = () => {
    mapearElementos();
    // Adiciona o event listener para garantir que o mapeamento ocorra após o DOM estar pronto
    
};

// Chamar mapearElementos() no início para garantir que os elementos estejam disponíveis
mapearElementos();


