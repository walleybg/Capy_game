// Simulado do Capítulo 8 de Geografia - A importância da vegetação
// 80 questões de múltipla escolha (40 nível médio + 40 nível complexo)

const dadosDoSimuladoGeografia8 = [
    // QUESTÕES NÍVEL MÉDIO (1-40)
    
    // Questões sobre Tipos de Plantas (Q1-Q8)
    {
        tipo: "multipla_escolha",
        pergunta: "Qual é a principal característica das plantas rasteiras?",
        opcoes: [
            "Têm caule frágil e pequeno, ficando bem perto do solo",
            "Possuem vários caules saindo do solo",
            "Têm um tronco forte e grosso",
            "Crescem apenas em regiões frias"
        ],
        respostaCorreta: "Têm caule frágil e pequeno, ficando bem perto do solo",
        explicacao: "As plantas rasteiras são caracterizadas por terem caule frágil e pequeno, por isso ficam bem perto do solo. A grama é um exemplo típico de planta rasteira."
    },
    {
        tipo: "multipla_escolha",
        pergunta: "O que diferencia as plantas arbustivas das plantas rasteiras?",
        opcoes: [
            "As arbustivas têm flores coloridas",
            "As arbustivas costumam ter vários caules saindo do solo, formando arbustos",
            "As arbustivas crescem apenas no verão",
            "As arbustivas não precisam de água"
        ],
        respostaCorreta: "As arbustivas costumam ter vários caules saindo do solo, formando arbustos",
        explicacao: "As plantas arbustivas se diferenciam por terem vários caules saindo do solo, formando arbustos. Isso as distingue das plantas rasteiras e arbóreas."
    },
    {
        tipo: "multipla_escolha",
        pergunta: "Qual característica define as plantas arbóreas?",
        opcoes: [
            "Ficam próximas ao solo",
            "Têm um caule conhecido como tronco, que é forte e grosso",
            "Não produzem flores",
            "Crescem apenas em ambientes aquáticos"
        ],
        respostaCorreta: "Têm um caule conhecido como tronco, que é forte e grosso",
        explicacao: "As plantas arbóreas são caracterizadas por terem um caule conhecido como tronco, que é forte e grosso. Elas podem ser pequenas ou bem altas."
    },
    {
        tipo: "multipla_escolha",
        pergunta: "O que é vegetação?",
        opcoes: [
            "Um tipo específico de planta",
            "O agrupamento de plantas em um determinado local",
            "Apenas as árvores de uma floresta",
            "O processo de fotossíntese das plantas"
        ],
        respostaCorreta: "O agrupamento de plantas em um determinado local",
        explicacao: "Vegetação é o agrupamento de plantas em um determinado local. Quando diferentes tipos de plantas se agrupam em um lugar, formam a vegetação daquele ambiente."
    },
    {
        tipo: "multipla_escolha",
        pergunta: "Quais fatores influenciam as diferenças observadas nas plantas?",
        opcoes: [
            "Apenas a quantidade de chuva",
            "Somente a temperatura do ar",
            "A influência do solo e do clima, como a quantidade de luz solar e chuva",
            "Apenas o tipo de animais da região"
        ],
        respostaCorreta: "A influência do solo e do clima, como a quantidade de luz solar e chuva",
        explicacao: "As diferenças nas plantas são resultado da influência do solo e do clima, como a quantidade de luz solar recebida e a quantidade de chuva de cada lugar."
    },
    {
        tipo: "multipla_escolha",
        pergunta: "Qual região do Brasil apresenta uma combinação de plantas rasteiras, arbustivas e arbóreas?",
        opcoes: [
            "Deserto do Saara",
            "Pantanal",
            "Polo Norte",
            "Oceano Atlântico"
        ],
        respostaCorreta: "Pantanal",
        explicacao: "O Pantanal é um exemplo de região que apresenta uma combinação dos três tipos de plantas: rasteiras, arbustivas e arbóreas, formando uma vegetação diversa."
    },
    {
        tipo: "multipla_escolha",
        pergunta: "Por que algumas regiões têm vegetação rasteira que recobre locais muito frios da Terra?",
        opcoes: [
            "Porque plantas rasteiras gostam de frio",
            "Porque o clima frio e a pouca luz solar limitam o crescimento de plantas maiores",
            "Porque não chove nessas regiões",
            "Porque o solo é muito fértil"
        ],
        respostaCorreta: "Porque o clima frio e a pouca luz solar limitam o crescimento de plantas maiores",
        explicacao: "Em regiões muito frias, como na Rússia e no Canadá, a vegetação rasteira predomina porque o clima frio e a pouca luz solar limitam o crescimento de plantas maiores."
    },
    {
        tipo: "multipla_escolha",
        pergunta: "Qual é um exemplo de planta rasteira mencionado no capítulo?",
        opcoes: [
            "Árvore de grande porte",
            "Grama",
            "Arbusto florido",
            "Coqueiro"
        ],
        respostaCorreta: "Grama",
        explicacao: "A grama é um exemplo típico de planta rasteira, pois tem caule frágil e pequeno, ficando bem perto do solo."
    },

    // Questões sobre Importância da Vegetação (Q9-Q16)
    {
        tipo: "multipla_escolha",
        pergunta: "Qual é o papel mais importante da vegetação para a vida na Terra?",
        opcoes: [
            "Decorar o ambiente",
            "Produzir parte do oxigênio que respiramos",
            "Servir apenas como alimento para animais",
            "Criar sombra para as pessoas"
        ],
        respostaCorreta: "Produzir parte do oxigênio que respiramos",
        explicacao: "A vegetação tem um papel fundamental na produção de parte do oxigênio que respiramos, além de servir como fonte de alimento e proteção aos seres vivos."
    },
    {
        tipo: "multipla_escolha",
        pergunta: "Como a vegetação ajuda na proteção dos rios?",
        opcoes: [
            "Deixando a água mais fria",
            "As raízes das plantas seguram o solo, evitando que pedaços caiam no rio",
            "Produzindo mais água",
            "Mudando a cor da água"
        ],
        respostaCorreta: "As raízes das plantas seguram o solo, evitando que pedaços caiam no rio",
        explicacao: "As águas dos rios podem carregar pedaços de solo e rochas. Com o passar do tempo, esses pedaços podem se acumular no fundo do rio. As raízes das plantas seguram o solo, evitando que isso aconteça."
    },
    {
        tipo: "multipla_escolha",
        pergunta: "De que forma a vegetação protege o solo?",
        opcoes: [
            "Tornando o solo mais duro",
            "As raízes seguram o solo, impedindo que seja levado pela água e vento",
            "Mudando a cor do solo",
            "Aquecendo o solo"
        ],
        respostaCorreta: "As raízes seguram o solo, impedindo que seja levado pela água e vento",
        explicacao: "Os pedaços que formam o solo podem se soltar uns dos outros e serem levados pela água ou pelo vento. As raízes das plantas seguram o solo, fazendo com que esses pedaços não se percam."
    },
    {
        tipo: "multipla_escolha",
        pergunta: "Como a vegetação melhora a qualidade do ar?",
        opcoes: [
            "Produzindo mais vento",
            "As folhas das plantas funcionam como filtros que absorvem impurezas do ar",
            "Mudando a temperatura do ar",
            "Criando mais nuvens"
        ],
        respostaCorreta: "As folhas das plantas funcionam como filtros que absorvem impurezas do ar",
        explicacao: "As plantas ajudam a melhorar a qualidade do ar, pois suas folhas funcionam como filtros que absorvem as impurezas carregadas por ele."
    },
    {
        tipo: "multipla_escolha",
        pergunta: "Qual é o papel da vegetação na infiltração da água no solo?",
        opcoes: [
            "Impedir que a água entre no solo",
            "As raízes abrem espaço no solo, permitindo que a água se infiltre",
            "Transformar água em vapor",
            "Congelar a água"
        ],
        respostaCorreta: "As raízes abrem espaço no solo, permitindo que a água se infiltre",
        explicacao: "As raízes das plantas abrem espaço no solo, o que ajuda a água a se infiltrar. Assim, ela pode se acumular debaixo da terra."
    },
    {
        tipo: "multipla_escolha",
        pergunta: "Por que as folhas das plantas ajudam a diminuir a força dos pingos de chuva?",
        opcoes: [
            "Porque absorvem toda a água",
            "Porque seguram os pingos, fazendo com que cheguem ao chão com menos força",
            "Porque transformam a chuva em neve",
            "Porque evitam que chova"
        ],
        respostaCorreta: "Porque seguram os pingos, fazendo com que cheguem ao chão com menos força",
        explicacao: "As folhas das plantas também fazem com que os pingos de chuva cheguem ao chão com menos força, ajudando a proteger o solo da erosão."
    },
    {
        tipo: "multipla_escolha",
        pergunta: "Além de produzir oxigênio, qual outra função importante a vegetação desempenha?",
        opcoes: [
            "Criar montanhas",
            "Servir como fonte de alimento e proteção aos seres vivos",
            "Produzir eletricidade",
            "Mudar o clima global"
        ],
        respostaCorreta: "Servir como fonte de alimento e proteção aos seres vivos",
        explicacao: "A vegetação, além de produzir oxigênio, serve como fonte de alimento e de proteção aos seres vivos, sendo fundamental para a vida na Terra."
    },
    {
        tipo: "multipla_escolha",
        pergunta: "O que pode acontecer com o rio se não houver vegetação nas suas margens?",
        opcoes: [
            "O rio fica mais limpo",
            "Pedaços de solo e rochas podem se acumular no fundo, ficando mais raso",
            "O rio fica mais profundo",
            "A água fica mais fria"
        ],
        respostaCorreta: "Pedaços de solo e rochas podem se acumular no fundo, ficando mais raso",
        explicacao: "Sem a vegetação para segurar o solo, pedaços de solo e rochas podem ser carregados para o rio e se acumular no fundo, fazendo com que ele fique mais raso."
    },

    // Questões sobre Remoção da Vegetação (Q17-Q20)
    {
        tipo: "multipla_escolha",
        pergunta: "Para que a madeira das árvores pode ser utilizada?",
        opcoes: [
            "Apenas para fazer fogo",
            "Para produção de papel e construção de moradias",
            "Somente para fazer móveis",
            "Para produzir plástico"
        ],
        respostaCorreta: "Para produção de papel e construção de moradias",
        explicacao: "A madeira das árvores pode ser utilizada na produção de papel e na construção de moradias, sendo um recurso importante para diversas atividades econômicas."
    },
    {
        tipo: "multipla_escolha",
        pergunta: "Por que é importante que a exploração da vegetação seja feita de forma consciente?",
        opcoes: [
            "Para economizar dinheiro",
            "Para entender os impactos que diferentes ações podem ter para o meio ambiente e a vida humana",
            "Para plantar mais árvores",
            "Para criar mais espaço nas cidades"
        ],
        respostaCorreta: "Para entender os impactos que diferentes ações podem ter para o meio ambiente e a vida humana",
        explicacao: "É importante que a exploração da vegetação seja sempre feita de forma consciente, entendendo os impactos que diferentes ações podem ter para o meio ambiente e até mesmo para a vida humana."
    },


    {
        tipo: "multipla_escolha",
        pergunta: "Qual atividade econômica pode causar o desmatamento?",
        opcoes: [
            "Pesca no mar",
            "Produção de alimentos, criação de animais e cultivo de plantas",
            "Fabricação de computadores",
            "Turismo em praias"
        ],
        respostaCorreta: "Produção de alimentos, criação de animais e cultivo de plantas",
        explicacao: "O desmatamento pode acontecer por diversos motivos, alguns deles são a produção de alimentos, em atividades como a criação de animais e o cultivo de plantas, e a construção de moradias."
    },
    {
        tipo: "multipla_escolha",
        pergunta: "Por que algumas áreas precisam ter a vegetação removida?",
        opcoes: [
            "Para deixar o lugar mais bonito",
            "Para atender necessidades humanas como construção de casas e produção de alimentos",
            "Para criar desertos",
            "Para aumentar a temperatura"
        ],
        respostaCorreta: "Para atender necessidades humanas como construção de casas e produção de alimentos",
        explicacao: "Para realizar algumas atividades econômicas que favorecem a vida humana, é comum que a vegetação de um lugar ou parte dela seja muito usada, como na construção de moradias e produção de alimentos."
    },

    // Questões sobre O Ar (Q22-Q28)
    {
        tipo: "multipla_escolha",
        pergunta: "Por que o ar é indispensável para a existência da vida no planeta?",
        opcoes: [
            "Porque tem cor bonita",
            "Porque a respiração de muitos seres vivos depende dele",
            "Porque é quente",
            "Porque faz barulho"
        ],
        respostaCorreta: "Porque a respiração de muitos seres vivos depende dele",
        explicacao: "O ar é indispensável para a existência da vida no planeta, pois a respiração de muitos seres vivos depende dele. Uma pessoa adulta pode sobreviver semanas sem alimento, mas sem ar sobrevive apenas alguns minutos."
    },
    {
        tipo: "multipla_escolha",
        pergunta: "O que é a atmosfera?",
        opcoes: [
            "Uma camada de água que cobre a Terra",
            "Uma camada de ar que envolve todo o planeta Terra",
            "O centro da Terra",
            "Uma montanha muito alta"
        ],
        respostaCorreta: "Uma camada de ar que envolve todo o planeta Terra",
        explicacao: "O ar é um elemento natural que forma uma camada que envolve todo o planeta Terra: a atmosfera. Esse recurso natural é feito de uma mistura de gases."
    },
    {
        tipo: "multipla_escolha",
        pergunta: "Quais são as características do ar?",
        opcoes: [
            "Tem cheiro forte e cor azul",
            "Não tem cheiro nem cor e não pode ser visto nem tocado",
            "É sempre quente e colorido",
            "Tem gosto doce"
        ],
        respostaCorreta: "Não tem cheiro nem cor e não pode ser visto nem tocado",
        explicacao: "O ar é feito de uma mistura de gases que não têm cheiro nem cor e que não podem ser vistos nem tocados, mas pode ser percebido de várias maneiras."
    },
    {
        tipo: "multipla_escolha",
        pergunta: "Como podemos perceber a presença do ar?",
        opcoes: [
            "Apenas olhando para o céu",
            "Sentindo o vento batendo no rosto ou vendo as nuvens se movimentando",
            "Tocando nas pedras",
            "Ouvindo música"
        ],
        respostaCorreta: "Sentindo o vento batendo no rosto ou vendo as nuvens se movimentando",
        explicacao: "O ar pode ser percebido de vários modos pelas pessoas. Uma das principais maneiras é por meio do vento, que é formado quando o ar se movimenta. Também podemos ver as nuvens se movimentando ou as plantas balançando."
    },
    {
        tipo: "multipla_escolha",
        pergunta: "O que é o vento?",
        opcoes: [
            "Água em movimento",
            "Ar em movimento",
            "Terra em movimento",
            "Fogo em movimento"
        ],
        respostaCorreta: "Ar em movimento",
        explicacao: "O vento é formado quando o ar se movimenta. É uma das principais maneiras pelas quais podemos perceber a presença do ar."
    },
    {
        tipo: "multipla_escolha",
        pergunta: "Qual atividade demonstra a presença do ar?",
        opcoes: [
            "Nadar no mar",
            "Empinar pipas, soprar bolhas de sabão ou atrair aviões de papel",
            "Plantar flores",
            "Cozinhar alimentos"
        ],
        respostaCorreta: "Empinar pipas, soprar bolhas de sabão ou atrair aviões de papel",
        explicacao: "Podemos perceber o ar brincando: ao empinar pipas, soprar bolhas de sabão, atrair aviões de papel etc. Todas essas atividades demonstram a presença do ar."
    },
    {
        tipo: "multipla_escolha",
        pergunta: "Por quanto tempo uma pessoa pode sobreviver sem ar?",
        opcoes: [
            "Várias semanas",
            "Apenas alguns minutos",
            "Alguns dias",
            "Um ano inteiro"
        ],
        respostaCorreta: "Apenas alguns minutos",
        explicacao: "Uma pessoa adulta consegue sobreviver durante semanas sem se alimentar e alguns dias sem beber água, mas sem ar ela sobrevive por apenas alguns minutos, demonstrando a importância vital do ar."
    },

    // Questões sobre Aproveitamento do Ar (Q29-Q34)
    {
        tipo: "multipla_escolha",
        pergunta: "Como a força dos ventos pode ser usada para facilitar o trabalho?",
        opcoes: [
            "Para fazer fogo",
            "Para mover pás de moinhos, moer grãos e bombear água",
            "Para criar montanhas",
            "Para produzir comida"
        ],
        respostaCorreta: "Para mover pás de moinhos, moer grãos e bombear água",
        explicacao: "A força dos ventos pode ser usada para mover as pás de moinhos, girando várias engrenagens que existem dentro da torre. Com as engrenagens funcionando, os moinhos podem servir para moer grãos e transformá-los em farinha, para bombear água etc."
    },
    {
        tipo: "multipla_escolha",
        pergunta: "O que é energia eólica?",
        opcoes: [
            "Energia produzida pela água",
            "Energia produzida pelos ventos que pode ser transformada em eletricidade",
            "Energia produzida pelo sol",
            "Energia produzida por animais"
        ],
        respostaCorreta: "Energia produzida pelos ventos que pode ser transformada em eletricidade",
        explicacao: "Os ventos também produzem a energia eólica, que pode ser transformada em eletricidade. Essa forma de produção de eletricidade é menos prejudicial ao meio ambiente em relação a outras fontes de energia."
    },
    {
        tipo: "multipla_escolha",
        pergunta: "Qual meio de transporte usa a força dos ventos?",
        opcoes: [
            "Carro",
            "Veleiros, jangadas e outros tipos de barcos",
            "Avião a jato",
            "Trem"
        ],
        respostaCorreta: "Veleiros, jangadas e outros tipos de barcos",
        explicacao: "Alguns tipos de barcos, como os veleiros, os iates e as jangadas, usam a força dos ventos para se movimentar pela água. Esse tipo de transporte foi inventado há mais de cinco mil anos e ainda é usado nos dias de hoje."
    },
    {
        tipo: "multipla_escolha",
        pergunta: "Por que a energia eólica é considerada menos prejudicial ao meio ambiente?",
        opcoes: [
            "Porque é mais barata",
            "Porque não polui o ar como outras fontes de energia",
            "Porque é mais rápida",
            "Porque faz menos barulho"
        ],
        respostaCorreta: "Porque não polui o ar como outras fontes de energia",
        explicacao: "A energia eólica é menos prejudicial ao meio ambiente em relação a outras fontes de energia porque não polui o ar durante sua produção."
    },
    {
        tipo: "multipla_escolha",
        pergunta: "Há quanto tempo o transporte movido a vento foi inventado?",
        opcoes: [
            "Há 100 anos",
            "Há mais de cinco mil anos",
            "Há 50 anos",
            "Há 10 anos"
        ],
        respostaCorreta: "Há mais de cinco mil anos",
        explicacao: "O transporte movido a vento, como barcos a vela, foi inventado há mais de cinco mil anos e ainda é usado nos dias de hoje."
    },
    {
        tipo: "multipla_escolha",
        pergunta: "Qual é uma aplicação moderna da força dos ventos?",
        opcoes: [
            "Fazer chover",
            "Produzir eletricidade através de turbinas eólicas",
            "Criar terremotos",
            "Derreter gelo"
        ],
        respostaCorreta: "Produzir eletricidade através de turbinas eólicas",
        explicacao: "Uma aplicação moderna da força dos ventos é a produção de eletricidade através de turbinas eólicas, que transformam a energia eólica em energia elétrica."
    },

    // Questões sobre Tempestades de Areia (Q35-Q40)
    {
        tipo: "multipla_escolha",
        pergunta: "Como se formam as tempestades de areia?",
        opcoes: [
            "Quando chove muito",
            "Quando o ar está muito seco e os ventos estão bem fortes e quentes",
            "Quando neva",
            "Quando o sol está muito forte"
        ],
        respostaCorreta: "Quando o ar está muito seco e os ventos estão bem fortes e quentes",
        explicacao: "As tempestades de areia são formadas quando o ar está muito seco e os ventos estão bem fortes e quentes. Nessas situações, os ventos carregam uma grande quantidade de areia do solo."
    },
    {
        tipo: "multipla_escolha",
        pergunta: "Qual altura pode atingir uma nuvem de areia em uma tempestade?",
        opcoes: [
            "1 metro",
            "Até 15 metros de altura",
            "100 metros",
            "1 quilômetro"
        ],
        respostaCorreta: "Até 15 metros de altura",
        explicacao: "Durante uma tempestade de areia, os ventos carregam uma grande quantidade de areia do solo, criando uma enorme nuvem seca, que pode chegar a 15 metros de altura."
    },
    {
        tipo: "multipla_escolha",
        pergunta: "Por que as tempestades de areia se formam muito rapidamente?",
        opcoes: [
            "Porque chove muito",
            "Por causa da velocidade dos ventos",
            "Porque o solo está molhado",
            "Porque está frio"
        ],
        respostaCorreta: "Por causa da velocidade dos ventos",
        explicacao: "Por causa da velocidade dos ventos, essas tempestades se formam muito rapidamente, podendo surgir em poucos minutos."
    },
    {
        tipo: "multipla_escolha",
        pergunta: "Qual perigo as tempestades de areia podem causar?",
        opcoes: [
            "Deixar tudo molhado",
            "A areia pode entrar nos olhos, boca e nariz, dificultando a visão e causando acidentes",
            "Fazer muito frio",
            "Criar terremotos"
        ],
        respostaCorreta: "A areia pode entrar nos olhos, boca e nariz, dificultando a visão e causando acidentes",
        explicacao: "Quando as tempestades de areia acontecem, a nuvem de areia pode entrar nos olhos, boca e nariz das pessoas, além de tornar difícil ver o caminho à sua frente. Por esse motivo, é importante ter muito cuidado com tempestades desse tipo, pois elas podem causar acidentes."
    },
    {
        tipo: "multipla_escolha",
        pergunta: "Onde as tempestades de areia são mais comuns?",
        opcoes: [
            "Em florestas tropicais",
            "Na natureza, mas podem acontecer com mais frequência por causa da ação humana",
            "Apenas no oceano",
            "Somente no polo norte"
        ],
        respostaCorreta: "Na natureza, mas podem acontecer com mais frequência por causa da ação humana",
        explicacao: "Esse fenômeno é comum na natureza, mas pode acontecer com mais frequência por causa da ação dos seres humanos. Isso porque o desmatamento faz com que o solo fique mais solto, sendo mais fácil de ser carregado pelo vento."
    },
    {
        tipo: "multipla_escolha",
        pergunta: "Como o desmatamento está relacionado às tempestades de areia?",
        opcoes: [
            "O desmatamento não tem relação com tempestades",
            "O desmatamento deixa o solo mais solto, facilitando que seja carregado pelo vento",
            "O desmatamento impede tempestades",
            "O desmatamento cria mais árvores"
        ],
        respostaCorreta: "O desmatamento deixa o solo mais solto, facilitando que seja carregado pelo vento",
        explicacao: "O desmatamento faz com que o solo fique mais solto, sendo mais fácil de ser carregado pelo vento, o que pode aumentar a frequência das tempestades de areia."
    },



    // QUESTÕES NÍVEL COMPLEXO (41-80)
    // Questões que exigem raciocínio, análise, síntese e aplicação de conhecimentos
    
    // Questões de Análise e Síntese (Q41-Q50)
    {
        tipo: "multipla_escolha",
        pergunta: "Se uma região sofre desmatamento intenso, qual seria a consequência mais provável para os rios dessa área?",
        opcoes: [
            "Os rios ficariam mais profundos e limpos",
            "Os rios ficariam mais rasos devido ao acúmulo de sedimentos, pois não há raízes para segurar o solo",
            "Os rios desapareceriam completamente",
            "Os rios ficariam congelados"
        ],
        respostaCorreta: "Os rios ficariam mais rasos devido ao acúmulo de sedimentos, pois não há raízes para segurar o solo",
        explicacao: "Sem a vegetação, as raízes não seguram mais o solo, permitindo que pedaços de solo e rochas sejam carregados para os rios. Com o tempo, esses sedimentos se acumulam no fundo, tornando o rio mais raso. Este é um exemplo de raciocínio causa-consequência."
    },
    {
        tipo: "multipla_escolha",
        pergunta: "Considerando que a vegetação melhora a qualidade do ar e protege o solo, qual seria o impacto de substituir uma grande floresta por uma área urbana sem árvores?",
        opcoes: [
            "Melhoria na qualidade do ar e proteção do solo",
            "Piora na qualidade do ar e aumento da erosão do solo",
            "Nenhuma mudança significativa",
            "Aumento da biodiversidade"
        ],
        respostaCorreta: "Piora na qualidade do ar e aumento da erosão do solo",
        explicacao: "A remoção da floresta eliminaria os 'filtros naturais' (folhas) que absorvem impurezas do ar, piorando sua qualidade. Além disso, sem as raízes para segurar o solo, haveria aumento da erosão. Esta questão exige análise de múltiplas consequências."
    },
    {
        tipo: "multipla_escolha",
        pergunta: "Por que uma região com muita vegetação tende a ter menos problemas com enchentes do que uma região sem vegetação?",
        opcoes: [
            "Porque as plantas absorvem toda a água da chuva",
            "Porque as raízes abrem espaço no solo para infiltração da água e as folhas diminuem a força da chuva",
            "Porque as plantas impedem que chova",
            "Porque as plantas transformam água em ar"
        ],
        respostaCorreta: "Porque as raízes abrem espaço no solo para infiltração da água e as folhas diminuem a força da chuva",
        explicacao: "As raízes criam espaços no solo que permitem a infiltração da água, reduzindo o escoamento superficial. As folhas também diminuem a força dos pingos de chuva, protegendo o solo. Esses dois fatores combinados reduzem o risco de enchentes. Questão que exige compreensão de múltiplos processos."
    },
    {
        tipo: "multipla_escolha",
        pergunta: "Se você observar que em uma cidade há muitas árvores nas ruas e parques, mas em outra cidade há poucas árvores, qual diferença você esperaria encontrar na qualidade do ar?",
        opcoes: [
            "Ambas teriam a mesma qualidade de ar",
            "A cidade com mais árvores teria ar de melhor qualidade",
            "A cidade com menos árvores teria ar de melhor qualidade",
            "A quantidade de árvores não afeta a qualidade do ar"
        ],
        respostaCorreta: "A cidade com mais árvores teria ar de melhor qualidade",
        explicacao: "As folhas das plantas funcionam como filtros naturais que absorvem impurezas do ar. Portanto, uma cidade com mais árvores teria ar de melhor qualidade. Esta questão exige aplicação do conhecimento em um contexto comparativo."
    },
    {
        tipo: "multipla_escolha",
        pergunta: "Um agricultor precisa decidir entre desmatar toda uma área para plantar ou manter parte da vegetação nativa. Considerando os impactos ambientais, qual seria a melhor decisão?",
        opcoes: [
            "Desmatar tudo para ter mais espaço para plantar",
            "Manter parte da vegetação nativa para proteger o solo, a água e o ar",
            "Plantar apenas em áreas rochosas",
            "Não plantar nada"
        ],
        respostaCorreta: "Manter parte da vegetação nativa para proteger o solo, a água e o ar",
        explicacao: "Manter parte da vegetação nativa ajuda a proteger o solo da erosão, mantém a qualidade da água dos rios e melhora a qualidade do ar. É uma decisão que equilibra produção agrícola com preservação ambiental. Questão que exige tomada de decisão baseada em múltiplos critérios."
    },
    {
        tipo: "multipla_escolha",
        pergunta: "Analisando a relação entre vegetação e clima, por que regiões muito frias como Rússia e Canadá têm principalmente vegetação rasteira?",
        opcoes: [
            "Porque as pessoas preferem plantas pequenas",
            "Porque o clima frio e a pouca luz solar limitam o crescimento de plantas maiores",
            "Porque não há solo nessas regiões",
            "Porque chove muito nessas regiões"
        ],
        respostaCorreta: "Porque o clima frio e a pouca luz solar limitam o crescimento de plantas maiores",
        explicacao: "O clima frio e a pouca luz solar são fatores limitantes para o crescimento de plantas. Plantas rasteiras conseguem sobreviver nessas condições porque precisam de menos recursos. Esta questão exige compreensão da relação entre fatores climáticos e tipos de vegetação."
    },
    {
        tipo: "multipla_escolha",
        pergunta: "Se uma tempestade de areia está se formando rapidamente em uma região, qual seria a ação mais segura a tomar?",
        opcoes: [
            "Correr em direção à tempestade",
            "Procurar abrigo imediatamente para evitar que areia entre nos olhos, boca e nariz",
            "Continuar caminhando normalmente",
            "Subir em uma árvore"
        ],
        respostaCorreta: "Procurar abrigo imediatamente para evitar que areia entre nos olhos, boca e nariz",
        explicacao: "Como as tempestades de areia se formam rapidamente e a areia pode entrar nos olhos, boca e nariz, causando dificuldade de visão e acidentes, a ação mais segura é procurar abrigo imediatamente. Questão que exige aplicação prática do conhecimento."
    },
    {
        tipo: "multipla_escolha",
        pergunta: "Comparando dois ambientes - um com vegetação densa e outro desmatado - qual teria maior probabilidade de sofrer com tempestades de areia?",
        opcoes: [
            "O ambiente com vegetação densa",
            "O ambiente desmatado, pois o solo fica mais solto e fácil de ser carregado pelo vento",
            "Ambos teriam a mesma probabilidade",
            "Nenhum dos dois sofreria com tempestades"
        ],
        respostaCorreta: "O ambiente desmatado, pois o solo fica mais solto e fácil de ser carregado pelo vento",
        explicacao: "O desmatamento deixa o solo mais solto, sem as raízes das plantas para segurá-lo. Isso facilita que o solo seja carregado pelo vento, aumentando a probabilidade de tempestades de areia. Questão comparativa que exige análise de causa e efeito."
    },
    {
        tipo: "multipla_escolha",
        pergunta: "Por que a energia eólica pode ser considerada uma solução melhor para o meio ambiente do que queimar combustíveis fósseis?",
        opcoes: [
            "Porque é mais barata",
            "Porque não polui o ar durante a produção de energia",
            "Porque produz mais energia",
            "Porque é mais rápida"
        ],
        respostaCorreta: "Porque não polui o ar durante a produção de energia",
        explicacao: "A energia eólica não polui o ar durante sua produção, diferentemente da queima de combustíveis fósseis que libera gases poluentes. Esta é uma questão que exige comparação entre diferentes fontes de energia e seus impactos ambientais."
    },
    {
        tipo: "multipla_escolha",
        pergunta: "Se você observar que um rio está ficando cada vez mais raso e com água mais turva (suja), qual seria a causa mais provável?",
        opcoes: [
            "Muita chuva na região",
            "Desmatamento nas margens do rio, permitindo que solo seja carregado para a água",
            "Aumento da população de peixes",
            "Construção de pontes"
        ],
        respostaCorreta: "Desmatamento nas margens do rio, permitindo que solo seja carregado para a água",
        explicacao: "O desmatamento remove as raízes que seguram o solo. Sem essa proteção, o solo é facilmente carregado pela água da chuva para o rio, tornando-o mais raso e turvo. Questão que exige diagnóstico de problema ambiental."
    },

    // Questões de Raciocínio Lógico e Aplicação (Q51-Q60)
    {
        tipo: "multipla_escolha",
        pergunta: "Uma cidade industrial tem muitas fábricas que liberam fumaça. Qual seria a melhor combinação de ações para melhorar a qualidade do ar?",
        opcoes: [
            "Apenas plantar mais árvores",
            "Instalar filtros nas chaminés das fábricas E plantar mais árvores na cidade",
            "Apenas fechar as fábricas",
            "Não fazer nada"
        ],
        respostaCorreta: "Instalar filtros nas chaminés das fábricas E plantar mais árvores na cidade",
        explicacao: "A melhor solução combina reduzir a poluição na fonte (filtros nas chaminés) com aumentar a capacidade de absorção de impurezas (mais árvores). Esta questão exige pensamento sistêmico e compreensão de soluções integradas."
    },
    {
        tipo: "multipla_escolha",
        pergunta: "Se o ar não tem cheiro, cor e não pode ser visto nem tocado, como podemos provar cientificamente que ele existe?",
        opcoes: [
            "Não podemos provar",
            "Observando seus efeitos, como o movimento das nuvens, vento, e objetos que se movem com o ar",
            "Apenas acreditando",
            "Olhando para o céu"
        ],
        respostaCorreta: "Observando seus efeitos, como o movimento das nuvens, vento, e objetos que se movem com o ar",
        explicacao: "Embora o ar seja invisível, podemos provar sua existência observando seus efeitos: vento no rosto, nuvens se movendo, pipas voando, etc. Este é um princípio científico importante: podemos estudar fenômenos invisíveis através de seus efeitos observáveis."
    },
    {
        tipo: "multipla_escolha",
        pergunta: "Considerando que as plantas produzem oxigênio e absorvem impurezas do ar, o que aconteceria com a qualidade do ar em uma cidade que está crescendo rapidamente e substituindo áreas verdes por prédios?",
        opcoes: [
            "A qualidade do ar melhoraria",
            "A qualidade do ar pioraria progressivamente",
            "Não haveria mudança",
            "O ar ficaria mais frio"
        ],
        respostaCorreta: "A qualidade do ar pioraria progressivamente",
        explicacao: "Com menos plantas, há menos produção de oxigênio e menos absorção de impurezas. Além disso, mais prédios geralmente significam mais carros e mais poluição. A combinação desses fatores leva à piora progressiva da qualidade do ar. Questão que exige projeção de tendências."
    },
    {
        tipo: "multipla_escolha",
        pergunta: "Por que barcos a vela, inventados há mais de 5000 anos, ainda são usados hoje, mesmo com a existência de barcos a motor?",
        opcoes: [
            "Porque são mais rápidos",
            "Porque usam energia renovável (vento) e não poluem",
            "Porque são mais baratos de construir",
            "Porque são mais seguros"
        ],
        respostaCorreta: "Porque usam energia renovável (vento) e não poluem",
        explicacao: "Barcos a vela continuam relevantes porque usam uma fonte de energia renovável (vento) e não poluem o ar, ao contrário de barcos a motor que queimam combustível. Questão que exige compreensão de sustentabilidade e tecnologias limpas."
    },
    {
        tipo: "multipla_escolha",
        pergunta: "Se você fosse planejar uma nova cidade, onde seria mais importante plantar árvores para maximizar os benefícios ambientais?",
        opcoes: [
            "Apenas em parques distantes",
            "Nas margens dos rios, ao longo das ruas e em áreas com muito trânsito",
            "Apenas em áreas rurais",
            "Não seria necessário plantar árvores"
        ],
        respostaCorreta: "Nas margens dos rios, ao longo das ruas e em áreas com muito trânsito",
        explicacao: "Plantar nas margens dos rios protege o solo e a água; ao longo das ruas melhora a qualidade do ar para pedestres; em áreas com trânsito ajuda a absorver a poluição dos veículos. Esta distribuição maximiza os benefícios. Questão de planejamento urbano sustentável."
    },
    {
        tipo: "multipla_escolha",
        pergunta: "Analisando o ciclo da água, como a vegetação contribui para que a água da chuva fique armazenada debaixo da terra?",
        opcoes: [
            "As plantas bebem toda a água",
            "As raízes abrem espaços no solo permitindo infiltração, e as folhas diminuem a força da chuva evitando erosão",
            "As plantas transformam água em ar",
            "As plantas impedem que chova"
        ],
        respostaCorreta: "As raízes abrem espaços no solo permitindo infiltração, e as folhas diminuem a força da chuva evitando erosão",
        explicacao: "As raízes criam canais no solo por onde a água pode infiltrar e se acumular debaixo da terra. As folhas diminuem o impacto da chuva, evitando que o solo seja compactado ou erodido. Ambos os processos trabalham juntos. Questão sobre processos integrados."
    },
    {
        tipo: "multipla_escolha",
        pergunta: "Se uma região costumava ter muitas árvores mas foi desmatada, e agora sofre com enchentes frequentes, qual é a explicação mais completa para esse problema?",
        opcoes: [
            "Está chovendo mais do que antes",
            "Sem árvores, não há raízes para facilitar infiltração da água no solo, e sem folhas, a chuva atinge o solo com mais força, causando erosão e escoamento superficial",
            "As pessoas estão usando mais água",
            "O rio ficou maior"
        ],
        respostaCorreta: "Sem árvores, não há raízes para facilitar infiltração da água no solo, e sem folhas, a chuva atinge o solo com mais força, causando erosão e escoamento superficial",
        explicacao: "Esta é uma resposta que integra múltiplos conceitos: infiltração (raízes), proteção do solo (folhas) e consequências (erosão e escoamento). Sem esses mecanismos naturais, mais água escoa pela superfície causando enchentes. Questão de análise sistêmica."
    },
    {
        tipo: "multipla_escolha",
        pergunta: "Por que a poluição do ar é mais comum em grandes cidades do que em áreas rurais?",
        opcoes: [
            "Porque chove menos nas cidades",
            "Porque há maior concentração de fábricas e automóveis que liberam poluentes, e menos vegetação para absorver impurezas",
            "Porque as pessoas respiram mais nas cidades",
            "Porque o ar da cidade é diferente"
        ],
        respostaCorreta: "Porque há maior concentração de fábricas e automóveis que liberam poluentes, e menos vegetação para absorver impurezas",
        explicacao: "Grandes cidades têm mais fontes de poluição (fábricas, carros) e menos vegetação para funcionar como filtro natural. Essa combinação resulta em pior qualidade do ar. Questão que exige análise de múltiplos fatores."
    },
    {
        tipo: "multipla_escolha",
        pergunta: "Se você pudesse escolher apenas UMA ação para melhorar o meio ambiente da sua cidade, qual teria o impacto mais abrangente?",
        opcoes: [
            "Pintar as casas de verde",
            "Plantar árvores em toda a cidade, pois elas melhoram o ar, protegem o solo e ajudam na infiltração de água",
            "Construir mais prédios",
            "Fazer mais estradas"
        ],
        respostaCorreta: "Plantar árvores em toda a cidade, pois elas melhoram o ar, protegem o solo e ajudam na infiltração de água",
        explicacao: "Plantar árvores tem múltiplos benefícios simultâneos: melhora a qualidade do ar (folhas filtram impurezas), protege o solo (raízes seguram), ajuda na infiltração de água (raízes abrem espaços), e reduz enchentes. É a ação com impacto mais abrangente. Questão de priorização baseada em múltiplos critérios."
    },
    {
        tipo: "multipla_escolha",
        pergunta: "Comparando moinhos de vento antigos com turbinas eólicas modernas, qual é a principal semelhança entre eles?",
        opcoes: [
            "Ambos são feitos de madeira",
            "Ambos aproveitam a força do vento em movimento para realizar trabalho útil",
            "Ambos produzem farinha",
            "Ambos são usados apenas em fazendas"
        ],
        respostaCorreta: "Ambos aproveitam a força do vento em movimento para realizar trabalho útil",
        explicacao: "Tanto moinhos antigos quanto turbinas modernas usam o mesmo princípio: converter a energia do vento em movimento em trabalho útil (moer grãos ou gerar eletricidade). Questão que exige identificação de princípios comuns em diferentes tecnologias."
    },



    // Questões de Pensamento Crítico e Resolução de Problemas (Q61-Q80)
    {
        tipo: "multipla_escolha",
        pergunta: "Uma escola quer fazer um experimento para medir a poluição do ar. Eles colocam filtros de papel em janelas de diferentes bairros. Após uma semana, qual resultado indicaria maior poluição?",
        opcoes: [
            "Filtro completamente limpo",
            "Filtro com muita sujeira acumulada",
            "Filtro molhado",
            "Filtro rasgado"
        ],
        respostaCorreta: "Filtro com muita sujeira acumulada",
        explicacao: "Quanto mais sujeira acumulada no filtro, mais impurezas havia no ar daquele local, indicando maior poluição. Este é um método científico simples para medir qualidade do ar. Questão sobre método científico."
    },
    {
        tipo: "multipla_escolha",
        pergunta: "Se uma pessoa consegue sobreviver semanas sem comida e dias sem água, mas apenas minutos sem ar, o que isso nos diz sobre a importância relativa desses recursos?",
        opcoes: [
            "Comida é mais importante que ar",
            "Ar é o recurso mais crítico para sobrevivência imediata",
            "Água é menos importante que comida",
            "Todos têm a mesma importância"
        ],
        respostaCorreta: "Ar é o recurso mais crítico para sobrevivência imediata",
        explicacao: "A capacidade de sobrevivência sem cada recurso indica sua criticidade: minutos sem ar, dias sem água, semanas sem comida. Isso mostra que o ar é o mais crítico para sobrevivência imediata. Questão de análise comparativa."
    },
    {
        tipo: "multipla_escolha",
        pergunta: "Por que o uso de transportes públicos pode ajudar a reduzir a poluição do ar nas cidades?",
        opcoes: [
            "Porque transportes públicos não usam combustível",
            "Porque um ônibus transporta muitas pessoas, reduzindo o número de carros individuais e, consequentemente, a poluição total",
            "Porque transportes públicos são mais rápidos",
            "Porque transportes públicos não poluem"
        ],
        respostaCorreta: "Porque um ônibus transporta muitas pessoas, reduzindo o número de carros individuais e, consequentemente, a poluição total",
        explicacao: "Um ônibus pode substituir dezenas de carros individuais. Embora o ônibus também polua, a poluição total é menor do que se cada pessoa usasse seu próprio carro. Questão sobre eficiência coletiva vs individual."
    },
    {
        tipo: "multipla_escolha",
        pergunta: "Analisando a relação entre vegetação e recursos naturais, qual afirmação melhor descreve essa conexão?",
        opcoes: [
            "A vegetação depende de outros recursos mas não os afeta",
            "A vegetação é independente de outros recursos naturais",
            "A vegetação está interconectada com ar, água e solo, afetando e sendo afetada por todos eles",
            "A vegetação só afeta o solo"
        ],
        respostaCorreta: "A vegetação está interconectada com ar, água e solo, afetando e sendo afetada por todos eles",
        explicacao: "A vegetação produz oxigênio (afeta ar), protege rios e facilita infiltração (afeta água), e protege contra erosão (afeta solo). Ao mesmo tempo, depende desses recursos para sobreviver. É um sistema interconectado. Questão sobre pensamento sistêmico."
    },
    {
        tipo: "multipla_escolha",
        pergunta: "Se você observar que em dias de muito vento as pipas voam mais alto, o que isso demonstra sobre a relação entre velocidade do vento e força?",
        opcoes: [
            "Não há relação entre vento e pipas",
            "Quanto mais forte o vento (maior velocidade), maior a força que ele exerce nos objetos",
            "Vento fraco faz pipas voarem mais alto",
            "A cor da pipa determina a altura"
        ],
        respostaCorreta: "Quanto mais forte o vento (maior velocidade), maior a força que ele exerce nos objetos",
        explicacao: "A observação de que pipas voam mais alto em dias de vento forte demonstra que a velocidade do vento está relacionada à força que ele exerce. Maior velocidade = maior força. Questão sobre relação entre variáveis."
    },
    {
        tipo: "multipla_escolha",
        pergunta: "Por que queimadas no campo contribuem para a poluição atmosférica mesmo estando longe das cidades?",
        opcoes: [
            "Porque o fogo é quente",
            "Porque a fumaça das queimadas se mistura ao ar e pode ser transportada pelo vento para outras regiões",
            "Porque queimadas só acontecem perto de cidades",
            "Porque queimadas não poluem"
        ],
        respostaCorreta: "Porque a fumaça das queimadas se mistura ao ar e pode ser transportada pelo vento para outras regiões",
        explicacao: "A fumaça das queimadas se mistura ao ar e, como o ar está em constante movimento (vento), pode ser transportada para longas distâncias, afetando até mesmo cidades distantes. Questão sobre dispersão de poluentes."
    },
    {
        tipo: "multipla_escolha",
        pergunta: "Se uma região tem solo muito solto e ventos fortes frequentes, mas quer evitar tempestades de areia, qual seria a melhor solução a longo prazo?",
        opcoes: [
            "Molhar o solo todos os dias",
            "Plantar vegetação para que as raízes segurem o solo",
            "Construir muros altos",
            "Mudar toda a população para outro lugar"
        ],
        respostaCorreta: "Plantar vegetação para que as raízes segurem o solo",
        explicacao: "Plantar vegetação é a solução mais sustentável a longo prazo porque as raízes seguram o solo permanentemente, impedindo que seja carregado pelo vento. É uma solução natural e duradoura. Questão sobre soluções sustentáveis."
    },
    {
        tipo: "multipla_escolha",
        pergunta: "Considerando que a atmosfera é uma camada de ar que envolve todo o planeta, o que aconteceria se não existisse atmosfera?",
        opcoes: [
            "Nada mudaria",
            "A vida como conhecemos não seria possível, pois não haveria ar para respirar",
            "Ficaria mais quente",
            "Haveria mais chuva"
        ],
        respostaCorreta: "A vida como conhecemos não seria possível, pois não haveria ar para respirar",
        explicacao: "Sem atmosfera, não haveria ar para respirar, proteção contra radiação solar, ou condições para existência de água líquida. A vida como conhecemos depende completamente da atmosfera. Questão sobre dependência sistêmica."
    },
    {
        tipo: "multipla_escolha",
        pergunta: "Por que instalar filtros nas chaminés das fábricas é uma solução mais eficaz do que apenas plantar árvores para combater a poluição industrial?",
        opcoes: [
            "Porque árvores não absorvem poluição",
            "Porque filtros impedem que poluentes entrem no ar desde o início, enquanto árvores só absorvem parte da poluição já liberada",
            "Porque filtros são mais baratos",
            "Porque árvores poluem o ar"
        ],
        respostaCorreta: "Porque filtros impedem que poluentes entrem no ar desde o início, enquanto árvores só absorvem parte da poluição já liberada",
        explicacao: "É mais eficaz prevenir a poluição na fonte (filtros) do que tentar remediar depois (árvores). Filtros capturam poluentes antes de entrarem no ar, enquanto árvores só podem absorver parte do que já foi liberado. Questão sobre prevenção vs remediação."
    },
    {
        tipo: "multipla_escolha",
        pergunta: "Se você comparar uma floresta tropical com muita chuva e uma região desértica com pouca chuva, qual teria maior diversidade de tipos de plantas?",
        opcoes: [
            "A região desértica",
            "A floresta tropical, pois água e luz solar abundantes permitem maior variedade de plantas",
            "Ambas teriam a mesma diversidade",
            "Nenhuma teria plantas"
        ],
        respostaCorreta: "A floresta tropical, pois água e luz solar abundantes permitem maior variedade de plantas",
        explicacao: "Maior disponibilidade de recursos (água, luz solar) permite que mais tipos diferentes de plantas sobrevivam, resultando em maior diversidade. Regiões com recursos limitados têm menos diversidade. Questão sobre relação entre recursos e biodiversidade."
    },
    {
        tipo: "multipla_escolha",
        pergunta: "Analisando o experimento do filtro de papel na janela, por que é importante comparar filtros de diferentes bairros em vez de usar apenas um?",
        opcoes: [
            "Para gastar mais filtros",
            "Para identificar quais áreas têm mais poluição e onde são necessárias ações de melhoria",
            "Porque um filtro não é suficiente",
            "Para decorar as janelas"
        ],
        respostaCorreta: "Para identificar quais áreas têm mais poluição e onde são necessárias ações de melhoria",
        explicacao: "Comparar diferentes locais permite identificar padrões e áreas problemáticas, direcionando ações de melhoria onde são mais necessárias. É um princípio importante de investigação científica: comparação. Questão sobre método científico comparativo."
    },
    {
        tipo: "multipla_escolha",
        pergunta: "Se uma cidade quer reduzir a poluição do ar, por que incentivar o uso de bicicletas seria uma boa estratégia?",
        opcoes: [
            "Porque bicicletas são mais rápidas",
            "Porque bicicletas não queimam combustível e não liberam poluentes no ar",
            "Porque bicicletas são mais baratas",
            "Porque bicicletas fazem exercício"
        ],
        respostaCorreta: "Porque bicicletas não queimam combustível e não liberam poluentes no ar",
        explicacao: "Bicicletas são movidas por força humana, não queimam combustível e não liberam poluentes. Substituir carros por bicicletas reduz diretamente a poluição do ar. Questão sobre transporte sustentável."
    },
    {
        tipo: "multipla_escolha",
        pergunta: "Por que a exploração consciente da vegetação é importante mesmo quando precisamos usar recursos naturais?",
        opcoes: [
            "Para economizar dinheiro",
            "Para equilibrar as necessidades humanas com a preservação do meio ambiente e garantir recursos para o futuro",
            "Para plantar mais árvores",
            "Para fazer leis"
        ],
        respostaCorreta: "Para equilibrar as necessidades humanas com a preservação do meio ambiente e garantir recursos para o futuro",
        explicacao: "Exploração consciente significa usar recursos de forma que atenda necessidades atuais sem comprometer a capacidade das futuras gerações de atenderem suas próprias necessidades. É o conceito de sustentabilidade. Questão sobre desenvolvimento sustentável."
    },
    {
        tipo: "multipla_escolha",
        pergunta: "Se você observar que nuvens de areia em tempestades podem atingir 15 metros de altura, o que isso indica sobre a força dos ventos nessas situações?",
        opcoes: [
            "Os ventos são fracos",
            "Os ventos são extremamente fortes para conseguir levantar e manter areia a essa altura",
            "Não há vento nas tempestades de areia",
            "A areia é muito leve"
        ],
        respostaCorreta: "Os ventos são extremamente fortes para conseguir levantar e manter areia a essa altura",
        explicacao: "Para levantar areia (que é relativamente pesada) a 15 metros de altura e mantê-la suspensa, os ventos precisam ser extremamente fortes. A altura da nuvem de areia é um indicador da força do vento. Questão sobre inferência a partir de observações."
    },
    {
        tipo: "multipla_escolha",
        pergunta: "Comparando diferentes fontes de energia, por que fontes limpas como energia eólica são consideradas melhores para o futuro?",
        opcoes: [
            "Porque são mais baratas",
            "Porque são renováveis e não poluem, garantindo energia sem degradar o meio ambiente para futuras gerações",
            "Porque produzem mais energia",
            "Porque são mais fáceis de construir"
        ],
        respostaCorreta: "Porque são renováveis e não poluem, garantindo energia sem degradar o meio ambiente para futuras gerações",
        explicacao: "Fontes limpas como energia eólica são renováveis (o vento não acaba) e não poluem durante a produção de energia, permitindo atender necessidades energéticas sem comprometer o meio ambiente. Questão sobre sustentabilidade energética."
    },
    {
        tipo: "multipla_escolha",
        pergunta: "Se uma região costumava ter ar limpo mas agora tem ar poluído, e a única mudança foi o aumento de fábricas e carros, qual conclusão podemos tirar?",
        opcoes: [
            "Fábricas e carros melhoram a qualidade do ar",
            "Existe uma relação de causa e efeito entre aumento de fábricas/carros e poluição do ar",
            "A poluição veio de outro lugar",
            "Não há relação entre as mudanças"
        ],
        respostaCorreta: "Existe uma relação de causa e efeito entre aumento de fábricas/carros e poluição do ar",
        explicacao: "Quando uma mudança (aumento de fábricas/carros) é seguida por outra (poluição do ar), e não há outras mudanças significativas, podemos inferir uma relação de causa e efeito. Questão sobre raciocínio causal."
    },
    {
        tipo: "multipla_escolha",
        pergunta: "Por que é importante criar cartazes com propostas para melhorar a qualidade do ar, como sugerido no capítulo?",
        opcoes: [
            "Para decorar a escola",
            "Para conscientizar as pessoas sobre o problema e mobilizar ações coletivas de melhoria",
            "Para praticar desenho",
            "Para gastar papel"
        ],
        respostaCorreta: "Para conscientizar as pessoas sobre o problema e mobilizar ações coletivas de melhoria",
        explicacao: "Cartazes são ferramentas de comunicação que ajudam a conscientizar a comunidade sobre problemas ambientais e mobilizar ações coletivas. Mudanças ambientais significativas requerem participação de muitas pessoas. Questão sobre consciência socioambiental."
    },
    {
        tipo: "multipla_escolha",
        pergunta: "Se você tivesse que explicar para alguém por que não podemos ver o ar, mas sabemos que ele existe, qual seria a melhor explicação?",
        opcoes: [
            "Porque o ar é mágico",
            "Porque o ar é feito de gases transparentes, mas podemos observar seus efeitos como vento, movimento de objetos e nossa própria respiração",
            "Porque o ar não existe",
            "Porque nossos olhos não funcionam bem"
        ],
        respostaCorreta: "Porque o ar é feito de gases transparentes, mas podemos observar seus efeitos como vento, movimento de objetos e nossa própria respiração",
        explicacao: "Esta resposta combina a explicação científica (gases transparentes) com evidências observáveis (efeitos do ar). É um exemplo de como a ciência estuda fenômenos invisíveis através de seus efeitos. Questão sobre raciocínio científico."
    },
    {
        tipo: "multipla_escolha",
        pergunta: "Analisando todos os benefícios da vegetação mencionados no capítulo, qual afirmação melhor resume sua importância?",
        opcoes: [
            "A vegetação é importante apenas para animais",
            "A vegetação é fundamental para a manutenção de múltiplos recursos naturais e para a qualidade de vida no planeta",
            "A vegetação serve apenas para decoração",
            "A vegetação não é muito importante"
        ],
        respostaCorreta: "A vegetação é fundamental para a manutenção de múltiplos recursos naturais e para a qualidade de vida no planeta",
        explicacao: "A vegetação afeta ar (produz oxigênio, filtra impurezas), água (protege rios, facilita infiltração), solo (previne erosão) e fornece alimento e abrigo. É fundamental para múltiplos aspectos da vida. Questão de síntese integrativa."
    },
    {
        tipo: "multipla_escolha",
        pergunta: "Se você fosse criar um plano de ação para melhorar o meio ambiente da sua escola, qual combinação de ações teria o maior impacto positivo?",
        opcoes: [
            "Apenas pintar as paredes",
            "Plantar árvores, incentivar uso de bicicletas, reduzir uso de papel e criar campanhas de conscientização",
            "Apenas fazer cartazes",
            "Não fazer nada"
        ],
        respostaCorreta: "Plantar árvores, incentivar uso de bicicletas, reduzir uso de papel e criar campanhas de conscientização",
        explicacao: "Um plano eficaz combina múltiplas ações que se reforçam: árvores melhoram ar e solo, bicicletas reduzem poluição, menos papel preserva vegetação, e conscientização mobiliza mais pessoas. Ações integradas têm maior impacto. Questão sobre planejamento integrado."
    }
];

