// Arquivo-depósito de todas as perguntas do jogo para a Arena "Torre das Palavras". Versão: 2.0 (Conteúdo Fiel ao PDF)

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
        justificativa: "As fontes descrevem os infográficos como 'textos informativos que misturam imagens e textos escritos para passar informações de forma rápida e fácil'. Eles comunicam informações 'de maneira condensada e altamente visual'. A opção 'd' contradiz isso ao afirmar que são predominantemente verbais e com poucas imagens."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Encontros Consonantais com R ou L",
        contexto: "Um grupo de crianças está jogando \"Caça-palavras\" e precisa encontrar palavras que tenham duas consoantes juntas na mesma sílaba, com 'R' ou 'L'.",
        pergunta: "Analisando as regras de encontros consonantais com R ou L na mesma sílaba, em qual das palavras a seguir não ocorre esse tipo de encontro?",
        opcoes: ["Bloco", "Brilha", "Prédio", "Rato"],
        respostaCorreta: "Rato",
        justificativa: "A fonte explica que encontro consonantal é quando 'uma consoante está junto de outra consoante' e dá exemplos de encontros com R ou L na mesma sílaba, como 'prato' (pr-a-to) e 'flor' (fl-or). As palavras 'Bloco', 'Brilha' e 'Prédio' possuem encontros consonantais com L ou R na mesma sílaba (Bl, Br, Pr). A palavra 'Rato' não possui encontro consonantal."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Uso do C e Ç",
        contexto: "Joana está aprendendo as regras de ortografia e se lembra de que a cedilha não pode ser usada em algumas situações específicas.",
        pergunta: "De acordo com as regras de uso da cedilha (Ç), em qual das alternativas abaixo a palavra está grafada incorretamente?",
        opcoes: ["Coração", "Açúcar", "Força", "Cidra"],
        respostaCorreta: "Cidra",
        justificativa: "A regra é clara: a cedilha (Ç) é usada com as vogais 'a', 'o' e 'u' para formar o som de 's'. 'O c e o si nunca vão ganhar cedilha porque eles já têm este som de c e si por exemplo C de Cecília si de cidade'. Portanto, a palavra 'Cidra', que começa com 'ci', não deveria levar cedilha."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Storytelling Visual e Engajamento",
        contexto: "Uma revista infantil quer criar um conteúdo sobre animais marinhos que prenda a atenção das crianças rapidamente, considerando que elas se distraem fácil.",
        pergunta: "Considerando a preferência do cérebro humano por imagens e histórias, por que um infográfico com storytelling visual seria eficaz em capturar a atenção, segundo as fontes?",
        opcoes: [
            "Porque o texto é mínimo, o que não exige raciocínio.",
            "Porque ele usa muitos números e dados científicos complexos.",
            "Porque o storytelling visual aumenta o engajamento, já que o cérebro humano ama imagens e histórias.",
            "Porque ele força o leitor a passar mais de oito segundos para entender a informação."
        ],
        respostaCorreta: "Porque o storytelling visual aumenta o engajamento, já que o cérebro humano ama imagens e histórias.",
        justificativa: "As fontes afirmam que 'o cérebro humano é feito para amar imagens e histórias'. O storytelling visual é valioso porque 'Visuais são uma excelente maneira de se aumentar o engajamento do seu conteúdo rapidamente e com relativa facilidade'."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Uso de O ou U: Confusão na Escrita",
        contexto: "Miguel está escrevendo uma história e, ao descrever uma 'coruja' que vive em uma 'cozinha', ele se confunde sobre qual vogal usar em cada palavra devido à pronúncia.",
        pergunta: "De acordo com a explicação sobre a confusão entre o 'o' e o 'u' na escrita, qual das palavras abaixo está grafada incorretamente?",
        opcoes: ["Cozinha", "Curioso", "Curujá", "Mochila"],
        respostaCorreta: "Curujá",
        justificativa: "As fontes indicam que 'algumas palavras que podemos já estar acostumados no nosso dia a dia podem às vezes nos confundir fazendo com que trocamos o o pelo u ou vice-versa'. A palavra correta é 'Coruja', com 'o', e não 'Curujá' com 'u'."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Prefixos e Sufixos: Função e Formação de Palavras",
        contexto: "A professora está ensinando que podemos 'desligar' e 'ligar', 'rever' e 'ver'. Ela quer que os alunos entendam como pequenas partes das palavras mudam seu significado.",
        pergunta: "Qual das opções abaixo não corresponde a uma função principal dos prefixos e sufixos na lingua portuguesa?",
        opcoes: [
            "Modificar o significado das palavras originais.",
            "Auxiliar na formação de novas palavras.",
            "Serem adicionados no início (prefixos) ou final (sufixos) das palavras.",
            "Definir o gênero de todas as palavras sem alterar seu significado."
        ],
        respostaCorreta: "Definir o gênero de todas as palavras sem alterar seu significado.",
        justificativa: "Prefixos e sufixos são 'partes que modificam o significado das palavras originais' e são 'importantes no processo de formação de novas palavras'. A opção 'd' está incorreta porque a principal função é alterar o significado, não apenas o gênero, e não sem alterar o sentido."
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
        justificativa: "As fontes enfatizam a importância do planejamento: 'Antes de começar a projetar seu infográfico, pense na história que você está tentando contar'. É 'sempre uma boa ideia criar um esboço para o infográfico. Em seu esboço, inclua seus cabeçalhos, dados e quaisquer detalhes de design que você deseja incluir em seu infográfico final'. A opção 'd' vai contra essa recomendação."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Tipos de Infográficos Sustentáveis",
        contexto: "Em uma aula sobre sustentabilidade, a professora mostrou exemplos de como cuidar do planeta. Ela quer que os alunos identifiquem outros exemplos que se encaixem no mesmo tema.",
        pergunta: "Baseando-se nos exemplos de infográficos sobre sustentabilidade apresentados nas fontes, qual conceito o infográfico simulado 'Economia de Energia em Casa' aborda de forma semelhante?",
        opcoes: [
            "Somente a importância da reutilização.",
            "A complexidade do ciclo da água no planeta.",
            "Práticas de consumo consciente e uso eficiente de recursos naturais.",
            "O impacto do transporte público na poluição."
        ],
        respostaCorreta: "Práticas de consumo consciente e uso eficiente de recursos naturais.",
        justificativa: "As fontes mostram infográficos sobre '20 Bicicletas Economizam 1 Lugar de Carro', 'Separe o Lixo em Casa' e 'A Realidade da Água Potável no Nosso Planeta!'. Além disso, listam 'Atitudes simples para melhorar o mundo' como 'Dar um passeio de bicicleta', 'Instalar lixeiras para separar o lixo', 'Esvovar os dentes sem deixar a torneira aberta'. O infográfico sobre 'Economia de Energia em Casa' se alinha perfeitamente com essas práticas de consumo consciente e uso eficiente de recursos."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Encontros Consonantais: Separação de Sílabas",
        contexto: "Um aluno está identificando palavras com encontros consonantais com 'R' ou 'L' que se mantêm na mesma sílaba. Ele usa um infográfico simulado sobre 'Animais da Floresta' que mostra um 'Tigre', um 'Grilo' e uma 'Cobra' como referência.",
        pergunta: "Pensando nos encontros consonantais com R e L que permanecem na mesma sílaba, em qual das palavras a seguir o encontro consonantal não está presente?",
        opcoes: ["Tigre", "Grilo", "Cobra", "Arara"],
        respostaCorreta: "Arara",
        justificativa: "As fontes explicam encontros consonantais com R e L que se unem na mesma sílaba, como em 'prato' (pr) e 'flor' (fl). Palavras como 'Tigre' (gr), 'Grilo' (gr) e 'Cobra' (br) possuem encontros consonantais com R. 'Arara' não tem consoantes juntas que formem um encontro consonantal."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Espaço Negativo em Infográficos",
        contexto: "Uma designer criou um infográfico que parecia muito bom em sua cabeça, mas na tela, todas as informações pareciam 'amontoadas', dificultando a leitura para as pessoas.",
        pergunta: "Considerando a importância do espaço negativo em um infográfico, o que aconteceria com o infográfico 'Como organizar seu quarto' se ele estivesse muito cheio, de acordo com as fontes?",
        opcoes: [
            "Seria mais fácil de ler, pois todas as informações estariam concentradas.",
            "O design ficaria mais profissional e elegante.",
            "Poderia sobrecarregar os leitores e dificultar a leitura e o processamento das informações.",
            "O espaço negativo preencheria as áreas vazias automaticamente."
        ],
        respostaCorreta: "Poderia sobrecarregar os leitores e dificultar a leitura e o processamento das informações.",
        justificativa: "O espaço negativo é o 'espaço vazio que envolve objetos em um design'. A fonte alerta que 'Se o seu design de infográfico estiver muito cheio, pode sobrecarregar os leitores e tornar difícil ler as informações'. Deixar 'espaço ao redor dos elementos do seu design dá aos leitores espaço para respirar e processar as informações'."
    },

    // --- GRUPO 2: VERDADEIRO OU FALSO ---
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
        afirmacoesCorretasVF: ['V', 'V', 'F', 'F'],
        opcoes: ["V, V, F, F", "F, V, F, V", "V, F, V, F", "F, F, V, V"],
        respostaCorreta: "V, V, F, F",
        justificativa: "I. V (Verdadeiro): 'Os infográficos são textos informativos que misturam imagens e textos escritos para passar informações de forma rápida e fácil'.\nII. V (Verdadeiro): Infográficos 'comunicam informações de maneira condensada e altamente visual - quando bem projetados'.\nIII. F (Falso): Infográficos 'misturam imagens e textos escritos', não são puramente visuais.\nIV. F (Falso): A intenção é 'passar informações de forma rápida e fácil'."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Encontros Consonantais: Características",
        contexto: "Um professor pede aos alunos para analisarem a palavra 'bicicleta' e identificarem se ela possui algum encontro consonantal.",
        pergunta: "Analise as afirmações sobre encontros consonantais:",
        afirmacoes: [
            "O encontro consonantal sempre ocorre quando duas consoantes estão juntas.",
            "Na palavra 'bicicleta', o 'cl' é um exemplo de encontro consonantal que se une em uma única sílaba.",
            "O som de cada letra em um encontro consonantal geralmente se perde, dificultando a pronúncia.",
            "Encontros consonantais com R e L podem acontecer em qualquer posição da palavra, não apenas no início."
        ],
        afirmacoesCorretasVF: ['V', 'V', 'F', 'V'],
        opcoes: ["F, F, V, V", "V, V, F, V", "V, F, V, F", "F, V, F, V"],
        respostaCorreta: "V, V, F, V",
        justificativa: "I. V (Verdadeiro): A definição é 'uma consoante junto de outra consoante'.\nII. V (Verdadeiro): O 'cl' em 'bi-ci-CLE-ta' é um encontro na mesma sílaba.\nIII. F (Falso): As consoantes mantêm seus sons próprios, 'a percepção de cada uma dessas letrinhas tem um som próprio'.\nIV. V (Verdadeiro): O exemplo 'motocicleta' mostra um encontro no meio da palavra."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Uso de C e Ç: Regras de Derivação",
        contexto: "Marina está aprendendo a usar a cedilha e se depara com palavras como 'infração' e 'detenção', tentando entender a regra por trás delas.",
        pergunta: "Julgue as afirmações sobre o uso da cedilha (Ç):",
        afirmacoes: [
            "Palavras derivadas de outras terminadas em '-TOR' (como 'redator') usam 'ss' (redassão).",
            "Verbos terminados em '-TER' (como 'manter') geram palavras derivadas com cedilha (manutenção).",
            "A palavra 'cachaça' usa cedilha porque é uma palavra de origem africana.",
            "A cedilha pode ser usada antes das vogais 'e' e 'i' em algumas exceções."
        ],
        afirmacoesCorretasVF: ['F', 'V', 'F', 'F'],
        opcoes: ["V, V, F, F", "F, F, V, F", "V, F, V, V", "F, V, F, F"],
        respostaCorreta: "F, V, F, F",
        justificativa: "I. F (Falso): Palavras derivadas de '-TOR' usam 'ç', como em 'infração'.\nII. V (Verdadeiro): A regra se aplica a verbos como 'deter' (detenção).\nIII. F (Falso): A fonte cita 'cachaça' como exemplo de palavra de origem estrangeira com ç, mas não é uma regra geral e a justificativa é simplista.\nIV. F (Falso): 'o ce o si nunca vão ganhar cedilha'."
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
        afirmacoesCorretasVF: ['V', 'V', 'V', 'F'],
        opcoes: ["F, V, V, V", "V, V, V, F", "V, F, F, V", "F, F, V, F"],
        respostaCorreta: "V, V, V, F",
        justificativa: "I. V (Verdadeiro): Os infográficos mostram 'Atitudes simples para melhorar o mundo'.\nII. V (Verdadeiro): '20 Bicicletas Economizam 1 Lugar de Carro' se relaciona a transporte sustentável.\nIII. V (Verdadeiro): 'Separe o Lixo em Casa' promove a reciclagem.\nIV. F (Falso): 'A Realidade da Água Potável' destaca a preocupação com o consumo."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Ortografia: S, SS, C, Ç",
        contexto: "Um estudante está frustrado com a quantidade de regras ortográficas para S, SS, C e Ç e se pergunta se existe um método mais eficaz do que apenas decorar.",
        pergunta: "Considere as afirmações sobre a aprendizagem da ortografia de S, SS, C e Ç:",
        afirmacoes: [
            "A melhor solução para dominar o uso de S, SS, C e Ç é ler muito e escrever muito.",
            "Não é necessário decorar todas as regras, pois a prática leva à assimilação.",
            "O 'c' antes de 'e' e 'i' nunca recebe cedilha porque já tem o som de 's'.",
            "A complexidade do uso dessas letras torna impossível aprender sem memorização intensiva."
        ],
        afirmacoesCorretasVF: ['V', 'V', 'V', 'F'],
        opcoes: ["F, V, V, F", "V, F, V, V", "F, F, V, V", "V, V, V, F"],
        respostaCorreta: "V, V, V, F",
        justificativa: "I. V (Verdadeiro): A fonte aconselha 'ler muito e escrever muito'.\nII. V (Verdadeiro): A fonte afirma 'você não precisa ficar decorando as regras'.\nIII. V (Verdadeiro): 'o ce o si nunca vão ganhar cedilha'.\nIV. F (Falso): A fonte desencoraja a memorização exclusiva, favorecendo a prática."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Prefixos e Sufixos: Modificando Palavras",
        contexto: "Uma criança encontra a palavra 'rever' e tenta entender como o 're-' altera o significado do verbo 'ver'.",
        pergunta: "Analise as afirmações sobre prefixos e sufixos:",
        afirmacoes: [
            "O prefixo 'des-' adiciona a ideia de negação ou o contrário à palavra original (ex: 'desligar').",
            "O sufixo 'oso' em 'amoroso' modifica a palavra 'amor' para um adjetivo.",
            "Prefixos e sufixos são usados apenas para encurtar palavras, sem alterar seu sentido.",
            "Conhecer o significado de prefixos e sufixos pode ajudar a descobrir o significado de palavras desconhecidas."
        ],
        afirmacoesCorretasVF: ['V', 'V', 'F', 'V'],
        opcoes: ["F, V, V, V", "V, F, F, V", "F, F, V, V", "V, V, F, V"],
        respostaCorreta: "V, V, F, V",
        justificativa: "I. V (Verdadeiro): 'des-' indica negação.\nII. V (Verdadeiro): 'oso' forma adjetivos.\nIII. F (Falso): Eles 'modificam o significado'.\nIV. V (Verdadeiro): A fonte confirma que ajuda a 'descobrir o significado de algumas palavras desconhecidas'."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Design de Infográficos: Cores e Consistência",
        contexto: "Mariana está criando um infográfico para um trabalho da escola e quer que ele seja bonito e fácil de entender. Ela se lembra que a escolha das cores e a consistência são importantes.",
        pergunta: "Avalie as afirmações sobre o design de cores e consistência em infográficos:",
        afirmacoes: [
            "É importante definir uma paleta de cores principal (2-3 cores) antes de iniciar o design do infográfico.",
            "Usar muitas cores escuras ou neon em grandes quantidades é recomendado para tornar o infográfico mais chamativo.",
            "A inconsistência nos elementos de design pode desorganizar a leitura.",
            "A cor pode ser usada para dividir o infográfico em seções, guiando o olhar do leitor."
        ],
        afirmacoesCorretasVF: ['V', 'F', 'V', 'V'],
        opcoes: ["V, V, F, F", "F, V, V, V", "V, F, V, V", "V, V, V, F"],
        respostaCorreta: "V, F, V, V",
        justificativa: "I. V (Verdadeiro): 'Decida sobre uma paleta de cores antes de criar'.\nII. F (Falso): A fonte adverte para ter 'cuidado para não usar grandes quantidades de cores escuras ou neon'.\nIII. V (Verdadeiro): Inconsistências podem parecer 'desorganizada'.\nIV. V (Verdadeiro): 'A cor também pode ser usada como uma ferramenta para dividir suas infografias em seções'."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Tipografia e Elementos Visuais",
        contexto: "Um grupo de amigos está fazendo um infográfico para um projeto de história e debate sobre quantos tipos de letras usar e quais elementos visuais são mais importantes.",
        pergunta: "Analise as afirmações sobre tipografia e elementos em infográficos:",
        afirmacoes: [
            "A tipografia é um elemento chave que pode transmitir ideias e emoções em um infográfico.",
            "Para um design coeso, deve-se limitar o uso de fontes a um máximo de três tipos.",
            "Fontes decorativas são ideais para o corpo do texto para garantir legibilidade.",
            "Imagens, gráficos e ícones são os únicos elementos visuais importantes em um infográfico."
        ],
        afirmacoesCorretasVF: ['V', 'V', 'F', 'F'],
        opcoes: ["F, V, V, F", "V, F, V, V", "F, F, F, V", "V, V, F, F"],
        respostaCorreta: "V, V, F, F",
        justificativa: "I. V (Verdadeiro): A tipografia pode 'definir o tom do seu design'.\nII. V (Verdadeiro): 'limite o uso de fontes a um máximo de três tipos'.\nIII. F (Falso): 'você vai querer evitar fontes decorativas ou em estilo de escrita, pois elas tendem a ser difíceis de ler'.\nIV. F (Falso): Além de imagens, gráficos e ícones, as fontes também são elementos visuais."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Uso de SS: Regras Específicas",
        contexto: "Um aluno está revisando as regras para o uso de 'ss' e encontra exemplos como 'impressão' e 'excesso', buscando entender a origem dessas palavras.",
        pergunta: "Julgue as afirmações sobre o uso de 'ss':",
        afirmacoes: [
            "Palavras derivadas de verbos terminados em '-PRIMIR' (como 'comprimir') são grafadas com 'ss' (compressa).",
            "Verbos terminados em '-CEDER' (como 'proceder') resultam em palavras com 'ss' (processo).",
            "O 'ss' é usado em palavras derivadas de verbos terminados em '-NDIR' (como 'expandir').",
            "A prática de leitura e escrita ajuda a assimilar as regras do 'ss' sem a necessidade de memorização."
        ],
        afirmacoesCorretasVF: ['V', 'V', 'F', 'V'],
        opcoes: ["F, V, F, V", "V, V, F, V", "V, F, V, F", "F, F, V, V"],
        respostaCorreta: "V, V, F, V",
        justificativa: "I. V (Verdadeiro): Conforme a regra para verbos em '-primir'.\nII. V (Verdadeiro): Conforme a regra para verbos em '-ceder'.\nIII. F (Falso): A regra para '-NDIR' é usar 's', como em 'expansão'.\nIV. V (Verdadeiro): A prática é aconselhada para assimilar a ortografia."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Gráficos em Infográficos: Escolha e Legibilidade",
        contexto: "Um time de pesquisadores precisa apresentar dados sobre a preferência de frutas em diferentes estados. Eles discutem qual tipo de gráfico seria o mais adequado para cada informação.",
        pergunta: "Analise as afirmações sobre a escolha e legibilidade de gráficos em infográficos:",
        afirmacoes: [
            "Gráficos de pizza são geralmente eficazes para mostrar a proporção de um todo.",
            "Gráficos de linhas são a melhor escolha para comparar dados entre diferentes categorias.",
            "O tempo ideal para a compreensão de um gráfico em um infográfico é de dez segundos ou menos.",
            "A escolha do tipo de gráfico deve sempre priorizar gráficos incomuns para surpreender o leitor, mesmo que sejam difíceis de ler."
        ],
        afirmacoesCorretasVF: ['V', 'F', 'V', 'F'],
        opcoes: ["F, V, V, F", "V, F, F, V", "V, F, V, F", "V, V, V, F"],
        respostaCorreta: "V, F, V, F",
        justificativa: "I. V (Verdadeiro): Gráficos de pizza são para proporções.\nII. F (Falso): Gráficos de colunas/barras são melhores para comparação, enquanto os de linha são para tendências ao longo do tempo.\nIII. V (Verdadeiro): A leitura deve ser rápida, em 'dez segundos ou menos'.\nIV. F (Falso): A escolha deve ser baseada na eficácia e facilidade de leitura."
    },

    // --- GRUPO 3: RESPOSTAS CURTAS ---
    {
        tipo: "aberta",
        titulo: "Infográficos",
        contexto: "Um infográfico é como um super-herói da informação.",
        pergunta: "Por que ele usa desenhos (imagens) e palavras (textos) juntos para nos ensinar algo?",
        respostaCorreta: "Para passar informações de forma rápida e fácil, misturando imagens e texto.",
        justificativa: "Resposta esperada: Para passar informações de forma rápida e fácil, misturando imagens e texto."
    },
    {
        tipo: "aberta",
        titulo: "Encontro Consonantal",
        contexto: "",
        pergunta: "Na palavra 'grande', quais letras formam o encontro consonantal que fica juntinho na mesma sílaba?",
        respostaCorreta: "As letras G e R (ou GR).",
        justificativa: "Resposta esperada: As letras G e R (ou GR)."
    },
    {
        tipo: "aberta",
        titulo: "Uso de C e Ç",
        contexto: "A cedilha (Ç) é um sinal especial que usamos embaixo da letra C.",
        pergunta: "Em quais letras depois do 'C' nós nunca usamos a cedilha? Dê um exemplo.",
        respostaCorreta: "Nunca usamos a cedilha antes das vogais 'e' e 'i'. Um exemplo é 'cidade'.",
        justificativa: "Resposta esperada: Nunca usamos a cedilha antes das vogais 'e' e 'i'. Um exemplo é 'cidade'."
    },
    {
        tipo: "aberta",
        titulo: "Storytelling Visual",
        contexto: "Nosso cérebro gosta muito de imagens e histórias.",
        pergunta: "Como essa preferência natural ajuda um infográfico a chamar mais a nossa atenção e nos fazer prestar mais atenção?",
        respostaCorreta: "Ajuda porque o cérebro humano ama imagens e histórias, e os visuais aumentam nosso engajamento.",
        justificativa: "Resposta esperada: Ajuda porque o cérebro humano ama imagens e histórias, e os visuais aumentam nosso engajamento."
    },
    {
        tipo: "aberta",
        titulo: "Prefixo",
        contexto: "A palavra 'refazer' usa uma parte no começo, o 're-', que chamamos de prefixo.",
        pergunta: "O que o 're-' significa nessa palavra?",
        respostaCorreta: "Significa repetição ou 'fazer de novo'.",
        justificativa: "Resposta esperada: Significa repetição ou 'fazer de novo'."
    },
    {
        tipo: "aberta",
        titulo: "Sustentabilidade",
        contexto: "Para economizar água, o infográfico sobre 'Atitudes simples para melhorar o mundo' sugere algo bem fácil de fazer na hora de escovar os dentes.",
        pergunta: "O que é?",
        respostaCorreta: "Escovar os dentes sem deixar a torneira aberta.",
        justificativa: "Resposta esperada: Escovar os dentes sem deixar a torneira aberta."
    },
    {
        tipo: "aberta",
        titulo: "Espaço Negativo",
        contexto: "",
        pergunta: "Em um infográfico, por que é importante deixar 'espaços vazios' (também chamado de espaço negativo) entre os textos e desenhos?",
        respostaCorreta: "Para o leitor 'respirar' e processar as informações melhor, sem se sentir sobrecarregado.",
        justificativa: "Resposta esperada: Para o leitor 'respirar' e processar as informações melhor, sem se sentir sobrecarregado."
    },

    // --- GRUPO 4: ESTUDOS DE CASO ---
    {
        tipo: "aberta",
        titulo: "Criação de Infográfico para Conscientização",
        contexto: "Situação: A escola 'Aprendizes do Futuro' percebeu que muitos alunos não sabem como separar o lixo em casa, e os avisos escritos nas paredes (somente com texto) não estão funcionando. A direção da escola quer uma forma visual e divertida de ensinar as crianças sobre reciclagem para o Dia do Meio Ambiente.",
        pergunta: "Como um infográfico poderia ajudar a escola a resolver esse problema? Cite duas coisas importantes que ele deveria ter para ser eficaz, baseando-se no que você aprendeu sobre infográficos.",
        respostaCorreta: "Um infográfico ajudaria mostrando desenhos de lixeiras coloridas e exemplos do que colocar em cada uma. Ele deveria ter cores vivas para atrair atenção e usar o storytelling visual para engajar.",
        justificativa: "Sugestão de resposta: Um infográfico seria muito bom porque ele mistura imagens e textos para explicar de forma rápida e fácil. Ele poderia mostrar desenhos de lixeiras coloridas para cada tipo de lixo (papel, plástico, metal, vidro) e exemplos do que colocar em cada uma, como o infográfico 'Separe o Lixo em Casa'. Além disso, poderia usar cores vivas para dividir as informações em seções e atrair mais a atenção das crianças, pois o 'cérebro humano é feito para amar imagens e histórias', o que aumenta o engajamento."
    },
    {
        tipo: "aberta",
        titulo: "Dificuldade com Ortografia",
        contexto: "Situação: Camila sempre se confunde na hora de escrever palavras com S, SS, C ou Ç. Ela tenta decorar todas as regras que vê, mas acaba esquecendo e comete muitos erros nas redações. Ela está ficando desanimada e acha que nunca vai aprender.",
        pergunta: "Qual é o principal conselho que as fontes dão para alguém como a Camila, que quer melhorar na escrita dessas letras sem ter que decorar todas as regras?",
        respostaCorreta: "O principal conselho é praticar muito, lendo e escrevendo bastante.",
        justificativa: "Sugestão de resposta: O melhor conselho é que ela não precisa decorar todas as regras, mas sim praticar muito, lendo e escrevendo bastante. Quanto mais ela ler livros e escrever seus próprios textos, mais naturalmente ela vai assimilar a forma correta das palavras, como se fosse um treino para o cérebro."
    },
    {
        tipo: "aberta",
        titulo: "Design de Infográfico Inconsistente",
        contexto: "Situação: Marcos fez um infográfico sobre 'Meus Animais Favoritos' para apresentar na aula. Ele usou 5 tipos de letras diferentes, misturou desenhos coloridos com fotos em preto e branco, e escolheu muitas cores que não combinavam. O resultado ficou um pouco confuso para os colegas entenderem e não ficou visualmente harmonioso.",
        pergunta: "Que duas dicas de design, relacionadas à escolha de cores e ao estilo dos elementos visuais, Marcos poderia seguir para que seu infográfico ficasse mais fácil de entender e mais bonito?",
        respostaCorreta: "Limitar o uso de fontes a no máximo três tipos e garantir consistência no estilo dos elementos visuais (usar só desenhos ou só fotos).",
        justificativa: "Sugestão de resposta: 1. Ele deveria limitar o uso de fontes a um máximo de três tipos para manter o design organizado e fácil de ler. 2. Ele precisa garantir a consistência no estilo dos elementos visuais: se ele escolheu desenhos coloridos, deveria usar apenas desenhos coloridos; se escolheu fotos, deveria usar fotos com o mesmo estilo e iluminação consistente. Assim, o infográfico não pareceria desorganizado e seria mais agradável de ver."
    }
];
