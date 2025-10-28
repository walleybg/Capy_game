// Questões - Capítulo 14 de Ciências: O solo e sua importância
const dadosDoQuizCiencias14 = [
    // QUESTÕES DE MÚLTIPLA ESCOLHA (1-10)
    {
        titulo: "Composição Mineral do Solo",
        pergunta: "A composição mineral do solo é formada por elementos como:",
        opcoes: [
            "Nitrogênio, Oxigênio e Hidrogênio.",
            "Carbono, Hidrogênio e Nitrogênio.",
            "Cálcio, Ferro e Magnésio.",
            "Silicatos, Óxidos, Carbonatos e Sulfatos."
        ],
        respostaCorreta: "Silicatos, Óxidos, Carbonatos e Sulfatos.",
        explicacao: "A composição mineral do solo é formada por elementos como Silicatos, Óxidos, Carbonatos e Sulfatos.",
        tipo: "multipla_escolha"
    },
    {
        titulo: "Importância do Solo",
        pergunta: "O solo é fundamental para diversas atividades humanas. Qual das alternativas abaixo NÃO é uma utilização do solo?",
        opcoes: [
            "Agricultura e produção de alimentos.",
            "Construção civil e edificações.",
            "Fonte de energia elétrica.",
            "Mineração e extração de recursos."
        ],
        respostaCorreta: "Fonte de energia elétrica.",
        explicacao: "O solo é fundamental para agricultura, construção civil e mineração. O solo não é citado como fonte de energia ou iluminação.",
        tipo: "multipla_escolha"
    },
    {
        titulo: "Solo Humífero",
        pergunta: "O solo humífero é descrito como o mais adequado para a atividade agrícola porque:",
        opcoes: [
            "É rico em argila e retém muita água.",
            "É arenoso e permite boa drenagem.",
            "É bastante fértil e possui uma camada rica em nutrientes.",
            "É composto principalmente de rocha não modificada."
        ],
        respostaCorreta: "É bastante fértil e possui uma camada rica em nutrientes.",
        explicacao: "O solo humífero é descrito como o mais adequado para a atividade agrícola por ser bastante fértil e possuir uma camada rica em nutrientes.",
        tipo: "multipla_escolha"
    },
    {
        titulo: "Formação do Solo",
        pergunta: "O solo é formado a partir da rocha, e as camadas mais superficiais (com mais restos de seres vivos) são as mais modificadas. A camada de rocha não modificada está sempre:",
        opcoes: [
            "Na superfície do solo.",
            "Misturada com a matéria orgânica.",
            "Na maior profundidade.",
            "Próxima às raízes das plantas."
        ],
        respostaCorreta: "Na maior profundidade.",
        explicacao: "O solo é formado a partir da rocha, e as camadas mais superficiais são as mais modificadas. A camada de rocha não modificada está sempre na maior profundidade.",
        tipo: "multipla_escolha"
    },
    {
        titulo: "Matéria-Prima do Solo",
        pergunta: "O solo é matéria-prima para produtos, e qual material é extraído dele para a fabricação de móveis?",
        opcoes: [
            "Argila.",
            "Areia.",
            "Madeira.",
            "Calcário."
        ],
        respostaCorreta: "Madeira.",
        explicacao: "O solo é matéria-prima para produtos, e a madeira é extraída dele para a fabricação de móveis.",
        tipo: "multipla_escolha"
    },
    {
        titulo: "Raízes das Plantas",
        pergunta: "As raízes das plantas são responsáveis por fixar as plantas ao solo, o que impede que elas sejam:",
        opcoes: [
            "Atacadas por insetos.",
            "Derrubadas ou carregadas pela chuva e pelo vento.",
            "Absorvidas pelo solo.",
            "Decompostas rapidamente."
        ],
        respostaCorreta: "Derrubadas ou carregadas pela chuva e pelo vento.",
        explicacao: "As raízes das plantas são responsáveis por fixar as plantas ao solo, impedindo que sejam derrubadas ou carregadas pela chuva e pelo vento (prevenindo a erosão).",
        tipo: "multipla_escolha"
    },
    {
        titulo: "Solo Argiloso",
        pergunta: "O solo argiloso possui grande quantidade de argila, é molhado e barrento e é geralmente encontrado em:",
        opcoes: [
            "Regiões desérticas.",
            "Regiões úmidas.",
            "Regiões montanhosas.",
            "Regiões polares."
        ],
        respostaCorreta: "Regiões úmidas.",
        explicacao: "O solo argiloso possui grande quantidade de argila, é molhado e barrento e é geralmente encontrado em regiões úmidas.",
        tipo: "multipla_escolha"
    },
    {
        titulo: "Formação Natural do Solo",
        pergunta: "O solo é um recurso natural formado pela ação da natureza:",
        opcoes: [
            "Em poucos dias.",
            "Em alguns meses.",
            "Ao longo de muitos anos.",
            "Instantaneamente."
        ],
        respostaCorreta: "Ao longo de muitos anos.",
        explicacao: "O solo é um recurso natural formado pela ação da natureza ao longo de muitos anos.",
        tipo: "multipla_escolha"
    },
    {
        titulo: "Matéria Orgânica",
        pergunta: "A Matéria Orgânica é formada pela decomposição de:",
        opcoes: [
            "Rochas e minerais.",
            "Água e ar.",
            "Restos de seres vivos (raízes, caules, folhas e animais).",
            "Apenas folhas secas."
        ],
        respostaCorreta: "Restos de seres vivos (raízes, caules, folhas e animais).",
        explicacao: "A Matéria Orgânica é formada pela decomposição de restos de seres vivos (raízes, caules, folhas e animais) e tem importância para a fertilidade.",
        tipo: "multipla_escolha"
    },
    {
        titulo: "Água em Marte",
        pergunta: "Os carrinhos-robôs que exploraram Marte mostraram que as amostras coletadas indicam evidências de que:",
        opcoes: [
            "Existe vida atualmente em Marte.",
            "Marte é feito de gelo.",
            "Já existiu água em Marte.",
            "Marte tem atmosfera igual à da Terra."
        ],
        respostaCorreta: "Já existiu água em Marte.",
        explicacao: "Os carrinhos-robôs que exploraram Marte mostraram que as amostras coletadas indicam evidências de que já existiu água em Marte.",
        tipo: "multipla_escolha"
    },

    // QUESTÕES VERDADEIRO OU FALSO (11-20)
    {
        titulo: "Formação e Componentes do Solo",
        pergunta: "Avalie as afirmativas sobre o solo:\n\nI. O solo é formado pela ação da natureza.\nII. O ar é um componente do solo.\nIII. A matéria orgânica acumula-se nas camadas superficiais.\nIV. Microrganismos e plantas surgem após a rocha quebrar em pó.",
        opcoes: [
            "V, V, V, V",
            "V, F, V, V",
            "F, V, F, V",
            "V, V, F, F"
        ],
        respostaCorreta: "V, F, F, V",
        explicacao: "I. V: Formado pela ação da natureza. II. F: Ar é um componente do solo. III. F: Matéria orgânica acumula-se nas camadas superficiais. IV. V: Microrganismos e plantas surgem após a rocha quebrar em pó.",
        tipo: "verdadeiro_falso"
    },
    {
        titulo: "Importância do Solo",
        pergunta: "Avalie as afirmativas sobre a importância do solo:\n\nI. O solo é habitat e fonte de alimento.\nII. Plantas trazem benefícios aos demais seres vivos, incluindo animais e humanos.\nIII. Solo é usado na agricultura e construção civil.\nIV. Raízes fixam o solo.",
        opcoes: [
            "V, V, F, V",
            "V, V, V, V",
            "F, V, V, F",
            "V, F, V, V"
        ],
        respostaCorreta: "V, V, F, F",
        explicacao: "I. V: Solo é habitat e fonte de alimento. II. V: Plantas trazem benefícios aos demais seres vivos. III. F: Solo é usado na agricultura e construção civil. IV. F: Raízes fixam o solo.",
        tipo: "verdadeiro_falso"
    },
    {
        titulo: "Tipos de Solo",
        pergunta: "Avalie as afirmativas sobre tipos de solo:\n\nI. Solo arenoso tem poucos nutrientes.\nII. Solo argiloso é barrento.\nIII. Argiloso é encontrado em regiões úmidas.\nIV. Humífero é fértil e adequado para agricultura.",
        opcoes: [
            "F, F, V, V",
            "V, V, V, V",
            "V, F, F, V",
            "F, V, V, F"
        ],
        respostaCorreta: "C (F, F, V, V)",
        explicacao: "I. F: Solo arenoso tem poucos nutrientes. II. F: Solo argiloso é barrento. III. V: Argiloso é encontrado em regiões úmidas. IV. V: Humífero é fértil e adequado para agricultura.",
        tipo: "verdadeiro_falso"
    },
    {
        titulo: "Solo e Seres Vivos",
        pergunta: "Avalie as afirmativas sobre o solo e os seres vivos:\n\nI. Minhocas deixam o solo fofo e melhoram a circulação de ar/água.\nII. Formigas e cupins facilitam a circulação de água/ar.\nIII. Raízes curtas são menos eficientes que raízes maiores na fixação do solo.\nIV. Muitos seres vivos contribuem para a qualidade e fertilidade.",
        opcoes: [
            "V, V, V, V",
            "V, F, V, V",
            "F, V, F, V",
            "V, V, F, V"
        ],
        respostaCorreta: "B (V, F, V, V)",
        explicacao: "I. V: Minhocas deixam o solo fofo. II. F: Formigas e cupins facilitam circulação. III. V: Raízes curtas são menos eficientes. IV. V: Muitos seres contribuem para qualidade.",
        tipo: "verdadeiro_falso"
    },
    {
        titulo: "Camadas do Solo",
        pergunta: "Avalie as afirmativas sobre as camadas do solo:\n\nI. Camadas superficiais possuem a maior quantidade de restos de seres vivos.\nII. Húmus concentra-se na camada superior.\nIII. Quanto maior a profundidade, menor é a modificação da rocha.\nIV. A camada superior é rica em matéria orgânica e nutrientes.",
        opcoes: [
            "V, V, V, V",
            "F, F, V, V",
            "V, F, F, V",
            "F, V, V, F"
        ],
        respostaCorreta: "B (F, F, V, V)",
        explicacao: "I. F: Camadas superficiais possuem a maior quantidade. II. F: Húmus concentra-se na superior. III. V: Maior profundidade, menor modificação. IV. V: Camada superior é rica.",
        tipo: "verdadeiro_falso"
    },
    {
        titulo: "Tétano e Microrganismos",
        pergunta: "Avalie as afirmativas sobre tétano e microrganismos:\n\nI. Tétano é doença causada por bactérias que vivem no solo.\nII. As bactérias são bem comuns no solo.\nIII. É contraído por feridas; a vacinação previne.\nIV. A maioria dos microrganismos não é prejudicial.",
        opcoes: [
            "V, V, V, V",
            "V, F, V, V",
            "F, V, F, V",
            "V, V, F, F"
        ],
        respostaCorreta: "C (V, F, V, V)",
        explicacao: "I. V: Tétano é causado por bactérias no solo. II. F: Bactérias são comuns. III. V: Contraído por feridas; vacinação previne. IV. V: Maioria não é prejudicial.",
        tipo: "verdadeiro_falso"
    },
    {
        titulo: "Raízes das Plantas",
        pergunta: "Avalie as afirmativas sobre as raízes:\n\nI. O tamanho das raízes se relaciona ao tamanho da planta.\nII. Raízes fixam o solo contra chuva e vento.\nIII. Raízes de capim (curtas) também fixam o solo.\nIV. Raízes facilitam a entrada de água e ar.",
        opcoes: [
            "V, V, F, V",
            "F, V, V, V",
            "V, F, V, V",
            "V, V, V, V"
        ],
        respostaCorreta: "B (V, V, F, V)",
        explicacao: "I. V: Tamanho das raízes relaciona-se ao tamanho da planta. II. V: Raízes fixam contra chuva e vento. III. F: Raízes de capim também fixam. IV. V: Facilitam entrada de água e ar.",
        tipo: "verdadeiro_falso"
    },
    {
        titulo: "Solo Argiloso",
        pergunta: "Avalie as afirmativas sobre o solo argiloso:\n\nI. Solo argiloso tem alta retenção de água.\nII. É encontrado em regiões úmidas.\nIII. É molhado e barrento.\nIV. Possui grande quantidade de argila.",
        opcoes: [
            "V, V, V, V",
            "F, F, V, V",
            "V, F, F, V",
            "F, V, V, F"
        ],
        respostaCorreta: "B (F, F, V, V)",
        explicacao: "I. F: Solo argiloso tem alta retenção. II. F: É encontrado em regiões úmidas. III. V: É molhado e barrento. IV. V: Possui grande quantidade de argila.",
        tipo: "verdadeiro_falso"
    },
    {
        titulo: "Matéria Orgânica no Solo",
        pergunta: "Avalie as afirmativas sobre matéria orgânica:\n\nI. Matéria orgânica é formada pela decomposição de restos de seres vivos.\nII. Matéria orgânica é importante para a fertilidade.\nIII. Restos orgânicos servem de alimento para seres vivos.\nIV. As camadas superficiais acumulam matéria orgânica.",
        opcoes: [
            "V, V, F, V",
            "F, V, V, V",
            "V, F, V, V",
            "V, V, V, V"
        ],
        respostaCorreta: "A (V, V, F, V)",
        explicacao: "I. V: Formada pela decomposição. II. V: Importante para fertilidade. III. F: Restos servem de alimento. IV. V: Camadas superficiais acumulam.",
        tipo: "verdadeiro_falso"
    },
    {
        titulo: "Solo e Presença de Ar",
        pergunta: "Avalie as afirmativas sobre o solo e a presença de ar:\n\nI. As raízes das plantas precisam respirar o ar do solo.\nII. As minhocas cavam túneis, favorecendo o ar.\nIII. Solos argilosos ou compactados tendem a ter menos ar.\nIV. Minerais, Matéria Orgânica, Água e Ar são os componentes.",
        opcoes: [
            "V, F, V, F",
            "V, V, F, F",
            "F, V, F, V",
            "F, F, V, V"
        ],
        respostaCorreta: "B (V, V, F, F)",
        explicacao: "I. V: Raízes precisam respirar. II. V: Minhocas cavam túneis. III. F: Solos compactados têm menos ar. IV. F: Minerais, Matéria Orgânica, Água e Ar são componentes.",
        tipo: "verdadeiro_falso"
    },

    // QUESTÕES ABERTAS (21-27)
    {
        titulo: "Componentes do Solo",
        pergunta: "Cite os quatro principais componentes que formam o solo, de acordo com o que você estudou.",
        respostaCorreta: "Minerais, Matéria Orgânica, Ar e Água.",
        explicacao: "Os quatro principais componentes do solo são: Minerais, Matéria Orgânica, Ar e Água.",
        tipo: "aberta"
    },
    {
        titulo: "Vantagens do Solo Humífero",
        pergunta: "Se um agricultor pudesse escolher, por que o solo humífero seria a opção mais vantajosa para o plantio, em comparação com os solos arenoso e argiloso?",
        respostaCorreta: "O solo humífero é o mais vantajoso porque é bastante fértil e possui uma camada rica em nutrientes.",
        explicacao: "O solo humífero é descrito como o mais adequado para agricultura por ser bastante fértil e possuir uma camada rica em nutrientes.",
        tipo: "aberta"
    },
    {
        titulo: "Papel das Minhocas",
        pergunta: "Qual é o papel da minhoca no solo? Explique duas contribuições dela para a qualidade do solo.",
        respostaCorreta: "As minhocas deixam o solo fofo (facilitando ar/água) e tornam-no mais rico em nutrientes (ao decompor restos de seres vivos).",
        explicacao: "As minhocas deixam o solo fofo, facilitando a circulação de ar e água, e tornam-no mais rico em nutrientes ao decompor restos de seres vivos.",
        tipo: "aberta"
    },
    {
        titulo: "Raízes e Erosão",
        pergunta: "Imagine uma árvore muito alta em uma área com ventos fortes e chuvas intensas. Por que, para essa árvore, é vital ter raízes maiores e mais profundas do que uma planta de capim?",
        respostaCorreta: "Raízes maiores e profundas fixam melhor a árvore ao solo, impedindo que ela seja derrubada ou carregada pelos ventos fortes e chuvas intensas.",
        explicacao: "As raízes das plantas são responsáveis por fixar as plantas ao solo, impedindo que sejam derrubadas ou carregadas pela chuva e pelo vento. Árvores altas precisam de raízes maiores e mais profundas para sustentação.",
        tipo: "aberta"
    },
    {
        titulo: "Tétano e Prevenção",
        pergunta: "O que é Tétano e qual é a principal medida de prevenção relacionada à saúde humana, considerando que as bactérias que o causam vivem no solo?",
        respostaCorreta: "Tétano é uma doença causada por bactérias que vivem no solo. A principal medida de prevenção é a vacinação.",
        explicacao: "Tétano é doença causada por bactérias que vivem no solo. É contraído por feridas; a vacinação previne.",
        tipo: "aberta"
    },
    {
        titulo: "Raízes como Protetoras",
        pergunta: "De que maneira as raízes das plantas atuam como 'protetoras' contra a erosão do solo causada pela água e pelo vento?",
        respostaCorreta: "As raízes fixam as plantas ao solo, impedindo que elas sejam derrubadas ou carregadas pela chuva e pelo vento, prevenindo a erosão.",
        explicacao: "As raízes das plantas são responsáveis por fixar as plantas ao solo, o que impede que elas sejam derrubadas ou carregadas pela chuva e pelo vento (prevenindo a erosão).",
        tipo: "aberta"
    },
    {
        titulo: "Camada de Rocha Profunda",
        pergunta: "Observando o perfil do solo (suas camadas), por que a camada de rocha que está bem no fundo é considerada 'não modificada' ou 'pouco modificada', em comparação com a camada superficial?",
        respostaCorreta: "A camada de rocha profunda é considerada 'não modificada' porque ainda não sofreu a ação da natureza (decomposição, presença de seres vivos) como as camadas superficiais, que são mais modificadas.",
        explicacao: "O solo é formado a partir da rocha, e as camadas mais superficiais (com mais restos de seres vivos) são as mais modificadas. A camada de rocha não modificada está sempre na maior profundidade.",
        tipo: "aberta"
    },

    // ESTUDOS DE CASO (28-30)
    {
        titulo: "Estudo de Caso: Agricultura e Fertilidade",
        pergunta: "Maria possui uma fazenda onde o solo já foi usado por muitos anos e agora está pobre em matéria orgânica, tornando-se menos fértil. Ela sabe que precisa de húmus para reverter essa situação.\n\nProponha uma solução: Que atitudes Maria poderia tomar em sua fazenda para aumentar a quantidade de matéria orgânica (restos de seres vivos em decomposição) no solo e torná-lo mais fértil novamente?",
        respostaCorreta: "Maria poderia adicionar compostagem (restos vegetais e animais em decomposição), usar adubo orgânico, plantar leguminosas que enriquecem o solo, ou deixar restos de plantas na terra após a colheita.",
        explicacao: "Para aumentar a matéria orgânica no solo, pode-se usar compostagem, adubo orgânico, plantar leguminosas fixadoras de nitrogênio, ou incorporar restos vegetais ao solo.",
        tipo: "estudo_caso"
    },
    {
        titulo: "Estudo de Caso: Construção Civil e Habitat",
        pergunta: "Em uma planície litorânea, um terreno rico em solo está sendo usado para construir muitas casas e prédios. Nesse local, vivem tuco-tucos, pequenos roedores que fazem buracos e tocas subterrâneas no solo. Com o avanço da construção, o habitat desses animais está sendo destruído.\n\nEmita uma opinião: Por que o avanço da construção civil é considerado uma ameaça para a vida dos tuco-tucos? O que a importância do solo como 'habitat' tem a ver com esse problema?",
        respostaCorreta: "O avanço da construção destrói o solo onde os tuco-tucos vivem (habitat). O solo é fundamental como moradia e fonte de alimento para esses animais. Sem o solo adequado, eles perdem seu lar e podem não sobreviver.",
        explicacao: "O solo é habitat e fonte de alimento para muitos seres vivos. A construção civil destrói esse habitat, ameaçando a sobrevivência de animais que dependem do solo.",
        tipo: "estudo_caso"
    },
    {
        titulo: "Estudo de Caso: Missão Marte",
        pergunta: "Os cientistas descobriram recentemente evidências de que já existiu água no solo de Marte. Embora ainda não saibam se existe vida no planeta, essa descoberta mudou a forma como eles encaram o solo marciano.\n\nDesenvolva um raciocínio lógico: Se o solo é essencial para a vida na Terra e a descoberta de água é um passo importante, qual é a principal implicação lógica dessa descoberta de água para a possibilidade futura de vida, considerando que o solo é a camada superficial da crosta?",
        respostaCorreta: "Se há evidências de água em Marte, isso aumenta a possibilidade de que o solo marciano possa (ou tenha podido) sustentar vida, já que água é essencial para os seres vivos. O solo com água pode ter nutrientes e condições para vida microbiana.",
        explicacao: "A descoberta de água em Marte sugere que o solo marciano pode ter tido (ou ter) condições para sustentar vida, pois água é essencial para todos os seres vivos conhecidos. O solo é a camada superficial onde a vida se desenvolve.",
        tipo: "estudo_caso"
    }
];

