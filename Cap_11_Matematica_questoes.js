// Questões do Capítulo 11 de Matemática - Para medir o mundo
const dadosDoQuizMatematica11 = [
    // Questões de Múltipla Escolha (1-28)
    {
        titulo: "Dobro de um Número",
        contexto: "Conceitos fundamentais sobre operações matemáticas básicas.",
        pergunta: "Marque a alternativa correta sobre o procedimento necessário para determinar o dobro de um número, conforme definido nas fontes:",
        opcoes: [
            "É preciso somar o número duas vezes e dividir por dois.",
            "É preciso multiplicá-lo por dois.",
            "É preciso dividi-lo por dois.",
            "É preciso somar dois ao número."
        ],
        respostaCorreta: "É preciso multiplicá-lo por dois.",
        explicacao: "O dobro de um número é o resultado de multiplicar esse número por 2. Exemplo: O dobro de 5 é 5×2=10.",
        tipo: "multipla_escolha"
    },
    {
        titulo: "Metade de um Número",
        contexto: "Conceitos sobre cálculo da metade de números.",
        pergunta: "Marque a opção que não reflete os conceitos abordados. Em relação ao cálculo da metade de um número, o procedimento correto é:",
        opcoes: [
            "Multiplicar o número por 1/2.",
            "Dividir o número por 2.",
            "Encontrar um número que, multiplicado por 2, resulte no número original.",
            "Realizar uma divisão."
        ],
        respostaCorreta: "Encontrar um número que, multiplicado por 2, resulte no número original.",
        explicacao: "A opção C é a definição da metade de um número, mas não é um procedimento operacional para calcular. A metade é obtida por divisão por 2 ou multiplicação por 1/2.",
        tipo: "multipla_escolha"
    },
    {
        titulo: "Valor Posicional",
        contexto: "Compreensão sobre valor posicional dos algarismos.",
        pergunta: "Em uma adivinha, o número procurado tem três dezenas a mais que o número 135. Qual o valor posicional que deve ser alterado?",
        opcoes: [
            "A unidade.",
            "A centena.",
            "A dezena.",
            "A unidade e a dezena."
        ],
        respostaCorreta: "A dezena.",
        explicacao: "Três dezenas equivalem a 30. O número é 135+30=165. O número 135 tem 3 dezenas, e o 165 tem 6 dezenas. A operação (+30) afeta diretamente o algarismo das dezenas.",
        tipo: "multipla_escolha"
    },
    {
        titulo: "Arredondamento de Números",
        contexto: "Conceitos sobre arredondamento de números grandes.",
        pergunta: "Todas as afirmativas são corretas, exceto em relação ao arredondamento de números grandes:",
        opcoes: [
            "O arredondamento ajuda a obter resultados estimados.",
            "O arredondamento pode ser feito para a dezena ou centena mais próxima.",
            "Se 662 for arredondado para a dezena mais próxima, o resultado é 670.",
            "O número 776 deve ficar mais próximo de 700 do que de 800."
        ],
        respostaCorreta: "Se 662 for arredondado para a dezena mais próxima, o resultado é 670.",
        explicacao: "Para arredondar 662 para a dezena mais próxima, olhamos para a unidade (2). Como 2 é menor que 5, o arredondamento é para baixo, mantendo a dezena: 660. O número 670 seria o arredondamento de, por exemplo, 665 ou 668.",
        tipo: "multipla_escolha"
    },
    {
        titulo: "Conceito de Divisão",
        contexto: "Compreensão sobre a operação de divisão.",
        pergunta: "Em um problema de divisão, como o de repartir 18 saquinhos de pipoca, a divisão representa a ideia de:",
        opcoes: [
            "Apenas somar quantidades.",
            "Adicionar partes desiguais.",
            "Distribuir quantidades em partes iguais.",
            "Multiplicar grupos."
        ],
        respostaCorreta: "Distribuir quantidades em partes iguais.",
        explicacao: "A divisão é a operação matemática fundamental para a distribuição ou repartição de uma quantidade em partes iguais.",
        tipo: "multipla_escolha"
    },
    {
        titulo: "Distribuição de Biscoitos",
        contexto: "Problema prático de divisão com biscoitos.",
        pergunta: "Pelo contexto da imagem dos biscoitos, para quantas pessoas Igor distribuiu igualmente um pacote de 16 biscoitos?",
        opcoes: [
            "16 pessoas.",
            "4 pessoas (ele e mais três amigos).",
            "3 pessoas (somente os amigos).",
            "2 pessoas (ele e o amigo mais próximo)."
        ],
        respostaCorreta: "4 pessoas (ele e mais três amigos).",
        explicacao: "Se 16 biscoitos foram distribuídos igualmente e cada pessoa recebeu 4 (16÷4=4), o total de pessoas é 4. O contexto sugere que ele (Igor) é um dos participantes, então são ele e mais três amigos.",
        tipo: "multipla_escolha"
    },
    {
        titulo: "Instrumentos de Medição",
        contexto: "Conhecimento sobre instrumentos de medição de comprimento.",
        pergunta: "Qual instrumento de medição de comprimento é articulado, permitindo medir grandes comprimentos de forma dobrável?",
        opcoes: [
            "Régua.",
            "Trena.",
            "Fita métrica.",
            "Metro articulado."
        ],
        respostaCorreta: "Metro articulado.",
        explicacao: "O metro articulado (ou metro de carpinteiro) é composto por segmentos rígidos interligados por articulações, permitindo que seja dobrado para transporte e desdobrado para medir grandes distâncias.",
        tipo: "multipla_escolha"
    },
    {
        titulo: "Unidade de Medida de Altura",
        contexto: "Unidades de medida mais adequadas para diferentes situações.",
        pergunta: "Marque a alternativa correta. Qual unidade de medida de comprimento é a mais comum para medir a altura de uma pessoa?",
        opcoes: [
            "Centímetro (cm).",
            "Metro (m).",
            "Quilômetro (km).",
            "Polegadas. (Informação externa)"
        ],
        respostaCorreta: "Metro (m).",
        explicacao: "O metro é a unidade padrão do Sistema Internacional para medir comprimentos. A altura de uma pessoa é tipicamente expressa em metros, muitas vezes com frações em centímetros (ex: 1,75 m), mas o metro é a unidade principal.",
        tipo: "multipla_escolha"
    },
    {
        titulo: "Equivalência do Quilômetro",
        contexto: "Conversões entre unidades de medida de comprimento.",
        pergunta: "O quilômetro (km) é uma unidade de medida de comprimento que equivale a:",
        opcoes: [
            "100 metros.",
            "10 metros.",
            "1.000 metros.",
            "10.000 metros."
        ],
        respostaCorreta: "1.000 metros.",
        explicacao: "A relação de conversão é 1 km = 1.000 m.",
        tipo: "multipla_escolha"
    },
    {
        titulo: "Medidas Não Convencionais",
        contexto: "Classificação de tipos de medidas.",
        pergunta: "A medição realizada por Júlia, que usou seus pés para medir o tapete, é classificada como:",
        opcoes: [
            "Medida convencional (padrão).",
            "Medida com instrumento preciso.",
            "Medida usando o corpo humano como referência.",
            "Medida baseada em centímetros."
        ],
        respostaCorreta: "Medida usando o corpo humano como referência.",
        explicacao: "Medidas feitas com partes do corpo (palmo, pé, passo) são chamadas de medidas não convencionais ou, como na opção, usando o corpo humano como referência.",
        tipo: "multipla_escolha"
    },
    {
        titulo: "Conversão Metro-Centímetro",
        contexto: "Conversão entre metros e centímetros.",
        pergunta: "Se você tem 1 metro e 32 centímetros, quantos centímetros você tem no total?",
        opcoes: [
            "32 cm.",
            "100 cm.",
            "132 cm.",
            "1.320 cm."
        ],
        respostaCorreta: "132 cm.",
        explicacao: "Sabe-se que 1 metro = 100 centímetros. Logo, 1 m e 32 cm = 100 cm + 32 cm = 132 cm.",
        tipo: "multipla_escolha"
    },
    {
        titulo: "Conceito de Perímetro",
        contexto: "Compreensão sobre perímetro de figuras geométricas.",
        pergunta: "O que representa o perímetro de uma sala de aula?",
        opcoes: [
            "A largura da sala.",
            "O comprimento da sala.",
            "A soma das medidas dos comprimentos das paredes que a formam.",
            "A distância do centro até a porta."
        ],
        respostaCorreta: "A soma das medidas dos comprimentos das paredes que a formam.",
        explicacao: "O perímetro é a medida do contorno de uma figura plana, obtida pela soma dos comprimentos de todos os seus lados (as paredes da sala).",
        tipo: "multipla_escolha"
    },
    {
        titulo: "Interpretação de Gráfico de Linhas",
        contexto: "Análise de gráficos de linhas.",
        pergunta: "No gráfico de Macacos Infectados do livro, os pontos amarelos ligados pela linha azul representam o quê?",
        opcoes: [
            "A temperatura máxima.",
            "O número de macacos em um determinado local.",
            "A quantidade de macacos infectados pelo vírus da febre amarela em cada mês.",
            "A velocidade do vento."
        ],
        respostaCorreta: "A quantidade de macacos infectados pelo vírus da febre amarela em cada mês.",
        explicacao: "Um gráfico de linhas (pontos ligados por linha) é usado para mostrar a evolução de uma variável ao longo do tempo (neste caso, o número de macacos infectados a cada mês).",
        tipo: "multipla_escolha"
    },
    {
        titulo: "Interpretação de Gráfico de Barras",
        contexto: "Análise de gráficos de barras sobre transportes.",
        pergunta: "No gráfico de transportes do livro, qual é o meio de locomoção menos utilizado pelos alunos para ir à escola?",
        opcoes: [
            "Bicicleta.",
            "Van escolar.",
            "Ônibus.",
            "Carro."
        ],
        respostaCorreta: "Bicicleta.",
        explicacao: "Em um gráfico de barras, o menor valor corresponde à barra de menor altura ou comprimento. Assumindo que, no gráfico padrão de transporte escolar, a bicicleta é a categoria com o menor número de alunos.",
        tipo: "multipla_escolha"
    },
    {
        titulo: "Decomposição de Números",
        contexto: "Compreensão sobre decomposição numérica.",
        pergunta: "Qual dos registros de quilometragem representa um valor de Três de milhar, setenta e quatro centenas, vinte e cinco dezenas e três unidades?",
        opcoes: [
            "3453.",
            "7453.",
            "74253.",
            "5821."
        ],
        respostaCorreta: "7453.",
        explicacao: "7453: 7 milhar, 4 centenas, 5 dezenas, 3 unidades.",
        tipo: "multipla_escolha"
    },
    {
        titulo: "Estratégia de Decomposição",
        contexto: "Pensamento computacional e estratégias de resolução.",
        pergunta: "A professora Silvana, para medir a altura dos alunos e organizar o processo, utilizou a estratégia de decomposição. Essa estratégia consiste em:",
        opcoes: [
            "Fazer a tarefa rapidamente sem planejamento.",
            "Adicionar partes menores até atingir a totalidade.",
            "Dividir uma tarefa maior em partes menores para simplificar a execução.",
            "Comparar as medidas com o corpo humano."
        ],
        respostaCorreta: "Dividir uma tarefa maior em partes menores para simplificar a execução.",
        explicacao: "Em um contexto geral (e no pensamento computacional), a decomposição é a estratégia de quebrar um problema ou tarefa complexa em partes menores e mais gerenciáveis.",
        tipo: "multipla_escolha"
    },
    {
        titulo: "Conversão de Medidas",
        contexto: "Conversão entre metros e centímetros em situação prática.",
        pergunta: "Se a fita métrica usada pelo professor Felipe para formar um fio tinha 1 metro e 20 cm, qual era o comprimento total desse fio em centímetros?",
        opcoes: [
            "100 cm.",
            "120 cm.",
            "20 cm.",
            "102 cm."
        ],
        respostaCorreta: "120 cm.",
        explicacao: "1 metro = 100 cm. Logo, 1 metro e 20 cm = 100 cm + 20 cm = 120 cm.",
        tipo: "multipla_escolha"
    },
    {
        titulo: "Subtração de Números",
        contexto: "Operação de subtração em situação prática.",
        pergunta: "Na escola de Marta, as meninas venderam 367 convites e os meninos venderam 243 convites. Qual é a diferença entre a quantidade de convites vendidos pelas meninas e pelos meninos?",
        opcoes: [
            "124 convites.",
            "610 convites.",
            "134 convites.",
            "214 convites."
        ],
        respostaCorreta: "124 convites.",
        explicacao: "A diferença é calculada pela subtração: 367 - 243 = 124 convites.",
        tipo: "multipla_escolha"
    },
    {
        titulo: "Divisão em Caixas",
        contexto: "Problema de divisão com diferentes tamanhos de caixas.",
        pergunta: "Uma fábrica embala 18 jogos em 3 caixas, de igual tamanho. Se a fábrica utilizar 2 caixas grandes que possam embalar 18 jogos, e depois embalar 18 jogos em 3 caixas menores, quantos jogos cabem em cada caixa maior e em cada caixa menor, respectivamente?",
        opcoes: [
            "9 jogos (caixa maior) e 6 jogos (caixa menor).",
            "6 jogos (caixa maior) e 9 jogos (caixa menor).",
            "18 jogos (caixa maior) e 3 jogos (caixa menor).",
            "9 jogos (caixa maior) e 3 jogos (caixa menor)."
        ],
        respostaCorreta: "9 jogos (caixa maior) e 6 jogos (caixa menor).",
        explicacao: "Caixa maior (2 caixas para 18 jogos): 18÷2=9 jogos por caixa. Caixa menor (3 caixas para 18 jogos): 18÷3=6 jogos por caixa.",
        tipo: "multipla_escolha"
    },
    {
        titulo: "Número Misterioso",
        contexto: "Problema de adição com centenas.",
        pergunta: "Na barraca de adivinhas, um número misterioso tem cinco centenas a mais que o número 143. Que número é esse?",
        opcoes: [
            "543.",
            "148.",
            "643.",
            "193."
        ],
        respostaCorreta: "643.",
        explicacao: "Cinco centenas equivalem a 500. O número é 143 + 500 = 643.",
        tipo: "multipla_escolha"
    },
    {
        titulo: "Divisão de Melancias",
        contexto: "Problema de divisão igual.",
        pergunta: "Considere o problema da Dona Verônica, que guarda melancias em quantidades iguais em 3 caixas. Se ela tiver 18 melancias, quantas melancias ela colocará em cada caixa?",
        opcoes: [
            "3 melancias.",
            "6 melancias.",
            "9 melancias.",
            "18 melancias."
        ],
        respostaCorreta: "6 melancias.",
        explicacao: "18 melancias divididas igualmente em 3 caixas: 18 ÷ 3 = 6 melancias por caixa.",
        tipo: "multipla_escolha"
    },
    {
        titulo: "Distribuição de Peças de Jogo",
        contexto: "Problema de divisão com peças de jogo.",
        pergunta: "Um determinado jogo tem 24 peças e pode ser jogado por, no máximo, 6 pessoas. Se as peças forem distribuídas igualmente entre 4 participantes, quantas peças cada jogador receberá?",
        opcoes: [
            "3 peças.",
            "4 peças.",
            "6 peças.",
            "8 peças."
        ],
        respostaCorreta: "6 peças.",
        explicacao: "24 peças divididas igualmente entre 4 participantes: 24 ÷ 4 = 6 peças por jogador.",
        tipo: "multipla_escolha"
    },
    {
        titulo: "Distribuição de Lápis",
        contexto: "Problema de divisão com lápis de cor.",
        pergunta: "A professora Carla precisa repartir igualmente 18 lápis de cor entre 6 alunos. Quantos lápis de cor cada aluno receberá?",
        opcoes: [
            "2 lápis.",
            "3 lápis.",
            "4 lápis.",
            "6 lápis."
        ],
        respostaCorreta: "3 lápis.",
        explicacao: "18 lápis divididos igualmente entre 6 alunos: 18 ÷ 6 = 3 lápis por aluno.",
        tipo: "multipla_escolha"
    },
    {
        titulo: "Arredondamento para Centena",
        contexto: "Arredondamento de números para a centena mais próxima.",
        pergunta: "O número 127 é a unidade de milhar, trezentas e trinta e duas unidades. Se ele for arredondado para a centena mais próxima, qual resultado é esperado?",
        opcoes: [
            "100.",
            "120.",
            "200.",
            "130."
        ],
        respostaCorreta: "100.",
        explicacao: "Para arredondar 127 para a centena mais próxima, olhamos para a dezena (2). Como 2 é menor que 5, arredondamos para baixo: 100.",
        tipo: "multipla_escolha"
    },
    {
        titulo: "Corrida Semanal",
        contexto: "Multiplicação em situação de corrida.",
        pergunta: "Rita e Paulo correm 8 km de segunda a sexta-feira. Quantos quilômetros eles percorrem nesse período?",
        opcoes: [
            "8 km.",
            "16 km.",
            "40 km.",
            "56 km."
        ],
        respostaCorreta: "40 km.",
        explicacao: "De segunda a sexta-feira são 5 dias. Cada dia eles correm 8 km. Total: 8 × 5 = 40 km.",
        tipo: "multipla_escolha"
    },
    {
        titulo: "Festival Esportivo",
        contexto: "Comparação de distâncias de salto.",
        pergunta: "No Festival Esportivo 2025, qual aluno alcançou o salto de maior distância?",
        opcoes: [
            "Felipe (1,94m).",
            "Bruno (1,67m).",
            "Cláudia (1,74m).",
            "Talita (1,53m)."
        ],
        respostaCorreta: "Felipe (1,94m).",
        explicacao: "Comparando as distâncias: Felipe (1,94m) > Cláudia (1,74m) > Bruno (1,67m) > Talita (1,53m). Felipe teve o maior salto.",
        tipo: "multipla_escolha"
    },
    {
        titulo: "Diferença de Quilometragem",
        contexto: "Subtração de quilometragens de carros.",
        pergunta: "No registro de quilometragem, qual é a diferença entre a quilometragem do Carro do Meu Padrinho (8325 km) e o Carro da Mamãe (5821 km)?",
        opcoes: [
            "2504 km.",
            "14146 km.",
            "3504 km.",
            "2500 km."
        ],
        respostaCorreta: "2504 km.",
        explicacao: "A diferença é calculada pela subtração: 8325 - 5821 = 2504 km.",
        tipo: "multipla_escolha"
    },
    {
        titulo: "Comparação de Percursos",
        contexto: "Análise de gráfico de percursos.",
        pergunta: "Mariana percorreu 700 quilômetros e Tereza percorreu 500 quilômetros. Quem fez o percurso mais longo e quantos quilômetros Luiza percorreu (assumindo que Luiza é a última linha do gráfico)?",
        opcoes: [
            "Tereza fez o mais longo; Luiza percorreu 400 km.",
            "Mariana fez o mais longo; Luiza percorreu 300 km.",
            "Mariana fez o mais longo; Luiza percorreu 400 km.",
            "Tereza fez o mais longo; Luiza percorreu 500 km."
        ],
        respostaCorreta: "Mariana fez o mais longo; Luiza percorreu 400 km.",
        explicacao: "Mariana (700 km) > Tereza (500 km), então Mariana fez o percurso mais longo. Assumindo que Luiza percorreu 400 km conforme o gráfico.",
        tipo: "multipla_escolha"
    },

    // Questões de Verdadeiro ou Falso (29-34)
    {
        titulo: "Unidades e Conversões",
        contexto: "Análise de afirmações sobre unidades de medida e conversões.",
        pergunta: "Analise as afirmações sobre unidades e conversões:",
        opcoes: [
            "I. A unidade de medida de comprimento mais adequada para medir a distância entre duas cidades é o metro.\nII. 87 cm mais 13 cm é igual a 1 metro.\nIII. O centímetro (cm) é a unidade mais utilizada para medir grandes distâncias.\nIV. 1 km é igual a 1.000 metros.",
            "F, V, V, F",
            "V, V, F, V",
            "F, V, F, V",
            "V, F, V, V"
        ],
        respostaCorreta: "F, V, F, V",
        explicacao: "I. Falso - Para distâncias entre cidades usa-se quilômetro. II. Verdadeiro - 87 + 13 = 100 cm = 1 metro. III. Falso - Para grandes distâncias usa-se quilômetro. IV. Verdadeiro - 1 km = 1.000 m.",
        tipo: "verdadeiro_falso"
    },
    {
        titulo: "Gráficos e Distância",
        contexto: "Análise de afirmações sobre gráficos e medidas de distância.",
        pergunta: "Analise as afirmações sobre gráficos e distância:",
        opcoes: [
            "I. No mapa de Porto Alegre, a cidade mais próxima (em quilômetros) é Guaíba.\nII. No gráfico de Macacos Infectados, o maior número de infectados foi registrado em dezembro (148).\nIII. O gráfico de barras mostra que a quantidade de alunos que usam bicicleta é igual à quantidade de alunos que usam van escolar.\nIV. A distância percorrida por Marcelo da casa à padaria (em uma quadriculada onde cada lado é 100m) é de 800 metros.",
            "V, F, F, V",
            "V, V, F, V",
            "F, V, V, F",
            "V, F, V, V"
        ],
        respostaCorreta: "V, F, V, V",
        explicacao: "I. Verdadeiro - Guaíba é a cidade mais próxima de Porto Alegre. II. Falso - Precisa verificar o gráfico específico. III. Verdadeiro - Conforme o gráfico apresentado. IV. Verdadeiro - Calculando a distância na quadrícula.",
        tipo: "verdadeiro_falso"
    },
    {
        titulo: "Arredondamento",
        contexto: "Análise de afirmações sobre arredondamento de números.",
        pergunta: "Analise as afirmações sobre arredondamento:",
        opcoes: [
            "I. O número 1689, se arredondado para a centena mais próxima, é 1700.\nII. O número 1532, se arredondado para a centena mais próxima, é 1500.\nIII. O número 662 deve ficar mais próximo de 660 do que de 670, se arredondado para a dezena mais próxima.\nIV. Arredondar números é uma forma de obter resultados exatos.",
            "V, F, F, F",
            "F, V, V, V",
            "V, F, V, F",
            "V, V, V, V"
        ],
        respostaCorreta: "V, V, V, F",
        explicacao: "I. Verdadeiro - 1689 → 1700. II. Verdadeiro - 1532 → 1500. III. Verdadeiro - 662 → 660. IV. Falso - Arredondamento dá resultados aproximados, não exatos.",
        tipo: "verdadeiro_falso"
    },
    {
        titulo: "Conceitos de Medição e Decomposição",
        contexto: "Análise de afirmações sobre medição e pensamento computacional.",
        pergunta: "Analise as afirmações sobre conceitos de medição e decomposição:",
        opcoes: [
            "I. A régua, a fita métrica e a trena são instrumentos convencionais para medir comprimento.\nII. Usar a decomposição para planejar tarefas é um exemplo de pensamento computacional.\nIII. Para medir o comprimento de um livro, o metro é a unidade mais comum.\nIV. Se a afirmação for 'A carta é de espadas' e a carta é de ouros, a afirmação é Falsa.",
            "V, V, F, V",
            "F, V, V, V",
            "V, F, F, F",
            "F, F, V, V"
        ],
        respostaCorreta: "V, V, F, V",
        explicacao: "I. Verdadeiro - São instrumentos convencionais. II. Verdadeiro - Decomposição é parte do pensamento computacional. III. Falso - Para livros usa-se centímetro. IV. Verdadeiro - A afirmação é falsa.",
        tipo: "verdadeiro_falso"
    },
    {
        titulo: "Divisão com Resto",
        contexto: "Análise de afirmações sobre divisão com resto usando o exemplo de Manu.",
        pergunta: "Analise as afirmações sobre divisão com resto (Manu):",
        opcoes: [
            "I. Se Manu tem 10 livros para 3 sobrinhos, e cada um recebe 3, a sobra é de 1 livro.\nII. Se Manu tivesse 11 livros para 3 sobrinhos, ela teria que dar 4 livros para cada um.\nIII. Se Manu tivesse 12 livros para 3 sobrinhos, a divisão seria exata (4 livros para cada).\nIV. 12 beijinhos distribuídos igualmente em 3 pacotes resultam em 4 beijinhos por pacote.",
            "V, F, V, V",
            "F, V, F, V",
            "V, V, V, F",
            "F, F, V, V"
        ],
        respostaCorreta: "V, F, V, V",
        explicacao: "I. Verdadeiro - 10 ÷ 3 = 3 com resto 1. II. Falso - 11 ÷ 3 = 3 com resto 2, não 4 para cada. III. Verdadeiro - 12 ÷ 3 = 4 exato. IV. Verdadeiro - 12 ÷ 3 = 4.",
        tipo: "verdadeiro_falso"
    },
    {
        titulo: "Pistas e Raciocínio Numérico",
        contexto: "Análise de afirmações sobre raciocínio numérico e sequências.",
        pergunta: "Analise as afirmações sobre pistas e raciocínio numérico:",
        opcoes: [
            "I. Um número que tem oito unidades a menos que o número 98 é o 90.\nII. Para obter 18, é preciso multiplicar o 3 por 6.\nIII. O maior número que pode ser formado com os algarismos 3, 6, 2 e 5, sem repetição, é 6532.\nIV. O número 459, 494, 471 e 500 são convites que não obedecem ao critério numérico da sequência dos convites (401, 402, 403...).",
            "F, V, F, V",
            "V, V, V, V",
            "V, F, V, F",
            "F, V, F, V"
        ],
        respostaCorreta: "V, V, V, V",
        explicacao: "I. Verdadeiro - 98 - 8 = 90. II. Verdadeiro - 3 × 6 = 18. III. Verdadeiro - Ordem decrescente: 6532. IV. Verdadeiro - Não seguem a sequência 401, 402, 403...",
        tipo: "verdadeiro_falso"
    }
];
