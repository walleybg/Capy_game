// Capítulo 13 de Ciências - Lua, estrelas e planetas
// 30 questões: 10 MC + 10 V/F + 7 abertas + 3 estudos de caso

const dadosDoQuizCiencias13 = [
    // ===== MÚLTIPLA ESCOLHA (1-10) =====
    {
        tipo: "multipla_escolha",
        titulo: "Questão 1",
        contexto: "Você está observando o céu durante o dia e percebe que só consegue ver o Sol. Durante a noite, o céu se enche de pontos brilhantes, que são estrelas e planetas.",
        pergunta: "Todas as afirmativas a seguir explicam por que os pontos brilhantes não são percebidos no céu diurno, exceto:",
        opcoes: [
            "a) A luz solar é intensa, ofuscando o brilho das estrelas.",
            "b) A luz do Sol, sendo intensa, faz com que a luz mais fraca de outros astros não seja vista.",
            "c) O céu de dia está cheio de estrelas, mas não conseguimos vê-las devido à ofuscação causada pelo Sol.",
            "d) As estrelas só emitem luz à noite, por isso não estão no céu durante o dia."
        ],
        respostaCorreta: 3,
        explicacao: "As estrelas estão sempre no céu, tanto de dia quanto de noite, e emitem luz constantemente. Durante o dia, não conseguimos vê-las porque a luz intensa do Sol ofusca o brilho mais fraco das estrelas distantes."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Questão 2",
        contexto: "O Sol é uma estrela. Ao compará-lo com outras estrelas distantes como Antares ou Betelgeuse, você nota que elas são muito maiores que o Sol. No entanto, o Sol é de longe o astro mais brilhante que vemos na Terra.",
        pergunta: "Escolha a alternativa que melhor reflete o conceito de por que o Sol parece maior e mais brilhante na Terra:",
        opcoes: [
            "a) O Sol é a maior de todas as estrelas do universo.",
            "b) O Sol está muito mais próximo da Terra do que qualquer outra estrela.",
            "c) O Sol é menos luminoso que as outras estrelas.",
            "d) O Sol é o único astro que emite luz própria."
        ],
        respostaCorreta: 1,
        explicacao: "O Sol parece maior e mais brilhante porque está muito mais próximo da Terra (cerca de 150 milhões de km) do que outras estrelas, que estão a anos-luz de distância. A proximidade faz com que ele pareça muito maior e mais luminoso, mesmo que existam estrelas muito maiores no universo."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Questão 3",
        contexto: "Estamos estudando o Sistema Solar, que inclui planetas como a Terra, Júpiter e Vênus.",
        pergunta: "Todas as afirmativas sobre os planetas do Sistema Solar são corretas, exceto:",
        opcoes: [
            "a) Os planetas giram em torno de uma estrela.",
            "b) Além de planetas rochosos, existem planetas feitos de gases, como Júpiter e Saturno.",
            "c) Oito planetas giram em torno do Sol.",
            "d) Os planetas emitem luz própria, diferentemente das estrelas."
        ],
        respostaCorreta: 3,
        explicacao: "Os planetas NÃO emitem luz própria. Eles refletem a luz do Sol, por isso conseguimos vê-los no céu noturno. As estrelas, sim, emitem luz própria através de reações nucleares em seu interior."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Questão 4",
        contexto: "Uma atividade de ciência mostra que, ao medir a altura de um colega com uma régua enquanto ele se afasta, ele parece menor.",
        pergunta: "Escolha a alternativa que melhor reflete o conceito que esta atividade demonstra em relação aos corpos celestes:",
        opcoes: [
            "a) A distância faz com que objetos grandes, como estrelas e planetas, pareçam pequenos.",
            "b) As estrelas e planetas são na verdade pequenos pontos no céu.",
            "c) Objetos celestes, como os planetas, mudam de tamanho quando estão mais distantes.",
            "d) A luz solar faz com que os planetas pareçam menores."
        ],
        respostaCorreta: 0,
        explicacao: "A distância afeta nossa percepção de tamanho. Objetos grandes parecem pequenos quando estão muito longe. Por isso, estrelas e planetas gigantescos aparecem como pequenos pontos brilhantes no céu noturno."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Questão 5",
        contexto: "Você tem acompanhado a Lua no céu noturno por várias semanas e percebeu que a sua forma muda, ora crescendo, ora diminuindo.",
        pergunta: "Marque a opção que não reflete os conceitos abordados sobre as fases da Lua:",
        opcoes: [
            "a) O formato aparente da Lua muda porque estamos vendo a parte dela que está sendo iluminada pelo Sol.",
            "b) O ciclo completo das fases da Lua dura aproximadamente 28 dias.",
            "c) As fases da Lua dependem da luz que ela recebe do Sol.",
            "d) A Lua encolhe ou desaparece completamente durante a fase de Lua Nova, pois não está mais no céu."
        ],
        respostaCorreta: 3,
        explicacao: "A Lua não encolhe nem desaparece do céu. Ela está sempre inteira e redonda. Durante a Lua Nova, a face iluminada está voltada para o lado oposto da Terra, por isso não conseguimos vê-la, mas ela continua no céu."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Questão 6",
        contexto: "O planeta Júpiter é o maior de todos os planetas do Sistema Solar.",
        pergunta: "Escolha a alternativa que melhor reflete o conceito de nomeação do planeta Júpiter, conforme os mitos:",
        opcoes: [
            "a) Júpiter recebeu esse nome por ser o planeta mais brilhante.",
            "b) Júpiter foi nomeado em homenagem ao deus romano dos mensageiros.",
            "c) Júpiter foi nomeado em homenagem ao deus romano mais poderoso.",
            "d) Júpiter, por ser um planeta gasoso, recebeu o nome do deus romano do mar."
        ],
        respostaCorreta: 2,
        explicacao: "Júpiter recebeu o nome do deus romano mais poderoso (equivalente a Zeus na mitologia grega), o rei dos deuses. O planeta foi assim nomeado por ser o maior do Sistema Solar, refletindo o poder e grandeza do deus."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Questão 7",
        contexto: "Você está observando o céu e precisa distinguir uma estrela de um planeta.",
        pergunta: "Todas as afirmativas são corretas sobre as diferenças e conexões entre estrelas e planetas, exceto:",
        opcoes: [
            "a) As estrelas são astros que emitem luz própria.",
            "b) Os planetas refletem a luz das estrelas, não emitindo luz própria.",
            "c) Os planetas se movem em torno de uma estrela.",
            "d) Os pontos brilhantes que vemos no céu noturno são apenas estrelas."
        ],
        respostaCorreta: 3,
        explicacao: "Os pontos brilhantes no céu noturno incluem tanto estrelas quanto planetas. Alguns dos pontos mais brilhantes que vemos são planetas como Vênus, Júpiter, Marte e Saturno, que refletem a luz do Sol."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Questão 8",
        contexto: "Analisando os planetas do Sistema Solar.",
        pergunta: "Escolha a alternativa que melhor reflete o conceito sobre os dois planetas que são mais difíceis de ver a olho nu, pois estão muito longe de nós:",
        opcoes: [
            "a) Marte e Júpiter.",
            "b) Mercúrio e Vênus.",
            "c) Urano e Netuno.",
            "d) Saturno e Terra."
        ],
        respostaCorreta: 2,
        explicacao: "Urano e Netuno são os planetas mais distantes do Sol e da Terra, por isso são muito difíceis de ver a olho nu. Eles só foram descobertos com o uso de telescópios. Os outros cinco planetas (Mercúrio, Vênus, Marte, Júpiter e Saturno) são visíveis a olho nu."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Questão 9",
        contexto: "Você aprendeu que existem planetas rochosos (como a Terra e Marte) e planetas gasosos (como Júpiter e Saturno).",
        pergunta: "Marque a opção que não reflete os conceitos abordados sobre a composição e o tamanho dos planetas:",
        opcoes: [
            "a) Júpiter é o maior planeta do Sistema Solar.",
            "b) Mercúrio é o menor planeta do Sistema Solar.",
            "c) Vênus e Mercúrio são os planetas mais próximos do Sol.",
            "d) O Sol é menor que a Terra."
        ],
        respostaCorreta: 3,
        explicacao: "O Sol é muito maior que a Terra. O Sol tem um diâmetro de aproximadamente 1,4 milhão de km, enquanto a Terra tem cerca de 12.700 km. Caberiam mais de 1 milhão de Terras dentro do Sol!"
    },
    {
        tipo: "multipla_escolha",
        titulo: "Questão 10",
        contexto: "Os antigos agrupavam estrelas para formar figuras no céu, o que auxiliava na orientação.",
        pergunta: "Escolha a alternativa que melhor reflete o conceito dessas formações estelares e um exemplo conhecido:",
        opcoes: [
            "a) Elas são chamadas de 'planetas distantes'.",
            "b) Elas são chamadas de 'constelações', sendo as Três Marias parte da constelação de Órion.",
            "c) Elas são chamadas de 'astros errantes'.",
            "d) Elas são apenas pontos de luz que não possuem utilidade."
        ],
        respostaCorreta: 1,
        explicacao: "As constelações são agrupamentos de estrelas que formam figuras imaginárias no céu. As Três Marias (também chamadas de Cinturão de Órion) fazem parte da constelação de Órion, uma das mais conhecidas. Antigamente, as constelações eram usadas para orientação e navegação."
    },

    // ===== VERDADEIRO/FALSO (11-20) =====
    {
        tipo: "verdadeiro_falso",
        titulo: "Questão 11",
        contexto: "Observando o céu durante o dia e a noite.",
        pergunta: "Analise as afirmações abaixo:",
        afirmacoes: [
            "I. Durante o dia, as estrelas não estão no céu.",
            "II. A luz do Sol ofusca o brilho das estrelas durante o dia.",
            "III. À noite, quando o Sol se põe, conseguimos ver mais pontos brilhantes.",
            "IV. As estrelas emitem luz própria constantemente."
        ],
        opcoes: [
            "a) V, V, F, V",
            "b) F, V, V, V",
            "c) V, F, V, V",
            "d) F, F, V, V"
        ],
        respostaCorreta: 1,
        explicacao: "I. FALSO - As estrelas estão sempre no céu, tanto de dia quanto de noite. II. VERDADEIRO - A luz intensa do Sol ofusca o brilho das estrelas. III. VERDADEIRO - À noite, sem a luz do Sol, conseguimos ver as estrelas. IV. VERDADEIRO - As estrelas emitem luz própria através de reações nucleares."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Questão 12",
        contexto: "Diferenciando estrelas e planetas.",
        pergunta: "Analise as afirmações abaixo:",
        afirmacoes: [
            "I. O Sol é uma estrela.",
            "II. Estrelas são astros que emitem luz própria, e planetas são astros que refletem luz.",
            "III. Planetas e estrelas são a mesma coisa, apenas chamados de maneiras diferentes.",
            "IV. Em nosso Sistema Solar, os oito planetas giram ao redor do Sol."
        ],
        opcoes: [
            "a) V, V, F, V",
            "b) V, F, V, V",
            "c) F, V, F, F",
            "d) F, F, V, F"
        ],
        respostaCorreta: 0,
        explicacao: "I. VERDADEIRO - O Sol é uma estrela de tamanho médio. II. VERDADEIRO - Estrelas produzem luz própria, planetas refletem a luz das estrelas. III. FALSO - Planetas e estrelas são completamente diferentes. IV. VERDADEIRO - Os oito planetas do Sistema Solar orbitam o Sol."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Questão 13",
        contexto: "Sobre a composição e características dos planetas.",
        pergunta: "Analise as afirmações abaixo:",
        afirmacoes: [
            "I. Os planetas se dividem em dois grupos: rochosos (como a Terra) e gasosos (como Júpiter).",
            "II. Mercúrio é o menor planeta do Sistema Solar.",
            "III. A Terra, Vênus, Marte, Júpiter e Saturno são visíveis a olho nu.",
            "IV. A Terra, como todos os planetas, tem o formato de uma esfera."
        ],
        opcoes: [
            "a) V, V, F, F",
            "b) V, V, V, V",
            "c) F, V, V, V",
            "d) V, F, F, V"
        ],
        respostaCorreta: 1,
        explicacao: "I. VERDADEIRO - Planetas rochosos (Mercúrio, Vênus, Terra, Marte) e gasosos (Júpiter, Saturno, Urano, Netuno). II. VERDADEIRO - Mercúrio é o menor planeta. III. VERDADEIRO - Esses cinco planetas podem ser vistos a olho nu. IV. VERDADEIRO - Todos os planetas têm formato esférico devido à gravidade."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Questão 14",
        contexto: "Entendendo as fases da Lua.",
        pergunta: "Analise as afirmações abaixo:",
        afirmacoes: [
            "I. As fases da Lua são Cheia, Nova, Quarto Crescente e Quarto Minguante.",
            "II. A Lua realiza um giro completo em torno da Terra em aproximadamente 28 dias.",
            "III. Durante a fase de Lua Nova, a Lua some do céu.",
            "IV. A Lua está sempre inteira e redonda, mas vemos apenas a parte dela que está voltada e iluminada pelo Sol."
        ],
        opcoes: [
            "a) V, F, V, F",
            "b) F, V, F, V",
            "c) V, V, F, V",
            "d) V, V, V, F"
        ],
        respostaCorreta: 2,
        explicacao: "I. VERDADEIRO - Essas são as quatro fases principais da Lua. II. VERDADEIRO - O ciclo lunar dura aproximadamente 28 dias. III. FALSO - A Lua não some, apenas sua face iluminada está voltada para o lado oposto. IV. VERDADEIRO - A Lua é sempre esférica, vemos apenas a parte iluminada pelo Sol."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Questão 15",
        contexto: "Analisando a percepção de tamanho e distância.",
        pergunta: "Analise as afirmações abaixo:",
        afirmacoes: [
            "I. O Sol parece ser o maior astro porque está muito mais próximo da Terra do que outras estrelas.",
            "II. As estrelas como Antares e Betelgeuse são maiores que o Sol.",
            "III. Pessoas parecem menores quando se afastam, assim como planetas e estrelas parecem pequenos pontos por causa da grande distância.",
            "IV. A intensidade da luz do Sol é muito maior que a intensidade de luz vinda de todas as outras estrelas somadas."
        ],
        opcoes: [
            "a) V, F, V, V",
            "b) V, V, V, V",
            "c) F, V, V, F",
            "d) F, F, V, V"
        ],
        respostaCorreta: 1,
        explicacao: "I. VERDADEIRO - A proximidade faz o Sol parecer maior. II. VERDADEIRO - Existem estrelas supergigantes muito maiores que o Sol. III. VERDADEIRO - A distância afeta nossa percepção de tamanho. IV. VERDADEIRO - Para nós na Terra, a luz do Sol é muito mais intensa que a de todas as outras estrelas juntas."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Questão 16",
        contexto: "Estudo das constelações e orientação.",
        pergunta: "Analise as afirmações abaixo:",
        afirmacoes: [
            "I. As constelações são áreas no céu onde podemos encontrar conjuntos de estrelas.",
            "II. Na Antiguidade, as constelações eram usadas para as pessoas se localizarem.",
            "III. As Três Marias são um agrupamento de estrelas que faz parte da constelação de Órion.",
            "IV. As estrelas se agrupam para formar figuras no céu, e os gregos antigos associavam a elas uma história ou crença."
        ],
        opcoes: [
            "a) V, V, V, V",
            "b) V, V, F, V",
            "c) F, V, V, F",
            "d) F, F, V, V"
        ],
        respostaCorreta: 0,
        explicacao: "I. VERDADEIRO - Constelações são agrupamentos de estrelas. II. VERDADEIRO - Eram usadas para navegação e orientação. III. VERDADEIRO - As Três Marias fazem parte de Órion. IV. VERDADEIRO - Civilizações antigas criaram histórias mitológicas sobre as constelações."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Questão 17",
        contexto: "Comparando o Sol e a localização dos planetas.",
        pergunta: "Analise as afirmações abaixo:",
        afirmacoes: [
            "I. Existem estrelas muito maiores que o Sol.",
            "II. Mercúrio e Vênus são os planetas mais próximos do Sol.",
            "III. Júpiter e Saturno estão um pouco mais distantes do Sol do que Mercúrio e Vênus.",
            "IV. Urano e Netuno, por estarem muito longe, não são vistos a olho nu."
        ],
        opcoes: [
            "a) V, V, F, V",
            "b) V, V, V, V",
            "c) F, V, V, V",
            "d) V, F, F, V"
        ],
        respostaCorreta: 1,
        explicacao: "I. VERDADEIRO - Existem estrelas supergigantes muito maiores que o Sol. II. VERDADEIRO - Mercúrio é o mais próximo, seguido por Vênus. III. VERDADEIRO - Júpiter e Saturno estão mais distantes. IV. VERDADEIRO - Urano e Netuno são invisíveis a olho nu devido à grande distância."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Questão 18",
        contexto: "Os planetas recebem nomes de deuses romanos.",
        pergunta: "Analise as afirmações abaixo:",
        afirmacoes: [
            "I. Vênus recebeu o nome da deusa romana da beleza e do amor.",
            "II. Marte recebeu o nome do deus da guerra devido à sua cor avermelhada.",
            "III. Netuno é o deus romano do mar.",
            "IV. Mercúrio é o deus romano dos mensageiros e é o planeta que se movimenta mais rápido."
        ],
        opcoes: [
            "a) F, V, V, V",
            "b) V, V, V, V",
            "c) V, F, V, F",
            "d) F, F, V, V"
        ],
        respostaCorreta: 1,
        explicacao: "I. VERDADEIRO - Vênus é a deusa da beleza. II. VERDADEIRO - Marte, o deus da guerra, tem cor avermelhada. III. VERDADEIRO - Netuno é o deus do mar. IV. VERDADEIRO - Mercúrio, mensageiro dos deuses, é o planeta mais rápido em sua órbita."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Questão 19",
        contexto: "Visibilidade dos planetas próximos ao Sol.",
        pergunta: "Analise as afirmações abaixo:",
        afirmacoes: [
            "I. Vênus e Mercúrio, por estarem perto do Sol, podem ser vistos ao amanhecer ou ao anoitecer, quando o céu está mais escuro.",
            "II. Mercúrio é menor que Vênus.",
            "III. Vênus é quase do mesmo tamanho da Terra.",
            "IV. Marte, Júpiter e Saturno estão mais afastados do Sol do que Mercúrio e Vênus."
        ],
        opcoes: [
            "a) V, V, F, V",
            "b) V, V, V, V",
            "c) F, V, V, F",
            "d) V, F, V, V"
        ],
        respostaCorreta: 1,
        explicacao: "I. VERDADEIRO - Vênus e Mercúrio são visíveis próximos ao horizonte no amanhecer ou anoitecer. II. VERDADEIRO - Mercúrio é o menor planeta. III. VERDADEIRO - Vênus tem tamanho similar à Terra. IV. VERDADEIRO - Marte, Júpiter e Saturno estão mais distantes do Sol."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Questão 20",
        contexto: "Tamanhos e características dos planetas gasosos.",
        pergunta: "Analise as afirmações abaixo:",
        afirmacoes: [
            "I. Júpiter é o maior planeta do Sistema Solar.",
            "II. Saturno é o segundo maior planeta do Sistema Solar.",
            "III. Júpiter e Saturno são chamados de planetas de rocha, pois possuem um núcleo sólido.",
            "IV. O Sol é muito maior que Júpiter."
        ],
        opcoes: [
            "a) V, V, F, V",
            "b) F, V, V, F",
            "c) V, F, F, V",
            "d) F, V, F, F"
        ],
        respostaCorreta: 0,
        explicacao: "I. VERDADEIRO - Júpiter é o maior planeta. II. VERDADEIRO - Saturno é o segundo maior. III. FALSO - São planetas gasosos, não rochosos, embora possam ter núcleo sólido. IV. VERDADEIRO - O Sol é muito maior que qualquer planeta do Sistema Solar."
    },

    // ===== PERGUNTAS ABERTAS (21-27) =====
    {
        tipo: "aberta",
        titulo: "Questão 21",
        contexto: "Imagine que você está dirigindo à noite com o farol do seu carro aceso. De repente, acende-se uma luz forte vinda na direção contrária.",
        pergunta: "De que maneira esta situação se assemelha à dificuldade de vermos as estrelas durante o dia? (Cite a analogia da fonte).",
        respostaEsperada: "Assim como a luz forte do farol ofusca nossa visão e dificulta ver objetos menos iluminados, a luz intensa do Sol durante o dia ofusca o brilho mais fraco das estrelas, impedindo que as vejamos. A fonte de luz mais intensa (Sol/farol) domina nossa percepção visual.",
        explicacao: "Esta analogia demonstra o conceito de ofuscação luminosa. Uma fonte de luz muito intensa (Sol ou farol) impede que vejamos fontes de luz mais fracas (estrelas ou objetos ao redor). Durante o dia, a luz solar é tão intensa que ofusca completamente o brilho das estrelas distantes, mesmo que elas estejam sempre no céu."
    },
    {
        tipo: "aberta",
        titulo: "Questão 22",
        contexto: "Você está de férias e passa um mês observando a Lua.",
        pergunta: "Por que o formato da Lua parece estar sempre 'mudando' (crescendo e diminuindo), se a Lua é sempre redonda?",
        respostaEsperada: "A Lua é sempre redonda, mas vemos apenas a parte dela que está sendo iluminada pelo Sol. À medida que a Lua gira em torno da Terra, a posição relativa entre Sol, Terra e Lua muda, fazendo com que vejamos diferentes porções da face iluminada, criando as fases da Lua.",
        explicacao: "As fases da Lua são causadas pela mudança na posição relativa entre Sol, Terra e Lua. A Lua não muda de forma, mas a porção iluminada que conseguimos ver da Terra varia ao longo do ciclo de aproximadamente 28 dias. Quando a face iluminada está voltada para a Terra, vemos Lua Cheia. Quando está voltada para o lado oposto, vemos Lua Nova."
    },
    {
        tipo: "aberta",
        titulo: "Questão 23",
        contexto: "Os corpos celestes que não emitem luz própria, mas refletem a luz de uma estrela e se movem ao redor dela, são chamados de planetas.",
        pergunta: "No Sistema Solar, qual é a estrela ao redor da qual os oito planetas giram? O que é essa estrela?",
        respostaEsperada: "O Sol é a estrela ao redor da qual os oito planetas giram. O Sol é uma estrela de tamanho médio que emite luz própria através de reações nucleares em seu interior, fornecendo luz e calor para todo o Sistema Solar.",
        explicacao: "O Sol é o centro do nosso Sistema Solar. É uma estrela de tamanho médio (classificada como anã amarela) que produz energia através da fusão nuclear de hidrogênio em hélio. Os oito planetas (Mercúrio, Vênus, Terra, Marte, Júpiter, Saturno, Urano e Netuno) orbitam ao redor do Sol, mantidos em suas órbitas pela força gravitacional."
    },
    {
        tipo: "aberta",
        titulo: "Questão 24",
        contexto: "Você aprendeu que os planetas do Sistema Solar receberam nomes de deuses da mitologia romana.",
        pergunta: "Cite três planetas e explique brevemente a relação entre suas características e os deuses que lhes deram nome.",
        respostaEsperada: "Marte - cor avermelhada lembra sangue, deus da guerra; Vênus - planeta mais brilhante, deusa da beleza; Mercúrio - movimenta-se rápido, deus mensageiro; Júpiter - maior planeta, rei dos deuses; Saturno - segundo maior, pai de Júpiter; Netuno - cor azulada, deus do mar.",
        explicacao: "Os nomes dos planetas refletem características observáveis: Marte tem cor avermelhada (guerra/sangue), Vênus é o mais brilhante (beleza), Mercúrio se move rapidamente (mensageiro veloz), Júpiter é o maior (rei poderoso), Saturno é o segundo maior (pai dos deuses), e Netuno tem cor azulada (oceanos). Essa nomenclatura conecta astronomia e mitologia."
    },
    {
        tipo: "aberta",
        titulo: "Questão 25",
        contexto: "As constelações são agrupamentos de estrelas que formam figuras imaginárias no céu.",
        pergunta: "Explique como as constelações eram úteis para as pessoas na Antiguidade e cite um exemplo de constelação conhecida.",
        respostaEsperada: "As constelações eram usadas para orientação e navegação, ajudando as pessoas a se localizarem e determinarem direções. Um exemplo é a constelação de Órion, que contém as Três Marias em seu cinturão.",
        explicacao: "Na Antiguidade, as constelações serviam como mapas celestes para navegação terrestre e marítima. Marinheiros e viajantes usavam as posições das constelações para determinar direções e estações do ano. A constelação de Órion, com as famosas Três Marias, é uma das mais reconhecíveis e era usada para orientação no hemisfério sul e norte."
    },
    {
        tipo: "aberta",
        titulo: "Questão 26",
        contexto: "Você aprendeu sobre a diferença entre planetas rochosos e gasosos.",
        pergunta: "Quais são os quatro planetas rochosos e os quatro planetas gasosos do Sistema Solar? Cite uma característica que diferencia esses dois grupos.",
        respostaEsperada: "Planetas rochosos: Mercúrio, Vênus, Terra e Marte. Planetas gasosos: Júpiter, Saturno, Urano e Netuno. Os rochosos têm superfície sólida e são menores, enquanto os gasosos são compostos principalmente de gases e são muito maiores.",
        explicacao: "Os planetas rochosos (também chamados terrestres) têm superfície sólida, são menores e estão mais próximos do Sol. Os planetas gasosos (também chamados jovianos) são compostos principalmente de hidrogênio e hélio, são muito maiores e estão mais distantes do Sol. Júpiter, o maior planeta gasoso, poderia conter mais de 1.000 Terras em seu volume!"
    },
    {
        tipo: "aberta",
        titulo: "Questão 27",
        contexto: "Você observou que alguns planetas são visíveis a olho nu, enquanto outros não.",
        pergunta: "Quais são os cinco planetas visíveis a olho nu e por que Urano e Netuno não podem ser vistos sem telescópio?",
        respostaEsperada: "Os cinco planetas visíveis a olho nu são: Mercúrio, Vênus, Marte, Júpiter e Saturno. Urano e Netuno não são visíveis a olho nu porque estão muito distantes da Terra, fazendo com que apareçam muito fracos e pequenos no céu.",
        explicacao: "A visibilidade dos planetas depende de sua distância da Terra e de quanto luz solar eles refletem. Os cinco planetas mais próximos (exceto a Terra) são brilhantes o suficiente para serem vistos a olho nu. Urano e Netuno, por estarem extremamente distantes (cerca de 2,9 e 4,5 bilhões de km do Sol, respectivamente), aparecem tão fracos que só podem ser observados com telescópios."
    },

    // ===== ESTUDOS DE CASO (28-30) =====
    {
        tipo: "estudo_de_caso",
        titulo: "Questão 28",
        contexto: "Marina está fazendo um projeto de ciências sobre observação do céu. Ela anotou suas observações durante um mês:\n\n- Semana 1: Viu um ponto muito brilhante no céu ao anoitecer, próximo ao horizonte oeste.\n- Semana 2: O mesmo ponto brilhante apareceu um pouco mais alto no céu.\n- Semana 3: Observou a Lua em fase crescente.\n- Semana 4: Viu vários pontos brilhantes formando um padrão que lembra um cinturão (Três Marias).\n\nSeu professor pediu que ela identificasse o que observou em cada semana.",
        pergunta: "Com base no que você aprendeu sobre corpos celestes, ajude Marina a identificar:\na) O que era o ponto muito brilhante nas semanas 1 e 2?\nb) Por que a Lua estava em fase crescente na semana 3?\nc) O que são as Três Marias que ela observou na semana 4?",
        respostaEsperada: "a) Provavelmente era o planeta Vênus, que é muito brilhante e visível ao anoitecer próximo ao horizonte. b) A Lua estava em fase crescente porque a parte iluminada pelo Sol que vemos da Terra estava aumentando. c) As Três Marias são um conjunto de três estrelas que fazem parte da constelação de Órion.",
        explicacao: "a) Vênus é conhecido como 'Estrela d'Alva' ou 'Estrela Vespertina' por ser muito brilhante e aparecer próximo ao horizonte no amanhecer ou anoitecer. b) As fases da Lua ocorrem porque vemos diferentes porções da face iluminada pelo Sol à medida que ela orbita a Terra. c) As Três Marias (Mintaka, Alnilam e Alnitak) formam o cinturão da constelação de Órion, uma das formações mais reconhecíveis do céu noturno."
    },
    {
        tipo: "estudo_de_caso",
        titulo: "Questão 29",
        contexto: "Pedro e sua família foram acampar em uma região sem poluição luminosa. À noite, ele ficou impressionado com a quantidade de estrelas visíveis. Seu pai, que é professor de ciências, aproveitou para ensinar:\n\n- Apontou para um ponto avermelhado e disse: 'Aquele é Marte, o planeta vermelho.'\n- Mostrou um ponto muito brilhante: 'Aquele é Júpiter, o maior planeta do Sistema Solar.'\n- Explicou que as estrelas que vemos são como o Sol, mas estão muito mais distantes.\n- Disse que algumas estrelas são muito maiores que o Sol, como Betelgeuse.\n\nPedro ficou confuso: se Betelgeuse é maior que o Sol, por que parece tão pequena?",
        pergunta: "Com base no que você aprendeu:\na) Por que Marte aparece avermelhado no céu?\nb) Por que Júpiter é tão brilhante se os planetas não emitem luz própria?\nc) Explique a Pedro por que Betelgeuse, sendo maior que o Sol, parece tão pequena no céu.",
        respostaEsperada: "a) Marte aparece avermelhado devido à presença de óxido de ferro (ferrugem) em sua superfície. b) Júpiter é muito brilhante porque é grande e reflete muita luz do Sol. c) Betelgeuse parece pequena porque está extremamente distante da Terra, enquanto o Sol está muito próximo. A distância faz objetos grandes parecerem pequenos.",
        explicacao: "a) A cor avermelhada de Marte deve-se ao óxido de ferro em sua superfície, similar à ferrugem. b) Júpiter, apesar de não emitir luz própria, é muito grande e reflete grande quantidade de luz solar, tornando-o um dos objetos mais brilhantes do céu noturno. c) Betelgeuse é uma estrela supergigante vermelha, cerca de 700 vezes maior que o Sol, mas está a aproximadamente 640 anos-luz de distância, enquanto o Sol está a apenas 8 minutos-luz. A enorme distância faz com que Betelgeuse pareça apenas um ponto brilhante no céu."
    },
    {
        tipo: "estudo_de_caso",
        titulo: "Questão 30",
        contexto: "A professora de ciências organizou uma atividade especial: observar a Lua durante um mês inteiro. Cada aluno deveria desenhar a Lua todas as noites e anotar a data. Ana fez suas observações:\n\n- Dia 1: Lua Nova (não conseguiu ver a Lua)\n- Dia 7: Quarto Crescente (metade da Lua visível)\n- Dia 14: Lua Cheia (Lua completamente iluminada)\n- Dia 21: Quarto Minguante (metade da Lua visível novamente)\n- Dia 28: Lua Nova novamente\n\nA professora perguntou: 'Por que a Lua muda de forma? Ela realmente cresce e diminui?'",
        pergunta: "Ajude Ana a responder:\na) A Lua realmente muda de tamanho ou forma durante o mês?\nb) Por que vemos diferentes porções da Lua iluminadas?\nc) Quanto tempo leva o ciclo completo das fases da Lua?\nd) Por que não conseguimos ver a Lua durante a Lua Nova?",
        respostaEsperada: "a) Não, a Lua é sempre esférica e do mesmo tamanho. b) Vemos diferentes porções iluminadas porque a posição da Lua em relação ao Sol e à Terra muda. c) O ciclo completo dura aproximadamente 28 dias. d) Durante a Lua Nova, a face iluminada está voltada para o lado oposto da Terra.",
        explicacao: "a) A Lua mantém sempre sua forma esférica e tamanho constante. b) As fases lunares ocorrem porque a Lua orbita a Terra, mudando sua posição relativa ao Sol. Vemos apenas a porção da Lua que está sendo iluminada pelo Sol e voltada para a Terra. c) O ciclo lunar (lunação) dura aproximadamente 29,5 dias. d) Na Lua Nova, a Lua está entre a Terra e o Sol, com sua face iluminada voltada para o lado oposto ao nosso, por isso não a vemos. Esse ciclo se repete continuamente, criando o padrão regular das fases lunares que observamos mês após mês."
    }
];
