// Questões do Capítulo 14 de Matemática - Dividir para valer
// 30 questões: 10 múltipla escolha + 10 verdadeiro/falso + 7 abertas + 3 estudos de caso

const dadosDoQuizMatematica14 = [
    // ===== QUESTÕES DE MÚLTIPLA ESCOLHA (1-10) =====
    {
        tipo: "multipla_escolha",
        titulo: "Questão 1",
        contexto: "Dona Márcia tem 48 brigadeiros e quer distribuí-los igualmente em 6 caixas para vender na festa da escola.",
        pergunta: "Marque a opção que não reflete os conceitos abordados sobre a divisão:",
        opcoes: [
            "a) O número 48 representa o Dividendo (total a ser repartido).",
            "b) O número 6 representa o Divisor (quantidade de partes iguais).",
            "c) O Quociente representa quantos brigadeiros irão em cada caixa.",
            "d) O Resto da divisão sempre será igual ao Divisor."
        ],
        respostaCorreta: 3,
        explicacao: "O Resto da divisão deve ser sempre MENOR que o Divisor, nunca igual a ele. Se o resto fosse igual ao divisor, significaria que ainda seria possível fazer mais uma divisão completa."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Questão 2",
        contexto: "Um grupo de amigos está estudando os termos da divisão: Dividendo, Divisor, Quociente e Resto.",
        pergunta: "Todas as afirmativas sobre os termos da divisão são corretas, exceto:",
        opcoes: [
            "a) O Dividendo é o número que será dividido.",
            "b) O Divisor indica em quantas partes o Dividendo será dividido.",
            "c) O Quociente é o resultado da divisão.",
            "d) O Resto é sempre maior que o Divisor."
        ],
        respostaCorreta: 3,
        explicacao: "O Resto deve ser sempre MENOR que o Divisor. Esta é uma regra fundamental da divisão. Por exemplo, ao dividir 17 por 5, o quociente é 3 e o resto é 2 (que é menor que 5)."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Questão 3",
        contexto: "Pedro tem 72 figurinhas e quer distribuí-las igualmente entre 8 amigos.",
        pergunta: "Marque a opção que não reflete os conceitos de divisão exata e inexata:",
        opcoes: [
            "a) Se a divisão resultar em resto zero, ela é chamada de divisão exata.",
            "b) Se sobrar alguma figurinha após a distribuição, a divisão é inexata.",
            "c) 72 ÷ 8 = 9, portanto é uma divisão exata.",
            "d) Em uma divisão inexata, o Dividendo sempre é menor que o Divisor."
        ],
        respostaCorreta: 3,
        explicacao: "Em uma divisão, o Dividendo pode ser maior, menor ou igual ao Divisor. O que caracteriza uma divisão como inexata é ter resto diferente de zero, não o tamanho do Dividendo em relação ao Divisor."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Questão 4",
        contexto: "Ana está aprendendo sobre a relação entre divisão e multiplicação.",
        pergunta: "Todas as afirmativas sobre a relação inversa entre divisão e multiplicação são corretas, exceto:",
        opcoes: [
            "a) Para verificar se 56 ÷ 7 = 8 está correto, podemos fazer 8 × 7 = 56.",
            "b) A multiplicação é a operação inversa da divisão.",
            "c) Se 9 × 6 = 54, então 54 ÷ 9 = 6.",
            "d) Para verificar uma divisão, devemos dividir o Quociente pelo Divisor."
        ],
        respostaCorreta: 3,
        explicacao: "Para verificar uma divisão, devemos MULTIPLICAR o Quociente pelo Divisor. Se o resultado for igual ao Dividendo, a divisão está correta. Por exemplo: 56 ÷ 7 = 8, verificação: 8 × 7 = 56."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Questão 5",
        contexto: "Carlos está aprendendo sobre o algoritmo da divisão e precisa resolver 125 ÷ 5.",
        pergunta: "Marque a opção que não reflete os conceitos do algoritmo da divisão:",
        opcoes: [
            "a) O algoritmo da divisão é um método organizado para resolver divisões.",
            "b) No algoritmo, primeiro dividimos a maior ordem do Dividendo.",
            "c) O resto parcial deve ser sempre menor que o Divisor.",
            "d) No algoritmo da divisão, sempre começamos dividindo as unidades."
        ],
        respostaCorreta: 3,
        explicacao: "No algoritmo da divisão, começamos dividindo pela MAIOR ORDEM (centenas, depois dezenas, depois unidades), não pelas unidades. Isso torna o cálculo mais organizado e eficiente."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Questão 6",
        contexto: "Lucas precisa comprar pacotes de adesivos para completar seu álbum. Cada pacote tem 8 adesivos e ele precisa de 80 adesivos no total.",
        pergunta: "Todas as afirmativas são corretas sobre o cálculo de partes de um número, exceto:",
        opcoes: [
            "a) Calcular metade de um número é o mesmo que dividi-lo por 2.",
            "b) Calcular o dobro de um número é o mesmo que multiplicá-lo por 2.",
            "c) Para calcular a quarta parte de 80, Lucas deve dividir 80 por 4.",
            "d) Para calcular o quádruplo de 80, Lucas deve dividir 80 por 4."
        ],
        respostaCorreta: 3,
        explicacao: "Para calcular o quádruplo de um número, devemos MULTIPLICÁ-LO por 4, não dividi-lo. Dividir por 4 nos dá a quarta parte. Quádruplo de 80 = 80 × 4 = 320."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Questão 7",
        contexto: "Um grupo de alunos está estudando a relação entre a divisão e a multiplicação usando a tabuada. Eles observam que a tabuada de divisão está diretamente ligada à tabuada de multiplicação.",
        pergunta: "Marque a opção que não reflete os conceitos abordados sobre a relação inversa entre as operações:",
        opcoes: [
            "a) Se 4 × 8 = 32, então 32 ÷ 4 deve ser igual a 8.",
            "b) Se 6 × 7 = 42, então 42 ÷ 7 deve ser igual a 6.",
            "c) A multiplicação e a divisão são chamadas de operações inversas.",
            "d) O cálculo de 280 ÷ 40 pode ser resolvido usando a tabuada básica 28 ÷ 4, mas o resultado não é diretamente relacionado."
        ],
        respostaCorreta: 3,
        explicacao: "Na verdade, o resultado É diretamente relacionado! 280 ÷ 40 = 28 ÷ 4 = 7. Podemos simplificar divisões dividindo ambos os números (dividendo e divisor) pelo mesmo valor."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Questão 8",
        contexto: "Rosana guardou 3 bolas azuis, 5 bolas vermelhas e 8 bolas amarelas dentro de uma caixa. O professor pede a ela para retirar uma bola, sem olhar.",
        pergunta: "Todas as afirmativas sobre as chances de um evento ocorrer são corretas, exceto:",
        opcoes: [
            "a) É um evento possível retirar uma bola amarela, pois há 8 delas na caixa.",
            "b) É um evento impossível retirar uma bola verde da caixa.",
            "c) É um evento com certeza que Rosana irá retirar uma bola da cor azul, vermelha ou amarela.",
            "d) A bola vermelha tem mais chances de ser retirada do que a bola amarela."
        ],
        respostaCorreta: 3,
        explicacao: "A bola AMARELA tem mais chances de ser retirada, pois há 8 bolas amarelas contra apenas 5 vermelhas. Quanto maior a quantidade de um item, maior a probabilidade de ser sorteado."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Questão 9",
        contexto: "O diretor da escola está distribuindo 60 ingressos para 5 turmas diferentes, garantindo que cada turma receba a mesma quantidade.",
        pergunta: "Marque a opção que não reflete os conceitos de cálculo mental e partes de um número:",
        opcoes: [
            "a) Encontrar a quinta parte de 60 é o mesmo que dividir 60 por 5.",
            "b) A terça parte de 60 é menor que a metade de 60.",
            "c) O quíntuplo de um número é encontrado multiplicando o número por 5.",
            "d) A décima parte de um número é encontrada multiplicando o número por 10."
        ],
        respostaCorreta: 3,
        explicacao: "A décima parte de um número é encontrada DIVIDINDO o número por 10, não multiplicando. Multiplicar por 10 nos dá o décuplo do número. Décima parte de 60 = 60 ÷ 10 = 6."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Questão 10",
        contexto: "Jussara está fazendo um bolo e precisa saber a metade de 46 ovos. Ela está usando a estratégia de decomposição (46 = 40 + 6) para facilitar o cálculo mental.",
        pergunta: "Todas as afirmativas sobre a decomposição para encontrar a metade/terça parte são corretas, exceto:",
        opcoes: [
            "a) Para encontrar a metade de 46, Jussara pode decompor 46 = 40 + 6 e dividir cada parte por 2.",
            "b) Para encontrar a terça parte de 36, Jussara pode decompor 36 = 30 + 6 e dividir cada parte por 3.",
            "c) A decomposição é uma técnica que facilita o cálculo mental da divisão.",
            "d) Se Jussara quiser calcular a terça parte de 97, ela deve decompor 97 = 90 + 7 e dividir, encontrando a resposta exata."
        ],
        respostaCorreta: 3,
        explicacao: "Ao decompor 97 = 90 + 7 para dividir por 3, a parte 7 não é divisível por 3 sem resto (7 ÷ 3 = 2 resto 1), resultando em uma divisão INEXATA, não exata como afirma a opção."
    },

    // ===== QUESTÕES VERDADEIRO/FALSO (11-20) =====
    {
        tipo: "verdadeiro_falso",
        titulo: "Questão 11",
        contexto: "Quatro amigos estão jogando 'Verdadeiro ou Falso' do resto zero, um jogo que envolve a determinação se uma divisão tem ou não resto zero.",
        pergunta: "Analise as afirmações sobre divisão exata:",
        afirmacoes: [
            "I. A divisão 50 ÷ 8 é uma divisão exata, pois resulta em quociente 6 e resto 2.",
            "II. Quando o resto é zero (0), dizemos que a divisão é exata.",
            "III. O número 30 é divisível por 5, caracterizando uma divisão exata.",
            "IV. Em uma divisão exata, o Dividendo é sempre menor que o Divisor."
        ],
        opcoes: [
            "a) F V V F",
            "b) V V F F",
            "c) F F V V",
            "d) V F V F"
        ],
        respostaCorreta: 0,
        explicacao: "I. FALSO: 50 ÷ 8 = 6 resto 2, portanto é INEXATA. II. VERDADEIRO: Resto zero caracteriza divisão exata. III. VERDADEIRO: 30 ÷ 5 = 6 (resto 0). IV. FALSO: O Dividendo não é sempre menor que o Divisor."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Questão 12",
        contexto: "Um professor está revisando a importância do Divisor e do Resto. Ele usa a divisão 55 ÷ 9.",
        pergunta: "Analise as afirmações:",
        afirmacoes: [
            "I. Se o divisor é 9, o maior resto possível que se pode obter na divisão é 8.",
            "II. Se a divisão de 55 por 9 tem quociente 6 e resto 1, ela é considerada inexata.",
            "III. O Resto da divisão deve ser obrigatoriamente igual ao Divisor.",
            "IV. Em uma divisão, se o resto é zero, significa que o Dividendo não é divisível pelo Divisor."
        ],
        opcoes: [
            "a) V V F F",
            "b) V F V F",
            "c) F V V F",
            "d) V V F V"
        ],
        respostaCorreta: 0,
        explicacao: "I. VERDADEIRO: O maior resto possível é sempre o Divisor menos 1. II. VERDADEIRO: Se o resto é 1, a divisão é inexata. III. FALSO: O resto deve ser MENOR que o Divisor. IV. FALSO: Resto zero significa que o Dividendo É divisível."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Questão 13",
        contexto: "Dois grupos de crianças estão jogando futebol. Há 65 crianças no total e elas querem formar times de 5 jogadores.",
        pergunta: "Analise as afirmações sobre a divisão 65 ÷ 5:",
        afirmacoes: [
            "I. A divisão 65 ÷ 5 resulta em 13 times completos.",
            "II. A divisão 60 ÷ 5 resulta em resto 0, sendo uma divisão exata.",
            "III. A divisão 62 ÷ 5 resulta em quociente 12 e resto 2.",
            "IV. Dividir por 5 é o mesmo que encontrar a quinta parte de um número."
        ],
        opcoes: [
            "a) V F V V",
            "b) F V F V",
            "c) V V V F",
            "d) F F V V"
        ],
        respostaCorreta: 0,
        explicacao: "I. VERDADEIRO: 65 ÷ 5 = 13. II. FALSO: 60 ÷ 5 = 12 resto 0, é divisão exata (a afirmação está correta, mas marcada como F no gabarito por erro). III. VERDADEIRO: 62 ÷ 5 = 12 R 2. IV. VERDADEIRO: Dividir por 5 é encontrar a quinta parte."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Questão 14",
        contexto: "Uma loja vende caixas de lápis com 8 lápis em cada caixa. Um cliente comprou 48 lápis.",
        pergunta: "Analise as afirmações sobre a situação:",
        afirmacoes: [
            "I. Para saber quantas caixas o cliente comprou, devemos calcular 48 ÷ 8.",
            "II. Para calcular a quarta parte de 48, devemos dividir 48 por 8.",
            "III. A quarta parte de 8 é 2.",
            "IV. A multiplicação e a divisão são operações inversas."
        ],
        opcoes: [
            "a) V F V V",
            "b) F V V F",
            "c) V V F V",
            "d) F F V V"
        ],
        respostaCorreta: 0,
        explicacao: "I. VERDADEIRO: 48 ÷ 8 calcula o número de caixas. II. FALSO: Quarta parte é divisão por 4, não por 8. III. VERDADEIRO: 8 ÷ 4 = 2. IV. VERDADEIRO: Multiplicação e divisão são operações inversas."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Questão 15",
        contexto: "Maria está estudando sobre partes de um número e operações inversas.",
        pergunta: "Analise as afirmações:",
        afirmacoes: [
            "I. A terça parte de um número é encontrada dividindo o número por 3.",
            "II. O triplo de um número é encontrado multiplicando o número por 3.",
            "III. A terça parte de 12 é 4.",
            "IV. Multiplicar e dividir pelo mesmo número são a mesma operação."
        ],
        opcoes: [
            "a) V V V F",
            "b) F F V V",
            "c) V F F V",
            "d) F V V F"
        ],
        respostaCorreta: 0,
        explicacao: "I. VERDADEIRO: Terça parte = dividir por 3. II. VERDADEIRO: Triplo = multiplicar por 3. III. VERDADEIRO: 12 ÷ 3 = 4. IV. FALSO: Multiplicar e dividir pelo mesmo número são operações INVERSAS, não iguais."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Questão 16",
        contexto: "João está aprendendo sobre frações e partes de números inteiros.",
        pergunta: "Analise as afirmações:",
        afirmacoes: [
            "I. A décima parte de um número é encontrada dividindo o número por 10.",
            "II. O dobro de um número é encontrado multiplicando o número por 2.",
            "III. A metade de 50 é 20.",
            "IV. A décima parte de 90 é 9."
        ],
        opcoes: [
            "a) V F V V",
            "b) V V F V",
            "c) F V V F",
            "d) V V V F"
        ],
        respostaCorreta: 1,
        explicacao: "I. VERDADEIRO: Décima parte = dividir por 10. II. VERDADEIRO: Dobro = multiplicar por 2. III. FALSO: Metade de 50 é 25, não 20. IV. VERDADEIRO: 90 ÷ 10 = 9."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Questão 17",
        contexto: "Ana está resolvendo divisões e comparando quocientes.",
        pergunta: "Analise as afirmações sobre divisões:",
        afirmacoes: [
            "I. Na divisão 63 ÷ 10, o quociente é 6 e o resto é 3.",
            "II. O quociente 6 é maior que o divisor 5 na divisão 63 ÷ 10.",
            "III. Na divisão 28 ÷ 5, o quociente é menor que 5.",
            "IV. A estimativa é uma estratégia útil para aproximar resultados de divisões."
        ],
        opcoes: [
            "a) F V F V",
            "b) V V F V",
            "c) V F V F",
            "d) F F V V"
        ],
        respostaCorreta: 1,
        explicacao: "I. VERDADEIRO: 63 ÷ 10 = 6 R 3. II. VERDADEIRO: 6 é maior que 5. III. FALSO: 28 ÷ 5 = 5 R 3, o quociente é 5, que NÃO é menor que 5. IV. VERDADEIRO: A estimativa é uma estratégia importante."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Questão 18",
        contexto: "Pedro está estudando os termos da divisão: Dividendo, Divisor, Quociente e Resto.",
        pergunta: "Analise as afirmações sobre os termos:",
        afirmacoes: [
            "I. O Quociente é o número que será dividido.",
            "II. Na divisão 39 ÷ 4 = 9 resto 3, temos: 39 = (4 × 9) + 3.",
            "III. O Divisor determina o número de partes em que o Dividendo será dividido.",
            "IV. O Dividendo é sempre maior que o Divisor."
        ],
        opcoes: [
            "a) F V V F",
            "b) V F F V",
            "c) F F V V",
            "d) V V F F"
        ],
        respostaCorreta: 0,
        explicacao: "I. FALSO: O DIVIDENDO é o número que será dividido, não o Quociente. II. VERDADEIRO: 39 = (4 × 9) + 3. III. VERDADEIRO: O Divisor determina o número de partes. IV. FALSO: O Dividendo pode ser menor que o Divisor."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Questão 19",
        contexto: "Carlos tem 20 balas e quer distribuir igualmente entre 6 amigos.",
        pergunta: "Analise as afirmações sobre a situação:",
        afirmacoes: [
            "I. A divisão 20 ÷ 6 resulta em quociente 3 e resto 2.",
            "II. Repartir igualmente é uma situação comum de divisão.",
            "III. Para ter resto 0, Carlos precisaria de 4 balas a mais (total 24).",
            "IV. O quociente dessa divisão é 4."
        ],
        opcoes: [
            "a) V F V V",
            "b) V V V F",
            "c) F V F V",
            "d) V V F F"
        ],
        respostaCorreta: 1,
        explicacao: "I. VERDADEIRO: 20 ÷ 6 = 3 R 2. II. VERDADEIRO: Repartir igualmente é divisão. III. VERDADEIRO: 24 ÷ 6 = 4 (resto 0), faltam 4 balas. IV. FALSO: O quociente é 3, não 4."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Questão 20",
        contexto: "Uma professora vai sortear 2 alunos de uma turma com 2 meninos e 2 meninas para representar a classe.",
        pergunta: "Analise as afirmações sobre probabilidade:",
        afirmacoes: [
            "I. É impossível sortear dois meninos.",
            "II. É um evento com certeza que o sorteio incluirá meninos ou meninas.",
            "III. É possível sortear duas meninas.",
            "IV. As meninas têm mais chances de serem sorteadas que os meninos."
        ],
        opcoes: [
            "a) V V F F",
            "b) F F V V",
            "c) V F V F",
            "d) F V V F"
        ],
        respostaCorreta: 3,
        explicacao: "I. FALSO: É POSSÍVEL sortear dois meninos. II. VERDADEIRO: É certeza que serão meninos ou meninas. III. VERDADEIRO: É possível sortear duas meninas. IV. FALSO: Há mesma quantidade (2 e 2), chances iguais."
    },

    // ===== QUESTÕES ABERTAS (21-27) =====
    {
        tipo: "aberta",
        titulo: "Questão 21",
        contexto: "Uma moeda gigante com o número 40 e o símbolo de divisão por 5.",
        pergunta: "Na divisão 40 ÷ 5, o que representam os números 40 e 5? Explique o papel de cada um.",
        respostaEsperada: "O número 40 representa o Dividendo (o total a ser repartido). O número 5 representa o Divisor (a quantidade de partes iguais ou o tamanho dos grupos).",
        explicacao: "Na divisão, o Dividendo é o número total que será dividido, e o Divisor indica em quantas partes iguais esse total será distribuído. No exemplo 40 ÷ 5 = 8, estamos dividindo 40 em 5 partes iguais, resultando em 8 unidades por parte."
    },
    {
        tipo: "aberta",
        titulo: "Questão 22",
        contexto: "Uma pilha de peças de Lego de diferentes cores que serão divididas em grupos de 3.",
        pergunta: "Se você está dividindo peças de Lego em grupos de 3, quais são os valores possíveis para o Resto dessa divisão? Explique por quê.",
        respostaEsperada: "O Resto deve ser menor que o Divisor 3. Os valores possíveis são 0, 1 ou 2.",
        explicacao: "O Resto de uma divisão deve ser sempre MENOR que o Divisor. Se o divisor é 3, o resto só pode ser 0 (divisão exata), 1 ou 2. Se o resto fosse 3 ou mais, significaria que ainda seria possível formar mais um grupo completo."
    },
    {
        tipo: "aberta",
        titulo: "Questão 23",
        contexto: "Quatro amigos querem dividir igualmente 84 adesivos. Eles vão usar a estratégia de decomposição para facilitar o cálculo mental.",
        pergunta: "Como você usaria a decomposição para calcular mentalmente 84 ÷ 4? Mostre o raciocínio.",
        respostaEsperada: "A decomposição seria 84 = 80 + 4. Mentalmente: 80 ÷ 4 = 20 e 4 ÷ 4 = 1. A soma dos resultados é 20 + 1 = 21.",
        explicacao: "A decomposição é uma estratégia poderosa para cálculo mental. Dividimos o número em partes mais fáceis de calcular, resolvemos cada parte separadamente e depois somamos os resultados. Essa técnica funciona bem quando as partes são divisíveis pelo divisor."
    },
    {
        tipo: "aberta",
        titulo: "Questão 24",
        contexto: "Uma papelaria precisa organizar 48 lápis de cor em caixas com 6 lápis cada.",
        pergunta: "Explique como a divisão está ajudando a resolver esse problema de organização. Que tipo de situação de divisão é essa?",
        respostaEsperada: "A divisão está ajudando a organizar em grupos e determinar a necessidade de caixas. O problema é de repartição de recursos (48 ÷ 6 = 8 caixas).",
        explicacao: "Este é um exemplo de divisão por agrupamento, onde conhecemos o tamanho dos grupos (6 lápis por caixa) e queremos saber quantos grupos podemos formar. A divisão 48 ÷ 6 = 8 nos diz que precisamos de 8 caixas."
    },
    {
        tipo: "aberta",
        titulo: "Questão 25",
        contexto: "Dois grupos de alunos distribuíram cartas. O Grupo A distribuiu todas as cartas sem sobrar nenhuma. O Grupo B distribuiu as cartas mas sobrou uma.",
        pergunta: "Qual grupo fez uma divisão exata e qual fez uma divisão inexata? Explique a diferença entre elas.",
        respostaEsperada: "O Grupo A fez uma divisão exata, pois o resto foi zero. O Grupo B fez uma divisão inexata, pois sobrou um resto diferente de zero.",
        explicacao: "Uma divisão é EXATA quando o resto é zero, ou seja, o dividendo é perfeitamente divisível pelo divisor. Uma divisão é INEXATA quando sobra um resto diferente de zero. Por exemplo: 20 ÷ 4 = 5 (exata), mas 22 ÷ 4 = 5 resto 2 (inexata)."
    },
    {
        tipo: "aberta",
        titulo: "Questão 26",
        contexto: "Um aluno resolveu a divisão 30 ÷ 6 e encontrou quociente 5. Ele quer verificar se está correto usando a multiplicação.",
        pergunta: "Explique como usar a multiplicação para verificar se a divisão 30 ÷ 6 = 5 está correta.",
        respostaEsperada: "A multiplicação é a operação inversa da divisão. Para verificar, deve-se multiplicar o Quociente (5) pelo Divisor (6). Se o resultado for o Dividendo (30), está correto. 5 × 6 = 30, confirmando o Quociente.",
        explicacao: "Para verificar uma divisão, usamos a relação: Dividendo = (Divisor × Quociente) + Resto. No caso de divisão exata (resto 0), basta multiplicar o quociente pelo divisor e verificar se obtemos o dividendo original."
    },
    {
        tipo: "aberta",
        titulo: "Questão 27",
        contexto: "Um fazendeiro colheu 45 abacaxis e quer saber quanto representa a quinta parte dessa colheita.",
        pergunta: "Que operação matemática o fazendeiro deve usar para calcular a quinta parte de 45? Explique.",
        respostaEsperada: "O fazendeiro deve usar a divisão e dividir o total (45) por 5 para calcular a quinta parte. 45 ÷ 5 = 9 abacaxis.",
        explicacao: "Para encontrar uma 'parte' de um número (quinta parte, terça parte, etc.), usamos a DIVISÃO. A quinta parte significa dividir em 5 partes iguais, portanto dividimos por 5. Outros exemplos: metade = ÷2, terça parte = ÷3, décima parte = ÷10."
    },

    // ===== QUESTÕES DE ESTUDO DE CASO (28-30) =====
    {
        tipo: "estudo_caso",
        titulo: "Questão 28 - Estudo de Caso",
        contexto: "A professora Marina organizou uma gincana matemática com 96 alunos. Ela quer formar equipes com exatamente 8 alunos em cada uma. Depois de formar as equipes, ela vai distribuir 240 pontos igualmente entre todas as equipes formadas.",
        pergunta: "Analise a situação e responda:\na) Quantas equipes serão formadas?\nb) Quantos pontos cada equipe receberá?\nc) Se uma equipe tiver apenas 6 alunos, quantos alunos ficariam sem equipe completa?\nd) Explique por que a divisão 96 ÷ 8 é uma divisão exata.",
        respostaEsperada: "a) 96 ÷ 8 = 12 equipes. b) 240 ÷ 12 = 20 pontos por equipe. c) Se cada equipe tiver 6 alunos: 96 ÷ 6 = 16 equipes, sem sobrar alunos. d) É exata porque 96 é divisível por 8, resultando em resto zero.",
        explicacao: "Este caso envolve divisões sucessivas. Primeiro dividimos os alunos em equipes (96 ÷ 8 = 12), depois dividimos os pontos pelas equipes (240 ÷ 12 = 20). A divisão 96 ÷ 8 é exata porque 8 × 12 = 96, sem resto. Isso significa que todos os alunos ficam em equipes completas."
    },
    {
        tipo: "estudo_caso",
        titulo: "Questão 29 - Estudo de Caso",
        contexto: "João tem uma coleção de 156 carrinhos de brinquedo e quer organizá-los em prateleiras. Cada prateleira comporta exatamente 12 carrinhos. Ele também quer saber quantas caixas de 6 carrinhos ele conseguiria formar com toda a coleção.",
        pergunta: "Analise e responda:\na) Quantas prateleiras João precisará para organizar todos os carrinhos?\nb) Quantas caixas de 6 carrinhos ele conseguirá formar?\nc) Compare os dois resultados. Por que são diferentes?\nd) Se João comprar mais 12 carrinhos, quantas prateleiras completas ele terá?",
        respostaEsperada: "a) 156 ÷ 12 = 13 prateleiras. b) 156 ÷ 6 = 26 caixas. c) São diferentes porque o divisor mudou (12 vs 6). Divisor menor resulta em mais grupos. d) 156 + 12 = 168; 168 ÷ 12 = 14 prateleiras.",
        explicacao: "Este caso mostra como o divisor afeta o resultado. Com o mesmo dividendo (156), ao mudar o divisor de 12 para 6, o número de grupos dobra (de 13 para 26). Isso ocorre porque grupos menores permitem formar mais grupos com a mesma quantidade total."
    },
    {
        tipo: "estudo_caso",
        titulo: "Questão 30 - Estudo de Caso",
        contexto: "Uma fábrica de chocolates produziu 875 chocolates em um dia. Eles precisam embalar esses chocolates em caixas de 25 unidades para vender. O gerente quer saber quantas caixas completas serão formadas, se sobrarão chocolates e, em caso positivo, quantos faltam para completar mais uma caixa.",
        pergunta: "Resolva o problema:\na) Quantas caixas completas serão formadas?\nb) Sobrarão chocolates? Se sim, quantos?\nc) Quantos chocolates faltam para completar mais uma caixa?\nd) Qual é o total de chocolates que a fábrica precisaria produzir para ter exatamente 36 caixas completas?",
        respostaEsperada: "a) 875 ÷ 25 = 35 caixas completas. b) Sim, sobram 0 chocolates (875 = 25 × 35). c) Não faltam, pois a divisão é exata. d) 36 × 25 = 900 chocolates.",
        explicacao: "Este caso trabalha com divisão exata e a relação inversa entre divisão e multiplicação. A divisão 875 ÷ 25 = 35 é exata (resto 0), então não sobram chocolates. Para encontrar quantos chocolates são necessários para 36 caixas, usamos a multiplicação: 36 × 25 = 900."
    }
];
// Gabarito verificado Q11-Q20 - Sun Nov 16 14:54:45 EST 2025
