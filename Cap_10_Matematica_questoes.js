// Arquivo-depósito de todas as perguntas do jogo para a Arena "Arena dos Números". Versão: 4.2 (Conteúdo Completo e V/F Corrigido)

const dadosDoQuiz = [
    // --- GRUPO 1: MÚLTIPLA ESCOLHA ---
    {
        tipo: "multipla_escolha",
        titulo: "Barraca de Adivinhas",
        contexto: "Na escola de Helena, iniciaram os preparativos para mais uma festa junina. O cartaz na barraca de adivinhas tinha o desafio: 'Descubra o número usando as pistas!'. As pistas eram: 'Tem três dezenas a mais que o número 135', 'Tem oito unidades a menos que o número 98', e 'Tem cinco centenas a mais que o número 143'.",
        pergunta: "Analisando as pistas, qual opção contém a resposta correta para cada pista, na ordem?",
        opcoes: ["165, 90, 643", "138, 90, 148", "165, 106, 643", "138, 106, 148"],
        respostaCorreta: "165, 90, 643",
        justificativa: "Pista 1: 135 + 30 = 165. Pista 2: 98 - 8 = 90. Pista 3: 143 + 500 = 643."
    },
    {
        tipo: "multipla_escolha",
        titulo: "O Segredo da Sequência",
        contexto: "Em um jogo de matemática, você precisa descobrir a regra de uma sequência numérica para prever o próximo número. A sequência é: 3, 7, 11, 15, ...",
        pergunta: "Qual é o próximo número na sequência?",
        opcoes: ["17", "18", "19", "20"],
        respostaCorreta: "19",
        justificativa: "A regra da sequência é adicionar 4 ao número anterior. 15 + 4 = 19."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Desconto na Loja",
        contexto: "Maria comprou um brinquedo que custava R$ 80,00 e ganhou um desconto de 15% por pagar à vista.",
        pergunta: "Quanto Maria pagou pelo brinquedo?",
        opcoes: ["R$ 68,00", "R$ 72,00", "R$ 75,00", "R$ 80,00"],
        respostaCorreta: "R$ 68,00",
        justificativa: "15% de R$ 80,00 é (15/100) * 80 = R$ 12,00. O valor pago foi R$ 80,00 - R$ 12,00 = R$ 68,00."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Perímetro do Jardim",
        contexto: "Um jardineiro precisa cercar um jardim retangular que mede 12 metros de comprimento por 8 metros de largura.",
        pergunta: "Quantos metros de cerca ele precisará comprar?",
        opcoes: ["20 metros", "40 metros", "48 metros", "96 metros"],
        respostaCorreta: "40 metros",
        justificativa: "O perímetro de um retângulo é 2 * (comprimento + largura). Então, 2 * (12 + 8) = 2 * 20 = 40 metros."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Fração da Pizza",
        contexto: "Uma pizza foi dividida em 8 pedaços iguais. João comeu 3 pedaços.",
        pergunta: "Que fração da pizza João comeu?",
        opcoes: ["1/8", "3/8", "5/8", "8/3"],
        respostaCorreta: "3/8",
        justificativa: "A fração é o número de pedaços comidos dividido pelo total de pedaços. 3 pedaços de um total de 8 é 3/8."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Horas e Minutos",
        contexto: "Um filme começou às 14h30 e durou 1 hora e 45 minutos.",
        pergunta: "A que horas o filme terminou?",
        opcoes: ["15h45", "16h00", "16h15", "16h30"],
        respostaCorreta: "16h15",
        justificativa: "14h30 + 1h45min = 15h75min. Como 75 minutos são 1 hora e 15 minutos, somamos 1 hora a 15h, resultando em 16h15."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Medidas de Volume",
        contexto: "Uma garrafa de refrigerante tem capacidade para 2 litros. Quantos mililitros isso representa?",
        pergunta: "Qual é o volume em mililitros?",
        opcoes: ["20 ml", "200 ml", "1000 ml", "2000 ml"],
        respostaCorreta: "2000 ml",
        justificativa: "1 litro equivale a 1000 mililitros. Portanto, 2 litros equivalem a 2 * 1000 = 2000 mililitros."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Cálculo de Média",
        contexto: "Em uma prova, os alunos tiraram as seguintes notas: 7, 8, 6, 9.",
        pergunta: "Qual a média das notas?",
        opcoes: ["6", "7", "7.5", "8"],
        respostaCorreta: "7.5",
        justificativa: "A média é a soma das notas dividida pelo número de notas: (7 + 8 + 6 + 9) / 4 = 30 / 4 = 7.5."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Formas Geométricas",
        contexto: "Um objeto tem 6 faces quadradas, 12 arestas e 8 vértices.",
        pergunta: "Qual forma geométrica é essa?",
        opcoes: ["Pirâmide", "Cilindro", "Cubo", "Esfera"],
        respostaCorreta: "Cubo",
        justificativa: "O cubo é um poliedro com 6 faces quadradas, 12 arestas e 8 vértices."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Moedas e Cédulas",
        contexto: "Você tem 3 moedas de R$ 0,50, 2 moedas de R$ 0,25 e 1 cédula de R$ 5,00.",
        pergunta: "Qual o valor total que você possui?",
        opcoes: ["R$ 6,00", "R$ 6,50", "R$ 6,75", "R$ 7,00"],
        respostaCorreta: "R$ 6,00",
        justificativa: "3 * R$ 0,50 = R$ 1,50. 2 * R$ 0,25 = R$ 0,50. R$ 1,50 + R$ 0,50 + R$ 5,00 = R$ 7,00."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Sequência em P.A.",
        contexto: "Uma progressão aritmética (P.A.) começa com o número 5 e sua razão é 3. Qual o quarto termo dessa P.A.?",
        pergunta: "Qual é o quarto termo da P.A. (5, _, _, _)?",
        opcoes: ["8", "11", "14", "17"],
        respostaCorreta: "14",
        justificativa: "Os termos são: 5 (1º), 5+3=8 (2º), 8+3=11 (3º), 11+3=14 (4º)."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Dobro e Metade",
        contexto: "O dobro de um número somado com a metade de outro número é igual a 20. Se o primeiro número é 6, qual é o segundo número?",
        pergunta: "Qual é o segundo número?",
        opcoes: ["8", "10", "12", "16"],
        respostaCorreta: "16",
        justificativa: "O dobro de 6 é 12. Então, 12 + (metade do segundo número) = 20. Metade do segundo número = 8. O segundo número é 16."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Cálculo de Área",
        contexto: "Um terreno quadrado tem lado medindo 10 metros.",
        pergunta: "Qual a área total do terreno em metros quadrados?",
        opcoes: ["20 m²", "40 m²", "100 m²", "200 m²"],
        respostaCorreta: "100 m²",
        justificativa: "A área de um quadrado é lado * lado. Então, 10 * 10 = 100 m²."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Operações com Inteiros",
        contexto: "Calcule o resultado da expressão: (-5) + (+8) - (-2).",
        pergunta: "Qual o resultado final?",
        opcoes: ["-1", "5", "-15", "15"],
        respostaCorreta: "5",
        justificativa: "(-5) + (+8) - (-2) = -5 + 8 + 2 = 3 + 2 = 5."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Porcentagem e Total",
        contexto: "Em uma pesquisa, 25% dos alunos preferem futebol. Se 50 alunos preferem futebol, quantos alunos foram entrevistados no total?",
        pergunta: "Quantos alunos foram entrevistados?",
        opcoes: ["100", "150", "200", "250"],
        respostaCorreta: "200",
        justificativa: "Se 25% = 50 alunos, então 100% (o total) = (100/25) * 50 = 4 * 50 = 200 alunos."
    },

    // --- GRUPO 2: VERDADEIRO OU FALSO (Múltiplas Afirmações) ---
    {
        tipo: "verdadeiro_falso",
        titulo: "Propriedades Numéricas",
        contexto: "Avalie as seguintes afirmações sobre propriedades dos números e operações matemáticas, indicando (V) para Verdadeiro ou (F) para Falso.",
        pergunta: "Classifique as afirmações abaixo:",
        afirmacoes: [
            "A ordem dos fatores não altera o produto.",
            "A divisão por zero é indefinida.",
            "Números primos são divisíveis apenas por 1 e por ele mesmo.",
            "Todo número natural é também um número inteiro."
        ],
        opcoes: [
            "V, V, F, V",
            "F, V, V, V",
            "V, F, F, V",
            "V, V, V, V" // Esta é a resposta correta
        ],
        respostaCorreta: "V, V, V, V",
        justificativa: "1. Verdadeiro (Propriedade Comutativa da Multiplicação). 2. Verdadeiro. 3. Verdadeiro. 4. Verdadeiro."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Geometria Plana",
        contexto: "Considere as características de algumas figuras geométricas planas e avalie as afirmações.",
        pergunta: "Indique (V) para Verdadeiro ou (F) para Falso:",
        afirmacoes: [
            "Um triângulo equilátero possui todos os lados com medidas diferentes.",
            "Um quadrado é um tipo especial de retângulo.",
            "A soma dos ângulos internos de um triângulo é sempre 180 graus.",
            "Um círculo possui infinitos eixos de simetria."
        ],
        opcoes: [
            "F, V, V, V", // Esta é a resposta correta
            "V, F, V, F",
            "F, V, F, V",
            "V, V, V, F"
        ],
        respostaCorreta: "F, V, V, V",
        justificativa: "1. Falso (lados iguais). 2. Verdadeiro. 3. Verdadeiro. 4. Verdadeiro."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Medidas e Unidades",
        contexto: "Analise as relações entre diferentes unidades de medida e classifique as afirmações.",
        pergunta: "Assinale (V) ou (F):",
        afirmacoes: [
            "1 quilômetro (km) equivale a 1000 metros (m).",
            "1 litro (L) é equivalente a 100 mililitros (ml).",
            "1 hora possui 3600 segundos.",
            "1 quilo (kg) tem 100 gramas (g)."
        ],
        opcoes: [
            "V, F, V, F", // Esta é a resposta correta
            "F, V, F, V",
            "V, V, V, V",
            "V, F, F, V"
        ],
        respostaCorreta: "V, F, V, F",
        justificativa: "1. Verdadeiro. 2. Falso (1L = 1000ml). 3. Verdadeiro (1 hora = 60 min * 60 seg = 3600 seg). 4. Falso (1kg = 1000g)."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Múltiplos e Divisores",
        contexto: "Avalie afirmações sobre múltiplos e divisores de números naturais.",
        pergunta: "Marque (V) para Verdadeiro e (F) para Falso:",
        afirmacoes: [
            "Todo número é múltiplo de si mesmo.",
            "O número 1 é divisor de todos os números naturais.",
            "O maior múltiplo de um número natural é ele mesmo.",
            "Um número par não pode ser primo."
        ],
        opcoes: [
            "V, V, F, F", // Esta é a resposta correta
            "F, V, V, F",
            "V, F, F, V",
            "V, V, V, F"
        ],
        respostaCorreta: "V, V, F, F",
        justificativa: "1. Verdadeiro. 2. Verdadeiro. 3. Falso (múltiplos são infinitos). 4. Falso (o 2 é par e primo)."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Frações e Decimais",
        contexto: "Analise as conversões e conceitos relacionados a frações e números decimais.",
        pergunta: "Assinale (V) ou (F):",
        afirmacoes: [
            "A fração 1/2 é equivalente a 0.5.",
            "Toda fração pode ser representada por um número decimal exato.",
            "Somar frações com denominadores diferentes sempre exige o cálculo do MMC.",
            "A fração 3/4 é maior que a fração 2/3."
        ],
        opcoes: [
            "V, F, V, V", // Esta é a resposta correta
            "F, V, V, V",
            "V, V, F, F",
            "V, F, V, F"
        ],
        respostaCorreta: "V, F, V, V",
        justificativa: "1. Verdadeiro. 2. Falso (dízimas periódicas). 3. Verdadeiro (para encontrar um denominador comum). 4. Verdadeiro (3/4 = 0.75; 2/3 = 0.66...). "
    },

    // --- GRUPO 3: RESPOSTA ABERTA ---
    {
        tipo: "aberta",
        titulo: "Cálculo de Consumo",
        contexto: "Um carro percorre 10 km com 1 litro de gasolina. Se a distância a ser percorrida é de 150 km, e o tanque tem capacidade para 40 litros, qual o consumo total em litros para a viagem?",
        pergunta: "Quantos litros de gasolina serão necessários para percorrer 150 km?",
        respostaCorreta: "15 litros",
        justificativa: "Se 1 litro percorre 10 km, para percorrer 150 km serão necessários 150 / 10 = 15 litros. (A capacidade do tanque é uma distração)."
    },
    {
        tipo: "aberta",
        titulo: "O Relógio Quebrado",
        contexto: "Um relógio digital está atrasado 10 minutos por hora. Se ele foi acertado às 08:00, que horas ele estará marcando quando o horário real for 12:00 do mesmo dia?",
        pergunta: "Que horas o relógio estará marcando quando o horário real for 12:00?",
        respostaCorreta: "11:20",
        justificativa: "Das 8:00 às 12:00 são 4 horas. Se ele atrasa 10 minutos por hora, em 4 horas ele atrasará 4 * 10 = 40 minutos. Então, 12:00 - 40 minutos = 11:20."
    },
    {
        tipo: "aberta",
        titulo: "Idades na Família",
        contexto: "A soma das idades de pai e filho é 60 anos. O pai tem o triplo da idade do filho.",
        pergunta: "Quantos anos tem o filho?",
        respostaCorreta: "15 anos",
        justificativa: "Seja F a idade do filho. O pai tem 3F. F + 3F = 60 => 4F = 60 => F = 15 anos."
    },
    {
        tipo: "aberta",
        titulo: "Divisão de Doces",
        contexto: "Maria tem 45 doces para dividir igualmente entre 3 amigos.",
        pergunta: "Quantos doces cada amigo receberá?",
        respostaCorreta: "15 doces",
        justificativa: "45 doces divididos por 3 amigos = 15 doces para cada."
    },
    {
        tipo: "aberta",
        titulo: "Cálculo de Tempo",
        contexto: "Você precisa ler um livro de 200 páginas. Se você lê 25 páginas por dia, em quantos dias você terminará o livro?",
        pergunta: "Em quantos dias o livro será lido?",
        respostaCorreta: "8 dias",
        justificativa: "Total de páginas / Páginas por dia = 200 / 25 = 8 dias."
    },
    {
        tipo: "aberta",
        titulo: "Operação Inversa",
        contexto: "Pense em um número, multiplique por 3, some 5 e o resultado é 26.",
        pergunta: "Qual é o número que você pensou?",
        respostaCorreta: "7",
        justificativa: "Para resolver, fazemos as operações inversas: 26 - 5 = 21. 21 / 3 = 7."
    },
    {
        tipo: "aberta",
        titulo: "Conversão de Unidades",
        contexto: "Um atleta correu 5000 metros em um treino.",
        pergunta: "Quantos quilômetros ele correu?",
        respostaCorreta: "5 km",
        justificativa: "1 quilômetro = 1000 metros. Então, 5000 metros / 1000 = 5 km."
    },
    {
        tipo: "aberta",
        titulo: "Temperatura",
        contexto: "A temperatura em uma cidade era de 15°C. À noite, caiu 7°C.",
        pergunta: "Qual a temperatura na cidade à noite?",
        respostaCorreta: "8°C",
        justificativa: "15°C - 7°C = 8°C."
    },
    {
        tipo: "aberta",
        titulo: "Total de Laranjas",
        contexto: "Em um cesto, há 2 dúzias de laranjas. Em outro cesto, há mais 15 laranjas.",
        pergunta: "Quantas laranjas há no total?",
        respostaCorreta: "39 laranjas",
        justificativa: "2 dúzias = 2 * 12 = 24 laranjas. Total = 24 + 15 = 39 laranjas."
    },
    {
        tipo: "aberta",
        titulo: "Dinheiro Poupança",
        contexto: "João poupa R$ 10,00 por semana. Em quantas semanas ele terá R$ 120,00?",
        pergunta: "Em quantas semanas João terá R$ 120,00?",
        respostaCorreta: "12 semanas",
        justificativa: "R$ 120,00 / R$ 10,00 por semana = 12 semanas."
    },
    {
        tipo: "aberta",
        titulo: "Festa de Aniversário",
        contexto: "Para uma festa, foram compradas 5 bandejas de doces, com 20 doces em cada bandeja.",
        pergunta: "Quantos doces foram comprados no total?",
        respostaCorreta: "100 doces",
        justificativa: "5 bandejas * 20 doces/bandeja = 100 doces."
    },
    {
        tipo: "aberta",
        titulo: "Contagem de Alunos",
        contexto: "Em uma sala de aula, há 28 alunos. Se 15 são meninos, quantas são meninas?",
        pergunta: "Quantas meninas há na sala de aula?",
        respostaCorreta: "13 meninas",
        justificativa: "28 alunos - 15 meninos = 13 meninas."
    },
    {
        tipo: "aberta",
        titulo: "Produção de Chocolates",
        contexto: "Uma fábrica produz 150 chocolates por hora. Em 3 horas, quantos chocolates serão produzidos?",
        pergunta: "Quantos chocolates serão produzidos em 3 horas?",
        respostaCorreta: "450 chocolates",
        justificativa: "150 chocolates/hora * 3 horas = 450 chocolates."
    },
    {
        tipo: "aberta",
        titulo: "Distância Total",
        contexto: "Um ciclista percorre 12 km de manhã e 18 km à tarde.",
        pergunta: "Qual a distância total percorrida pelo ciclista no dia?",
        respostaCorreta: "30 km",
        justificativa: "12 km + 18 km = 30 km."
    },
    {
        tipo: "aberta",
        titulo: "Organização dos pacotes de doces",
        contexto: "Gigi tem 12 doces de cada tipo. Muitas pessoas querem pacotes com 5 doces, mas 12 não é divisível por 5. Ela percebe que, para atender a esses pedidos sem sobras, precisaria ter uma quantidade de doces que fosse múltiplo de 5.",
        pergunta: "Se Gigi tivesse um total de 20 doces de um tipo, como ela poderia reorganizar para atender ao pedido de pacotes de 5 doces sem sobras?",
        respostaCorreta: "Ela poderia montar 4 pacotes com 5 doces em cada.",
        justificativa: "Se Gigi tivesse 20 doces de um tipo, ela poderia montar 4 pacotes com 5 doces em cada (porque 20 ÷ 5 = 4), sem deixar nenhum doce sobrando. O benefício é atender exatamente ao pedido dos clientes e evitar desperdício."
    }
];