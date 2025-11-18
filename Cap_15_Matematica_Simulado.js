// Prova Simulada - Capítulo 15 de Matemática
// 60 questões de múltipla escolha sobre Divisão e Capacidade

const dadosDoSimuladoMatematica15 = [
    // ===== PARTE 1: Conceitos de Divisão e Capacidade (Q1-Q30) =====
    {
        tipo: "multipla_escolha",
        titulo: "Questão 1",
        pergunta: "Na divisão 48 dividido por 6 = 8, o número 48 representa qual termo da divisão?",
        opcoes: [
            "a) Quociente",
            "b) Divisor",
            "c) Dividendo",
            "d) Resto"
        ],
        respostaCorreta: 2,
        explicacao: "O Dividendo é o número que será dividido (o total de cartas, objetos, etc.)."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Questão 2",
        pergunta: "Qual é a unidade de medida mais comum e utilizada para mensurar a capacidade de uma garrafa de refrigerante?",
        opcoes: [
            "a) O mililitro (mL)",
            "b) O quilograma (kg)",
            "c) O Litro (L)",
            "d) A tonelada (t)"
        ],
        respostaCorreta: 2,
        explicacao: "O Litro (L) é a medida de capacidade mais comum e é usada para mensurar a quantidade de líquido em recipientes como uma garrafa de refrigerante."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Questão 3",
        pergunta: "A divisão é considerada uma operação inversa de qual outra operação matemática?",
        opcoes: [
            "a) Adição",
            "b) Subtração",
            "c) Multiplicação",
            "d) Subtração sucessiva"
        ],
        respostaCorreta: 2,
        explicacao: "A divisão é a operação inversa da multiplicação, e a multiplicação é a operação inversa da divisão."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Questão 4",
        pergunta: "O termo Quociente em uma divisão representa:",
        opcoes: [
            "a) O número que será dividido (o total).",
            "b) O que sobra da divisão.",
            "c) O número de partes em que o Dividendo será dividido.",
            "d) O resultado da divisão."
        ],
        respostaCorreta: 3,
        explicacao: "O Quociente é o resultado da divisão."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Questão 5",
        pergunta: "Para medir a capacidade de pequenas doses de remédios, qual unidade é mais apropriada?",
        opcoes: [
            "a) Litro (L)",
            "b) Mililitro (mL)",
            "c) Quilograma (kg)",
            "d) Metro (m)"
        ],
        respostaCorreta: 1,
        explicacao: "O Mililitro (mL) é muito utilizado para indicar pequenas medidas de capacidade em situações como a dosagem de remédios."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Questão 6",
        pergunta: "Qual é a quantidade de mililitros (mL) que corresponde a 1 Litro (L)?",
        opcoes: [
            "a) 100 mL",
            "b) 500 mL",
            "c) 1000 mL",
            "d) 10000 mL"
        ],
        respostaCorreta: 2,
        explicacao: "1 Litro (L) é igual a 1000 mililitros (mL)."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Questão 7",
        pergunta: "Em uma divisão inexata, como a 32 dividido por 5, o resto é:",
        opcoes: [
            "a) Sempre zero.",
            "b) Sempre igual ao Divisor.",
            "c) Diferente de zero.",
            "d) O Quociente."
        ],
        respostaCorreta: 2,
        explicacao: "Divisões que têm resto diferente de zero são chamadas divisões inexatas."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Questão 8",
        pergunta: "A metade de 1 Litro corresponde a:",
        opcoes: [
            "a) 250 mL",
            "b) 1000 mL",
            "c) 500 mL",
            "d) 1500 mL"
        ],
        respostaCorreta: 2,
        explicacao: "500 mL (metade de 1000 mL) correspondem a meio litro."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Questão 9",
        pergunta: "Qual é o termo da divisão que indica o número de partes em que o Dividendo será dividido?",
        opcoes: [
            "a) Quociente",
            "b) Dividendo",
            "c) Resto",
            "d) Divisor"
        ],
        respostaCorreta: 3,
        explicacao: "O Divisor indica o número de partes em que o Dividendo será dividido."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Questão 10",
        pergunta: "Se você tem 1 Litro e meio de suco, isso é o mesmo que ter:",
        opcoes: [
            "a) 1000 mL",
            "b) 1200 mL",
            "c) 1500 mL",
            "d) 500 mL"
        ],
        respostaCorreta: 2,
        explicacao: "1 Litro e meio é igual a 1500 mL."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Questão 11",
        pergunta: "Qual dos seguintes restos é IMPOSSÍVEL em uma divisão cujo Divisor é 4?",
        opcoes: [
            "a) Resto 0",
            "b) Resto 1",
            "c) Resto 4",
            "d) Resto 3"
        ],
        respostaCorreta: 2,
        explicacao: "O Resto deve ser sempre menor que o Divisor. Se o Divisor é 4, os restos possíveis são 0, 1, 2 e 3."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Questão 12",
        pergunta: "Para calcular a metade de um número, como o 40, qual operação é necessária?",
        opcoes: [
            "a) Multiplicar por 2",
            "b) Dividir por 2",
            "c) Multiplicar por 40",
            "d) Subtrair 2"
        ],
        respostaCorreta: 1,
        explicacao: "Para calcular a metade de um número, é preciso dividir esse número por 2."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Questão 13",
        pergunta: "Em uma aula de culinária, um copo sem marcações ou uma xícara são considerados:",
        opcoes: [
            "a) Unidades de medida padronizadas (como o Litro).",
            "b) Instrumentos precisos de medição.",
            "c) Instrumentos de medição informal.",
            "d) Recipientes com capacidade desconhecida."
        ],
        respostaCorreta: 2,
        explicacao: "O copo e a xícara são instrumentos que não possuem a mesma capacidade (não são padronizados), sendo medições informais."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Questão 14",
        pergunta: "Qual é o resultado de calcular a terça parte de 36?",
        opcoes: [
            "a) 12",
            "b) 18",
            "c) 9",
            "d) 72"
        ],
        respostaCorreta: 0,
        explicacao: "A terça parte é dividir por 3. 36 / 3 = 12."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Questão 15",
        pergunta: "Qual é a condição necessária para que uma divisão seja classificada como exata?",
        opcoes: [
            "a) O Quociente deve ser maior que o Divisor.",
            "b) O Resto deve ser zero.",
            "c) O Dividendo deve ser um número par.",
            "d) O Resto deve ser menor que o Divisor."
        ],
        respostaCorreta: 1,
        explicacao: "Quando as divisões têm resto zero, são chamadas divisões exatas."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Questão 16",
        pergunta: "Qual instrumento de medição é considerado mais preciso para medir pequenas quantidades de líquidos em um laboratório?",
        opcoes: [
            "a) Copo comum",
            "b) Xícara",
            "c) Proveta",
            "d) Béquer (usado mais para misturar)"
        ],
        respostaCorreta: 2,
        explicacao: "A Proveta é um instrumento de laboratório usado para medir capacidade com marcações (graduações) e é mais precisa que o Béquer."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Questão 17",
        pergunta: "Qual operação é utilizada para calcular o triplo de um número?",
        opcoes: [
            "a) Dividir por 3",
            "b) Multiplicar por 3",
            "c) Somar 3",
            "d) Multiplicar por 2"
        ],
        respostaCorreta: 1,
        explicacao: "Para calcular o triplo de um número, é preciso multiplicar esse número por 3."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Questão 18",
        pergunta: "A divisão 72 dividido por 9 é exata. Qual é o valor do Quociente?",
        opcoes: [
            "a) 9",
            "b) 7",
            "c) 8",
            "d) 6"
        ],
        respostaCorreta: 2,
        explicacao: "72 / 9 = 8. O Quociente é 8 porque 9 x 8 = 72."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Questão 19",
        pergunta: "Se o Divisor em uma conta é 7, qual é o maior resto possível que essa divisão pode ter?",
        opcoes: [
            "a) Resto 7",
            "b) Resto 6",
            "c) Resto 0",
            "d) Resto 8"
        ],
        respostaCorreta: 1,
        explicacao: "O Resto deve ser sempre menor que o Divisor. O maior resto possível é o Divisor (7) menos 1, que é 6."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Questão 20",
        pergunta: "Para calcular a décima parte de 90, qual é a operação necessária?",
        opcoes: [
            "a) Multiplicar por 10",
            "b) Dividir por 10",
            "c) Dividir por 2",
            "d) Somar 10"
        ],
        respostaCorreta: 1,
        explicacao: "Para determinar a décima parte de um número, é preciso dividi-lo por 10."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Questão 21",
        pergunta: "Para conferir o resultado de uma divisão, usa-se a fórmula: Quociente multiplicado pelo Divisor somado ao Resto. O resultado final deve ser igual ao:",
        opcoes: [
            "a) Quociente",
            "b) Divisor",
            "c) Dividendo",
            "d) Resto"
        ],
        respostaCorreta: 2,
        explicacao: "O resultado final da prova real (multiplicar o Divisor pelo Quociente e somar o Resto) deve ser igual ao Dividendo."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Questão 22",
        pergunta: "Qual é o resultado de calcular o quádruplo de 5?",
        opcoes: [
            "a) 5",
            "b) 10",
            "c) 15",
            "d) 20"
        ],
        respostaCorreta: 3,
        explicacao: "O quádruplo é multiplicar por 4. 5 x 4 = 20."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Questão 23",
        pergunta: "Se uma embalagem de sabonete líquido contém 420 mL, essa capacidade é:",
        opcoes: [
            "a) Maior que 1 Litro.",
            "b) Igual a 1 Litro.",
            "c) Menor que 1 Litro.",
            "d) Igual a 500 mL."
        ],
        respostaCorreta: 2,
        explicacao: "1 Litro (L) é igual a 1000 mL. Como 420 mL é menor que 1000 mL, a capacidade é menor que 1 Litro."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Questão 24",
        pergunta: "Para calcular a quinta parte de 45, qual é o resultado?",
        opcoes: [
            "a) 8",
            "b) 9",
            "c) 5",
            "d) 4"
        ],
        respostaCorreta: 1,
        explicacao: "A quinta parte é dividir por 5. 45 / 5 = 9."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Questão 25",
        pergunta: "Se você tem 2 Litros de suco e precisa encher copos de 250 mL, quantos copos você pode encher?",
        opcoes: [
            "a) 4 copos",
            "b) 6 copos",
            "c) 8 copos",
            "d) 10 copos"
        ],
        respostaCorreta: 2,
        explicacao: "2 Litros correspondem a 2000 mL. 2000 mL / 250 mL = 8 copos."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Questão 26",
        pergunta: "Qual é o termo da divisão que nunca pode ser maior ou igual ao Divisor?",
        opcoes: [
            "a) Dividendo",
            "b) Quociente",
            "c) Resto",
            "d) Quociente"
        ],
        respostaCorreta: 2,
        explicacao: "O Resto nunca pode ser maior ou igual ao Divisor."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Questão 27",
        pergunta: "O que significa a sigla 'E' em um mostrador de combustível do carro?",
        opcoes: [
            "a) Excesso (cheio)",
            "b) Econômico",
            "c) Vazio (Empty)",
            "d) Emergência"
        ],
        respostaCorreta: 2,
        explicacao: "A letra 'E' no mostrador de combustível é a inicial da palavra inglesa empty, que significa vazio."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Questão 28",
        pergunta: "A estratégia de decompor um número como 84 = 80 + 4 para dividir por 4 (80/4 + 4/4) é um exemplo de qual propriedade?",
        opcoes: [
            "a) Propriedade Comutativa",
            "b) Algoritmo da Divisão Longa",
            "c) Propriedade Distributiva",
            "d) Estimativa"
        ],
        respostaCorreta: 2,
        explicacao: "A decomposição de um número em uma soma (80+4) e a multiplicação/divisão de cada parte separadamente é o princípio da Propriedade Distributiva."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Questão 29",
        pergunta: "Se você precisa de 1 Litro de água para uma sopa, e só tem copos de 250 mL, quantos copos são necessários?",
        opcoes: [
            "a) 2 copos",
            "b) 3 copos",
            "c) 4 copos",
            "d) 5 copos"
        ],
        respostaCorreta: 2,
        explicacao: "1 Litro é igual a 1000 mL. 1000 mL / 250 mL/copo = 4 copos."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Questão 30",
        pergunta: "Qual é o resultado de calcular o quíntuplo de 8?",
        opcoes: [
            "a) 40",
            "b) 45",
            "c) 35",
            "d) 30"
        ],
        respostaCorreta: 0,
        explicacao: "O quíntuplo é multiplicar por 5. 8 x 5 = 40."
    },


    // ===== PARTE 2: Conversão, Problemas e Aplicações (Q31-Q60) =====
    {
        tipo: "multipla_escolha",
        titulo: "Questão 31",
        pergunta: "O Sr. Osvaldo produz 40 Litros de leite por dia e precisa de 10 Litros para fazer cada queijo. Quantos queijos ele pode produzir por dia?",
        opcoes: [
            "a) 2 queijos",
            "b) 3 queijos",
            "c) 4 queijos",
            "d) 5 queijos"
        ],
        respostaCorreta: 2,
        explicacao: "40 L / 10 L/queijo = 4 queijos."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Questão 32",
        pergunta: "A soma do consumo de água de Lavar louça (40 L), Dar descarga (30 L) e Molhar o jardim (185 L) é de:",
        opcoes: [
            "a) 255 Litros",
            "b) 200 Litros",
            "c) 250 Litros",
            "d) 275 Litros"
        ],
        respostaCorreta: 0,
        explicacao: "A soma é: 40 L + 30 L + 185 L = 255 Litros."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Questão 33",
        pergunta: "Se um tanque de combustível de 45 Litros estiver na metade, quantos Litros de combustível ele conterá?",
        opcoes: [
            "a) 20 Litros",
            "b) 25 Litros",
            "c) 22,5 Litros",
            "d) 23 Litros"
        ],
        respostaCorreta: 2,
        explicacao: "A metade é 45 / 2 = 22,5 Litros."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Questão 34",
        pergunta: "Para armazenar 4 Litros de suco, quantos mililitros (mL) você precisa ter no total?",
        opcoes: [
            "a) 400 mL",
            "b) 40 mL",
            "c) 4000 mL",
            "d) 40000 mL"
        ],
        respostaCorreta: 2,
        explicacao: "4 Litros é igual a 4 x 1000 mL = 4000 mL."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Questão 35",
        pergunta: "Joana fez 10 Litros de suco e quer colocar em garrafinhas de 500 mL. Quantas garrafinhas ela precisará?",
        opcoes: [
            "a) 10 garrafinhas",
            "b) 20 garrafinhas",
            "c) 50 garrafinhas",
            "d) 100 garrafinhas"
        ],
        respostaCorreta: 1,
        explicacao: "10 Litros = 10000 mL. 10000 mL / 500 mL/garrafinha = 20 garrafinhas."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Questão 36",
        pergunta: "Se Paulo precisa de 2 Litros de tinta branca e 500 mL de tinta azul-marinho, e ele compra uma lata de 10 Litros de tinta branca, qual o excedente (sobra) de tinta branca em mililitros?",
        opcoes: [
            "a) 8 Litros",
            "b) 800 mL",
            "c) 8000 mL",
            "d) 10000 mL"
        ],
        respostaCorreta: 2,
        explicacao: "O necessário é 2 Litros (2000 mL). O excedente é 10000 mL - 2000 mL = 8000 mL."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Questão 37",
        pergunta: "O termo 'capacidade' na medição refere-se a:",
        opcoes: [
            "a) O peso do líquido.",
            "b) O espaço ocupado pelo recipiente.",
            "c) O volume máximo de líquido que um recipiente pode conter.",
            "d) A densidade do líquido."
        ],
        respostaCorreta: 2,
        explicacao: "Capacidade é a medida para mensurar a quantidade de líquido que um recipiente pode conter."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Questão 38",
        pergunta: "Se a Tabuada de multiplicação mostra que 9 x 8 = 72, qual é o Quociente de 72 dividido por 9?",
        opcoes: [
            "a) 6",
            "b) 7",
            "c) 8",
            "d) 9"
        ],
        respostaCorreta: 2,
        explicacao: "9 x 8 = 72. A operação inversa é 72 / 9 = 8."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Questão 39",
        pergunta: "A mãe de Augusto precisa de 120 salsichas. Se ela só comprar pacotes de 6 unidades, quantos pacotes ela precisa?",
        opcoes: [
            "a) 10 pacotes",
            "b) 12 pacotes",
            "c) 20 pacotes",
            "d) 60 pacotes"
        ],
        respostaCorreta: 2,
        explicacao: "120 salsichas / 6 salsichas/pacote = 20 pacotes."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Questão 40",
        pergunta: "Se um gráfico de barras mostra a arrecadação de garrafas, o que representa a altura de cada barra?",
        opcoes: [
            "a) O tipo de garrafa",
            "b) O dia da semana",
            "c) A quantidade de garrafas arrecadadas",
            "d) A cor da garrafa"
        ],
        respostaCorreta: 2,
        explicacao: "A altura das barras em um gráfico de barras representa a quantidade."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Questão 41",
        pergunta: "A atividade de regar o jardim (185 L) consome mais água do que lavar a roupa (150 L). Qual a diferença de consumo entre as duas atividades?",
        opcoes: [
            "a) 25 Litros",
            "b) 30 Litros",
            "c) 35 Litros",
            "d) 40 Litros"
        ],
        respostaCorreta: 2,
        explicacao: "A diferença é 185 L - 150 L = 35 Litros."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Questão 42",
        pergunta: "Qual é a divisão inversa da operação 7 x 5 = 35?",
        opcoes: [
            "a) 35 - 5 = 30",
            "b) 7 + 5 = 12",
            "c) 35 / 7 = 5",
            "d) 7 x 6 = 42"
        ],
        respostaCorreta: 2,
        explicacao: "Multiplicação e divisão são operações inversas."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Questão 43",
        pergunta: "Um fazendeiro armazenou 30 L, 40 L e 42 L de suco em três barris. Qual é o volume total de suco armazenado nos barris?",
        opcoes: [
            "a) 100 Litros",
            "b) 112 Litros",
            "c) 120 Litros",
            "d) 102 Litros"
        ],
        respostaCorreta: 1,
        explicacao: "A soma é: 30 L + 40 L + 42 L = 112 Litros."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Questão 44",
        pergunta: "Se Paulo precisa de 1,5 Litros de verniz e só tem latas de 500 mL e 200 mL, qual combinação de latas de 500 mL atinge a capacidade necessária?",
        opcoes: [
            "a) 2 latas de 500 mL",
            "b) 3 latas de 500 mL",
            "c) 4 latas de 500 mL",
            "d) 5 latas de 500 mL"
        ],
        respostaCorreta: 1,
        explicacao: "1,5 Litros = 1500 mL. 3 x 500 mL = 1500 mL."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Questão 45",
        pergunta: "Se a divisão 20 dividido por 6 tem Quociente 3, qual é o Resto?",
        opcoes: [
            "a) Resto 1",
            "b) Resto 2",
            "c) Resto 3",
            "d) Resto 4"
        ],
        respostaCorreta: 1,
        explicacao: "6 x 3 = 18. 20 - 18 = 2 (Resto)."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Questão 46",
        pergunta: "Joaquim, o mecânico, gastou 120 Litros de óleo em um dia. Em 10 dias, quanto ele gastará?",
        opcoes: [
            "a) 120 Litros",
            "b) 1200 Litros",
            "c) 12 Litros",
            "d) 240 Litros"
        ],
        respostaCorreta: 1,
        explicacao: "120 Litros/dia x 10 dias = 1200 Litros."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Questão 47",
        pergunta: "Em uma divisão, se o Dividendo é 30 e o Divisor é 5, o resto é zero. Como é chamada esta divisão?",
        opcoes: [
            "a) Divisão inexata",
            "b) Divisão fracionária",
            "c) Divisão exata",
            "d) Divisão decimal"
        ],
        respostaCorreta: 2,
        explicacao: "Divisões que têm resto zero são chamadas divisões exatas."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Questão 48",
        pergunta: "Se a caixa d'água da família Rodrigo tem 1.500 Litros e eles consomem 585 Litros em um dia, quanto sobrou?",
        opcoes: [
            "a) 1000 Litros",
            "b) 915 Litros",
            "c) 900 Litros",
            "d) 815 Litros"
        ],
        respostaCorreta: 1,
        explicacao: "Sobra = 1500 L - 585 L = 915 Litros."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Questão 49",
        pergunta: "Qual é a quinta parte do número 50?",
        opcoes: [
            "a) 5",
            "b) 10",
            "c) 25",
            "d) 50"
        ],
        respostaCorreta: 1,
        explicacao: "A quinta parte de 50 é 50 / 5 = 10."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Questão 50",
        pergunta: "Qual é a metade do número 84, usando a decomposição 80 + 4?",
        opcoes: [
            "a) 40",
            "b) 42",
            "c) 44",
            "d) 88"
        ],
        respostaCorreta: 1,
        explicacao: "80 / 2 = 40 e 4 / 2 = 2. 40 + 2 = 42."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Questão 51",
        pergunta: "O Tubo de ensaio, por ser estreito e longo, tem geralmente uma capacidade:",
        opcoes: [
            "a) Muito alta, ultrapassando 2 Litros.",
            "b) Muito pequena, medida em mililitros.",
            "c) Igual à do Béquer.",
            "d) Medida apenas em Litros."
        ],
        respostaCorreta: 1,
        explicacao: "O Tubo de Ensaio é um recipiente com marcações que se assemelham à Proveta, sendo usado para medir pequenas quantidades no laboratório."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Questão 52",
        pergunta: "Se você tem 1 Litro de suco e 3 amigos, e você quer a terça parte desse suco, quantos mililitros cada um receberá (assumindo que o suco é divisível)?",
        opcoes: [
            "a) Cerca de 333,33 mL",
            "b) 500 mL",
            "c) 300 mL",
            "d) 1000 mL"
        ],
        respostaCorreta: 0,
        explicacao: "1 Litro = 1000 mL. 1000 mL / 3 = aproximadamente 333,33 mL."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Questão 53",
        pergunta: "Um Litro de suco (1000 mL) e um copo de 250 mL. Quantos copos cabem no Litro?",
        opcoes: [
            "a) 2 copos",
            "b) 3 copos",
            "c) 4 copos",
            "d) 5 copos"
        ],
        respostaCorreta: 2,
        explicacao: "1000 mL ÷ 250 mL = 4 copos."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Questão 54",
        pergunta: "Se o Dividendo é 75 e o Divisor é 8, o Quociente é 9. Qual é o Resto?",
        opcoes: [
            "a) Resto 1",
            "b) Resto 2",
            "c) Resto 3",
            "d) Resto 4"
        ],
        respostaCorreta: 2,
        explicacao: "8 x 9 = 72. 75 - 72 = 3 (Resto)."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Questão 55",
        pergunta: "Se você quer calcular a quarta parte de 60, qual é o resultado?",
        opcoes: [
            "a) 4",
            "b) 15",
            "c) 20",
            "d) 30"
        ],
        respostaCorreta: 1,
        explicacao: "A quarta parte de 60 é 60 / 4 = 15."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Questão 56",
        pergunta: "A abreviação 'F' em um mostrador de combustível significa:",
        opcoes: [
            "a) Frio",
            "b) Final",
            "c) Full (Cheio)",
            "d) Fraco"
        ],
        respostaCorreta: 2,
        explicacao: "'F' é a inicial da palavra inglesa full, que significa cheio."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Questão 57",
        pergunta: "Se um fazendeiro tem 42 Litros de suco, quantas garrafas de 2 Litros ele pode encher?",
        opcoes: [
            "a) 20 garrafas",
            "b) 21 garrafas",
            "c) 22 garrafas",
            "d) 42 garrafas"
        ],
        respostaCorreta: 1,
        explicacao: "42 Litros / 2 Litros/garrafa = 21 garrafas."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Questão 58",
        pergunta: "Qual é a decomposição correta para calcular a terça parte de 63?",
        opcoes: [
            "a) 60 / 3 + 3 / 3",
            "b) 30 / 3 + 33 / 3",
            "c) 60 + 3",
            "d) 60 / 2 + 3 / 3"
        ],
        respostaCorreta: 0,
        explicacao: "A decomposição correta para a terça parte de 63 é 63 = 60 + 3. A operação é (60 / 3) + (3 / 3)."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Questão 59",
        pergunta: "Se três caixinhas de suco de maracujá de 390 mL cada são despejadas em uma jarra de 1 Litro, o suco cabe totalmente?",
        opcoes: [
            "a) Sim, porque o total é 1000 mL.",
            "b) Não, porque o total é maior que 1 Litro.",
            "c) Sim, porque o total é menor que 1 Litro.",
            "d) Não, porque a jarra tem 1500 mL."
        ],
        respostaCorreta: 1,
        explicacao: "O total de suco é 3 x 390 mL = 1170 mL. Como 1 Litro = 1000 mL, o suco não cabe totalmente."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Questão 60",
        pergunta: "Se a divisão 50 dividido por 6 tem Quociente 8, qual é o Resto?",
        opcoes: [
            "a) Resto 0",
            "b) Resto 1",
            "c) Resto 2",
            "d) Resto 3"
        ],
        respostaCorreta: 2,
        explicacao: "6 x 8 = 48. 50 - 48 = 2 (Resto)."
    }
];

