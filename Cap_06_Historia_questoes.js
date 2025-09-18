// Questões do Capítulo 6 de História - "Da formação à reforma das cidades"
const questoesHistoria = [
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
        explicacao: "Brasília foi construída em pouco mais de três anos, não várias décadas. Foi um projeto de construção relativamente rápido para uma capital."
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
        explicacao: "A conservação de museus e acervos históricos é fundamental para preservar a memória coletiva e o conhecimento histórico para as futuras gerações."
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
        explicacao: "Belo Horizonte, Palmas e Goiânia são explicitamente mencionadas no texto como cidades planejadas."
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
    {
        id: 11,
        titulo: "Transformação das Cidades Brasileiras",
        contexto: "O capítulo inicia afirmando que \"Ao longo da história do Brasil, várias cidades foram formadas e se transformaram bastante com a passagem do tempo.\"",
        pergunta: "Analise as afirmativas: I. A paisagem urbana de Natal permaneceu a mesma entre 1957 e os dias atuais. II. A formação e transformação das cidades são fenômenos que ocorrem ao longo do tempo. III. As cidades brasileiras se modificam devido a fatores como o crescimento populacional e necessidades dos habitantes. IV. O capítulo 6 foca apenas na formação de cidades, sem abordar suas reformas.",
        tipo: "multipla_escolha",
        opcoes: [
            "F, V, V, F",
            "V, F, V, F",
            "F, V, F, V",
            "V, V, F, F"
        ],
        respostaCorreta: 0,
        explicacao: "I. Falso - Natal se transformou muito entre 1957 e hoje. II. Verdadeiro - as cidades se transformam ao longo do tempo. III. Verdadeiro - fatores como crescimento populacional influenciam as mudanças. IV. Falso - o capítulo aborda tanto formação quanto reformas."
    },
    {
        id: 12,
        titulo: "Os Primeiros Povoamentos Urbanos",
        contexto: "O texto informa que \"No Brasil, os primeiros povoamentos urbanos surgiram por volta de 1530, quando os portugueses passaram a morar no país. A partir de então, vilas com casas, igrejas, comércios, entre outros estabelecimentos, foram sendo construídas.\"",
        pergunta: "Analise as afirmativas: I. Os primeiros povoamentos urbanos no Brasil surgiram antes da chegada dos portugueses. II. As vilas iniciais eram construídas com casas, igrejas e comércios. III. As primeiras vilas não se tornaram cidades, permanecendo como povoados. IV. As necessidades dos habitantes impulsionaram reformas e modernizações das vilas.",
        tipo: "multipla_escolha",
        opcoes: [
            "V, F, V, F",
            "F, V, F, V",
            "F, V, V, F",
            "V, F, F, V"
        ],
        respostaCorreta: 1,
        explicacao: "I. Falso - surgiram por volta de 1530 com os portugueses. II. Verdadeiro - as vilas tinham casas, igrejas e comércios. III. Falso - muitas vilas se tornaram cidades. IV. Verdadeiro - as necessidades dos habitantes motivaram reformas."
    },
    {
        id: 13,
        titulo: "A História de São Vicente",
        contexto: "O capítulo relata que \"A primeira vila brasileira foi fundada em 1532 (...) Em 1542, grande parte da Vila de São Vicente foi destruída pelo mar, que invadiu ruas, casas e a igreja. Assim, a vila precisou ser reconstruída um pouco mais distante da praia.\"",
        pergunta: "Analise as afirmativas: I. São Vicente foi a primeira vila brasileira e surgiu no interior do Brasil. II. O desenvolvimento de São Vicente foi impulsionado por atividades econômicas como o comércio e a produção de açúcar. III. A vila de São Vicente nunca sofreu nenhuma catástrofe natural. IV. Após ser destruída, São Vicente foi reconstruída em um local diferente, mais distante do mar.",
        tipo: "multipla_escolha",
        opcoes: [
            "F, V, F, V",
            "V, V, F, F",
            "F, F, V, V",
            "V, F, V, F"
        ],
        respostaCorreta: 0,
        explicacao: "I. Falso - surgiu nas proximidades do mar, não no interior. II. Verdadeiro - foi impulsionada pelo comércio e produção de açúcar. III. Falso - foi destruída pelo mar em 1542. IV. Verdadeiro - foi reconstruída mais distante da praia."
    },
    {
        id: 14,
        titulo: "A Administração Holandesa em Recife",
        contexto: "De acordo com o texto, \"A cidade de Recife, no estado de Pernambuco, passou por uma reforma urbana entre os anos de 1637 e 1644, quando era administrada por holandeses. Nessa época, os holandeses construíram ruas, pontes, casas, jardim botânico e zoológico na cidade.\"",
        pergunta: "Analise as afirmativas: I. Recife passou por reformas urbanas sob administração portuguesa. II. As reformas em Recife incluíram a construção de pontes e jardins botânicos. III. O período de administração holandesa em Recife durou menos de 5 anos. IV. As construções realizadas pelos holandeses em Recife refletiam a riqueza da população local.",
        tipo: "multipla_escolha",
        opcoes: [
            "V, V, F, F",
            "F, V, F, V",
            "V, F, V, F",
            "F, F, V, V"
        ],
        respostaCorreta: 1,
        explicacao: "I. Falso - foi sob administração holandesa. II. Verdadeiro - incluíram pontes e jardins botânicos. III. Falso - durou de 1637 a 1644, ou seja, 7 anos. IV. Verdadeiro - as construções demonstravam riqueza."
    },
    {
        id: 15,
        titulo: "As Reformas no Rio de Janeiro",
        contexto: "O capítulo descreve que \"Entre os anos de 1808 e 1821, outra cidade brasileira foi reformada: o Rio de Janeiro. (...) a família real portuguesa decidiu partir em direção ao Rio de Janeiro, trazendo consigo soldados, comerciantes e funcionários públicos, de modo que o número de habitantes da região aumentou consideravelmente.\" Também é mencionado que \"O Jardim Botânico do Rio de Janeiro, construído há mais de 200 anos, é um espaço muito antigo na cidade.\"",
        pergunta: "Analise as afirmativas: I. As reformas no Rio de Janeiro ocorreram durante o período em que a família real portuguesa residiu na cidade. II. A vinda da família real causou uma diminuição da população no Rio de Janeiro. III. O Jardim Botânico do Rio de Janeiro é um exemplo de construção recente na cidade. IV. As reformas urbanas no Rio de Janeiro visavam apenas atender às necessidades da família real, sem impactar a população.",
        tipo: "multipla_escolha",
        opcoes: [
            "V, F, F, F",
            "F, V, F, V",
            "V, F, V, F",
            "F, V, V, F"
        ],
        respostaCorreta: 0,
        explicacao: "I. Verdadeiro - as reformas ocorreram entre 1808-1821, período da família real. II. Falso - causou aumento populacional. III. Falso - o Jardim Botânico tem mais de 200 anos. IV. Falso - as reformas impactaram toda a cidade."
    },
    {
        id: 16,
        titulo: "O que são cidades espontâneas?",
        contexto: "Com base no conteúdo estudado sobre a formação das cidades brasileiras.",
        pergunta: "O que são \"cidades espontâneas\" e como elas se desenvolvem?",
        tipo: "resposta_aberta",
        respostaCorreta: "Cidades espontâneas são aquelas que surgiram e se desenvolveram sem planejamento prévio. Elas se formaram a partir de pequenos povoados que, com o tempo, foram crescendo até se transformarem em vilas e depois em cidades. Esse crescimento aconteceu de forma natural, conforme as necessidades dos habitantes e as atividades econômicas da região.",
        explicacao: "As cidades espontâneas cresceram organicamente, sem um projeto inicial, adaptando-se às necessidades locais e às condições geográficas e econômicas."
    },
    {
        id: 17,
        titulo: "Crescimento de São Vicente",
        contexto: "Considerando a história da primeira vila brasileira.",
        pergunta: "Cite duas razões que levaram a Vila de São Vicente a crescer e se tornar uma cidade.",
        tipo: "resposta_aberta",
        respostaCorreta: "Duas razões principais foram: 1) O comércio de mercadorias pelo porto, que facilitava as trocas comerciais; 2) A construção de engenhos pelos portugueses para produzir açúcar, que se tornou uma importante atividade econômica da região.",
        explicacao: "São Vicente cresceu devido às atividades econômicas como comércio portuário, criação de gado, cultivo de alimentos e principalmente a produção de açúcar nos engenhos."
    },
    {
        id: 18,
        titulo: "Impacto da Família Real",
        contexto: "Sobre as transformações no Rio de Janeiro no início do século XIX.",
        pergunta: "Como a chegada da família real portuguesa impactou o Rio de Janeiro no início do século XIX?",
        tipo: "resposta_aberta",
        respostaCorreta: "A chegada da família real portuguesa (1808-1821) causou um grande aumento populacional no Rio de Janeiro, pois trouxe consigo soldados, comerciantes e funcionários públicos. Isso levou a reformas urbanas na cidade para atender às novas necessidades e ao crescimento da população.",
        explicacao: "A presença da corte portuguesa transformou o Rio de Janeiro, aumentando sua importância política e econômica, e exigindo melhorias na infraestrutura urbana."
    },
    {
        id: 19,
        titulo: "Cidades Planejadas",
        contexto: "Sobre os diferentes tipos de formação urbana no Brasil.",
        pergunta: "O que são \"cidades planejadas\" e qual a principal característica que as diferencia das espontâneas?",
        tipo: "resposta_aberta",
        respostaCorreta: "Cidades planejadas são aquelas que foram projetadas antes de serem construídas. A principal diferença das espontâneas é que elas têm um plano inicial que define a localização de residências, parques, escolas e outros elementos urbanos, enquanto as espontâneas crescem naturalmente sem planejamento prévio.",
        explicacao: "O planejamento prévio permite uma organização mais eficiente do espaço urbano, considerando aspectos como transporte, áreas verdes e distribuição de serviços."
    },
    {
        id: 20,
        titulo: "Função de Brasília",
        contexto: "Sobre a construção da capital brasileira.",
        pergunta: "De acordo com o texto, qual a função principal para a qual Brasília foi planejada?",
        tipo: "resposta_aberta",
        respostaCorreta: "Brasília foi planejada para ser a capital do país, ou seja, sua função principal é política e administrativa, servindo como sede do governo federal brasileiro.",
        explicacao: "Brasília foi construída especificamente para ser a nova capital do Brasil, concentrando os poderes executivo, legislativo e judiciário."
    }
];

// Exportar as questões para uso no jogo principal
if (typeof module !== 'undefined' && module.exports) {
    module.exports = questoesHistoria;
}
