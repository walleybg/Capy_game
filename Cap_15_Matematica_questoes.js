// Capítulo 15: A Capacidade para Medir
// 30 questões: 10 múltipla escolha + 10 verdadeiro/falso + 7 abertas + 3 estudos de caso

const dadosDoQuizMatematica15 = [
    // ===== QUESTÕES DE MÚLTIPLA ESCOLHA (1-10) =====
    {
        tipo: "multipla_escolha",
        titulo: "Questão 1",
        contexto: "Maria precisa comprar uma garrafa de água para levar em sua mochila. Ela quer uma garrafa que tenha a capacidade de 'meio litro'. Ao observar as embalagens no supermercado, ela encontra opções de 100 mL, 500 mL, 750 mL e 1000 mL.",
        pergunta: "Todas as afirmativas sobre a capacidade que Maria procura são corretas, exceto:",
        opcoes: [
            "a) A capacidade de meio litro corresponde a 500 mililitros (mL).",
            "b) A capacidade de 500 mL é exatamente a metade de um Litro (L).",
            "c) A garrafa de 1000 mL é o dobro da capacidade que Maria procura.",
            "d) A capacidade de 100 mL representa a mesma quantidade de líquido que Maria busca."
        ],
        respostaCorreta: 3,
        explicacao: "A capacidade de 'meio litro' é igual a 500 mL. 100 mL é uma capacidade menor, não representando a quantidade que Maria busca."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Questão 2",
        contexto: "O professor fez um experimento para encher uma garrafa, primeiro usando um copo e depois usando uma xícara como instrumentos de medida.",
        pergunta: "Marque a opção que não reflete os conceitos abordados no experimento:",
        opcoes: [
            "a) Para medir a quantidade de líquido em um recipiente, usamos unidades de medida de capacidade, como o Litro (L) e o mililitro (mL).",
            "b) A quantidade de copos usada para encher a garrafa foi diferente da quantidade de xícaras usadas porque esses instrumentos não têm a mesma capacidade.",
            "c) O uso de um copo pequeno (aproximadamente 30 mL) ou de uma xícara é um método de medição mais preciso do que usar uma proveta ou um béquer.",
            "d) Fazer uma estimativa antes de realizar a medição ajuda a prever a quantidade aproximada de líquido necessário."
        ],
        respostaCorreta: 2,
        explicacao: "O Litro (L) e o mililitro (mL) são unidades de medida padronizadas. O béquer e a proveta são instrumentos graduados mais precisos para medir capacidade do que um copo ou xícara."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Questão 3",
        contexto: "Um rótulo de sabonete líquido indica que a embalagem contém 420 mL.",
        pergunta: "Marque a opção que não reflete o conceito de comparação de capacidades:",
        opcoes: [
            "a) A embalagem de sabonete líquido tem uma capacidade menor que um Litro.",
            "b) Para completar 1 Litro, seriam necessários mais 580 mL de sabonete líquido (considerando 1 L = 1000 mL).",
            "c) Se fosse preciso encher uma embalagem de 1 Litro com este sabonete, seriam necessárias três embalagens de 420 mL.",
            "d) A embalagem de 420 mL contém menos líquido do que uma embalagem de 1 Litro."
        ],
        respostaCorreta: 2,
        explicacao: "1 Litro equivale a 1.000 mL. Três embalagens de 420 mL somam 1.260 mL. Essa quantidade é maior do que 1 Litro, e não o volume exato para encher a embalagem de 1 Litro."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Questão 4",
        contexto: "Reginaldo precisa misturar 2 Litros de suco concentrado com água para preparar uma bebida. Ele só tem medidores que indicam mililitros.",
        pergunta: "Todas as afirmativas são corretas, exceto:",
        opcoes: [
            "a) 2 Litros correspondem a 2.000 mililitros (mL), pois 1 Litro é igual a 1.000 mililitros.",
            "b) Para medir exatamente 2 Litros, ele poderia usar quatro embalagens de 500 mL.",
            "c) O Litro (L) é a unidade mais usada para medir grandes quantidades de líquido, como uma garrafa de refrigerante ou água.",
            "d) Se ele usar a lata de refrigerante (aproximadamente 350 mL) como medidor, ele precisará de menos de cinco latas cheias para atingir 2 Litros."
        ],
        respostaCorreta: 3,
        explicacao: "2 Litros são 2.000 mL. Usando latas de 350 mL (capacidade aproximada de refrigerante), 2.000 ÷ 350 ≈ 5,7. Ele precisará de 6 latas cheias, ou seja, mais de cinco latas."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Questão 5",
        contexto: "O Sr. Osvaldo produz 2 Litros de leite por dia e precisa de 10 Litros de leite para fazer cada queijo.",
        pergunta: "Marque a opção que não reflete os conceitos de capacidade e produção:",
        opcoes: [
            "a) Se o Sr. Osvaldo usar toda a produção de 5 dias, ele terá exatamente os 10 Litros de leite necessários para fazer um queijo.",
            "b) 20 Litros de leite seriam suficientes para o Sr. Osvaldo fazer dois queijos.",
            "c) Para que ele possa fazer 5 queijos em um mês, ele precisará produzir um total de 50 Litros de leite.",
            "d) A capacidade usada para medir a produção de leite (Litros) é uma unidade menor que o mililitro."
        ],
        respostaCorreta: 3,
        explicacao: "O Litro (L) é a medida de capacidade mais comum e é usada para recipientes maiores. O mililitro (mL) é usado para medir pequenas capacidades. O Litro é uma unidade maior que o mililitro."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Questão 6",
        contexto: "Joana quer colocar 10 Litros de suco de morango em garrafinhas de 500 mL para o lanche do colégio.",
        pergunta: "Marque a opção que não reflete o raciocínio correto para a divisão da capacidade:",
        opcoes: [
            "a) Primeiro, deve-se converter 10 Litros para mililitros, resultando em 10.000 mL.",
            "b) Em seguida, deve-se dividir o volume total (10.000 mL) pela capacidade de cada garrafinha (500 mL).",
            "c) O número total de garrafinhas que ela precisará será de 20.",
            "d) Ela poderia usar embalagens de 300 mL (como visto na Atividade 8) e precisaria de menos garrafas, pois 300 mL tem mais capacidade que 500 mL."
        ],
        respostaCorreta: 3,
        explicacao: "Joana precisa de 10.000 mL (10 L). Se usasse garrafas de 300 mL (capacidade menor que 500 mL), ela precisaria de aproximadamente 33,3 garrafas. Quanto menor a capacidade do recipiente, maior o número de embalagens necessárias."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Questão 7",
        contexto: "Joaquim, um mecânico, utiliza 4 Litros de óleo novo no motor de cada um dos 30 clientes que atende em um dia. Ele armazena o óleo em um tanque com capacidade para 5.000 Litros.",
        pergunta: "Todas as afirmativas são corretas, exceto:",
        opcoes: [
            "a) A quantidade de óleo que Joaquim gasta por dia é de 120 Litros (4 L x 30 clientes).",
            "b) Em 10 dias de trabalho (com 30 clientes/dia), Joaquim gastaria 1.200 Litros de óleo.",
            "c) O tanque de 5.000 Litros é uma capacidade grande, semelhante à de um barril de óleo (Aprox. 160 L).",
            "d) Após gastar 1.200 Litros de óleo em 10 dias, sobraria no tanque uma capacidade de óleo superior a 4.000 Litros."
        ],
        respostaCorreta: 2,
        explicacao: "O consumo diário é de 120 L (4 L x 30). O tanque tem 5.000 L de capacidade. A capacidade de um barril comum de óleo é de 160 L. 5.000 L não é uma capacidade semelhante a 160 L; é muito maior."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Questão 8",
        contexto: "Você está analisando o consumo de água de uma família (Rodrigo, Ex. 2) e observa que a atividade que mais consome água em um dia é 'Tomar banho' (180 Litros), seguida por 'Lavar a roupa' (150 Litros).",
        pergunta: "Marque a opção que não reflete os conceitos abordados na tabela de consumo:",
        opcoes: [
            "a) A soma do consumo diário de Lavar louça, regar o jardim e descarga é de 135 Litros (40 + 185 + 30).",
            "b) O consumo para tomar banho e lavar a roupa é superior à metade do volume da caixa d'água de 1.500 Litros.",
            "c) O volume total de água consumido pela família no dia foi de 585 Litros.",
            "d) Se a família usar a água de uma garrafa de água mineral de 20 Litros (capacidade comum), ela teria água suficiente para tomar banho."
        ],
        respostaCorreta: 0,
        explicacao: "De acordo com a tabela, a soma do consumo de Lavar a louça (40 L), Regar o jardim (185 L) e Descarga (30 L) é de 255 Litros. A afirmação de que essa soma é 135 Litros está incorreta."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Questão 9",
        contexto: "Para pintar o apartamento, Paulo precisa de 2 Litros de tinta branca e 500 mL de tinta azul-marinho. A loja vende latas de tinta branca de 10 Litros e latas de tinta azul-marinho de 900 mL.",
        pergunta: "Todas as afirmativas sobre a compra de tinta são corretas, exceto:",
        opcoes: [
            "a) Se Paulo comprar a lata de 10 Litros de tinta branca, ele terá um excedente de 8.000 mL de tinta.",
            "b) O volume de tinta azul-marinho que Paulo precisa (500 mL) é menor do que o volume da lata que a loja vende (900 mL).",
            "c) 500 mL corresponde à metade de 1 Litro.",
            "d) Paulo precisará comprar duas latas de 900 mL da tinta azul-marinho para obter exatamente os 500 mL que necessita."
        ],
        respostaCorreta: 3,
        explicacao: "Paulo precisa de 500 mL de tinta azul-marinho. A lata vendida tem 900 mL. Com uma única lata, ele já atende a sua necessidade e ainda sobra."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Questão 10",
        contexto: "Você observa vários recipientes usados para medir líquidos, como o béquer, a proveta e o tubo de ensaio.",
        pergunta: "Marque a opção que não reflete o conceito de instrumento de medição de capacidade:",
        opcoes: [
            "a) A proveta (instrumento graduado) é ideal para medições precisas, sendo mais confiável que um béquer (que é menos graduado).",
            "b) O tubo de ensaio tem uma capacidade muito maior que a proveta.",
            "c) O mililitro (mL) é frequentemente usado para indicar pequenas medidas de capacidade, como dosagens de remédios.",
            "d) O Litro (L) e o mililitro (mL) são unidades de medida padronizadas para líquidos."
        ],
        respostaCorreta: 1,
        explicacao: "O tubo de ensaio é um recipiente estreito e geralmente tem uma capacidade muito pequena. A proveta, por sua vez, é um recipiente graduado usado para volumes maiores e precisos."
    },

    // ===== QUESTÕES VERDADEIRO/FALSO (11-20) =====
    {
        tipo: "verdadeiro_falso",
        titulo: "Questão 11",
        contexto: "Analisando a relação entre Litro e mililitro.",
        pergunta: "I. ( ) O Litro (L) é uma medida de capacidade usada apenas para líquidos em grandes recipientes.\nII. ( ) Um mililitro (mL) equivale a 1/1000 de um Litro.\nIII. ( ) Se você tem 1.000 mL, isso é o mesmo que ter um Litro e meio.\nIV. ( ) 500 mililitros (mL) correspondem à metade de um Litro.",
        opcoes: [
            "a) V, F, V, F",
            "b) F, V, F, V",
            "c) V, V, F, F",
            "d) F, F, V, V"
        ],
        respostaCorreta: 1,
        explicacao: "I (F): L é a medida mais comum para mensurar líquidos em geral. II (V): 1 mL é a milésima parte de 1 L, pois 1 L = 1.000 mL. III (F): 1.000 mL equivalem a 1 Litro. IV (V): 500 mL é a metade de 1.000 mL, ou seja, meio Litro."
    },


    {
        tipo: "verdadeiro_falso",
        titulo: "Questão 12",
        contexto: "A capacidade de um tanque de combustível em carros de passeio é de aproximadamente 45 Litros. Os indicadores E e F representam vazio e cheio, respectivamente.",
        pergunta: "I. ( ) Se o ponteiro estiver em 'E' (vazio), o motorista deve abastecer o carro com urgência.\nII. ( ) Se o tanque estivesse na metade, ele conteria cerca de 22,5 Litros de combustível.\nIII. ( ) O Litro é a unidade de medida adequada para medir a capacidade de um tanque de carro.\nIV. ( ) 'F' é a abreviação da palavra inglesa full (cheio), e 'E' de empty (vazio).",
        opcoes: [
            "a) V, V, V, V",
            "b) V, F, V, F",
            "c) F, V, F, V",
            "d) F, F, V, V"
        ],
        respostaCorreta: 0,
        explicacao: "I (V): E significa empty (vazio). II (V): Metade de 45 L é 22,5 L. III (V): O Litro é usado para medir a capacidade de grandes recipientes, como tanques de carros. IV (V): E e F são iniciais em inglês para vazio e cheio."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Questão 13",
        contexto: "Em uma embalagem de sopa instantânea, as instruções pedem para adicionar 1 Litro de água.",
        pergunta: "I. ( ) Para fazer a sopa, é necessário utilizar 100 mililitros de água.\nII. ( ) 1 Litro é a mesma coisa que 1000 mL.\nIII. ( ) Se usarmos copos de 250 mL, serão necessários quatro copos para atingir 1 Litro.\nIV. ( ) 2 Litros de suco de laranja poderiam encher oito copos de 250 mL.",
        opcoes: [
            "a) F, V, V, V",
            "b) V, F, F, V",
            "c) F, V, V, F",
            "d) V, V, F, F"
        ],
        respostaCorreta: 0,
        explicacao: "I (F): 1 Litro é 1.000 mililitros. II (V): 1 Litro equivale a 1.000 mL. III (V): 1.000 mL ÷ 250 mL = 4 copos. IV (V): 2 Litros (2.000 mL) ÷ 250 mL = 8 copos."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Questão 14",
        contexto: "No laboratório de Ciências, a professora apresentou diversos recipientes usados para medir substâncias, como o Béquer e a Proveta.",
        pergunta: "I. ( ) O Béquer é usado principalmente para misturar e aquecer substâncias e não é tão preciso para medir capacidade quanto a Proveta.\nII. ( ) O Tubo de ensaio, por ser estreito e longo, tem geralmente uma capacidade muito alta, ultrapassando 2 Litros.\nIII. ( ) Uma Proveta de laboratório costuma ter marcações (graduações) em mililitros (mL).\nIV. ( ) O Litro e o mililitro são as únicas unidades de capacidade utilizadas no laboratório.",
        opcoes: [
            "a) V, F, V, F",
            "b) F, V, F, V",
            "c) V, F, V, V",
            "d) V, F, V, F"
        ],
        respostaCorreta: 3,
        explicacao: "I (V): O Béquer é menos preciso que a Proveta. II (F): O tubo de ensaio tem capacidade pequena. III (V): A Proveta é um recipiente graduado, geralmente em mL. IV (F): Existem outras unidades, como o microlitro, embora L e mL sejam as mais utilizadas."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Questão 15",
        contexto: "Observando o gráfico de arrecadação de garrafas para reciclagem, que compara garrafas de 1 Litro e garrafas de 2 Litros.",
        pergunta: "I. ( ) O gráfico de barras é um tipo de representação visual que utiliza barras para comparar diferentes quantidades.\nII. ( ) A legenda do gráfico ajuda a identificar qual cor representa as garrafas de 1 Litro e qual representa as de 2 Litros.\nIII. ( ) No gráfico, a quantidade de garrafas de 1 Litro arrecadadas é sempre menor do que a quantidade de garrafas de 2 Litros.\nIV. ( ) O gráfico de barras e o gráfico pictórico (como o de água de coco) são formas válidas de leitura de gráficos.",
        opcoes: [
            "a) V, V, F, V",
            "b) F, V, V, V",
            "c) V, F, F, V",
            "d) F, V, F, V"
        ],
        respostaCorreta: 0,
        explicacao: "I (V): Gráficos de barras comparam quantidades diferentes. II (V): A legenda diferencia as cores ou símbolos. III (F): Na Terça-feira, a quantidade de 1 L (40 garrafas) é maior que a de 2 L (30 garrafas). IV (V): Pictórico e Barras são formas de representação."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Questão 16",
        contexto: "Paulina tem 1 Litro e meio de suco e quer dividi-lo igualmente em 3 copos.",
        pergunta: "I. ( ) 1 Litro e meio corresponde a 1.500 mL.\nII. ( ) Se ela dividir o suco em três copos iguais, cada copo terá uma capacidade de 500 mL.\nIII. ( ) A capacidade de cada copo (500 mL) é equivalente a meio Litro.\nIV. ( ) Ela poderia usar um copo pequeno de 30 mL para medir a porção de cada copo.",
        opcoes: [
            "a) V, V, V, F",
            "b) F, V, V, F",
            "c) V, V, V, V",
            "d) V, F, V, F"
        ],
        respostaCorreta: 0,
        explicacao: "I (V): 1 Litro e meio = 1.500 mL. II (V): 1.500 mL ÷ 3 copos = 500 mL por copo. III (V): 500 mL é meio Litro. IV (F): Um copo pequeno de 30 mL não é adequado para medir a porção de 500 mL."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Questão 17",
        contexto: "Levi precisa armazenar 4 Litros de suco usando embalagens que ele tem em casa, com capacidades de 300 mL, 500 mL e 100 mL.",
        pergunta: "I. ( ) 4 Litros de suco equivalem a 4.000 mililitros.\nII. ( ) Se ele usar apenas garrafas de 500 mL, precisará de 8 garrafas para armazenar o suco.\nIII. ( ) As embalagens de 100 mL têm capacidade maior que as embalagens de 300 mL.\nIV. ( ) A capacidade total da maioria dos barris de suco é medida em mililitros.",
        opcoes: [
            "a) V, V, F, F",
            "b) F, V, V, F",
            "c) V, F, V, F",
            "d) V, V, F, V"
        ],
        respostaCorreta: 0,
        explicacao: "I (V): 4 L = 4.000 mL. II (V): 4.000 mL ÷ 500 mL = 8 garrafas. III (F): 100 mL é menor que 300 mL. IV (F): Barris de suco são medidos em Litros, devido à grande capacidade (ex: 160 L)."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Questão 18",
        contexto: "Marcela está usando um copo como instrumento para medir a quantidade de água necessária em uma receita.",
        pergunta: "I. ( ) O copo é considerado uma unidade de medida padronizada (como o Litro ou o mililitro) e, por isso, o resultado da medição é sempre igual.\nII. ( ) Medir líquidos usando um copo é um exemplo de estimativa se a capacidade do copo não for conhecida precisamente.\nIII. ( ) Se ela usasse uma xícara em vez de um copo, ela obteria exatamente a mesma quantidade de água.\nIV. ( ) Para medir pequenos volumes, como uma colher de remédio, o mililitro é a unidade mais apropriada.",
        opcoes: [
            "a) F, V, F, V",
            "b) V, F, V, F",
            "c) F, V, V, V",
            "d) F, F, V, F"
        ],
        respostaCorreta: 0,
        explicacao: "I (F): Copo é uma unidade não padronizada. II (V): O uso de um copo, se a sua capacidade for desconhecida, resulta em uma estimativa. III (F): Copos e xícaras têm, geralmente, capacidades diferentes. IV (V): O mL é ideal para dosagens precisas e pequenas."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Questão 19",
        contexto: "Uma família (Rodrigo) tem uma caixa d'água de 1.500 Litros e consome 585 Litros em um dia.",
        pergunta: "I. ( ) O consumo diário é menos da metade da capacidade total da caixa d'água.\nII. ( ) Depois de um dia de consumo, a caixa d'água deve ter sobrado mais de 1.000 Litros de água.\nIII. ( ) A atividade de regar o jardim (185 L) consome mais água do que lavar a roupa (150 L).\nIV. ( ) Se o consumo diário fosse de 750 Litros, a caixa de 1.500 Litros duraria exatamente dois dias.",
        opcoes: [
            "a) V, F, V, F",
            "b) V, F, V, V",
            "c) F, V, F, V",
            "d) V, F, F, V"
        ],
        respostaCorreta: 1,
        explicacao: "I (V): Consumo (585 L) é menor que a metade da caixa (750 L). II (F): Sobra 1500 L - 585 L = 915 L. Sobrou menos de 1.000 L. III (V): Regar jardim (185 L) > Lavar roupa (150 L). IV (V): 1500 L ÷ 750 L = 2 dias."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Questão 20",
        contexto: "Juliano vai cozinhar e precisa de 20 copos de água, mas ele se confunde e coloca apenas 10 copos. A capacidade da panela é de 3 Litros.",
        pergunta: "I. ( ) Juliano colocou menos da metade da capacidade necessária de água para a receita.\nII. ( ) Se a capacidade necessária (20 copos) encher 1 Litro, 10 copos encherão exatamente a metade do Litro.\nIII. ( ) O termo 'capacidade necessária' refere-se à quantidade total de líquido que a receita requer.\nIV. ( ) O volume total de água necessário (20 copos) preenche menos da metade da capacidade total da panela (3 Litros).",
        opcoes: [
            "a) F, V, V, V",
            "b) V, F, F, V",
            "c) F, V, V, F",
            "d) V, V, V, V"
        ],
        respostaCorreta: 3,
        explicacao: "I (V): 10 copos é metade de 20 copos. II (V): Se 20 copos equivalem a 1 L, 10 copos equivalem a 500 mL (meio Litro). III (V): Refere-se à quantidade total. IV (V): 1 L (20 copos) é menos da metade de 3 L."
    },

    // ===== PERGUNTAS ABERTAS (21-27) =====
    {
        tipo: "aberta",
        titulo: "Questão 21",
        pergunta: "O que é o Litro (L) e o mililitro (mL) e quando usamos cada um? Dê um exemplo prático para cada unidade.",
        respostaEsperada: "O Litro (L) é a medida de capacidade mais comum, usada para volumes maiores, como uma garrafa de refrigerante. O mililitro (mL) é usado para indicar pequenas quantidades, como dosagens de remédios.",
        explicacao: "O Litro (L) é a medida de capacidade mais comum, usada para volumes maiores, como uma garrafa de refrigerante. O mililitro (mL) é usado para indicar pequenas quantidades, como dosagens de remédios."
    },
    {
        tipo: "aberta",
        titulo: "Questão 22",
        pergunta: "Por que, em experimentos de medição (como o de encher uma garrafa), é fundamental usar sempre o mesmo instrumento (o mesmo copo ou a mesma xícara) se quisermos resultados comparáveis?",
        respostaEsperada: "É fundamental usar o mesmo instrumento para que a medição seja padronizada e comparável. Se usarmos um copo pequeno e depois um copo grande, a quantidade de vezes que a garrafa será enchida será diferente (como no Experimento 1 e 2).",
        explicacao: "É fundamental usar o mesmo instrumento para que a medição seja padronizada e comparável. Se usarmos um copo pequeno e depois um copo grande, a quantidade de vezes que a garrafa será enchida será diferente (como no Experimento 1 e 2)."
    },
    {
        tipo: "aberta",
        titulo: "Questão 23",
        pergunta: "Se você tem 2.500 mililitros de um líquido, quantos Litros e mililitros você tem no total?",
        respostaEsperada: "Você tem 2 Litros e 500 mililitros. 2.500 mL é o mesmo que 2 x 1.000 mL (2 L) mais 500 mL (meio Litro).",
        explicacao: "Você tem 2 Litros e 500 mililitros. 2.500 mL é o mesmo que 2 x 1.000 mL (2 L) mais 500 mL (meio Litro)."
    },
    {
        tipo: "aberta",
        titulo: "Questão 24",
        pergunta: "Cite dois instrumentos de medição de capacidade que têm graduação (linhas que indicam a medida) e que você poderia encontrar em um laboratório.",
        respostaEsperada: "Proveta e Béquer. (Ambos são ilustrados com marcações graduadas no laboratório).",
        explicacao: "Proveta e Béquer. (Ambos são ilustrados com marcações graduadas no laboratório)."
    },
    {
        tipo: "aberta",
        titulo: "Questão 25",
        pergunta: "O que significa o indicador 'E' (Empty/Vazio) em um mostrador de combustível, em termos de capacidade do tanque?",
        respostaEsperada: "O indicador 'E' (de empty, vazio) significa que o tanque tem uma capacidade muito baixa ou está quase sem combustível, indicando que o motorista deve abastecer.",
        explicacao: "O indicador 'E' (de empty, vazio) significa que o tanque tem uma capacidade muito baixa ou está quase sem combustível, indicando que o motorista deve abastecer."
    },
    {
        tipo: "aberta",
        titulo: "Questão 26",
        pergunta: "Ao ler um gráfico de barras, como o que mostra a arrecadação de garrafas, o que a altura da barra representa em relação à quantidade?",
        respostaEsperada: "A altura da barra representa a quantidade total de itens (no caso, garrafas) arrecadados ou vendidos, permitindo a comparação visual dos dados.",
        explicacao: "A altura da barra representa a quantidade total de itens (no caso, garrafas) arrecadados ou vendidos, permitindo a comparação visual dos dados."
    },
    {
        tipo: "aberta",
        titulo: "Questão 27",
        pergunta: "Explique o que é uma estimativa no contexto de medição de capacidade (como 'Quantos copos você acha que seriam necessários para encher a garrafa?').",
        respostaEsperada: "Uma estimativa é um palpite racional ou um cálculo prévio feito antes da medição real. No contexto da capacidade, é tentar prever quantos copos ou xícaras de água são necessários para encher uma garrafa.",
        explicacao: "Uma estimativa é um palpite racional ou um cálculo prévio feito antes da medição real. No contexto da capacidade, é tentar prever quantos copos ou xícaras de água são necessários para encher uma garrafa."
    },

    // ===== ESTUDOS DE CASO (28-30) =====
    {
        tipo: "estudo_caso",
        titulo: "Questão 28",
        contexto: "Na casa de Rodrigo, o consumo diário de água atinge 585 Litros. A atividade de maior consumo, depois de tomar banho (180 L) e lavar a roupa (150 L), é regar o jardim (185 L). O pai de Rodrigo quer reduzir o consumo total de água da família em pelo menos 150 Litros por dia.",
        pergunta: "Proponha uma solução criativa e prática que utilize os conceitos de capacidade (L e mL) para atingir essa meta, focando na atividade de regar o jardim (185 L).",
        respostaEsperada: "Para reduzir 150 Litros, a solução mais eficaz é focar em Regar o jardim, que consome 185 L. O pai de Rodrigo poderia reutilizar a água da máquina de lavar roupas (150 L) para regar o jardim, o que economizaria 150 Litros de água potável consumida para a rega, ultrapassando a meta de redução.",
        explicacao: "Para reduzir 150 Litros, a solução mais eficaz é focar em Regar o jardim, que consome 185 L. O pai de Rodrigo poderia reutilizar a água da máquina de lavar roupas (150 L) para regar o jardim, o que economizaria 150 Litros de água potável consumida para a rega, ultrapassando a meta de redução."
    },
    {
        tipo: "estudo_caso",
        titulo: "Questão 29",
        contexto: "Um fazendeiro colheu 200 Litros de suco de uva. Ele tem que armazenar o suco em três barris: um de 30 L, um de 40 L e um de 42 L. Ele também tem muitas garrafas de 2 Litros e 3 Litros.",
        pergunta: "O fazendeiro deve encher os três barris (30 L, 40 L, 42 L) primeiro ou ele deve usar as garrafas menores? Qual a sua opinião sobre a melhor estratégia de armazenamento para garantir que ele consiga guardar o volume máximo possível de suco? Justifique seu raciocínio.",
        respostaEsperada: "O fazendeiro deve encher os barris primeiro (totalizando 112 L). A capacidade é um volume grande, e eles acomodam a maior parte do suco. O restante do suco (88 L) deve ser armazenado nas garrafas, pois essas unidades menores (2 L e 3 L) oferecem flexibilidade para dividir o volume restante de forma mais precisa para a venda ou distribuição.",
        explicacao: "O fazendeiro deve encher os barris primeiro (totalizando 112 L). A capacidade é um volume grande, e eles acomodam a maior parte do suco. O restante do suco (88 L) deve ser armazenado nas garrafas, pois essas unidades menores (2 L e 3 L) oferecem flexibilidade para dividir o volume restante de forma mais precisa para a venda ou distribuição."
    },
    {
        tipo: "estudo_caso",
        titulo: "Questão 30",
        contexto: "Paula argumenta que usar o mililitro (mL) é sempre mais vantajoso do que usar o Litro (L) porque o mL permite medir quantidades muito pequenas (como remédios), enquanto o Litro é 'desnecessário' para o dia a dia.",
        pergunta: "Você concorda com Paula? Emita sua opinião justificando por que ambas as unidades (L e mL) são importantes no cotidiano e qual o papel do Litro, que é uma unidade maior.",
        respostaEsperada: "Eu não concordo totalmente com Paula. Embora o mililitro (mL) seja crucial para dosagens exatas de pequenas quantidades, o Litro (L) é fundamental porque é a unidade de capacidade mais usada para medir e quantificar grandes volumes, como grandes embalagens de água (20 L) ou combustível (45 L). O Litro é a base padronizada (1 L = 1.000 mL) que nos permite entender volumes maiores de forma prática.",
        explicacao: "Eu não concordo totalmente com Paula. Embora o mililitro (mL) seja crucial para dosagens exatas de pequenas quantidades, o Litro (L) é fundamental porque é a unidade de capacidade mais usada para medir e quantificar grandes volumes, como grandes embalagens de água (20 L) ou combustível (45 L). O Litro é a base padronizada (1 L = 1.000 mL) que nos permite entender volumes maiores de forma prática."
    }
];

// Gabarito verificado Q1-Q20 - Sun Nov 16 15:05:34 EST 2025
