// --- MAPEAMENTO DOS ELEMENTOS HTML ---
let cabecalhoPergunta, perguntaObjetiva, telaInicial, telaPergunta, telaGabarito, telaCapitulos,
    progressBar, progressText, contextoPergunta, opcoesRespostaDiv,
    areaRespostaAberta, inputResposta, feedbackImediato, btnAcao, btnSalvar,
    navegacaoQuestoes, containerPrincipal, somAcerto, somErro,
    headerIcon, headerTitle, headerCapitulo, arenaIcon, arenaTitle, arenaSubtitle,
    listaCapitulos, audioPlayerContainer, audioPlayer, audioSource, audioTitle, audioSubtitle;

// --- VARIÁVEIS GLOBAIS DO JOGO ---
let perguntaAtual = 0;
let pontuacao = 0;
let respostasDoUsuario; // Armazena a resposta salva ou respondida pelo usuário
let statusDasQuestoes;  // 'nao_respondida', 'salva', 'correta', 'incorreta'
let bancoDeQuestoesAtual;
let arenaAtual = ''; // 'matematica', 'portugues', 'historia'
let capituloAtual = '';
let nomeArenaAtual = '';
let nomeCapituloAtual = '';

// --- ESTRUTURA DE DADOS DOS CAPÍTULOS ---
const estruturaCapitulos = {
    portugues: {
        nome: 'Torre das Palavras',
        icone: 'ICON_Portugues.png',
        descricao: 'Desafios de Português',
        capitulos: [
            {
                id: 'cap10_portugues',
                numero: 10,
                titulo: 'Informação em cores, imagens e números',
                audio: 'Cap_10_Portugues_podcast_compressed.mp4',
                questoes: 'questoesPortugues',
                disponivel: true
            }
        ]
    },
    matematica: {
        nome: 'Arena dos Números',
        icone: 'ICON_Matematica.png',
        descricao: 'Desafios de Matemática',
        capitulos: [
            {
                id: 'cap10_matematica',
                numero: 10,
                titulo: 'Novos Cálculos',
                audio: 'Cap_10_Matematica_podcast_compressed.mp4',
                questoes: 'questoesMatematica',
                disponivel: true
            },
            {
                id: 'cap11_matematica',
                numero: 11,
                titulo: 'Para medir o mundo',
                audio: null,
                questoes: null,
                disponivel: false
            },
            {
                id: 'cap12_matematica',
                numero: 12,
                titulo: 'Muitas multiplicações',
                audio: null,
                questoes: null,
                disponivel: false
            },
            {
                id: 'cap13_matematica',
                numero: 13,
                titulo: 'Qual é a sua massa',
                audio: null,
                questoes: null,
                disponivel: false
            },
            {
                id: 'cap14_matematica',
                numero: 14,
                titulo: 'Dividir para valer',
                audio: null,
                questoes: null,
                disponivel: false
            },
            {
                id: 'cap15_matematica',
                numero: 15,
                titulo: 'A capacidade para medir',
                audio: null,
                questoes: null,
                disponivel: false
            },
            {
                id: 'cap16_matematica',
                numero: 16,
                titulo: 'Matemática em 2D e 3D',
                audio: null,
                questoes: null,
                disponivel: false
            }
        ]
    },
    ciencias: {
        nome: 'Laboratório da Descoberta',
        icone: 'ICON_Ciencias.png',
        descricao: 'Desafios de Ciências',
        capitulos: [
            {
                id: 'cap10_ciencias',
                numero: 10,
                titulo: 'Seres humanos e outros animais',
                audio: null,
                questoes: null,
                disponivel: false
            },
            {
                id: 'cap11_ciencias',
                numero: 11,
                titulo: 'O planeta terra',
                audio: null,
                questoes: null,
                disponivel: false
            },
            {
                id: 'cap12_ciencias',
                numero: 12,
                titulo: 'O dia e a noite',
                audio: null,
                questoes: null,
                disponivel: false
            },
            {
                id: 'cap13_ciencias',
                numero: 13,
                titulo: 'Lua, estrela e planetas',
                audio: null,
                questoes: null,
                disponivel: false
            },
            {
                id: 'cap14_ciencias',
                numero: 14,
                titulo: 'O solo e sua importância',
                audio: null,
                questoes: null,
                disponivel: false
            },
            {
                id: 'cap15_ciencias',
                numero: 15,
                titulo: 'Características do solo',
                audio: null,
                questoes: null,
                disponivel: false
            },
            {
                id: 'cap16_ciencias',
                numero: 16,
                titulo: 'Usos do solo',
                audio: null,
                questoes: null,
                disponivel: false
            }
        ]
    },
    historia: {
        nome: 'Castelo do Tempo',
        icone: 'ICON_Historia.png',
        descricao: 'Desafios de História',
        capitulos: [
            {
                id: 'cap06_historia',
                numero: 6,
                titulo: 'Da formação à reforma das cidades',
                audio: 'Cap_06_Historia_podcast_compressed.mp3',
                questoes: 'questoesHistoria',
                disponivel: true
            }
        ]
    },
    geografia: {
        nome: 'Mundo das Aventuras',
        icone: 'ICON_Geografia.png',
        descricao: 'Desafios de Geografia',
        capitulos: [
            {
                id: 'cap01_geografia',
                numero: 1,
                titulo: 'Em breve',
                audio: null,
                questoes: null,
                disponivel: false
            }
        ]
    },
    english: {
        nome: 'Castle of Words',
        icone: 'ICON_English.png',
        descricao: 'English Challenges',
        capitulos: [
            {
                id: 'cap01_english',
                numero: 1,
                titulo: 'Coming Soon',
                audio: null,
                questoes: null,
                disponivel: false
            }
        ]
    },
    math: {
        nome: 'Numbers Kingdom',
        icone: 'ICON_Math.png',
        descricao: 'Math Challenges',
        capitulos: [
            {
                id: 'cap01_math',
                numero: 1,
                titulo: 'Coming Soon',
                audio: null,
                questoes: null,
                disponivel: false
            }
        ]
    }
};

// --- ELEMENTOS DO DOM ---
function inicializar() {
    telaInicial = document.getElementById('tela-inicial');
    telaPergunta = document.getElementById('tela-pergunta');
    telaGabarito = document.getElementById('tela-gabarito');
    telaCapitulos = document.getElementById('tela-capitulos');
    progressBar = document.getElementById('progress-bar');
    progressText = document.getElementById('progress-text');
    contextoPergunta = document.getElementById('contexto-pergunta');
    cabecalhoPergunta = document.getElementById('cabecalho-pergunta');
    perguntaObjetiva = document.getElementById('pergunta-objetiva');
    opcoesRespostaDiv = document.getElementById('opcoes-resposta');
    areaRespostaAberta = document.getElementById('area-resposta-aberta');
    inputResposta = document.getElementById('input-resposta');
    feedbackImediato = document.getElementById('feedback-imediato');
    btnAcao = document.getElementById('btn-acao');
    btnSalvar = document.getElementById('btn-salvar');
    navegacaoQuestoes = document.getElementById('navegacao-questoes');
    containerPrincipal = document.querySelector('.container-principal');
    somAcerto = document.getElementById('som-acerto');
    somErro = document.getElementById('som-erro');
    headerIcon = document.getElementById('header-icon');
    headerTitle = document.getElementById('header-title');
    headerCapitulo = document.getElementById('header-capitulo');
    arenaIcon = document.getElementById('arena-icon');
    arenaTitle = document.getElementById('arena-title');
    arenaSubtitle = document.getElementById('arena-subtitle');
    listaCapitulos = document.getElementById('lista-capitulos');
    audioPlayerContainer = document.getElementById('audio-player-container');
    audioPlayer = document.getElementById('audio-player');
    audioSource = document.getElementById('audio-source');
    audioTitle = document.getElementById('audio-title');
    audioSubtitle = document.getElementById('audio-subtitle');
}

// --- FUNÇÕES DE NAVEGAÇÃO ENTRE TELAS ---
function selecionarArena(tipoArena) {
    arenaAtual = tipoArena;
    const arena = estruturaCapitulos[tipoArena];
    
    nomeArenaAtual = arena.nome;
    arenaIcon.src = arena.icone;
    arenaTitle.textContent = arena.nome;
    
    // Mostrar tela de capítulos
    telaInicial.style.display = 'none';
    telaCapitulos.style.display = 'block';
    
    // Gerar lista de capítulos
    gerarListaCapitulos(arena.capitulos);
}

function gerarListaCapitulos(capitulos) {
    listaCapitulos.innerHTML = '';
    
    capitulos.forEach(capitulo => {
        const capituloCard = document.createElement('div');
        capituloCard.className = `capitulo-card ${capitulo.disponivel ? 'disponivel' : 'indisponivel'}`;
        
        capituloCard.innerHTML = `
            <div class="capitulo-numero">Cap. ${capitulo.numero}</div>
            <div class="capitulo-info">
                <h3>${capitulo.titulo}</h3>
                <p>${capitulo.disponivel ? 'Clique para jogar!' : 'Em breve...'}</p>
            </div>
            <div class="capitulo-acoes">
                ${capitulo.disponivel ? `
                    <button class="btn-secundario" onclick="abrirAudioPlayerPopup('${capitulo.id}')">🎧 Ouvir</button>
                    <button class="btn-principal" onclick="iniciarCapitulo('${capitulo.id}')">🎮 Jogar!</button>
                ` : `
                    <span class="status-indisponivel">🔒 ${capitulo.titulo === 'Em breve' || capitulo.titulo === 'Coming Soon' ? 'Bloqueado' : 'Em breve'}</span>
                `}
            </div>
        `;
        
        listaCapitulos.appendChild(capituloCard);
    });
}

function iniciarCapitulo(capituloId) {
    console.log('iniciarCapitulo chamado com:', capituloId);
    
    const arena = estruturaCapitulos[arenaAtual];
    if (!arena) {
        console.error('Arena não encontrada:', arenaAtual);
        alert('Erro: Arena não encontrada!');
        return;
    }
    
    const capitulo = arena.capitulos.find(cap => cap.id === capituloId);
    if (!capitulo) {
        console.error('Capítulo não encontrado:', capituloId);
        alert('Erro: Capítulo não encontrado!');
        return;
    }
    
    if (!capitulo.disponivel) {
        alert('Este capítulo ainda não está disponível!');
        return;
    }
    
    capituloAtual = capituloId;
    nomeCapituloAtual = capitulo.titulo;
    
    // Definir banco de questões baseado no capítulo
    switch(capituloId) {
        case 'cap10_matematica':
            if (typeof dadosDoQuiz === 'undefined') {
                alert('Erro: Questões de Matemática não carregadas!');
                return;
            }
            bancoDeQuestoesAtual = dadosDoQuiz;
            break;
        case 'cap10_portugues':
            if (typeof dadosDoQuizLP === 'undefined') {
                alert('Erro: Questões de Português não carregadas!');
                return;
            }
            bancoDeQuestoesAtual = dadosDoQuizLP;
            break;
        case 'cap06_historia':
            if (typeof questoesHistoria === 'undefined') {
                alert('Erro: Questões de História não carregadas!');
                return;
            }
            bancoDeQuestoesAtual = questoesHistoria;
            break;
        default:
            alert('Questões ainda não disponíveis para este capítulo!');
            return;
    }
    
    console.log('Banco de questões carregado:', bancoDeQuestoesAtual.length, 'questões');
    
    // Inicializar arrays de controle
    respostasDoUsuario = new Array(bancoDeQuestoesAtual.length).fill(null);
    statusDasQuestoes = new Array(bancoDeQuestoesAtual.length).fill('nao_respondida');
    
    // Inicializar o jogo
    iniciarJogo();
}

function selecionarCapitulo(capituloId) {
    // Função mantida para compatibilidade
    iniciarCapitulo(capituloId);
}

function voltarParaArenas() {
    telaCapitulos.style.display = 'none';
    telaInicial.style.display = 'flex';
    arenaAtual = '';
    nomeArenaAtual = '';
}

function voltarParaCapitulos() {
    if (confirm("Você tem certeza que deseja voltar aos capítulos? Todo o progresso atual será perdido.")) {
        telaPergunta.style.display = 'none';
        telaGabarito.style.display = 'none';
        telaCapitulos.style.display = 'block';
        
        // Reset das variáveis do jogo
        perguntaAtual = 0;
        pontuacao = 0;
        respostasDoUsuario = [];
        statusDasQuestoes = [];
        bancoDeQuestoesAtual = null;
        capituloAtual = '';
        nomeCapituloAtual = '';
    }
}

function iniciarJogo() {
    telaCapitulos.style.display = 'none';
    telaGabarito.style.display = 'none';
    telaPergunta.style.display = 'block';
    
    // Configurar cabeçalho
    headerTitle.textContent = nomeArenaAtual;
    headerCapitulo.textContent = nomeCapituloAtual;
    headerIcon.src = estruturaCapitulos[arenaAtual].icone;
    headerIcon.style.display = 'inline-block';

    perguntaAtual = 0;
    pontuacao = 0;
    
    criarNavegadorDeQuestoes();
    irParaQuestao(0);
}

// --- FUNÇÕES DO PLAYER DE ÁUDIO ---
let audioPlayerMinimizado = false;
let audioPlayerPosicao = { x: 20, y: 20 };

function abrirAudioPlayerPopup(capituloId = null) {
    let audioFile = '';
    let titulo = 'Podcast de Revisão';
    let subtitulo = '';
    
    if (capituloId) {
        // Chamado da tela de capítulos
        const arena = estruturaCapitulos[arenaAtual];
        const capitulo = arena.capitulos.find(cap => cap.id === capituloId);
        
        if (capitulo && capitulo.audio) {
            audioFile = capitulo.audio;
            titulo = arena.nome;
            subtitulo = `Cap. ${capitulo.numero} - ${capitulo.titulo}`;
        }
    } else {
        // Chamado durante o jogo
        const arena = estruturaCapitulos[arenaAtual];
        const capitulo = arena.capitulos.find(cap => cap.id === capituloAtual);
        
        if (capitulo && capitulo.audio) {
            audioFile = capitulo.audio;
            titulo = arena.nome;
            subtitulo = `Cap. ${capitulo.numero} - ${capitulo.titulo}`;
        }
    }
    
    if (!audioFile) {
        alert('Áudio não disponível para este capítulo.');
        return;
    }
    
    // Usar o player moderno se disponível
    if (window.modernAudioPlayer) {
        window.modernAudioPlayer.open(audioFile, titulo, subtitulo);
        console.log('Player moderno aberto:', audioFile);
        return;
    }
    
    // Fallback para o player antigo
    audioTitle.textContent = titulo;
    audioSubtitle.textContent = subtitulo;
    audioSource.src = audioFile;
    audioPlayer.load();
    
    // Mostrar player como popup não-modal
    audioPlayerContainer.style.display = 'block';
    
    // Restaurar posição se foi movido
    audioPlayerContainer.style.top = audioPlayerPosicao.y + 'px';
    audioPlayerContainer.style.right = audioPlayerPosicao.x + 'px';
    
    // Restaurar estado minimizado
    if (audioPlayerMinimizado) {
        document.getElementById('audio-player-content').style.display = 'none';
        document.querySelector('#audio-player-container button[onclick="minimizarAudioPlayer()"]').textContent = '□';
    } else {
        document.getElementById('audio-player-content').style.display = 'block';
        document.querySelector('#audio-player-container button[onclick="minimizarAudioPlayer()"]').textContent = '−';
    }
    
    // Inicializar funcionalidade de arrastar (apenas uma vez)
    if (!audioPlayerContainer.hasAttribute('data-drag-initialized')) {
        inicializarArrastarPlayer();
        audioPlayerContainer.setAttribute('data-drag-initialized', 'true');
    }
}

function fecharAudioPlayer() {
    audioPlayerContainer.style.display = 'none';
    audioPlayer.pause();
    audioPlayerMinimizado = false;
}

function minimizarAudioPlayer() {
    const audioContent = document.getElementById('audio-player-content');
    const minimizeBtn = document.querySelector('#audio-player-container button[onclick="minimizarAudioPlayer()"]');
    
    if (audioPlayerMinimizado) {
        // Expandir
        audioContent.style.display = 'block';
        minimizeBtn.textContent = '−';
        audioPlayerMinimizado = false;
    } else {
        // Minimizar
        audioContent.style.display = 'none';
        minimizeBtn.textContent = '□';
        audioPlayerMinimizado = true;
    }
}

// --- FUNÇÕES DO PLAYER DE ÁUDIO AVANÇADO ---
function togglePlayPause() {
    const playPauseBtn = document.getElementById('play-pause-btn');
    
    if (audioPlayer.paused) {
        audioPlayer.play();
        playPauseBtn.textContent = '⏸';
    } else {
        audioPlayer.pause();
        playPauseBtn.textContent = '▶';
    }
}

function updateProgress() {
    if (audioPlayer.duration && !isNaN(audioPlayer.duration)) {
        const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
        const progressBar = document.getElementById('progress-bar');
        
        if (progressBar) {
            progressBar.style.width = progress + '%';
        }
        
        // Atualizar tempo atual e total
        const currentTimeEl = document.getElementById('current-time');
        const totalTimeEl = document.getElementById('total-time');
        
        if (currentTimeEl) {
            currentTimeEl.textContent = formatTime(audioPlayer.currentTime);
        }
        if (totalTimeEl) {
            totalTimeEl.textContent = formatTime(audioPlayer.duration);
        }
    }
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs.toString().padStart(2, '0')}`;
}

function seekAudio(event) {
    const progressContainer = document.getElementById('progress-container');
    if (!progressContainer || !audioPlayer.duration || isNaN(audioPlayer.duration)) {
        console.log('Seek não disponível - duração:', audioPlayer.duration);
        return;
    }
    
    const rect = progressContainer.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const percentage = Math.max(0, Math.min(1, clickX / rect.width));
    const newTime = percentage * audioPlayer.duration;
    
    console.log('Seek para:', formatTime(newTime), '(' + (percentage * 100).toFixed(1) + '%)');
    
    // Definir novo tempo
    audioPlayer.currentTime = newTime;
    
    // Forçar atualização imediata da interface
    setTimeout(() => {
        updateProgress();
    }, 100);
}

function changeVolume(value) {
    audioPlayer.volume = value / 100;
    document.getElementById('volume-display').textContent = value + '%';
}

function retrocederAudio(segundos) {
    audioPlayer.currentTime = Math.max(0, audioPlayer.currentTime - segundos);
}

function avancarAudio(segundos) {
    audioPlayer.currentTime = Math.min(audioPlayer.duration || 0, audioPlayer.currentTime + segundos);
}

// Controle de velocidade
let velocidadeAtual = 1.0;
const velocidades = [0.5, 0.75, 1.0, 1.25, 1.5, 2.0];
let indiceVelocidade = 2; // Começa em 1.0x

function toggleVelocidade() {
    indiceVelocidade = (indiceVelocidade + 1) % velocidades.length;
    velocidadeAtual = velocidades[indiceVelocidade];
    audioPlayer.playbackRate = velocidadeAtual;
    
    const velocidadeBtn = document.getElementById('velocidade-btn');
    velocidadeBtn.textContent = velocidadeAtual + 'x';
}

// Event listeners para o player de áudio
function configurarEventosAudio() {
    audioPlayer.addEventListener('timeupdate', updateProgress);
    audioPlayer.addEventListener('loadedmetadata', function() {
        console.log('Áudio carregado - duração:', formatTime(audioPlayer.duration));
        document.getElementById('total-time').textContent = formatTime(audioPlayer.duration);
        document.getElementById('current-time').textContent = '0:00';
    });
    audioPlayer.addEventListener('ended', function() {
        document.getElementById('play-pause-btn').textContent = '▶';
    });
    audioPlayer.addEventListener('seeked', function() {
        console.log('Seek concluído para:', formatTime(audioPlayer.currentTime));
        updateProgress();
    });
    audioPlayer.addEventListener('canplay', function() {
        console.log('Áudio pronto para reprodução');
    });
    
    // Adicionar event listener para a barra de progresso
    const progressContainer = document.getElementById('progress-container');
    if (progressContainer) {
        progressContainer.addEventListener('click', seekAudio);
        console.log('Event listener da barra de progresso configurado');
    }
}

function inicializarArrastarPlayer() {
    const dragHandle = document.getElementById('audio-drag-handle');
    const audioContainer = document.getElementById('audio-player-container');
    let isDragging = false;
    let startX, startY, initialX, initialY;
    
    dragHandle.addEventListener('mousedown', function(e) {
        isDragging = true;
        startX = e.clientX;
        startY = e.clientY;
        
        const rect = audioContainer.getBoundingClientRect();
        initialX = rect.left;
        initialY = rect.top;
        
        dragHandle.style.cursor = 'grabbing';
        e.preventDefault();
    });
    
    document.addEventListener('mousemove', function(e) {
        if (!isDragging) return;
        
        const deltaX = e.clientX - startX;
        const deltaY = e.clientY - startY;
        
        const newX = initialX + deltaX;
        const newY = initialY + deltaY;
        
        // Limitar às bordas da tela
        const maxX = window.innerWidth - audioContainer.offsetWidth;
        const maxY = window.innerHeight - audioContainer.offsetHeight;
        
        const boundedX = Math.max(0, Math.min(newX, maxX));
        const boundedY = Math.max(0, Math.min(newY, maxY));
        
        audioContainer.style.left = boundedX + 'px';
        audioContainer.style.top = boundedY + 'px';
        audioContainer.style.right = 'auto';
        
        // Salvar posição
        audioPlayerPosicao.x = window.innerWidth - boundedX - audioContainer.offsetWidth;
        audioPlayerPosicao.y = boundedY;
    });
    
    document.addEventListener('mouseup', function() {
        if (isDragging) {
            isDragging = false;
            dragHandle.style.cursor = 'move';
        }
    });
}

// --- FUNÇÕES DO JOGO (QUESTÕES) ---
function criarNavegadorDeQuestoes() {
    navegacaoQuestoes.innerHTML = '';
    
    // Criar estrutura de linhas (3 linhas de 10 questões cada)
    const totalQuestoes = bancoDeQuestoesAtual.length;
    const questoesPorLinha = 10;
    const totalLinhas = Math.ceil(totalQuestoes / questoesPorLinha);
    
    for (let linha = 0; linha < totalLinhas; linha++) {
        const linhaDiv = document.createElement('div');
        linhaDiv.className = 'linha-navegacao';
        
        const inicioLinha = linha * questoesPorLinha;
        const fimLinha = Math.min(inicioLinha + questoesPorLinha, totalQuestoes);
        
        for (let i = inicioLinha; i < fimLinha; i++) {
            const botao = document.createElement('button');
            botao.textContent = i + 1;
            botao.className = 'nav-questao';
            botao.onclick = () => irParaQuestao(i);
            linhaDiv.appendChild(botao);
        }
        
        navegacaoQuestoes.appendChild(linhaDiv);
    }
    
    atualizarNavegadorDeQuestoes();
}

function atualizarNavegadorDeQuestoes() {
    const botoes = navegacaoQuestoes.querySelectorAll('.nav-questao');
    botoes.forEach((botao, index) => {
        // Reset classes
        botao.className = 'nav-questao';
        
        // Adicionar classe baseada no status
        switch(statusDasQuestoes[index]) {
            case 'correta':
                botao.classList.add('correta');
                break;
            case 'incorreta':
                botao.classList.add('incorreta');
                break;
            case 'salva':
                botao.classList.add('salva');
                break;
        }
        
        // Destacar questão atual
        if (index === perguntaAtual) {
            botao.classList.add('atual');
        }
    });
}

function irParaQuestao(indice) {
    if (indice < 0 || indice >= bancoDeQuestoesAtual.length) return;
    
    perguntaAtual = indice;
    const questao = bancoDeQuestoesAtual[perguntaAtual];
    
    // Atualizar progresso
    progressText.textContent = `Questão ${perguntaAtual + 1} de ${bancoDeQuestoesAtual.length}`;
    progressBar.style.width = `${((perguntaAtual + 1) / bancoDeQuestoesAtual.length) * 100}%`;
    
    // Mostrar questão
    cabecalhoPergunta.textContent = questao.titulo;
    contextoPergunta.textContent = questao.contexto || '';
    contextoPergunta.style.display = questao.contexto ? 'block' : 'none';
    perguntaObjetiva.textContent = questao.pergunta;
    
    // Limpar feedback
    feedbackImediato.style.display = 'none';
    
    // Configurar tipo de questão
    if (questao.tipo === 'multipla_escolha') {
        mostrarQuestaoMultiplaEscolha(questao);
    } else if (questao.tipo === 'verdadeiro_falso') {
        mostrarQuestaoVerdadeiroFalso(questao);
    } else if (questao.tipo === 'aberta' || questao.tipo === 'opiniao') {
        mostrarQuestaoAberta(questao);
    }
    
    // Restaurar resposta salva
    if (respostasDoUsuario[perguntaAtual] !== null) {
        restaurarResposta();
    }
    
    // Atualizar navegador
    atualizarNavegadorDeQuestoes();
    
    // Configurar botões
    atualizarBotoesAcao();
}

function mostrarQuestaoMultiplaEscolha(questao) {
    opcoesRespostaDiv.style.display = 'block';
    areaRespostaAberta.style.display = 'none';
    
    opcoesRespostaDiv.innerHTML = '';
    const letras = ['a)', 'b)', 'c)', 'd)', 'e)', 'f)'];
    
    questao.opcoes.forEach((opcao, index) => {
        const div = document.createElement('div');
        div.className = 'opcao-resposta opcao-multipla-escolha';
        div.innerHTML = `
            <input type="radio" id="opcao${index}" name="resposta" value="${index}" style="display: none;">
            <label for="opcao${index}" class="opcao-caixa">
                <strong>${letras[index]}</strong> ${opcao}
            </label>
        `;
        opcoesRespostaDiv.appendChild(div);
    });
}

function mostrarQuestaoVerdadeiroFalso(questao) {
    opcoesRespostaDiv.style.display = 'block';
    areaRespostaAberta.style.display = 'none';
    
    opcoesRespostaDiv.innerHTML = '';
    
    // Mostrar afirmações com caixas V/F
    if (questao.afirmacoes) {
        const afirmacoesDiv = document.createElement('div');
        afirmacoesDiv.className = 'afirmacoes-container';
        afirmacoesDiv.innerHTML = '<h4>Analise as afirmações e marque V (Verdadeiro) ou F (Falso):</h4>';
        
        questao.afirmacoes.forEach((afirmacao, index) => {
            const div = document.createElement('div');
            div.className = 'afirmacao-item afirmacao-caixa-branca';
            div.innerHTML = `
                <div class="afirmacao-header">
                    <span class="afirmacao-numero">${['I', 'II', 'III', 'IV'][index]}.</span>
                    <div class="vf-boxes">
                        <label class="vf-option">
                            <input type="checkbox" class="vf-checkbox" data-afirmacao="${index}" data-valor="V"> V
                        </label>
                        <label class="vf-option">
                            <input type="checkbox" class="vf-checkbox" data-afirmacao="${index}" data-valor="F"> F
                        </label>
                    </div>
                </div>
                <div class="afirmacao-texto">${afirmacao}</div>
            `;
            afirmacoesDiv.appendChild(div);
        });
        
        opcoesRespostaDiv.appendChild(afirmacoesDiv);
        
        // Mostrar opções de resposta (sequências)
        const opcoesDiv = document.createElement('div');
        opcoesDiv.className = 'opcoes-vf-container';
        opcoesDiv.innerHTML = '<h4>Escolha a sequência correta:</h4>';
        const letras = ['a)', 'b)', 'c)', 'd)', 'e)', 'f)'];
        
        questao.opcoes.forEach((opcao, index) => {
            const div = document.createElement('div');
            div.className = 'opcao-resposta opcao-vf-escolha';
            div.innerHTML = `
                <input type="radio" id="opcao${index}" name="resposta" value="${opcao}" style="display: none;">
                <label for="opcao${index}" class="opcao-caixa">
                    <strong>${letras[index]}</strong> ${opcao}
                </label>
            `;
            opcoesDiv.appendChild(div);
        });
        
        opcoesRespostaDiv.appendChild(opcoesDiv);
        
        // Adicionar event listeners para as caixas V/F
        document.querySelectorAll('.vf-checkbox').forEach(checkbox => {
            checkbox.addEventListener('change', function() {
                const afirmacao = this.dataset.afirmacao;
                const valor = this.dataset.valor;
                
                // Desmarcar a outra opção da mesma afirmação
                document.querySelectorAll(`[data-afirmacao="${afirmacao}"]`).forEach(cb => {
                    if (cb !== this) cb.checked = false;
                });
            });
        });
    }
}

function mostrarQuestaoAberta(questao) {
    opcoesRespostaDiv.style.display = 'none';
    areaRespostaAberta.style.display = 'block';
    inputResposta.value = '';
    inputResposta.placeholder = questao.tipo === 'opiniao' ? 
        'Digite sua opinião aqui...' : 'Digite sua resposta aqui...';
}

function restaurarResposta() {
    const resposta = respostasDoUsuario[perguntaAtual];
    const questao = bancoDeQuestoesAtual[perguntaAtual];
    
    if (questao.tipo === 'multipla_escolha') {
        const radio = document.querySelector(`input[name="resposta"][value="${resposta}"]`);
        if (radio) radio.checked = true;
    } else if (questao.tipo === 'verdadeiro_falso') {
        const radio = document.querySelector(`input[name="resposta"][value="${resposta}"]`);
        if (radio) radio.checked = true;
    } else if (questao.tipo === 'aberta' || questao.tipo === 'opiniao') {
        inputResposta.value = resposta || '';
    }
}

function salvarResposta() {
    const questao = bancoDeQuestoesAtual[perguntaAtual];
    let resposta = null;
    
    if (questao.tipo === 'multipla_escolha' || questao.tipo === 'verdadeiro_falso') {
        const radioSelecionado = document.querySelector('input[name="resposta"]:checked');
        if (radioSelecionado) {
            resposta = radioSelecionado.value;
        }
    } else if (questao.tipo === 'aberta' || questao.tipo === 'opiniao') {
        resposta = inputResposta.value.trim();
    }
    
    if (resposta === null || resposta === '') {
        alert('Por favor, selecione ou digite uma resposta antes de gravar.');
        return;
    }
    
    respostasDoUsuario[perguntaAtual] = resposta;
    statusDasQuestoes[perguntaAtual] = 'salva';
    
    atualizarNavegadorDeQuestoes();
    atualizarBotoesAcao();
    
    alert('Resposta gravada com sucesso!');
}

function verificarResposta() {
    const questao = bancoDeQuestoesAtual[perguntaAtual];
    let resposta = null;
    
    if (questao.tipo === 'multipla_escolha' || questao.tipo === 'verdadeiro_falso') {
        const radioSelecionado = document.querySelector('input[name="resposta"]:checked');
        if (radioSelecionado) {
            resposta = radioSelecionado.value;
        }
    } else if (questao.tipo === 'aberta' || questao.tipo === 'opiniao') {
        resposta = inputResposta.value.trim();
    }
    
    if (resposta === null || resposta === '') {
        alert('Por favor, selecione ou digite uma resposta antes de verificar.');
        return;
    }
    
    respostasDoUsuario[perguntaAtual] = resposta;
    
    // Verificar se está correta
    let estaCorreta = false;
    
    if (questao.tipo === 'multipla_escolha') {
        estaCorreta = parseInt(resposta) === questao.respostaCorreta;
    } else if (questao.tipo === 'verdadeiro_falso') {
        estaCorreta = resposta === questao.respostaCorreta;
    } else if (questao.tipo === 'aberta' || questao.tipo === 'opiniao') {
        estaCorreta = true; // Questões abertas são sempre "corretas"
    }
    
    // Atualizar status
    statusDasQuestoes[perguntaAtual] = estaCorreta ? 'correta' : 'incorreta';
    
    if (estaCorreta) {
        pontuacao++;
    }
    
    // Mostrar feedback
    mostrarFeedback(estaCorreta, questao);
    
    // Tocar som
    if (estaCorreta && somAcerto) {
        somAcerto.play().catch(() => {});
    } else if (!estaCorreta && somErro) {
        somErro.play().catch(() => {});
    }
    
    atualizarNavegadorDeQuestoes();
    atualizarBotoesAcao();
}

function mostrarFeedback(estaCorreta, questao) {
    let mensagem = '';
    
    if (questao.tipo === 'aberta' || questao.tipo === 'opiniao') {
        let respostaEsperada = '';
        if (questao.respostaEsperada) {
            respostaEsperada = `<br><strong>Resposta esperada:</strong> ${questao.respostaEsperada}`;
        } else if (questao.respostaCorreta && questao.respostaCorreta !== 'Resposta aberta') {
            respostaEsperada = `<br><strong>Resposta esperada:</strong> ${questao.respostaCorreta}`;
        }
        
        mensagem = `
            <div class="feedback-correto">
                <strong>✓ Resposta registrada!</strong><br>
                ${questao.explicacao || 'Sua resposta foi salva com sucesso.'}
                ${respostaEsperada}
            </div>
        `;
    } else {
        // Aplicar feedback visual nas caixas
        aplicarFeedbackVisual(estaCorreta, questao);
        
        if (estaCorreta) {
            mensagem = `
                <div class="feedback-correto">
                    <strong>✓ Correto!</strong><br>
                    ${questao.explicacao || questao.justificativa || 'Parabéns!'}
                </div>
            `;
        } else {
            let respostaCorretaTexto = '';
            if (questao.tipo === 'multipla_escolha') {
                respostaCorretaTexto = questao.opcoes[questao.respostaCorreta];
            } else {
                respostaCorretaTexto = questao.respostaCorreta;
            }
            
            mensagem = `
                <div class="feedback-incorreto">
                    <strong>✗ Incorreto</strong><br>
                    <strong>Resposta correta:</strong> ${respostaCorretaTexto}<br>
                    ${questao.explicacao || questao.justificativa || ''}
                </div>
            `;
        }
    }
    
    feedbackImediato.innerHTML = mensagem;
    feedbackImediato.style.display = 'block';
}

function aplicarFeedbackVisual(estaCorreta, questao) {
    const opcoesCaixas = document.querySelectorAll('.opcao-caixa');
    
    if (questao.tipo === 'multipla_escolha') {
        const respostaSelecionada = document.querySelector('input[name="resposta"]:checked');
        if (respostaSelecionada) {
            const indexSelecionado = parseInt(respostaSelecionada.value);
            
            opcoesCaixas.forEach((caixa, index) => {
                if (index === indexSelecionado) {
                    // Caixa selecionada
                    caixa.classList.add(estaCorreta ? 'feedback-correto-caixa' : 'feedback-incorreto-caixa');
                } else if (index === questao.respostaCorreta && !estaCorreta) {
                    // Mostrar resposta correta se errou
                    caixa.classList.add('feedback-correto-caixa');
                }
            });
        }
    } else if (questao.tipo === 'verdadeiro_falso') {
        const respostaSelecionada = document.querySelector('input[name="resposta"]:checked');
        if (respostaSelecionada) {
            const valorSelecionado = respostaSelecionada.value;
            
            opcoesCaixas.forEach((caixa) => {
                const input = caixa.previousElementSibling;
                if (input && input.value === valorSelecionado) {
                    // Caixa selecionada
                    caixa.classList.add(estaCorreta ? 'feedback-correto-caixa' : 'feedback-incorreto-caixa');
                } else if (input && input.value === questao.respostaCorreta && !estaCorreta) {
                    // Mostrar resposta correta se errou
                    caixa.classList.add('feedback-correto-caixa');
                }
            });
        }
    }
}

function atualizarBotoesAcao() {
    const status = statusDasQuestoes[perguntaAtual];
    
    if (status === 'correta' || status === 'incorreta') {
        btnAcao.textContent = 'Próxima';
        btnAcao.onclick = proximaQuestao;
        btnSalvar.style.display = 'none';
    } else {
        btnAcao.textContent = 'Responder';
        btnAcao.onclick = verificarResposta;
        btnSalvar.style.display = 'inline-block';
    }
}

function proximaQuestao() {
    if (perguntaAtual < bancoDeQuestoesAtual.length - 1) {
        irParaQuestao(perguntaAtual + 1);
    } else {
        // Fim do jogo
        mostrarResultadoFinal();
    }
}

function mostrarResultadoFinal() {
    const totalQuestoes = bancoDeQuestoesAtual.length;
    const questoesCorretas = statusDasQuestoes.filter(status => status === 'correta').length;
    const percentual = Math.round((questoesCorretas / totalQuestoes) * 100);
    
    let mensagem = `
        Parabéns! Você completou o ${nomeCapituloAtual}!
        
        Resultado: ${questoesCorretas}/${totalQuestoes} questões corretas (${percentual}%)
        
        O que deseja fazer agora?
    `;
    
    if (confirm(mensagem + '\n\nClique OK para ver o gabarito completo ou Cancelar para voltar aos capítulos.')) {
        mostrarGabarito('total');
    } else {
        voltarParaCapitulos();
    }
}

// --- FUNÇÕES DE GABARITO ---
function mostrarGabarito(tipo) {
    telaPergunta.style.display = 'none';
    telaGabarito.style.display = 'block';
    
    let tituloGabarito = tipo === 'parcial' ? 'Gabarito Parcial' : 'Gabarito Total';
    let textoGabarito = tipo === 'parcial' ? 
        'Aqui estão as respostas das questões que você já respondeu:' :
        'Aqui estão as respostas de todas as questões:';
    
    document.getElementById('gabarito-titulo').textContent = tituloGabarito;
    document.getElementById('gabarito-texto').textContent = textoGabarito;
    
    const corpoTabela = document.getElementById('corpo-tabela-resultados');
    corpoTabela.innerHTML = '';
    
    bancoDeQuestoesAtual.forEach((questao, index) => {
        if (tipo === 'total' || statusDasQuestoes[index] === 'correta' || statusDasQuestoes[index] === 'incorreta') {
            const tr = document.createElement('tr');
            
            let respostaCorretaTexto = '';
            if (questao.tipo === 'multipla_escolha') {
                respostaCorretaTexto = questao.opcoes[questao.respostaCorreta];
            } else {
                respostaCorretaTexto = questao.respostaCorreta || 'Resposta aberta';
            }
            
            let statusTexto = '';
            switch(statusDasQuestoes[index]) {
                case 'correta': statusTexto = '✓ Correta'; break;
                case 'incorreta': statusTexto = '✗ Incorreta'; break;
                case 'salva': statusTexto = '💾 Salva'; break;
                default: statusTexto = '⚪ Não respondida';
            }
            
            tr.innerHTML = `
                <td>${index + 1}</td>
                <td>${questao.titulo}</td>
                <td>${respostasDoUsuario[index] || 'Não respondida'}</td>
                <td>${respostaCorretaTexto}</td>
                <td>${statusTexto}</td>
            `;
            corpoTabela.appendChild(tr);
        }
    });
}

function voltarAoJogo() {
    telaGabarito.style.display = 'none';
    telaPergunta.style.display = 'block';
}

// --- FUNÇÃO DE DISCORDÂNCIA ---
function registrarDiscordancia() {
    const questao = bancoDeQuestoesAtual[perguntaAtual];
    const respostaDoAluno = respostasDoUsuario[perguntaAtual] || "Não respondida";
    const status = statusDasQuestoes[perguntaAtual];

    const mensagem = `
Questão: ${perguntaAtual + 1} - "${questao.titulo}"
Pergunta: ${questao.pergunta}
Sua Resposta: ${respostaDoAluno}
Status: ${status}
Resposta Correta: ${questao.respostaCorreta}
Justificativa: ${questao.justificativa || questao.explicacao}

Por favor, descreva sua discordância:`;

    const discordancia = prompt(mensagem);
    if (discordancia) {
        alert("Sua discordância foi registrada e será analisada. Obrigado por sua contribuição!");
        console.log("Discordância registrada:", { questao, respostaDoAluno, status, discordancia });
    }
}

// --- INICIALIZAÇÃO ---
// --- FUNÇÃO PARA GERAR ARENAS DINAMICAMENTE ---
function gerarArenas() {
    const telaSelecaoArena = document.getElementById('tela-selecao-arena');
    if (!telaSelecaoArena) return;
    
    telaSelecaoArena.innerHTML = '';
    
    // Ordem específica das arenas
    const ordemArenas = ['portugues', 'matematica', 'ciencias', 'historia', 'geografia', 'english', 'math'];
    
    ordemArenas.forEach(arenaId => {
        const arena = estruturaCapitulos[arenaId];
        if (!arena) return;
        
        const arenaCard = document.createElement('div');
        arenaCard.className = 'arena-card';
        
        arenaCard.innerHTML = `
            <img src="${arena.icone}" alt="Ícone de ${arena.nome}">
            <h3>${arena.nome}</h3>
            <p>${arena.descricao}</p>
            <div>
                <button class="btn-principal" onclick="selecionarArena('${arenaId}')">Entrar na Arena</button>
            </div>
        `;
        
        telaSelecaoArena.appendChild(arenaCard);
    });
}

window.onload = () => {
    inicializar();
    gerarArenas();
    configurarEventosAudio();
};

// Chamar gerarArenas() no início para garantir que as arenas sejam criadas
document.addEventListener('DOMContentLoaded', gerarArenas);
