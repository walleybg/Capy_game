const dadosDoQuiz = [
    // --- GRUPO 1: MÚLTIPLA ESCOLHA ---
    {
        tipo: "multipla_escolha",
        titulo: "Barraca de Adivinhas",
        contexto: "Na escola de Helena, iniciaram os preparativos para mais uma festa junina. Uma das brincadeiras favoritas da criançada é a barraca de adivinhas. O cartaz exposto nessa barraca, estava escrito o desafio a seguir: \"Descubra o número usando as pistas!\". As pistas eram: \"Tem três dezenas a mais que o número 135\", \"Tem oito unidades a menos que o número 98\", e \"Tem cinco centenas a mais que o número 143\".",
        pergunta: "Analisando as pistas do cartaz da barraca de adivinhas, qual das seguintes opções contém a resposta correta para cada pista, na ordem em que aparecem?",
        opcoes: ["165, 90, 643", "138, 90, 148", "165, 106, 643", "138, 106, 148"],
        respostaCorreta: "165, 90, 643",
        justificativa: "Pista 1: 135 + 30 = 165. Pista 2: 98 - 8 = 90. Pista 3: 143 + 500 = 643."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Venda de Convites",
        contexto: "Todas as crianças estão se esforçando para vender convites para a festa. Na sala de Helena, as meninas venderam 367 convites, e os meninos venderam 243.",
        pergunta: "Marque a opção que não reflete corretamente uma informação sobre a venda de convites na sala de Helena.",
        opcoes: ["As meninas venderam 124 convites a mais que os meninos.", "Juntos, meninos e meninas venderam um total de 610 convites.", "Para as meninas terem vendido o dobro dos meninos, elas precisariam ter vendido 486 convites.", "Se cada menino tivesse vendido 10 convites a mais, o total de convites vendidos pelos meninos seria 253."],
        respostaCorreta: "Se cada menino tivesse vendido 10 convites a mais, o total de convites vendidos pelos meninos seria 253.",
        justificativa: "Se cada um dos meninos tivesse vendido 10 convites a mais, o total seria 243 + (número de meninos * 10), e não 253. As outras opções estão corretas."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Vendas Individuais",
        contexto: "As informações sobre vendas de convites são: Rafa vendeu 8 convites, e Alice vendeu o dobro do que Rafa vendeu. Walley vendeu 2 convites por dia em 10 dias, Lara vendeu 4 convites por dia em 12 dias.",
        pergunta: "Todas as afirmativas sobre as vendas de convites são corretas, exceto:",
        opcoes: ["Alice vendeu 16 convites.", "Walley vendeu um total de 20 convites em 10 dias.", "Lara vendeu um total de 48 convites em 12 dias.", "O total de convites vendidos por Rafa e Alice juntos é 25 convites."],
        respostaCorreta: "O total de convites vendidos por Rafa e Alice juntos é 25 convites.",
        justificativa: "Rafa vendeu 8 e Alice vendeu 16 (o dobro). Juntos, eles venderam 8 + 16 = 24 convites, e não 25."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Dobro e Metade",
        contexto: "Para determinar o dobro de um número, é preciso multiplicá-lo por 2. Para calcular a metade de um número, é preciso dividir esse número por 2. Por exemplo, o dobro de 3 é 6, logo 2 × 3 = 6. A metade de 6 é 3, logo 6 ÷ 2 = 3.",
        pergunta: "Considerando os conceitos de \"dobro\" e \"metade\" explicados, qual das opções a seguir apresenta uma afirmação incorreta?",
        opcoes: ["O dobro de 4 é 8, e a metade de 8 é 4.", "A metade de 10 é 5, e o dobro de 5 é 10.", "O dobro de 16 é 32, e a metade de 32 é 16.", "Se um número é o dobro de 7, então a sua metade é 14."],
        respostaCorreta: "Se um número é o dobro de 7, então a sua metade é 14.",
        justificativa: "Se um número é o dobro de 7, ele é 14. A metade de 14 é 7, e não 14."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Divisão de Pipoca",
        contexto: "Helena estava responsável pela barraca de pipoca da festa junina. Ela dividiu igualmente 18 saquinhos de pipoca para ela e suas duas irmãs venderem, e não sobrou nenhum saquinho.",
        pergunta: "Sobre a situação de Helena e as pipocas, todas as afirmativas são corretas, exceto:",
        opcoes: ["Helena e suas duas irmãs totalizam 3 pessoas.", "Cada uma delas recebeu 6 saquinhos de pipoca.", "Se Helena tivesse mais uma irmã, cada uma receberia 4 saquinhos e sobrariam 2.", "A operação matemática realizada para dividir as pipocas é a multiplicação."],
        respostaCorreta: "A operação matemática realizada para dividir as pipocas é a multiplicação.",
        justificativa: "A operação para dividir igualmente é a divisão, não a multiplicação."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Alunos na Dança",
        contexto: "No ensaio da festa junina, os professores de Educação Física organizaram as turmas do 3º ano para a apresentação da dança. Na quadra, eles formaram, com os alunos de cada turma, 7 filas com 5 alunos em cada uma. Sabe-se que há 6 turmas de 3º ano na escola.",
        pergunta: "Quantos alunos de todas as turmas de 3º ano participarão da dança?",
        opcoes: ["35 alunos", "42 alunos", "210 alunos", "420 alunos"],
        respostaCorreta: "210 alunos",
        justificativa: "Cada turma tem 7 filas * 5 alunos/fila = 35 alunos. Como são 6 turmas, o total é 35 * 6 = 210 alunos."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Estratégias de Cálculo",
        contexto: "Para resolver situações-problema de adição, subtração, multiplicação ou divisão, é possível usar diferentes estratégias. Uma estratégia para multiplicação de 4 × 12 pode ser 2 × 12 = 24 e 2 × 24 = 48. Outra estratégia para 4 × 12 é (10 + 2) × 4, resultando em 40 + 8 = 48.",
        pergunta: "Qual das opções abaixo apresenta uma estratégia de cálculo para 64 × 2 que segue uma lógica semelhante à apresentada no texto?",
        opcoes: ["60 + 4 × 2", "2 × 32 = 64", "(60 × 2) + (4 × 2)", "64 + 64 + 64"],
        respostaCorreta: "(60 × 2) + (4 × 2)",
        justificativa: "A estratégia de decompor o número (64 em 60 + 4) e aplicar a distributiva é semelhante à do exemplo (10 + 2) x 4."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Divisão de Livros",
        contexto: "Para calcular a divisão, é possível pensar quantas vezes um número cabe em outro número e observar se há sobra ou não. Por exemplo, o número 4 cabe 2 vezes no 8 e não sobra resto; mas o número 3 cabe 3 vezes no 10 e sobra 1.",
        pergunta: "Se Malu tivesse 11 livros para repartir igualmente entre seus 3 sobrinhos, quantos livros sobrariam?",
        opcoes: ["Sobrariam 0 livros.", "Sobrariam 1 livro.", "Sobrariam 2 livros.", "Sobrariam 3 livros."],
        respostaCorreta: "Sobrariam 2 livros.",
        justificativa: "11 dividido por 3 é 3, com resto 2. Cada sobrinho receberia 3 livros e sobrariam 2."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Numeração de Convites",
        contexto: "Rafa está confeccionando os convites para a festa junina. Ao todo, eles vão produzir 500 convites. Os colegas perceberam que ficaria mais fácil controlar a venda se os convites fossem numerados. Rafa foi escolhido para numerar uma parte deles. Ele começou a numerar a partir do 401.",
        pergunta: "Se a sequência numérica dos convites de Rafa está organizada em linhas de 10 convites, começando em 401, qual será o último número de convite na terceira linha (que começa em 421)?",
        opcoes: ["429", "430", "431", "440"],
        respostaCorreta: "430",
        justificativa: "A primeira linha vai de 401 a 410. A segunda de 411 a 420. A terceira de 421 a 430."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Arredondamento de Bandeirinhas",
        contexto: "Arredondar os números é preciso fazer arredondamentos para estimar resultados. Por exemplo, em vez de dizer que foram vendidos 662 ingressos para a festa, podemos dizer que foram vendidos, aproximadamente, 660 ingressos. O número 662 está mais próximo de 660 do que de 670. Nesse caso, o arredondamento foi para a dezena mais próxima.",
        pergunta: "A turma da professora Giulia fez 489 bandeirinhas azuis, 625 verdes, 792 vermelhas e 531 amarelas. Arredondando o total de bandeirinhas verdes e vermelhas para a centena mais próxima, qual seria a soma aproximada?",
        opcoes: ["600 + 700 = 1300", "600 + 800 = 1400", "700 + 800 = 1500", "700 + 700 = 1400"],
        respostaCorreta: "600 + 800 = 1400",
        justificativa: "625 arredondado para a centena mais próxima é 600. 792 arredondado para a centena mais próxima é 800. A soma aproximada é 600 + 800 = 1400."
    },

    // --- GRUPO 2: VERDADEIRO OU FALSO ---
    {
        tipo: "verdadeiro_falso",
        titulo: "Dobro, Metade e Divisão",
        contexto: "Para determinar o dobro de um número, é preciso multiplicá-lo por 2. Para calcular a metade de um número, é preciso dividir esse número por 2. A divisão representa a ideia de distribuir quantidades em partes iguais.",
        pergunta: "Analise as afirmações sobre dobro, metade e divisão.",
        afirmacoes: ["O dobro de 7 é 14, e a metade de 14 é 7.", "Quando dividimos 15 por 2, o resultado é um número inteiro sem sobra.", "Se um número for multiplicado por 2 e depois dividido por 2, o resultado é o número original.", "Distribuir 20 figurinhas igualmente entre 4 amigos é um exemplo de divisão."],
        opcoes: ["V, F, V, V", "V, V, F, F", "F, V, V, V", "F, F, V, F"],
        respostaCorreta: "V, F, V, V",
        justificativa: "I. Verdadeiro. II. Falso (15/2 = 7,5, não é inteiro). III. Verdadeiro. IV. Verdadeiro."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Formação de Pares",
        contexto: "Na turma do 4º ano A, há 35 alunos. Eles dançarão a quadrilha e, para isso, precisam formar pares. Duplas duplas serão formadas? Todos os alunos terão pares?",
        pergunta: "Sobre a formação de pares na turma do 4º ano A, analise as afirmações:",
        afirmacoes: ["Serão formadas 17 duplas completas.", "Um aluno ficará sem par.", "Se houvesse 34 alunos, todos teriam pares.", "É impossível formar pares com 35 alunos de forma que todos tenham um par."],
        opcoes: ["V, V, V, V", "V, V, F, V", "F, F, V, V", "V, F, F, F"],
        respostaCorreta: "V, V, V, V",
        justificativa: "Todas as afirmações estão corretas. 35 dividido por 2 resulta em 17 com resto 1."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Regras do Jogo de Cartas",
        contexto: "O jogo de cartas tem regras específicas: Forme um trio com seus colegas. Recorte os conjuntos de cartas disponíveis no anexo 6 (páginas 171 a 177). Separe materiais como papel, lápis e borracha para anotar os pontos de cada rodada. As cartas de espadas e de ouros devem ser misturadas e distribuídas entre os participantes. Cada jogador receberá 6 cartas. Depois, as cartas de condição devem ser embaralhadas e colocadas viradas para baixo, formando um monte no centro da mesa.",
        pergunta: "Sobre a organização e regras do jogo de cartas, analise as afirmações:",
        afirmacoes: ["O jogo pode ser jogado individualmente.", "É necessário recortar as cartas do anexo 6 antes de iniciar.", "Apenas cartas de espadas e ouros são usadas no jogo.", "Cada jogador começa com 6 cartas."],
        opcoes: ["V, F, V, V", "F, V, V, V", "V, V, F, F", "F, V, V, F"],
        respostaCorreta: "F, V, V, V",
        justificativa: "I. Falso (o jogo é para trios). II. Verdadeiro. III. Verdadeiro. IV. Verdadeiro."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Pontuação no Jogo de Cartas",
        contexto: "No jogo de cartas, o participante puxará uma carta de condição, que servirá apenas ao jogador que a retirou. Em seguida, o participante deve verificar se tem uma ou mais cartas que obedecem ao critério determinado. Por exemplo: \"O valor da carta é maior que a metade de 6\" para uma carta de 10 de ouros. Para a pontuação: \"Se o participante possui mais de uma carta que atenda à condição, ele deve escolher a de maior valor e multiplicar o número dessa carta por 2. Por exemplo, a carta de maior valor de Josiane foi 9. Assim, o cálculo da sua pontuação será: 2 x 9 = 18. Josiane somará 18 pontos na primeira rodada\".",
        pergunta: "Considerando as regras de pontuação do jogo de cartas, analise as afirmações:",
        afirmacoes: ["Se o jogador tiver uma carta de valor 8 e a condição for \"valor da carta é maior que 5\", ele multiplica 8 por 2 para a pontuação.", "Se a condição for \"a carta é de ouros\" e o jogador tiver um 3 de espadas e um 7 de ouros, ele escolhe o 7 de ouros para a pontuação.", "Se um jogador tiver apenas uma carta que atenda à condição e o valor for 4, ele ganhará 8 pontos.", "Se um jogador tiver três cartas que atendem à condição (5, 6 e 7), ele deve escolher a carta de maior valor (7) para calcular a pontuação."],
        opcoes: ["V, F, V, V", "V, V, F, V", "F, V, V, F", "V, V, V, V"],
        respostaCorreta: "V, V, V, V",
        justificativa: "Todas as afirmações estão corretas e seguem as regras de pontuação do jogo."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Venda de Convites de Walley",
        contexto: "Walley vendeu 3 convites por dia. Em quantos dias ele vendeu 12 convites?",
        pergunta: "Sobre a venda de convites de Walley, analise as afirmações:",
        afirmacoes: ["Walley vendeu 12 convites em 4 dias.", "Se Walley tivesse vendido 4 convites por dia, ele levaria 3 dias para vender 12 convites.", "A representação dos convites de Walley no dia a dia mostra uma subtração repetida de 3 a partir de 12 até chegar a 0.", "Para vender 15 convites, Walley levaria 5 dias."],
        opcoes: ["V, V, V, V", "F, V, V, V", "V, F, V, V", "V, V, F, V"],
        respostaCorreta: "V, V, V, V",
        justificativa: "Todas as afirmações estão corretas. 12/3=4 dias; 12/4=3 dias; 15/3=5 dias. A divisão pode ser vista como subtração sucessiva."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Divisão de Biscoitos",
        contexto: "Rafa levou à escola um pacote com 16 biscoitos para seu lanche. No recreio, ele estava em uma mesa com mais três amigos. Rafa resolveu, então, dividir igualmente os biscoitos entre ele e os amigos.",
        pergunta: "Sobre a divisão de biscoitos de Rafa, analise as afirmações:",
        afirmacoes: ["Rafa e seus três amigos formam um grupo de 4 pessoas.", "Cada pessoa recebeu 4 biscoitos.", "Se Rafa tivesse 15 biscoitos, sobraria 1 biscoito após a divisão.", "A divisão de biscoitos é um exemplo de repartição equitativa."],
        opcoes: ["V, V, F, V", "V, V, V, V", "F, V, V, V", "V, F, V, V"],
        respostaCorreta: "V, V, F, V",
        justificativa: "I. Verdadeiro. II. Verdadeiro (16/4=4). III. Falso (15/4 = 3 com resto 3). IV. Verdadeiro."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Organização de Melancias",
        contexto: "Na lojinha da dona Alice, acabou de chegar uma porção de melancias. Ela tem que guardá-las em quantidades iguais em 3 caixas.",
        pergunta: "Sobre a organização das melancias na lojinha, analise as afirmações:",
        afirmacoes: ["Se dona Alice tem 6 melancias, ela colocará 2 melancias em cada caixa.", "Se dona Alice tem 9 melancias, ela colocará 3 melancias em cada caixa.", "Se dona Alice tem 18 melancias, ela colocará 6 melancias em cada caixa.", "Para ter 7 melancias e distribuí-las igualmente em 3 caixas, sobraria 1 melancia."],
        opcoes: ["V, V, V, V", "V, V, V, F", "F, V, V, V", "V, F, V, V"],
        respostaCorreta: "V, V, V, V",
        justificativa: "Todas as afirmações estão corretas. 6/3=2; 9/3=3; 18/3=6; 7/3=2 com resto 1."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Distribuição de Doces",
        contexto: "A divisão representa a ideia de distribuir quantidades em partes iguais. Para calcular a divisão, é possível pensar quantas vezes um número cabe em outro número e observar se há sobra ou não.",
        pergunta: "Gigi vende doces e precisa organizá-los em pacotes com a mesma quantidade. Analise as afirmações sobre a distribuição dos doces:",
        afirmacoes: ["Ao colocar 12 brigadeiros em 2 pacotes, Gigi colocou 6 brigadeiros em cada pacote.", "Ao colocar 12 beijinhos em 3 pacotes, Gigi colocou 3 beijinhos em cada pacote.", "Ao colocar 12 cajuzinhos em 4 pacotes, Gigi colocou 3 cajuzinhos em cada pacote.", "Ao colocar 12 casadinhos em 6 pacotes, Gigi colocou 2 casadinhos em cada pacote."],
        opcoes: ["V, F, V, V", "V, V, V, F", "F, V, F, V", "V, F, F, V"],
        respostaCorreta: "V, F, V, V",
        justificativa: "I. Verdadeiro (12/2=6). II. Falso (12/3=4). III. Verdadeiro (12/4=3). IV. Verdadeiro (12/6=2)."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Composição de Números",
        contexto: "Usando a calculadora, compor números e registrar as operações nos espaços. Exemplo: Uma unidade de milhar, vinte e três dezenas e trinta e quatro unidades.",
        pergunta: "Sobre a composição de números usando unidades de milhar, centenas, dezenas e unidades, analise as afirmações:",
        afirmacoes: ["Uma unidade de milhar, vinte e três dezenas e trinta e quatro unidades formam o número 1264.", "Oitenta e cinco centenas e noventa e duas unidades formam o número 8592.", "Três unidades de milhar, setenta e quatro centenas, vinte e cinco dezenas e três unidades formam o número 37453.", "O número 471 pode ser formado com 4 centenas, 7 dezenas e 1 unidade."],
        opcoes: ["V, V, V, V", "V, V, F, V", "V, F, V, F", "F, V, V, F"],
        respostaCorreta: "F, V, V, F",
        justificativa: "I. Falso (1000 + 230 + 34 = 1264). II. Verdadeiro (8500 + 92 = 8592). III. Falso (3000 + 7400 + 250 + 3 = 10653). IV. Verdadeiro."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Arredondamento de Números",
        contexto: "Arredondar os números é preciso fazer arredondamentos para estimar resultados. Por exemplo, 662 arredondado para a dezena mais próxima é 660.",
        pergunta: "Sobre o arredondamento de números, analise as afirmações:",
        afirmacoes: ["O número 93 arredondado para a dezena mais próxima é 90.", "O número 847 arredondado para a dezena mais próxima é 850.", "O número 1689 arredondado para a centena mais próxima é 1700.", "O número 1532 arredondado para a centena mais próxima é 1500."],
        opcoes: ["V, V, V, V", "F, V, V, V", "V, F, V, V", "V, V, F, V"],
        respostaCorreta: "V, V, V, V",
        justificativa: "Todas as afirmações sobre arredondamento estão corretas."
    },

    // --- GRUPO 3: PERGUNTAS ABERTAS ---
    {
        tipo: "aberta",
        titulo: "Controle de Vendas",
        contexto: "Rafa está numerando 500 convites para a festa junina, começando do 401. Os colegas perceberam que seria mais fácil controlar a venda se os convites fossem numerados.",
        pergunta: "Qual é a importância de numerar os convites em ordem crescente, como Rafa está fazendo, para o controle da venda na festa junina?",
        respostaCorreta: "Para saber quantos convites foram vendidos e evitar fraudes.",
        justificativa: "A numeração sequencial permite um controle preciso sobre a quantidade de convites vendidos e ajuda a identificar convites falsos ou duplicados."
    },
    {
        tipo: "aberta",
        titulo: "Dobro e Metade de Maçãs",
        contexto: "Para determinar o dobro de um número, é preciso multiplicá-lo por 2. Para calcular a metade de um número, é preciso dividir esse número por 2.",
        pergunta: "Se você tem 12 maçãs e come a metade, quantas maçãs sobram? E se você tivesse o dobro dessas 12 maçãs inicialmente, quantas seriam?",
        respostaCorreta: "Sobram 6 maçãs. O dobro seria 24 maçãs.",
        justificativa: "A metade de 12 é 6. O dobro de 12 é 24."
    },
    {
        tipo: "aberta",
        titulo: "Divisão de Pipoca",
        contexto: "Helena dividiu igualmente 18 saquinhos de pipoca para ela e suas duas irmãs venderem, sem sobrar nenhum saquinho.",
        pergunta: "Explique, usando suas palavras, como Helena e suas irmãs fizeram para dividir igualmente os 18 saquinhos de pipoca. Que operação matemática elas usaram?",
        respostaCorreta: "Elas usaram a divisão. Dividiram 18 por 3, resultando em 6 para cada uma.",
        justificativa: "A operação de divisão (18 ÷ 3 = 6) garante que cada uma das 3 pessoas receba a mesma quantidade de saquinhos de pipoca."
    },
    {
        tipo: "aberta",
        titulo: "Pontuação no Jogo",
        contexto: "No jogo de cartas, \"se o participante possui mais de uma carta que atenda à condição, ele deve escolher a de maior valor e multiplicar o número dessa carta por 2\" para a pontuação.",
        pergunta: "Imagine que você puxa uma carta de condição que diz: \"A carta é de espadas e o valor é maior que 5\". Você tem na mão um 7 de espadas e um 9 de espadas. Quantos pontos você faria e por quê?",
        respostaCorreta: "18 pontos, pois escolheria a carta de maior valor (9) e multiplicaria por 2.",
        justificativa: "A regra manda escolher a carta de maior valor que atende à condição (9 de espadas) e multiplicar por 2, resultando em 18 pontos."
    },
    {
        tipo: "aberta",
        titulo: "Estratégia de Multiplicação",
        contexto: "Uma forma de resolver 5 × 15 é (5 × 10) + (5 × 5).",
        pergunta: "Usando a mesma ideia da multiplicação (5 × 15), como você resolveria 4 × 14, mostrando os passos?",
        respostaCorreta: "(4 × 10) + (4 × 4) = 40 + 16 = 56",
        justificativa: "Decompondo 14 em 10 + 4 e aplicando a propriedade distributiva: (4 × 10) + (4 × 4) = 40 + 16 = 56."
    },
    {
        tipo: "aberta",
        titulo: "Embalando Jogos",
        contexto: "Uma fábrica embala 18 jogos em 3 caixas, de igual tamanho, cabendo a mesma quantidade de jogos. Se a fábrica tivesse um modelo de caixa maior, utilizando 2 caixas desse modelo, também é possível embalar 18 jogos, de forma igual.",
        pergunta: "Se a fábrica fosse usar 6 caixas para embalar os mesmos 18 jogos, quantos jogos caberiam em cada caixa? Explique se sobraria algum jogo.",
        respostaCorreta: "Caberiam 3 jogos em cada caixa, sem sobrar nenhum.",
        justificativa: "Dividindo 18 jogos por 6 caixas, o resultado é 3 jogos por caixa, sem resto."
    },
    {
        tipo: "aberta",
        titulo: "Utilidade do Arredondamento",
        contexto: "O arredondamento ajuda a estimar resultados. Por exemplo, 662 arredondado para a dezena mais próxima é 660.",
        pergunta: "Por que arredondar um número como 123 para a dezena mais próxima (120) ou para a centena mais próxima (100) pode ser útil no dia a dia? Dê um exemplo.",
        respostaCorreta: "Para fazer cálculos rápidos de cabeça, como estimar o troco.",
        justificativa: "O arredondamento simplifica os números, facilitando cálculos mentais rápidos, como ao estimar o custo total de compras ou o troco a receber."
    },

    // --- GRUPO 4: OPINIÕES (Estudo de Caso) ---
    {
        tipo: "aberta",
        titulo: "Reorganização da Dança",
        contexto: "A turma do 3º ano A planejou fazer uma apresentação de dança na festa junina. Os professores de Educação Física os organizaram em 7 filas com 5 alunos em cada fila. No dia da apresentação, 3 alunos ficaram doentes e não puderam comparecer. Os professores precisam reorganizar os alunos para que todas as filas tenham o mesmo número de pessoas ou para que a apresentação não seja prejudicada.",
        pergunta: "Como os professores poderiam reorganizar os alunos que restaram para que a apresentação ainda seja um sucesso? Proponha uma solução.",
        respostaCorreta: "Formar 4 filas de 8 alunos ou 8 filas de 4 alunos.",
        justificativa: "Com 32 alunos restantes (35 - 3), os professores podem criar novas formações com divisores de 32, como 4 filas de 8 ou 8 filas de 4, mantendo a organização."
    },
    {
        tipo: "aberta",
        titulo: "Decisão no Jogo de Cartas",
        contexto: "No jogo de cartas, um jogador deve escolher a carta de maior valor que atenda à condição para pontuar. Se não tiver nenhuma carta que obedeça à condição sorteada, ele perderá 5 pontos. Um jogador chamado Walley está com as seguintes cartas: um 2 de espadas, um 5 de ouros e um 8 de espadas. A carta de condição sorteada é: \"O valor da carta é maior que 6\".",
        pergunta: "Walley tem duas opções de cartas que atendem à condição. Qual carta ele deveria escolher para maximizar seus pontos, e por quê? Se a carta de condição fosse \"A carta é de ouros\", o que Walley deveria fazer?",
        respostaCorreta: "Ele deve escolher o 8 de espadas para fazer 16 pontos. Se a condição fosse 'ouros', ele escolheria o 5 de ouros.",
        justificativa: "Para a condição 'maior que 6', ele deve escolher o 8 (maior valor) para fazer 16 pontos. Para a condição 'ouros', ele usaria o 5 de ouros para fazer 10 pontos."
    },
    {
        tipo: "aberta",
        titulo: "Estratégia de Vendas",
        contexto: "Na festa junina, a barraca de doces está vendendo 3 brigadeiros por R$ 5,00. Um cliente quer comprar apenas um brigadeiro e pergunta o preço. O vendedor não sabe o que fazer, pois a promoção é para 3 unidades.",
        pergunta: "Qual seria uma boa estratégia para o vendedor lidar com essa situação, considerando que ele não quer perder a venda nem quebrar a lógica da promoção?",
        respostaCorreta: "Vender um brigadeiro por um preço proporcionalmente maior, como R$ 2,00.",
        justificativa: "Vender a unidade por um preço maior (ex: R$ 2,00) incentiva a compra do pacote promocional, mas ainda atende o cliente que quer apenas um, garantindo a venda."
    }
];

