// Prova Simulada - Capítulo 13 de Ciências
// Lua, Estrelas e Planetas
// 80 questões: 50 múltipla escolha + 20 V/F + 10 abertas

const questoesSimuladoCap13Ciencias = [
    // ========== QUESTÕES DE MÚLTIPLA ESCOLHA (50 questões) ==========
    
    // Questão 1
    {
        titulo: "Questão 1",
        pergunta: "Durante o dia, não conseguimos ver as estrelas no céu. Qual é a principal razão para isso?",
        opcoes: [
            "a) As estrelas desaparecem durante o dia",
            "b) A luz do Sol ofusca o brilho das estrelas",
            "c) As estrelas só existem à noite",
            "d) As nuvens cobrem todas as estrelas"
        ],
        respostaCorreta: 1,
        explicacao: "A luz do Sol é tão intensa que ofusca o brilho das estrelas durante o dia. As estrelas continuam no céu, mas não conseguimos vê-las porque a luz solar é muito mais forte."
    },

    // Questão 2
    {
        titulo: "Questão 2",
        pergunta: "Por que os pontos brilhantes que vemos no céu noturno (estrelas e planetas) parecem tão pequenos?",
        opcoes: [
            "a) Porque são astros muito pequenos",
            "b) Porque estão muito distantes da Terra",
            "c) Porque não têm luz própria",
            "d) Porque são cobertos por nuvens"
        ],
        respostaCorreta: 1,
        explicacao: "As estrelas e planetas são astros muito grandes, mas estão a uma grande distância da Terra. Por isso, aparecem como pontos pequenos no céu."
    },

    // Questão 3
    {
        titulo: "Questão 3",
        pergunta: "Qual é a estrela mais próxima da Terra?",
        opcoes: [
            "a) Antares",
            "b) Sírius",
            "c) Sol",
            "d) Betelgeuse"
        ],
        respostaCorreta: 2,
        explicacao: "O Sol é a estrela mais próxima da Terra. É por causa dessa proximidade que nós o vemos muito maior do que qualquer outra estrela."
    },

    // Questão 4
    {
        titulo: "Questão 4",
        pergunta: "A estrela Antares, mencionada no capítulo, tem qual característica em relação ao Sol?",
        opcoes: [
            "a) É menor que o Sol",
            "b) É do mesmo tamanho que o Sol",
            "c) É bem maior que o Sol",
            "d) Não é uma estrela verdadeira"
        ],
        respostaCorreta: 2,
        explicacao: "Antares é uma estrela bem maior que o Sol. Existem estrelas menores e também muito maiores que o Sol no universo."
    },

    // Questão 5
    {
        titulo: "Questão 5",
        pergunta: "Quantos planetas existem no Sistema Solar?",
        opcoes: [
            "a) 6 planetas",
            "b) 7 planetas",
            "c) 8 planetas",
            "d) 9 planetas"
        ],
        respostaCorreta: 2,
        explicacao: "O Sistema Solar possui 8 planetas que giram em torno do Sol: Mercúrio, Vênus, Terra, Marte, Júpiter, Saturno, Urano e Netuno."
    },

    // Questão 6
    {
        titulo: "Questão 6",
        pergunta: "Qual é o maior planeta do Sistema Solar?",
        opcoes: [
            "a) Terra",
            "b) Saturno",
            "c) Júpiter",
            "d) Netuno"
        ],
        respostaCorreta: 2,
        explicacao: "Júpiter é o maior de todos os planetas do Sistema Solar. Seu nome foi dado em homenagem ao deus mais poderoso da mitologia romana."
    },

    // Questão 7
    {
        titulo: "Questão 7",
        pergunta: "Qual é o menor planeta do Sistema Solar?",
        opcoes: [
            "a) Marte",
            "b) Vênus",
            "c) Mercúrio",
            "d) Terra"
        ],
        respostaCorreta: 2,
        explicacao: "Mercúrio é o menor planeta do Sistema Solar e também o mais próximo do Sol."
    },

    // Questão 8
    {
        titulo: "Questão 8",
        pergunta: "Alguns planetas são feitos de rochas, enquanto outros são feitos de gases. Qual dos planetas abaixo é feito principalmente de gases?",
        opcoes: [
            "a) Terra",
            "b) Marte",
            "c) Júpiter",
            "d) Mercúrio"
        ],
        respostaCorreta: 2,
        explicacao: "Júpiter é um planeta feito principalmente de gases, diferente da Terra e de Marte, que são planetas rochosos."
    },

    // Questão 9
    {
        titulo: "Questão 9",
        pergunta: "Quais planetas do Sistema Solar são visíveis a olho nu no céu?",
        opcoes: [
            "a) Apenas Terra e Marte",
            "b) Mercúrio, Vênus, Marte, Júpiter e Saturno",
            "c) Todos os 8 planetas",
            "d) Apenas Júpiter e Saturno"
        ],
        respostaCorreta: 1,
        explicacao: "Mercúrio, Vênus, Marte, Júpiter e Saturno são visíveis a olho nu. Urano e Netuno não podem ser vistos a olho nu porque estão muito distantes."
    },

    // Questão 10
    {
        titulo: "Questão 10",
        pergunta: "Por que Urano e Netuno não podem ser vistos a olho nu no céu?",
        opcoes: [
            "a) Porque são muito pequenos",
            "b) Porque estão muito distantes da Terra",
            "c) Porque não refletem luz",
            "d) Porque estão sempre atrás do Sol"
        ],
        respostaCorreta: 1,
        explicacao: "Urano e Netuno estão muito distantes da Terra e, por isso, não podem ser vistos a olho nu. É necessário usar um telescópio para observá-los."
    },

    // Questão 11
    {
        titulo: "Questão 11",
        pergunta: "O planeta Mercúrio recebeu esse nome em homenagem a qual deus da mitologia romana?",
        opcoes: [
            "a) Deus da guerra",
            "b) Deus mensageiro",
            "c) Deus dos mares",
            "d) Deus do tempo"
        ],
        respostaCorreta: 1,
        explicacao: "Mercúrio recebeu esse nome em homenagem ao deus mensageiro romano, que se movia rapidamente. Na mitologia grega, era chamado de Hermes."
    },

    // Questão 12
    {
        titulo: "Questão 12",
        pergunta: "O planeta Vênus foi nomeado em homenagem à deusa romana da beleza. Qual era o nome dessa deusa na mitologia grega?",
        opcoes: [
            "a) Atena",
            "b) Afrodite",
            "c) Hera",
            "d) Ártemis"
        ],
        respostaCorreta: 1,
        explicacao: "Vênus tem o mesmo nome da deusa romana da beleza e do amor. Na mitologia grega, ela era conhecida como Afrodite."
    },

    // Questão 13
    {
        titulo: "Questão 13",
        pergunta: "Por que o planeta Marte tem esse nome?",
        opcoes: [
            "a) Por causa de sua superfície avermelhada, lembrando o deus da guerra",
            "b) Por ser o maior planeta",
            "c) Por ter anéis ao seu redor",
            "d) Por ser feito de gelo"
        ],
        respostaCorreta: 0,
        explicacao: "Marte recebeu esse nome por causa de sua superfície avermelhada, que lembra o deus da guerra da mitologia romana. Na mitologia grega, era chamado de Ares."
    },

    // Questão 14
    {
        titulo: "Questão 14",
        pergunta: "Qual planeta é conhecido por ter o maior conjunto de anéis do Sistema Solar?",
        opcoes: [
            "a) Júpiter",
            "b) Urano",
            "c) Saturno",
            "d) Netuno"
        ],
        respostaCorreta: 2,
        explicacao: "Saturno é o segundo maior planeta do Sistema Solar e tem o maior conjunto de anéis. Seu nome vem do deus romano do tempo, chamado de Cronos na mitologia grega."
    },

    // Questão 15
    {
        titulo: "Questão 15",
        pergunta: "O que são constelações?",
        opcoes: [
            "a) Grupos de planetas que giram juntos",
            "b) Áreas no céu onde podemos encontrar conjuntos de estrelas e de outros astros",
            "c) Estrelas que se movem rapidamente",
            "d) Nuvens de gás no espaço"
        ],
        respostaCorreta: 1,
        explicacao: "Constelações são áreas no céu onde podemos encontrar conjuntos de estrelas e de outros astros. Desde a Antiguidade, muitas civilizações inventaram constelações e associavam histórias a elas."
    },

    // Questão 16
    {
        titulo: "Questão 16",
        pergunta: "As Três Marias fazem parte de qual constelação?",
        opcoes: [
            "a) Cruzeiro do Sul",
            "b) Órion",
            "c) Ursa Maior",
            "d) Escorpião"
        ],
        respostaCorreta: 1,
        explicacao: "As Três Marias fazem parte da constelação de Órion. Na mitologia grega, Órion era um caçador gigante."
    },

    // Questão 17
    {
        titulo: "Questão 17",
        pergunta: "Qual constelação é muito importante para localização no Brasil e forma uma cruz?",
        opcoes: [
            "a) Órion",
            "b) Escorpião",
            "c) Cruzeiro do Sul",
            "d) Ursa Maior"
        ],
        respostaCorreta: 2,
        explicacao: "O Cruzeiro do Sul é muito importante para localização no Brasil. Quatro estrelas brilhantes formam uma cruz, e uma quinta estrela, chamada de Intrometida, não se encaixa na figura da cruz."
    },

    // Questão 18
    {
        titulo: "Questão 18",
        pergunta: "Por que as estrelas parecem se mover juntas no céu durante a noite?",
        opcoes: [
            "a) Porque as estrelas realmente se movem juntas",
            "b) Porque a Terra gira (movimento de rotação)",
            "c) Porque o Sol empurra as estrelas",
            "d) Porque as estrelas orbitam a Lua"
        ],
        respostaCorreta: 1,
        explicacao: "As estrelas parecem se mover juntas porque a Terra está girando (movimento de rotação). Durante o movimento de rotação, a paisagem do céu também vai mudando."
    },

    // Questão 19
    {
        titulo: "Questão 19",
        pergunta: "Qual é a principal diferença entre estrelas e planetas em relação à luz?",
        opcoes: [
            "a) Estrelas emitem luz própria, planetas não emitem luz própria",
            "b) Planetas emitem luz própria, estrelas não emitem luz própria",
            "c) Ambos emitem luz própria",
            "d) Nenhum emite luz própria"
        ],
        respostaCorreta: 0,
        explicacao: "Estrelas emitem luz própria, sendo astros luminosos. Já os planetas não emitem luz própria, sendo astros iluminados pelas estrelas."
    },

    // Questão 20
    {
        titulo: "Questão 20",
        pergunta: "Os gregos antigos chamavam os planetas de 'astros errantes'. Por quê?",
        opcoes: [
            "a) Porque os planetas se movem de forma diferente das estrelas",
            "b) Porque os planetas desaparecem do céu",
            "c) Porque os planetas mudam de cor",
            "d) Porque os planetas são muito pequenos"
        ],
        respostaCorreta: 0,
        explicacao: "Os gregos chamavam os planetas de 'astros errantes' porque, ao observar o céu durante vários dias, percebiam que os planetas não se movem da mesma maneira que as estrelas, parecendo passar em outros sentidos."
    },

    // Questão 21
    {
        titulo: "Questão 21",
        pergunta: "Quando vemos um ponto brilhante no céu logo quando o Sol está se pondo ou logo antes dele nascer, provavelmente estamos vendo:",
        opcoes: [
            "a) Uma estrela distante",
            "b) O planeta Vênus",
            "c) A Lua",
            "d) Um satélite artificial"
        ],
        respostaCorreta: 1,
        explicacao: "O ponto bem brilhante que vemos no céu logo quando o Sol está se pondo ou logo antes dele nascer não é uma estrela, e sim o planeta Vênus."
    },

    // Questão 22
    {
        titulo: "Questão 22",
        pergunta: "Por que vemos a Lua em diferentes formatos ao longo do mês?",
        opcoes: [
            "a) Porque a Lua muda de tamanho",
            "b) Porque vemos diferentes partes iluminadas pelo Sol",
            "c) Porque a Lua se aproxima e se afasta da Terra",
            "d) Porque nuvens cobrem partes da Lua"
        ],
        respostaCorreta: 1,
        explicacao: "A Lua está sempre inteira no céu, mas vemos apenas um pedaço dela iluminado pelo Sol. À medida que a Lua gira em torno da Terra, vemos diferentes partes iluminadas."
    },

    // Questão 23
    {
        titulo: "Questão 23",
        pergunta: "Quantas fases principais a Lua possui?",
        opcoes: [
            "a) 2 fases",
            "b) 3 fases",
            "c) 4 fases",
            "d) 5 fases"
        ],
        respostaCorreta: 2,
        explicacao: "A Lua possui 4 fases principais: Lua Cheia, Lua Nova, Lua Quarto Minguante e Lua Quarto Crescente."
    },

    // Questão 24
    {
        titulo: "Questão 24",
        pergunta: "Aproximadamente quanto tempo a Lua leva para completar um giro em torno da Terra?",
        opcoes: [
            "a) 7 dias",
            "b) 14 dias",
            "c) 28 dias",
            "d) 365 dias"
        ],
        respostaCorreta: 2,
        explicacao: "A Lua realiza um giro completo em torno da Terra em aproximadamente 28 dias. Esse movimento gera as fases da Lua."
    },

    // Questão 25
    {
        titulo: "Questão 25",
        pergunta: "Na fase de Lua Cheia, como vemos a Lua?",
        opcoes: [
            "a) Totalmente escura",
            "b) Totalmente iluminada",
            "c) Metade iluminada",
            "d) Não conseguimos ver a Lua"
        ],
        respostaCorreta: 1,
        explicacao: "Na fase de Lua Cheia, vemos a Lua totalmente iluminada pelo Sol, como uma esfera brilhante completa no céu."
    },



    // Questão 26
    {
        titulo: "Questão 26",
        pergunta: "Em qual fase da Lua não conseguimos vê-la no céu?",
        opcoes: [
            "a) Lua Cheia",
            "b) Lua Nova",
            "c) Quarto Crescente",
            "d) Quarto Minguante"
        ],
        respostaCorreta: 1,
        explicacao: "Na fase de Lua Nova, a Lua está entre a Terra e o Sol, e a parte iluminada não está voltada para nós. Por isso, não conseguimos vê-la no céu."
    },

    // Questão 27
    {
        titulo: "Questão 27",
        pergunta: "Um estudante observou que um farol de carro aceso pode ser visto tanto de dia quanto de noite. Essa observação ajuda a explicar qual conceito astronômico?",
        opcoes: [
            "a) Que a Lua tem fases",
            "b) Que as estrelas emitem luz própria, mas são ofuscadas pelo Sol durante o dia",
            "c) Que os planetas giram em torno do Sol",
            "d) Que as constelações mudam de posição"
        ],
        respostaCorreta: 1,
        explicacao: "O farol emite luz própria tanto de dia quanto de noite, mas durante o dia sua luz é ofuscada pelo Sol. Da mesma forma, as estrelas emitem luz própria, mas não as vemos de dia porque a luz do Sol é muito intensa."
    },

    // Questão 28
    {
        titulo: "Questão 28",
        pergunta: "Se você observar o céu durante vários dias e notar que um ponto brilhante se move de forma diferente das estrelas, você provavelmente está observando:",
        opcoes: [
            "a) Uma estrela cadente",
            "b) Um planeta",
            "c) Uma constelação",
            "d) Um cometa"
        ],
        respostaCorreta: 1,
        explicacao: "Os planetas se movem de forma diferente das estrelas no céu. Enquanto as estrelas parecem se mover juntas, os planetas passam em outros sentidos, por isso eram chamados de 'astros errantes'."
    },

    // Questão 29
    {
        titulo: "Questão 29",
        pergunta: "Qual planeta tem aproximadamente o mesmo tamanho da Terra?",
        opcoes: [
            "a) Mercúrio",
            "b) Marte",
            "c) Vênus",
            "d) Júpiter"
        ],
        respostaCorreta: 2,
        explicacao: "Vênus é quase do mesmo tamanho da Terra. Mercúrio é menor que a Terra, enquanto Júpiter é muito maior."
    },

    // Questão 30
    {
        titulo: "Questão 30",
        pergunta: "Observe a seguinte afirmação: 'Quando meu colega se afasta de mim, ele parece ser menor'. Essa ideia explica por que:",
        opcoes: [
            "a) As estrelas parecem pontos pequenos no céu",
            "b) A Lua tem fases",
            "c) Os planetas giram em torno do Sol",
            "d) As constelações formam figuras"
        ],
        respostaCorreta: 0,
        explicacao: "Assim como uma pessoa parece ficar menor quando se afasta de nós, os planetas e as estrelas parecem pequenos porque estão longe de nós, mesmo sendo astros muito grandes."
    },

    // Questão 31
    {
        titulo: "Questão 31",
        pergunta: "Qual característica é comum a todos os planetas do Sistema Solar?",
        opcoes: [
            "a) Todos têm anéis",
            "b) Todos têm formato de esfera e giram em torno do Sol",
            "c) Todos são feitos de rochas",
            "d) Todos têm água na superfície"
        ],
        respostaCorreta: 1,
        explicacao: "Todos os planetas do Sistema Solar têm formato de esfera e giram em torno do Sol. No entanto, eles são muito diferentes entre si em composição, tamanho e outras características."
    },

    // Questão 32
    {
        titulo: "Questão 32",
        pergunta: "Por que o Sol parece muito maior do que as outras estrelas quando observado da Terra?",
        opcoes: [
            "a) Porque o Sol é a maior estrela do universo",
            "b) Porque o Sol está muito mais próximo da Terra do que as outras estrelas",
            "c) Porque o Sol emite mais luz que outras estrelas",
            "d) Porque o Sol é feito de materiais diferentes"
        ],
        respostaCorreta: 1,
        explicacao: "O Sol parece muito maior porque é a estrela mais próxima da Terra. A proximidade faz com que o vejamos muito maior do que qualquer outra estrela, mesmo que existam estrelas maiores que o Sol no universo."
    },

    // Questão 33
    {
        titulo: "Questão 33",
        pergunta: "Qual planeta do Sistema Solar foi nomeado em homenagem ao deus romano do tempo?",
        opcoes: [
            "a) Júpiter",
            "b) Saturno",
            "c) Netuno",
            "d) Urano"
        ],
        respostaCorreta: 1,
        explicacao: "Saturno recebeu esse nome em homenagem ao deus romano do tempo, que na mitologia grega era chamado de Cronos."
    },

    // Questão 34
    {
        titulo: "Questão 34",
        pergunta: "Netuno foi nomeado em homenagem ao deus dos mares. Qual era o nome desse deus na mitologia grega?",
        opcoes: [
            "a) Zeus",
            "b) Hades",
            "c) Poseidon",
            "d) Apolo"
        ],
        respostaCorreta: 2,
        explicacao: "Netuno é o deus dos mares para os romanos. Na mitologia grega, esse deus era chamado de Poseidon."
    },

    // Questão 35
    {
        titulo: "Questão 35",
        pergunta: "Quantas estrelas formam a figura da cruz no Cruzeiro do Sul?",
        opcoes: [
            "a) 3 estrelas",
            "b) 4 estrelas",
            "c) 5 estrelas",
            "d) 6 estrelas"
        ],
        respostaCorreta: 1,
        explicacao: "Quatro estrelas brilhantes formam a cruz do Cruzeiro do Sul. Uma quinta estrela, chamada de Intrometida, não se encaixa na figura da cruz."
    },

    // Questão 36
    {
        titulo: "Questão 36",
        pergunta: "Durante a noite, você observa que algumas estrelas parecem 'caminhar' juntas no céu. Isso acontece porque:",
        opcoes: [
            "a) As estrelas estão realmente se movendo juntas pelo espaço",
            "b) A Terra está girando (movimento de rotação)",
            "c) As estrelas orbitam umas às outras",
            "d) O vento espacial empurra as estrelas"
        ],
        respostaCorreta: 1,
        explicacao: "As estrelas parecem se mover juntas no céu porque a Terra está girando em seu movimento de rotação. Durante esse movimento, a paisagem do céu vai mudando."
    },

    // Questão 37
    {
        titulo: "Questão 37",
        pergunta: "Qual é a diferença fundamental entre um astro luminoso e um astro iluminado?",
        opcoes: [
            "a) Astros luminosos são maiores que astros iluminados",
            "b) Astros luminosos emitem luz própria, astros iluminados não",
            "c) Astros luminosos são mais quentes que astros iluminados",
            "d) Astros luminosos ficam mais próximos da Terra"
        ],
        respostaCorreta: 1,
        explicacao: "Astros luminosos, como as estrelas, emitem luz própria. Já os astros iluminados, como os planetas, não emitem luz própria e são iluminados pelas estrelas."
    },

    // Questão 38
    {
        titulo: "Questão 38",
        pergunta: "Em nosso Sistema Solar, quantos planetas se movem ao redor do Sol?",
        opcoes: [
            "a) 5 planetas",
            "b) 6 planetas",
            "c) 7 planetas",
            "d) 8 planetas"
        ],
        respostaCorreta: 3,
        explicacao: "Em nosso Sistema Solar, 8 planetas se movem ao redor do Sol: Mercúrio, Vênus, Terra, Marte, Júpiter, Saturno, Urano e Netuno."
    },

    // Questão 39
    {
        titulo: "Questão 39",
        pergunta: "Por que a parte da Lua que não está iluminada pelo Sol não pode ser vista da Terra?",
        opcoes: [
            "a) Porque essa parte não existe",
            "b) Porque essa parte não recebe luz e fica escura",
            "c) Porque está coberta por nuvens",
            "d) Porque está muito longe"
        ],
        respostaCorreta: 1,
        explicacao: "A parte da Lua que não está iluminada pelo Sol não pode ser vista porque não recebe luz, ficando escura. Só conseguimos ver a parte que está sendo iluminada."
    },

    // Questão 40
    {
        titulo: "Questão 40",
        pergunta: "As fases da Lua dependem de qual fator principal?",
        opcoes: [
            "a) Da distância entre a Lua e a Terra",
            "b) Da quantidade de luz que a Lua recebe do Sol",
            "c) Do tamanho da Lua",
            "d) Da temperatura da Lua"
        ],
        respostaCorreta: 1,
        explicacao: "As fases da Lua dependem da quantidade de luz que ela recebe do Sol e de qual parte iluminada conseguimos ver da Terra."
    },

    // Questão 41
    {
        titulo: "Questão 41",
        pergunta: "Um estudante afirmou: 'A Lua sumiu do céu durante a Lua Nova'. Essa afirmação está:",
        opcoes: [
            "a) Correta, pois a Lua realmente desaparece",
            "b) Incorreta, pois a Lua está no céu, mas não conseguimos vê-la porque não está iluminada na nossa direção",
            "c) Correta, pois a Lua vai para o outro lado da Terra",
            "d) Incorreta, pois a Lua fica atrás do Sol"
        ],
        respostaCorreta: 1,
        explicacao: "A afirmação está incorreta. Durante a Lua Nova, a Lua está no céu, mas não conseguimos vê-la porque a parte iluminada pelo Sol não está voltada para a Terra."
    },

    // Questão 42
    {
        titulo: "Questão 42",
        pergunta: "Mercúrio e Vênus só podem ser vistos ao amanhecer ou ao anoitecer. Por quê?",
        opcoes: [
            "a) Porque são planetas muito pequenos",
            "b) Porque ficam muito próximos do Sol e só são visíveis quando o céu está mais escuro",
            "c) Porque só aparecem nessas horas do dia",
            "d) Porque são cobertos por nuvens durante o dia"
        ],
        respostaCorreta: 1,
        explicacao: "Mercúrio e Vênus ficam muito próximos do Sol e, por isso, só conseguimos vê-los ao amanhecer ou ao anoitecer, quando o céu está mais escuro."
    },

    // Questão 43
    {
        titulo: "Questão 43",
        pergunta: "Qual planeta é conhecido por sua superfície avermelhada?",
        opcoes: [
            "a) Vênus",
            "b) Júpiter",
            "c) Marte",
            "d) Saturno"
        ],
        respostaCorreta: 2,
        explicacao: "Marte é conhecido por sua superfície avermelhada. Por isso, recebeu o nome do deus da guerra da mitologia romana."
    },

    // Questão 44
    {
        titulo: "Questão 44",
        pergunta: "Qual afirmação sobre os oceanos dos planetas está correta?",
        opcoes: [
            "a) Todos os planetas têm oceanos de água e sal",
            "b) Apenas a Terra tem oceanos",
            "c) Alguns planetas têm oceanos feitos de outros materiais, não apenas água e sal",
            "d) Nenhum planeta tem oceanos"
        ],
        respostaCorreta: 2,
        explicacao: "Alguns planetas têm água em sua superfície ou interior, mas os oceanos podem ser feitos de outros materiais, não apenas água e sal como na Terra."
    },

    // Questão 45
    {
        titulo: "Questão 45",
        pergunta: "As civilizações antigas inventaram constelações e associavam histórias a elas. Isso demonstra que:",
        opcoes: [
            "a) As constelações mudam de forma ao longo do tempo",
            "b) As constelações são importantes apenas para a ciência moderna",
            "c) As constelações têm significado cultural e histórico para diferentes povos",
            "d) As constelações são iguais em todas as culturas"
        ],
        respostaCorreta: 2,
        explicacao: "As constelações têm significado cultural e histórico para diferentes povos. Desde a Antiguidade, muitas civilizações inventaram constelações e associavam histórias ligadas às suas crenças."
    },

    // Questão 46
    {
        titulo: "Questão 46",
        pergunta: "Urano foi nomeado em homenagem ao deus grego do Universo. Na mitologia romana, como esse deus era conhecido?",
        opcoes: [
            "a) Como Júpiter",
            "b) Como Céu",
            "c) Como Netuno",
            "d) Como Marte"
        ],
        respostaCorreta: 1,
        explicacao: "Urano é o deus grego do Universo. Na mitologia romana, era conhecido como Céu (Caelus)."
    },

    // Questão 47
    {
        titulo: "Questão 47",
        pergunta: "Qual é a ordem correta dos planetas do Sistema Solar, do mais próximo ao mais distante do Sol?",
        opcoes: [
            "a) Mercúrio, Vênus, Terra, Marte, Júpiter, Saturno, Urano, Netuno",
            "b) Vênus, Mercúrio, Terra, Marte, Saturno, Júpiter, Netuno, Urano",
            "c) Mercúrio, Marte, Terra, Vênus, Júpiter, Saturno, Urano, Netuno",
            "d) Terra, Vênus, Mercúrio, Marte, Júpiter, Saturno, Netuno, Urano"
        ],
        respostaCorreta: 0,
        explicacao: "A ordem correta dos planetas, do mais próximo ao mais distante do Sol, é: Mercúrio, Vênus, Terra, Marte, Júpiter, Saturno, Urano e Netuno."
    },

    // Questão 48
    {
        titulo: "Questão 48",
        pergunta: "Se você observar o céu durante várias noites seguidas, no mesmo horário, verá que as estrelas parecem estar em posições ligeiramente diferentes. Isso ocorre porque:",
        opcoes: [
            "a) As estrelas se movem rapidamente pelo espaço",
            "b) A Terra está em movimento de translação ao redor do Sol",
            "c) As estrelas mudam de lugar toda noite",
            "d) A Lua empurra as estrelas"
        ],
        respostaCorreta: 1,
        explicacao: "Durante o movimento de translação da Terra ao redor do Sol, a paisagem do céu vai mudando ao longo dos dias. Por isso, as estrelas parecem estar em posições ligeiramente diferentes quando observadas no mesmo horário em noites diferentes."
    },

    // Questão 49
    {
        titulo: "Questão 49",
        pergunta: "Qual fase da Lua vem logo após a Lua Nova?",
        opcoes: [
            "a) Lua Cheia",
            "b) Quarto Minguante",
            "c) Quarto Crescente",
            "d) Lua Nova novamente"
        ],
        respostaCorreta: 2,
        explicacao: "Após a Lua Nova, vem a fase Quarto Crescente, quando começamos a ver uma parte iluminada da Lua que vai crescendo."
    },

    // Questão 50
    {
        titulo: "Questão 50",
        pergunta: "Por que os planetas são sempre muito menores que as estrelas ao redor das quais orbitam?",
        opcoes: [
            "a) Porque os planetas são feitos de materiais mais leves",
            "b) Porque essa é uma característica fundamental dos sistemas planetários",
            "c) Porque os planetas perdem massa com o tempo",
            "d) Porque as estrelas absorvem a massa dos planetas"
        ],
        respostaCorreta: 1,
        explicacao: "Os planetas são sempre muito menores que as estrelas ao redor das quais orbitam. Essa é uma característica fundamental dos sistemas planetários, como o nosso Sistema Solar."
    },



    // ========== QUESTÕES VERDADEIRO OU FALSO (20 questões) ==========
    
    // Questão 51
    {
        titulo: "Questão 51",
        pergunta: "Analise as afirmativas sobre os astros do céu noturno e marque a alternativa CORRETA:",
        opcoes: [
            "a) As estrelas desaparecem durante o dia e só existem à noite",
            "b) Durante o dia, não vemos as estrelas porque a luz do Sol ofusca o brilho delas",
            "c) Os pontos brilhantes no céu são sempre estrelas, nunca planetas",
            "d) O Sol não é uma estrela, é um planeta muito quente"
        ],
        respostaCorreta: 1,
        explicacao: "A afirmativa correta é a letra b. Durante o dia, as estrelas continuam no céu, mas não conseguimos vê-las porque a luz do Sol é muito intensa e ofusca o brilho delas."
    },

    // Questão 52
    {
        titulo: "Questão 52",
        pergunta: "Sobre o Sol, marque a afirmativa VERDADEIRA:",
        opcoes: [
            "a) O Sol não é uma estrela",
            "b) O Sol é muito pequeno comparado a outras estrelas",
            "c) O Sol é a estrela mais próxima da Terra",
            "d) O Sol é um planeta próximo da Terra"
        ],
        respostaCorreta: 2,
        explicacao: "A afirmativa verdadeira é a letra c. O Sol é a estrela mais próxima da Terra, e é por causa dessa proximidade que o vemos muito maior do que qualquer outra estrela."
    },

    // Questão 53
    {
        titulo: "Questão 53",
        pergunta: "Sobre as estrelas, identifique a afirmação CORRETA:",
        opcoes: [
            "a) Todas as estrelas têm o mesmo tamanho do Sol",
            "b) Existem estrelas menores e também muito maiores que o Sol",
            "c) As estrelas parecem pequenas porque são realmente pequenas",
            "d) As estrelas só brilham à noite"
        ],
        respostaCorreta: 1,
        explicacao: "A afirmação correta é a letra b. Existem estrelas menores e também muito maiores que o Sol, como a estrela Antares, que é bem maior que o Sol."
    },

    // Questão 54
    {
        titulo: "Questão 54",
        pergunta: "Sobre o Sistema Solar, marque a alternativa VERDADEIRA:",
        opcoes: [
            "a) O Sistema Solar possui 9 planetas",
            "b) Todos os planetas do Sistema Solar têm o mesmo tamanho",
            "c) O Sistema Solar possui 8 planetas que giram em torno do Sol",
            "d) A Terra é o maior planeta do Sistema Solar"
        ],
        respostaCorreta: 2,
        explicacao: "A alternativa verdadeira é a letra c. O Sistema Solar possui 8 planetas que giram em torno do Sol: Mercúrio, Vênus, Terra, Marte, Júpiter, Saturno, Urano e Netuno."
    },

    // Questão 55
    {
        titulo: "Questão 55",
        pergunta: "Sobre os planetas do Sistema Solar, identifique a afirmativa CORRETA:",
        opcoes: [
            "a) Todos os planetas são feitos de rochas",
            "b) Todos os planetas são feitos de gases",
            "c) Alguns planetas são feitos de rochas e outros de gases",
            "d) Nenhum planeta tem água"
        ],
        respostaCorreta: 2,
        explicacao: "A afirmativa correta é a letra c. Alguns planetas são feitos de rochas, como a Terra, e outros são feitos de gases, como Júpiter."
    },

    // Questão 56
    {
        titulo: "Questão 56",
        pergunta: "Sobre a visibilidade dos planetas, marque a alternativa VERDADEIRA:",
        opcoes: [
            "a) Todos os 8 planetas podem ser vistos a olho nu",
            "b) Nenhum planeta pode ser visto a olho nu",
            "c) Apenas Júpiter pode ser visto a olho nu",
            "d) Mercúrio, Vênus, Marte, Júpiter e Saturno são visíveis a olho nu"
        ],
        respostaCorreta: 3,
        explicacao: "A alternativa verdadeira é a letra d. Mercúrio, Vênus, Marte, Júpiter e Saturno são visíveis a olho nu. Urano e Netuno não podem ser vistos a olho nu porque estão muito distantes."
    },

    // Questão 57
    {
        titulo: "Questão 57",
        pergunta: "Sobre Urano e Netuno, identifique a afirmação CORRETA:",
        opcoes: [
            "a) São visíveis a olho nu em qualquer noite",
            "b) Não são visíveis a olho nu porque estão muito distantes",
            "c) São os planetas mais próximos do Sol",
            "d) São maiores que Júpiter"
        ],
        respostaCorreta: 1,
        explicacao: "A afirmação correta é a letra b. Urano e Netuno não são visíveis a olho nu porque estão muito distantes da Terra. É necessário usar um telescópio para observá-los."
    },

    // Questão 58
    {
        titulo: "Questão 58",
        pergunta: "Sobre os nomes dos planetas, marque a alternativa VERDADEIRA:",
        opcoes: [
            "a) Os nomes dos planetas não têm relação com mitologia",
            "b) Os planetas receberam nomes de deuses gregos e romanos",
            "c) Todos os planetas têm nomes de animais",
            "d) Os nomes dos planetas foram inventados recentemente"
        ],
        respostaCorreta: 1,
        explicacao: "A alternativa verdadeira é a letra b. Os planetas receberam nomes de deuses da mitologia grega e romana, como Mercúrio (mensageiro), Vênus (beleza), Marte (guerra), entre outros."
    },

    // Questão 59
    {
        titulo: "Questão 59",
        pergunta: "Sobre o planeta Júpiter, identifique a afirmação CORRETA:",
        opcoes: [
            "a) É o menor planeta do Sistema Solar",
            "b) É o maior de todos os planetas do Sistema Solar",
            "c) É feito apenas de rochas",
            "d) Não pode ser visto a olho nu"
        ],
        respostaCorreta: 1,
        explicacao: "A afirmação correta é a letra b. Júpiter é o maior de todos os planetas do Sistema Solar e seu nome foi dado em homenagem ao deus mais poderoso da mitologia romana."
    },

    // Questão 60
    {
        titulo: "Questão 60",
        pergunta: "Sobre Saturno, marque a alternativa VERDADEIRA:",
        opcoes: [
            "a) Não tem anéis ao seu redor",
            "b) É o menor planeta do Sistema Solar",
            "c) Tem o maior conjunto de anéis do Sistema Solar",
            "d) Não pode ser visto da Terra"
        ],
        respostaCorreta: 2,
        explicacao: "A alternativa verdadeira é a letra c. Saturno é o segundo maior planeta do Sistema Solar e tem o maior conjunto de anéis."
    },

    // Questão 61
    {
        titulo: "Questão 61",
        pergunta: "Sobre as constelações, identifique a afirmação CORRETA:",
        opcoes: [
            "a) Constelações são grupos de planetas",
            "b) Constelações são áreas no céu onde podemos encontrar conjuntos de estrelas",
            "c) Constelações foram inventadas apenas recentemente",
            "d) Todas as culturas veem as mesmas constelações da mesma forma"
        ],
        respostaCorreta: 1,
        explicacao: "A afirmação correta é a letra b. Constelações são áreas no céu onde podemos encontrar conjuntos de estrelas e de outros astros. Desde a Antiguidade, muitas civilizações inventaram constelações."
    },

    // Questão 62
    {
        titulo: "Questão 62",
        pergunta: "Sobre a constelação de Órion, marque a alternativa VERDADEIRA:",
        opcoes: [
            "a) As Três Marias não fazem parte dessa constelação",
            "b) Órion era um deus romano do mar",
            "c) As Três Marias fazem parte da constelação de Órion",
            "d) Órion não pode ser vista do Brasil"
        ],
        respostaCorreta: 2,
        explicacao: "A alternativa verdadeira é a letra c. As Três Marias fazem parte da constelação de Órion. Na mitologia grega, Órion era um caçador gigante."
    },

    // Questão 63
    {
        titulo: "Questão 63",
        pergunta: "Sobre o Cruzeiro do Sul, identifique a afirmação CORRETA:",
        opcoes: [
            "a) É formado por 3 estrelas que formam uma cruz",
            "b) Não é importante para localização no Brasil",
            "c) É formado por 4 estrelas brilhantes que formam uma cruz",
            "d) Não pode ser visto no hemisfério sul"
        ],
        respostaCorreta: 2,
        explicacao: "A afirmação correta é a letra c. O Cruzeiro do Sul é formado por 4 estrelas brilhantes que formam uma cruz. Uma quinta estrela, chamada de Intrometida, não se encaixa na figura da cruz."
    },

    // Questão 64
    {
        titulo: "Questão 64",
        pergunta: "Sobre o movimento aparente das estrelas, marque a alternativa VERDADEIRA:",
        opcoes: [
            "a) As estrelas realmente se movem juntas pelo espaço",
            "b) As estrelas parecem se mover porque a Terra está girando",
            "c) As estrelas ficam paradas e nunca parecem se mover",
            "d) As estrelas se movem porque o Sol as empurra"
        ],
        respostaCorreta: 1,
        explicacao: "A alternativa verdadeira é a letra b. As estrelas parecem se mover juntas no céu porque a Terra está girando em seu movimento de rotação."
    },

    // Questão 65
    {
        titulo: "Questão 65",
        pergunta: "Sobre a diferença entre estrelas e planetas, identifique a afirmação CORRETA:",
        opcoes: [
            "a) Estrelas e planetas emitem a mesma quantidade de luz própria",
            "b) Estrelas emitem luz própria, planetas não emitem luz própria",
            "c) Planetas emitem luz própria, estrelas não emitem luz própria",
            "d) Nem estrelas nem planetas emitem luz própria"
        ],
        respostaCorreta: 1,
        explicacao: "A afirmação correta é a letra b. Estrelas emitem luz própria, sendo astros luminosos. Já os planetas não emitem luz própria, sendo astros iluminados pelas estrelas."
    },

    // Questão 66
    {
        titulo: "Questão 66",
        pergunta: "Sobre o movimento dos planetas no céu, marque a alternativa VERDADEIRA:",
        opcoes: [
            "a) Os planetas se movem exatamente da mesma forma que as estrelas",
            "b) Os planetas não se movem da mesma forma que as estrelas, parecendo passar em outros sentidos",
            "c) Os planetas ficam sempre no mesmo lugar no céu",
            "d) Os planetas só se movem durante o dia"
        ],
        respostaCorreta: 1,
        explicacao: "A alternativa verdadeira é a letra b. Os planetas não se movem da mesma forma que as estrelas no céu, parecendo passar em outros sentidos. Por isso, os gregos os chamavam de 'astros errantes'."
    },

    // Questão 67
    {
        titulo: "Questão 67",
        pergunta: "Sobre o planeta Vênus, identifique a afirmação CORRETA:",
        opcoes: [
            "a) Vênus nunca pode ser visto da Terra",
            "b) Vênus é uma estrela, não um planeta",
            "c) O ponto brilhante visto ao pôr ou nascer do Sol é frequentemente o planeta Vênus",
            "d) Vênus é o maior planeta do Sistema Solar"
        ],
        respostaCorreta: 2,
        explicacao: "A afirmação correta é a letra c. O ponto bem brilhante que vemos no céu logo quando o Sol está se pondo ou logo antes dele nascer não é uma estrela, e sim o planeta Vênus."
    },

    // Questão 68
    {
        titulo: "Questão 68",
        pergunta: "Sobre a Lua, marque a alternativa VERDADEIRA:",
        opcoes: [
            "a) A Lua muda de tamanho ao longo do mês",
            "b) A Lua está sempre inteira no céu, mas vemos apenas a parte iluminada pelo Sol",
            "c) A Lua desaparece completamente durante a Lua Nova",
            "d) A Lua emite luz própria como as estrelas"
        ],
        respostaCorreta: 1,
        explicacao: "A alternativa verdadeira é a letra b. A Lua está sempre inteira no céu, mas vemos apenas um pedaço dela iluminado pelo Sol. O formato aparente muda conforme a Lua gira em torno da Terra."
    },

    // Questão 69
    {
        titulo: "Questão 69",
        pergunta: "Sobre as fases da Lua, identifique a afirmação CORRETA:",
        opcoes: [
            "a) A Lua tem 2 fases principais",
            "b) A Lua tem 6 fases principais",
            "c) A Lua tem 4 fases principais: Cheia, Nova, Quarto Minguante e Quarto Crescente",
            "d) A Lua não tem fases"
        ],
        respostaCorreta: 2,
        explicacao: "A afirmação correta é a letra c. A Lua tem 4 fases principais: Lua Cheia, Lua Nova, Lua Quarto Minguante e Lua Quarto Crescente."
    },

    // Questão 70
    {
        titulo: "Questão 70",
        pergunta: "Sobre o ciclo lunar, marque a alternativa VERDADEIRA:",
        opcoes: [
            "a) A Lua completa um giro em torno da Terra em aproximadamente 7 dias",
            "b) A Lua completa um giro em torno da Terra em aproximadamente 28 dias",
            "c) A Lua completa um giro em torno da Terra em aproximadamente 365 dias",
            "d) A Lua não gira em torno da Terra"
        ],
        respostaCorreta: 1,
        explicacao: "A alternativa verdadeira é a letra b. A Lua realiza um giro completo em torno da Terra em aproximadamente 28 dias. Esse movimento gera as fases da Lua."
    },



    // ========== QUESTÕES ABERTAS (10 questões) ==========
    
    // Questão 71
    {
        titulo: "Questão 71",
        pergunta: "Explique por que não conseguimos ver as estrelas durante o dia, mesmo sabendo que elas continuam no céu.",
        tipo: "aberta",
        respostaEsperada: "Não conseguimos ver as estrelas durante o dia porque a luz do Sol é muito intensa e ofusca o brilho das estrelas. As estrelas continuam emitindo luz própria, mas essa luz fica 'invisível' para nós devido à intensidade da luz solar.",
        explicacao: "Durante o dia, a luz do Sol é tão intensa que ofusca o brilho das estrelas. É como tentar ver a luz de um farol de carro aceso durante o dia - a luz está lá, mas é ofuscada pela luz solar."
    },

    // Questão 72
    {
        titulo: "Questão 72",
        pergunta: "Por que o Sol parece muito maior do que as outras estrelas quando observado da Terra? Explique sua resposta.",
        tipo: "aberta",
        respostaEsperada: "O Sol parece muito maior porque é a estrela mais próxima da Terra. A proximidade faz com que vejamos o Sol com um tamanho aparente muito maior do que outras estrelas, mesmo que existam estrelas maiores que o Sol no universo.",
        explicacao: "O Sol é a estrela mais próxima da Terra. Por causa dessa proximidade, nós o vemos muito maior do que qualquer outra estrela. Existem estrelas bem maiores que o Sol, mas elas estão muito distantes e por isso parecem pontos pequenos."
    },

    // Questão 73
    {
        titulo: "Questão 73",
        pergunta: "Descreva as principais diferenças entre um planeta rochoso e um planeta gasoso, dando exemplos de cada tipo.",
        tipo: "aberta",
        respostaEsperada: "Planetas rochosos são feitos principalmente de rochas e materiais sólidos, como a Terra e Marte. Planetas gasosos são feitos principalmente de gases, como Júpiter e Saturno. Os planetas rochosos geralmente são menores e mais densos, enquanto os gasosos são maiores e menos densos.",
        explicacao: "Os planetas do Sistema Solar são muito diferentes entre si. Alguns são feitos de rochas (como Terra e Marte), enquanto outros são feitos de gases (como Júpiter e Saturno). Essa é uma das principais diferenças na composição dos planetas."
    },

    // Questão 74
    {
        titulo: "Questão 74",
        pergunta: "Explique por que Urano e Netuno não podem ser vistos a olho nu da Terra.",
        tipo: "aberta",
        respostaEsperada: "Urano e Netuno não podem ser vistos a olho nu porque estão muito distantes da Terra. Mesmo sendo planetas grandes, a grande distância faz com que apareçam muito pequenos e fracos no céu, sendo necessário usar um telescópio para observá-los.",
        explicacao: "Urano e Netuno estão muito longe da Terra e, por isso, não podem ser vistos a olho nu. É necessário utilizar um telescópio para observar esses planetas distantes."
    },

    // Questão 75
    {
        titulo: "Questão 75",
        pergunta: "O que são constelações e qual é a sua importância cultural? Dê um exemplo de constelação.",
        tipo: "aberta",
        respostaEsperada: "Constelações são áreas no céu onde podemos encontrar conjuntos de estrelas e de outros astros, formando figuras. Elas têm importância cultural porque desde a Antiguidade, muitas civilizações inventaram constelações e associavam histórias ligadas às suas crenças. Exemplos: Órion, Cruzeiro do Sul.",
        explicacao: "Constelações são áreas no céu com conjuntos de estrelas. Desde a Antiguidade, muitas civilizações inventaram constelações e associavam histórias a elas. Exemplos incluem Órion (caçador gigante) e o Cruzeiro do Sul (importante para localização no Brasil)."
    },

    // Questão 76
    {
        titulo: "Questão 76",
        pergunta: "Por que as estrelas parecem se mover juntas no céu durante a noite? Explique o fenômeno.",
        tipo: "aberta",
        respostaEsperada: "As estrelas parecem se mover juntas no céu porque a Terra está girando em seu movimento de rotação. As estrelas não estão realmente se movendo juntas, mas a rotação da Terra faz com que a paisagem do céu vá mudando, dando a impressão de que as estrelas caminham juntas.",
        explicacao: "As estrelas parecem se mover juntas no céu porque a Terra está girando (movimento de rotação). Durante esse movimento, a paisagem do céu também vai mudando, criando a ilusão de que as estrelas se movem."
    },

    // Questão 77
    {
        titulo: "Questão 77",
        pergunta: "Qual é a diferença fundamental entre estrelas e planetas em relação à emissão de luz? Por que essa diferença é importante?",
        tipo: "aberta",
        respostaEsperada: "Estrelas emitem luz própria (são astros luminosos), enquanto planetas não emitem luz própria (são astros iluminados pelas estrelas). Essa diferença é importante porque nos ajuda a entender a natureza desses astros e como os observamos no céu.",
        explicacao: "Estrelas emitem luz própria, sendo astros luminosos. Já os planetas não emitem luz própria, sendo astros iluminados pelas estrelas. Essa é uma diferença fundamental entre esses dois tipos de corpos celestes."
    },

    // Questão 78
    {
        titulo: "Questão 78",
        pergunta: "Por que os gregos antigos chamavam os planetas de 'astros errantes'? Explique o comportamento que levou a essa denominação.",
        tipo: "aberta",
        respostaEsperada: "Os gregos chamavam os planetas de 'astros errantes' porque, ao observar o céu durante vários dias, percebiam que os planetas não se movem da mesma maneira que as estrelas. Enquanto as estrelas parecem se mover juntas, os planetas passam em outros sentidos, parecendo 'errar' pelo céu.",
        explicacao: "Os planetas não se movem da mesma forma que as estrelas no céu. Ao observar durante vários dias, os gregos notaram que os planetas pareciam passar em outros sentidos, por isso os chamavam de 'astros errantes'."
    },

    // Questão 79
    {
        titulo: "Questão 79",
        pergunta: "Explique o que causa as fases da Lua e descreva como elas mudam ao longo do mês.",
        tipo: "aberta",
        respostaEsperada: "As fases da Lua são causadas pela mudança na quantidade de luz solar que vemos refletida na Lua conforme ela gira em torno da Terra. Ao longo de aproximadamente 28 dias, a Lua passa pelas fases: Lua Nova (não visível), Quarto Crescente (metade iluminada crescendo), Lua Cheia (totalmente iluminada) e Quarto Minguante (metade iluminada diminuindo).",
        explicacao: "As fases da Lua acontecem porque a Lua gira em torno da Terra em aproximadamente 28 dias. À medida que ela gira, vemos diferentes partes iluminadas pelo Sol, gerando as 4 fases principais: Lua Cheia, Lua Nova, Quarto Crescente e Quarto Minguante."
    },

    // Questão 80
    {
        titulo: "Questão 80",
        pergunta: "Durante a fase de Lua Nova, muitas pessoas dizem que 'a Lua sumiu'. Explique se essa afirmação está correta e justifique sua resposta.",
        tipo: "aberta",
        respostaEsperada: "Essa afirmação está incorreta. Durante a Lua Nova, a Lua não sumiu - ela está no céu, mas não conseguimos vê-la porque a parte iluminada pelo Sol não está voltada para a Terra. A Lua continua lá, apenas não está visível para nós.",
        explicacao: "A afirmação está incorreta. Durante a Lua Nova, a Lua está no céu, mas não conseguimos vê-la porque a parte iluminada pelo Sol não está voltada para a Terra. A Lua continua existindo e estando no céu, apenas não é visível."
    }
];

