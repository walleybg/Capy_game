// Questões do Capítulo 6 de História - "Da formação à reforma das cidades"
const questoesHistoria = [
    // --- GRUPO 1: MÚLTIPLA ESCOLHA (10 questões) ---
    {
        id: 1,
        titulo: "Contexto Geral da Transformação Urbana",
        contexto: "Observe as imagens de abertura do capítulo, que retratam a cidade de Natal, no Rio Grande do Norte, em 1957 e atualmente. O texto afirma: \"Ao longo da história do Brasil, várias cidades foram formadas e se transformaram bastante com a passagem do tempo.\"",
        pergunta: "Marque a opção mais adequada sobre a afirmação acima.",
        tipo: "multipla_escolha",
        opcoes: [
            "As cidades brasileiras mantiveram suas características originais ao longo do tempo.",
            "A formação e transformação das cidades são processos estáticos na história do Brasil.",
            "As cidades brasileiras passaram por constantes mudanças e evoluíram ao longo da história.",
            "Somente cidades planejadas sofrem transformações com o tempo."
        ],
        respostaCorreta: 2,
        explicacao: "As cidades brasileiras passaram por constantes mudanças e evoluíram ao longo da história, adaptando-se às necessidades de seus habitantes e às transformações sociais e econômicas."
    },
    {
        id: 2,
        titulo: "Características das Cidades Espontâneas",
        contexto: "Leia o trecho a seguir: \"No Brasil, os primeiros povoamentos urbanos surgiram por volta de 1530 (...) Essas vilas surgiram de pequenos povoados e continuaram crescendo até se tornarem cidades conhecidas como espontâneas. Essas cidades têm esse nome por terem surgido e se desenvolvido sem planejamento.\"",
        pergunta: "Com base no texto acima, qual característica NÃO se aplica às cidades espontâneas?",
        tipo: "multipla_escolha",
        opcoes: [
            "Surgiram de pequenos povoados e cresceram sem planejamento.",
            "Precisaram ser reformadas e modernizadas ao longo do tempo.",
            "Suas ruas se tornaram mais largas e foram feitas novas construções.",
            "Foram cuidadosamente projetadas em um papel antes de serem construídas."
        ],
        respostaCorreta: 3,
        explicacao: "Cidades espontâneas, por definição, não foram cuidadosamente projetadas em papel antes de serem construídas. Elas surgiram e se desenvolveram naturalmente, sem planejamento prévio."
    },
    {
        id: 3,
        titulo: "A Primeira Vila Brasileira",
        contexto: "O texto descreve: \"A primeira vila brasileira foi fundada em 1532, nas proximidades do mar, no estado de São Paulo. Chamada de São Vicente, essa vila cresceu aos poucos até se tornar uma cidade. Isso aconteceu por causa do comércio de mercadorias pelo porto, da criação de gado, do cultivo de alimentos para o consumo da população local e, principalmente, devido aos engenhos, construídos pelos portugueses para produzir açúcar. Em 1542, grande parte da Vila de São Vicente foi destruída pelo mar, que invadiu ruas, casas e a igreja. Assim, a vila precisou ser reconstruída um pouco mais distante da praia.\"",
        pergunta: "Todas as afirmativas sobre a Vila de São Vicente são corretas, exceto:",
        tipo: "multipla_escolha",
        opcoes: [
            "Foi a primeira vila brasileira, fundada em 1532.",
            "Seu crescimento foi impulsionado pelo comércio, gado e engenhos de açúcar.",
            "Sofreu destruição por uma invasão do mar em 1542.",
            "Foi planejada desde o início para ser uma capital de estado."
        ],
        respostaCorreta: 3,
        explicacao: "São Vicente não foi planejada para ser uma capital de estado. Era uma vila que cresceu espontaneamente devido às atividades econômicas da região."
    },
    {
        id: 4,
        titulo: "As Reformas Holandesas em Recife",
        contexto: "De acordo com o texto: \"A cidade de Recife, no estado de Pernambuco, passou por uma reforma urbana entre os anos de 1637 e 1644, quando era administrada por holandeses. Nessa época, os holandeses construíram ruas, pontes, casas, jardim botânico e zoológico na cidade. As construções demonstravam a riqueza de parte da população.\"",
        pergunta: "Marque a opção que não reflete conceitos abordados no texto sobre as reformas holandesas em Recife.",
        tipo: "multipla_escolha",
        opcoes: [
            "A administração holandesa em Recife ocorreu entre 1637 e 1644.",
            "Foram construídas ruas, pontes, casas e jardins botânicos.",
            "As reformas indicavam a riqueza de parte da população.",
            "Os holandeses implementaram um projeto de construção de uma nova capital no interior do país."
        ],
        respostaCorreta: 3,
        explicacao: "O texto não menciona que os holandeses implementaram um projeto de construção de uma nova capital no interior. As reformas foram focadas na própria cidade de Recife."
    },
    {
        id: 5,
        titulo: "O Impacto da Família Real no Rio de Janeiro",
        contexto: "O capítulo menciona que: \"Entre os anos de 1808 e 1821, outra cidade brasileira foi reformada: o Rio de Janeiro. Nessa época, a família real portuguesa estava em conflito com a França e resolveu deixar Portugal para fugir de uma possível guerra. Como, nesse período, o Brasil também era administrado pelos portugueses, a família real decidiu partir em direção ao Rio de Janeiro, trazendo consigo soldados, comerciantes e funcionários públicos, de modo que o número de habitantes da região aumentou consideravelmente.\"",
        pergunta: "Sobre as reformas no Rio de Janeiro e a chegada da família real, qual a opção mais adequada?",
        tipo: "multipla_escolha",
        opcoes: [
            "As reformas do Rio de Janeiro ocorreram antes da chegada da família real portuguesa.",
            "A chegada da família real não teve impacto no número de habitantes do Rio de Janeiro.",
            "A família real portuguesa fugiu da França e se estabeleceu no Rio de Janeiro, causando um aumento populacional e reformas urbanas.",
            "O Rio de Janeiro foi a primeira cidade brasileira a ser totalmente planejada pelos portugueses."
        ],
        respostaCorreta: 2,
        explicacao: "A família real portuguesa fugiu da França e se estabeleceu no Rio de Janeiro, trazendo muitas pessoas e causando um aumento populacional significativo, o que levou a reformas urbanas na cidade."
    },
    {
        id: 6,
        titulo: "Cidades Planejadas vs. Espontâneas",
        contexto: "Leia o trecho: \"Nem todas as cidades brasileiras surgiram a partir de povoados; algumas delas foram projetadas antes de serem construídas. Essas cidades são conhecidas como cidades planejadas. (...) Algumas cidades brasileiras se formaram espontaneamente, isto é, a partir de povoados que, com o tempo, foram crescendo até se transformar em vilas e, depois, em cidades. Essas cidades são conhecidas como cidades espontâneas.\"",
        pergunta: "Analisando o texto, qual a principal diferença entre cidades espontâneas e cidades planejadas?",
        tipo: "multipla_escolha",
        opcoes: [
            "Cidades espontâneas são sempre maiores que cidades planejadas.",
            "Cidades planejadas surgem de povoados que crescem com o tempo.",
            "Cidades planejadas são projetadas antes de serem construídas, enquanto as espontâneas surgem e se desenvolvem sem um plano inicial.",
            "Cidades espontâneas não passam por reformas urbanas, diferentemente das planejadas."
        ],
        respostaCorreta: 2,
        explicacao: "A principal diferença é que cidades planejadas são projetadas antes de serem construídas, enquanto as espontâneas surgem e se desenvolvem naturalmente sem um plano inicial."
    },
    {
        id: 7,
        titulo: "Características de Brasília",
        contexto: "O capítulo descreve: \"Brasília é uma cidade totalmente planejada e foi construída para ser a capital do país. Em pouco mais de três anos, milhares de trabalhadores de diversos lugares do Brasil trabalharam em sua construção.\"",
        pergunta: "Todas as afirmações sobre Brasília são corretas, exceto:",
        tipo: "multipla_escolha",
        opcoes: [
            "É uma cidade totalmente planejada.",
            "Foi construída para ser a capital do país.",
            "Milhares de trabalhadores de diversas regiões do Brasil participaram de sua construção.",
            "Sua construção levou várias décadas para ser concluída, devido à sua complexidade."
        ],
        respostaCorreta: 3,
        explicacao: "Brasília foi construída em pouco mais de três anos, não várias décadas. A construção foi relativamente rápida considerando a magnitude do projeto."
    },
    {
        id: 8,
        titulo: "Preservação do Patrimônio Histórico",
        contexto: "O texto destaca a importância de: \"Cuidar dos museus é uma ação fundamental. Por isso, eu convido você a ser protagonista de um processo de mudança, pensando em formas de conservar esses patrimônios tão importantes.\" Ele também menciona o incêndio no Museu Nacional em 2018, que destruiu grande parte do acervo.",
        pergunta: "Considerando a importância do patrimônio histórico, como o Museu Nacional, qual a opção mais adequada para descrever a relevância de sua conservação?",
        tipo: "multipla_escolha",
        opcoes: [
            "A conservação de museus é importante apenas para pesquisadores e historiadores.",
            "Museus, como o Museu Nacional, são importantes apenas para o turismo local.",
            "A perda de um museu, como o Museu Nacional em 2018, afeta somente a estrutura física do prédio.",
            "A conservação de museus e acervos históricos é crucial para a memória do Brasil e da humanidade, pois eles guardam informações e reflexões importantes para todos."
        ],
        respostaCorreta: 3,
        explicacao: "A conservação de museus e acervos históricos é fundamental para preservar a memória coletiva, oferecendo conhecimento e reflexões importantes para toda a sociedade."
    },
    {
        id: 9,
        titulo: "Exemplos de Cidades Planejadas",
        contexto: "No capítulo, são citados exemplos: \"Teresina, Belo Horizonte e Palmas são alguns exemplos de cidades brasileiras planejadas.\" E também: \"Goiânia foi a primeira cidade brasileira planejada no século 20 (...). Salvador (...) também é considerada um município planejado.\"",
        pergunta: "Marque a opção que apresenta apenas cidades explicitamente mencionadas como \"planejadas\" no texto.",
        tipo: "multipla_escolha",
        opcoes: [
            "Teresina, Salvador e Curitiba.",
            "Belo Horizonte, Palmas e Goiânia.",
            "Curitiba, Rio de Janeiro e São Vicente.",
            "São Vicente, Recife e Manaus."
        ],
        respostaCorreta: 1,
        explicacao: "Belo Horizonte, Palmas e Goiânia são explicitamente mencionadas no texto como exemplos de cidades planejadas."
    },
    {
        id: 10,
        titulo: "A História do Viaduto do Chá",
        contexto: "O texto descreve o \"Viaduto do Chá, inaugurado em 1892, foi o primeiro viaduto da cidade de São Paulo. (...) A construção desse viaduto tinha como objetivo ligar a Rua Direita com a Rua do Chá (atual Rua Barão de Itapetininga), no centro da cidade. Em 1938, o velho viaduto com piso de madeira foi demolido, dando lugar a outro, de concreto, com o dobro de largura.\"",
        pergunta: "Analisando a história do Viaduto do Chá, qual das seguintes afirmativas está incorreta?",
        tipo: "multipla_escolha",
        opcoes: [
            "Foi inaugurado em 1892 como o primeiro viaduto de São Paulo.",
            "Seu objetivo inicial era ligar duas ruas importantes no centro da cidade.",
            "O viaduto original, de madeira, foi demolido e substituído por um de concreto.",
            "O Viaduto do Chá foi construído para ser uma importante ponte sobre um rio navegável."
        ],
        respostaCorreta: 3,
        explicacao: "O texto não menciona que o Viaduto do Chá foi construído sobre um rio navegável. Seu objetivo era ligar duas ruas no centro da cidade."
    },

    // --- GRUPO 2: VERDADEIRO OU FALSO (10 questões) ---
    {
        id: 11,
        titulo: "Transformação das Cidades Brasileiras",
        contexto: "O capítulo inicia afirmando que \"Ao longo da história do Brasil, várias cidades foram formadas e se transformaram bastante com a passagem do tempo.\"",
        pergunta: "Analise as afirmações sobre a transformação das cidades brasileiras:",
        tipo: "verdadeiro_falso",
        afirmacoes: [
            "A paisagem urbana de Natal permaneceu a mesma entre 1957 e os dias atuais.",
            "A formação e transformação das cidades são fenômenos que ocorrem ao longo do tempo.",
            "As cidades brasileiras se modificam devido a fatores como o crescimento populacional e necessidades dos habitantes.",
            "O capítulo 6 foca apenas na formação de cidades, sem abordar suas reformas."
        ],
        opcoes: [
            "F, V, V, F",
            "V, F, V, F",
            "F, V, F, V",
            "V, V, F, F"
        ],
        respostaCorreta: "F, V, V, F",
        explicacao: "I. Falso (a paisagem mudou). II. Verdadeiro. III. Verdadeiro. IV. Falso (aborda formação e reformas)."
    },
    {
        id: 12,
        titulo: "Os Primeiros Povoamentos Urbanos",
        contexto: "O texto informa que \"No Brasil, os primeiros povoamentos urbanos surgiram por volta de 1530, quando os portugueses passaram a morar no país. A partir de então, vilas com casas, igrejas, comércios, entre outros estabelecimentos, foram sendo construídas.\"",
        pergunta: "Analise as afirmações sobre os primeiros povoamentos urbanos:",
        tipo: "verdadeiro_falso",
        afirmacoes: [
            "Os primeiros povoamentos urbanos no Brasil surgiram antes da chegada dos portugueses.",
            "As vilas iniciais eram construídas com casas, igrejas e comércios.",
            "As primeiras vilas não se tornaram cidades, permanecendo como povoados.",
            "As necessidades dos habitantes impulsionaram reformas e modernizações das vilas."
        ],
        opcoes: [
            "V, F, V, F",
            "F, V, F, V",
            "F, V, V, F",
            "V, F, F, V"
        ],
        respostaCorreta: "F, V, F, V",
        explicacao: "I. Falso (surgiram por volta de 1530 com os portugueses). II. Verdadeiro. III. Falso (muitas se tornaram cidades). IV. Verdadeiro."
    },
    {
        id: 13,
        titulo: "A História de São Vicente",
        contexto: "O capítulo relata que \"A primeira vila brasileira foi fundada em 1532 (...) Em 1542, grande parte da Vila de São Vicente foi destruída pelo mar, que invadiu ruas, casas e a igreja. Assim, a vila precisou ser reconstruída um pouco mais distante da praia.\"",
        pergunta: "Analise as afirmações sobre São Vicente:",
        tipo: "verdadeiro_falso",
        afirmacoes: [
            "São Vicente foi a primeira vila brasileira e surgiu no interior do Brasil.",
            "O desenvolvimento de São Vicente foi impulsionado por atividades econômicas como o comércio e a produção de açúcar.",
            "A vila de São Vicente nunca sofreu nenhuma catástrofe natural.",
            "Após ser destruída, São Vicente foi reconstruída em um local diferente, mais distante do mar."
        ],
        opcoes: [
            "F, V, F, V",
            "V, V, F, F",
            "F, F, V, V",
            "V, F, V, F"
        ],
        respostaCorreta: "F, V, F, V",
        explicacao: "I. Falso (surgiu nas proximidades do mar). II. Verdadeiro. III. Falso (foi destruída pelo mar). IV. Verdadeiro."
    },
    {
        id: 14,
        titulo: "A Administração Holandesa em Recife",
        contexto: "De acordo com o texto, \"A cidade de Recife, no estado de Pernambuco, passou por uma reforma urbana entre os anos de 1637 e 1644, quando era administrada por holandeses. Nessa época, os holandeses construíram ruas, pontes, casas, jardim botânico e zoológico na cidade.\"",
        pergunta: "Analise as afirmações sobre a administração holandesa em Recife:",
        tipo: "verdadeiro_falso",
        afirmacoes: [
            "Recife passou por reformas urbanas sob administração portuguesa.",
            "As reformas em Recife incluíram a construção de pontes e jardins botânicos.",
            "O período de administração holandesa em Recife durou menos de 5 anos.",
            "As construções realizadas pelos holandeses em Recife refletiam a riqueza da população local."
        ],
        opcoes: [
            "V, V, F, F",
            "F, V, F, V",
            "V, F, V, F",
            "F, F, V, V"
        ],
        respostaCorreta: "F, V, F, V",
        explicacao: "I. Falso (foi sob administração holandesa). II. Verdadeiro. III. Falso (durou 7 anos, de 1637 a 1644). IV. Verdadeiro."
    },
    {
        id: 15,
        titulo: "As Reformas no Rio de Janeiro",
        contexto: "O capítulo descreve que \"Entre os anos de 1808 e 1821, outra cidade brasileira foi reformada: o Rio de Janeiro. (...) a família real portuguesa decidiu partir em direção ao Rio de Janeiro, trazendo consigo soldados, comerciantes e funcionários públicos, de modo que o número de habitantes da região aumentou consideravelmente.\" Também é mencionado que \"O Jardim Botânico do Rio de Janeiro, construído há mais de 200 anos, é um espaço muito antigo na cidade.\"",
        pergunta: "Analise as afirmações sobre as reformas no Rio de Janeiro:",
        tipo: "verdadeiro_falso",
        afirmacoes: [
            "As reformas no Rio de Janeiro ocorreram durante o período em que a família real portuguesa residiu na cidade.",
            "A vinda da família real causou uma diminuição da população no Rio de Janeiro.",
            "O Jardim Botânico do Rio de Janeiro é um exemplo de construção recente na cidade.",
            "As reformas urbanas no Rio de Janeiro visavam apenas atender às necessidades da família real, sem impactar a população."
        ],
        opcoes: [
            "V, F, F, F",
            "F, V, F, V",
            "V, F, V, F",
            "F, V, V, F"
        ],
        respostaCorreta: "V, F, F, F",
        explicacao: "I. Verdadeiro. II. Falso (causou aumento populacional). III. Falso (tem mais de 200 anos). IV. Falso (impactaram toda a cidade)."
    },
    {
        id: 16,
        titulo: "Compreendendo Cidades Planejadas",
        contexto: "O texto explica: \"Nem todas as cidades brasileiras surgiram a partir de povoados; algumas delas foram projetadas antes de serem construídas. Essas cidades são conhecidas como cidades planejadas. (...) Alguns exemplos de cidades brasileiras planejadas: Teresina, Belo Horizonte e Palmas.\"",
        pergunta: "Analise as afirmações sobre cidades planejadas:",
        tipo: "verdadeiro_falso",
        afirmacoes: [
            "Todas as cidades brasileiras se desenvolveram de forma espontânea, sem planejamento prévio.",
            "Cidades planejadas são aquelas que são projetadas antes de sua construção.",
            "Teresina e Belo Horizonte são exemplos de cidades que surgiram espontaneamente.",
            "O planejamento de uma cidade considera a localização de residências, parques e escolas."
        ],
        opcoes: [
            "F, V, F, V",
            "V, F, V, F",
            "F, V, V, F",
            "V, V, F, V"
        ],
        respostaCorreta: "F, V, F, V",
        explicacao: "I. Falso (algumas foram planejadas). II. Verdadeiro. III. Falso (são exemplos de cidades planejadas). IV. Verdadeiro."
    },
    {
        id: 17,
        titulo: "A Construção de Brasília",
        contexto: "O capítulo detalha que \"Brasília é uma cidade totalmente planejada e foi construída para ser a capital do país. Em pouco mais de três anos, milhares de trabalhadores de diversos lugares do Brasil trabalharam em sua construção.\"",
        pergunta: "Analise as afirmações sobre Brasília:",
        tipo: "verdadeiro_falso",
        afirmacoes: [
            "Brasília é um exemplo de cidade espontânea que cresceu sem planejamento.",
            "A construção de Brasília durou mais de uma década.",
            "Trabalhadores de diferentes regiões do Brasil foram essenciais para a construção de Brasília.",
            "Brasília foi planejada para ser uma capital política, com avenidas largas e diversas praças."
        ],
        opcoes: [
            "V, F, V, F",
            "F, F, V, V",
            "F, V, F, V",
            "V, V, F, F"
        ],
        respostaCorreta: "F, F, V, V",
        explicacao: "I. Falso (é totalmente planejada). II. Falso (foi construída em pouco mais de três anos). III. Verdadeiro. IV. Verdadeiro."
    },
    {
        id: 18,
        titulo: "Planejamento em Goiânia e Salvador",
        contexto: "O texto afirma: \"Goiânia foi a primeira cidade brasileira planejada no século 20 (...). Salvador (...) também é considerada um município planejado. O planejamento a colocava como uma cidade administrativa e militar.\"",
        pergunta: "Analise as afirmações sobre Goiânia e Salvador:",
        tipo: "verdadeiro_falso",
        afirmacoes: [
            "Goiânia foi planejada no século 20 e teve influência do estilo Art Deco.",
            "Salvador é uma cidade que cresceu de forma totalmente espontânea.",
            "O planejamento de Salvador visava sua função administrativa e militar.",
            "Goiânia e Salvador são exemplos de cidades que não passaram por reformas significativas."
        ],
        opcoes: [
            "V, F, V, F",
            "F, V, F, V",
            "V, F, F, V",
            "F, F, V, V"
        ],
        respostaCorreta: "V, F, V, F",
        explicacao: "I. Verdadeiro. II. Falso (é considerada planejada). III. Verdadeiro. IV. Falso (passaram por reformas)."
    },
    {
        id: 19,
        titulo: "Curitiba, a \"Capital Ecológica\"",
        contexto: "O capítulo descreve: \"Curitiba, apesar de não ter sido planejada (...), a cidade de Curitiba passou por um processo de reestruturação (...). Os ônibus biarticulados, os canais exclusivos, o programa de coleta de lixo reciclável e o grande número de parques e áreas verdes fizeram a cidade adotar o título de 'capital ecológica'.\"",
        pergunta: "Analise as afirmações sobre Curitiba:",
        tipo: "verdadeiro_falso",
        afirmacoes: [
            "Curitiba foi planejada desde sua fundação para ser uma \"capital ecológica\".",
            "O sistema de ônibus biarticulados contribuiu para a reestruturação urbana de Curitiba.",
            "Curitiba possui poucos parques e áreas verdes.",
            "O programa de coleta de lixo reciclável é uma das características que a levaram a ser conhecida como \"capital ecológica\"."
        ],
        opcoes: [
            "V, V, F, F",
            "F, V, F, V",
            "V, F, V, F",
            "F, F, V, V"
        ],
        respostaCorreta: "F, V, F, V",
        explicacao: "I. Falso (não foi planejada inicialmente para isso). II. Verdadeiro. III. Falso (possui grande número de parques). IV. Verdadeiro."
    },
    {
        id: 20,
        titulo: "Razões para Reformas Urbanas",
        contexto: "O capítulo sintetiza: \"Para atender às necessidades de seus habitantes, muitas cidades passaram por reformas. São Vicente, Recife, Rio de Janeiro e São Paulo são algumas delas.\"",
        pergunta: "Analise as afirmações sobre reformas urbanas:",
        tipo: "verdadeiro_falso",
        afirmacoes: [
            "As reformas urbanas sempre visam melhorar a qualidade de vida dos habitantes.",
            "São Vicente e Recife são exemplos de cidades que nunca passaram por reformas.",
            "Reformas urbanas são exclusivas de cidades planejadas.",
            "O objetivo das reformas pode ser a abertura de ruas e avenidas ou a criação de praças."
        ],
        opcoes: [
            "V, F, F, V",
            "F, V, V, F",
            "V, V, F, F",
            "F, F, V, V"
        ],
        respostaCorreta: "V, F, F, V",
        explicacao: "I. Verdadeiro. II. Falso (são exemplos de cidades que passaram por reformas). III. Falso (ocorrem em ambos os tipos). IV. Verdadeiro."
    },

    // --- GRUPO 3: PERGUNTAS ABERTAS (7 questões) ---
    {
        id: 21,
        titulo: "O que são \"cidades espontâneas\" e como elas se desenvolvem?",
        contexto: "",
        pergunta: "O que são \"cidades espontâneas\" e como elas se desenvolvem?",
        tipo: "aberta",
        respostaEsperada: "Cidades espontâneas são aquelas que surgiram e se desenvolveram sem planejamento prévio. Elas se formaram a partir de pequenos povoados que, com o tempo, foram crescendo até se transformar em vilas e, depois, em cidades. Esse crescimento aconteceu de forma natural, conforme as necessidades dos habitantes e as atividades econômicas da região.",
        explicacao: "As cidades espontâneas representam a maioria das cidades brasileiras históricas, que cresceram organicamente ao longo do tempo."
    },
    {
        id: 22,
        titulo: "Cite duas razões que levaram a Vila de São Vicente a crescer e se tornar uma cidade.",
        contexto: "",
        pergunta: "Cite duas razões que levaram a Vila de São Vicente a crescer e se tornar uma cidade.",
        tipo: "aberta",
        respostaEsperada: "Duas razões principais foram: 1) O comércio de mercadorias pelo porto; 2) A construção de engenhos pelos portugueses para produzir açúcar. Outras razões incluem a criação de gado e o cultivo de alimentos para consumo local.",
        explicacao: "O crescimento de São Vicente estava diretamente ligado às atividades econômicas que se desenvolveram na região."
    },
    {
        id: 23,
        titulo: "Como a chegada da família real portuguesa impactou o Rio de Janeiro no início do século XIX?",
        contexto: "",
        pergunta: "Como a chegada da família real portuguesa impactou o Rio de Janeiro no início do século XIX?",
        tipo: "aberta",
        respostaEsperada: "A chegada da família real portuguesa (1808-1821) causou um grande aumento populacional no Rio de Janeiro, pois trouxe consigo soldados, comerciantes e funcionários públicos. Esse crescimento populacional levou a reformas urbanas na cidade para atender às novas necessidades e à importância política que o Rio adquiriu como sede do governo português.",
        explicacao: "A presença da corte portuguesa transformou o Rio de Janeiro em um importante centro político e econômico."
    },
    {
        id: 24,
        titulo: "O que são \"cidades planejadas\" e qual a principal característica que as diferencia das espontâneas?",
        contexto: "",
        pergunta: "O que são \"cidades planejadas\" e qual a principal característica que as diferencia das espontâneas?",
        tipo: "aberta",
        respostaEsperada: "Cidades planejadas são aquelas que foram projetadas antes de serem construídas. A principal diferença é que elas têm um plano inicial que considera a localização de residências, parques, escolas e outros elementos urbanos, enquanto as cidades espontâneas crescem naturalmente sem um projeto prévio.",
        explicacao: "O planejamento urbano permite uma organização mais eficiente do espaço e dos serviços da cidade."
    },
    {
        id: 25,
        titulo: "De acordo com o texto, qual a função principal para a qual Brasília foi planejada?",
        contexto: "",
        pergunta: "De acordo com o texto, qual a função principal para a qual Brasília foi planejada?",
        tipo: "aberta",
        respostaEsperada: "Brasília foi planejada para ser a capital do país, concentrando as funções políticas e administrativas do Brasil. Foi projetada como uma capital política, com avenidas largas e diversas praças.",
        explicacao: "Brasília foi construída especificamente para ser a nova capital do Brasil, concentrando os poderes executivo, legislativo e judiciário."
    },
    {
        id: 26,
        titulo: "Por que a preservação de locais como o Museu Nacional é considerada fundamental para a memória do Brasil e da humanidade?",
        contexto: "",
        pergunta: "Por que a preservação de locais como o Museu Nacional é considerada fundamental para a memória do Brasil e da humanidade?",
        tipo: "aberta",
        respostaEsperada: "A preservação de museus é fundamental porque eles guardam informações, objetos históricos e reflexões importantes sobre nossa história e cultura. Eles representam a memória coletiva da sociedade e permitem que as futuras gerações conheçam e aprendam com o passado. A perda de acervos, como no incêndio do Museu Nacional em 2018, representa uma perda irreparável de conhecimento e patrimônio cultural.",
        explicacao: "Os museus são guardiões da memória coletiva e do patrimônio cultural da humanidade."
    },
    {
        id: 27,
        titulo: "Mencione um exemplo de reforma urbana que aconteceu no Rio de Janeiro e qual era seu objetivo.",
        contexto: "",
        pergunta: "Mencione um exemplo de reforma urbana que aconteceu no Rio de Janeiro e qual era seu objetivo.",
        tipo: "aberta",
        respostaEsperada: "Um exemplo é a construção do Jardim Botânico do Rio de Janeiro, que tem mais de 200 anos. O objetivo das reformas urbanas no Rio de Janeiro era atender às necessidades da crescente população e adequar a cidade à sua nova importância como sede da família real portuguesa.",
        explicacao: "As reformas urbanas no Rio de Janeiro visavam modernizar a cidade e adequá-la ao seu novo status político."
    },

    // --- GRUPO 4: QUESTÕES DE OPINIÃO (3 questões) ---
    {
        id: 28,
        titulo: "Comunidade e Planejamento Urbano",
        contexto: "Imagine que sua comunidade está crescendo rapidamente e as ruas estão ficando muito congestionadas, com poucas áreas de lazer e transporte público ineficiente. Se você pudesse propor uma solução para melhorar a vida das pessoas, o que você sugeriria para planejar melhor o desenvolvimento dessa comunidade? Baseie-se nas ideias de cidades planejadas e reformas urbanas discutidas no capítulo.",
        pergunta: "Imagine que sua comunidade está crescendo rapidamente e as ruas estão ficando muito congestionadas, com poucas áreas de lazer e transporte público ineficiente. Se você pudesse propor uma solução para melhorar a vida das pessoas, o que você sugeriria para planejar melhor o desenvolvimento dessa comunidade? Baseie-se nas ideias de cidades planejadas e reformas urbanas discutidas no capítulo.",
        tipo: "opiniao",
        respostaEsperada: "Resposta pessoal. O estudante deve propor soluções baseadas nos conceitos estudados, como: criação de mais áreas verdes e parques, melhoria do transporte público, planejamento de ruas mais largas, criação de ciclovias, organização de espaços comerciais e residenciais, etc.",
        explicacao: "Esta questão permite ao estudante aplicar os conceitos de planejamento urbano em uma situação prática."
    },
    {
        id: 29,
        titulo: "Patrimônio Histórico vs. Desenvolvimento Moderno",
        contexto: "Recentemente, a cidade de São Luís, no Maranhão (Patrimônio Mundial da UNESCO, exemplo de cidade histórica), tem debatido a construção de um grande empreendimento moderno em uma área próxima ao seu centro histórico. Alguns argumentam que isso traria desenvolvimento econômico e empregos, enquanto outros temem que a construção descaracterize a paisagem e o patrimônio cultural da cidade. Qual sua opinião sobre essa situação? Como sua cidade poderia equilibrar o desenvolvimento com a preservação de sua história?",
        pergunta: "Recentemente, a cidade de São Luís, no Maranhão (Patrimônio Mundial da UNESCO, exemplo de cidade histórica), tem debatido a construção de um grande empreendimento moderno em uma área próxima ao seu centro histórico. Alguns argumentam que isso traria desenvolvimento econômico e empregos, enquanto outros temem que a construção descaracterize a paisagem e o patrimônio cultural da cidade. Qual sua opinião sobre essa situação? Como sua cidade poderia equilibrar o desenvolvimento com a preservação de sua história?",
        tipo: "opiniao",
        respostaEsperada: "Resposta pessoal. O estudante deve demonstrar compreensão da importância tanto do desenvolvimento econômico quanto da preservação histórica, propondo soluções equilibradas como: construção em áreas afastadas do centro histórico, projetos que respeitem a arquitetura local, investimento em turismo histórico, etc.",
        explicacao: "Esta questão desenvolve o pensamento crítico sobre a tensão entre modernização e preservação histórica."
    },
    {
        id: 30,
        titulo: "Desafios de Cidades em Crescimento",
        contexto: "Em muitas cidades brasileiras, como Natal que vimos se transformar ao longo do tempo, o crescimento rápido pode trazer desafios como a falta de moradias adequadas, a poluição e a sobrecarga dos serviços públicos. Se você fosse o prefeito dessa cidade, qual seria sua principal prioridade para resolver um desses problemas e qual ação concreta você implementaria?",
        pergunta: "Em muitas cidades brasileiras, como Natal que vimos se transformar ao longo do tempo, o crescimento rápido pode trazer desafios como a falta de moradias adequadas, a poluição e a sobrecarga dos serviços públicos. Se você fosse o prefeito dessa cidade, qual seria sua principal prioridade para resolver um desses problemas e qual ação concreta você implementaria?",
        tipo: "opiniao",
        respostaEsperada: "Resposta pessoal. O estudante deve escolher um problema específico e propor uma solução concreta, como: programas habitacionais, melhoria do transporte público, criação de áreas verdes, investimento em saneamento, etc. A resposta deve demonstrar compreensão dos desafios urbanos.",
        explicacao: "Esta questão estimula o pensamento sobre gestão pública e responsabilidade cidadã."
    }
];

// Exportar as questões para uso no jogo principal
if (typeof module !== 'undefined' && module.exports) {
    module.exports = questoesHistoria;
}
