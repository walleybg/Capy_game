// Capítulo 14 - De cabeça para baixo
// Torre das Palavras (Português)
// 30 questões: 10 múltipla escolha + 10 verdadeiro/falso + 7 abertas + 3 estudos de caso
// Tema: Poemas Visuais, Origami, Pontuação, Regra do M antes de P e B

const dadosDoQuizPortugues14 = [
    // Questões 1-10: Múltipla Escolha (baseadas no PDF extraído)
    {
        tipo: "multipla_escolha",
        titulo: "Questão 1",
        contexto: "Lara leu o poema 'Falta de Sorte' e tentou entender quem era a voz no texto.\n\n'Hoje estou sem sorte\nTudo me cai da mão\nPara não perder a cabeça\nVou fugir para o Japão.'",
        pergunta: "Selecione a melhor resposta sobre o possível emissor (quem fala) no poema:",
        opcoes: [
            "a) É possível que seja a Vovó Denise falando de outra pessoa que está sem sorte.",
            "b) É o autor falando de si mesmo sobre a sua falta de sorte, pois o eu lírico usa 'eu estou' (implícito).",
            "c) O poema é sobre Lara, que viaja para o Japão por um motivo de sorte.",
            "d) O autor é Vovô Bolivar e o tema é a organização de ideias por meio da pontuação."
        ],
        respostaCorreta: "b) É o autor falando de si mesmo sobre a sua falta de sorte, pois o eu lírico usa 'eu estou' (implícito).",
        explicacao: "O eu lírico do poema fala em primeira pessoa ('estou', 'me cai', 'vou'), indicando que é o próprio autor/personagem falando de si mesmo."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Questão 2",
        contexto: "O conceito de Poema Visual é definido pelo uso de elementos gráficos, mas também por sua estrutura textual.",
        pergunta: "Qual das características listadas a seguir NÃO reflete conceitos abordados sobre Poemas Visuais?",
        opcoes: [
            "a) As letras, palavras e versos podem estar em várias direções, ou misturados, formando figuras.",
            "b) A tipografia e o tamanho da fonte podem ser usados para gerar um impacto emocional ou criar musicalidade.",
            "c) O poema visual tem uma estrutura rígida, sempre organizado em parágrafos e versos longos, para ser lido em linha reta.",
            "d) Os poemas visuais podem ter múltiplos sentidos e significados, permitindo uma leitura mais interpretativa."
        ],
        respostaCorreta: "c) O poema visual tem uma estrutura rígida, sempre organizado em parágrafos e versos longos, para ser lido em linha reta.",
        explicacao: "Esta opção está incorreta. Poemas visuais justamente quebram a estrutura rígida, usando disposições criativas e não lineares."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Questão 3",
        contexto: "Gigi está aprendendo sobre a história do Origami e leu: 'Hoje em dia, a arte de fazer origamis cresce cada vez mais. Ela vem se espalhando pela Ásia, onde surgiu, para todos os cantos do mundo. Afinal, quem é que nunca viu e nunca admirou um lindo passarinho feito de papel!'",
        pergunta: "Todas as afirmativas sobre a Origem e a História do Origami estão corretas, EXCETO:",
        opcoes: [
            "a) O Origami é uma arte milenar que surgiu no Japão e que se espalhou por vários lugares, sendo um passatempo divertido.",
            "b) A prática do Origami é considerada um passatempo, mas também uma expressão artística, valorizando a cultura.",
            "c) O surgimento do Origami está ligado apenas a atividades escolares, não sendo considerado um meio de expressão artística.",
            "d) O ato de fazer Origami é visto como uma forma de conhecer outras culturas e aproximar pessoas."
        ],
        respostaCorreta: "c) O surgimento do Origami está ligado apenas a atividades escolares, não sendo considerado um meio de expressão artística.",
        explicacao: "Esta afirmação está incorreta. O Origami é reconhecido como uma expressão artística milenar, não apenas uma atividade escolar."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Questão 4",
        contexto: "Helena está estudando a regra gramatical de usar 'M' antes de 'P' e 'B'. Ela se deparou com a seguinte lista de palavras:\n\nco___putador\ne___xemplo\nte___po\nbo___ba",
        pergunta: "Selecione a opção em que a letra M deve ser utilizada corretamente para preencher os espaços em todas as palavras:",
        opcoes: [
            "a) 1. n, 2. m, 3. n, 4. m",
            "b) 1. m, 2. n, 3. m, 4. m",
            "c) 1. n, 2. m, 3. m, 4. m",
            "d) 1. m, 2. m, 3. m, 4. m"
        ],
        respostaCorreta: "b) 1. m, 2. n, 3. m, 4. m",
        explicacao: "Regra: usa-se M antes de P e B. Computador (m antes de p), exemplo (n antes de x), tempo (m antes de p), bomba (m antes de b)."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Questão 5",
        contexto: "Vovó Lilia e Helena estão conversando sobre a importância da pontuação na organização das ideias. Vovó Lilia explica que a pontuação ajuda a sinalizar o texto escrito.",
        pergunta: "Marque a opção que descreve a melhor utilidade do Ponto de Exclamação (!):",
        opcoes: [
            "a) Indica o final de uma frase declarativa, ou de uma ideia, simplesmente encerrando o pensamento.",
            "b) É usado para indicar uma pergunta ou um questionamento direto no texto.",
            "c) É utilizado para expressar emoções fortes como surpresa, alegria, espanto ou admiração.",
            "d) Serve para marcar frases negativas que contenham as palavras não ou nunca."
        ],
        respostaCorreta: "c) É utilizado para expressar emoções fortes como surpresa, alegria, espanto ou admiração.",
        explicacao: "O ponto de exclamação (!) é usado para expressar emoções intensas como surpresa, alegria, espanto, admiração ou entusiasmo."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Questão 6",
        contexto: "O Vovô Bolivar está analisando o poema visual 'Falta de Sorte' e observa a palavra 'cai'.\n\nTrecho: 'Tudo me cai da mão'",
        pergunta: "Marque a opção que NÃO reflete a intenção dessa representação visual no poema:",
        opcoes: [
            "a) A letra 'a' está posicionada ao lado da letra 'i', indicando desordem.",
            "b) A letra 'i' está um pouco abaixo da letra 'a', sugerindo que algo está 'caindo'.",
            "c) Essa disposição da palavra visa expressar criatividade e talento.",
            "d) A imagem gerada pela palavra reforça o significado do poema (o sentido de 'perder ou esbarrar')."
        ],
        respostaCorreta: "a) A letra 'a' está posicionada ao lado da letra 'i', indicando desordem.",
        explicacao: "A opção (a) não reflete corretamente a intenção. O posicionamento vertical (não apenas ao lado) é que cria o efeito visual de 'queda'."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Questão 7",
        contexto: "Walley e Lara estão planejando a revisão de seu próprio Poema Visual. Eles precisam garantir que a imagem formada se relacione com o tema e que a disposição das palavras esteja correta.",
        pergunta: "Todas as afirmativas são passos importantes na revisão de um Poema Visual, EXCETO:",
        opcoes: [
            "a) Verificar se a imagem formada se relaciona com o texto e com as palavras escolhidas.",
            "b) Certificar-se de que as cores ou o ritmo do poema se relacionam com o tema central escolhido.",
            "c) Garantir que a disposição das palavras no papel tenha relação com o tema do poema (estrutura visual).",
            "d) Transformar o poema em um texto corrido, garantindo que ele não tenha mais de três parágrafos para facilitar a leitura."
        ],
        respostaCorreta: "d) Transformar o poema em um texto corrido, garantindo que ele não tenha mais de três parágrafos para facilitar a leitura.",
        explicacao: "Esta opção contradiz a essência do poema visual, que justamente usa disposição não linear e criativa, não texto corrido em parágrafos."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Questão 8",
        contexto: "Lara está analisando a parte do mapa mental sobre a Análise de Poemas. Essa análise envolve observar figuras e símbolos e analisar a estrutura, como rimas e significado.",
        pergunta: "Qual dos itens abaixo NÃO é um elemento de forma e significado analisado em poemas?",
        opcoes: [
            "a) O arranjo dos versos e o impacto emocional que eles provocam no leitor.",
            "b) A utilização de elementos gráficos adicionais, como desenhos ou cores, para reforçar a ideia.",
            "c) A tipografia e o tamanho da fonte, que ajudam a determinar o tom e o ritmo do poema.",
            "d) A quantidade de páginas do livro onde o poema foi publicado."
        ],
        respostaCorreta: "d) A quantidade de páginas do livro onde o poema foi publicado.",
        explicacao: "A quantidade de páginas do livro não é um elemento de análise do poema em si, mas sim uma característica editorial externa."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Questão 9",
        contexto: "A pontuação é fundamental para organizar ideias em um texto. Diferentes sinais têm diferentes funções.",
        pergunta: "Qual sinal de pontuação é usado para indicar uma pergunta ou questionamento direto?",
        opcoes: [
            "a) Ponto final (.)",
            "b) Ponto de exclamação (!)",
            "c) Ponto de interrogação (?)",
            "d) Vírgula (,)"
        ],
        respostaCorreta: "c) Ponto de interrogação (?)",
        explicacao: "O ponto de interrogação (?) é usado para indicar perguntas ou questionamentos diretos no texto."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Questão 10",
        contexto: "Poemas visuais são uma forma de arte que combina texto e imagem de maneira criativa.",
        pergunta: "Qual é a principal característica que diferencia um poema visual de um poema tradicional?",
        opcoes: [
            "a) O poema visual sempre tem mais de 20 versos.",
            "b) O poema visual usa a disposição espacial das palavras e elementos gráficos para criar significado.",
            "c) O poema visual nunca usa rimas.",
            "d) O poema visual só pode ser escrito à mão, nunca digitado."
        ],
        respostaCorreta: "b) O poema visual usa a disposição espacial das palavras e elementos gráficos para criar significado.",
        explicacao: "A principal característica do poema visual é o uso criativo do espaço, tipografia e elementos gráficos para criar significado além das palavras."
    },

    // Questões 11-20: Verdadeiro ou Falso
    {
        tipo: "verdadeiro_falso",
        titulo: "Questão 11",
        contexto: "Conceitos sobre Poemas Visuais e suas características.",
        pergunta: "Analise as afirmações sobre poemas visuais:",
        afirmacoes: [
            "I. Poemas visuais usam elementos gráficos como parte essencial da composição.",
            "II. A tipografia e o tamanho da fonte não têm importância em poemas visuais.",
            "III. Poemas visuais podem ter palavras dispostas em várias direções.",
            "IV. A leitura de um poema visual é sempre linear, da esquerda para a direita."
        ],
        opcoes: [
            "a) V, F, V, F",
            "b) V, V, F, V",
            "c) F, V, V, F",
            "d) V, F, F, V"
        ],
        respostaCorreta: "a) V, F, V, F",
        explicacao: "I-Verdadeiro: elementos gráficos são essenciais. II-Falso: tipografia é muito importante. III-Verdadeiro: palavras em várias direções. IV-Falso: leitura não é sempre linear."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Questão 12",
        contexto: "Regra gramatical do uso de M antes de P e B.",
        pergunta: "Analise as afirmações sobre a regra do M:",
        afirmacoes: [
            "I. Usa-se M antes de P e B (exemplo: campo, bomba).",
            "II. A palavra 'tempo' segue a regra do M antes de P.",
            "III. A palavra 'inverno' usa M antes de V.",
            "IV. A palavra 'computador' usa M antes de P."
        ],
        opcoes: [
            "a) V, V, F, V",
            "b) V, F, V, F",
            "c) F, V, V, V",
            "d) V, V, V, V"
        ],
        respostaCorreta: "a) V, V, F, V",
        explicacao: "I-Verdadeiro: regra do M. II-Verdadeiro: tempo tem M antes de P. III-Falso: inverno usa N antes de V, não M. IV-Verdadeiro: computador tem M antes de P."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Questão 13",
        contexto: "Pontuação e suas funções.",
        pergunta: "Analise as afirmações sobre pontuação:",
        afirmacoes: [
            "I. O ponto de exclamação (!) expressa emoções fortes.",
            "II. O ponto de interrogação (?) indica perguntas.",
            "III. O ponto final (.) encerra frases declarativas.",
            "IV. A vírgula (,) nunca é usada em poemas."
        ],
        opcoes: [
            "a) V, V, V, F",
            "b) V, F, V, V",
            "c) F, V, F, V",
            "d) V, V, F, F"
        ],
        respostaCorreta: "a) V, V, V, F",
        explicacao: "I-Verdadeiro: ! expressa emoções. II-Verdadeiro: ? indica perguntas. III-Verdadeiro: . encerra declarativas. IV-Falso: vírgula é usada em poemas."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Questão 14",
        contexto: "Origami como expressão artística e cultural.",
        pergunta: "Analise as afirmações sobre Origami:",
        afirmacoes: [
            "I. Origami é uma arte milenar que surgiu no Japão.",
            "II. Origami é apenas um passatempo infantil sem valor cultural.",
            "III. A prática do Origami se espalhou pelo mundo.",
            "IV. Origami é uma forma de expressão artística."
        ],
        opcoes: [
            "a) V, F, V, V",
            "b) V, V, F, F",
            "c) F, V, V, V",
            "d) V, F, F, V"
        ],
        respostaCorreta: "a) V, F, V, V",
        explicacao: "I-Verdadeiro: arte milenar do Japão. II-Falso: tem grande valor cultural. III-Verdadeiro: espalhou-se mundialmente. IV-Verdadeiro: é expressão artística."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Questão 15",
        contexto: "Análise de elementos em poemas.",
        pergunta: "Analise as afirmações sobre análise de poemas:",
        afirmacoes: [
            "I. O arranjo dos versos afeta o impacto emocional.",
            "II. Cores e desenhos podem reforçar ideias em poemas visuais.",
            "III. A estrutura do poema não influencia seu significado.",
            "IV. Rimas e ritmo são elementos importantes na análise."
        ],
        opcoes: [
            "a) V, V, F, V",
            "b) V, F, V, F",
            "c) F, V, V, V",
            "d) V, V, V, V"
        ],
        respostaCorreta: "a) V, V, F, V",
        explicacao: "I-Verdadeiro: arranjo afeta emoção. II-Verdadeiro: cores reforçam ideias. III-Falso: estrutura influencia muito. IV-Verdadeiro: rimas e ritmo são importantes."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Questão 16",
        contexto: "Eu lírico em poemas.",
        pergunta: "Analise as afirmações sobre eu lírico:",
        afirmacoes: [
            "I. O eu lírico é a voz que fala no poema.",
            "II. O eu lírico é sempre o autor do poema.",
            "III. O eu lírico pode expressar sentimentos e emoções.",
            "IV. Identificar o eu lírico ajuda a compreender o poema."
        ],
        opcoes: [
            "a) V, F, V, V",
            "b) V, V, F, V",
            "c) F, V, V, F",
            "d) V, F, F, V"
        ],
        respostaCorreta: "a) V, F, V, V",
        explicacao: "I-Verdadeiro: eu lírico é a voz. II-Falso: nem sempre é o autor, pode ser um personagem. III-Verdadeiro: expressa sentimentos. IV-Verdadeiro: ajuda na compreensão."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Questão 17",
        contexto: "Elementos visuais em poemas.",
        pergunta: "Analise as afirmações sobre elementos visuais:",
        afirmacoes: [
            "I. A disposição das palavras pode criar formas e figuras.",
            "II. Todos os poemas devem ter elementos visuais.",
            "III. O tamanho da fonte pode criar ênfase em certas palavras.",
            "IV. Poemas visuais permitem múltiplas interpretações."
        ],
        opcoes: [
            "a) V, F, V, V",
            "b) V, V, F, F",
            "c) F, V, V, V",
            "d) V, F, F, V"
        ],
        respostaCorreta: "a) V, F, V, V",
        explicacao: "I-Verdadeiro: palavras criam formas. II-Falso: nem todos os poemas são visuais. III-Verdadeiro: tamanho cria ênfase. IV-Verdadeiro: permitem múltiplas leituras."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Questão 18",
        contexto: "Revisão de poemas visuais.",
        pergunta: "Analise as afirmações sobre revisão:",
        afirmacoes: [
            "I. Deve-se verificar se a imagem se relaciona com o texto.",
            "II. A disposição das palavras deve ter relação com o tema.",
            "III. Poemas visuais devem ser transformados em texto corrido.",
            "IV. Cores e ritmo devem se relacionar com o tema central."
        ],
        opcoes: [
            "a) V, V, F, V",
            "b) V, F, V, F",
            "c) F, V, V, V",
            "d) V, V, V, V"
        ],
        respostaCorreta: "a) V, V, F, V",
        explicacao: "I-Verdadeiro: imagem e texto relacionados. II-Verdadeiro: disposição relacionada ao tema. III-Falso: não devem virar texto corrido. IV-Verdadeiro: cores e ritmo relacionados."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Questão 19",
        contexto: "Aplicação da regra do M.",
        pergunta: "Analise as palavras quanto ao uso correto de M ou N:",
        afirmacoes: [
            "I. 'Tambor' usa M antes de B.",
            "II. 'Inverno' usa M antes de V.",
            "III. 'Pomba' usa M antes de B.",
            "IV. 'Exemplo' usa N antes de X."
        ],
        opcoes: [
            "a) V, F, V, V",
            "b) V, V, F, F",
            "c) F, V, V, V",
            "d) V, F, F, V"
        ],
        respostaCorreta: "a) V, F, V, V",
        explicacao: "I-Verdadeiro: tambor tem M antes de B. II-Falso: inverno usa N antes de V. III-Verdadeiro: pomba tem M antes de B. IV-Verdadeiro: exemplo tem N antes de X."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Questão 20",
        contexto: "Interpretação de poemas visuais.",
        pergunta: "Analise as afirmações sobre interpretação:",
        afirmacoes: [
            "I. A forma visual reforça o significado do texto.",
            "II. Só existe uma interpretação correta para cada poema visual.",
            "III. Elementos gráficos adicionam camadas de significado.",
            "IV. A criatividade é importante na criação de poemas visuais."
        ],
        opcoes: [
            "a) V, F, V, V",
            "b) V, V, F, V",
            "c) F, V, V, F",
            "d) V, F, F, V"
        ],
        respostaCorreta: "a) V, F, V, V",
        explicacao: "I-Verdadeiro: forma reforça significado. II-Falso: pode haver múltiplas interpretações. III-Verdadeiro: elementos gráficos adicionam significado. IV-Verdadeiro: criatividade é essencial."
    },

    // Questões 21-27: Abertas
    {
        tipo: "aberta",
        titulo: "Questão 21",
        contexto: "",
        pergunta: "O que é um poema visual?",
        opcoes: [],
        respostaCorreta: "Poema visual é uma forma de poesia que usa elementos gráficos, disposição espacial das palavras e tipografia para criar significado além do texto escrito.",
        explicacao: "Poemas visuais combinam texto e imagem, usando a disposição criativa das palavras, cores, formas e tipografia para expressar ideias e emoções."
    },
    {
        tipo: "aberta",
        titulo: "Questão 22",
        contexto: "",
        pergunta: "Qual é a regra gramatical para o uso de M antes de P e B? Dê dois exemplos.",
        opcoes: [],
        respostaCorreta: "Usa-se M antes de P e B. Exemplos: campo, bomba, tempo, computador.",
        explicacao: "A regra estabelece que antes das letras P e B, usa-se sempre M, nunca N. Exemplos: campo, bomba, tempo, computador, pomba, tambor."
    },
    {
        tipo: "aberta",
        titulo: "Questão 23",
        contexto: "",
        pergunta: "Qual é a função do ponto de exclamação (!) em um texto?",
        opcoes: [],
        respostaCorreta: "Expressar emoções fortes como surpresa, alegria, espanto, admiração ou entusiasmo.",
        explicacao: "O ponto de exclamação é usado para indicar emoções intensas e dar ênfase emocional às frases."
    },
    {
        tipo: "aberta",
        titulo: "Questão 24",
        contexto: "",
        pergunta: "O que é Origami e qual é sua origem?",
        opcoes: [],
        respostaCorreta: "Origami é a arte milenar de dobrar papel que surgiu no Japão e se espalhou pelo mundo como forma de expressão artística e cultural.",
        explicacao: "Origami é uma prática artística japonesa que consiste em criar figuras dobrando papel sem cortar ou colar, valorizada como expressão cultural."
    },
    {
        tipo: "aberta",
        titulo: "Questão 25",
        contexto: "",
        pergunta: "O que é o 'eu lírico' em um poema?",
        opcoes: [],
        respostaCorreta: "O eu lírico é a voz que fala no poema, o personagem ou narrador que expressa sentimentos e emoções no texto poético.",
        explicacao: "O eu lírico não é necessariamente o autor, mas sim a voz poética criada para expressar as ideias e sentimentos do poema."
    },
    {
        tipo: "aberta",
        titulo: "Questão 26",
        contexto: "",
        pergunta: "Por que a disposição visual das palavras é importante em um poema visual?",
        opcoes: [],
        respostaCorreta: "A disposição visual reforça o significado do poema, cria impacto emocional e permite que a forma contribua para a mensagem do texto.",
        explicacao: "Em poemas visuais, a forma como as palavras são dispostas no espaço é parte essencial do significado, criando uma experiência visual e textual integrada."
    },
    {
        tipo: "aberta",
        titulo: "Questão 27",
        contexto: "",
        pergunta: "Cite três elementos que podem ser analisados em um poema visual.",
        opcoes: [],
        respostaCorreta: "Tipografia/tamanho da fonte, disposição espacial das palavras, cores e elementos gráficos, ritmo e rimas, impacto emocional.",
        explicacao: "Poemas visuais podem ser analisados considerando: tipografia, disposição espacial, cores, elementos gráficos, estrutura, ritmo, rimas e impacto emocional."
    },

    // Questões 28-30: Estudos de Caso
    {
        tipo: "opiniao",
        titulo: "Questão 28",
        contexto: "Sofia quer criar um poema visual sobre o tema 'chuva'. Ela tem as seguintes ideias: escrever a palavra 'chuva' várias vezes em linhas retas, usar letras azuis, ou dispor as letras de forma que pareçam gotas caindo.",
        pergunta: "Qual sugestão você daria a Sofia para que seu poema visual seja mais efetivo? Justifique sua resposta explicando como a forma visual pode reforçar o tema.",
        opcoes: [],
        respostaCorreta: "Sugestão: Dispor as letras de forma que pareçam gotas caindo, usando diferentes tamanhos e posições verticais. Isso reforça visualmente o tema da chuva, criando movimento e representando as gotas. Pode combinar com letras azuis para reforçar ainda mais.",
        explicacao: "A efetividade de um poema visual está na integração entre forma e conteúdo. Dispor as letras como gotas caindo cria uma representação visual direta do tema, tornando o poema mais impactante."
    },
    {
        tipo: "opiniao",
        titulo: "Questão 29",
        contexto: "Pedro escreveu a frase: 'Eu vou coprar u covputador novo e u capo de futebol'. Ele percebeu que há erros de ortografia relacionados à regra do M antes de P e B.",
        pergunta: "Identifique os erros e reescreva a frase corretamente. Explique qual regra ortográfica Pedro não aplicou corretamente.",
        opcoes: [],
        respostaCorreta: "Frase correta: 'Eu vou comprar um computador novo e um campo de futebol'. Erros: coprar→comprar, u→um, covputador→computador, capo→campo. Regra não aplicada: M antes de P e B.",
        explicacao: "Pedro não aplicou a regra de usar M antes de P e B. As correções são: comprar (M antes de P), um (M antes de palavra que começa com consoante), computador (M antes de P), campo (M antes de P)."
    },
    {
        tipo: "opiniao",
        titulo: "Questão 30",
        contexto: "Ana está revisando seu poema visual sobre 'liberdade' e percebeu que transformou todo o texto em parágrafos corridos para 'facilitar a leitura'. Seu professor disse que isso descaracterizou o poema visual.",
        pergunta: "Explique por que transformar um poema visual em texto corrido descaracteriza sua essência. O que Ana deveria fazer para manter as características de um poema visual?",
        opcoes: [],
        respostaCorreta: "Transformar em texto corrido elimina a disposição visual criativa, que é essencial no poema visual. Ana deveria manter a disposição espacial das palavras relacionada ao tema 'liberdade', usando formas, direções variadas e elementos gráficos que representem visualmente o conceito de liberdade.",
        explicacao: "A essência do poema visual está justamente na quebra da linearidade do texto corrido. A disposição espacial, formas e elementos gráficos são parte integral do significado, não apenas decoração."
    }
];
