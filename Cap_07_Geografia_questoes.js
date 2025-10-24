// Capítulo 7 de Geografia - De Gota em Gota, De Grão em Grão
// 30 questões: 10 múltipla escolha + 10 verdadeiro/falso + 7 abertas + 3 estudos de caso

const dadosDoQuizGeografiaCap7 = [
    // ========== QUESTÕES 1-10: MÚLTIPLA ESCOLHA ==========
    {
        tipo: "multipla_escolha",
        titulo: "Questão 1: Uso Indireto da Água na Indústria",
        contexto: "Ao considerar a água necessária para a produção de bens, um conceito chamado 'água virtual' ou 'uso indireto' é muito importante. Por exemplo, a produção de um carro exige aproximadamente 400.000 litros de água.",
        pergunta: "Todas as afirmativas sobre o uso indireto da água na produção de bens são corretas, exceto:",
        opcoes: [
            "a) Para produzir uma camiseta de algodão, são necessários cerca de 2.700 litros de água.",
            "b) A água na indústria é usada apenas para a geração de energia elétrica e não para a fabricação de produtos.",
            "c) A fabricação de uma única folha de papel consome, em média, 10 litros de água.",
            "d) A produção de 1kg de carne bovina, que usa 15.500 litros de água, é um exemplo de uso indireto."
        ],
        respostaCorreta: "b) A água na indústria é usada apenas para a geração de energia elétrica e não para a fabricação de produtos.",
        explicacao: "A afirmativa incorreta é a (b). A água é essencial nas indústrias tanto para a geração de energia elétrica nas usinas hidrelétricas, quanto para a produção de itens como remédios, alimentos, roupas e automóveis, muitas vezes por meio da diluição."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Questão 2: Problemas da Água - Poluição vs. Desperdício",
        contexto: "João viu na televisão que os rios da sua cidade estão impróprios para banho devido ao despejo de elementos impróprios, como esgoto sem tratamento.",
        pergunta: "Marque a opção que melhor reflete o conceito de poluição da água abordado no capítulo:",
        opcoes: [
            "a) A poluição é a ação de usar a água, mas não a aproveitar da melhor maneira possível.",
            "b) A poluição acontece quando elementos impróprios, como resíduos e esgoto, são jogados nos corpos d'água, fazendo com que ela se torne imprópria.",
            "c) A poluição é resultado exclusivo do uso excessivo de água na agricultura.",
            "d) A poluição é sempre um processo natural e não tem relação com as ações humanas."
        ],
        respostaCorreta: "b) A poluição acontece quando elementos impróprios, como resíduos e esgoto, são jogados nos corpos d'água, fazendo com que ela se torne imprópria.",
        explicacao: "A poluição acontece quando elementos impróprios são jogados na água, como esgoto não tratado, fazendo com que ela se torne imprópria e passe a ter cheiro e impurezas."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Questão 3: Tipos de Solo e Características",
        contexto: "Em uma pesquisa de campo, você observa solos com características muito diferentes. Um deles é encontrado em uma área de dunas (solo 1) e o outro é um solo de floresta, rico em matéria orgânica (solo 2).",
        pergunta: "Qual alternativa não reflete os conceitos abordados sobre as características dos diferentes tipos de solo?",
        opcoes: [
            "a) Solos de floresta costumam ser férteis por serem cobertos por restos de plantas e animais.",
            "b) Solos duros e secos são formados por rochas grandes, dificultando que as raízes das plantas penetrem.",
            "c) Solos arenosos, como os das dunas, são geralmente secos e finos.",
            "d) Solos alagados ou brejosos são ideais para o cultivo de plantas que necessitam de terra seca e rochosa o ano todo."
        ],
        respostaCorreta: "d) Solos alagados ou brejosos são ideais para o cultivo de plantas que necessitam de terra seca e rochosa o ano todo.",
        explicacao: "Solos alagados ou brejosos são solos encharcados devido à dificuldade de drenagem da água. Eles não são adequados para plantas que necessitam de terra seca e rochosa."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Questão 4: Técnicas de Irrigação",
        contexto: "Para que as plantas cresçam saudáveis na agricultura, é necessário irrigá-las. Existem diversas técnicas para garantir que a água chegue às plantações de maneira eficiente.",
        pergunta: "Todas as afirmativas abaixo são corretas sobre as técnicas de uso da água no campo, exceto:",
        opcoes: [
            "a) O gotejamento é uma técnica de irrigação que pinga água, gota a gota, perto das raízes, economizando recurso.",
            "b) A pecuária utiliza a água somente para o consumo dos pastos e não para saciar a sede dos animais.",
            "c) A irrigação por aspersão usa grandes máquinas que borrifam água por todo o terreno.",
            "d) Na pecuária, a água também é usada para a limpeza das instalações."
        ],
        respostaCorreta: "b) A pecuária utiliza a água somente para o consumo dos pastos e não para saciar a sede dos animais.",
        explicacao: "A pecuária (criação de animais) utiliza a água para saciar a sede dos animais e para a limpeza das instalações, além do uso indireto para produção de alimentos para os animais. A afirmação de que a água só é usada para pastos está incompleta e incorreta."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Questão 5: O Recurso Água Doce",
        contexto: "A Terra possui uma vasta quantidade de água, porém, nem toda ela é adequada para o consumo humano e para as atividades diárias.",
        pergunta: "Qual afirmativa sobre a água na Terra e seu uso é incorreta?",
        opcoes: [
            "a) A água doce, essencial para a vida, é encontrada na superfície (rios, lagos) e no subsolo.",
            "b) A maior parte da água do nosso planeta é salgada, imprópria para o consumo direto.",
            "c) O uso indevido e o desperdício não afetam a disponibilidade da água doce, pois ela é um recurso infinito.",
            "d) A água doce também está armazenada na forma de neve, geleiras e reservatórios subterrâneos (freáticos)."
        ],
        respostaCorreta: "c) O uso indevido e o desperdício não afetam a disponibilidade da água doce, pois ela é um recurso infinito.",
        explicacao: "A água doce é um recurso finito e vital, e o uso indevido e o desperdício afetam sim a sua disponibilidade, tornando-a escassa e exigindo a sua preservação."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Questão 6: Problemas do Solo - Compactação",
        contexto: "Em um grande canteiro de obras, máquinas pesadas passam o dia todo sobre o solo, preparando o terreno para a construção de um prédio.",
        pergunta: "Escolha a alternativa que melhor reflete o problema do solo causado pela passagem intensa de máquinas:",
        opcoes: [
            "a) Erosão, pois a água e o vento levam os nutrientes.",
            "b) Esgotamento do solo, pois está sendo cultivado o mesmo produto repetidamente.",
            "c) Deslizamento de terra, causado pela infiltração excessiva de água.",
            "d) Compactação do solo, onde ele se torna duro e denso, dificultando a penetração da água e o desenvolvimento das raízes."
        ],
        respostaCorreta: "d) Compactação do solo, onde ele se torna duro e denso, dificultando a penetração da água e o desenvolvimento das raízes.",
        explicacao: "A compactação do solo ocorre quando ele se torna denso, fino e duro, frequentemente devido à passagem de máquinas pesadas ou animais. Solos compactados perdem a capacidade de absorver a água corretamente."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Questão 7: Cuidado e Prevenção da Erosão",
        contexto: "A erosão é o desgaste do solo causado principalmente pela ação da água e do vento.",
        pergunta: "Qual das seguintes opções é uma prática de manejo e cuidado do solo que ajuda a protegê-lo contra a erosão?",
        opcoes: [
            "a) Retirar toda a vegetação de uma encosta para facilitar a agricultura.",
            "b) Promover o reflorestamento, plantando novas mudas de árvores.",
            "c) Passar máquinas pesadas frequentemente sobre o solo úmido.",
            "d) Construir casas em áreas de alto risco de deslizamento."
        ],
        respostaCorreta: "b) Promover o reflorestamento, plantando novas mudas de árvores.",
        explicacao: "O reflorestamento é uma prática de cuidado do solo onde novas mudas são plantadas. As raízes fortalecem o terreno e ajudam a evitar que o solo seja desgastado (erosão) pela ação da água e do vento."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Questão 8: Água e Sobrevivência",
        contexto: "A água é considerada um recurso vital, fundamental para a manutenção da vida no planeta.",
        pergunta: "Todas as afirmativas são corretas sobre as funções essenciais da água, exceto:",
        opcoes: [
            "a) Matar a sede dos seres humanos e animais.",
            "b) Manter a sobrevivência da vida animal e vegetal.",
            "c) A água só tem utilidade para o ser humano na indústria; na natureza, ela não é essencial para a manutenção da vida.",
            "d) A água é encontrada em todo o Globo terrestre, em rios, mares, lagos e geleiras."
        ],
        respostaCorreta: "c) A água só tem utilidade para o ser humano na indústria; na natureza, ela não é essencial para a manutenção da vida.",
        explicacao: "A água é essencial para a manutenção de toda a vida no planeta, tanto para seres humanos quanto para animais e vegetais. Ela não é útil apenas na indústria, mas é fundamental para a sobrevivência de todos os seres vivos."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Questão 9: Uso Sustentável da Água em Casa",
        contexto: "Para garantir que a água esteja sempre disponível, é crucial usá-la de maneira consciente, principalmente nas atividades domésticas.",
        pergunta: "Marque a opção que não reflete uma prática de economia de água em atividades diárias:",
        opcoes: [
            "a) Fechar a torneira enquanto se ensaboa a louça.",
            "b) Usar um copo separado para enxaguar a boca ao escovar os dentes.",
            "c) Deixar o chuveiro aberto o tempo todo durante o banho.",
            "d) Juntar uma boa quantidade de roupas para usar a máquina de lavar na capacidade máxima."
        ],
        respostaCorreta: "c) Deixar o chuveiro aberto o tempo todo durante o banho.",
        explicacao: "Deixar o chuveiro aberto continuamente durante o banho é uma prática de desperdício de água. Para economizar, deve-se fechar o chuveiro enquanto se ensaboa e abrir apenas para enxaguar."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Questão 10: Prejuízos ao Solo - Esgotamento",
        contexto: "O solo sofre com a ação humana quando atividades são realizadas sem o devido cuidado.",
        pergunta: "Escolha a alternativa que melhor reflete o problema do solo chamado Esgotamento:",
        opcoes: [
            "a) O solo fica duro e compacto por causa do uso de máquinas pesadas.",
            "b) O solo é levado pelo vento e pela chuva devido à falta de vegetação.",
            "c) O solo se torna pobre em nutrientes e exige descanso ou técnicas de recuperação para que novas plantas possam se desenvolver.",
            "d) Ocorre um deslizamento de terra em uma área de risco."
        ],
        respostaCorreta: "c) O solo se torna pobre em nutrientes e exige descanso ou técnicas de recuperação para que novas plantas possam se desenvolver.",
        explicacao: "O esgotamento do solo ocorre quando ele perde nutrientes devido ao plantio da mesma cultura por muito tempo ou uso intensivo. O solo precisa de descanso (pousio) ou técnicas como rotação de culturas para se recuperar."
    },

    // ========== QUESTÕES 11-20: VERDADEIRO OU FALSO ==========
    {
        tipo: "verdadeiro_falso",
        titulo: "Questão 11: Uso da Água na Agricultura",
        contexto: "Analise as afirmações sobre o uso da água na agricultura e pecuária.",
        pergunta: "Marque V (Verdadeiro) ou F (Falso) para cada afirmação:",
        afirmacoes: [
            "I. A água é fundamental na agricultura, e a mesma técnica de irrigação serve para qualquer tipo de plantação.",
            "II. A irrigação por gotejamento ajuda a economizar água, pois a libera lentamente perto das plantas.",
            "III. Na pecuária, a água é usada apenas para o consumo humano dos trabalhadores da fazenda.",
            "IV. Irrigar por aspersão significa borrifar água sobre o terreno, simulando uma chuva."
        ],
        opcoes: [
            "a) F, V, F, V",
            "b) V, V, F, F",
            "c) V, F, V, V",
            "d) F, V, V, F"
        ],
        respostaCorreta: "a) F, V, F, V",
        explicacao: "I. FALSO - Diferentes técnicas de irrigação são usadas para diferentes tipos de plantação. II. VERDADEIRO - O gotejamento economiza água. III. FALSO - A água na pecuária é usada para os animais, limpeza e produção de alimentos. IV. VERDADEIRO - A aspersão simula chuva."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Questão 12: Ocorrência e Distribuição da Água",
        contexto: "Analise as afirmações sobre a distribuição e ocorrência da água na Terra.",
        pergunta: "Marque V (Verdadeiro) ou F (Falso) para cada afirmação:",
        afirmacoes: [
            "I. A maior parte da água doce na Terra é encontrada em rios e lagos de superfície.",
            "II. A água subterrânea é aquela que fica armazenada em locais que chamamos de lençol freático.",
            "III. Já que a água da chuva repõe os reservatórios, não precisamos nos preocupar em economizar.",
            "IV. A água salgada dos oceanos e mares não pode ser utilizada em nenhuma atividade humana."
        ],
        opcoes: [
            "a) F, V, F, F",
            "b) V, F, F, V",
            "c) F, V, V, F",
            "d) V, V, F, V"
        ],
        respostaCorreta: "a) F, V, F, F",
        explicacao: "I. FALSO - A maior parte da água doce está em geleiras e lençóis subterrâneos. II. VERDADEIRO - Lençol freático é água subterrânea. III. FALSO - Devemos economizar água sempre. IV. FALSO - A água salgada pode ser usada em algumas atividades, como transporte e dessalinização."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Questão 13: Problemas Causados pela Ação Humana na Água",
        contexto: "Analise as afirmações sobre os problemas que afetam a água.",
        pergunta: "Marque V (Verdadeiro) ou F (Falso) para cada afirmação:",
        afirmacoes: [
            "I. O desperdício e a poluição são os dois grandes problemas que afetam a água do nosso planeta.",
            "II. O desperdício ocorre quando o esgoto é lançado sem tratamento em rios e córregos.",
            "III. A poluição afeta rios, lagos e mares, e pode prejudicar a vida de animais e vegetais.",
            "IV. Quando a água usada fica com restos de sabão, urina e outros produtos químicos, ela precisa de tratamento antes de ser devolvida à natureza."
        ],
        opcoes: [
            "a) V, F, V, V",
            "b) F, V, F, V",
            "c) V, V, V, F",
            "d) F, F, V, F"
        ],
        respostaCorreta: "a) V, F, V, V",
        explicacao: "I. VERDADEIRO - Desperdício e poluição são os principais problemas. II. FALSO - Isso é poluição, não desperdício. Desperdício é usar mal a água. III. VERDADEIRO - A poluição prejudica toda a vida aquática. IV. VERDADEIRO - A água contaminada precisa de tratamento."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Questão 14: Uso Indireto na Produção",
        contexto: "Analise as afirmações sobre o uso indireto da água na produção de bens.",
        pergunta: "Marque V (Verdadeiro) ou F (Falso) para cada afirmação:",
        afirmacoes: [
            "I. O cálculo da água necessária para fabricar um produto ajuda a entender o impacto ambiental do nosso consumo.",
            "II. A água é importante nas indústrias apenas para o transporte de materiais.",
            "III. 15.500 litros de água são necessários para produzir 1kg de carne bovina.",
            "IV. O uso de água para lavar as mãos é considerado um uso indireto."
        ],
        opcoes: [
            "a) V, F, V, F",
            "b) F, V, F, V",
            "c) V, V, V, F",
            "d) F, F, V, V"
        ],
        respostaCorreta: "a) V, F, V, F",
        explicacao: "I. VERDADEIRO - O cálculo da água virtual ajuda a entender o impacto ambiental. II. FALSO - A água é usada em diversos processos industriais, não só transporte. III. VERDADEIRO - A produção de carne bovina consome muita água. IV. FALSO - Lavar as mãos é uso direto."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Questão 15: Formação e Utilidade do Solo",
        contexto: "Analise as afirmações sobre a formação e utilidade do solo.",
        pergunta: "Marque V (Verdadeiro) ou F (Falso) para cada afirmação:",
        afirmacoes: [
            "I. O solo é formado rapidamente, bastando apenas alguns dias para que os pedaços de rochas se juntem.",
            "II. O solo é considerado um recurso natural que sustenta as florestas e ajuda a reter a água.",
            "III. Os seres humanos usam o solo para plantar, criar animais e extrair matéria-prima.",
            "IV. A cor e a textura do solo são sempre iguais em qualquer lugar do mundo."
        ],
        opcoes: [
            "a) V, V, F, F",
            "b) F, V, V, F",
            "c) V, F, V, V",
            "d) F, F, V, V"
        ],
        respostaCorreta: "b) F, V, V, F",
        explicacao: "I. FALSO - O solo leva muito tempo para se formar (milhares de anos). II. VERDADEIRO - O solo é essencial para florestas e retenção de água. III. VERDADEIRO - O solo tem múltiplas utilidades. IV. FALSO - Solos variam em cor e textura conforme a região."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Questão 16: Erosão e Deslizamento",
        contexto: "Analise as afirmações sobre erosão e deslizamento de terra.",
        pergunta: "Marque V (Verdadeiro) ou F (Falso) para cada afirmação:",
        afirmacoes: [
            "I. A erosão é um processo exclusivamente causado por inundações e não pelo vento.",
            "II. A remoção da vegetação aumenta a velocidade da erosão.",
            "III. Deslizamentos de terra ocorrem quando o solo não consegue mais suportar o próprio peso, geralmente em locais sem vegetação ou em risco.",
            "IV. Construir moradias em áreas de encostas íngremes é uma boa maneira de prevenir deslizamentos."
        ],
        opcoes: [
            "a) F, V, V, F",
            "b) V, V, F, F",
            "c) F, F, V, V",
            "d) V, F, V, V"
        ],
        respostaCorreta: "a) F, V, V, F",
        explicacao: "I. FALSO - A erosão é causada por água E vento. II. VERDADEIRO - A vegetação protege o solo. III. VERDADEIRO - Deslizamentos ocorrem em áreas sem vegetação. IV. FALSO - Construir em encostas íngremes aumenta o risco de deslizamentos."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Questão 17: Cuidados com o Solo",
        contexto: "Analise as afirmações sobre práticas de cuidado do solo.",
        pergunta: "Marque V (Verdadeiro) ou F (Falso) para cada afirmação:",
        afirmacoes: [
            "I. Rotação de culturas significa que os agricultores deixam uma parte da terra sem plantio para que ela descanse e recupere nutrientes.",
            "II. O reflorestamento ajuda o solo porque as raízes das plantas novas fortalecem a terra.",
            "III. Para combater a compactação do solo, basta deixar as máquinas pesadas operando por mais tempo.",
            "IV. Cuidar do solo envolve apenas práticas agrícolas, não se relacionando com a segurança das moradias."
        ],
        opcoes: [
            "a) V, V, F, F",
            "b) F, V, F, V",
            "c) V, F, V, F",
            "d) F, F, V, V"
        ],
        respostaCorreta: "a) V, V, F, F",
        explicacao: "I. VERDADEIRO - Rotação de culturas permite o descanso do solo. II. VERDADEIRO - Reflorestamento fortalece o solo. III. FALSO - Máquinas pesadas causam compactação, não combatem. IV. FALSO - Cuidar do solo também envolve segurança de moradias em encostas."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Questão 18: Desperdício Doméstico",
        contexto: "Analise as afirmações sobre desperdício de água em atividades domésticas.",
        pergunta: "Marque V (Verdadeiro) ou F (Falso) para cada afirmação:",
        afirmacoes: [
            "I. Deixar a torneira pingando ou com vazamento é uma forma de desperdiçar água.",
            "II. É possível economizar água ao lavar a louça, fechando a torneira enquanto se esfrega a esponja.",
            "III. A água é vital para atividades como cozinhar, mas é dispensável para a hidratação do corpo.",
            "IV. Escovar os dentes com a torneira aberta continuamente gasta pouquíssima água."
        ],
        opcoes: [
            "a) V, V, F, F",
            "b) V, V, F, V",
            "c) F, V, V, F",
            "d) V, F, V, F"
        ],
        respostaCorreta: "a) V, V, F, F",
        explicacao: "I. VERDADEIRO - Vazamentos desperdiçam água. II. VERDADEIRO - Fechar a torneira economiza água. III. FALSO - A água é essencial para hidratação. IV. FALSO - Escovar dentes com torneira aberta gasta muita água."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Questão 19: Uso Indígena do Solo",
        contexto: "Analise as afirmações sobre o uso do solo pelos povos indígenas antigos.",
        pergunta: "Marque V (Verdadeiro) ou F (Falso) para cada afirmação:",
        afirmacoes: [
            "I. Os antigos povos de Itararé usavam o solo para construir suas casas e moradas subterrâneas.",
            "II. O barro e a argila, extraídos do solo, eram usados para produzir cerâmica, como potes e vasos.",
            "III. Os objetos de cerâmica eram utilizados principalmente para guardar o excedente de alimentos e água.",
            "IV. O solo, no passado, servia apenas para o plantio, não tendo relação com a criação de objetos."
        ],
        opcoes: [
            "a) V, F, V, V",
            "b) V, V, V, F",
            "c) F, V, F, V",
            "d) V, V, F, F"
        ],
        respostaCorreta: "b) V, V, V, F",
        explicacao: "I. VERDADEIRO - Povos antigos usavam o solo para construir moradas. II. VERDADEIRO - Barro e argila eram usados para cerâmica. III. VERDADEIRO - Cerâmica servia para armazenar alimentos e água. IV. FALSO - O solo tinha múltiplos usos, incluindo criação de objetos."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Questão 20: Problemas do Solo - Compactação e Esgotamento",
        contexto: "Analise as afirmações sobre compactação e esgotamento do solo.",
        pergunta: "Marque V (Verdadeiro) ou F (Falso) para cada afirmação:",
        afirmacoes: [
            "I. Solos compactados perdem a capacidade de absorver corretamente a água da chuva.",
            "II. O esgotamento ocorre quando o solo perde nutrientes devido ao plantio da mesma cultura por muito tempo.",
            "III. A compactação é um problema comum em áreas de mata virgem, onde há pouca intervenção humana.",
            "IV. O reflorestamento é uma técnica que pode ajudar a combater o esgotamento do solo."
        ],
        opcoes: [
            "a) F, V, F, V",
            "b) V, F, V, F",
            "c) V, V, F, V",
            "d) V, V, V, F"
        ],
        respostaCorreta: "c) V, V, F, V",
        explicacao: "I. VERDADEIRO - Solos compactados não absorvem água bem. II. VERDADEIRO - Esgotamento ocorre por uso intensivo. III. FALSO - Compactação é causada por ação humana, não ocorre em matas virgens. IV. VERDADEIRO - Reflorestamento ajuda a recuperar o solo."
    },

    // ========== QUESTÕES 21-27: PERGUNTAS ABERTAS ==========
    {
        tipo: "aberta",
        titulo: "Questão 21: Uso da Água na Indústria - Diluição",
        contexto: "O que é diluição e qual é a sua importância no processo de fabricação de itens nas indústrias, como remédios e alimentos?",
        pergunta: "Responda de forma sucinta:",
        explicacao: "Diluição é o processo de misturar uma substância com água para diminuir sua concentração. Na indústria, é importante para fabricar remédios, alimentos e outros produtos, permitindo que os ingredientes sejam misturados adequadamente e alcancem a consistência e concentração corretas."
    },
    {
        tipo: "aberta",
        titulo: "Questão 22: Solos Férteis",
        contexto: "Os solos das florestas costumam ser mais férteis que os solos arenosos.",
        pergunta: "O que torna o solo de floresta mais favorável ao desenvolvimento de plantas e qual tipo de cobertura geralmente o protege?",
        explicacao: "O solo de floresta é mais fértil porque é coberto por restos de plantas e animais (matéria orgânica) que se decompõem e fornecem nutrientes. A cobertura vegetal (folhas, galhos, raízes) protege o solo da erosão e mantém sua umidade."
    },
    {
        tipo: "aberta",
        titulo: "Questão 23: Desperdício de Água",
        contexto: "Marcelinho, da Turma da Mônica, propõe fechar a torneira para economizar água ao lavar as mãos.",
        pergunta: "Cite duas outras atividades da sua rotina onde você pode aplicar o conceito de fechar a torneira para evitar o desperdício:",
        explicacao: "Exemplos de respostas: 1) Fechar a torneira ao escovar os dentes (usar copo para enxaguar). 2) Fechar a torneira ao ensaboar a louça. 3) Fechar o chuveiro ao se ensaboar durante o banho. 4) Fechar a torneira ao ensaboar as mãos."
    },
    {
        tipo: "aberta",
        titulo: "Questão 24: Água Doce Subterrânea",
        contexto: "A água doce pode ser encontrada em diferentes locais na Terra.",
        pergunta: "Onde podemos encontrar a água doce que está armazenada abaixo da superfície da Terra e como essa água é chamada?",
        explicacao: "A água doce armazenada abaixo da superfície da Terra é encontrada em reservatórios subterrâneos chamados de lençóis freáticos ou aquíferos. Essa água é chamada de água subterrânea."
    },
    {
        tipo: "aberta",
        titulo: "Questão 25: Deslizamento de Terra",
        contexto: "Moradias construídas em áreas de risco, como encostas, podem ser destruídas por deslizamentos de terra.",
        pergunta: "Além da ação da água da chuva, qual é o principal motivo pelo qual essas moradias correm perigo?",
        explicacao: "O principal motivo é a falta de vegetação nas encostas. Quando a vegetação é removida, as raízes que seguravam o solo desaparecem, tornando o terreno instável. O peso das construções e a infiltração de água também contribuem para o risco de deslizamento."
    },
    {
        tipo: "aberta",
        titulo: "Questão 26: Solução para Esgotamento do Solo",
        contexto: "O esgotamento do solo é um problema causado pela agricultura intensiva.",
        pergunta: "O que significa a prática da Rotação de Culturas e qual problema do solo ela ajuda a combater?",
        explicacao: "Rotação de Culturas é a prática de alternar diferentes tipos de plantações em uma mesma área ao longo do tempo, ou deixar a terra em pousio (descanso). Essa técnica ajuda a combater o esgotamento do solo, permitindo que ele recupere nutrientes e não fique pobre por plantar sempre a mesma cultura."
    },
    {
        tipo: "aberta",
        titulo: "Questão 27: Poluição da Água",
        contexto: "A água pode ser contaminada por substâncias impróprias durante o uso.",
        pergunta: "O que acontece com a água poluída depois de ter sido usada e contaminada? Como ela pode poluir outros recursos naturais?",
        explicacao: "A água poluída, se não for tratada, pode ser despejada em rios, lagos e mares, contaminando esses corpos d'água. Isso prejudica a vida aquática (peixes, plantas), torna a água imprópria para consumo e pode contaminar o solo quando usada para irrigação ou quando transborda."
    },

    // ========== QUESTÕES 28-30: ESTUDOS DE CASO ==========
    {
        tipo: "opiniao",
        titulo: "Questão 28: Estudo de Caso - Combate à Poluição Local",
        contexto: "A prefeitura de uma cidade descobriu que diversos rios e córregos locais estão contaminados e impróprios para o banho devido à grande quantidade de esgoto lançado irregularmente. Esse problema afeta a saúde pública e o meio ambiente.",
        pergunta: "Na sua opinião, qual é a primeira e mais urgente medida que a prefeitura e a população devem tomar em conjunto para começar a resolver o problema da poluição da água nestes rios?",
        explicacao: "Resposta esperada: A primeira medida urgente é construir e ampliar a rede de tratamento de esgoto, garantindo que todo o esgoto seja coletado e tratado antes de ser devolvido aos rios. A população deve colaborar conectando suas casas à rede de esgoto e não despejando lixo e produtos químicos nos ralos. Fiscalização e educação ambiental também são importantes."
    },
    {
        tipo: "opiniao",
        titulo: "Questão 29: Estudo de Caso - Uso Consciente da Água",
        contexto: "Imagine que sua família está reformando o carro da família. Você descobre que a produção de um carro exige 400.000 litros de água. Sabendo que a água é um recurso finito e vital, e que há grande desperdício nas atividades diárias.",
        pergunta: "Você acha que o conhecimento sobre o alto consumo de água na fabricação de bens como carros deveria influenciar o modo como as pessoas cuidam de seus próprios veículos e os mantêm por mais tempo? Justifique sua resposta.",
        explicacao: "Resposta esperada: Sim, saber que a produção de um carro consome 400.000 litros de água deveria fazer as pessoas valorizarem mais seus veículos e cuidarem deles para que durem mais tempo. Manter um carro por mais tempo reduz a necessidade de produzir novos veículos, economizando água e outros recursos naturais. Isso também se aplica a outros bens de consumo."
    },
    {
        tipo: "opiniao",
        titulo: "Questão 30: Estudo de Caso - Recuperação de Solo Compactado",
        contexto: "Um agricultor utiliza tratores e máquinas pesadas em sua plantação, e ele percebeu que, nos locais onde as máquinas passam com mais frequência, o solo ficou muito duro e a água da chuva não consegue penetrar.",
        pergunta: "Que proposta de manejo do solo você daria ao agricultor para que ele conseguisse reverter a compactação e permitir que o solo voltasse a absorver a água e a se tornar fértil?",
        explicacao: "Resposta esperada: O agricultor deveria: 1) Evitar passar máquinas pesadas sobre o solo úmido. 2) Fazer a escarificação ou subsolagem do solo (afrouxar o solo compactado). 3) Adicionar matéria orgânica (compostagem, esterco) para melhorar a estrutura do solo. 4) Plantar culturas com raízes profundas que ajudem a descompactar naturalmente. 5) Fazer rotação de culturas e deixar áreas em pousio."
    }
];

