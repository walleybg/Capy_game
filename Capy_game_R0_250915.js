// Capy_game_R0_250915.js - Lógica principal do jogo (COMPLETO E CORRIGIDO PARA V/F)

// --- MAPEAMENTO DOS ELEMENTOS HTML ---
let cabecalhoPergunta, perguntaObjetiva, telaInicial, telaPergunta, telaGabarito,
    progressBar, progressText, contextoPergunta, opcoesRespostaDiv,
    areaRespostaAberta, inputResposta, feedbackImediato, btnAcao, btnSalvar,
    navegacaoQuestoes, containerPrincipal, somAcerto, somErro,
    headerIcon, headerTitle;

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
}

// --- FUNÇÕES DE NAVEGAÇÃO E CONTROLE ---
function selecionarArena(tipoArena) {
    if (tipoArena === 'matematica') {
        bancoDeQuestoesAtual = dadosDoQuizMT; // Carrega dados de matematica
        nomeArenaAtual = 'Arena dos Números';
        arenaAtual = 'matematica';
        headerIcon.src = 'ICON_Matematica.png';
    } else if (tipoArena === 'portugues') {
        bancoDeQuestoesAtual = dadosDoQuizLP; // Carrega dados de portugues
        nomeArenaAtual = 'Torre das Palavras';
        arenaAtual = 'portugues';
        headerIcon.src = 'ICON_Portugues.png';
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
        audioSrc = 'Cap_10_Matematica_podcast.mp4';
    } else if (arena === 'portugues') {
        audioSrc = 'Cap_10_Portugues_podcast.mp4';
    } else {
        alert("Podcast não disponível para esta arena.");
        return;
    }

    const popupWidth = 600;
    const popupHeight = 150;
    const left = (window.screen.width / 2) - (popupWidth / 2);
    const top = (window.screen.height / 2) - (popupHeight / 2);

    const audioWindow = window.open('', 'CapyPodcastPlayer', `width=${popupWidth},height=${popupHeight},top=${top},left=${left},scrollbars=no,resizable=no`);
    
    audioWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Podcast Capy Game</title>
            <style>
                body { font-family: sans-serif; margin: 0; padding: 10px; background-color: #f4f7f9; display: flex; flex-direction: column; justify-content: center; align-items: center; min-height: calc(100vh - 20px); }
                audio { width: 90%; margin-top: 10px; }
                h3 { color: #34495e; }
            </style>
        </head>
        <body>
            <h3>Podcast de Revisão - ${arena === 'matematica' ? 'Matemática' : 'Português'}</h3>
            <audio controls autoplay>
                <source src="${audioSrc}" type="audio/mp4">
                Seu navegador não suporta o elemento de áudio.
            </audio>
            <p><small>Reprodução automática. Você pode fechar esta janela a qualquer momento.</small></p>
        </body>
        </html>
    `);
    audioWindow.document.close();
}

function registrarDiscordancia() {
    const questao = bancoDeQuestoesAtual[perguntaAtual];
    const respostaDoAluno = respostasDoUsuario[perguntaAtual] || "Não respondida / Salva sem verificação";
    const status = statusDasQuestoes[perguntaAtual];

    const mensagem = `
        Questão: ${perguntaAtual + 1} - "${questao.titulo}"
        Pergunta: ${questao.pergunta}
        Sua Resposta: ${respostaDoAluno}
        Status: ${status === 'correta' ? 'Correta' : (status === 'incorreta' ? 'Incorreta' : status)}
        Resposta Correta: ${questao.respostaCorreta}
        Justificativa Oficial: ${questao.justificativa}

        Digite seu questionamento ou discórdia abaixo:
        ------------------------------------------
    `;
    const questionamento = prompt("Por favor, digite seu questionamento sobre esta questão:\n\n" + mensagem);

    if (questionamento) {
        alert("Seu questionamento foi registrado! Agradecemos seu feedback.");
        // Em um sistema real, você enviaria isso para um backend ou salvaria em algum lugar.
        console.log("Questionamento da Questão " + (perguntaAtual + 1) + ":", questionamento);
    } else {
        alert("Questionamento cancelado.");
    }
}

function mostrarGabarito(tipo) {
    telaPergunta.style.display = 'none';
    telaGabarito.style.display = 'block';
    
    const corpoTabela = document.getElementById('corpo-tabela-resultados');
    corpoTabela.innerHTML = '';
    
    let totalAcertos = 0;
    let totalRespondidas = 0;
    
    const questoesParaExibir = tipo === 'total' ? bancoDeQuestoesAtual : bancoDeQuestoesAtual.filter((_, i) => statusDasQuestoes[i] !== 'nao_respondida');

    questoesParaExibir.forEach((questao, indexNaLista) => {
        let indexOriginal = bancoDeQuestoesAtual.indexOf(questao); // Encontra o índice original da questão
        const status = statusDasQuestoes[indexOriginal];
        const respostaDoAluno = respostasDoUsuario[indexOriginal] || "Não respondida";
        
        const tr = document.createElement('tr');
        let statusTexto = '';
        let statusClass = '';

        if (status === 'correta') {
            statusTexto = 'Correta';
            statusClass = 'correta';
            totalAcertos++;
            totalRespondidas++;
        } else if (status === 'incorreta') {
            statusTexto = 'Incorreta';
            statusClass = 'incorreta';
            totalRespondidas++;
        } else if (status === 'salva') {
            statusTexto = 'Salva (Não Confirmada)';
            statusClass = 'salva';
        } else {
            statusTexto = 'Não Respondida';
            statusClass = '';
        }

        tr.innerHTML = `
            <td>${indexOriginal + 1}</td>
            <td>${questao.titulo}</td>
            <td>${respostaDoAluno}</td>
            <td>${questao.respostaCorreta}</td>
            <td class="${statusClass}">${statusTexto}</td>
        `;
        corpoTabela.appendChild(tr);
    });

    let percentualAcerto = 0;
    if (totalRespondidas > 0) {
        percentualAcerto = (totalAcertos / totalRespondidas) * 100;
    } else if (tipo === 'total' && bancoDeQuestoesAtual.length > 0) {
         percentualAcerto = (totalAcertos / bancoDeQuestoesAtual.length) * 100;
    }
    
    document.getElementById('gabarito-titulo').innerText = `Gabarito ${tipo === 'parcial' ? 'Parcial' : 'Total'}`;
    
    const textoResultado = document.getElementById('gabarito-texto');
    if (tipo === 'parcial') {
        textoResultado.innerHTML = `Você acertou <strong>${totalAcertos}</strong> questões de um total de <strong>${totalRespondidas}</strong> respondidas, atingindo <strong>${percentualAcerto.toFixed(2)}%</strong> até o momento.`;
    } else { // total
        textoResultado.innerHTML = `Você acertou <strong>${totalAcertos}</strong> questões de um total de <strong>${bancoDeQuestoesAtual.length}</strong> questões, totalizando <strong>${(totalAcertos / bancoDeQuestoesAtual.length * 100).toFixed(2)}%</strong> de acerto total.`;
    }
}


function voltarAoJogo() {
    telaGabarito.style.display = 'none';
    telaPergunta.style.display = 'block';
    // Garante que a questão atual seja carregada novamente com o estado correto
    carregarPergunta(); 
}

// --- INICIALIZAÇÃO ---
document.addEventListener('DOMContentLoaded', () => {
    mapearElementos();
    telaInicial.style.display = 'flex';
    telaPergunta.style.display = 'none';
    telaGabarito.style.display = 'none';
    headerIcon.style.display = 'none'; // Garante que o ícone esteja escondido na tela inicial

});
