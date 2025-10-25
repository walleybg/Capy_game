// Capítulo 13 - Jogando os dados
// Torre das Palavras (Português)
// 30 questões: 10 múltipla escolha + 10 verdadeiro/falso + 7 abertas + 3 estudos de caso

const dadosDoQuizPortugues13 = [
    // ===== QUESTÕES DE MÚLTIPLA ESCOLHA (1-10) =====
    {
        tipo: "multipla_escolha",
        titulo: "Questão 1",
        contexto: "O jogo Pega-Varetas exige raciocínio rápido e conhecimento das regras de pontuação. O manual apresenta a seguinte tabela: Amarela (5 pontos), Vermelha (10 pontos), Verde (15 pontos), Azul (20 pontos), Preta (30 pontos).",
        pergunta: "Um jogador consegue pegar uma vareta preta, duas varetas verdes e três varetas amarelas. Qual é a pontuação total deste jogador, e qual cor de vareta ele deve sempre priorizar para ganhar o jogo?",
        opcoes: [
            "a) 55 pontos. Ele deve priorizar a vareta preta, que vale 30 pontos.",
            "b) 60 pontos. Ele deve priorizar a vareta azul, que é a mais fácil de tirar.",
            "c) 75 pontos. Ele deve priorizar a vareta preta, pois é a de maior valor individual.",
            "d) 70 pontos. Ele deve priorizar a vareta amarela, pois há mais varetas dessa cor."
        ],
        respostaCorreta: "c) 75 pontos. Ele deve priorizar a vareta preta, pois é a de maior valor individual.",
        explicacao: "A pontuação é: 1 Preta (30) + 2 Verdes (30) + 3 Amarelas (15) = 75 pontos. A vareta preta deve ser priorizada por ser a de maior valor individual (30 pontos)."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Questão 2",
        contexto: "Os textos sobre brincadeiras incluem informações sobre regras de segurança, como cuidados ao manusear varetas pontudas e a importância de definir limites nas atividades.",
        pergunta: "Considerando os textos que tratam de brincadeiras e suas regras de segurança, marque a opção que NÃO reflete conceitos abordados:",
        opcoes: [
            "a) É importante ter cuidado ao manusear as varetas, pois elas são pontudas e podem causar ferimentos se manuseadas incorretamente.",
            "b) Para garantir a segurança das crianças em qualquer brincadeira, é fundamental definir bem os limites da atividade e o espaço do jogo.",
            "c) O vencedor do Pega-Varetas é sempre aquele que tira a maior pontuação.",
            "d) Se a brincadeira envolver riscos, o ideal é que ela seja realizada sem supervisão de um adulto responsável."
        ],
        respostaCorreta: "d) Se a brincadeira envolver riscos, o ideal é que ela seja realizada sem supervisão de um adulto responsável.",
        explicacao: "Esta opção está incorreta, pois os textos enfatizam a necessidade de supervisão e segurança, não a realização de brincadeiras de risco sem um adulto."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Questão 3",
        contexto: "Os dígrafos são duas letras que representam um único som. Observe: 'Na língua portuguesa, a letra H, quando aparece no meio da palavra, forma dígrafo. Os dígrafos são encontros de letras que juntas representam um único som. Veja: choque, ninho, galho.'",
        pergunta: "Qual das afirmações a seguir é a melhor resposta para explicar a função dos dígrafos NH, CH e LH?",
        opcoes: [
            "a) Os dígrafos sempre aparecem apenas no final das palavras, como na palavra ah!",
            "b) Os dígrafos indicam que as duas letras devem ser separadas durante a divisão silábica, como ocorre em carro e pássaro.",
            "c) Os dígrafos NH, CH e LH formam um único som e, por isso, as duas consoantes permanecem juntas na mesma sílaba.",
            "d) O som do dígrafo é sempre mais forte do que o som das consoantes separadas."
        ],
        respostaCorreta: "c) Os dígrafos NH, CH e LH formam um único som e, por isso, as duas consoantes permanecem juntas na mesma sílaba.",
        explicacao: "Dígrafos como NH, CH e LH formam um único som e permanecem juntos na mesma sílaba, diferentemente de dígrafos como RR e SS que se separam."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Questão 4",
        contexto: "Antes de escrever um Roteiro de tutorial, a etapa de planejamento é crucial para definir aspectos importantes do vídeo.",
        pergunta: "O que se deve definir na seção 'Para quem?' do planejamento de um roteiro de tutorial?",
        opcoes: [
            "a) O tempo total de duração do vídeo, que deve ser, no máximo, 6 minutos.",
            "b) Apenas o nome do jogo ou da atividade que será ensinada.",
            "c) O público-alvo (familiares, amigos ou pessoas interessadas em jogos), para adaptar a linguagem e o tom do vídeo.",
            "d) Os materiais que precisam ser separados para a gravação, como a câmera e o jogo."
        ],
        respostaCorreta: "c) O público-alvo (familiares, amigos ou pessoas interessadas em jogos), para adaptar a linguagem e o tom do vídeo.",
        explicacao: "Na etapa de planejamento, o campo 'Para quem?' é essencial para definir o público-alvo, o que influencia a linguagem e o tom do vídeo."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Questão 5",
        contexto: "O manual do Pega-Varetas contém a seguinte DICA: 'ADULTOS DEVEM LER COM ATENÇÃO AS INSTRUÇÕES E IR JOGANDO COM A CRIANÇA.'",
        pergunta: "Selecione a melhor resposta que interpreta o objetivo desta DICA no manual de instruções:",
        opcoes: [
            "a) Ela serve para indicar que o jogo é complexo e apenas adultos podem entender as regras.",
            "b) Ela sugere que o adulto deve participar para garantir que a leitura e a compreensão das regras sejam compartilhadas com a criança.",
            "c) Ela informa que apenas o adulto pode ser o vencedor do jogo, pois as varetas são perigosas.",
            "d) Ela indica que os adultos devem começar a jogar antes das crianças."
        ],
        respostaCorreta: "b) Ela sugere que o adulto deve participar para garantir que a leitura e a compreensão das regras sejam compartilhadas com a criança.",
        explicacao: "A DICA sugere que o adulto deve participar lendo as instruções e jogando com a criança para garantir compreensão compartilhada das regras."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Questão 6",
        contexto: "A letra H, quando não está em um dígrafo (NH, CH, LH), é considerada muda ou não possui som próprio no início das palavras (hora, história).",
        pergunta: "Todas as afirmativas sobre a letra H estão corretas, EXCETO:",
        opcoes: [
            "a) A letra H pode aparecer no início de palavras (herói) e não representa som.",
            "b) A letra H pode aparecer no final de palavras para expressar emoções (ah!, eh!), mas não muda a pronúncia de vogais.",
            "c) Quando o H aparece no meio da palavra junto com C, L ou N, ele ajuda a representar um som único (dígrafo).",
            "d) Em palavras como relógio ou chão, a letra H tem som de R e C, respectivamente."
        ],
        respostaCorreta: "d) Em palavras como relógio ou chão, a letra H tem som de R e C, respectivamente.",
        explicacao: "Esta afirmação está incorreta. A letra H não tem som próprio. Em 'relógio' não há H, e em 'chão' o CH forma um dígrafo com som próprio, não som de C."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Questão 7",
        contexto: "As instruções visuais para montar o papagaio (pipa) mostram a necessidade de usar papel, cola e tesoura. As imagens mostram quatro etapas sequenciais do processo de montagem.",
        pergunta: "Com base nas quatro imagens sequenciais do processo de montagem, qual é a ordem lógica das ações necessárias para construir a pipa?",
        opcoes: [
            "a) Montar a estrutura central, prender o papel base, fazer a rabiola e colar os acabamentos.",
            "b) Fazer a rabiola, colar os acabamentos, prender o papel base e montar a estrutura.",
            "c) Colar as partes, dobrar o papel, aplicar a cola, e finalizar o desenho.",
            "d) Segurar o papel, colar a rabiola, fazer a base central e pintar o papagaio."
        ],
        respostaCorreta: "a) Montar a estrutura central, prender o papel base, fazer a rabiola e colar os acabamentos.",
        explicacao: "A ordem lógica de montagem segue: estrutura central → papel base → rabiola → acabamentos finais."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Questão 8",
        contexto: "O dígrafo e o encontro consonantal são encontros de duas consoantes na mesma palavra, mas com características diferentes.",
        pergunta: "Todas as afirmativas são corretas sobre estes conceitos, EXCETO:",
        opcoes: [
            "a) No encontro consonantal, as duas consoantes continuam representando seus próprios sons (por exemplo, em pedra ou atleta).",
            "b) No dígrafo, as duas letras se juntam para representar um único som (por exemplo, em ninho ou milho).",
            "c) Em 'passarinho', há tanto um dígrafo (NH) quanto um encontro consonantal (SS).",
            "d) Os encontros consonantais com R ou L (como pedra ou atleta) se separam em sílabas diferentes."
        ],
        respostaCorreta: "d) Os encontros consonantais com R ou L (como pedra ou atleta) se separam em sílabas diferentes.",
        explicacao: "Esta afirmação está incorreta. Os encontros consonantais com R ou L (como em pe-dra, a-tle-ta) permanecem na mesma sílaba, não se separam."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Questão 9",
        contexto: "A primeira parte de um Roteiro de tutorial (Parte 1: Abertura) deve conter informações importantes para chamar a atenção do espectador e apresentar o vídeo.",
        pergunta: "Marque a opção que NÃO é uma informação essencial para a abertura do seu vídeo tutorial:",
        opcoes: [
            "a) A apresentação de quem está falando e o título do tutorial.",
            "b) A identificação do jogo ou da atividade que será ensinada.",
            "c) A duração exata da filmagem (em minutos e segundos).",
            "d) Um gancho para atrair o espectador a continuar assistindo ao vídeo."
        ],
        respostaCorreta: "c) A duração exata da filmagem (em minutos e segundos).",
        explicacao: "A duração exata não é essencial na abertura do vídeo. O importante é apresentar quem fala, o tema, e um gancho atrativo."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Questão 10",
        contexto: "De acordo com as regras de Pega-Varetas, o jogador só pode tentar retirar uma vareta por vez. O turno termina quando o jogador toca ou movimenta outra vareta acidentalmente.",
        pergunta: "Se João, ao tentar pegar uma vareta verde (15 pontos), encosta na vareta vermelha (10 pontos), o que acontece com o turno dele?",
        opcoes: [
            "a) João ganha as duas varetas, pois ele tocou nelas.",
            "b) João ganha a vareta verde, mas perde a vez, e a vareta vermelha fica na mesa.",
            "c) João perde o turno e deve passar a vez ao próximo jogador, e ele não pontua pela vareta verde que tentou pegar.",
            "d) João ganha um turno extra para compensar o erro."
        ],
        respostaCorreta: "c) João perde o turno e deve passar a vez ao próximo jogador, e ele não pontua pela vareta verde que tentou pegar.",
        explicacao: "Segundo as regras, ao tocar ou movimentar outra vareta acidentalmente, o jogador perde o turno e não pontua pela vareta que tentou pegar."
    },

    // ===== QUESTÕES VERDADEIRO OU FALSO (11-20) =====
    {
        tipo: "verdadeiro_falso",
        titulo: "Questão 11",
        contexto: "Análise sobre dígrafos que se separam e que não se separam na divisão silábica.",
        pergunta: "Analise as afirmações sobre dígrafos:",
        afirmacoes: [
            "I. Na língua portuguesa, os dígrafos RR e SS devem ser separados em sílabas diferentes (exemplo: car-ro, pás-sa-ro).",
            "II. Os dígrafos NH, CH e LH nunca se separam e ficam sempre na mesma sílaba (exemplo: ni-nho).",
            "III. 'Choque' e 'galho' são exemplos de palavras que possuem o H no início, sem som.",
            "IV. A palavra necessário contém o dígrafo SS."
        ],
        opcoes: [
            "a) V, V, F, V",
            "b) V, F, V, F",
            "c) F, V, V, V",
            "d) F, F, F, V"
        ],
        respostaCorreta: "a) V, V, F, V",
        explicacao: "I-Verdadeiro: RR e SS se separam. II-Verdadeiro: NH, CH, LH não se separam. III-Falso: Nestas palavras o H está no meio formando dígrafo, não no início. IV-Verdadeiro: necessário tem SS."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Questão 12",
        contexto: "Regras do Jogo Pega-Varetas sobre como começar e jogar.",
        pergunta: "Analise as afirmações sobre as regras do Pega-Varetas:",
        afirmacoes: [
            "I. Para começar o jogo, as varetas devem ser seguradas juntas na vertical e, em seguida, soltas sobre a mesa, para que se espalhem.",
            "II. O primeiro jogador a começar é, obrigatoriamente, o jogador mais novo.",
            "III. Se um jogador pegar as varetas na ordem crescente de pontos (amarela, vermelha, verde, azul, preta), ele recebe uma pontuação bônus.",
            "IV. O turno do jogador só termina quando ele movimenta acidentalmente alguma vareta que não está pegando."
        ],
        opcoes: [
            "a) V, F, F, V",
            "b) F, V, F, V",
            "c) V, F, V, F",
            "d) F, V, V, F"
        ],
        respostaCorreta: "a) V, F, F, V",
        explicacao: "I-Verdadeiro: As varetas são soltas verticalmente. II-Falso: Não há regra obrigatória sobre quem começa. III-Falso: Não há bônus por ordem. IV-Verdadeiro: O turno termina ao movimentar outra vareta."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Questão 13",
        contexto: "Conceitos sobre Encontro Consonantal e divisão silábica.",
        pergunta: "Analise as afirmações sobre encontro consonantal:",
        afirmacoes: [
            "I. Encontro Consonantal ocorre quando duas consoantes se encontram na mesma palavra e ambas mantêm seus sons originais.",
            "II. Na palavra catraca, o encontro consonantal TR se separa em sílabas diferentes (ca-tra-ca).",
            "III. A palavra passarinho contém dois encontros consonantais: SS e NH.",
            "IV. A palavra costura possui um encontro consonantal (ST) onde as letras se separam em sílabas diferentes (cos-tu-ra)."
        ],
        opcoes: [
            "a) V, F, V, V",
            "b) V, F, F, V",
            "c) F, V, V, F",
            "d) V, V, F, F"
        ],
        respostaCorreta: "b) V, F, F, V",
        explicacao: "I-Verdadeiro: Encontro consonantal mantém sons. II-Falso: TR não se separa (ca-tra-ca está correto). III-Falso: SS e NH são dígrafos, não encontros consonantais. IV-Verdadeiro: ST se separa (cos-tu-ra)."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Questão 14",
        contexto: "Etapas de Revisão e Edição de um Roteiro de Tutorial.",
        pergunta: "Analise as afirmações sobre revisão e edição de roteiro:",
        afirmacoes: [
            "I. A revisão do texto do roteiro deve verificar se todas as palavras foram escritas corretamente (ortografia).",
            "II. Para a revisão, é importante que a leitura completa do roteiro não ultrapasse, em média, o tempo de 6 minutos.",
            "III. A etapa de Revisão (Revisando o texto) ocorre antes da etapa de Edição (Editando o texto).",
            "IV. Após a gravação do vídeo, o ideal é não compartilhá-lo com ninguém, nem mesmo com os colegas, pois pode haver erros."
        ],
        opcoes: [
            "a) V, V, V, F",
            "b) V, F, F, V",
            "c) F, V, V, F",
            "d) V, V, F, V"
        ],
        respostaCorreta: "a) V, V, V, F",
        explicacao: "I-Verdadeiro: Revisão verifica ortografia. II-Verdadeiro: O tempo sugerido é de 6 minutos. III-Verdadeiro: Revisão vem antes de Edição. IV-Falso: É recomendado compartilhar para receber feedback."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Questão 15",
        contexto: "Gêneros textuais e estrutura de textos de instrução.",
        pergunta: "Analise as afirmações sobre gêneros textuais:",
        afirmacoes: [
            "I. O texto que lemos no início do capítulo, sobre Pega-Varetas, é um manual de instruções de jogo.",
            "II. A seção de um texto de instruções chamada 'Regras' serve para contar sobre a origem da brincadeira.",
            "III. Textos de instrução (como o do Pega-Varetas) geralmente possuem seções ou títulos que organizam as informações (Como Funciona, Hora de Começar, etc.).",
            "IV. O objetivo principal do texto Pega-Varetas é convencer o leitor a comprar o jogo."
        ],
        opcoes: [
            "a) V, F, V, F",
            "b) F, V, V, V",
            "c) V, V, F, F",
            "d) F, F, V, V"
        ],
        respostaCorreta: "a) V, F, V, F",
        explicacao: "I-Verdadeiro: É um manual de instruções. II-Falso: 'Regras' explica como jogar, não a origem. III-Verdadeiro: Textos de instrução têm seções organizadas. IV-Falso: O objetivo é ensinar a jogar, não vender."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Questão 16",
        contexto: "Usos específicos da letra H na língua portuguesa.",
        pergunta: "Analise as afirmações sobre a letra H:",
        afirmacoes: [
            "I. Em 'galinha', o H aparece no meio da palavra junto com N, formando o dígrafo NH.",
            "II. Na palavra 'humano', o H no início é mudo, mas ele muda a pronúncia da palavra.",
            "III. O H só aparece em dígrafos (CH, LH, NH) e nunca no início de palavras.",
            "IV. As interjeições como ah! e eh! mostram que o H pode aparecer no final de palavras."
        ],
        opcoes: [
            "a) V, F, F, V",
            "b) F, V, V, F",
            "c) V, V, F, F",
            "d) F, F, V, V"
        ],
        respostaCorreta: "a) V, F, F, V",
        explicacao: "I-Verdadeiro: 'galinha' tem dígrafo NH. II-Falso: O H é mudo e não muda pronúncia. III-Falso: H aparece no início de palavras (hora, herói). IV-Verdadeiro: Interjeições têm H no final."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Questão 17",
        contexto: "Planejamento de Tutorial em Vídeo e suas etapas.",
        pergunta: "Analise as afirmações sobre planejamento de tutorial:",
        afirmacoes: [
            "I. Ao planejar o roteiro, a produção pode ser tanto individual quanto em grupo.",
            "II. A seção 'O jogo' (Parte 2 do roteiro) é onde se deve explicar como o jogo funciona, os materiais necessários e a idade mínima recomendada.",
            "III. O vídeo tutorial deve ser gravado necessariamente em uma mesa de estúdio.",
            "IV. Se o vídeo tutorial for para a internet, ele precisa ser pensado para o público que já se interessa por jogos."
        ],
        opcoes: [
            "a) F, V, F, V",
            "b) V, V, F, V",
            "c) V, F, V, F",
            "d) F, V, V, V"
        ],
        respostaCorreta: "b) V, V, F, V",
        explicacao: "I-Verdadeiro: Pode ser individual ou em grupo. II-Verdadeiro: Parte 2 explica o jogo. III-Falso: Não precisa ser em estúdio. IV-Verdadeiro: Deve pensar no público-alvo interessado."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Questão 18",
        contexto: "Instruções Visuais e Materiais para montagem de papagaio.",
        pergunta: "Analise as afirmações sobre instruções visuais:",
        afirmacoes: [
            "I. O manual de instruções para montar o papagaio (pipa) é baseado em instruções visuais, ou seja, usa imagens para ensinar.",
            "II. O Anexo 4 contém peças coloridas em formato de triângulo que serão usadas na montagem do papagaio.",
            "III. A montagem do papagaio não exige o uso de cola, apenas de papel e fita.",
            "IV. Há 4 passos claros no manual visual que mostram como as mãos devem segurar e dobrar o papel."
        ],
        opcoes: [
            "a) V, V, F, V",
            "b) V, F, V, F",
            "c) F, V, F, V",
            "d) F, F, V, V"
        ],
        respostaCorreta: "a) V, V, F, V",
        explicacao: "I-Verdadeiro: Usa instruções visuais. II-Verdadeiro: Anexo 4 tem peças coloridas. III-Falso: A montagem exige cola. IV-Verdadeiro: Há 4 passos visuais."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Questão 19",
        contexto: "Aplicação prática de Encontro Consonantal x Dígrafo.",
        pergunta: "Analise as afirmações sobre encontro consonantal e dígrafo:",
        afirmacoes: [
            "I. Na palavra carro, as letras RR representam um dígrafo.",
            "II. Na palavra grito, GR é um encontro consonantal em sílabas diferentes (gri-to).",
            "III. Na palavra necessário, o encontro consonantal SS se separa em sílabas diferentes (nes-ce-ssá-rio).",
            "IV. Na palavra bolha, as letras LH representam um dígrafo."
        ],
        opcoes: [
            "a) V, F, V, V",
            "b) V, F, F, F",
            "c) V, F, V, F",
            "d) V, V, V, V"
        ],
        respostaCorreta: "a) V, F, V, V",
        explicacao: "I-Verdadeiro: RR é dígrafo. II-Falso: GR fica na mesma sílaba (gri-to). III-Verdadeiro: SS é dígrafo que se separa (ne-ces-sá-rio). IV-Verdadeiro: LH é dígrafo."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Questão 20",
        contexto: "Fazendo a Gravação do Tutorial - preparação e execução.",
        pergunta: "Analise as afirmações sobre gravação de tutorial:",
        afirmacoes: [
            "I. O adulto deve auxiliar segurando a câmera para que o vídeo não saia tremido ou torto.",
            "II. A primeira coisa a se fazer antes de gravar é desligar o celular, para evitar que toque durante a filmagem.",
            "III. O teste de gravação (para verificar o som e a imagem) deve ser feito antes da gravação final do tutorial.",
            "IV. O roteiro escrito deve ser seguido durante a gravação para que nenhuma etapa do jogo seja esquecida."
        ],
        opcoes: [
            "a) V, V, V, V",
            "b) V, F, V, V",
            "c) V, V, F, F",
            "d) F, F, V, V"
        ],
        respostaCorreta: "a) V, V, V, V",
        explicacao: "Todas as afirmações estão corretas: I-Adulto ajuda com câmera. II-Desligar celular evita interrupções. III-Teste antes da gravação final. IV-Seguir roteiro evita esquecer etapas."
    },

    // ===== QUESTÕES ABERTAS (21-27) =====
    {
        tipo: "aberta",
        titulo: "Questão 21",
        contexto: "",
        pergunta: "O que é um dígrafo? Dê um exemplo de palavra que contenha o dígrafo CH.",
        opcoes: [],
        respostaCorreta: "Dígrafo é o encontro de duas letras que representam um único som. Exemplo: choque, chave, chuva.",
        explicacao: "Dígrafo ocorre quando duas letras se juntam para formar um único som. O dígrafo CH aparece em palavras como choque, chave, chuva, chocolate, etc."
    },
    {
        tipo: "aberta",
        titulo: "Questão 22",
        contexto: "",
        pergunta: "Na brincadeira 'Cega', o texto menciona que é importante ter limites bem definidos. Por que é necessário definir o espaço de uma brincadeira para evitar riscos às crianças?",
        opcoes: [],
        respostaCorreta: "Para evitar que as crianças se machuquem ao sair da área segura, tropeçar em obstáculos ou se perder.",
        explicacao: "Definir limites claros garante que as crianças brinquem em um espaço seguro, evitando acidentes com obstáculos, quedas ou saída para áreas perigosas."
    },
    {
        tipo: "aberta",
        titulo: "Questão 23",
        contexto: "",
        pergunta: "Se você estivesse jogando Pega-Varetas e conseguisse tirar duas varetas azuis e uma preta, qual seria sua pontuação total?",
        opcoes: [],
        respostaCorreta: "70 pontos (2 azuis = 40 pontos + 1 preta = 30 pontos)",
        explicacao: "Duas varetas azuis valem 20 pontos cada (2 × 20 = 40), e uma vareta preta vale 30 pontos. Total: 40 + 30 = 70 pontos."
    },
    {
        tipo: "aberta",
        titulo: "Questão 24",
        contexto: "",
        pergunta: "Na seção de planejamento de tutorial, é sugerido que, se você optar por um jogo, ele deve ser fácil de gravar. Por que a facilidade de gravação é um fator importante para a escolha do tema do seu tutorial?",
        opcoes: [],
        respostaCorreta: "Porque jogos complexos ou com muitos materiais dificultam a filmagem, tornando o vídeo confuso ou muito longo.",
        explicacao: "A facilidade de gravação garante que o tutorial seja claro, objetivo e dentro do tempo recomendado, facilitando o entendimento do espectador."
    },
    {
        tipo: "aberta",
        titulo: "Questão 25",
        contexto: "",
        pergunta: "A letra H no início da palavra é muda. Cite duas palavras mencionadas nos textos onde o H não representa som próprio.",
        opcoes: [],
        respostaCorreta: "Hora e história (ou humano, herói)",
        explicacao: "A letra H é muda no início de palavras como hora, história, humano, herói, etc. Ela não representa nenhum som próprio nestas posições."
    },
    {
        tipo: "aberta",
        titulo: "Questão 26",
        contexto: "",
        pergunta: "O que é um encontro consonantal? Dê um exemplo de palavra onde o encontro consonantal se separa em sílabas.",
        opcoes: [],
        respostaCorreta: "Encontro consonantal é quando duas consoantes aparecem juntas mantendo seus sons. Exemplo que se separa: costura (cos-tu-ra)",
        explicacao: "Encontro consonantal ocorre quando duas consoantes mantêm seus sons originais. Alguns se separam em sílabas diferentes, como em costura (cos-tu-ra) ou pássaro (pás-sa-ro quando é dígrafo SS)."
    },
    {
        tipo: "aberta",
        titulo: "Questão 27",
        contexto: "",
        pergunta: "Quais são os três elementos básicos que você precisa mencionar na Parte 3: Final de um Roteiro de tutorial em vídeo?",
        opcoes: [],
        respostaCorreta: "Despedida, agradecimento ao espectador e convite para assistir outros vídeos ou se inscrever no canal.",
        explicacao: "A parte final do roteiro deve conter: despedida cordial, agradecimento pela audiência e um convite para engajamento (inscrição, outros vídeos, comentários)."
    },

    // ===== QUESTÕES DE ESTUDO DE CASO / OPINIÃO (28-30) =====
    {
        tipo: "opiniao",
        titulo: "Questão 28",
        contexto: "Imagine que você e seu amigo estão jogando Pega-Varetas. As regras dizem que as varetas são pontudas e devem ser manuseadas com cuidado. Seu amigo, porém, está frustrado e começa a bater as varetas na mesa, arriscando quebrá-las ou machucar alguém.",
        pergunta: "Qual solução você proporia para este problema, utilizando os conceitos de regras e segurança apresentados no capítulo?",
        opcoes: [],
        respostaCorreta: "Conversar com o amigo sobre a importância das regras de segurança, pausar o jogo até que ele se acalme, e lembrar que as varetas podem machucar. Se necessário, chamar um adulto para mediar.",
        explicacao: "A solução envolve comunicação, respeito às regras de segurança, pausa para acalmar os ânimos e, se necessário, supervisão de um adulto. O importante é priorizar a segurança de todos."
    },
    {
        tipo: "opiniao",
        titulo: "Questão 29",
        contexto: "Maria precisa gravar a 'Parte 2: O Jogo' do seu tutorial sobre xadrez, um jogo complexo. Ela tem apenas 6 minutos de tempo total no vídeo. Ao revisar seu roteiro, ela percebeu que a explicação das regras básicas levará, sozinha, 8 minutos.",
        pergunta: "Que estratégia você sugere a Maria para que ela consiga explicar o jogo de xadrez em um vídeo curto (menos de 6 minutos), mantendo as informações essenciais?",
        opcoes: [],
        respostaCorreta: "Maria pode focar apenas nas regras mais importantes (movimento das peças principais, objetivo do jogo), deixar regras avançadas para outro vídeo, usar linguagem direta e objetiva, e mencionar que há mais detalhes em vídeos futuros.",
        explicacao: "A estratégia é priorizar informações essenciais, ser objetiva, dividir conteúdo complexo em múltiplos vídeos e usar linguagem clara para otimizar o tempo."
    },
    {
        tipo: "opiniao",
        titulo: "Questão 30",
        contexto: "Você deve criar um Roteiro de Tutorial para a internet. O capítulo sugere escolher um jogo que você gosta, que seja fácil de conseguir os itens e que possa ser jogado com poucas pessoas.",
        pergunta: "Escolha um jogo (pode ser um jogo real ou inventado por você, mas que caiba nas sugestões do texto) e escreva um parágrafo curto justificando a sua escolha. Sua justificativa deve responder: Sobre o que é o tutorial? Para quem? Por que você o escolheu?",
        opcoes: [],
        respostaCorreta: "Exemplo: 'Escolhi o jogo de Damas porque é fácil de encontrar um tabuleiro, pode ser jogado por 2 pessoas, e as regras são simples de explicar em vídeo. O tutorial é para crianças e jovens que querem aprender um jogo de estratégia. Escolhi porque gosto de jogar e é fácil de gravar mostrando os movimentos das peças.'",
        explicacao: "A resposta deve incluir: nome do jogo, facilidade de acesso aos materiais, número de jogadores, público-alvo e justificativa pessoal de escolha relacionada à facilidade de produção."
    }
];

