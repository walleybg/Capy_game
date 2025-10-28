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
            },
            {
                id: 'cap11_portugues',
                numero: 11,
                titulo: 'Notícias do mundo selvagem',
                audio: 'Cap_11_Portugues_podcast.mp3',
                questoes: 'dadosDoQuizPortugues11',
                disponivel: true
            },
            {
                id: 'cap12_portugues',
                numero: 12,
                titulo: 'No meio da gataria',
                audio: 'Cap_12_Portugues_podcast.mp3',
                questoes: 'dadosDoQuizPortugues12',
                disponivel: true
            },
            {
                id: 'cap13_portugues',
                numero: 13,
                titulo: 'Jogando os dados',
                audio: 'Cap_13_Portugues.mp3',
                questoes: 'dadosDoQuizPortugues13',
                video: 'Cap_13_Portugues_Video.mp4',
                disponivel: true
            },
            {
                id: 'cap14_portugues',
                numero: 14,
                titulo: 'De cabeça para baixo',
                audio: 'Cap_14_Portugues.mp3',
                questoes: 'dadosDoQuizPortugues14',
                video: 'Cap_14_Portugues_Video.mp4',
                mapaMental: 'Cap_14_Portugues_Mindmap.png',
                disponivel: true
            },
            {
                id: 'cap15_portugues',
                numero: 15,
                titulo: 'Quais são os meus direitos',
                audio: "Cap_12_Ciencias_podcast.mp3",
                questoes: "dadosDoQuizCiencias12",
                disponivel: false
            },
            {
                id: 'cap16_portugues',
                numero: 16,
                titulo: 'Nas linha da rede',
                audio: "Cap_12_Ciencias_podcast.mp3",
                questoes: "dadosDoQuizCiencias12",
                disponivel: false
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
                audio: 'Cap_11_Matematica_podcast.mp3',
                questoes: 'dadosDoQuizMatematica11',
                disponivel: true
            },
            {
                id: 'cap12_matematica',
                numero: 12,
                titulo: 'Muitas multiplicações',
                audio: 'Cap_12_Matematica_podcast.mp3',
                questoes: 'dadosDoQuizMatematica12',
                disponivel: true
            },
            {
                id: 'cap13_matematica',
                numero: 13,
                titulo: 'Qual é a sua massa',
                audio: 'Cap_13_Matematica.mp3',
                questoes: 'dadosDoQuizMatematica13',
                video: 'Cap_13_Matematica_Video.mp4',
                mapaMental: 'Cap_13_Matematica_Mindmap.png',
                disponivel: true
            },
            {
                id: 'cap14_matematica',
                numero: 14,
                titulo: 'Dividir para valer',
                audio: 'Cap_14_Matematica.mp3',
                questoes: 'dadosDoQuizMatematica14',
                video: 'Cap_14_Matematica_Video.mp4',
                mapaMental: 'Cap_14_Matematica_Mindmap.png',
                disponivel: true
            },
            {
                id: 'cap15_matematica',
                numero: 14,
                titulo: 'Dividir para valer',
                audio: "Cap_12_Ciencias_podcast.mp3",
                questoes: "dadosDoQuizCiencias12",
                disponivel: false
            },
            {
                id: 'cap15_matematica',
                numero: 15,
                titulo: 'A capacidade para medir',
                audio: "Cap_12_Ciencias_podcast.mp3",
                questoes: "dadosDoQuizCiencias12",
                disponivel: false
            },
            {
                id: 'cap16_matematica',
                numero: 16,
                titulo: 'Matemática em 2D e 3D',
                audio: "Cap_12_Ciencias_podcast.mp3",
                questoes: "dadosDoQuizCiencias12",
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
                audio: 'Cap_10_Ciencias_podcast.mp3',
                questoes: 'dadosDoQuizCiencias',
                disponivel: true
            },
            {
                id: 'cap11_ciencias',
                numero: 11,
                titulo: 'O planeta terra',
                audio: 'Cap_11_Ciencias_podcast.mp3',
                questoes: 'dadosDoQuizCiencias11',
                disponivel: true
            },
            {
                id: 'cap12_ciencias',
                numero: 12,
                titulo: 'O dia e a noite',
                audio: 'Cap_12_Ciencias_podcast.mp3',
                questoes: 'dadosDoQuizCiencias12',
                questoes2: 'dadosDoQuizCiencias12Jogo2',
                video: 'Cap_12_Ciencias_video.mp4',
                mapaMental: 'Cap12_Mindmap-1.png',
                disponivel: true
            },
            {
                id: 'cap13_ciencias',
                numero: 13,
                titulo: 'Lua, estrelas e planetas',
                audio: 'Cap_13_Ciencias.mp3',
                questoes: 'dadosDoQuizCiencias13',
                video: 'Cap_13_Ciencias_Video.mp4',
                mapaMental: 'Cap_13_Ciencias_Mindmap.png',
                disponivel: true
            },
            {
                id: 'cap14_ciencias',
                numero: 14,
                titulo: 'O solo e sua importância',
                audio: 'Cap_14_Ciencias.mp3',
                questoes: 'dadosDoQuizCiencias14',
                video: 'Cap_14_Ciencias_Video.mp4',
                mapaMental: 'Cap_14_Ciencias_Mindmap.png',
                disponivel: true
            },
            {
                id: 'cap15_ciencias',
                numero: 15,
                titulo: 'Características do solo',
                audio: "Cap_12_Ciencias_podcast.mp3",
                questoes: "dadosDoQuizCiencias12",
                disponivel: false
            },
            {
                id: 'cap16_ciencias',
                numero: 16,
                titulo: 'Usos do solo',
                audio: "Cap_12_Ciencias_podcast.mp3",
                questoes: "dadosDoQuizCiencias12",
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
            },
            {
                id: 'cap07_historia',
                numero: 7,
                titulo: 'Vida e trabalho nos espaços urbanos',
                audio: 'Cap_07_Historia.mp3',
                questoes: 'dadosDoQuizHistoriaCap7',
                video: 'Cap_07_Historia_Video.mp4',
                mapaMental: 'Cap_07_Historia_Mindmap.png',
                disponivel: true
            },
            {
                id: 'cap08_historia',
                numero: 8,
                titulo: 'Um Brasil de patrimônios',
                audio: "Cap_12_Ciencias_podcast.mp3",
                questoes: "dadosDoQuizCiencias12",
                disponivel: false
            }
        ]
    },
    geografia: {
        nome: 'Mundo das Aventuras',
        icone: 'ICON_Geografia.png',
        descricao: 'Desafios de Geografia',
        capitulos: [
            {
                id: 'cap06_geografia',
                numero: 6,
                titulo: 'De onde vêm e para onde vão as coisas que consumimos?',
                audio: 'Cap_06_Geografia_podcast.mp3',
                questoes: 'dadosDoQuizGeografia',
                disponivel: true
            },
            {
                id: 'cap07_geografia',
                numero: 7,
                titulo: 'De gota em gota, de grão em grão',
                audio: 'Cap_07_Geografia.mp3',
                questoes: 'dadosDoQuizGeografiaCap7',
                video: 'Cap_07_Geografia_Video.mp4',
                mapaMental: 'Cap_07_Geografia_Mindmap.png',
                disponivel: true
            },
            {
                id: 'cap08_geografia',
                numero: 8,
                titulo: 'Vegetação e ar: uma conexão vital',
                audio: "Cap_12_Ciencias_podcast.mp3",
                questoes: "dadosDoQuizCiencias12",
                disponivel: false
            }
        ]
    },
    ingles: {
        nome: 'Castle of Words',
        icone: 'ICON_Ingles.png',
        descricao: 'English Challenges',
        capitulos: [
            {
                id: 'unit05_ingles',
                numero: 5,
                titulo: 'Helping Verbs, Suffixes, Modal Verbs',
                audio: 'Unit_05_Ingles_podcast.mp3',
                jogos: [
                    {
                        id: 'jogo1',
                        titulo: 'Jogo 1',
                        questoes: 'dadosDoQuizIngles',
                        disponivel: true
                    },
                    {
                        id: 'jogo2',
                        titulo: 'Jogo 2',
                        questoes: 'dadosDoQuizIngles2',
                        disponivel: true
                    }
                ],
                disponivel: true
            },
            {
                id: 'unit06_ingles',
                numero: 6,
                titulo: 'Adverbs, Past Tense, Irregular Verbs',
                audio: 'Unit_06_Ingles.mp3',
                video: 'Unit_06_Video.mp4',
                mapaMental: 'Unit_06_Mindmap.png',
                questoes: 'dadosDoQuizInglesUnit6',
                questoes2: 'dadosDoQuizIngles06Jogo2',
                disponivel: true
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
                audio: "Cap_12_Ciencias_podcast.mp3",
                questoes: "dadosDoQuizCiencias12",
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
    
    // Configurar botões de zoom do mapa mental
    const zoomInBtn = document.getElementById('zoom-in');
    const zoomOutBtn = document.getElementById('zoom-out');
    const zoomResetBtn = document.getElementById('zoom-reset');
    
    if (zoomInBtn) {
        zoomInBtn.addEventListener('click', () => zoomMapaMental(1.2));
    }
    if (zoomOutBtn) {
        zoomOutBtn.addEventListener('click', () => zoomMapaMental(0.8));
    }
    if (zoomResetBtn) {
        zoomResetBtn.addEventListener('click', resetMapaMental);
    }
    
    gerarArenas();
}

// --- NAVEGAÇÃO ENTRE TELAS ---
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
        
        // Interface especial para capítulos com 4 módulos ou 3 módulos
        if (capitulo.id === 'cap12_ciencias' || capitulo.id === 'cap13_ciencias' || capitulo.id === 'cap14_ciencias' || capitulo.id === 'unit06_ingles' || capitulo.id === 'cap07_historia' || capitulo.id === 'cap07_geografia' || capitulo.id === 'cap13_portugues' || capitulo.id === 'cap13_matematica' || capitulo.id === 'cap14_portugues' || capitulo.id === 'cap14_matematica') {
            const prefixo = capitulo.id.includes('unit') ? 'Unit' : 'Cap.';
            capituloCard.innerHTML = `
                <div class="capitulo-numero">${prefixo} ${capitulo.numero}</div>
                <div class="capitulo-info">
                    <h3>${capitulo.titulo}</h3>
                    <p>${capitulo.disponivel ? 'Escolha uma opção para explorar!' : 'Em breve...'}</p>
                </div>
                <div class="capitulo-acoes">
                    ${capitulo.disponivel ? `
                        <div class="modulos-container">
                            <button class="btn-modulo" onclick="abrirVideoPlayer('${capitulo.id}')">🎬 1. Video</button>
                            <button class="btn-modulo" onclick="abrirMapaMental('${capitulo.id}')">🗺️ 2. Mind Map</button>
                            <button class="btn-modulo" onclick="abrirAudioPlayerPopup('${capitulo.id}')">🎧 3. Podcast</button>
                            <button class="btn-principal" onclick="iniciarCapitulo('${capitulo.id}')">🎮 4. Game</button>
                            ${capitulo.questoes2 ? `<button class="btn-principal" onclick="iniciarCapituloJogo2('${capitulo.id}')">🎮 5. Game 2</button>` : ''}
                        </div>
                    ` : `
                        <span class="status-indisponivel">🔒 Em breve</span>
                    `}
                </div>
            `;
        }
        // Verificar se o capítulo tem jogos (estrutura especial para inglês)
        else if (capitulo.jogos && capitulo.jogos.length > 0) {
            capituloCard.innerHTML = `
                <div class="capitulo-numero">Unit ${capitulo.numero}</div>
                <div class="capitulo-info">
                    <h3>${capitulo.titulo}</h3>
                    <p>${capitulo.disponivel ? 'Escolha um jogo para jogar!' : 'Em breve...'}</p>
                </div>
                <div class="capitulo-acoes">
                    ${capitulo.disponivel ? `
                        <button class="btn-secundario" onclick="abrirAudioPlayerPopup('${capitulo.id}')">🎧 Ouvir</button>
                        <div class="jogos-container">
                            ${capitulo.jogos.map(jogo => `
                                <button class="btn-jogo ${jogo.disponivel ? 'disponivel' : 'indisponivel'}" 
                                        onclick="iniciarJogo('${capitulo.id}', '${jogo.id}')"
                                        ${!jogo.disponivel ? 'disabled' : ''}>
                                    🎮 ${jogo.titulo}
                                </button>
                            `).join('')}
                        </div>
                    ` : `
                        <span class="status-indisponivel">🔒 Em breve</span>
                    `}
                </div>
            `;
        } else {
            // Estrutura padrão para outros capítulos
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
        }
        
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
        case 'cap11_portugues':
            if (typeof dadosDoQuizPortugues11 === 'undefined') {
                alert('Erro: Questões de Português 11 não carregadas!');
                return;
            }
            bancoDeQuestoesAtual = dadosDoQuizPortugues11;
            break;
        case 'cap12_portugues':
            if (typeof dadosDoQuizPortugues12 === 'undefined') {
                alert('Erro: Questões de Português 12 não carregadas!');
                return;
            }
            bancoDeQuestoesAtual = dadosDoQuizPortugues12;
            break;
        case 'cap13_portugues':
            if (typeof dadosDoQuizPortugues13 === 'undefined') {
                alert('Erro: Questões de Português 13 não carregadas!');
                return;
            }
            bancoDeQuestoesAtual = dadosDoQuizPortugues13;
            break;
        case 'cap14_portugues':
            if (typeof dadosDoQuizPortugues14 === 'undefined') {
                alert('Erro: Questões de Português 14 não carregadas!');
                return;
            }
            bancoDeQuestoesAtual = dadosDoQuizPortugues14;
            break;
        case 'cap06_historia':
            if (typeof questoesHistoria === 'undefined') {
                alert('Erro: Questões de História não carregadas!');
                return;
            }
            bancoDeQuestoesAtual = questoesHistoria;
            break;
        case 'cap10_ciencias':
            if (typeof dadosDoQuizCiencias === 'undefined') {
                alert('Erro: Questões de Ciências não carregadas!');
                return;
            }
            bancoDeQuestoesAtual = dadosDoQuizCiencias;
            break;
        case 'cap11_ciencias':
            if (typeof dadosDoQuizCiencias11 === 'undefined') {
                alert('Erro: Questões de Ciências 11 não carregadas!');
                return;
            }
            bancoDeQuestoesAtual = dadosDoQuizCiencias11;
            break;
        case 'cap12_ciencias':
            if (typeof dadosDoQuizCiencias12 === 'undefined') {
                alert('Erro: Questões de Ciências 12 não carregadas!');
                return;
            }
            bancoDeQuestoesAtual = dadosDoQuizCiencias12;
            break;
        case 'cap13_ciencias':
            if (typeof dadosDoQuizCiencias13 === 'undefined') {
                alert('Erro: Questões de Ciências 13 não carregadas!');
                return;
            }
            bancoDeQuestoesAtual = dadosDoQuizCiencias13;
            break;
        case 'cap14_ciencias':
            if (typeof dadosDoQuizCiencias14 === 'undefined') {
                alert('Erro: Questões de Ciências 14 não carregadas!');
                return;
            }
            bancoDeQuestoesAtual = dadosDoQuizCiencias14;
            break;
        case 'cap11_matematica':
            if (typeof dadosDoQuizMatematica11 === 'undefined') {
                alert('Erro: Questões de Matemática 11 não carregadas!');
                return;
            }
            bancoDeQuestoesAtual = dadosDoQuizMatematica11;
            break;
        case 'cap12_matematica':
            if (typeof dadosDoQuizMatematica12 === 'undefined') {
                alert('Erro: Questões de Matemática 12 não carregadas!');
                return;
            }
            bancoDeQuestoesAtual = dadosDoQuizMatematica12;
            break;
        case 'cap13_matematica':
            if (typeof dadosDoQuizMatematica13 === 'undefined') {
                alert('Erro: Questões de Matemática 13 não carregadas!');
                return;
            }
            bancoDeQuestoesAtual = dadosDoQuizMatematica13;
            break;
        case 'cap14_matematica':
            if (typeof dadosDoQuizMatematica14 === 'undefined') {
                alert('Erro: Questões de Matemática 14 não carregadas!');
                return;
            }
            bancoDeQuestoesAtual = dadosDoQuizMatematica14;
            break;
        case 'cap06_geografia':
            if (typeof dadosDoQuizGeografia === 'undefined') {
                alert('Erro: Questões de Geografia não carregadas!');
                return;
            }
            bancoDeQuestoesAtual = dadosDoQuizGeografia;
            break;
        case 'unit06_ingles':
            if (typeof dadosDoQuizInglesUnit6 === 'undefined') {
                alert('Erro: Questões de Inglês Unit 6 não carregadas!');
                return;
            }
            bancoDeQuestoesAtual = dadosDoQuizInglesUnit6;
            break;
        case 'cap07_historia':
            if (typeof dadosDoQuizHistoriaCap7 === 'undefined') {
                alert('Erro: Questões de História Capítulo 7 não carregadas!');
                return;
            }
            bancoDeQuestoesAtual = dadosDoQuizHistoriaCap7;
            break;
        case 'cap07_geografia':
            if (typeof dadosDoQuizGeografiaCap7 === 'undefined') {
                alert('Erro: Questões de Geografia Capítulo 7 não carregadas!');
                return;
            }
            bancoDeQuestoesAtual = dadosDoQuizGeografiaCap7;
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
    iniciarJogoInterface();
}

// Função para iniciar o Game 2 (40 questões)
function iniciarCapituloJogo2(capituloId) {
    console.log('iniciarCapituloJogo2 chamado com:', capituloId);
    
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
    
    if (!capitulo.questoes2) {
        alert('Game 2 ainda não está disponível para este capítulo!');
        return;
    }
    
    capituloAtual = capituloId;
    nomeCapituloAtual = capitulo.titulo + ' - Game 2';
    
    // Definir banco de questões do Game 2 baseado no capítulo
    switch(capituloId) {
        case 'unit06_ingles':
            if (typeof dadosDoQuizIngles06Jogo2 === 'undefined') {
                alert('Erro: Questões do Game 2 não carregadas!');
                return;
            }
            bancoDeQuestoesAtual = dadosDoQuizIngles06Jogo2;
            break;
        
        case 'cap12_ciencias':
            if (typeof dadosDoQuizCiencias12Jogo2 === 'undefined') {
                alert('Erro: Questões do Game 2 de Ciências 12 não carregadas!');
                return;
            }
            bancoDeQuestoesAtual = dadosDoQuizCiencias12Jogo2;
            break;

        default:
            alert('Game 2 ainda não disponível para este capítulo!');
            return;
    }
    
    console.log('Banco de questões do Game 2 carregado:', bancoDeQuestoesAtual.length, 'questões');
    
    // Inicializar arrays de controle
    respostasDoUsuario = new Array(bancoDeQuestoesAtual.length).fill(null);
    statusDasQuestoes = new Array(bancoDeQuestoesAtual.length).fill('nao_respondida');
    
    // Inicializar o jogo
    iniciarJogoInterface();
}

function iniciarJogo(capituloId, jogoId) {
    console.log('iniciarJogo chamado com:', capituloId, jogoId);
    
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
    
    const jogo = capitulo.jogos.find(j => j.id === jogoId);
    if (!jogo) {
        console.error('Jogo não encontrado:', jogoId);
        alert('Erro: Jogo não encontrado!');
        return;
    }
    
    if (!jogo.disponivel) {
        alert('Este jogo ainda não está disponível!');
        return;
    }
    
    capituloAtual = capituloId;
    nomeCapituloAtual = `${capitulo.titulo} - ${jogo.titulo}`;
    
    // Carregar banco de questões baseado no jogo
    switch(jogo.questoes) {
        case 'dadosDoQuizIngles':
            if (typeof dadosDoQuizIngles === 'undefined') {
                alert('Erro: Questões do Jogo 1 não carregadas!');
                return;
            }
            bancoDeQuestoesAtual = dadosDoQuizIngles;
            break;
        case 'dadosDoQuizIngles2':
            if (typeof dadosDoQuizIngles2 === 'undefined') {
                alert('Erro: Questões do Jogo 2 não carregadas!');
                return;
            }
            bancoDeQuestoesAtual = dadosDoQuizIngles2;
            break;
        default:
            alert('Questões ainda não disponíveis para este jogo!');
            return;
    }
    
    console.log('Banco de questões carregado:', bancoDeQuestoesAtual.length, 'questões');
    
    // Inicializar arrays de controle
    respostasDoUsuario = new Array(bancoDeQuestoesAtual.length).fill(null);
    statusDasQuestoes = new Array(bancoDeQuestoesAtual.length).fill('nao_respondida');
    
    // Inicializar o jogo
    iniciarJogoInterface();
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

function iniciarJogoInterface() {
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
    } else if (questao.tipo === 'interpretacao') {
        mostrarQuestaoInterpretacao(questao);
    } else if (questao.tipo === 'verdadeiro_falso') {
        mostrarQuestaoVerdadeiroFalso(questao);
    } else if (questao.tipo === 'aberta' || questao.tipo === 'opiniao' || questao.tipo === 'pergunta_aberta') {
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
            <input type="radio" id="opcao${index}" name="resposta" value="${opcao}" style="display: none;">
            <label for="opcao${index}" class="opcao-caixa">
                <strong>${letras[index]}</strong> ${opcao}
            </label>
        `;
        opcoesRespostaDiv.appendChild(div);
    });
}

function mostrarQuestaoInterpretacao(questao) {
    opcoesRespostaDiv.style.display = 'block';
    areaRespostaAberta.style.display = 'none';
    
    opcoesRespostaDiv.innerHTML = '';
    
    // Adicionar o texto base fixo no topo
    if (questao.textoBase) {
        const textoBaseDiv = document.createElement('div');
        textoBaseDiv.className = 'texto-base-interpretacao';
        textoBaseDiv.style.cssText = `
            background: #f8f9fa;
            border: 2px solid #dee2e6;
            border-radius: 8px;
            padding: 20px;
            margin-bottom: 20px;
            font-family: 'Georgia', serif;
            line-height: 1.6;
            white-space: pre-line;
            max-height: 300px;
            overflow-y: auto;
        `;
        textoBaseDiv.innerHTML = `<strong>Text:</strong><br><br>${questao.textoBase}`;
        opcoesRespostaDiv.appendChild(textoBaseDiv);
    }
    
    // Adicionar as opções de resposta
    const letras = ['a)', 'b)', 'c)', 'd)', 'e)', 'f)'];
    
    questao.opcoes.forEach((opcao, index) => {
        const div = document.createElement('div');
        div.className = 'opcao-resposta opcao-multipla-escolha';
        div.innerHTML = `
            <input type="radio" id="opcao${index}" name="resposta" value="${opcao}" style="display: none;">
            <label for="opcao${index}" class="opcao-caixa">${letras[index]} ${opcao}</label>
        `;
        opcoesRespostaDiv.appendChild(div);
    });
}

function mostrarQuestaoVerdadeiroFalso(questao) {
    opcoesRespostaDiv.style.display = 'block';
    areaRespostaAberta.style.display = 'none';
    
    opcoesRespostaDiv.innerHTML = '';
    
    // Se a questão tem opções (novo formato), mostrar afirmativas e opções
    if (questao.opcoes && questao.opcoes.length > 0) {
        // Primeiro, mostrar as afirmativas
        if (questao.afirmacoes) {
            const afirmacoesDiv = document.createElement('div');
            afirmacoesDiv.className = 'afirmacoes-container';
            afirmacoesDiv.innerHTML = '<h4>Analise as afirmações:</h4>';
            
            questao.afirmacoes.forEach((afirmacao, index) => {
                const div = document.createElement('div');
                div.className = 'afirmacao-item afirmacao-caixa-branca';
                div.innerHTML = `
                    <div class="afirmacao-header">
                        <span class="afirmacao-numero">${['I', 'II', 'III', 'IV'][index]}.</span>
                    </div>
                    <div class="afirmacao-texto">${afirmacao}</div>
                `;
                afirmacoesDiv.appendChild(div);
            });
            
            opcoesRespostaDiv.appendChild(afirmacoesDiv);
        }
        
        // Depois, mostrar as opções de resposta
        const letras = ['a)', 'b)', 'c)', 'd)', 'e)', 'f)'];
        
        questao.opcoes.forEach((opcao, index) => {
            const div = document.createElement('div');
            div.className = 'opcao-resposta opcao-multipla-escolha';
            div.innerHTML = `
                <input type="radio" id="opcao${index}" name="resposta" value="${opcao}" style="display: none;">
                <label for="opcao${index}" class="opcao-caixa">
                    <strong>${letras[index]}</strong> ${opcao}
                </label>
            `;
            opcoesRespostaDiv.appendChild(div);
        });
        return;
    }
    
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
    const status = statusDasQuestoes[perguntaAtual];
    
    if (questao.tipo === 'multipla_escolha') {
        const radio = document.querySelector(`input[name="resposta"][value="${resposta}"]`);
        if (radio) radio.checked = true;
    } else if (questao.tipo === 'verdadeiro_falso') {
        const radio = document.querySelector(`input[name="resposta"][value="${resposta}"]`);
        if (radio) radio.checked = true;
    } else if (questao.tipo === 'aberta' || questao.tipo === 'opiniao' || questao.tipo === 'pergunta_aberta') {
        inputResposta.value = resposta || '';
    }
    
    // Se a questão já foi respondida (correta ou incorreta), mostrar o gabarito e explicação permanentemente
    if (status === 'correta' || status === 'incorreta') {
        // Aplicar feedback visual nas opções
        if (questao.tipo === 'multipla_escolha' || questao.tipo === 'verdadeiro_falso' || questao.tipo === 'interpretacao') {
            const estaCorreta = (status === 'correta');
            aplicarFeedbackVisual(estaCorreta, questao);
        }
        
        // Mostrar feedback com gabarito e explicação
        mostrarFeedback(status === 'correta', questao);
        feedbackImediato.style.display = 'block';
    }
}

function salvarResposta() {
    const questao = bancoDeQuestoesAtual[perguntaAtual];
    let resposta = null;
    
    if (questao.tipo === 'multipla_escolha' || questao.tipo === 'verdadeiro_falso' || questao.tipo === 'interpretacao') {
        const radioSelecionado = document.querySelector('input[name="resposta"]:checked');
        if (radioSelecionado) {
            resposta = radioSelecionado.value;
        }
    } else if (questao.tipo === 'aberta' || questao.tipo === 'opiniao' || questao.tipo === 'pergunta_aberta') {
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
    
    if (questao.tipo === 'multipla_escolha' || questao.tipo === 'verdadeiro_falso' || questao.tipo === 'interpretacao') {
        const radioSelecionado = document.querySelector('input[name="resposta"]:checked');
        if (radioSelecionado) {
            resposta = radioSelecionado.value;
        }
    } else if (questao.tipo === 'aberta' || questao.tipo === 'opiniao' || questao.tipo === 'pergunta_aberta') {
        resposta = inputResposta.value.trim();
    }
    
    if (resposta === null || resposta === '') {
        alert('Por favor, selecione ou digite uma resposta antes de verificar.');
        return;
    }
    
    respostasDoUsuario[perguntaAtual] = resposta;
    
    // Verificar se está correta
    let estaCorreta = false;
    
    if (questao.tipo === 'multipla_escolha' || questao.tipo === 'interpretacao') {
        estaCorreta = resposta === questao.respostaCorreta;
    } else if (questao.tipo === 'verdadeiro_falso') {
        estaCorreta = resposta === questao.respostaCorreta;
    } else if (questao.tipo === 'aberta' || questao.tipo === 'opiniao' || questao.tipo === 'pergunta_aberta') {
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
    
    if (questao.tipo === 'aberta' || questao.tipo === 'opiniao' || questao.tipo === 'pergunta_aberta' || questao.tipo === 'analise_caso') {
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
            if (questao.tipo === 'multipla_escolha' || questao.tipo === 'interpretacao') {
                // Encontrar o índice da resposta correta
                const indiceCorreto = questao.opcoes.findIndex(opcao => opcao === questao.respostaCorreta);
                if (indiceCorreto !== -1) {
                    respostaCorretaTexto = questao.opcoes[indiceCorreto];
                } else {
                    respostaCorretaTexto = questao.respostaCorreta;
                }
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
    
    if (questao.tipo === 'multipla_escolha' || questao.tipo === 'interpretacao') {
        const respostaSelecionada = document.querySelector('input[name="resposta"]:checked');
        if (respostaSelecionada) {
            const valorSelecionado = respostaSelecionada.value;
            
            opcoesCaixas.forEach((caixa, index) => {
                const input = caixa.previousElementSibling;
                if (input && input.value === valorSelecionado) {
                    // Caixa selecionada
                    caixa.classList.add(estaCorreta ? 'feedback-correto-caixa' : 'feedback-incorreto-caixa');
                } else if (questao.opcoes[index] === questao.respostaCorreta && !estaCorreta) {
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
    const ordemArenas = ['portugues', 'matematica', 'ciencias', 'historia', 'geografia', 'ingles', 'math'];
    
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

// Função para atualizar versão (hard refresh)
function atualizarVersao() {
    // Mostrar mensagem antes de recarregar
    alert('Este é um sistema em desenvolvimento.\n\nSempre aperte este botão para garantir que você está na última atualização!');
    
    // Fazer hard refresh (equivalente a Ctrl + Shift + R)
    // Método 1: Recarregar sem cache
    location.reload(true);
    
    // Método 2 (fallback): Forçar recarga completa
    setTimeout(() => {
        window.location.href = window.location.href + '?t=' + new Date().getTime();
    }, 100);
}

window.onload = () => {
    inicializar();
    gerarArenas();
    configurarEventosAudio();
};

// Chamar gerarArenas() no início para garantir que as arenas sejam criadas
document.addEventListener('DOMContentLoaded', gerarArenas);

// Variáveis globais para o mapa mental
let mapaScale = 1;
let mapaPosX = 0;
let mapaPosY = 0;
let isDragging = false;
let startX, startY;

// Função para abrir o mapa mental
function abrirMapaMental(capituloId) {
    // Se capituloId foi passado, definir como capituloAtual
    if (capituloId) {
        capituloAtual = capituloId;
    }
    
    const arena = estruturaCapitulos[arenaAtual];
    const capitulo = arena.capitulos.find(cap => cap.id === capituloAtual);
    
    if (!capitulo || !capitulo.mapaMental) {
        alert('Mapa mental não disponível para este capítulo.');
        return;
    }
    
    // Abrir em nova janela popup
    const largura = Math.min(1200, window.screen.width * 0.9);
    const altura = Math.min(800, window.screen.height * 0.9);
    const esquerda = (window.screen.width - largura) / 2;
    const topo = (window.screen.height - altura) / 2;
    
    const opcoes = `width=${largura},height=${altura},left=${esquerda},top=${topo},resizable=yes,scrollbars=yes,toolbar=no,menubar=no,location=no,status=no`;
    
    // Criar conteúdo HTML para a nova janela
    const novaJanela = window.open('', 'MapaMental', opcoes);
    
    if (!novaJanela) {
        alert('Por favor, permita pop-ups para visualizar o mapa mental.');
        return;
    }
    
    novaJanela.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <title>Mapa Mental - ${capitulo.titulo}</title>
            <style>
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }
                body {
                    font-family: Arial, sans-serif;
                    background: #f0f0f0;
                    overflow: hidden;
                    display: flex;
                    flex-direction: column;
                    height: 100vh;
                }
                .header {
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    color: white;
                    padding: 15px 20px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
                }
                .header h2 {
                    font-size: 18px;
                    font-weight: 600;
                }
                .controls {
                    display: flex;
                    gap: 10px;
                    align-items: center;
                }
                .btn {
                    background: rgba(255,255,255,0.2);
                    border: 1px solid rgba(255,255,255,0.3);
                    color: white;
                    padding: 8px 15px;
                    border-radius: 5px;
                    cursor: pointer;
                    font-size: 14px;
                    transition: all 0.3s;
                }
                .btn:hover {
                    background: rgba(255,255,255,0.3);
                    transform: translateY(-1px);
                }
                .zoom-info {
                    background: rgba(255,255,255,0.2);
                    padding: 5px 12px;
                    border-radius: 5px;
                    font-size: 14px;
                    min-width: 60px;
                    text-align: center;
                }
                .container {
                    flex: 1;
                    overflow: hidden;
                    position: relative;
                    background: #e0e0e0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .image-wrapper {
                    cursor: grab;
                    position: relative;
                    transition: transform 0.1s ease-out;
                }
                .image-wrapper:active {
                    cursor: grabbing;
                }
                #mapa-image {
                    max-width: 100%;
                    max-height: 100%;
                    display: block;
                    user-select: none;
                    -webkit-user-drag: none;
                }
                .instructions {
                    position: absolute;
                    bottom: 20px;
                    left: 50%;
                    transform: translateX(-50%);
                    background: rgba(0,0,0,0.7);
                    color: white;
                    padding: 10px 20px;
                    border-radius: 8px;
                    font-size: 13px;
                    pointer-events: none;
                    opacity: 0;
                    animation: fadeInOut 4s ease-in-out;
                }
                @keyframes fadeInOut {
                    0%, 100% { opacity: 0; }
                    10%, 90% { opacity: 1; }
                }
            </style>
        </head>
        <body>
            <div class="header">
                <h2>Mapa Mental - ${capitulo.titulo}</h2>
                <div class="controls">
                    <button class="btn" onclick="zoomOut()">− Zoom Out</button>
                    <span class="zoom-info" id="zoom-display">100%</span>
                    <button class="btn" onclick="zoomIn()">+ Zoom In</button>
                    <button class="btn" onclick="resetZoom()">↻ Reset</button>
                    <button class="btn" onclick="window.close()">× Fechar</button>
                </div>
            </div>
            <div class="container" id="container">
                <div class="image-wrapper" id="wrapper">
                    <img id="mapa-image" src="${capitulo.mapaMental}" alt="Mapa Mental">
                </div>
                <div class="instructions">
                    🔍 Use o scroll do mouse para zoom | 👆 Arraste para navegar
                </div>
            </div>
            <script>
                let scale = 1;
                let isDragging = false;
                let startX, startY, translateX = 0, translateY = 0;
                const wrapper = document.getElementById('wrapper');
                const container = document.getElementById('container');
                const zoomDisplay = document.getElementById('zoom-display');
                
                // Zoom com scroll do mouse
                container.addEventListener('wheel', function(e) {
                    e.preventDefault();
                    const delta = e.deltaY > 0 ? -0.1 : 0.1;
                    scale = Math.max(0.5, Math.min(5, scale + delta));
                    updateTransform();
                });
                
                // Zoom com botões
                function zoomIn() {
                    scale = Math.min(5, scale + 0.2);
                    updateTransform();
                }
                
                function zoomOut() {
                    scale = Math.max(0.5, scale - 0.2);
                    updateTransform();
                }
                
                function resetZoom() {
                    scale = 1;
                    translateX = 0;
                    translateY = 0;
                    updateTransform();
                }
                
                function updateTransform() {
                    wrapper.style.transform = \`translate(\${translateX}px, \${translateY}px) scale(\${scale})\`;
                    zoomDisplay.textContent = Math.round(scale * 100) + '%';
                }
                
                // Arrastar para navegar
                wrapper.addEventListener('mousedown', function(e) {
                    isDragging = true;
                    startX = e.clientX - translateX;
                    startY = e.clientY - translateY;
                });
                
                document.addEventListener('mousemove', function(e) {
                    if (!isDragging) return;
                    translateX = e.clientX - startX;
                    translateY = e.clientY - startY;
                    updateTransform();
                });
                
                document.addEventListener('mouseup', function() {
                    isDragging = false;
                });
                
                // Touch events para dispositivos móveis
                wrapper.addEventListener('touchstart', function(e) {
                    if (e.touches.length === 1) {
                        isDragging = true;
                        startX = e.touches[0].clientX - translateX;
                        startY = e.touches[0].clientY - translateY;
                    }
                });
                
                document.addEventListener('touchmove', function(e) {
                    if (!isDragging || e.touches.length !== 1) return;
                    e.preventDefault();
                    translateX = e.touches[0].clientX - startX;
                    translateY = e.touches[0].clientY - startY;
                    updateTransform();
                });
                
                document.addEventListener('touchend', function() {
                    isDragging = false;
                });
            </script>
        </body>
        </html>
    `);
    
    novaJanela.document.close();
}

// Função para fechar o mapa mental
function fecharMapaMental() {
    const popup = document.getElementById('mapa-mental-overlay');
    const image = document.getElementById('mapa-mental-image');
    
    popup.style.display = 'none';
    
    // Remover eventos
    image.removeEventListener('mousedown', startDrag);
    document.removeEventListener('mousemove', drag);
    document.removeEventListener('mouseup', stopDrag);
    image.removeEventListener('touchstart', startDragTouch);
    document.removeEventListener('touchmove', dragTouch);
    document.removeEventListener('touchend', stopDrag);
}

// Função para zoom no mapa mental
function zoomMapaMental(factor) {
    const image = document.getElementById('mapa-mental-image');
    mapaScale *= factor;
    
    // Limitar o zoom
    if (mapaScale < 0.5) mapaScale = 0.5;
    if (mapaScale > 5) mapaScale = 5;
    
    updateMapaTransform();
}

// Função para resetar o mapa mental
function resetMapaMental() {
    const image = document.getElementById('mapa-mental-image');
    const viewer = document.querySelector('.mapa-mental-viewer');
    
    if (!image || !viewer) return;
    
    // Aguardar carregamento da imagem
    if (image.complete && image.naturalWidth > 0) {
        ajustarMapaMental();
    } else {
        image.onload = ajustarMapaMental;
    }
}

function ajustarMapaMental() {
    const image = document.getElementById('mapa-mental-image');
    const viewer = document.querySelector('.mapa-mental-viewer');
    
    if (!image || !viewer) return;
    
    const viewerRect = viewer.getBoundingClientRect();
    const imgWidth = image.naturalWidth;
    const imgHeight = image.naturalHeight;
    
    // Calcular escala para caber na tela (com margem de 20px)
    const scaleX = (viewerRect.width - 40) / imgWidth;
    const scaleY = (viewerRect.height - 40) / imgHeight;
    mapaScale = Math.min(scaleX, scaleY, 1); // Não aumentar além do tamanho original
    
    // Centralizar a imagem
    mapaPosX = (viewerRect.width - imgWidth * mapaScale) / 2;
    mapaPosY = (viewerRect.height - imgHeight * mapaScale) / 2;
    
    updateMapaTransform();
}

// Função para atualizar a transformação do mapa
function updateMapaTransform() {
    const image = document.getElementById('mapa-mental-image');
    image.style.transform = `translate(${mapaPosX}px, ${mapaPosY}px) scale(${mapaScale})`;
}

// Funções de arrastar - Mouse
function startDrag(e) {
    isDragging = true;
    startX = e.clientX - mapaPosX;
    startY = e.clientY - mapaPosY;
    e.preventDefault();
}

function drag(e) {
    if (!isDragging) return;
    
    mapaPosX = e.clientX - startX;
    mapaPosY = e.clientY - startY;
    
    updateMapaTransform();
}

function stopDrag() {
    isDragging = false;
}

// Funções de arrastar - Touch
function startDragTouch(e) {
    isDragging = true;
    const touch = e.touches[0];
    startX = touch.clientX - mapaPosX;
    startY = touch.clientY - mapaPosY;
    e.preventDefault();
}

function dragTouch(e) {
    if (!isDragging) return;
    
    const touch = e.touches[0];
    mapaPosX = touch.clientX - startX;
    mapaPosY = touch.clientY - startY;
    
    updateMapaTransform();
    e.preventDefault();
}

// Função para abrir o player de vídeo
function abrirVideoPlayer(capituloId) {
    // Se capituloId foi passado, definir como capituloAtual
    if (capituloId) {
        capituloAtual = capituloId;
    }
    
    const arena = estruturaCapitulos[arenaAtual];
    const capitulo = arena.capitulos.find(cap => cap.id === capituloAtual);
    
    const popup = document.getElementById('video-player-overlay');
    const video = document.getElementById('video-element');
    const title = document.querySelector('.video-player-title');
    
    // Atualizar título e fonte do vídeo
    if (title && capitulo) {
        const prefixo = capitulo.id.includes('unit') ? 'Unit' : 'Cap.';
        title.textContent = `${arena.nome} - ${prefixo} ${capitulo.numero} - ${capitulo.titulo}`;
    }
    if (video && capitulo && capitulo.video) {
        video.src = capitulo.video;
        video.load(); // Forçar carregamento do vídeo
    }
    
    popup.style.display = 'block';
    
    // Pausar o vídeo ao abrir para evitar reprodução automática
    video.pause();
    video.currentTime = 0;
    
    // Configurar controles do vídeo se ainda não foram configurados
    configurarControlesVideo();
    
    // Adicionar evento para fechar com ESC
    document.addEventListener('keydown', handleVideoKeydown);
    
    // Focar no vídeo para permitir controles por teclado
    video.focus();
}

// Função para fechar o player de vídeo
function fecharVideoPlayer() {
    const popup = document.getElementById('video-player-overlay');
    const video = document.getElementById('video-element');
    
    popup.style.display = 'none';
    
    // Pausar o vídeo ao fechar
    video.pause();
    
    // Remover evento de teclado
    document.removeEventListener('keydown', handleVideoKeydown);
}

// Função para lidar com teclas no player de vídeo
function handleVideoKeydown(e) {
    if (e.key === 'Escape') {
        fecharVideoPlayer();
    }
}

// Função para configurar controles do vídeo
let videoControlesConfigurados = false;

function configurarControlesVideo() {
    if (videoControlesConfigurados) return;
    
    const video = document.getElementById('video-element');
    const playPauseBtn = document.getElementById('video-play-pause');
    const progressBar = document.getElementById('video-progress-bar');
    const progressFill = document.getElementById('video-progress-fill');
    const timeDisplay = document.getElementById('video-time');
    const volumeBtn = document.getElementById('video-volume');
    const volumeSlider = document.getElementById('video-volume-slider');
    const volumeFill = document.getElementById('video-volume-fill');
    const speedSelect = document.getElementById('video-speed');
    const fullscreenBtn = document.getElementById('video-fullscreen');
    
    if (!video || !playPauseBtn) return;
    
    // Play/Pause
    playPauseBtn.addEventListener('click', () => {
        if (video.paused) {
            video.play();
            playPauseBtn.textContent = '⏸️';
        } else {
            video.pause();
            playPauseBtn.textContent = '▶️';
        }
    });
    
    // Atualizar progresso
    video.addEventListener('timeupdate', () => {
        const progress = (video.currentTime / video.duration) * 100;
        if (progressFill) progressFill.style.width = progress + '%';
        
        if (timeDisplay) {
            const current = formatTime(video.currentTime);
            const duration = formatTime(video.duration);
            timeDisplay.textContent = `${current} / ${duration}`;
        }
    });
    
    // Clicar na barra de progresso
    if (progressBar) {
        progressBar.addEventListener('click', (e) => {
            const rect = progressBar.getBoundingClientRect();
            const percent = (e.clientX - rect.left) / rect.width;
            video.currentTime = percent * video.duration;
        });
    }
    
    // Volume
    if (volumeBtn) {
        volumeBtn.addEventListener('click', () => {
            video.muted = !video.muted;
            volumeBtn.textContent = video.muted ? '🔇' : '🔊';
        });
    }
    
    if (volumeSlider) {
        volumeSlider.addEventListener('click', (e) => {
            const rect = volumeSlider.getBoundingClientRect();
            const percent = (e.clientX - rect.left) / rect.width;
            video.volume = percent;
            if (volumeFill) volumeFill.style.width = (percent * 100) + '%';
        });
    }
    
    // Velocidade
    if (speedSelect) {
        speedSelect.addEventListener('change', () => {
            video.playbackRate = parseFloat(speedSelect.value);
        });
    }
    
    // Fullscreen
    if (fullscreenBtn) {
        fullscreenBtn.addEventListener('click', () => {
            if (video.requestFullscreen) {
                video.requestFullscreen();
            } else if (video.webkitRequestFullscreen) {
                video.webkitRequestFullscreen();
            }
        });
    }
    
    videoControlesConfigurados = true;
}

function formatTime(seconds) {
    if (isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

// Fechar popup ao clicar fora do vídeo
document.addEventListener('DOMContentLoaded', function() {
    const videoPopup = document.getElementById('video-player-overlay');
    const mapaPopup = document.getElementById('mapa-mental-overlay');
    
    if (videoPopup) {
        videoPopup.addEventListener('click', function(e) {
            if (e.target === videoPopup) {
                fecharVideoPlayer();
            }
        });
    }
    
    if (mapaPopup) {
        mapaPopup.addEventListener('click', function(e) {
            if (e.target === mapaPopup) {
                fecharMapaMental();
            }
        });
    }
});
