// Arquivo-depósito de todas as perguntas do jogo para a Arena "Torre das Palavras". Versão: 1.2 (Conteúdo Completo e V/F Corrigido)

const dadosDoQuizLP = [
    // --- GRUPO 1: MÚLTIPLA ESCOLHA ---
    {
        tipo: "multipla_escolha",
        titulo: "Infográfico da Árvore",
        contexto: "Observe o infográfico para responder à questão. Ele mostra o crescimento de uma árvore ao longo de 4 estações: Inverno, Primavera, Verão e Outono, detalhando as características de cada fase. No inverno, a árvore está dormente, sem folhas. Na primavera, as folhas brotam e as flores aparecem. No verão, as folhas estão verdes e cheias, e os frutos começam a amadurecer. No outono, as folhas mudam de cor e caem, preparando a árvore para o próximo inverno.",
        pergunta: "De acordo com o infográfico, em qual estação a árvore está se preparando para uma nova fase de crescimento, perdendo suas folhas?",
        opcoes: ["Inverno", "Primavera", "Verão", "Outono"],
        respostaCorreta: "Outono",
        justificativa: "O infográfico mostra que no Outono, as folhas da árvore mudam de cor e caem, preparando-a para o inverno e o ciclo de crescimento seguinte."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Sinônimos",
        contexto: "Identifique a palavra que possui o mesmo sentido ou significado de outra palavra.",
        pergunta: "Qual é o sinônimo de 'feliz'?",
        opcoes: ["Triste", "Contente", "Bravo", "Cansado"],
        respostaCorreta: "Contente",
        justificativa: "'Contente' é a palavra que melhor expressa o mesmo sentido de 'feliz'."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Antônimos",
        contexto: "Identifique a palavra que possui sentido oposto ao de outra palavra.",
        pergunta: "Qual é o antônimo de 'claro'?",
        opcoes: ["Brilhante", "Luminoso", "Escuro", "Transparente"],
        respostaCorreta: "Escuro",
        justificativa: "'Escuro' é a palavra que expressa o sentido oposto de 'claro'."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Classificação de Palavras",
        contexto: "As palavras podem ser classificadas de acordo com o número de sílabas.",
        pergunta: "A palavra 'escola' é classificada como:",
        opcoes: ["Monossílaba", "Dissílaba", "Trissílaba", "Polissílaba"],
        respostaCorreta: "Trissílaba",
        justificativa: "A palavra 'escola' possui três sílabas: es-co-la, sendo, portanto, trissílaba."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Substantivo Comum",
        contexto: "Substantivos são palavras que nomeiam seres, objetos, lugares, sentimentos.",
        pergunta: "Qual das palavras abaixo é um substantivo comum?",
        opcoes: ["Brasil", "Pedro", "Cadeira", "Paris"],
        respostaCorreta: "Cadeira",
        justificativa: "'Cadeira' nomeia um objeto de forma genérica, sendo um substantivo comum. Os demais são próprios."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Verbo no Passado",
        contexto: "Verbos indicam ação, estado ou fenômeno da natureza e podem variar de acordo com o tempo.",
        pergunta: "Qual frase o verbo está no passado?",
        opcoes: ["Eu canto bem.", "Eles lerão o livro.", "Nós comemos pizza.", "Ela estuda muito."],
        respostaCorreta: "Nós comemos pizza.",
        justificativa: "O verbo 'comemos' na frase 'Nós comemos pizza' indica uma ação que já aconteceu (passado)."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Sinais de Pontuação",
        contexto: "Os sinais de pontuação são essenciais para a clareza e sentido dos textos.",
        pergunta: "Qual sinal de pontuação indica uma pergunta?",
        opcoes: ["Ponto final ( . )", "Vírgula ( , )", "Ponto de interrogação ( ? )", "Ponto de exclamação ( ! )"],
        respostaCorreta: "Ponto de interrogação ( ? )",
        justificativa: "O ponto de interrogação (?) é usado para indicar uma pergunta, expressando uma dúvida ou questionamento."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Plural de Substantivos",
        contexto: "Muitos substantivos formam o plural acrescentando 's' ao final, mas há exceções.",
        pergunta: "Qual é o plural correto da palavra 'pão'?",
        opcoes: ["Pãos", "Pães", "Panos", "Poezinhos"],
        respostaCorreta: "Pães",
        justificativa: "O plural de 'pão' é 'pães', seguindo a regra de substantivos terminados em '-ão'."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Uso do 'Mas' e 'Mais'",
        contexto: "As palavras 'mas' e 'mais' são homófonas (mesmo som), mas possuem significados e usos diferentes.",
        pergunta: "Qual a frase que usa 'mas' corretamente?",
        opcoes: ["Eu tenho mais amigos.", "Ela é bonita, mas não simpática.", "Ele quer mais um pedaço.", "Eu preciso de mais tempo."],
        respostaCorreta: "Ela é bonita, mas não simpática.",
        justificativa: "'Mas' é uma conjunção adversativa, indicando oposição, enquanto 'mais' indica quantidade ou intensidade."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Classes de Palavras",
        contexto: "As palavras são divididas em classes, como substantivos, verbos, adjetivos, etc.",
        pergunta: "Na frase 'O céu azul está lindo.', qual palavra é um adjetivo?",
        opcoes: ["O", "Céu", "Azul", "Está"],
        respostaCorreta: "Azul",
        justificativa: "'Azul' é um adjetivo, pois qualifica o substantivo 'céu', indicando uma característica."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Pontuação para Lista",
        contexto: "Ao apresentar uma sequência de itens, um sinal de pontuação específico é geralmente usado.",
        pergunta: "Qual sinal de pontuação é usado para iniciar uma lista?",
        opcoes: ["Ponto final ( . )", "Vírgula ( , )", "Dois-pontos ( : )", "Ponto e vírgula ( ; )"],
        respostaCorreta: "Dois-pontos ( : )",
        justificativa: "Os dois-pontos ( : ) são frequentemente usados para introduzir uma enumeração ou uma lista de itens."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Concordância Verbal",
        contexto: "O verbo deve concordar em número e pessoa com o sujeito da oração.",
        pergunta: "Assinale a frase com a concordância verbal correta:",
        opcoes: ["Nós foi ao parque.", "Eles vai viajar.", "Eu estudamos muito.", "Ela cantou uma música."],
        respostaCorreta: "Ela cantou uma música.",
        justificativa: "Na frase 'Ela cantou uma música', o verbo 'cantou' concorda com o sujeito 'Ela' (terceira pessoa do singular)."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Homônimos",
        contexto: "Palavras homônimas têm a mesma pronúncia ou grafia, mas significados diferentes.",
        pergunta: "Qual par de palavras é homônimo?",
        opcoes: ["Casa (moradia) / Caza (verbo)", "Coser (costurar) / Cozer (cozinhar)", "Mal / Mau", "Bom / Mau"],
        respostaCorreta: "Coser (costurar) / Cozer (cozinhar)",
        justificativa: "'Coser' e 'cozer' têm a mesma pronúncia, mas grafias e significados diferentes."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Acentuação Gráfica",
        contexto: "A acentuação gráfica segue regras para indicar a sílaba tônica e a pronúncia das palavras.",
        pergunta: "Qual palavra está corretamente acentuada?",
        opcoes: ["Cafe", "Voce", "Sábia", "Arvôre"],
        respostaCorreta: "Sábia",
        justificativa: "A palavra 'sábia' é uma paroxítona terminada em ditongo crescente, necessitando de acento."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Coerência Textual",
        contexto: "A coerência refere-se à lógica e ao sentido das ideias em um texto.",
        pergunta: "Qual das opções mostra um problema de coerência?",
        opcoes: ["Corri muito e cheguei atrasado.", "Li um livro sobre gatos, por isso comprei um cachorro.", "Choveu forte, então peguei meu guarda-chuva.", "Estudei para a prova e tirei nota boa."],
        respostaCorreta: "Li um livro sobre gatos, por isso comprei um cachorro.",
        justificativa: "A ação de ler sobre gatos e comprar um cachorro não apresenta uma relação lógica direta, indicando falta de coerência."
    },

    // --- GRUPO 2: VERDADEIRO OU FALSO (Múltiplas Afirmações) ---
    {
        tipo: "verdadeiro_falso",
        titulo: "Ortografia e Gramática",
        contexto: "Analise as afirmações sobre regras ortográficas e gramaticais da Língua Portuguesa.",
        pergunta: "Classifique as afirmações como (V) Verdadeiro ou (F) Falso:",
        afirmacoes: [
            "A palavra 'exceção' é escrita com 'ç'.",
            "Usa-se 'onde' para lugares e 'aonde' para movimento/destino.",
            "Todas as palavras terminadas em 's' no plural são oxítonas.",
            "O artigo definido 'o' concorda em gênero e número com o substantivo."
        ],
        opcoes: [
            "V, V, F, V", // Esta é a resposta correta
            "V, F, V, F",
            "F, V, V, V",
            "V, V, V, F"
        ],
        respostaCorreta: "V, V, F, V",
        justificativa: "1. Verdadeiro. 2. Verdadeiro. 3. Falso (ex: 'lápis' é paroxítona). 4. Verdadeiro."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Concordância Nominal e Verbal",
        contexto: "Avalie as regras de concordância em diversas situações linguísticas.",
        pergunta: "Marque (V) para Verdadeiro ou (F) para Falso:",
        afirmacoes: [
            "Em 'Ela e eu iremos ao cinema', o verbo concorda com 'nós'.",
            "A palavra 'anexo' em 'Segue anexo as fotos' está correta.",
            "Na frase 'Fazem muitos anos que não o vejo', o verbo 'fazer' está correto.",
            "O adjetivo concorda em gênero e número com o substantivo a que se refere."
        ],
        opcoes: [
            "V, F, F, V", // Esta é a resposta correta
            "F, V, V, F",
            "V, V, F, F",
            "F, F, V, V"
        ],
        respostaCorreta: "V, F, F, V",
        justificativa: "1. Verdadeiro. 2. Falso (o correto é 'anexas as fotos'). 3. Falso (o correto é 'Faz muitos anos'). 4. Verdadeiro."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Tipos de Frase",
        contexto: "Identifique as características de diferentes tipos de frases na Língua Portuguesa.",
        pergunta: "Assinale (V) ou (F):",
        afirmacoes: [
            "Uma frase exclamativa expressa uma emoção intensa.",
            "Uma frase interrogativa sempre termina com ponto final.",
            "A frase imperativa indica uma ordem, conselho ou pedido.",
            "Toda frase declarativa sempre afirma algo, nunca nega."
        ],
        opcoes: [
            "V, F, V, F", // Esta é a resposta correta
            "F, V, F, V",
            "V, V, F, F",
            "F, F, V, V"
        ],
        respostaCorreta: "V, F, V, F",
        justificativa: "1. Verdadeiro. 2. Falso (termina com ?). 3. Verdadeiro. 4. Falso (pode ser negativa)."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Figuras de Linguagem",
        contexto: "Analise as descrições de algumas figuras de linguagem e sua aplicação.",
        pergunta: "Marque (V) para Verdadeiro ou (F) para Falso:",
        afirmacoes: [
            "Metáfora é uma comparação explícita, com 'como' ou 'tal qual'.",
            "Personificação atribui características humanas a seres inanimados.",
            "Hipérbole é o exagero intencional para enfatizar uma ideia.",
            "Ironia é a figura de linguagem que expressa o contrário do que se pensa, com intenção crítica ou humorística."
        ],
        opcoes: [
            "F, V, V, V", // Esta é a resposta correta
            "V, F, V, F",
            "F, V, F, V",
            "V, V, V, F"
        ],
        respostaCorreta: "F, V, V, V",
        justificativa: "1. Falso (isso é comparação, metáfora é implícita). 2. Verdadeiro. 3. Verdadeiro. 4. Verdadeiro."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Vocezê e Vocativo",
        contexto: "Observe as regras de uso do 'você' e a função do vocativo na frase.",
        pergunta: "Assinale (V) ou (F):",
        afirmacoes: [
            "A palavra 'você' é um pronome de tratamento formal.",
            "O vocativo serve para chamar ou interpelar o interlocutor.",
            "O vocativo é sempre separado por vírgula na frase.",
            "O pronome 'você' sempre exige que o verbo esteja na 2ª pessoa do singular."
        ],
        opcoes: [
            "F, V, V, F", // Esta é a resposta correta
            "V, F, V, F",
            "F, V, F, V",
            "V, V, V, V"
        ],
        respostaCorreta: "F, V, V, F",
        justificativa: "1. Falso (é informal). 2. Verdadeiro. 3. Verdadeiro. 4. Falso (exige verbo na 3ª pessoa do singular)."
    },

    // --- GRUPO 3: RESPOSTA ABERTA ---
    {
        tipo: "aberta",
        titulo: "Identificação de Adjetivo",
        contexto: "Adjetivos são palavras que caracterizam um substantivo, indicando qualidade, estado, etc.",
        pergunta: "Qual é o adjetivo na frase 'A casa velha foi demolida'?",
        respostaCorreta: "velha",
        justificativa: "'Velha' é o adjetivo que caracteriza o substantivo 'casa'."
    },
    {
        tipo: "aberta",
        titulo: "Significado de 'Emergir'",
        contexto: "A compreensão do vocabulário é fundamental para a interpretação de textos.",
        pergunta: "O que significa a palavra 'emergir'?",
        respostaCorreta: "Vir à tona; aparecer; subir.",
        justificativa: "'Emergir' significa vir à tona, surgir, aparecer na superfície."
    },
    {
        tipo: "aberta",
        titulo: "Pontuação em Diálogo",
        contexto: "Em um diálogo, a fala dos personagens é indicada por sinais de pontuação específicos.",
        pergunta: "Qual sinal de pontuação é usado para indicar a fala de um personagem?",
        respostaCorreta: "Travessão (—)",
        justificativa: "O travessão (—) é o sinal de pontuação utilizado para introduzir a fala de um personagem em um diálogo."
    },
    {
        tipo: "aberta",
        titulo: "Sinônimo de 'Belo'",
        contexto: "Ampliar o vocabulário enriquece a capacidade de expressão.",
        pergunta: "Dê um sinônimo para a palavra 'belo'.",
        respostaCorreta: "Lindo (ou formoso, bonito, etc.)",
        justificativa: "'Lindo' é um sinônimo comum para 'belo'."
    },
    {
        tipo: "aberta",
        titulo: "Classificação da Palavra 'Ontem'",
        contexto: "As palavras se encaixam em diferentes classes gramaticais.",
        pergunta: "Qual a classe gramatical da palavra 'ontem'?",
        respostaCorreta: "Advérbio de tempo",
        justificativa: "'Ontem' é um advérbio de tempo, pois indica uma circunstância temporal."
    },
    {
        tipo: "aberta",
        titulo: "O que é um Parágrafo?",
        contexto: "A organização textual é fundamental para a clareza da escrita.",
        pergunta: "Em suas palavras, o que é um parágrafo?",
        respostaCorreta: "É uma divisão de um texto que agrupa ideias relacionadas em torno de uma ideia principal, marcada por um recuo na linha inicial.",
        justificativa: "Um parágrafo é uma unidade de texto que desenvolve uma ideia central, geralmente marcada por um recuo na primeira linha e terminando em ponto final."
    },
    {
        tipo: "aberta",
        titulo: "Uso de 'Há' ou 'A'",
        contexto: "A distinção entre 'há' (verbo 'haver') e 'a' (preposição/artigo) é um erro comum.",
        pergunta: "Qual palavra completa corretamente a frase '______ anos não o vejo'?",
        respostaCorreta: "Há",
        justificativa: "Usa-se 'há' (do verbo haver) para indicar tempo decorrido no sentido de 'faz'."
    },
    {
        tipo: "aberta",
        titulo: "Prefixo e Sufixo",
        contexto: "Palavras podem ser formadas por acréscimo de elementos antes ou depois de sua raiz.",
        pergunta: "Qual a diferença entre prefixo e sufixo?",
        respostaCorreta: "Prefixo vem antes da raiz da palavra, sufixo vem depois.",
        justificativa: "Prefixos são adicionados antes do radical, alterando o sentido da palavra (ex: des-fazer). Sufixos são adicionados depois do radical (ex: feliz-mente)."
    },
    {
        tipo: "aberta",
        titulo: "O que é Sujeito?",
        contexto: "A identificação dos termos da oração é essencial para a análise sintática.",
        pergunta: "Em uma oração simples, o que é o sujeito?",
        respostaCorreta: "É o termo da oração que pratica ou sofre a ação, ou sobre quem se declara algo.",
        justificativa: "O sujeito é o elemento da oração sobre o qual o verbo faz uma declaração, realizando ou sofrendo a ação."
    },
    {
        tipo: "aberta",
        titulo: "Verbo Irregular",
        contexto: "Verbos irregulares não seguem o padrão de conjugação de sua classe.",
        pergunta: "Dê um exemplo de verbo irregular.",
        respostaCorreta: "Ser (ou ir, ter, vir, etc.)",
        justificativa: "O verbo 'ser' é irregular porque sua conjugação se afasta do padrão (ex: eu sou, tu és)."
    },
    {
        tipo: "aberta",
        titulo: "Conceito de Crônica",
        contexto: "Crônica é um gênero textual que se situa entre o jornalismo e a literatura.",
        pergunta: "Em uma frase, defina o que é uma crônica.",
        respostaCorreta: "É um texto curto que relata fatos cotidianos de forma leve e pessoal, com reflexões.",
        justificativa: "Crônica é um gênero textual que aborda temas do dia a dia, com linguagem simples e um tom subjetivo ou reflexivo."
    },
    {
        tipo: "aberta",
        titulo: "Palavra com Ditongo",
        contexto: "Ditongo é o encontro de uma vogal e uma semivogal (ou vice-versa) na mesma sílaba.",
        pergunta: "Dê um exemplo de palavra que contenha um ditongo.",
        respostaCorreta: "Pai (ou caixa, ouro, loiro, etc.)",
        justificativa: "Na palavra 'pai', as letras 'a' (vogal) e 'i' (semivogal) formam um ditongo na mesma sílaba."
    },
    {
        tipo: "aberta",
        titulo: "Função do Artigo",
        contexto: "Artigos são palavras que acompanham o substantivo, determinando-o ou indeterminando-o.",
        pergunta: "Qual a função principal de um artigo?",
        respostaCorreta: "Determinar ou indeterminar o substantivo, indicando gênero e número.",
        justificativa: "A principal função de um artigo é anteceder o substantivo, especificando-o (definido) ou generalizando-o (indefinido), e concordando em gênero e número."
    },
    {
        tipo: "aberta",
        titulo: "Identificação de Sujeito Simples",
        contexto: "Em uma oração, o sujeito é classificado de acordo com o número de núcleos.",
        pergunta: "Qual o sujeito da frase 'Os alunos estudam muito.' e qual sua classificação?",
        respostaCorreta: "O sujeito é 'Os alunos', e é classificado como Sujeito Simples.",
        justificativa: "O sujeito é 'Os alunos', e como possui apenas um núcleo ('alunos'), é um Sujeito Simples."
    },
    {
        tipo: "aberta",
        titulo: "Importância de um Bom Infográfico",
        contexto: "Infográficos são ferramentas visuais que combinam texto e imagem para explicar informações complexas de forma clara e rápida. Eles são muito usados para apresentar dados, instruções ou histórias, tornando o aprendizado mais acessível e interessante.",
        pergunta: "Em suas palavras, qual a principal vantagem de usar um infográfico para apresentar informações, em comparação com um texto longo?",
        respostaCorreta: "A principal vantagem é que o infográfico torna a informação mais clara, visualmente atraente e fácil de entender rapidamente, resumindo conteúdos complexos.",
        justificativa: "A principal vantagem é que o infográfico torna a informação mais clara, visualmente atraente e fácil de entender rapidamente, resumindo conteúdos complexos e facilitando o aprendizado. Ele combina texto e imagem de forma didática."
    }
];