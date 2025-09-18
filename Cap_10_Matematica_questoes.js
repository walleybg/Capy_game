// Arquivo-depósito de todas as perguntas do jogo para a Arena "Arena dos Números". Versão: 5.0 (Conteúdo Fiel ao PDF)

const dadosDoQuizMT = [
    // --- GRUPO 1: MÚLTIPLA ESCOLHA ---
    {
        tipo: "multipla_escolha",
        titulo: "Barraca de Adivinhas",
        contexto: "Na escola de Helena, iniciaram os preparativos para mais uma festa junina. Uma das brincadeiras favoritas da criançada é a barraca de adivinhas. O cartaz exposto nessa barraca, estava escrito o desafio a seguir: \"Descubra o número usando as pistas!\". As pistas eram: \"Tem três dezenas a mais que o número 135\", \"Tem oito unidades a menos que o número 98\", e \"Tem cinco centenas a mais que o número 143\".",
        pergunta: "Analisando as pistas do cartaz da barraca de adivinhas, qual das seguintes opções contém a resposta correta para cada pista, na ordem em que aparecem?",
        opcoes: ["165, 90, 643", "138, 90, 148", "165, 106, 643", "138, 106, 148"],
        respostaCorreta: "165, 90, 643",
        justificativa: "Pista 1: \"Três dezenas a mais que o número 135\" -> 135 + (3 x 10) = 135 + 30 = 165.\nPista 2: \"Oito unidades a menos que o número 98\" -> 98 - 8 = 90.\nPista 3: \"Cinco centenas a mais que o número 143\" -> 143 + (5 x 100) = 143 + 500 = 643."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Venda de Convites",
        contexto: "Todas as crianças estão se esforçando para vender convites para a festa. Na sala de Helena, as meninas venderam 367 convites, e os meninos venderam 243.",
        pergunta: "Marque a opção que não reflete corretamente uma informação sobre a venda de convites na sala de Helena.",
        opcoes: [
            "As meninas venderam 124 convites a mais que os meninos.",
            "Juntos, meninos e meninas venderam um total de 610 convites.",
            "Para as meninas terem vendido o dobro dos meninos, elas precisariam ter vendido 486 convites.",
            "Se cada menino tivesse vendido 10 convites a mais, o total de convites vendidos pelos meninos seria 253."
        ],
        respostaCorreta: "Se cada menino tivesse vendido 10 convites a mais, o total de convites vendidos pelos meninos seria 253.",
        justificativa: "As meninas venderam 367 convites e os meninos, 243.\na) 367 - 243 = 124 convites a mais vendidos pelas meninas (Correta).\nb) 367 + 243 = 610 convites no total (Correta).\nc) O dobro de 243 seria 243 x 2 = 486 convites. A afirmação é sobre o que precisaria para as meninas venderem o dobro, o que é coerente (Correta).\nd) Se cada menino vendesse 10 a mais, o total de convites vendidos pelos meninos aumentaria em 10 vezes o número de meninos. A afirmação sugere que o total passaria a ser 253, o que implicaria em ter vendido apenas 10 a mais no total geral, ou que 243 + 10 = 253. Essa formulação é a que menos reflete um conceito claro a partir dos dados."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Vendas dos Amigos",
        contexto: "As informações sobre vendas de convites são: Rafa vendeu 8 convites, e Alice vendeu o dobro do que Rafa vendeu. Walley vendeu 2 convites por dia em 10 dias, Lara vendeu 4 convites por dia em 12 dias.",
        pergunta: "Todas as afirmativas sobre as vendas de convites são corretas, exceto:",
        opcoes: [
            "Alice vendeu 16 convites.",
            "Walley vendeu um total de 20 convites em 10 dias.",
            "Lara vendeu um total de 48 convites em 12 dias.",
            "O total de convites vendidos por Rafa e Alice juntos é 25 convites."
        ],
        respostaCorreta: "O total de convites vendidos por Rafa e Alice juntos é 25 convites.",
        justificativa: "a) Rafa vendeu 8. Alice vendeu o dobro: 8 x 2 = 16 (Correta).\nb) Walley vendeu 2 por dia em 10 dias: 2 x 10 = 20 (Correta).\nc) Lara vendeu 4 por dia em 12 dias: 4 x 12 = 48 (Correta).\nd) Rafa (8) + Alice (16) = 24 convites. Portanto, a afirmação de que o total é 25 é incorreta."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Dobro e Metade",
        contexto: "Para determinar o dobro de um número, é preciso multiplicá-lo por 2. Para calcular a metade de um número, é preciso dividir esse número por 2. Por exemplo, o dobro de 3 é 6, logo 2x3=6. A metade de 6 é 3, logo 6÷2=3.",
        pergunta: "Considerando os conceitos de \"dobro\" e \"metade\" explicados, qual das opções a seguir apresenta uma afirmação incorreta?",
        opcoes: [
            "O dobro de 4 é 8, e a metade de 8 é 4.",
            "A metade de 10 é 5, e o dobro de 5 é 10.",
            "O dobro de 16 é 32, e a metade de 32 é 16.",
            "Se um número é o dobro de 7, então a sua metade é 14."
        ],
        respostaCorreta: "Se um número é o dobro de 7, então a sua metade é 14.",
        justificativa: "a) O dobro de 4 é 8, a metade de 8 é 4. (Correta).\nb) A metade de 10 é 5, o dobro de 5 é 10. (Correta).\nc) O dobro de 16 é 32, a metade de 32 é 16. (Correta).\nd) Se um número é o dobro de 7, esse número é 14. A metade de 14 é 7, não 14. (Incorreta)."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Divisão da Pipoca",
        contexto: "Helena estava responsável pela barraca de pipoca da festa junina. Ela dividiu igualmente 18 saquinhos de pipoca para ela e suas duas irmãs venderem, e não sobrou nenhum saquinho.",
        pergunta: "Sobre a situação de Helena e as pipocas, todas as afirmativas são corretas, exceto:",
        opcoes: [
            "Helena e suas duas irmās totalizam 3 pessoas.",
            "Cada uma delas recebeu 6 saquinhos de pipoca.",
            "Se Helena tivesse mais uma irmã, cada uma receberia 4 saquinhos e sobrariam 2.",
            "A operação matemática realizada para dividir as pipocas é a multiplicação."
        ],
        respostaCorreta: "A operação matemática realizada para dividir as pipocas é a multiplicação.",
        justificativa: "a) Helena e duas irmās somam 3 pessoas. (Correta).\nb) 18 saquinhos divididos por 3 pessoas resulta em 6 saquinhos para cada. (Correta).\nc) Com mais uma irmã (4 pessoas), 18÷4=4 com resto 2. (Correta).\nd) A operação para dividir igualmente é a divisão, não a multiplicação. (Incorreta)."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Alunos na Dança",
        contexto: "No ensaio da festa junina, os professores de Educação Física organizaram as turmas do 3º ano para a apresentação da dança. Na quadra, eles formaram, com os alunos de cada turma, 7 filas com 5 alunos em cada uma. Sabe-se que há 6 turmas de 3º ano na escola.",
        pergunta: "Quantos alunos de todas as turmas de 3º ano participarão da dança?",
        opcoes: ["35 alunos", "42 alunos", "210 alunos", "420 alunos"],
        respostaCorreta: "210 alunos",
        justificativa: "Alunos por turma: 7 filas x 5 alunos/fila = 35 alunos por turma.\nTotal de alunos: 6 turmas x 35 alunos/turma = 210 alunos."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Estratégias de Cálculo",
        contexto: "Para resolver situações-problema de adição, subtração, multiplicação ou divisão, é possível usar diferentes estratégias. Uma estratégia para multiplicação de 4x12 pode ser 2x12=24 e 2x24=48. Outra estratégia para 4x12 é (10+2)x4 resultando em 40+8=48.",
        pergunta: "Qual das opções abaixo apresenta uma estratégia de cálculo para 64x2 que segue uma lógica semelhante à apresentada no texto?",
        opcoes: ["60+4x2", "2x32=64", "(60x2)+(4x2)", "64+64+64"],
        respostaCorreta: "(60x2)+(4x2)",
        justificativa: "A estratégia mostrada para 4x12 foi (10+2)x4 = (10x4)+(2x4). Aplicando a mesma lógica de decomposição e propriedade distributiva para 64x2: (60+4)x2 = (60x2)+(4x2)."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Divisão com Sobra",
        contexto: "Para calcular a divisão, é possível pensar quantas vezes um número cabe em outro número e observar se há sobra ou não. Por exemplo, o número 4 cabe 2 vezes no 8 e não sobra resto; mas o número 3 cabe 3 vezes no 10 e sobra 1.",
        pergunta: "Se Malu tivesse 11 livros para repartir igualmente entre seus 3 sobrinhos, quantos livros sobrariam?",
        opcoes: ["Sobrariam 0 livros.", "Sobraria 1 livro.", "Sobrariam 2 livros.", "Sobrariam 3 livros."],
        respostaCorreta: "Sobrariam 2 livros.",
        justificativa: "A divisão de 11 livros por 3 sobrinhos é 11÷3=3 com resto 2. Cada sobrinho recebe 3 livros, e sobram 2 livros."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Sequência Numérica",
        contexto: "Rafa está confeccionando os convites para a festa junina. Ao todo, eles vão produzir 500 convites. Os colegas perceberam que ficaria mais fácil controlar a venda se os convites fossem numerados. Rafa foi escolhido para numerar uma parte deles. Ele começou a numerar a partir do 401.",
        pergunta: "Se a sequência numérica dos convites de Rafa está organizada em linhas de 10 convites, começando em 401, qual será o último número de convite na terceira linha (que começa em 421)?",
        opcoes: ["429", "430", "431", "440"],
        respostaCorreta: "430",
        justificativa: "1ª linha: 401 a 410.\n2ª linha: 411 a 420.\n3ª linha: 421 a 430."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Soma com Arredondamento",
        contexto: "Arredondar os números é preciso fazer arredondamentos para estimar resultados. Por exemplo, em vez de dizer que foram vendidos 662 ingressos para a festa, podemos dizer que foram vendidos, aproximadamente, 660 ingressos. O número 662 está mais próximo de 660 do que de 670. Nesse caso, o arredondamento foi para a dezena mais próxima. A turma da professora Giulia fez 489 bandeirinhas azuis, 625 verdes, 792 vermelhas e 531 amarelas.",
        pergunta: "Arredondando o total de bandeirinhas verdes e vermelhas para a centena mais próxima, qual seria a soma aproximada?",
        opcoes: ["600+700=1300", "600+800=1400", "700+800=1500", "700+700=1400"],
        respostaCorreta: "600+800=1400",
        justificativa: "Bandeirinhas verdes: 625. Arredondado para a centena mais próxima, 625 está mais perto de 600.\nBandeirinhas vermelhas: 792. Arredondado para a centena mais próxima, 792 está mais perto de 800.\nSoma aproximada: 600 + 800 = 1400."
    },

    // --- GRUPO 2: VERDADEIRO OU FALSO ---
    {
        tipo: "verdadeiro_falso",
        titulo: "Dobro, Metade e Divisão",
        contexto: "Para determinar o dobro de um número, é preciso multiplicá-lo por 2. Para calcular a metade de um número, é preciso dividir esse número por 2. A divisão representa a ideia de distribuir quantidades em partes iguais.",
        pergunta: "Analise as afirmações sobre dobro, metade e divisão:",
        afirmacoes: [
            "O dobro de 7 é 14, e a metade de 14 é 7.",
            "Quando dividimos 15 por 2, o resultado é um número inteiro sem sobra.",
            "Se um número for multiplicado por 2 e depois dividido por 2, o resultado é o número original.",
            "Distribuir 20 figurinhas igualmente entre 4 amigos é um exemplo de divisão."
        ],
        afirmacoesCorretasVF: ['V', 'F', 'V', 'V'],
        opcoes: ["V, F, V, V", "V, V, F, F", "F, V, V, V", "F, F, V, F"],
        respostaCorreta: "V, F, V, V",
        justificativa: "O dobro de 7 é 14, e a metade de 14 é 7. (Verdadeiro).\nQuando dividimos 15 por 2, o resultado é 7 com resto 1, não um número inteiro sem sobra. (Falso).\nMultiplicar por 2 e depois dividir por 2 retorna ao número original. (Verdadeiro).\nDistribuir 20 figurinhas igualmente entre 4 amigos (20÷4) é um exemplo de divisão. (Verdadeiro)."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Formação de Pares",
        contexto: "Na turma do 4º ano A, há 35 alunos. Eles dançarão a quadrilha e, para isso, precisam formar pares.",
        pergunta: "Sobre a formação de pares na turma do 4º ano A, analise as afirmações:",
        afirmacoes: [
            "Serão formadas 17 duplas completas.",
            "Um aluno ficará sem par.",
            "Se houvesse 34 alunos, todos teriam pares.",
            "É impossível formar pares com 35 alunos de forma que todos tenham um par."
        ],
        afirmacoesCorretasVF: ['V', 'V', 'V', 'V'],
        opcoes: ["V, V, V, V", "V, V, F, V", "F, F, V, V", "V, F, F, F"],
        respostaCorreta: "V, V, V, V",
        justificativa: "I. Serão formadas 17 duplas completas. (35÷2=17, R=1). Verdadeiro.\nII. Um aluno ficará sem par. (O resto 1). Verdadeiro.\nIII. Se houvesse 34 alunos, todos teriam pares. (34÷2=17) Verdadeiro.\nIV. É impossível formar pares com 35 alunos de forma que todos tenham um. (É possível formar pares, mas nem todos terão par). Verdadeiro."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Regras do Jogo de Cartas",
        contexto: "O jogo de cartas tem regras específicas: Forme um trio com seus colegas. Recorte os conjuntos de cartas disponíveis no anexo 6 (páginas 171 a 177). As cartas de espadas e de ouros devem ser misturadas e distribuídas entre os participantes. Cada jogador receberá 6 cartas.",
        pergunta: "Sobre a organização e regras do jogo de cartas, analise as afirmações:",
        afirmacoes: [
            "O jogo pode ser jogado individualmente.",
            "É necessário recortar as cartas do anexo 6 antes de iniciar.",
            "Apenas cartas de espadas e ouros são usadas no jogo.",
            "Cada jogador começa com 6 cartas."
        ],
        afirmacoesCorretasVF: ['F', 'V', 'V', 'V'],
        opcoes: ["V, F, V, V", "F, V, V, V", "V, V, F, F", "F, V, V, F"],
        respostaCorreta: "F, V, V, V",
        justificativa: "\"Forme um trio com seus colegas\" → O jogo não é individual. (Falso).\n\"Recorte os conjuntos de cartas disponíveis no anexo 6\" → É necessário recortar. (Verdadeiro).\n\"As cartas de espadas e de ouros devem ser misturadas\" → Apenas essas são mencionadas para distribuição inicial. (Verdadeiro).\n\"Cada jogador receberá 6 cartas.\" (Verdadeiro)."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Pontuação do Jogo de Cartas",
        contexto: "No jogo de cartas, o participante deve verificar se tem uma ou mais cartas que obedecem ao critério determinado. Para a pontuação: \"Se o participante possui mais de uma carta que atenda à condição, ele deve escolher a de maior valor e multiplicar o número dessa carta por 2\".",
        pergunta: "Considerando as regras de pontuação do jogo de cartas, analise as afirmações:",
        afirmacoes: [
            "Se o jogador tiver uma carta de valor 8 e a condição for \"valor da carta é maior que 5\", ele multiplica 8 por 2 para a pontuação.",
            "Se a condição for \"a carta é de ouros\" e o jogador tiver um 3 de espadas e um 7 de ouros, ele escolhe o 7 de ouros para a pontuação.",
            "Se um jogador tiver apenas uma carta que atenda à condição e o valor for 4, ele ganhará 8 pontos.",
            "Se um jogador tiver três cartas que atendem à condição (5, 6 e 7), ele deve escolher a carta de maior valor (7) para calcular a pontuação."
        ],
        afirmacoesCorretasVF: ['V', 'V', 'V', 'V'],
        opcoes: ["V, F, V, V", "V, V, F, V", "F, V, V, F", "V, V, V, V"],
        respostaCorreta: "V, V, V, V",
        justificativa: "Carta 8 > 5. Pontuação 8x2=16 (Verdadeiro).\nTem 7 de ouros e 3 de espadas. Condição \"a carta é de ouros\". Escolhe o 7 de ouros. (Verdadeiro).\nCarta 4 atende à condição (ex: \"é par\"). Pontuação 4x2=8 (Verdadeiro).\nCartas 5, 6, 7 atendem. Escolhe a de maior valor (7). Pontuação 7x2=14. (Verdadeiro)."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Venda de Convites de Walley",
        contexto: "Walley vendeu 3 convites por dia.",
        pergunta: "Sobre a venda de convites de Walley, analise as afirmações:",
        afirmacoes: [
            "Walley vendeu 12 convites em 4 dias.",
            "Se Walley tivesse vendido 4 convites por dia, ele levaria 3 dias para vender 12 convites.",
            "A representação dos convites de Walley no dia a dia mostra uma subtração repetida de 3 a partir de 12 até chegar a 0.",
            "Para vender 15 convites, Walley levaria 5 dias."
        ],
        afirmacoesCorretasVF: ['V', 'V', 'V', 'V'],
        opcoes: ["V, V, V, V", "F, V, V, V", "V, F, V, V", "V, V, F, V"],
        respostaCorreta: "V, V, V, V",
        justificativa: "Walley vende 3 convites por dia. Para vender 12 convites: 12÷3=4 dias. (Verdadeiro).\nSe vendesse 4 por dia: 12÷4=3 dias. (Verdadeiro).\nA venda pode ser representada por subtrações repetidas de 3 a partir de 12. (Verdadeiro).\nPara vender 15 convites: 15÷3=5 dias. (Verdadeiro)."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Divisão de Biscoitos",
        contexto: "Rafa levou à escola um pacote com 16 biscoitos para seu lanche. No recreio, ele estava em uma mesa com mais três amigos. Rafa resolveu, então, dividir igualmente os biscoitos entre ele e os amigos.",
        pergunta: "Sobre a divisão de biscoitos de Rafa, analise as afirmações:",
        afirmacoes: [
            "Rafa e seus três amigos formam um grupo de 4 pessoas.",
            "Cada pessoa recebeu 4 biscoitos.",
            "Se Rafa tivesse 15 biscoitos, sobraria 1 biscoito após a divisão.",
            "A divisão de biscoitos é um exemplo de repartição equitativa."
        ],
        afirmacoesCorretasVF: ['V', 'V', 'F', 'V'],
        opcoes: ["V, V, V, V", "V, V, F, V", "F, V, V, V", "V, F, V, V"],
        respostaCorreta: "V, V, F, V",
        justificativa: "Rafa (1) + 3 amigos = 4 pessoas. (V).\n16 biscoitos ÷ 4 pessoas = 4 biscoitos por pessoa. (V).\nSe tivesse 15 biscoitos para 4 pessoas: 15÷4=3 com resto 3. A afirmação \"sobraria 1 biscoito\" é Falsa.\nA divisão é um exemplo de repartição equitativa. (V)."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Organização de Melancias",
        contexto: "Na lojinha da dona Alice, acabou de chegar uma porção de melancias. Ela tem que guardá-las em quantidades iguais em 3 caixas.",
        pergunta: "Sobre a organização das melancias na lojinha, analise as afirmações:",
        afirmacoes: [
            "Se dona Alice tem 6 melancias, ela colocará 2 melancias em cada caixa.",
            "Se dona Alice tem 9 melancias, ela colocará 3 melancias em cada caixa.",
            "Se dona Alice tem 18 melancias, ela colocará 6 melancias em cada caixa.",
            "Para ter 7 melancias e distribuí-las igualmente em 3 caixas, sobraria 1 melancia."
        ],
        afirmacoesCorretasVF: ['V', 'V', 'V', 'V'],
        opcoes: ["V, V, V, V", "V, V, V, F", "F, V, V, V", "V, F, V, V"],
        respostaCorreta: "V, V, V, V",
        justificativa: "Distribuir em 3 caixas:\n6 melancias ÷ 3 = 2 por caixa. (V).\n9 melancias ÷ 3 = 3 por caixa. (V).\n18 melancias ÷ 3 = 6 por caixa. (V).\n7 melancias ÷ 3 = 2 com resto 1. Sobraria 1 melancia. (V)."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Distribuição de Doces",
        contexto: "Gigi vende doces e precisa organizá-los em pacotes com a mesma quantidade.",
        pergunta: "Analise as afirmações sobre a distribuição dos doces:",
        afirmacoes: [
            "Ao colocar 12 brigadeiros em 2 pacotes, Gigi colocou 6 brigadeiros em cada pacote.",
            "Ao colocar 12 beijinhos em 3 pacotes, Gigi colocou 3 beijinhos em cada pacote.",
            "Ao colocar 12 cajuzinhos em 4 pacotes, Gigi colocou 3 cajuzinhos em cada pacote.",
            "Ao colocar 12 casadinhos em 6 pacotes, Gigi colocou 2 casadinhos em cada pacote."
        ],
        afirmacoesCorretasVF: ['V', 'F', 'V', 'V'],
        opcoes: ["V, F, V, V", "V, V, V, F", "F, V, F, V", "V, F, F, V"],
        respostaCorreta: "V, F, V, V",
        justificativa: "12 brigadeiros em 2 pacotes: 12÷2=6 por pacote. (V).\n12 beijinhos em 3 pacotes: 12÷3=4 por pacote. A afirmação diz 3. (Falso).\n12 cajuzinhos em 4 pacotes: 12÷4=3 por pacote. (V).\n12 casadinhos em 6 pacotes: 12÷6=2 por pacote. (V)."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Composição de Números",
        contexto: "Usando a calculadora, compor números e registrar as operações nos espaços. Exemplo: Uma unidade de milhar, vinte e três dezenas e trinta e quatro unidades.",
        pergunta: "Sobre a composição de números usando unidades de milhar, centenas, dezenas e unidades, analise as afirmações:",
        afirmacoes: [
            "Uma unidade de milhar, vinte e três dezenas e trinta e quatro unidades formam o número 1264.",
            "Oitenta e cinco centenas e noventa e duas unidades formam o número 8592.",
            "Três unidades de milhar, setenta e quatro centenas, vinte e cinco dezenas e três unidades formam o número 37453.",
            "O número 471 pode ser formado com 4 centenas, 7 dezenas e 1 unidade."
        ],
        afirmacoesCorretasVF: ['V', 'V', 'F', 'V'],
        opcoes: ["V, V, V, V", "V, V, F, V", "V, F, V, F", "F, V, V, F"],
        respostaCorreta: "V, V, F, V",
        justificativa: "Afirmação 1: 1 milhar + 23 dezenas + 34 unidades = 1000 + 230 + 34 = 1264. (Verdadeiro).\nAfirmação 2: 85 centenas + 92 unidades = 8500 + 92 = 8592. (Verdadeiro).\nAfirmação 3: 3 milhar + 74 centenas + 25 dezenas + 3 unidades = 3000 + 7400 + 250 + 3 = 10653. A afirmação é 37453. (Falso).\nAfirmação 4: 4 centenas + 7 dezenas + 1 unidade = 400 + 70 + 1 = 471. (Verdadeiro)."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Arredondamento de Números",
        contexto: "Arredondar os números é preciso fazer arredondamentos para estimar resultados. Por exemplo, 662 arredondado para a dezena mais próxima é 660.",
        pergunta: "Sobre o arredondamento de números, analise as afirmações:",
        afirmacoes: [
            "O número 93 arredondado para a dezena mais próxima é 90.",
            "O número 847 arredondado para a dezena mais próxima é 850.",
            "O número 1689 arredondado para a centena mais próxima é 1700.",
            "O número 1532 arredondado para a centena mais próxima é 1500."
        ],
        afirmacoesCorretasVF: ['V', 'V', 'V', 'V'],
        opcoes: ["V, V, V, V", "F, V, V, V", "V, F, V, V", "V, V, F, V"],
        respostaCorreta: "V, V, V, V",
        justificativa: "93 arredondado para a dezena mais próxima é 90. (Verdadeiro).\n847 arredondado para a dezena mais próxima é 850. (Verdadeiro).\n1689 arredondado para a centena mais próxima é 1700. (Verdadeiro).\n1532 arredondado para a centena mais próxima é 1500. (Verdadeiro)."
    },

    // --- GRUPO 3: PERGUNTAS ABERTAS ---
    {
        tipo: "aberta",
        titulo: "Importância de Numerar Convites",
        contexto: "Rafa está numerando 500 convites para a festa junina, começando do 401. Os colegas perceberam que seria mais fácil controlar a venda se os convites fossem numerados.",
        pergunta: "Qual é a importância de numerar os convites em ordem crescente, como Rafa está fazendo, para o controle da venda na festa junina?",
        respostaCorreta: "Ajuda a organizar, controlar os convites vendidos e os que faltam, evitar fraudes ou perdas e facilita o controle de estoque. A numeração sequencial permite rastrear cada convite individualmente.",
        justificativa: "Resposta Esperada: Ajuda a organizar, controlar os convites vendidos e os que faltam, evitar fraudes ou perdas e facilita o controle de estoque. A numeração sequencial permite rastrear cada convite individualmente."
    },
    {
        tipo: "aberta",
        titulo: "Metade e Dobro",
        contexto: "Para determinar o dobro de um número, é preciso multiplicá-lo por 2. Para calcular a metade de um número, é preciso dividir esse número por 2.",
        pergunta: "Se você tem 12 maçãs e come a metade, quantas maçãs sobram? E se você tivesse o dobro dessas 12 maçãs inicialmente, quantas seriam?",
        respostaCorreta: "6, 24",
        justificativa: "Resposta Esperada: Sobram 6 maçãs. O dobro de 12 maçãs seria 24 maçãs.\nJustificativa: Metade de 12 é 12÷2=6. O dobro de 12 é 12x2=24."
    },
    {
        tipo: "aberta",
        titulo: "Divisão da Pipoca",
        contexto: "Helena dividiu igualmente 18 saquinhos de pipoca para ela e suas duas irmās venderem, sem sobrar nenhum saquinho.",
        pergunta: "Explique, usando suas palavras, como Helena e suas irmās fizeram para dividir igualmente os 18 saquinhos de pipoca. Que operação matemática elas usaram?",
        respostaCorreta: "Elas dividiram os 18 saquinhos igualmente entre as 3 pessoas (Helena e suas duas irmās), resultando em 6 saquinhos para cada uma. A operação matemática utilizada foi a divisão.",
        justificativa: "Resposta Esperada: Elas dividiram os 18 saquinhos igualmente entre as 3 pessoas (Helena e suas duas irmās), resultando em 6 saquinhos para cada uma. A operação matemática utilizada foi a divisão."
    },
    {
        tipo: "aberta",
        titulo: "Pontos no Jogo de Cartas",
        contexto: "No jogo de cartas, \"se o participante possui mais de uma carta que atenda à condição, ele deve escolher a de maior valor e multiplicar o número dessa carta por 2\" para a pontuação.",
        pergunta: "Imagine que você puxa uma carta de condição que diz: \"A carta é de espadas e o valor é maior que 5\". Você tem na mão um 7 de espadas e um 9 de espadas. Quantos pontos você faria e por quê?",
        respostaCorreta: "18",
        justificativa: "Resposta Esperada: Eu faria 18 pontos. Pois, entre o 7 e o 9 de espadas, o 9 é a carta de maior valor que atende à condição (\"valor maior que 5\"). Então, multiplico 9 por 2 (conforme a regra de pontuação), o que resulta em 18 pontos."
    },
    {
        tipo: "aberta",
        titulo: "Estratégia de Multiplicação",
        contexto: "Uma forma de resolver 5x15 é (5x10)+(5x5).",
        pergunta: "Usando a mesma ideia da multiplicação (5x15), como você resolveria 4x14, mostrando os passos?",
        respostaCorreta: "(4x10)+(4x4) = 40+16 = 56",
        justificativa: "Resposta Esperada: 4x14 pode ser resolvido como (4x10)+(4x4). Isso é 40+16=56.\nJustificativa: Essa estratégia usa a decomposição do número 14 em (10+4) e aplica a propriedade distributiva da multiplicação: 4x(10+4) = (4x10)+(4x4)."
    },
    {
        tipo: "aberta",
        titulo: "Embalando Jogos",
        contexto: "Uma fábrica embala 18 jogos em 3 caixas, de igual tamanho, cabendo a mesma quantidade de jogos. Se a fábrica tivesse um modelo de caixa maior, utilizando 2 caixas desse modelo, também é possível embalar 18 jogos, de forma igual.",
        pergunta: "Se a fábrica fosse usar 6 caixas para embalar os mesmos 18 jogos, quantos jogos caberiam em cada caixa? Explique se sobraria algum jogo.",
        respostaCorreta: "3",
        justificativa: "Resposta Esperada: Caberiam 3 jogos em cada caixa (18÷6=3). Não sobraria nenhum jogo.\nJustificativa: A divisão de 18 jogos por 6 caixas resulta em 3 jogos por caixa, sem deixar resto."
    },
    {
        tipo: "aberta",
        titulo: "Utilidade do Arredondamento",
        contexto: "O arredondamento ajuda a estimar resultados. Por exemplo, 662 arredondado para a dezena mais próxima é 660.",
        pergunta: "Por que arredondar um número como 123 para a dezena mais próxima (120) ou para a centena mais próxima (100) pode ser útil no dia a dia? Dê um exemplo.",
        respostaCorreta: "Arredondar é útil para fazer estimativas rápidas e simplificar cálculos mentais, facilitando a tomada de decisões em situações práticas. Por exemplo, se você tem R$ 123 e quer comprar algo, arredondar para R$ 120 permite ter uma ideia aproximada do seu saldo rapidamente, sem precisar do cálculo exato imediato.",
        justificativa: "Resposta Esperada: Arredondar é útil para fazer estimativas rápidas e simplificar cálculos mentais, facilitando a tomada de decisões em situações práticas. Por exemplo, se você tem R$ 123 e quer comprar algo, arredondar para R$ 120 permite ter uma ideia aproximada do seu saldo rapidamente, sem precisar do cálculo exato imediato."
    },

    // --- GRUPO 4: OPINIÕES / ESTUDOS DE CASO ---
    {
        tipo: "aberta",
        titulo: "Reorganizando a dança",
        contexto: "A turma do 3º ano A planejou fazer uma apresentação de dança na festa junina. Os professores de Educação Física os organizaram em 7 filas com 5 alunos em cada fila. No dia da apresentação, 3 alunos ficaram doentes e não puderam comparecer. Os professores precisam reorganizar os alunos para que todas as filas tenham o mesmo número de pessoas ou para que a apresentação não seja prejudicada.",
        pergunta: "Como os professores poderiam reorganizar os alunos que restaram para que a apresentação ainda seja um sucesso? Proponha uma solução.",
        respostaCorreta: "Formar 8 filas com 4 alunos em cada.",
        justificativa: "Resposta Esperada: Os professores podem reorganizar os alunos de forma que todas as filas tenham o mesmo número de pessoas. Como originalmente eram 7 filas com 5 alunos, havia 35 alunos. Com 3 faltas, restaram 32 alunos. Uma solução seria formar 8 filas com 4 alunos em cada, porque 8x4=32. Assim, todos os alunos participam e a apresentação continua organizada e bonita. Isso mostra que, com um pequeno ajuste, é possível manter o evento com sucesso mesmo quando nem todos comparecem."
    },
    {
        tipo: "aberta",
        titulo: "Estratégia no Jogo de Cartas",
        contexto: "No jogo de cartas, um jogador deve escolher a carta de maior valor que atenda à condição para pontuar. Se não tiver nenhuma carta que obedeça à condição sorteada, ele perderá 5 pontos. Um jogador chamado Walley está com as seguintes cartas: um 2 de espadas, um 5 de ouros e um 8 de espadas. A carta de condição sorteada é: \"O valor da carta é maior que 6\".",
        pergunta: "Qual carta ele deveria escolher para maximizar seus pontos, e por quê? Se a carta de condição fosse \"A carta é de ouros\", o que Walley deveria fazer?",
        respostaCorreta: "O 8 de espadas, porque é a de maior valor que atende à condição.",
        justificativa: "Resposta Esperada: Walley tem as cartas: 2 de espadas, 5 de ouros e 8 de espadas. Para a condição \"O valor da carta é maior que 6\", a melhor escolha é o 8 de espadas, pois tem o valor mais alto. Assim, ele fará 8x2=16 pontos, que é a maior pontuação possível com as cartas disponíveis. Se a condição fosse \"A carta é de ouros\", ele deve escolher o 5 de ouros, pois é a única carta desse naipe que ele tem. Mesmo sendo de valor mais baixo, ela atende à condição, e é melhor usá-la do que perder pontos."
    },
    {
        tipo: "aberta",
        titulo: "Organização dos Pacotes de Doces",
        contexto: "Na festa junina, há uma barraca de doces. Gigi vende brigadeiros, beijinhos, cajuzinhos e casadinhos. Ela tem 12 de cada tipo de doce e quer colocá-los em pacotes com quantidades iguais. No meio da festa, ela percebe que muitas pessoas querem pacotes com 5 doces, mas ela não tem como fazer isso com 12 doces sem que sobrem doces.",
        pergunta: "Se ela tivesse um total de 20 doces de um tipo, como ela poderia reorganizar para atender a esse pedido sem sobras? Qual seria o benefício dessa nova organização?",
        respostaCorreta: "Ela poderia montar 4 pacotes com 5 doces em cada.",
        justificativa: "Resposta Esperada: Se Gigi tivesse 20 doces de um tipo, ela poderia montar 4 pacotes com 5 doces em cada (porque 20÷5=4), sem deixar nenhum doce sobrando. O benefício dessa nova organização é que ela atende exatamente ao pedido dos clientes, evita desperdício, facilita a contagem e a venda, além de tornar o trabalho mais eficiente e organizado. Isso agrada os clientes e ajuda a barraca a vender mais."
    }
];
