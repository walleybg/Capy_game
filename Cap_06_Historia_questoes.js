// Questões do Capítulo 6 de História - "Da formação à reforma das cidades"
const questoesHistoria = [
    // --- GRUPO 1: MÚLTIPLA ESCOLHA (10 questões) ---
    {
        tipo: "multipla_escolha",
        titulo: "Contexto Geral da Transformação Urbana",
        contexto: "Observe as imagens de abertura do capítulo, que retratam a cidade de Natal, no Rio Grande do Norte, em 1957 e atualmente. O texto afirma: \"Ao longo da história do Brasil, várias cidades foram formadas e se transformaram bastante com a passagem do tempo.\"",
        pergunta: "Marque a opção mais adequada sobre a afirmação acima.",
        opcoes: [
            "As cidades brasileiras mantiveram suas características originais ao longo do tempo.",
            "A formação e transformação das cidades são processos estáticos na história do Brasil.",
            "As cidades brasileiras passaram por constantes mudanças e evoluíram ao longo da história.",
            "Somente cidades planejadas sofrem transformações com o tempo."
        ],
        respostaCorreta: "As cidades brasileiras passaram por constantes mudanças e evoluíram ao longo da história.",
        justificativa: "As cidades brasileiras passaram por constantes mudanças e evoluíram ao longo da história, adaptando-se às necessidades de seus habitantes e às transformações sociais e econômicas."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Características das Cidades Espontâneas",
        contexto: "Leia o trecho a seguir: \"No Brasil, os primeiros povoamentos urbanos surgiram por volta de 1530 (...) Essas vilas surgiram de pequenos povoados e continuaram crescendo até se tornarem cidades conhecidas como espontâneas. Essas cidades têm esse nome por terem surgido e se desenvolvido sem planejamento.\"",
        pergunta: "Com base no texto acima, qual característica NÃO se aplica às cidades espontâneas?",
        opcoes: [
            "Surgiram de pequenos povoados e cresceram sem planejamento.",
            "Precisaram ser reformadas e modernizadas ao longo do tempo.",
            "Suas ruas se tornaram mais largas e foram feitas novas construções.",
            "Foram cuidadosamente projetadas em um papel antes de serem construídas."
        ],
        respostaCorreta: "Foram cuidadosamente projetadas em um papel antes de serem construídas.",
        justificativa: "Cidades espontâneas, por definição, não foram cuidadosamente projetadas em papel antes de serem construídas. Elas surgiram e se desenvolveram naturalmente, sem planejamento prévio."
    },
    {
        tipo: "multipla_escolha",
        titulo: "A Primeira Vila Brasileira",
        contexto: "O texto descreve: \"A primeira vila brasileira foi fundada em 1532, nas proximidades do mar, no estado de São Paulo. Chamada de São Vicente, essa vila cresceu aos poucos até se tornar uma cidade. Isso aconteceu por causa do comércio de mercadorias pelo porto, da criação de gado, do cultivo de alimentos para o consumo da população local e, principalmente, devido aos engenhos, construídos pelos portugueses para produzir açúcar. Em 1542, grande parte da Vila de São Vicente foi destruída pelo mar, que invadiu ruas, casas e a igreja. Assim, a vila precisou ser reconstruída um pouco mais distante da praia.\"",
        pergunta: "Todas as afirmativas sobre a Vila de São Vicente são corretas, exceto:",
        opcoes: [
            "Foi a primeira vila brasileira, fundada em 1532.",
            "Seu crescimento foi impulsionado pelo comércio, gado e engenhos de açúcar.",
            "Sofreu destruição por uma invasão do mar em 1542.",
            "Foi planejada desde o início para ser uma capital de estado."
        ],
        respostaCorreta: "Foi planejada desde o início para ser uma capital de estado.",
        justificativa: "São Vicente não foi planejada para ser uma capital de estado. Era uma vila que cresceu espontaneamente devido às atividades econômicas da região."
    },
    {
        tipo: "multipla_escolha",
        titulo: "As Reformas Holandesas em Recife",
        contexto: "De acordo com o texto: \"A cidade de Recife, no estado de Pernambuco, passou por uma reforma urbana entre os anos de 1637 e 1644, quando era administrada por holandeses. Nessa época, os holandeses construíram ruas, pontes, casas, jardim botânico e zoológico na cidade. As construções demonstravam a riqueza de parte da população.\"",
        pergunta: "Marque a opção que não reflete conceitos abordados no texto sobre as reformas holandesas em Recife.",
        opcoes: [
            "A administração holandesa em Recife ocorreu entre 1637 e 1644.",
            "Foram construídas ruas, pontes, casas e jardins botânicos.",
            "As reformas indicavam a riqueza de parte da população.",
            "Os holandeses implementaram um projeto de construção de uma nova capital no interior do país."
        ],
        respostaCorreta: "Os holandeses implementaram um projeto de construção de uma nova capital no interior do país.",
        justificativa: "O texto não menciona que os holandeses implementaram um projeto de construção de uma nova capital no interior. As reformas foram focadas na própria cidade de Recife."
    },
    {
        tipo: "multipla_escolha",
        titulo: "O Impacto da Família Real no Rio de Janeiro",
        contexto: "O capítulo menciona que: \"Entre os anos de 1808 e 1821, outra cidade brasileira foi reformada: o Rio de Janeiro. Nessa época, a família real portuguesa estava em conflito com a França e resolveu deixar Portugal para fugir de uma possível guerra. Como, nesse período, o Brasil também era administrado pelos portugueses, a família real decidiu partir em direção ao Rio de Janeiro, trazendo consigo soldados, comerciantes e funcionários públicos, de modo que o número de habitantes da região aumentou consideravelmente.\"",
        pergunta: "Sobre as reformas no Rio de Janeiro e a chegada da família real, qual a opção mais adequada?",
        opcoes: [
            "As reformas do Rio de Janeiro ocorreram antes da chegada da família real portuguesa.",
            "A chegada da família real não teve impacto no número de habitantes do Rio de Janeiro.",
            "A família real portuguesa fugiu da França e se estabeleceu no Rio de Janeiro, causando um aumento populacional e reformas urbanas.",
            "O Rio de Janeiro foi a primeira cidade brasileira a ser totalmente planejada pelos portugueses."
        ],
        respostaCorreta: "A família real portuguesa fugiu da França e se estabeleceu no Rio de Janeiro, causando um aumento populacional e reformas urbanas.",
        justificativa: "A família real portuguesa fugiu da França e se estabeleceu no Rio de Janeiro, trazendo muitas pessoas e causando um aumento populacional significativo, o que levou a reformas urbanas na cidade."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Cidades Planejadas vs. Espontâneas",
        contexto: "Leia o trecho: \"Nem todas as cidades brasileiras surgiram a partir de povoados; algumas delas foram projetadas antes de serem construídas. Essas cidades são conhecidas como cidades planejadas. (...) Algumas cidades brasileiras se formaram espontaneamente, isto é, a partir de povoados que, com o tempo, foram crescendo até se transformar em vilas e, depois, em cidades. Essas cidades são conhecidas como cidades espontâneas.\"",
        pergunta: "Analisando o texto, qual a principal diferença entre cidades espontâneas e cidades planejadas?",
        opcoes: [
            "Cidades espontâneas são sempre maiores que cidades planejadas.",
            "Cidades planejadas surgem de povoados que crescem com o tempo.",
            "Cidades planejadas são projetadas antes de serem construídas, enquanto as espontâneas surgem e se desenvolvem sem um plano inicial.",
            "Cidades espontâneas não passam por reformas urbanas, diferentemente das planejadas."
        ],
        respostaCorreta: "Cidades planejadas são projetadas antes de serem construídas, enquanto as espontâneas surgem e se desenvolvem sem um plano inicial.",
        justificativa: "A principal diferença é que cidades planejadas são projetadas antes de serem construídas, enquanto as espontâneas surgem e se desenvolvem naturalmente sem um plano inicial."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Características de Brasília",
        contexto: "O capítulo descreve: \"Brasília é uma cidade totalmente planejada e foi construída para ser a capital do país. Em pouco mais de três anos, milhares de trabalhadores de diversos lugares do Brasil trabalharam em sua construção.\"",
        pergunta: "Todas as afirmações sobre Brasília são corretas, exceto:",
        opcoes: [
            "É uma cidade totalmente planejada.",
            "Foi construída para ser a capital do país.",
            "Milhares de trabalhadores de diversas regiões do Brasil participaram de sua construção.",
            "Sua construção levou várias décadas para ser concluída, devido à sua complexidade."
        ],
        respostaCorreta: "Sua construção levou várias décadas para ser concluída, devido à sua complexidade.",
        justificativa: "Brasília foi construída em pouco mais de três anos, não várias décadas. A construção foi relativamente rápida considerando a magnitude do projeto."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Preservação do Patrimônio Histórico",
        contexto: "O texto destaca a importância de: \"Cuidar dos museus é uma ação fundamental. Por isso, eu convido você a ser protagonista de um processo de mudança, pensando em formas de conservar esses patrimônios tão importantes.\" Ele também menciona o incêndio no Museu Nacional em 2018, que destruiu grande parte do acervo.",
        pergunta: "Considerando a importância do patrimônio histórico, como o Museu Nacional, qual a opção mais adequada para descrever a relevância de sua conservação?",
        opcoes: [
            "A conservação de museus é importante apenas para pesquisadores e historiadores.",
            "Museus, como o Museu Nacional, são importantes apenas para o turismo local.",
            "A perda de um museu, como o Museu Nacional em 2018, afeta somente a estrutura física do prédio.",
            "A conservação de museus e acervos históricos é crucial para a memória do Brasil e da humanidade, pois eles guardam informações e reflexões importantes para todos."
        ],
        respostaCorreta: "A conservação de museus e acervos históricos é crucial para a memória do Brasil e da humanidade, pois eles guardam informações e reflexões importantes para todos.",
        justificativa: "A conservação de museus e acervos históricos é fundamental para preservar a memória coletiva, oferecendo conhecimento e reflexões importantes para toda a sociedade."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Exemplos de Cidades Planejadas",
        contexto: "No capítulo, são citados exemplos: \"Teresina, Belo Horizonte e Palmas são alguns exemplos de cidades brasileiras planejadas.\" E também: \"Goiânia foi a primeira cidade brasileira planejada no século 20 (...). Salvador (...) também é considerada um município planejado.\"",
        pergunta: "Marque a opção que apresenta apenas cidades explicitamente mencionadas como \"planejadas\" no texto.",
        opcoes: [
            "Teresina, Salvador e Curitiba.",
            "Belo Horizonte, Palmas e Goiânia.",
            "Curitiba, Rio de Janeiro e São Vicente.",
            "São Vicente, Recife e Manaus."
        ],
        respostaCorreta: "Belo Horizonte, Palmas e Goiânia.",
        justificativa: "Belo Horizonte, Palmas e Goiânia são explicitamente mencionadas no texto como exemplos de cidades planejadas."
    },
    {
        tipo: "multipla_escolha",
        titulo: "A História do Viaduto do Chá",
        contexto: "O texto descreve o \"Viaduto do Chá, inaugurado em 1892, foi o primeiro viaduto da cidade de São Paulo. (...) A construção desse viaduto tinha como objetivo ligar a Rua Direita com a Rua do Chá (atual Rua Barão de Itapetininga), no centro da cidade. Em 1938, o velho viaduto com piso de madeira foi demolido, dando lugar a outro, de concreto, com o dobro de largura.\"",
        pergunta: "Analisando a história do Viaduto do Chá, qual das seguintes afirmativas está incorreta?",
        opcoes: [
            "Foi inaugurado em 1892 como o primeiro viaduto de São Paulo.",
            "Seu objetivo inicial era ligar duas ruas importantes no centro da cidade.",
            "O viaduto original, de madeira, foi demolido e substituído por um de concreto.",
            "O Viaduto do Chá foi construído para ser uma importante ponte sobre um rio navegável."
        ],
        respostaCorreta: "O Viaduto do Chá foi construído para ser uma importante ponte sobre um rio navegável.",
        justificativa: "O texto não menciona que o Viaduto do Chá foi construído sobre um rio navegável. Seu objetivo era ligar duas ruas no centro da cidade."
    },

    // --- GRUPO 2: VERDADEIRO OU FALSO (10 questões) ---
    {
        tipo: "verdadeiro_falso",
        titulo: "Transformação das Cidades Brasileiras",
        contexto: "O capítulo inicia afirmando que \"Ao longo da história do Brasil, várias cidades foram formadas e se transformaram bastante com a passagem do tempo.\"",
        pergunta: "Analise as afirmações sobre a transformação das cidades brasileiras:",
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
        justificativa: "I. Falso (a paisagem mudou). II. Verdadeiro. III. Verdadeiro. IV. Falso (aborda formação e reformas)."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Os Primeiros Povoamentos Urbanos",
        contexto: "O texto informa que \"No Brasil, os primeiros povoamentos urbanos surgiram por volta de 1530, quando os portugueses passaram a morar no país. A partir de então, vilas com casas, igrejas, comércios, entre outros estabelecimentos, foram sendo construídas.\"",
        pergunta: "Analise as afirmações sobre os primeiros povoamentos urbanos:",
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
        justificativa: "I. Falso (surgiram por volta de 1530 com os portugueses). II. Verdadeiro. III. Falso (muitas se tornaram cidades). IV. Verdadeiro."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "A História de São Vicente",
        contexto: "O capítulo relata que \"A primeira vila brasileira foi fundada em 1532 (...) Em 1542, grande parte da Vila de São Vicente foi destruída pelo mar, que invadiu ruas, casas e a igreja. Assim, a vila precisou ser reconstruída um pouco mais distante da praia.\"",
        pergunta: "Analise as afirmações sobre São Vicente:",
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
        justificativa: "I. Falso (surgiu nas proximidades do mar). II. Verdadeiro. III. Falso (foi destruída pelo mar). IV. Verdadeiro."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "A Administração Holandesa em Recife",
        contexto: "De acordo com o texto, \"A cidade de Recife, no estado de Pernambuco, passou por uma reforma urbana entre os anos de 1637 e 1644, quando era administrada por holandeses. Nessa época, os holandeses construíram ruas, pontes, casas, jardim botânico e zoológico na cidade.\"",
        pergunta: "Analise as afirmações sobre a administração holandesa em Recife:",
        afirmacoes: [
            "Recife passou por reformas urbanas sob administração portuguesa.",
            "As reformas em Recife incluíram a construção de jardim botânico e zoológico.",
            "A administração holandesa em Recife durou aproximadamente 7 anos.",
            "As construções realizadas pelos holandeses demonstravam a riqueza de parte da população."
        ],
        opcoes: [
            "F, V, V, V",
            "V, F, F, V",
            "F, V, F, F",
            "V, V, V, F"
        ],
        respostaCorreta: "F, V, V, V",
        justificativa: "I. Falso (foi sob administração holandesa). II. Verdadeiro. III. Verdadeiro (1637-1644). IV. Verdadeiro."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "A Chegada da Família Real ao Rio de Janeiro",
        contexto: "O texto explica que \"Entre os anos de 1808 e 1821, outra cidade brasileira foi reformada: o Rio de Janeiro. Nessa época, a família real portuguesa estava em conflito com a França e resolveu deixar Portugal para fugir de uma possível guerra.\"",
        pergunta: "Analise as afirmações sobre a chegada da família real ao Rio de Janeiro:",
        afirmacoes: [
            "A família real portuguesa chegou ao Rio de Janeiro fugindo de um conflito com a Espanha.",
            "As reformas no Rio de Janeiro ocorreram entre 1808 e 1821.",
            "A chegada da família real causou um aumento considerável no número de habitantes do Rio de Janeiro.",
            "A família real trouxe consigo apenas membros da nobreza, sem outros acompanhantes."
        ],
        opcoes: [
            "F, V, V, F",
            "V, F, F, V",
            "F, F, V, V",
            "V, V, F, F"
        ],
        respostaCorreta: "F, V, V, F",
        justificativa: "I. Falso (fugindo da França). II. Verdadeiro. III. Verdadeiro. IV. Falso (trouxe soldados, comerciantes e funcionários)."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Diferenças entre Cidades Planejadas e Espontâneas",
        contexto: "O capítulo explica que \"Nem todas as cidades brasileiras surgiram a partir de povoados; algumas delas foram projetadas antes de serem construídas. Essas cidades são conhecidas como cidades planejadas.\"",
        pergunta: "Analise as afirmações sobre cidades planejadas e espontâneas:",
        afirmacoes: [
            "Cidades espontâneas são projetadas antes de serem construídas.",
            "Cidades planejadas surgem de pequenos povoados que crescem com o tempo.",
            "Brasília é um exemplo de cidade planejada mencionada no texto.",
            "Cidades espontâneas se desenvolvem sem um planejamento inicial."
        ],
        opcoes: [
            "F, F, V, V",
            "V, V, F, F",
            "F, V, F, V",
            "V, F, V, F"
        ],
        respostaCorreta: "F, F, V, V",
        justificativa: "I. Falso (são as planejadas que são projetadas). II. Falso (são as espontâneas que surgem de povoados). III. Verdadeiro. IV. Verdadeiro."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Características de Brasília",
        contexto: "O texto descreve que \"Brasília é uma cidade totalmente planejada e foi construída para ser a capital do país. Em pouco mais de três anos, milhares de trabalhadores de diversos lugares do Brasil trabalharam em sua construção.\"",
        pergunta: "Analise as afirmações sobre Brasília:",
        afirmacoes: [
            "Brasília foi construída para ser a capital do país.",
            "A construção de Brasília levou mais de uma década para ser concluída.",
            "Trabalhadores de diversas regiões do Brasil participaram da construção de Brasília.",
            "Brasília é considerada uma cidade espontânea."
        ],
        opcoes: [
            "V, F, V, F",
            "F, V, F, V",
            "V, V, F, F",
            "F, F, V, V"
        ],
        respostaCorreta: "V, F, V, F",
        justificativa: "I. Verdadeiro. II. Falso (foi construída em pouco mais de três anos). III. Verdadeiro. IV. Falso (é uma cidade planejada)."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Preservação do Patrimônio Histórico",
        contexto: "O capítulo aborda a importância da preservação, mencionando: \"Cuidar dos museus é uma ação fundamental\" e citando o incêndio no Museu Nacional em 2018.",
        pergunta: "Analise as afirmações sobre patrimônio histórico:",
        afirmacoes: [
            "O Museu Nacional sofreu um incêndio em 2018 que destruiu grande parte do acervo.",
            "A conservação de museus é importante apenas para turistas.",
            "Museus guardam informações e reflexões importantes para toda a sociedade.",
            "A perda de patrimônio histórico afeta apenas a estrutura física dos prédios."
        ],
        opcoes: [
            "V, F, V, F",
            "F, V, F, V",
            "V, V, F, F",
            "F, F, V, V"
        ],
        respostaCorreta: "V, F, V, F",
        justificativa: "I. Verdadeiro. II. Falso (é importante para toda a sociedade). III. Verdadeiro. IV. Falso (afeta a memória coletiva)."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Exemplos de Cidades Planejadas Brasileiras",
        contexto: "O texto menciona: \"Teresina, Belo Horizonte e Palmas são alguns exemplos de cidades brasileiras planejadas\" e \"Goiânia foi a primeira cidade brasileira planejada no século 20.\"",
        pergunta: "Analise as afirmações sobre cidades planejadas brasileiras:",
        afirmacoes: [
            "Teresina, Belo Horizonte e Palmas são exemplos de cidades planejadas.",
            "Goiânia foi a primeira cidade planejada do Brasil em qualquer período histórico.",
            "Salvador também é considerada um município planejado segundo o texto.",
            "São Vicente é mencionada como exemplo de cidade planejada."
        ],
        opcoes: [
            "V, F, V, F",
            "F, V, F, V",
            "V, V, F, F",
            "F, F, V, V"
        ],
        respostaCorreta: "V, F, V, F",
        justificativa: "I. Verdadeiro. II. Falso (foi a primeira do século 20). III. Verdadeiro. IV. Falso (São Vicente é exemplo de cidade espontânea)."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "O Viaduto do Chá em São Paulo",
        contexto: "O texto relata: \"Viaduto do Chá, inaugurado em 1892, foi o primeiro viaduto da cidade de São Paulo (...) Em 1938, o velho viaduto com piso de madeira foi demolido, dando lugar a outro, de concreto, com o dobro de largura.\"",
        pergunta: "Analise as afirmações sobre o Viaduto do Chá:",
        afirmacoes: [
            "O Viaduto do Chá foi inaugurado em 1892.",
            "Era o segundo viaduto construído em São Paulo.",
            "O viaduto original tinha piso de madeira.",
            "Em 1938, foi substituído por um viaduto de concreto mais largo."
        ],
        opcoes: [
            "V, F, V, V",
            "F, V, F, F",
            "V, V, F, V",
            "F, F, V, F"
        ],
        respostaCorreta: "V, F, V, V",
        justificativa: "I. Verdadeiro. II. Falso (foi o primeiro viaduto). III. Verdadeiro. IV. Verdadeiro."
    }
];
