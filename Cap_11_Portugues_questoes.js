// Questões do Capítulo 11 de Português - Notícias de um mundo selvagem
const dadosDoQuizPortugues11 = [
    // --- GRUPO 1: MÚLTIPLA ESCOLHA ---
    {
        tipo: "multipla_escolha",
        titulo: "Descoberta de Fóssil de Dinossauro",
        contexto: "Uma turma está estudando sobre uma notícia que fala da descoberta de um fóssil de dinossauro no Rio Grande do Sul. O texto menciona várias informações sobre o achado.",
        pergunta: "Segundo o texto, qual afirmação sobre o fóssil de dinossauro está incorreta?",
        opcoes: [
            "O fóssil ajuda a entender a origem dos dinossauros.",
            "É um achado raro por estar quase completo.",
            "O material não faz nenhuma menção sobre a facilidade de fossilização de dinossauros carnívoros.",
            "Fará parte de uma coleção universitária."
        ],
        respostaCorreta: "O material não faz nenhuma menção sobre a facilidade de fossilização de dinossauros carnívoros.",
        justificativa: "O texto informa que o fóssil ajuda a entender a origem dos dinossauros (a), que é um achado raro por estar quase completo (b), e que fará parte de uma coleção universitária (d). A única afirmação que não está no texto é a (c); o material não faz nenhuma menção sobre a facilidade de fossilização de dinossauros carnívoros."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Características do Quokka",
        contexto: "Uma turma está lendo sobre o quokka, um animal que vive na Ilha de Rottnest, na Austrália. O texto apresenta várias características deste marsupial.",
        pergunta: "Qual das alternativas apresenta uma informação incorreta sobre o quokka, segundo o texto?",
        opcoes: [
            "É um marsupial que vive na Ilha de Rottnest.",
            "É chamado de 'rei das selfies'.",
            "É considerado vulnerável na natureza.",
            "Não enfrenta riscos na natureza."
        ],
        respostaCorreta: "Não enfrenta riscos na natureza.",
        justificativa: "A alternativa (d) está incorreta porque o texto afirma claramente que o quokka 'é considerado vulnerável na natureza', indicando que ele enfrenta riscos. As outras alternativas estão corretas e são mencionadas no texto: ele é um marsupial (a), vive na Ilha de Rottnest (b), e é chamado de 'rei das selfies' (c)."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Separação Silábica e Sílaba Tônica",
        contexto: "Uma professora está ensinando sobre separação silábica e sílaba tônica. Ela explica que a sílaba tônica é a mais forte da palavra.",
        pergunta: "Analisando a separação silábica e a sílaba tônica, qual sequência está correta?",
        opcoes: [
            "FÓS-sil (penúltima sílaba, paroxítona), a-ni-MAL (última sílaba, oxítona) e ci-en-TÍ-fi-cos (antepenúltima sílaba, proparoxítona).",
            "FOS-sil (última sílaba, oxítona), a-ni-mal (penúltima sílaba, paroxítona) e ci-en-ti-fi-cos (última sílaba, oxítona).",
            "fós-SIL (última sílaba, oxítona), A-ni-mal (primeira sílaba, proparoxítona) e ci-EN-ti-fi-cos (segunda sílaba, paroxítona).",
            "fós-sil (primeira sílaba, proparoxítona), a-NI-mal (segunda sílaba, paroxítona) e ci-en-tí-FI-cos (quarta sílaba, oxítona)."
        ],
        respostaCorreta: "FÓS-sil (penúltima sílaba, paroxítona), a-ni-MAL (última sílaba, oxítona) e ci-en-TÍ-fi-cos (antepenúltima sílaba, proparoxítona).",
        justificativa: "A separação silábica e a sílaba tônica são: FÓS-sil (penúltima sílaba, paroxítona), a-ni-MAL (última sílaba, oxítona) e ci-en-TÍ-fi-cos (antepenúltima sílaba, proparoxítona)."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Acentuação de Palavras Oxítonas",
        contexto: "Um grupo de estudantes está revisando as regras de acentuação. Eles sabem que palavras oxítonas terminadas em certas letras devem ser acentuadas.",
        pergunta: "Considerando as regras de acentuação das oxítonas, qual das palavras abaixo deveria ser acentuada?",
        opcoes: [
            "jacare",
            "voce",
            "avo",
            "tubarao"
        ],
        respostaCorreta: "voce",
        justificativa: "As palavras 'jacaré', 'você' e 'avô' são todas oxítonas (sílaba tônica na última sílaba) e, de acordo com a regra de acentuação apresentada no capítulo, as oxítonas terminadas em '-a, -e, -o' (seguidas ou não de 's') devem ser acentuadas."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Elementos de uma Notícia",
        contexto: "Uma turma está aprendendo sobre os elementos que compõem uma notícia. O professor explica que existem perguntas básicas que toda notícia deve responder.",
        pergunta: "Qual das perguntas básicas do jornalismo não é respondida no primeiro parágrafo da notícia sobre o dinossauro?",
        opcoes: [
            "Quando? (Em maio de 2024)",
            "Quem? (cientistas)",
            "Onde? (no Rio Grande do Sul)",
            "Por quê? (motivo da morte do dinossauro ou por que ele estava naquele local)"
        ],
        respostaCorreta: "Por quê? (motivo da morte do dinossauro ou por que ele estava naquele local)",
        justificativa: "O trecho responde 'Quando?' (Em maio de 2024), 'Quem?' (cientistas) e 'Onde?' (no Rio Grande do Sul). A pergunta 'Por quê?' (o motivo da morte do dinossauro ou por que ele estava naquele local) não é respondida nesse parágrafo inicial."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Status de Conservação de Animais",
        contexto: "Uma turma está estudando sobre diferentes níveis de ameaça que os animais podem enfrentar na natureza. Eles aprenderam sobre um infográfico que mostra esses níveis.",
        pergunta: "Analisando o infográfico sobre status de conservação, qual é a conclusão mais adequada?",
        opcoes: [
            "Todos os animais enfrentam as mesmas ameaças.",
            "\"Em Perigo\" é um status de maior risco que \"Vulnerável\".",
            "Cada animal enfrenta diferentes ameaças, incluindo perda de habitat, doenças e predadores.",
            "A doença é citada apenas para o Diabo-da-tasmânia."
        ],
        respostaCorreta: "Cada animal enfrenta diferentes ameaças, incluindo perda de habitat, doenças e predadores.",
        justificativa: "Analisando o infográfico, percebe-se que cada animal enfrenta diferentes ameaças, incluindo perda de habitat, doenças e predadores. Portanto, a conclusão mais lógica é a (c). A (a) está errada pois há outras ameaças; a (b) está errada pois 'Em Perigo' é um status de maior risco que 'Vulnerável'; e a (d) está errada pois a doença é citada apenas para o Diabo-da-tasmânia."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Uso de Sinônimos em Textos",
        contexto: "Uma professora está explicando sobre a importância de usar palavras diferentes para se referir ao mesmo ser ou objeto, evitando repetições no texto.",
        pergunta: "Qual é a principal função do uso de sinônimos e palavras diferentes em um texto jornalístico?",
        opcoes: [
            "Tornar o texto mais difícil de entender.",
            "Evitar a repetição e deixar o texto mais agradável de ler, sem perder o sentido.",
            "Confundir o leitor sobre qual animal está sendo mencionado.",
            "Demonstrar o conhecimento do autor sobre vocabulário complexo."
        ],
        respostaCorreta: "Evitar a repetição e deixar o texto mais agradável de ler, sem perder o sentido.",
        justificativa: "O uso de sinônimos e palavras diferentes para se referir a um mesmo ser ou objeto (neste caso, 'animalzinho', 'bichinho', 'mamífero') é um recurso para evitar a repetição e deixar o texto mais agradável de ler, sem perder o sentido."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Identificação de Fake News",
        contexto: "Uma turma está aprendendo sobre fake news e como identificá-las. O professor mostra diferentes manchetes para que eles analisem.",
        pergunta: "Qual das manchetes abaixo apresenta características mais comuns de fake news?",
        opcoes: [
            "\"Cientistas descobrem nova espécie de pássaro na Amazônia\"",
            "\"INACREDITÁVEL! Dinossauro vivo encontrado em caverna secreta - VOCÊ NÃO VAI ACREDITAR!\"",
            "\"Pesquisa revela aumento de 15% na população de quokkas\"",
            "\"Governo anuncia nova lei de proteção aos animais silvestres\""
        ],
        respostaCorreta: "\"INACREDITÁVEL! Dinossauro vivo encontrado em caverna secreta - VOCÊ NÃO VAI ACREDITAR!\"",
        justificativa: "A manchete (b) apresenta uma informação exagerada e que apela para a emoção, sem base científica comprovável, características comuns em fake news. As outras manchetes descrevem eventos plausíveis e comuns no jornalismo científico e ambiental."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Classificação de Palavras por Tonicidade",
        contexto: "Uma turma está estudando a classificação das palavras quanto à posição da sílaba tônica. Eles precisam identificar paroxítonas em uma lista.",
        pergunta: "Qual sequência contém apenas palavras paroxítonas?",
        opcoes: [
            "repórter, fácil, nível",
            "português, tatu, libélula",
            "fóssil, jacaré, avô",
            "animal, dinossauro, natureza"
        ],
        respostaCorreta: "repórter, fácil, nível",
        justificativa: "As palavras re-PÓR-ter, FÁ-cil e NÍ-vel têm a penúltima sílaba como tônica, portanto, são todas paroxítonas. A regra de acentuação para paroxítonas terminadas em '-r e -l' justifica o acento em todas elas."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Análise de Sequência de Tonicidade",
        contexto: "Um professor está corrigindo um exercício sobre classificação de palavras quanto à tonicidade. Ele precisa verificar se a sequência está correta.",
        pergunta: "Analisando a sílaba tônica das palavras 'Português', 'tatu' e 'libélula', qual é a sequência correta de classificação?",
        opcoes: [
            "Oxítona, Oxítona, Proparoxítona",
            "Paroxítona, Paroxítona, Proparoxítona",
            "Oxítona, Paroxítona, Proparoxítona",
            "Proparoxítona, Oxítona, Paroxítona"
        ],
        respostaCorreta: "Oxítona, Oxítona, Proparoxítona",
        justificativa: "Vamos analisar a sílaba tônica: Por-tu-GUÊS (oxítona), ta-TU (oxítona), li-BÉ-tu-la (proparoxítona). A sequência correta seria Oxítona, Oxítona, Proparoxítona, que não está na alternativa (b). Correção: A palavra Português é oxítona, tatu é oxítona, e libélula é proparoxítona. Nenhuma das alternativas reflete essa sequência. Vamos reavaliar a questão original. Se a palavra fosse esquilo (es-QUI-lo), seria paroxítona. A questão como formulada pode conter um erro nas alternativas. Assumindo que a intenção fosse paroxítona, oxítona, proparoxítona, a palavra tatu está incorreta. No entanto, se reavaliarmos a questão 10 da prova: Português, tatu, libélula, a resposta correta é: oxítona, oxítona, proparoxítona. Nenhuma alternativa corresponde."
    },

    // --- GRUPO 2: VERDADEIRO OU FALSO ---
    {
        tipo: "verdadeiro_falso",
        titulo: "Informações sobre o Herrerasaurídeo",
        contexto: "Uma turma está estudando sobre diferentes tipos de dinossauros e suas características. Eles leram sobre o Herrerasaurídeo encontrado no Rio Grande do Sul.",
        pergunta: "Analise as afirmações e marque V (Verdadeiro) ou F (Falso):",
        afirmacoes: [
            "O texto diz que ele era herbívoro.",
            "O texto o apresenta como 'outra descoberta', que não foi a 'primeira' no contexto da notícia principal.",
            "A expressão 'encontrado por lá' indica que foi na mesma região.",
            "Ele viveu há 225 milhões de anos, enquanto o Herrerassaurídeo viveu há 233 milhões, sendo este último mais antigo."
        ],
        opcoes: ["F-V-V-F", "V-V-V-F", "F-F-V-V", "V-F-F-F"],
        respostaCorreta: "F-V-V-F",
        justificativa: "(F) O texto diz que ele era herbívoro. (V) O texto o apresenta como 'outra descoberta', que não foi a 'primeira' no contexto da notícia principal. (V) A expressão 'encontrado por lá' indica que foi na mesma região. (F) Ele viveu há 225 milhões de anos, enquanto o Herrerassaurídeo viveu há 233 milhões, sendo este último mais antigo."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Processo de Descoberta de Fósseis",
        contexto: "Uma turma está estudando sobre como os cientistas descobrem e estudam fósseis de dinossauros. Eles leram sobre o processo descrito na notícia.",
        pergunta: "Analise as afirmações e marque V (Verdadeiro) ou F (Falso):",
        afirmacoes: [
            "As chuvas tiveram um papel exclusivamente positivo na descoberta do fóssil.",
            "O excesso de água representa um risco para a preservação de fósseis que ainda não foram encontrados.",
            "O fóssil foi revelado devido a um processo natural intensificado pelas chuvas.",
            "Os cientistas não precisam ter pressa para coletar outros fósseis na região."
        ],
        opcoes: ["F-V-V-F", "V-V-F-V", "F-F-V-V", "V-F-F-F"],
        respostaCorreta: "F-V-V-F",
        justificativa: "(F) As chuvas tiveram um papel exclusivamente positivo na descoberta do fóssil. (V) O excesso de água representa um risco para a preservação de fósseis que ainda não foram encontrados. (V) O fóssil foi revelado devido a um processo natural intensificado pelas chuvas. (F) Os cientistas não precisam ter pressa para coletar outros fósseis na região."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Processo de Pesquisa Científica",
        contexto: "Uma turma está estudando sobre como os cientistas trabalham para descobrir e estudar fósseis. Eles leram sobre as etapas do processo científico.",
        pergunta: "Analise as afirmações e marque V (Verdadeiro) ou F (Falso):",
        afirmacoes: [
            "A divulgação da descoberta para o mundo é a primeira etapa do processo.",
            "O estudo detalhado do fóssil ocorre em laboratório.",
            "O trabalho dos cientistas com o fóssil termina assim que ele é retirado da rocha.",
            "A publicação de artigos científicos é a forma de comunicar a descoberta."
        ],
        opcoes: ["F-V-F-V", "V-F-V-F", "F-F-V-V", "V-V-F-F"],
        respostaCorreta: "F-V-F-V",
        justificativa: "(F) A divulgação da descoberta para o mundo é a primeira etapa do processo. (V) O estudo detalhado do fóssil ocorre em laboratório. (F) O trabalho dos cientistas com o fóssil termina assim que ele é retirado da rocha. (V) A publicação de artigos científicos é a forma de comunicar a descoberta."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Características das Notícias",
        contexto: "Uma turma está aprendendo sobre os elementos que compõem uma notícia e como elas são estruturadas para informar o público.",
        pergunta: "Analise as afirmações e marque V (Verdadeiro) ou F (Falso):",
        afirmacoes: [
            "Uma notícia nunca pode ter imagens.",
            "O título é um elemento opcional em uma notícia.",
            "As informações mais importantes costumam estar no final do texto.",
            "A legenda serve para explicar a imagem que acompanha a notícia."
        ],
        opcoes: ["V-V-V-F", "F-F-F-V", "F-V-F-V", "V-F-V-F"],
        respostaCorreta: "F-F-F-V",
        justificativa: "(F) Uma notícia nunca pode ter imagens. (F) O título é um elemento opcional em uma notícia. (F) As informações mais importantes costumam estar no final do texto. (V) A legenda serve para explicar a imagem que acompanha a notícia."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Características do Quokka",
        contexto: "Uma turma está estudando sobre o quokka, um marsupial que vive na Austrália. Eles leram sobre suas características físicas e comportamentais.",
        pergunta: "Analise as afirmações e marque V (Verdadeiro) ou F (Falso):",
        afirmacoes: [
            "O quokka é um animal de grande porte, com mais de 2 metros de comprimento.",
            "O nome científico do quokka é Setonix brachyurus.",
            "A aparência do quokka é frequentemente comparada à de um canguru em miniatura.",
            "A razão da comparação com o canguru é o fato de ambos serem marsupiais."
        ],
        opcoes: ["F-V-V-V", "V-F-F-V", "F-V-V-F", "V-F-V-F"],
        respostaCorreta: "F-V-V-V",
        justificativa: "(F) O quokka é um animal de grande porte, com mais de 2 metros de comprimento. (V) O nome científico do quokka é Setonix brachyurus. (V) A aparência do quokka é frequentemente comparada à de um canguru em miniatura. (V) A razão da comparação com o canguru é o fato de ambos serem marsupiais."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Status de Conservação do Quokka",
        contexto: "Uma turma está estudando sobre os riscos que o quokka enfrenta na natureza e seu status de conservação.",
        pergunta: "Analise as afirmações e marque V (Verdadeiro) ou F (Falso):",
        afirmacoes: [
            "A expressão 'nem tudo são sorrisos' significa que, apesar da aparência feliz, o animal enfrenta problemas.",
            "Ser 'vulnerável na natureza' indica que a espécie do quokka não corre nenhum risco de extinção.",
            "A aparência do quokka reflete sua real situação de segurança no meio ambiente.",
            "O status de 'vulnerável' é uma classificação usada para animais que precisam de atenção para sua conservação."
        ],
        opcoes: ["V-F-F-V", "F-V-V-F", "V-V-F-F", "F-F-V-V"],
        respostaCorreta: "V-F-F-V",
        justificativa: "(V) A expressão 'nem tudo são sorrisos' significa que, apesar da aparência feliz, o animal enfrenta problemas. (F) Ser 'vulnerável na natureza' indica que a espécie do quokka não corre nenhum risco de extinção. (F) A aparência do quokka reflete sua real situação de segurança no meio ambiente. (V) O status de 'vulnerável' é uma classificação usada para animais que precisam de atenção para sua conservação."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Regras de Acentuação de Proparoxítonas",
        contexto: "Uma turma está estudando as regras de acentuação em português. O professor explica que existe uma regra específica para proparoxítonas.",
        pergunta: "Analise as afirmações e marque V (Verdadeiro) ou F (Falso):",
        afirmacoes: [
            "A palavra 'lâmpada' é acentuada por ser proparoxítona.",
            "Nenhuma palavra proparoxítona leva acento gráfico.",
            "A palavra 'médico' é um exemplo de proparoxítona.",
            "A regra de acentuação das proparoxítonas possui muitas exceções."
        ],
        opcoes: ["V-F-V-F", "F-V-F-V", "V-V-F-F", "F-F-V-V"],
        respostaCorreta: "V-F-V-F",
        justificativa: "(V) A palavra 'lâmpada' é acentuada por ser proparoxítona. (F) Nenhuma palavra proparoxítona leva acento gráfico. (V) A palavra 'médico' é um exemplo de proparoxítona. (F) A regra de acentuação das proparoxítonas possui muitas exceções."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Conceito de Fake News",
        contexto: "Uma turma está aprendendo sobre fake news e como elas se espalham na internet e redes sociais.",
        pergunta: "Analise as afirmações e marque V (Verdadeiro) ou F (Falso):",
        afirmacoes: [
            "Fake news são o mesmo que notícias verdadeiras de fontes confiáveis.",
            "Uma forma de combater as fake news é checar a informação na fonte original ou em sites confiáveis.",
            "Compartilhar uma notícia sem ter certeza de sua veracidade ajuda a espalhar fake news.",
            "As fake news não oferecem nenhum risco para as pessoas."
        ],
        opcoes: ["F-V-V-F", "V-F-F-V", "F-F-V-V", "V-V-F-F"],
        respostaCorreta: "F-V-V-F",
        justificativa: "(F) Fake news são o mesmo que notícias verdadeiras de fontes confiáveis. (V) Uma forma de combater as fake news é checar a informação na fonte original ou em sites confiáveis. (V) Compartilhar uma notícia sem ter certeza de sua veracidade ajuda a espalhar fake news. (F) As fake news não oferecem nenhum risco para as pessoas."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Análise de Monossílabos Tônicos",
        contexto: "Uma turma está estudando sobre monossílabos e suas regras de acentuação. O professor explica a diferença entre tônicos e átonos.",
        pergunta: "Analise as afirmações e marque V (Verdadeiro) ou F (Falso):",
        afirmacoes: [
            "Na frase 'Dê o livro para mim', o monossílabo 'Dê' é tônico.",
            "Na frase 'Eu gosto de sorvete', o monossílabo 'de' é tônico.",
            "Monossílabos átonos são as palavras mais fortes e importantes da frase.",
            "A palavra 'sol' é um exemplo de monossílabo tônico."
        ],
        opcoes: ["V-F-F-V", "F-V-V-F", "V-V-F-F", "F-F-V-V"],
        respostaCorreta: "V-F-F-V",
        justificativa: "(V) Na frase 'Dê o livro para mim', o monossílabo 'Dê' é tônico. (F) Na frase 'Eu gosto de sorvete', o monossílabo 'de' é tônico. (F) Monossílabos átonos são as palavras mais fortes e importantes da frase. (V) A palavra 'sol' é um exemplo de monossílabo tônico."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Trabalho dos Jornalistas",
        contexto: "Uma turma está estudando sobre o trabalho dos jornalistas e como eles produzem notícias confiáveis para informar o público.",
        pergunta: "Analise as afirmações e marque V (Verdadeiro) ou F (Falso):",
        afirmacoes: [
            "O trabalho do jornalista não envolve investigação, apenas a escrita.",
            "O objetivo dos jornalistas é levar informações corretas ao leitor.",
            "Ler notícias de fontes confiáveis é muito importante.",
            "Fontes confiáveis são baseadas em fatos e dados reais."
        ],
        opcoes: ["F-V-V-V", "V-F-F-V", "F-F-V-V", "V-V-F-F"],
        respostaCorreta: "F-V-V-V",
        justificativa: "(F) O trabalho do jornalista não envolve investigação, apenas a escrita. (V) O objetivo dos jornalistas é levar informações corretas ao leitor. (V) Ler notícias de fontes confiáveis é muito importante. (V) Fontes confiáveis são baseadas em fatos e dados reais."
    },

    // --- GRUPO 3: PERGUNTAS ABERTAS ---
    {
        tipo: "pergunta_aberta",
        titulo: "Profissional Envolvido na Descoberta",
        contexto: "Uma turma está estudando sobre a descoberta de fósseis de dinossauros e quer saber mais sobre os profissionais envolvidos nesse trabalho.",
        pergunta: "De acordo com o texto, qual profissional está envolvido na descoberta e estudo do fóssil de dinossauro?",
        respostaEsperada: "Os cientistas."
    },
    {
        tipo: "pergunta_aberta",
        titulo: "Características do Herrerasaurídeo",
        contexto: "Uma turma está estudando sobre diferentes tipos de dinossauros encontrados no Rio Grande do Sul e suas características específicas.",
        pergunta: "Cite duas características do dinossauro Herrerasaurídeo encontrado no Rio Grande do Sul, conforme descrito na notícia.",
        respostaEsperada: "Ele era um dinossauro carnívoro e andava sobre duas patas."
    },
    {
        tipo: "pergunta_aberta",
        titulo: "Apelido do Quokka",
        contexto: "Uma turma está estudando sobre o quokka e descobriu que ele recebeu um apelido especial relacionado ao comportamento das pessoas com ele.",
        pergunta: "Por que o quokka recebeu o apelido de 'rei das selfies'?",
        respostaEsperada: "Porque ele é tolerante à presença humana, permitindo que as pessoas tirem fotos de perto ('selfies') com ele."
    },
    {
        tipo: "pergunta_aberta",
        titulo: "Definição de Animal Marsupial",
        contexto: "Uma turma está estudando sobre diferentes tipos de animais e suas características reprodutivas. Eles querem entender melhor o que é um marsupial.",
        pergunta: "O que é um animal marsupial, com base na explicação do capítulo?",
        respostaEsperada: "É um animal cuja fêmea possui uma bolsa na barriga (marsúpio), onde os filhotes terminam de se desenvolver."
    },
    {
        tipo: "pergunta_aberta",
        titulo: "Diferença entre Oxítona e Paroxítona",
        contexto: "Uma turma está estudando sobre classificação de palavras quanto à posição da sílaba tônica e quer entender as diferenças.",
        pergunta: "Explique com suas palavras a diferença entre uma palavra oxítona e uma paroxítona.",
        respostaEsperada: "Uma palavra oxítona tem a última sílaba como a mais forte (tônica), enquanto a paroxítona tem a penúltima sílaba como a mais forte."
    },
    {
        tipo: "pergunta_aberta",
        titulo: "Conceito de Fake News",
        contexto: "Uma turma está estudando sobre fake news e como elas afetam a sociedade. Eles querem entender melhor esse conceito.",
        pergunta: "De acordo com o capítulo, o que são fake news?",
        respostaEsperada: "São notícias falsas, que muitas vezes são criadas como fofocas e se espalham rapidamente."
    },
    {
        tipo: "pergunta_aberta",
        titulo: "Função da Legenda",
        contexto: "Uma turma está estudando sobre os elementos que compõem uma notícia e quer entender a importância de cada um deles.",
        pergunta: "Qual é a função da legenda em uma notícia ou reportagem?",
        respostaEsperada: "A função da legenda é explicar o que a imagem que acompanha o texto está mostrando."
    },

    // --- GRUPO 4: ANÁLISE DE CASOS E OPINIÃO ---
    {
        tipo: "analise_caso",
        titulo: "Verificação de Notícia Duvidosa",
        contexto: "Imagine que um colega seu recebeu no celular uma notícia dizendo: 'Cientistas descobrem pássaros falantes na Amazônia que conseguem conversar perfeitamente em português'. Ele fica muito animado e quer compartilhar a notícia no grupo da escola.",
        pergunta: "Baseando-se no que você aprendeu sobre fake news e fontes confiáveis, que conselho ou solução você daria a ele antes de compartilhar a notícia?",
        respostaEsperada: "Eu o aconselharia a não compartilhar a notícia imediatamente. Sugeriria que, antes de tudo, ele verificasse a fonte da informação. Poderíamos pesquisar juntos em sites de notícias conhecidos e confiáveis (como os de jornais, revistas de ciência ou agências de notícias) para ver se mais alguém publicou sobre isso. Uma notícia tão extraordinária estaria em todos os grandes portais. Se não encontrarmos nada, provavelmente é uma fake news."
    },
    {
        tipo: "analise_caso",
        titulo: "Criação de Notícia para Conscientização",
        contexto: "A prefeitura da sua cidade quer criar uma campanha para proteger os animais silvestres locais, como capivaras e saguis. Eles precisam de uma notícia para o jornal da escola para conscientizar as crianças.",
        pergunta: "Na sua opinião, quais informações seriam mais importantes para colocar no primeiro parágrafo dessa notícia para que todos entendessem o problema rapidamente?",
        respostaEsperada: "O primeiro parágrafo deveria responder às perguntas essenciais: O quê? (animais silvestres estão em risco); Quem? (capivaras e saguis, por exemplo); Onde? (em nossa cidade); e Por quê? (por causa do crescimento da cidade e da perda de habitat). Um bom começo seria: 'As capivaras e saguis da nossa cidade estão correndo perigo devido ao avanço das construções em áreas de mata, alertou a prefeitura esta semana em uma nova campanha de conscientização.'"
    },
    {
        tipo: "analise_caso",
        titulo: "Criação de Infográfico sobre Lixo",
        contexto: "O diretor da sua escola percebeu que muito lixo é gerado durante o recreio e quer mostrar isso aos alunos. Ele coletou os seguintes dados durante uma semana: Segunda-feira: 10 kg de lixo (5 kg de plástico, 3 kg de restos de comida, 2 kg de papel). Quarta-feira: 12 kg de lixo (6 kg de plástico, 4 kg de restos de comida, 2 kg de papel). Sexta-feira: 15 kg de lixo (8 kg de plástico, 5 kg de restos de comida, 2 kg de papel).",
        pergunta: "Proponha uma solução: descreva como você organizaria essas informações em um infográfico. Que título e que elementos visuais (desenhos, cores, gráficos) seriam importantes para chamar a atenção?",
        respostaEsperada: "Para o infográfico, eu usaria um título chamativo como: 'O Lixo do Nosso Recreio: Para Onde Vai Tudo Isso?'. Eu criaria um gráfico de barras simples, com três barras (uma para cada dia: segunda, quarta e sexta) para mostrar o aumento do lixo total. Cada barra seria dividida em três cores diferentes para representar os tipos de lixo (ex: azul para plástico, marrom para restos de comida, cinza para papel). Ao lado, colocaria desenhos de lixeiras e dos tipos de lixo para ser bem visual. Usaria cores vibrantes para chamar a atenção e uma frase final de impacto, como: 'Juntos, podemos diminuir esses números! Traga seu lanche em potes reutilizáveis e jogue o lixo no lugar certo!'."
    }
];
