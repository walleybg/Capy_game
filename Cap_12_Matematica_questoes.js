// Banco de questões do Capítulo 12 de Matemática - "Muitas multiplicações"
const dadosDoQuizMatematica12 = [
    // Grupo 1: Questões de Múltipla Escolha (1-9)
    {
        titulo: "Regra do Zero",
        contexto: "A regra prática de acrescentar zeros para multiplicar por 10, 100 ou 1.000 é muito útil. Por exemplo, 4×1.000 é igual a 4 seguido de três zeros, resultando em 4.000.",
        pergunta: "Marque a opção que NÃO reflete o conceito fundamental da multiplicação por potências de 10:",
        opcoes: [
            "Multiplicar 50×6 pode ser resolvido calculando 5×6=30 e, em seguida, acrescentando um zero, resultando em 300. Utilizando decomposição → 50 x 6 = 5 x 10 x 6 = 5 x 6 x 10 = 30 x 10 = 300",
            "A operação 20×40 pode ser vista como 2×4 (que é 8), seguido de dois zeros, totalizando 800. Utilizando decomposição → 20 x 40 = 2 x 10 x 4 x 10 = 2 x 4 x 10 x 10 = 8 x 100 = 800",
            "Multiplicar um número por 1.000 é o mesmo que deslocar o valor posicional de cada algarismo três casas para a direita.",
            "O produto de 10×100 é 1.000, pois somamos a quantidade de zeros de ambos os fatores."
        ],
        respostaCorreta: "Multiplicar um número por 1.000 é o mesmo que deslocar o valor posicional de cada algarismo três casas para a direita.",
        explicacao: "Multiplicar por 1.000 desloca o valor posicional três casas para a esquerda, não para a direita (o que aconteceria na divisão). As outras opções ilustram corretamente a regra prática de acrescentar zeros ou de fazer a multiplicação dos algarismos significativos e depois adicionar os zeros.",
        tipo: "multipla_escolha"
    },
    {
        titulo: "Tábua de Pitágoras – Colunas Específicas",
        contexto: "Ao explorar a Tábua de Pitágoras (de 1 a 10), observamos padrões interessantes nas colunas e linhas.",
        pergunta: "Todas as afirmações sobre a linha ou coluna do 5 são verdadeiras, exceto:",
        opcoes: [
            "Todos os resultados da multiplicação por 5 terminam em 0 ou 5.",
            "Se multiplicarmos um número ímpar por 5, o resultado sempre terminará em 5.",
            "A multiplicação por 5 sempre resulta em um número par.",
            "A linha do 5 é idêntica à coluna do 5 devido à propriedade comutativa da multiplicação."
        ],
        respostaCorreta: "A multiplicação por 5 sempre resulta em um número par.",
        explicacao: "A multiplicação por 5 resulta em números que terminam em 0 (par) ou 5 (ímpar), dependendo se o outro fator é par ou ímpar, respectivamente. Portanto, nem sempre resulta em um número par. As opções a, b e d são corretas.",
        tipo: "multipla_escolha"
    },
    {
        titulo: "Método da Decomposição",
        contexto: "O método de decomposição é uma estratégia valiosa para simplificar o cálculo mental ou escrito.",
        pergunta: "Marque a opção que não representa uma decomposição correta e válida para resolver 14×8:",
        opcoes: [
            "(10×8)+(4×8).",
            "(14×5)+(14×3).",
            "(7×8)+(7×8).",
            "(14×10)−(14×2)."
        ],
        respostaCorreta: "(7×8)+(7×8).",
        explicacao: "A opção (7×8)+(7×8) resulta em 56+56=112, mas 14×8=112, então matematicamente está correto. Porém, esta decomposição não representa diretamente 14×8, pois 7+7=14, mas não estamos multiplicando 14×8. As outras opções são decomposições válidas: (10+4)×8, 14×(5+3), e 14×(10-2).",
        tipo: "multipla_escolha"
    },
    {
        titulo: "Algoritmo Convencional",
        contexto: "Ao resolver a multiplicação 25×4 pelo algoritmo convencional, o resultado da multiplicação 4×5 é 20. O algarismo 0 fica na casa das unidades e o algarismo 2 é \"levado\" para ser adicionado ao produto das dezenas.",
        pergunta: "Todas as afirmativas são corretas em relação a esse procedimento, exceto:",
        opcoes: [
            "O número '2' escrito acima do 2 de 25 representa 2 dezenas (20).",
            "O cálculo seguinte é 4×2=8, e somamos as 2 dezenas que subiram, resultando em 10, que, neste caso, representa 10 dezenas (100).",
            "O passo em que o 2 é \"levado\" é necessário porque o produto parcial (4×5) ultrapassou o valor 9 da casa das unidades.",
            "Se a conta fosse 24×3, o valor \"levado\" seria 1, e o resultado final seria 75."
        ],
        respostaCorreta: "Se a conta fosse 24×3, o valor \"levado\" seria 1, e o resultado final seria 75.",
        explicacao: "Se a conta fosse 24×3: 3×4=12 (levamos 1), 3×2=6, somamos 1 = 7. O resultado seria 72, não 75. O valor levado seria 1, mas o resultado final seria 72, não 75. A afirmativa está incorreta na parte do resultado final.",
        tipo: "multipla_escolha"
    },
    {
        titulo: "Problemas de Organização/Divisão Implícita",
        contexto: "Marina precisa organizar 48 livros em 6 prateleiras, garantindo que cada prateleira contenha a mesma quantidade de livros. O cálculo que ela fará está relacionado à multiplicação.",
        pergunta: "Todas as afirmativas sobre a situação de Marina são corretas, exceto:",
        opcoes: [
            "Marina está procurando o fator que, multiplicado por 6 (número de prateleiras), resulta em 48 (total de livros).",
            "A operação que representa a solução para o problema é 6×L=48, onde L é o número de livros por prateleira.",
            "O número 48 deve ser decomposto em partes iguais, o que é um conceito associado à divisão, mas que usa a Tábua de Pitágoras inversamente.",
            "Se Marina tivesse 50 livros, ela conseguiria colocar 8 livros em cada prateleira, sem sobras."
        ],
        respostaCorreta: "Se Marina tivesse 50 livros, ela conseguiria colocar 8 livros em cada prateleira, sem sobras.",
        explicacao: "Se Marina tivesse 50 livros e 6 prateleiras, ela colocaria 50÷6 = 8 livros por prateleira com 2 livros sobrando (8×6=48, sobram 2). Portanto, haveria sobras. As outras afirmativas estão corretas.",
        tipo: "multipla_escolha"
    },
    {
        titulo: "Combinatória – Salada",
        contexto: "Uma lanchonete oferece saladas combinando: 4 tipos de base, 6 tipos de legumes e 4 opções de proteína.",
        pergunta: "Marque a opção que não reflete o cálculo correto para o total de saladas diferentes que podem ser montadas:",
        opcoes: [
            "Este é um problema de contagem fundamental que exige a multiplicação das opções em cada categoria.",
            "O cálculo correto é 4×6×4.",
            "Se a lanchonete adicionasse mais um tipo de legume (passando para 7), o número total de saladas aumentaria em 4.",
            "Se o cliente pudesse escolher apenas 1 tipo de base e 1 tipo de legume e 1 tipo de proteína, o total de combinações é 4×6×4."
        ],
        respostaCorreta: "Se a lanchonete adicionasse mais um tipo de legume (passando para 7), o número total de saladas aumentaria em 4.",
        explicacao: "Se passasse de 6 para 7 tipos de legumes, o total passaria de 4×6×4=96 para 4×7×4=112. O aumento seria de 16 saladas, não 4. O aumento seria 4×1×4=16 (4 bases × 1 legume adicional × 4 proteínas).",
        tipo: "multipla_escolha"
    },
    {
        titulo: "Comparação de Eficiência",
        contexto: "Júlia e Eduarda calculam o número de azulejos em uma parede. Júlia usa a adição repetida e Eduarda usa a multiplicação.",
        pergunta: "Em sua opinião, qual estratégia é mais eficiente para totalizar um arranjo de 15×25 azulejos, e por que? Marque a alternativa que NÃO é um argumento válido a favor da multiplicação:",
        opcoes: [
            "A multiplicação (15×25) é mais rápida e menos propensa a erros de soma.",
            "A multiplicação reflete o conceito de área, o que é mais adequado para arranjos retangulares.",
            "A adição repetida é mais eficiente do que a multiplicação quando os números são grandes.",
            "A multiplicação é uma operação simplificada da adição repetida, economizando tempo no cálculo."
        ],
        respostaCorreta: "A adição repetida é mais eficiente do que a multiplicação quando os números são grandes.",
        explicacao: "A adição repetida torna-se menos eficiente quando os números são grandes, não mais eficiente. Para 15×25, seria necessário somar 15 vinte e cinco vezes (ou 25 quinze vezes), o que é muito mais trabalhoso que a multiplicação direta.",
        tipo: "multipla_escolha"
    },
    {
        titulo: "Multiplicação com Múltiplos de 10",
        contexto: "Considere a multiplicação de 400×50.",
        pergunta: "Todas as afirmativas são corretas para resolver 400×50, exceto:",
        opcoes: [
            "Podemos calcular 4×5=20 e, em seguida, acrescentar a quantidade total de zeros dos fatores (três zeros), resultando em 20.000.",
            "A multiplicação 400×50 é equivalente à multiplicação 4×5×100×10.",
            "O resultado final é 20.000.",
            "O resultado final é 2.000, pois 4×5=20, e acrescentamos apenas os dois zeros do 400."
        ],
        respostaCorreta: "O resultado final é 2.000, pois 4×5=20, e acrescentamos apenas os dois zeros do 400.",
        explicacao: "O resultado correto é 20.000. Temos 400 (2 zeros) × 50 (1 zero) = total de 3 zeros. 4×5=20, acrescentamos 3 zeros: 20.000. A opção d está incorreta ao considerar apenas os zeros do 400.",
        tipo: "multipla_escolha"
    },
    {
        titulo: "Propriedades da Multiplicação",
        contexto: "A exploração da Tábua de Pitágoras revela propriedades importantes da multiplicação.",
        pergunta: "Todas as afirmativas a seguir sobre as propriedades da multiplicação são corretas, exceto:",
        opcoes: [
            "A propriedade comutativa é observada pela simetria da tabela, por exemplo, 3×5 é igual a 5×3.",
            "Multiplicar qualquer número por 1 resulta no próprio número (Elemento Neutro da Multiplicação).",
            "O produto de dois números ímpares sempre resulta em um número par.",
            "A multiplicação por zero sempre resulta em zero (Propriedade Anulativa)."
        ],
        respostaCorreta: "O produto de dois números ímpares sempre resulta em um número par.",
        explicacao: "O produto de dois números ímpares sempre resulta em um número ímpar, não par. Exemplo: 3×5=15 (ímpar), 7×9=63 (ímpar). As outras propriedades estão corretas.",
        tipo: "multipla_escolha"
    },

    // Grupo 2: Questões de Verdadeiro ou Falso (10-19)
    {
        titulo: "A Tábua e o Zero",
        contexto: "Explorando conceitos fundamentais da multiplicação e suas propriedades especiais.",
        pergunta: "Analise as afirmações sobre multiplicação e propriedades:",
        afirmacoes: [
            "O único número que, quando multiplicado por qualquer outro número, resulta no mesmo número é o 1.",
            "A Tábua de Pitágoras, se fosse expandida para incluir o 0, mostraria que todos os produtos dessa linha ou coluna seriam 0.",
            "Multiplicar 2 por um número sempre resulta em um número ímpar.",
            "A multiplicação é uma operação que sempre aumenta o valor do número, exceto quando multiplicamos por 1."
        ],
        opcoes: [
            "V, V, F, F",
            "V, V, F, V",
            "F, F, V, V",
            "F, V, V, F"
        ],
        respostaCorreta: "V, V, F, F",
        explicacao: "I (V): O 1 é o elemento neutro da multiplicação. II (V): Qualquer número multiplicado por 0 resulta em 0. III (F): Multiplicar 2 por qualquer número sempre resulta em número par. IV (F): Multiplicar por números menores que 1 diminui o valor.",
        tipo: "verdadeiro_falso"
    },
    {
        titulo: "Decomposição e Distributiva",
        contexto: "Analisando métodos de decomposição e a propriedade distributiva da multiplicação.",
        pergunta: "Analise as afirmações sobre decomposição e propriedade distributiva:",
        afirmacoes: [
            "O método de decomposição usado por Paola para 13×9 é um exemplo da propriedade distributiva da multiplicação em relação à adição.",
            "Para calcular 16×7, a decomposição 16×7=(10×7)+(6×7) é a única maneira correta de usar a decomposição.",
            "A decomposição 70+42=112 é o resultado final da multiplicação 16×7.",
            "A estratégia de Raul, que decompôs 25 em 20+5, é mais eficiente que a estratégia de Ana Júlia, que decompôs 4 em 4×(1+...), pois ambas chegam ao mesmo resultado (100)."
        ],
        opcoes: [
            "V, F, V, F",
            "F, V, V, V",
            "V, F, F, V",
            "V, V, V, F"
        ],
        respostaCorreta: "V, F, V, F",
        explicacao: "I (V): A decomposição usa a propriedade distributiva. II (F): Há várias formas de decompor, como 16×7=(8×7)+(8×7). III (V): 16×7=(10×7)+(6×7)=70+42=112. IV (F): Ambas estratégias são válidas, não há uma mais eficiente que a outra necessariamente.",
        tipo: "verdadeiro_falso"
    },
    {
        titulo: "Algoritmo e Posicionamento",
        contexto: "Analisando o algoritmo convencional da multiplicação e o conceito de valor posicional.",
        pergunta: "Analise as afirmações sobre o algoritmo convencional:",
        afirmacoes: [
            "No algoritmo convencional da multiplicação, quando multiplicamos unidades por unidades e obtemos um valor maior que 9, devemos \"levar\" o valor das dezenas para a próxima coluna.",
            "Ao calcular 42×5, o primeiro produto parcial é 10 (de 2×5), então colocamos 0 e levamos 1. O resultado seguinte (5×4) é 20, somamos 1, dando 210.",
            "Em qualquer multiplicação de dois números de dois dígitos, sempre obteremos um resultado de quatro dígitos.",
            "O produto de 63×5 é 315, que é um número ímpar, mas o produto de 64×5 é 320, que é um número par."
        ],
        opcoes: [
            "V, V, F, V",
            "V, F, F, V",
            "F, V, V, V",
            "V, V, V, F"
        ],
        respostaCorreta: "V, V, F, V",
        explicacao: "I (V): Correto, levamos as dezenas. II (V): 42×5: 2×5=10 (0 e leva 1), 4×5=20+1=21, resultado 210. III (F): 10×10=100 (3 dígitos), nem sempre são 4 dígitos. IV (V): 63×5=315 (ímpar), 64×5=320 (par).",
        tipo: "verdadeiro_falso"
    },
    {
        titulo: "Multiplicação em Gráfico/Área",
        contexto: "Um ladrilhamento retangular de 10×13, dividido em duas cores: 10×10 (azul) e 10×3 (verde).",
        pergunta: "Analise as afirmações sobre representação visual da multiplicação:",
        afirmacoes: [
            "A imagem de ladrilhamento representa visualmente a propriedade distributiva, pois o total pode ser calculado somando as duas áreas parciais: (10×10)+(10×3).",
            "Se a área azul mede 10×10=100 e a área verde mede 10×3=30, o total de ladrilhos é 130.",
            "Se a parede fosse de 20×30 ladrilhos, o total seria 20×30=60.",
            "A multiplicação de 10+3 por 9 (mostrada na fonte) é um exemplo de como a área de um retângulo pode ser determinada mesmo quando um dos lados é decomposto."
        ],
        opcoes: [
            "V, V, F, V",
            "V, F, F, F",
            "F, V, V, V",
            "V, V, V, F"
        ],
        respostaCorreta: "V, V, F, V",
        explicacao: "I (V): Representa a propriedade distributiva. II (V): 100+30=130 ladrilhos. III (F): 20×30=600, não 60. IV (V): (10+3)×9 demonstra decomposição em área retangular.",
        tipo: "verdadeiro_falso"
    },
    {
        titulo: "Relação com a Adição Repetida",
        contexto: "Explorando a relação fundamental entre multiplicação e adição repetida.",
        pergunta: "Analise as afirmações sobre multiplicação e adição repetida:",
        afirmacoes: [
            "A multiplicação 7×4 significa que o número 7 foi repetido 4 vezes na soma (7+7+7+7).",
            "Em um problema de multiplicação, o fator que representa o número de vezes que a quantidade é repetida é chamado de multiplicador.",
            "Em problemas com números grandes, a adição repetida é considerada um algoritmo mais robusto e menos propenso a erros do que o algoritmo convencional da multiplicação.",
            "A multiplicação 4×8 pode ser visualizada como a contagem de 4 fileiras com 8 figurinhas em cada uma, resultando em 32."
        ],
        opcoes: [
            "V, F, V, F",
            "F, V, F, V",
            "V, F, F, V",
            "V, V, V, V"
        ],
        respostaCorreta: "V, F, F, V",
        explicacao: "I (V): 7×4 = 7+7+7+7. II (F): O multiplicador é o segundo fator, mas ambos podem ser interpretados como quantidade repetida. III (F): Para números grandes, a multiplicação é mais eficiente. IV (V): 4 fileiras × 8 figurinhas = 32.",
        tipo: "verdadeiro_falso"
    },
    {
        titulo: "O Produto e o Aumento",
        contexto: "Analisando como mudanças nos fatores afetam o produto final.",
        pergunta: "Analise as afirmações sobre variação nos fatores:",
        afirmacoes: [
            "Comparando os resultados de 42×5=210 e 43×5=215, o aumento de uma unidade no fator 42 resultou em um aumento de 5 unidades no produto final.",
            "O aumento em 5 unidades é esperado, pois o fator que variou foi multiplicado por 5.",
            "Para descobrir 44×5, basta somar 10 ao resultado de 42×5=210.",
            "Se 63×5=315, e 66×5 está sendo procurado, a diferença entre os fatores (3) deve ser multiplicada por 5, e este resultado (15) deve ser somado a 315, dando 330."
        ],
        opcoes: [
            "V, V, F, V",
            "F, V, V, V",
            "V, F, V, F",
            "V, V, V, V"
        ],
        respostaCorreta: "V, V, F, V",
        explicacao: "I (V): 43×5 - 42×5 = 5. II (V): O aumento de 1 no primeiro fator resulta em aumento de 5 no produto. III (F): 44×5 - 42×5 = 2×5 = 10, então seria 220, não 220. IV (V): 66×5 - 63×5 = 3×5 = 15, então 315+15=330.",
        tipo: "verdadeiro_falso"
    },
    {
        titulo: "Multiplicando por 1000",
        contexto: "Explorando a multiplicação por potências de 10 e suas regras.",
        pergunta: "Analise as afirmações sobre multiplicação por 1000:",
        afirmacoes: [
            "Multiplicar 100×1.000 resulta em 100.000.",
            "A regra de adicionar zeros só se aplica se o outro fator não contiver zeros.",
            "400×1000 tem o mesmo resultado que 4×100.000.",
            "A multiplicação de 10×10×10×10 resulta em 10.000."
        ],
        opcoes: [
            "V, F, V, V",
            "F, V, F, V",
            "V, V, F, F",
            "V, F, F, V"
        ],
        respostaCorreta: "V, F, V, V",
        explicacao: "I (V): 100×1.000=100.000. II (F): A regra funciona mesmo com zeros nos fatores. III (V): 400×1.000=400.000 e 4×100.000=400.000. IV (V): 10⁴=10.000.",
        tipo: "verdadeiro_falso"
    },
    {
        titulo: "Explorando Padrões na Tábua de Pitágoras",
        contexto: "Identificando padrões especiais na Tábua de Pitágoras.",
        pergunta: "Analise as afirmações sobre padrões na Tábua de Pitágoras:",
        afirmacoes: [
            "Na Tábua de Pitágoras, os números ao longo da diagonal principal (onde a linha e a coluna são iguais, como 4×4 ou 7×7) são chamados de números primos.",
            "Todos os resultados na coluna do 9 (excluindo 9×10) têm a soma de seus algarismos igual a 9.",
            "O resultado de 10×10=100 é o maior produto na Tábua de Pitágoras de 1 a 10.",
            "O produto de 2×5 (10) é o mesmo que o produto de 1×10 (10)."
        ],
        opcoes: [
            "F, V, V, V",
            "V, F, V, F",
            "F, V, F, V",
            "V, V, V, V"
        ],
        respostaCorreta: "F, V, V, V",
        explicacao: "I (F): Os números da diagonal são quadrados perfeitos, não primos. II (V): 9×1=9, 9×2=18 (1+8=9), etc. III (V): 10×10=100 é o maior. IV (V): Ambos resultam em 10.",
        tipo: "verdadeiro_falso"
    },
    {
        titulo: "Combinatória e Escolhas",
        contexto: "Analisando problemas de combinatória e contagem.",
        pergunta: "Analise as afirmações sobre combinatória:",
        afirmacoes: [
            "Se uma lanchonete oferece 3 tipos de pães e 4 tipos de carne para fazer sanduíches, há 3+4 combinações possíveis.",
            "A lanchonete oferece 4 opções de fruta (laranja, kiwi, morango, etc.) e 4 opções de líquidos (leite, água mineral, etc.). O total de sucos diferentes de uma fruta e um líquido é 16.",
            "Um problema de combinatória sempre exige o uso da multiplicação para determinar o número total de possibilidades.",
            "Na compra de 2 sabonetes e 3 desodorantes, o cliente ganhou 1 batom. Se ela comprar 4 sabonetes e 6 desodorantes (o dobro), ela ganhará o dobro de batons (2)."
        ],
        opcoes: [
            "F, V, F, F",
            "V, V, F, F",
            "F, V, V, F",
            "V, F, V, V"
        ],
        respostaCorreta: "F, V, F, F",
        explicacao: "I (F): São 3×4=12 combinações, não 3+4=7. II (V): 4×4=16 sucos diferentes. III (F): Nem sempre, alguns usam adição. IV (F): Depende das regras da promoção, não necessariamente o dobro.",
        tipo: "verdadeiro_falso"
    },
    {
        titulo: "Usando Diagramas",
        contexto: "O diagrama de Paula mostrando a resolução de 3×65=180+15=195.",
        pergunta: "Analise as afirmações sobre o diagrama de decomposição:",
        afirmacoes: [
            "O diagrama é uma representação gráfica da decomposição de 65 em 60+5 e da multiplicação de cada parte por 3.",
            "O produto 3×5 (que é 15) está na casa das unidades do resultado final.",
            "O produto 3×60 (que é 180) representa 18 dezenas.",
            "Este tipo de diagrama ajuda a entender o porquê de o algoritmo convencional usar o conceito de \"levar\" dezenas."
        ],
        opcoes: [
            "V, F, V, V",
            "V, V, F, V",
            "F, V, F, V",
            "V, F, V, F"
        ],
        respostaCorreta: "V, F, V, V",
        explicacao: "I (V): Representa 3×(60+5)=3×60+3×5. II (F): 15 não fica apenas nas unidades, contribui para dezenas também. III (V): 180 = 18 dezenas. IV (V): Mostra visualmente a distribuição posicional.",
        tipo: "verdadeiro_falso"
    },

    // Grupo 3: Questões Abertas (20-26)
    {
        titulo: "Sentido do Campo Multiplicativo",
        contexto: "O capítulo aborda situações-problema do campo multiplicativo, como a contagem de bolinhas em prateleiras (7 prateleiras com 4 bolinhas cada).",
        pergunta: "Em poucas palavras, qual é a principal diferença entre um problema que é resolvido por adição e um problema que é resolvido por multiplicação?",
        tipo: "aberta"
    },
    {
        titulo: "Estratégias de Decomposição",
        contexto: "Raul resolveu 25×4 usando 20×4 e 5×4, enquanto Ana Júlia usou 4×20 e 4×5.",
        pergunta: "Qual propriedade da multiplicação permite que Raul e Ana Júlia cheguem ao mesmo resultado, apesar de terem organizado a multiplicação de forma diferente?",
        tipo: "aberta"
    },
    {
        titulo: "Regra de Multiplicação por 10",
        contexto: "O produto de 10×100 é 1.000.",
        pergunta: "Qual regra prática de contagem de zeros é aplicada para obter esse resultado?",
        tipo: "aberta"
    },
    {
        titulo: "Significado do \"Levado\"",
        contexto: "Ao calcular 46×5, o produto 6×5 é 30. Colocamos 0 e \"levamos\" o 3.",
        pergunta: "O que este algarismo '3' levado representa em termos de valor posicional (unidades, dezenas, centenas)?",
        tipo: "aberta"
    },
    {
        titulo: "Simetria na Tábua de Pitágoras",
        contexto: "A Tábua de Pitágoras de 1 a 10 é simétrica em relação à sua diagonal principal.",
        pergunta: "O que a simetria da tabela nos informa sobre a relação entre, por exemplo, 8×3 e 3×8?",
        tipo: "aberta"
    },
    {
        titulo: "Multiplicação vs. Duplicação",
        contexto: "Em uma sequência, a seta laranja significa multiplicar por 2, e a seta verde significa adicionar 2. Se você começar com o número 10 e aplicar a seta laranja (multiplicar por 2) e depois a seta verde (adicionar 2), o resultado é 22.",
        pergunta: "Qual seria o resultado se você aplicasse a seta verde primeiro, e depois a seta laranja?",
        tipo: "aberta"
    },
    {
        titulo: "Combinatória Essencial",
        contexto: "Para montar um suco, você deve escolher 1 fruta (4 opções) E 1 líquido (4 opções). Se você for montar dois sucos diferentes, um para você e um para um colega, e as escolhas de fruta e líquido puderem se repetir.",
        pergunta: "Qual o cálculo multiplicativo total necessário para encontrar todas as combinações de dois sucos?",
        tipo: "aberta"
    },

    // Grupo 4: Questões de Estudo de Caso (27-29)
    {
        titulo: "Otimizando a Organização de Livros",
        contexto: "Pedro precisa organizar os livros de 8 prateleiras em 4 filas de cadeiras. Em cada fila de cadeiras cabem 8 livros por cadeira, e há 8 cadeiras em cada fila. Ele observa que 7 livros estavam em cada prateleira (8 prateleiras). Ele concluiu que há 56 livros no total (7×8=56). A capacidade total de armazenamento nas cadeiras é 4 filas ×8 cadeiras/fila ×8 livros/cadeira.",
        pergunta: "Pedro conseguirá colocar todos os 56 livros nas cadeiras? Proponha uma multiplicação de decomposição para calcular a capacidade total de livros das cadeiras e justifique sua resposta.",
        tipo: "aberta"
    },
    {
        titulo: "Análise de Erro no Algoritmo",
        contexto: "Um aluno resolveu a multiplicação 32×4 da seguinte forma: Calculou 4×2=8. Calculou 4×3=12. Escreveu o resultado como 128. Em seguida, ele resolveu 47×3: Calculou 3×7=21. Colocou 1 e \"levou\" 2. Calculou 3×4=12. Escreveu o 12 ao lado do 1, obtendo 121.",
        pergunta: "O aluno errou o segundo cálculo (47×3). Explique qual conceito do algoritmo convencional ele esqueceu de aplicar e por que ele acertou o primeiro cálculo (32×4), mesmo sem ter clareza sobre o valor posicional do número levado.",
        tipo: "aberta"
    },
    {
        titulo: "Escolha da Estratégia de Cálculo",
        contexto: "Você precisa calcular 52×9. Seu professor sugere três métodos: Algoritmo Convencional: 52×9 (multiplicando unidade, depois dezena, levando o excedente). Decomposição por Adição: (50×9)+(2×9). Decomposição por Subtração: (52×10)−(52×1).",
        pergunta: "Qual desses três métodos você escolheria e por quê? Justifique sua escolha apontando a vantagem da estratégia selecionada em termos de velocidade ou menor chance de erro.",
        tipo: "aberta"
    }
];
