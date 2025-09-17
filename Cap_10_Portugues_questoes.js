
// Arquivo-depósito de todas as perguntas do jogo para a Arena "Torre das Palavras". Versão: 1.3 (Conteúdo atualizado do PDF)

const dadosDoQuizLP = [
    // --- GRUPO 1: MÚLTIPLA ESCOLHA ---
    {
        tipo: "multipla_escolha",
        titulo: "Infográficos: Conceito Principal",
        contexto: "Uma professora está explicando aos seus alunos o que é um infográfico e como ele se diferencia de um texto comum. Ela enfatiza que ele deve ser fácil de entender.",
        pergunta: "Qual das opções abaixo não representa uma característica essencial de um infográfico, conforme a descrição acima?",
        opcoes: [
            "Comunicam informações de maneira condensada e visual.",
            "Combinam imagens e textos para transmitir conteúdo.",
            "Visam facilitar a compreensão rápida de informações.",
            "São predominantemente textos verbais, com poucas imagens, focando em estatísticas complexas."
        ],
        respostaCorreta: "São predominantemente textos verbais, com poucas imagens, focando em estatísticas complexas.",
        justificativa: "A característica essencial de um infográfico é misturar imagens e textos para passar informações de forma rápida e fácil, não sendo predominantemente verbal com poucas imagens."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Encontros Consonantais com R ou L",
        contexto: "Um grupo de crianças está jogando \"Caça-palavras\" e precisa encontrar palavras que tenham duas consoantes juntas na mesma sílaba, com \'R\' ou \'L\'.",
        pergunta: "Analisando as regras de encontros consonantais com R ou L na mesma sílaba, em qual das palavras a seguir não ocorre esse tipo de encontro?",
        opcoes: [
            "Bloco",
            "Brilha",
            "Prédio",
            "Rato"
        ],
        respostaCorreta: "Rato",
        justificativa: "Na palavra 'Rato', o 'R' não forma um encontro consonantal com 'L' ou outra consoante na mesma sílaba. 'Bl', 'Br' e 'Pr' são encontros consonantais."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Uso do C e Ç",
        contexto: "Joana está aprendendo as regras de ortografia e se lembra de que a cedilha não pode ser usada em algumas situações específicas.",
        pergunta: "De acordo com as regras de uso da cedilha (Ç), em qual das alternativas abaixo a palavra está grafada incorretamente?",
        opcoes: [
            "Coração",
            "Açúcar",
            "Força",
            "Cidra"
        ],
        respostaCorreta: "Cidra",
        justificativa: "A cedilha (Ç) nunca é usada antes das vogais 'e' e 'i'. A palavra correta é 'Sidra' ou 'Cidra' (sem cedilha)."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Storytelling Visual e Engajamento",
        contexto: "Uma revista infantil quer criar um conteúdo sobre animais marinhos que prenda a atenção das crianças rapidamente, considerando que elas se distraem fácil.",
        pergunta: "Considerando a preferência do cérebro humano por imagens e histórias, por que o infográfico do peixe-palhaço seria eficaz em capturar a atenção, segundo as fontes?",
        opcoes: [
            "Porque o texto é mínimo, o que não exige raciocínio.",
            "Porque ele usa muitos números e dados científicos complexos.",
            "Porque o storytelling visual aumenta o engajamento, já que o cérebro humano ama imagens e histórias.",
            "Porque ele força o leitor a passar mais de oito segundos para entender a informação."
        ],
        respostaCorreta: "Porque o storytelling visual aumenta o engajamento, já que o cérebro humano ama imagens e histórias.",
        justificativa: "O cérebro humano é feito para amar imagens e histórias, o que torna o storytelling visual eficaz para capturar a atenção e aumentar o engajamento."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Uso de O ou U: Confusão na Escrita",
        contexto: "Miguel está escrevendo uma história e, ao descrever uma \"coruja\" que vive em uma \"cozinha\", ele se confunde sobre qual vogal usar em cada palavra devido à pronúncia.",
        pergunta: "De acordo com a explicação sobre a confusão entre o \"o\" e o \"u\" na escrita, qual das palavras abaixo está grafada incorretamente?",
        opcoes: [
            "Cozinha",
            "Curioso",
            "Curujá",
            "Mochila"
        ],
        respostaCorreta: "Curujá",
        justificativa: "A palavra correta é 'Coruja'. A confusão entre 'o' e 'u' é comum devido à pronúncia, mas 'Curujá' está incorreta."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Prefixos e Sufixos: Função e Formação de Palavras",
        contexto: "A professora está ensinando que podemos \"desligar\" e \"ligar\", \"rever\" e \"ver\". Ela quer que os alunos entendam como pequenas partes das palavras mudam seu significado.",
        pergunta: "Qual das opções abaixo não corresponde a uma função principal dos prefixos e sufixos na língua portuguesa?",
        opcoes: [
            "Modificar o significado das palavras originais.",
            "Auxiliar na formação de novas palavras.",
            "Serem adicionados no início (prefixos) ou final (sufixos) das palavras.",
            "Definir o gênero de todas as palavras sem alterar seu significado."
        ],
        respostaCorreta: "Definir o gênero de todas as palavras sem alterar seu significado.",
        justificativa: "Prefixos e sufixos modificam o significado e auxiliam na formação de novas palavras, sendo adicionados no início ou final. Eles não definem o gênero de todas as palavras."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Planejamento de Infográficos",
        contexto: "Clara precisa fazer um infográfico para um projeto de ciências. Ela está muito animada para começar a desenhar, mas sua professora a aconselha a primeiro planejar bem o que ela quer mostrar.",
        pergunta: "Todas as afirmativas são corretas sobre o planejamento eficaz de um infográfico, exceto:",
        opcoes: [
            "É fundamental definir a história que se deseja contar antes de iniciar o design.",
            "Criar um esboço com cabeçalhos e dados é uma boa prática antes de projetar.",
            "O ângulo escolhido para a história influenciará as informações a serem incluídas.",
            "O layout deve ser criado imediatamente, sem um esboço, para capturar a inspiração inicial."
        ],
        respostaCorreta: "O layout deve ser criado imediatamente, sem um esboço, para capturar a inspiração inicial.",
        justificativa: "É sempre uma boa ideia criar um esboço antes de projetar o layout, para organizar cabeçalhos, dados e detalhes de design, e não o contrário."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Tipos de Infográficos Sustentáveis",
        contexto: "Em uma aula sobre sustentabilidade, a professora mostrou exemplos de como cuidar do planeta. Ela quer que os alunos identifiquem outros exemplos que se encaixem no mesmo tema.",
        pergunta: "Baseando-se nos exemplos de infográficos sobre sustentabilidade apresentados nas fontes, qual conceito o infográfico \"Economia de Energia em Casa\" aborda de forma semelhante?",
        opcoes: [
            "Somente a importância da reutilização.",
            "A complexidade do ciclo da água no planeta.",
            "Práticas de consumo consciente e uso eficiente de recursos naturais.",
            "O impacto do transporte público na poluição."
        ],
        respostaCorreta: "Práticas de consumo consciente e uso eficiente de recursos naturais.",
        justificativa: "Os infográficos apresentados e o exemplo de 'Economia de Energia em Casa' focam em atitudes simples e práticas de consumo consciente e uso eficiente de recursos naturais para melhorar o mundo."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Encontros Consonantais: Separação de Sílabas",
        contexto: "Um aluno está identificando palavras com encontros consonantais com \'R\' ou \'L\' que se mantêm na mesma sílaba. Ele usa o infográfico como referência.",
        pergunta: "Pensando nos encontros consonantais com R e L que permanecem na mesma sílaba, em qual das palavras do infográfico \"Animais da Floresta\" o encontro consonantal não está presente?",
        opcoes: [
            "Tigre",
            "Grilo",
            "Cobra",
            "Arara"
        ],
        respostaCorreta: "Arara",
        justificativa: "Nas palavras 'Tigre', 'Grilo' e 'Cobra', os encontros consonantais 'gr', 'gr' e 'br' (respectivamente) permanecem na mesma sílaba. 'Arara' não possui esse tipo de encontro consonantal."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Espaço Negativo em Infográficos",
        contexto: "Uma designer criou um infográfico que parecia muito bom em sua cabeça, mas na tela, todas as informações pareciam \"amontoadas\", dificultando a leitura para as pessoas.",
        pergunta: "Considerando a importância do espaço negativo em um infográfico, o que aconteceria com o infográfico \"Como organizar seu quarto\" se ele estivesse muito cheio, de acordo com as fontes?",
        opcoes: [
            "Seria mais fácil de ler, pois todas as informações estariam concentradas.",
            "O design ficaria mais profissional e elegante.",
            "Poderia sobrecarregar os leitores e dificultar a leitura e o processamento das informações.",
            "O espaço negativo preencheria as áreas vazias automaticamente."
        ],
        respostaCorreta: "Poderia sobrecarregar os leitores e dificultar a leitura e o processamento das informações.",
        justificativa: "Se um infográfico estiver muito cheio, o espaço negativo insuficiente pode sobrecarregar os leitores e tornar difícil a leitura e o processamento das informações."
    },

    // --- GRUPO 2: VERDADEIRO OU FALSO (Múltiplas Afirmações) ---
    {
        tipo: "verdadeiro_falso",
        titulo: "Infográficos: Comunicação e Eficácia",
        contexto: "Uma equipe de marketing está discutindo a melhor forma de apresentar um relatório anual complexo. Eles consideram usar um infográfico para simplificar os dados.",
        pergunta: "Julgue as afirmações sobre infográficos:",
        afirmacoes: [
            "Infográficos são uma forma eficaz de comunicar informações complexas de maneira simples e visual.",
            "Um infográfico bem projetado pode condensar informações e torná-las mais fáceis de entender.",
            "Para ser considerado um infográfico, o conteúdo deve ser puramente visual, sem nenhum texto.",
            "A principal vantagem dos infográficos é que eles sempre exigem um tempo de leitura muito longo."
        ],
        opcoes: [
            "V, V, F, F",
            "F, V, F, V",
            "V, F, V, F",
            "F, F, V, V"
        ],
        respostaCorreta: "V, V, F, F",
        justificativa: "I. Verdadeiro. II. Verdadeiro. III. Falso (infográficos misturam texto e imagem). IV. Falso (visam facilitar a compreensão rápida)."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Encontros Consonantais: Características",
        contexto: "Um professor pede aos alunos para analisarem a palavra \"bicicleta\" e identificarem se ela possui algum encontro consonantal.",
        pergunta: "Analise as afirmações sobre encontros consonantais:",
        afirmacoes: [
            "O encontro consonantal sempre ocorre quando duas consoantes estão juntas.",
            "Na palavra \"bicicleta\", o \"cl\" é um exemplo de encontro consonantal que se une em uma única sílaba.",
            "O som de cada letra em um encontro consonantal geralmente se perde, dificultando a pronúncia.",
            "Encontros consonantais com R e L podem acontecer em qualquer posição da palavra, não apenas no início."
        ],
        opcoes: [
            "F, V, F, V",
            "V, V, F, V",
            "V, F, V, F",
            "F, F, V, V"
        ],
        respostaCorreta: "F, V, F, V",
        justificativa: "I. Falso (nem sempre, ex: 'mn' em 'ritmo'). II. Verdadeiro. III. Falso (o som de cada letra é mantido). IV. Verdadeiro."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Uso de C e Ç: Regras de Derivação",
        contexto: "Marina está aprendendo a usar a cedilha e se depara com palavras como \"infração\" e \"detenção\", tentando entender a regra por trás delas.",
        pergunta: "Julgue as afirmações sobre o uso da cedilha (Ç):",
        afirmacoes: [
            "Palavras derivadas de outras terminadas em \"-TOR\" (como \"redator\") usam \"ss\" (redassão).",
            "Verbos terminados em \"-TER\" (como \"manter\") geram palavras derivadas com cedilha (manutenção).",
            "A palavra \"cachaça\" usa cedilha porque é uma palavra de origem africana.",
            "A cedilha pode ser usada antes das vogais \"e\" e \"i\" em algumas exceções."
        ],
        opcoes: [
            "V, V, F, F",
            "F, F, V, F",
            "V, F, V, V",
            "F, V, F, F"
        ],
        respostaCorreta: "F, V, F, F",
        justificativa: "I. Falso (usam 'ção', ex: redação). II. Verdadeiro. III. Falso (origem não define uso de cedilha). IV. Falso (nunca é usada antes de 'e' e 'i')."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Sustentabilidade em Infográficos",
        contexto: "A turma do 5º ano está estudando sobre o meio ambiente. A professora trouxe vários infográficos para mostrar como pequenas ações no dia a dia podem fazer a diferença.",
        pergunta: "Analise as afirmações sobre os temas de sustentabilidade abordados nos infográficos:",
        afirmacoes: [
            "Os infográficos apresentados focam em como pequenas atitudes diárias podem contribuir para a sustentabilidade.",
            "A economia de espaço com bicicletas é um tema de sustentabilidade relacionado ao transporte.",
            "A separação do lixo em casa é uma prática de reciclagem importante para o meio ambiente.",
            "Os infográficos sugerem que o consumo de água potável no Brasil é insignificante, sem necessidade de preocupação."
        ],
        opcoes: [
            "F, V, V, V",
            "V, V, V, F",
            "V, F, F, V",
            "F, F, V, F"
        ],
        respostaCorreta: "V, V, V, F",
        justificativa: "I. Verdadeiro. II. Verdadeiro. III. Verdadeiro. IV. Falso (a realidade da água potável é um tema de preocupação)."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Ortografia: S, SS, C, Ç",
        contexto: "Um estudante está frustrado com a quantidade de regras ortográficas para S, SS, C e Ç e se pergunta se existe um método mais eficaz do que apenas decorar.",
        pergunta: "Considere as afirmações sobre a aprendizagem da ortografia de S, SS, C e Ç:",
        afirmacoes: [
            "A melhor solução para dominar o uso de S, SS, C e Ç é ler muito e escrever muito.",
            "Não é necessário decorar todas as regras, pois a prática leva à assimilação.",
            "O \"c\" antes de \"e\" e \"i\" nunca recebe cedilha porque já tem o som de \"s\".",
            "A complexidade do uso dessas letras torna impossível aprender sem memorização intensiva."
        ],
        opcoes: [
            "F, V, V, F",
            "V, F, V, V",
            "F, F, V, V",
            "V, V, V, F"
        ],
        respostaCorreta: "V, V, V, F",
        justificativa: "I. Verdadeiro. II. Verdadeiro. III. Verdadeiro. IV. Falso (a prática e leitura são eficazes)."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Prefixos e Sufixos: Modificando Palavras",
        contexto: "Uma criança encontra a palavra \"rever\" e tenta entender como o \"re-\" altera o significado do verbo \"ver\".",
        pergunta: "Analise as afirmações sobre prefixos e sufixos:",
        afirmacoes: [
            "O prefixo \"des-\" adiciona a ideia de negação ou o contrário à palavra original (ex: \"desligar\").",
            "O sufixo \"oso\" em \"amoroso\" modifica a palavra \"amor\" para um adjetivo.",
            "Prefixos e sufixos são usados apenas para encurtar palavras, sem alterar seu sentido.",
            "Conhecer o significado de prefixos e sufixos pode ajudar a descobrir o significado de palavras desconhecidas."
        ],
        opcoes: [
            "F, V, V, V",
            "V, F, F, V",
            "F, F, V, V",
            "V, V, F, V"
        ],
        respostaCorreta: "V, V, F, V",
        justificativa: "I. Verdadeiro. II. Verdadeiro. III. Falso (modificam o sentido). IV. Verdadeiro."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Design de Infográficos: Cores e Consistência",
        contexto: "Um designer está criando um infográfico e quer garantir que ele seja visualmente atraente e fácil de entender, usando cores de forma eficaz.",
        pergunta: "Julgue as afirmações sobre o uso de cores em infográficos:",
        afirmacoes: [
            "É recomendável usar uma paleta de cores com muitas cores vibrantes para chamar mais atenção.",
            "A consistência no uso das cores ajuda a manter a clareza e a organização visual do infográfico.",
            "Cores podem ser usadas para destacar informações importantes ou agrupar dados relacionados.",
            "O contraste entre as cores do texto e do fundo é irrelevante para a legibilidade."
        ],
        opcoes: [
            "V, F, V, F",
            "F, V, V, F",
            "V, V, F, F",
            "F, F, V, V"
        ],
        respostaCorreta: "F, V, V, F",
        justificativa: "I. Falso (duas ou três cores principais são suficientes). II. Verdadeiro. III. Verdadeiro. IV. Falso (o contraste é crucial para a legibilidade)."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Infográficos: Elementos Essenciais",
        contexto: "Um estudante está aprendendo sobre infográficos e quer saber quais elementos são cruciais para a sua eficácia.",
        pergunta: "Analise as afirmações sobre os elementos essenciais de um infográfico:",
        afirmacoes: [
            "Um bom infográfico deve ter um título claro e conciso que resuma o tema.",
            "O uso de ícones e ilustrações é opcional e não contribui significativamente para a compreensão.",
            "A fonte dos dados apresentados no infográfico deve ser sempre citada para garantir credibilidade.",
            "Infográficos são mais eficazes quando apresentam apenas dados numéricos, sem qualquer texto explicativo."
        ],
        opcoes: [
            "V, F, V, F",
            "F, V, F, V",
            "V, V, F, F",
            "F, F, V, V"
        ],
        respostaCorreta: "V, F, V, F",
        justificativa: "I. Verdadeiro. II. Falso (ícones e ilustrações são importantes). III. Verdadeiro. IV. Falso (misturam texto e imagem)."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Interpretação de Infográficos",
        contexto: "Um grupo de alunos está analisando um infográfico complexo sobre mudanças climáticas e discute como interpretá-lo corretamente.",
        pergunta: "Marque (V) para Verdadeiro ou (F) para Falso sobre a interpretação de infográficos:",
        afirmacoes: [
            "A leitura de um infográfico deve sempre começar pelo texto principal antes de observar as imagens.",
            "Infográficos são projetados para serem lidos de forma não linear, permitindo que o leitor explore as informações visualmente.",
            "Gráficos e diagramas em infográficos são apenas elementos decorativos e não contêm informações cruciais.",
            "A compreensão de um infográfico é facilitada pela combinação de elementos visuais e textuais."
        ],
        opcoes: [
            "V, F, V, F",
            "F, V, F, V",
            "V, V, F, F",
            "F, F, V, V"
        ],
        respostaCorreta: "F, V, F, V",
        justificativa: "I. Falso (a leitura pode ser não linear). II. Verdadeiro. III. Falso (contêm informações cruciais). IV. Verdadeiro."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Infográficos e Tom de Voz",
        contexto: "Uma empresa está desenvolvendo um infográfico para apresentar seus resultados anuais e discute qual tom de voz deve ser adotado para o público-alvo.",
        pergunta: "Julgue as afirmações sobre o tom de voz em infográficos:",
        afirmacoes: [
            "O tom de voz de um infográfico deve ser sempre formal e técnico, independentemente do público.",
            "Um tom de voz informal pode ser usado para infográficos direcionados a um público jovem ou para temas leves.",
            "O tom de voz deve ser consistente em todo o infográfico para evitar confusão.",
            "A escolha do tom de voz não afeta a forma como a mensagem é recebida pelo público."
        ],
        opcoes: [
            "V, F, V, F",
            "F, V, V, F",
            "V, V, F, F",
            "F, F, V, V"
        ],
        respostaCorreta: "F, V, V, F",
        justificativa: "I. Falso (o tom de voz deve se adequar ao público). II. Verdadeiro. III. Verdadeiro. IV. Falso (afeta diretamente a recepção da mensagem)."
    }
];


