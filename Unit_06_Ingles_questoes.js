// Unit 6 - Adverbs, Past Tense, Irregular Verbs
const dadosDoQuizInglesUnit6 = [
    // PARTE 1: QUESTÕES DE MÚLTIPLA ESCOLHA (1-10)
    {
        id: 1,
        tipo: "multipla_escolha",
        titulo: "Past Tense - Regular Verbs",
        contexto: "Helena and Sarah were working on a school project. Helena told Sarah, 'Let's download the video and put it on the computer to watch!'",
        pergunta: "The verb 'download' in the past tense is:",
        opcoes: [
            "a) downloadt",
            "b) downloaded",
            "c) downlad",
            "d) did download"
        ],
        respostaCorreta: "b) downloaded",
        explicacao: "O verbo 'to download' é regular, e o Past Tense é formado com o sufixo '-ed'. Portanto, a forma correta é 'downloaded'."
    },
    {
        id: 2,
        tipo: "multipla_escolha",
        titulo: "Verb 'to be' and Irregular Verbs in Past Tense",
        contexto: "Grandma Lília visited Helena and Gigi. They played together. Grandma Lília __________ happy when she __________ them.",
        pergunta: "Complete the sentence with the correct form of the verb 'to be' (Past Tense) and the verb 'to see' (Past Tense):",
        opcoes: [
            "a) were / saw",
            "b) was / seed",
            "c) was / saw",
            "d) were / see"
        ],
        respostaCorreta: "c) was / saw",
        explicacao: "'Was' é o Past Tense do 'Verb to be' para sujeito singular ('Grandma Lília' → She). 'Saw' é o Past Tense do irregular 'to see'."
    },
    {
        id: 3,
        tipo: "multipla_escolha",
        titulo: "Adjectives - Vocabulary",
        contexto: "Lara (Helena's mom) looked at the videos and said, 'Jill, your video is so __________!'",
        pergunta: "Choose the adjective that means 'extremely impressive or inspiring awe':",
        opcoes: [
            "a) Carefully",
            "b) Quietly",
            "c) Awesome",
            "d) Very"
        ],
        respostaCorreta: "c) Awesome",
        explicacao: "'Awesome' é o adjetivo que significa 'extremamente impressionante' (Extremely impressive or inspiring awe)."
    },
    {
        id: 4,
        tipo: "multipla_escolha",
        titulo: "Past Tense - Regular Verbs",
        contexto: "Walley (Helena's dad) was talking about how he records memories. He said he __________ pictures to an album last summer.",
        pergunta: "Choose the correct Past Tense form of the verb 'to add' to complete the sentence:",
        opcoes: [
            "a) adde",
            "b) added",
            "c) addid",
            "d) ad"
        ],
        respostaCorreta: "b) added",
        explicacao: "O verbo 'to add' é regular. O Past Tense é 'added', formado pela adição do sufixo '-ed'."
    },
    {
        id: 5,
        tipo: "multipla_escolha",
        titulo: "Adverbs of Time",
        contexto: "Gigi (Helena's sister) wants to tell Babá Magna that she wants to see a movie __________.",
        pergunta: "Which adverb of Time can complete the sentence?",
        opcoes: [
            "a) Nearby",
            "b) Tomorrow",
            "c) Completely",
            "d) Loudly"
        ],
        respostaCorreta: "b) Tomorrow",
        explicacao: "'Tomorrow' é um advérbio de Time (Quando), indicando o momento futuro em que a ação acontecerá."
    },
    {
        id: 6,
        tipo: "multipla_escolha",
        titulo: "Adverbs of Manner",
        contexto: "Helena and her friends (Karol, Alice, Rafa, Giulia) are discussing online safety. They know they should share photos __________ and not tell secrets to strangers.",
        pergunta: "Which adverb of Manner (Mode) fits best?",
        opcoes: [
            "a) Yesterday",
            "b) Carefully",
            "c) Here",
            "d) Always"
        ],
        respostaCorreta: "b) Carefully",
        explicacao: "'Carefully' é um advérbio de Manner (Modo), pois descreve como a ação de compartilhar deve ser feita - com cuidado e atenção."
    },
    {
        id: 7,
        tipo: "multipla_escolha",
        titulo: "Verb 'to be' in Past Tense - Plural",
        contexto: "Grandpa Bolivar was talking about old computers. He said they __________ much slower than modern computers.",
        pergunta: "Based on the context, what is the correct Past Tense of the verb 'to be' for 'they'?",
        opcoes: [
            "a) was",
            "b) were",
            "c) am",
            "d) is"
        ],
        respostaCorreta: "b) were",
        explicacao: "O 'Verb to be' no Past Tense para o sujeito plural 'they' (computadores) é 'were'."
    },
    {
        id: 8,
        tipo: "multipla_escolha",
        titulo: "Adverbs of Degree",
        contexto: "Pacotinho (the dog) is __________ hungry. He always asks for food!",
        pergunta: "Which adverb of Degree (Grau) can complete the sentence?",
        opcoes: [
            "a) Inside",
            "b) Gently",
            "c) Never",
            "d) Very"
        ],
        respostaCorreta: "d) Very",
        explicacao: "'Very' é um advérbio de Degree (Grau), modificando o adjetivo 'hungry' para intensificar o significado."
    },
    {
        id: 9,
        tipo: "multipla_escolha",
        titulo: "Irregular Verbs - Past Tense",
        contexto: "Helena and Manuela were looking for the lost remote control. They finally __________ it in the living room.",
        pergunta: "The verb 'to find' (irregular) in the past tense is:",
        opcoes: [
            "a) finded",
            "b) fount",
            "c) founded",
            "d) found"
        ],
        respostaCorreta: "d) found",
        explicacao: "'Found' é o Past Tense do verbo irregular 'to find'. Verbos irregulares não seguem a regra de adicionar '-ed'."
    },
    {
        id: 10,
        tipo: "multipla_escolha",
        titulo: "Past Tense - General Concepts",
        contexto: "",
        pergunta: "All the following sentences are correct about Past Tense Verbs, EXCEPT:",
        opcoes: [
            "a) Regular verbs usually add '-ed' to the base form to change to past tense, like 'walked'.",
            "b) Irregular verbs change in a different way and don't follow the regular pattern, like 'gave'.",
            "c) Some irregular verbs, like 'put', stay the same in the past tense.",
            "d) All verbs in English add '-ed' in the past tense."
        ],
        respostaCorreta: "d) All verbs in English add '-ed' in the past tense.",
        explicacao: "Esta afirmação está incorreta, pois existem os Irregular Verbs (verbos irregulares) que não seguem a regra de adicionar '-ed'."
    },

    // PARTE 2: QUESTÕES VERDADEIRO OU FALSO (11-20)
    {
        id: 11,
        tipo: "verdadeiro_falso",
        titulo: "Irregular Verbs - Past Tense Forms",
        contexto: "Helena is studying the verbs 'to give', 'to hold', and 'to run'.",
        pergunta: "Analyze the statements about these irregular verbs:",
        afirmacoes: [
            "I. The Past Tense of 'to give' is 'gave'.",
            "II. The Past Tense of 'to hold' is 'holded'.",
            "III. The Past Tense of 'to run' is 'ran'.",
            "IV. All three verbs are considered regular verbs."
        ],
        opcoes: [
            "a) V, F, V, F",
            "b) V, V, F, F",
            "c) F, F, V, V",
            "d) V, F, V, V"
        ],
        respostaCorreta: "a) V, F, V, F",
        explicacao: "I. 'Give' → 'Gave' (Verdadeiro); II. 'Hold' → 'Held', não 'holded' (Falso); III. 'Run' → 'Ran' (Verdadeiro); IV. Todos são verbos irregulares, não regulares (Falso)."
    },
    {
        id: 12,
        tipo: "verdadeiro_falso",
        titulo: "Adverbs of Frequency",
        contexto: "The girls are practicing Adverbs of Frequency (How Often?).",
        pergunta: "Analyze the statements about Adverbs of Frequency:",
        afirmacoes: [
            "I. The word 'Often' is an Adverb of Frequency.",
            "II. The word 'Usually' is an Adverb of Frequency.",
            "III. 'Always' tells us how much something happens, not how often.",
            "IV. 'Rarely' is an Adverb of Frequency."
        ],
        opcoes: [
            "a) V, F, V, F",
            "b) V, V, F, V",
            "c) F, V, V, F",
            "d) V, F, F, V"
        ],
        respostaCorreta: "b) V, V, F, V",
        explicacao: "'Often', 'Usually', 'Rarely' são Adverbs of Frequency (V, V, V). 'Always' também é um advérbio de frequência, indicando 'sempre' (F - a afirmação III está incorreta)."
    },
    {
        id: 13,
        tipo: "verdadeiro_falso",
        titulo: "Regular vs Irregular Verbs",
        contexto: "Helene Cerigato is reviewing the difference between the verbs 'to call' and 'to see' in the past tense.",
        pergunta: "Analyze the statements about these verbs:",
        afirmacoes: [
            "I. 'To call' is a regular verb. Its Past Tense is 'called'.",
            "II. 'To see' is an irregular verb. Its Past Tense is 'saw'.",
            "III. The change from 'call' to 'called' is an example of an irregular verb.",
            "IV. The change from 'see' to 'saw' is an example of a regular verb."
        ],
        opcoes: [
            "a) V, V, F, F",
            "b) V, F, V, F",
            "c) F, V, F, V",
            "d) F, F, V, V"
        ],
        respostaCorreta: "a) V, V, F, F",
        explicacao: "I. 'Call' → 'Called' (Regular: Verdadeiro); II. 'See' → 'Saw' (Irregular: Verdadeiro); III. 'Called' é exemplo de verbo regular (Falso); IV. 'Saw' é exemplo de verbo irregular (Falso)."
    },
    {
        id: 14,
        tipo: "verdadeiro_falso",
        titulo: "Verb 'to be' in Past Tense",
        contexto: "Grandma Denise is telling a story about when she was young. She used the verb 'to be' a lot.",
        pergunta: "Analyze the statements about the verb 'to be' in Past Tense:",
        afirmacoes: [
            "I. The form 'was' is used for the subjects I, He, She, It.",
            "II. The form 'were' is used for the subjects We, You, They.",
            "III. When Grandma Denise says 'I was a student,' it is correct.",
            "IV. When Grandma Denise says 'They was very smart,' it is correct."
        ],
        opcoes: [
            "a) V, V, V, F",
            "b) F, V, V, V",
            "c) V, F, V, F",
            "d) F, F, F, V"
        ],
        respostaCorreta: "a) V, V, V, F",
        explicacao: "'Was' é para I/He/She/It (V). 'Were' é para We/You/They (V). 'I was' está correto (V). 'They was' está incorreto (F), deveria ser 'They were'."
    },
    {
        id: 15,
        tipo: "verdadeiro_falso",
        titulo: "Adverbs of Place",
        contexto: "Sarah is asking about Adverbs of Place (Where?).",
        pergunta: "Analyze the statements about Adverbs of Place:",
        afirmacoes: [
            "I. The adverb 'Here' belongs to Adverbs of Place.",
            "II. The adverb 'Outside' belongs to Adverbs of Place.",
            "III. 'Gently' is an Adverb of Place.",
            "IV. 'Nearby' is an Adverb of Place."
        ],
        opcoes: [
            "a) V, F, V, V",
            "b) V, V, F, V",
            "c) F, V, F, V",
            "d) V, V, V, F"
        ],
        respostaCorreta: "b) V, V, F, V",
        explicacao: "'Here', 'Outside', 'Nearby' são Adverbs of Place (V, V, V). 'Gently' é um advérbio de Manner/Modo, não de Place (F)."
    },
    {
        id: 16,
        tipo: "verdadeiro_falso",
        titulo: "Vocabulary - Technology Terms",
        contexto: "The class is studying the meaning of some words from the unit.",
        pergunta: "Analyze the statements about vocabulary:",
        afirmacoes: [
            "I. 'Tablet' is a portable flat device used for browsing or watching videos.",
            "II. 'App' is short for 'Application'.",
            "III. 'Added' means to remove something additional.",
            "IV. 'Turned out' means to result in a particular way (phrasal verb)."
        ],
        opcoes: [
            "a) V, F, V, F",
            "b) V, V, F, V",
            "c) F, V, F, V",
            "d) V, V, V, F"
        ],
        respostaCorreta: "b) V, V, F, V",
        explicacao: "'Tablet' e 'App' estão corretos (V, V). 'Added' significa adicionar/incluir, não remover (F). 'Turned out' significa 'resultar de certa forma' (V)."
    },
    {
        id: 17,
        tipo: "verdadeiro_falso",
        titulo: "Adverbs of Manner",
        contexto: "Maria Clara is using Adverbs of Manner (How?).",
        pergunta: "Analyze the statements about Adverbs of Manner:",
        afirmacoes: [
            "I. The adverb 'Loudly' tells us the way something happens.",
            "II. The adverb 'Quite' is an Adverb of Manner.",
            "III. When Maria Clara sings 'Quietly', she uses an Adverb of Manner.",
            "IV. The adverb 'Carefully' is an Adverb of Manner."
        ],
        opcoes: [
            "a) V, F, V, V",
            "b) V, V, F, V",
            "c) F, F, V, V",
            "d) F, V, F, F"
        ],
        respostaCorreta: "a) V, F, V, V",
        explicacao: "'Loudly', 'Quietly', 'Carefully' são Adverbs of Manner (V, V, V). 'Quite' é um advérbio de Degree/Grau, não de Manner (F)."
    },
    {
        id: 18,
        tipo: "verdadeiro_falso",
        titulo: "Regular Verbs - Past Tense",
        contexto: "Manuela and Giulia are comparing the present and past tense of the verbs 'to ask' and 'to look'.",
        pergunta: "Analyze the statements about these verbs:",
        afirmacoes: [
            "I. The Past Tense of 'to ask' is 'asked'.",
            "II. The Past Tense of 'to look' is 'looked'.",
            "III. 'Asked' and 'looked' are irregular verbs.",
            "IV. In the Past Tense, 'looked' means the same as 'saw'."
        ],
        opcoes: [
            "a) V, V, F, F",
            "b) F, V, V, F",
            "c) V, F, V, F",
            "d) F, V, F, V"
        ],
        respostaCorreta: "a) V, V, F, F",
        explicacao: "'Asked' e 'Looked' estão corretos no Past Tense (V, V). São verbos regulares, não irregulares (F). 'Looked' e 'saw' têm significados diferentes (F)."
    },
    {
        id: 19,
        tipo: "verdadeiro_falso",
        titulo: "Technology Concepts",
        contexto: "Helena is thinking about what technology is.",
        pergunta: "Analyze the statements about technology:",
        afirmacoes: [
            "I. Technology is a combination of knowledge, tools, and machines.",
            "II. Technology only includes old devices like typewriters.",
            "III. Technology helps us solve problems and make our lives easier.",
            "IV. A keyboard is a device used for inputting text and commands."
        ],
        opcoes: [
            "a) V, F, V, V",
            "b) V, V, F, V",
            "c) F, V, V, F",
            "d) V, V, V, F"
        ],
        respostaCorreta: "a) V, F, V, V",
        explicacao: "I, III e IV são descrições corretas de tecnologia/dispositivos (V, V, V). II está incorreta, pois a tecnologia inclui dispositivos novos e antigos (F)."
    },
    {
        id: 20,
        tipo: "verdadeiro_falso",
        titulo: "Adverbs of Degree",
        contexto: "Rafa is reading about Adverbs of Degree (To What Extent?).",
        pergunta: "Analyze the statements about Adverbs of Degree:",
        afirmacoes: [
            "I. The adverb 'Very' belongs to Adverbs of Degree.",
            "II. The adverb 'Completely' belongs to Adverbs of Degree.",
            "III. The adverb 'Quite' belongs to Adverbs of Degree.",
            "IV. Adverbs of Degree tell us the location where something happens."
        ],
        opcoes: [
            "a) V, V, V, F",
            "b) F, V, V, F",
            "c) V, F, V, V",
            "d) V, V, V, V"
        ],
        respostaCorreta: "a) V, V, V, F",
        explicacao: "'Very', 'Completely', 'Quite' são Adverbs of Degree (Grau) (V, V, V). Advérbios de Degree não indicam localização, mas intensidade (F)."
    },

    // PARTE 3: QUESTÕES DE INTERPRETAÇÃO (21-30) - COM TEXTO FIXO
    {
        id: 21,
        tipo: "interpretacao",
        titulo: "Reading Comprehension - The Friends' Digital Project",
        contexto: "Read the text carefully and answer the questions based on the information provided.",
        textoBase: `<strong>The Friends' Digital Project</strong>

<strong>Yesterday</strong>, Helena and her friends, Karol and Alice, talked about a big school project. They needed to record memories of their favorite activities. Helena told her mom, Lara, that they would work on the video at home. Rafa and Manuela came a little later with their tablets.

The five girls <strong>went inside</strong> Helena's room. They worked <strong>very</strong> hard on the computer, <strong>carefully</strong> putting all the pictures and videos together. They added a fun song to the video. They were <strong>completely</strong> focused on making the video awesome.

Finally, Sarah and Helene Cerigato came to see the result. They all looked at the screen. Everyone played a board game <strong>happily</strong> afterwards. They all loved the final video and saved it to send to the teacher.`,
        pergunta: "Which adverb of Time (Quando) is mentioned in the first sentence?",
        opcoes: [
            "a) Today",
            "b) Yesterday",
            "c) Tomorrow",
            "d) Always"
        ],
        respostaCorreta: "b) Yesterday",
        justificativa: "O texto inicia com o advérbio de tempo 'Yesterday' (Ontem), indicando quando a ação aconteceu."
    },
    {
        id: 22,
        tipo: "interpretacao",
        titulo: "Reading Comprehension - The Friends' Digital Project",
        contexto: "Read the text carefully and answer the questions based on the information provided.",
        textoBase: `<strong>The Friends' Digital Project</strong>

<strong>Yesterday</strong>, Helena and her friends, Karol and Alice, talked about a big school project. They needed to record memories of their favorite activities. Helena told her mom, Lara, that they would work on the video at home. Rafa and Manuela came a little later with their tablets.

The five girls <strong>went inside</strong> Helena's room. They worked <strong>very</strong> hard on the computer, <strong>carefully</strong> putting all the pictures and videos together. They added a fun song to the video. They were <strong>completely</strong> focused on making the video awesome.

Finally, Sarah and Helene Cerigato came to see the result. They all looked at the screen. Everyone played a board game <strong>happily</strong> afterwards. They all loved the final video and saved it to send to the teacher.`,
        pergunta: "What is the Past Tense of the irregular verb 'to go' (used in the second paragraph)?",
        opcoes: [
            "a) Goed",
            "b) Gone",
            "c) Went",
            "d) Going"
        ],
        respostaCorreta: "c) Went",
        justificativa: "O Past Tense do verbo irregular 'to go' é 'went' (The five girls went inside Helena's room)."
    },
    {
        id: 23,
        tipo: "interpretacao",
        titulo: "Reading Comprehension - The Friends' Digital Project",
        contexto: "Read the text carefully and answer the questions based on the information provided.",
        textoBase: `<strong>The Friends' Digital Project</strong>

<strong>Yesterday</strong>, Helena and her friends, Karol and Alice, talked about a big school project. They needed to record memories of their favorite activities. Helena told her mom, Lara, that they would work on the video at home. Rafa and Manuela came a little later with their tablets.

The five girls <strong>went inside</strong> Helena's room. They worked <strong>very</strong> hard on the computer, <strong>carefully</strong> putting all the pictures and videos together. They added a fun song to the video. They were <strong>completely</strong> focused on making the video awesome.

Finally, Sarah and Helene Cerigato came to see the result. They all looked at the screen. Everyone played a board game <strong>happily</strong> afterwards. They all loved the final video and saved it to send to the teacher.`,
        pergunta: "Identify an adverb of Degree (Grau) used in the second paragraph.",
        opcoes: [
            "a) Carefully",
            "b) Very",
            "c) Inside",
            "d) Happily"
        ],
        respostaCorreta: "b) Very",
        justificativa: "'Very' e 'Completely' são advérbios de Degree (Grau) que respondem a 'em que medida' (to what extent) a ação ocorreu. 'Very' aparece em 'very hard'."
    },
    {
        id: 24,
        tipo: "interpretacao",
        titulo: "Reading Comprehension - The Friends' Digital Project",
        contexto: "Read the text carefully and answer the questions based on the information provided.",
        textoBase: `<strong>The Friends' Digital Project</strong>

<strong>Yesterday</strong>, Helena and her friends, Karol and Alice, talked about a big school project. They needed to record memories of their favorite activities. Helena told her mom, Lara, that they would work on the video at home. Rafa and Manuela came a little later with their tablets.

The five girls <strong>went inside</strong> Helena's room. They worked <strong>very</strong> hard on the computer, <strong>carefully</strong> putting all the pictures and videos together. They added a fun song to the video. They were <strong>completely</strong> focused on making the video awesome.

Finally, Sarah and Helene Cerigato came to see the result. They all looked at the screen. Everyone played a board game <strong>happily</strong> afterwards. They all loved the final video and saved it to send to the teacher.`,
        pergunta: "Who did Helena tell about the project?",
        opcoes: [
            "a) Her teacher",
            "b) Her sister",
            "c) Her mom, Lara",
            "d) Her friends"
        ],
        respostaCorreta: "c) Her mom, Lara",
        justificativa: "Helena told her mom, Lara, that they would work on the video at home."
    },
    {
        id: 25,
        tipo: "interpretacao",
        titulo: "Reading Comprehension - The Friends' Digital Project",
        contexto: "Read the text carefully and answer the questions based on the information provided.",
        textoBase: `<strong>The Friends' Digital Project</strong>

<strong>Yesterday</strong>, Helena and her friends, Karol and Alice, talked about a big school project. They needed to record memories of their favorite activities. Helena told her mom, Lara, that they would work on the video at home. Rafa and Manuela came a little later with their tablets.

The five girls <strong>went inside</strong> Helena's room. They worked <strong>very</strong> hard on the computer, <strong>carefully</strong> putting all the pictures and videos together. They added a fun song to the video. They were <strong>completely</strong> focused on making the video awesome.

Finally, Sarah and Helene Cerigato came to see the result. They all looked at the screen. Everyone played a board game <strong>happily</strong> afterwards. They all loved the final video and saved it to send to the teacher.`,
        pergunta: "What did the girls put together carefully?",
        opcoes: [
            "a) A board game",
            "b) Their tablets",
            "c) All the pictures and videos",
            "d) A fun song"
        ],
        respostaCorreta: "c) All the pictures and videos",
        justificativa: "O texto diz: '...carefully putting all the pictures and videos together' (juntando cuidadosamente todas as fotos e vídeos)."
    },
    {
        id: 26,
        tipo: "interpretacao",
        titulo: "Reading Comprehension - The Friends' Digital Project",
        contexto: "Read the text carefully and answer the questions based on the information provided.",
        textoBase: `<strong>The Friends' Digital Project</strong>

<strong>Yesterday</strong>, Helena and her friends, Karol and Alice, talked about a big school project. They needed to record memories of their favorite activities. Helena told her mom, Lara, that they would work on the video at home. Rafa and Manuela came a little later with their tablets.

The five girls <strong>went inside</strong> Helena's room. They worked <strong>very</strong> hard on the computer, <strong>carefully</strong> putting all the pictures and videos together. They added a fun song to the video. They were <strong>completely</strong> focused on making the video awesome.

Finally, Sarah and Helene Cerigato came to see the result. They all looked at the screen. Everyone played a board game <strong>happily</strong> afterwards. They all loved the final video and saved it to send to the teacher.`,
        pergunta: "Identify an adverb of Place (Onde) used in the second paragraph.",
        opcoes: [
            "a) Yesterday",
            "b) Inside",
            "c) Very",
            "d) Carefully"
        ],
        respostaCorreta: "b) Inside",
        justificativa: "'Inside' é um advérbio de Place (Lugar), indicando onde as meninas foram: 'The five girls went inside Helena's room'."
    },
    {
        id: 27,
        tipo: "interpretacao",
        titulo: "Reading Comprehension - The Friends' Digital Project",
        contexto: "Read the text carefully and answer the questions based on the information provided.",
        textoBase: `<strong>The Friends' Digital Project</strong>

<strong>Yesterday</strong>, Helena and her friends, Karol and Alice, talked about a big school project. They needed to record memories of their favorite activities. Helena told her mom, Lara, that they would work on the video at home. Rafa and Manuela came a little later with their tablets.

The five girls <strong>went inside</strong> Helena's room. They worked <strong>very</strong> hard on the computer, <strong>carefully</strong> putting all the pictures and videos together. They added a fun song to the video. They were <strong>completely</strong> focused on making the video awesome.

Finally, Sarah and Helene Cerigato came to see the result. They all looked at the screen. Everyone played a board game <strong>happily</strong> afterwards. They all loved the final video and saved it to send to the teacher.`,
        pergunta: "Which two friends came to see the final video?",
        opcoes: [
            "a) Karol and Alice",
            "b) Rafa and Manuela",
            "c) Sarah and Helene Cerigato",
            "d) Helena and Lara"
        ],
        respostaCorreta: "c) Sarah and Helene Cerigato",
        justificativa: "O texto diz: 'Finally, Sarah and Helene Cerigato came to see the result' (Finalmente, Sarah e Helene Cerigato vieram ver o resultado)."
    },
    {
        id: 28,
        tipo: "interpretacao",
        titulo: "Reading Comprehension - The Friends' Digital Project",
        contexto: "Read the text carefully and answer the questions based on the information provided.",
        textoBase: `<strong>The Friends' Digital Project</strong>

<strong>Yesterday</strong>, Helena and her friends, Karol and Alice, talked about a big school project. They needed to record memories of their favorite activities. Helena told her mom, Lara, that they would work on the video at home. Rafa and Manuela came a little later with their tablets.

The five girls <strong>went inside</strong> Helena's room. They worked <strong>very</strong> hard on the computer, <strong>carefully</strong> putting all the pictures and videos together. They added a fun song to the video. They were <strong>completely</strong> focused on making the video awesome.

Finally, Sarah and Helene Cerigato came to see the result. They all looked at the screen. Everyone played a board game <strong>happily</strong> afterwards. They all loved the final video and saved it to send to the teacher.`,
        pergunta: "The verb 'to talk' in the Past Tense is a regular verb. What is its form, as used in the first paragraph?",
        opcoes: [
            "a) Talk",
            "b) Talking",
            "c) Talked",
            "d) Talks"
        ],
        respostaCorreta: "c) Talked",
        justificativa: "O verbo regular 'to talk' no Past Tense é 'talked', formado pela adição do sufixo '-ed'."
    },
    {
        id: 29,
        tipo: "interpretacao",
        titulo: "Reading Comprehension - The Friends' Digital Project",
        contexto: "Read the text carefully and answer the questions based on the information provided.",
        textoBase: `<strong>The Friends' Digital Project</strong>

<strong>Yesterday</strong>, Helena and her friends, Karol and Alice, talked about a big school project. They needed to record memories of their favorite activities. Helena told her mom, Lara, that they would work on the video at home. Rafa and Manuela came a little later with their tablets.

The five girls <strong>went inside</strong> Helena's room. They worked <strong>very</strong> hard on the computer, <strong>carefully</strong> putting all the pictures and videos together. They added a fun song to the video. They were <strong>completely</strong> focused on making the video awesome.

Finally, Sarah and Helene Cerigato came to see the result. They all looked at the screen. Everyone played a board game <strong>happily</strong> afterwards. They all loved the final video and saved it to send to the teacher.`,
        pergunta: "Identify two adverbs of Manner (Modo) in the text (one from the second paragraph and one from the third).",
        opcoes: [
            "a) Yesterday and Inside",
            "b) Very and Completely",
            "c) Carefully and Happily",
            "d) Inside and Afterwards"
        ],
        respostaCorreta: "c) Carefully and Happily",
        justificativa: "São advérbios de modo, terminados em -ly, que descrevem como as ações foram feitas: 'carefully' (cuidadosamente) e 'happily' (felizmente)."
    },
    {
        id: 30,
        tipo: "interpretacao",
        titulo: "Reading Comprehension - The Friends' Digital Project",
        contexto: "Read the text carefully and answer the questions based on the information provided.",
        textoBase: `<strong>The Friends' Digital Project</strong>

<strong>Yesterday</strong>, Helena and her friends, Karol and Alice, talked about a big school project. They needed to record memories of their favorite activities. Helena told her mom, Lara, that they would work on the video at home. Rafa and Manuela came a little later with their tablets.

The five girls <strong>went inside</strong> Helena's room. They worked <strong>very</strong> hard on the computer, <strong>carefully</strong> putting all the pictures and videos together. They added a fun song to the video. They were <strong>completely</strong> focused on making the video awesome.

Finally, Sarah and Helene Cerigato came to see the result. They all looked at the screen. Everyone played a board game <strong>happily</strong> afterwards. They all loved the final video and saved it to send to the teacher.`,
        pergunta: "What did the friends do afterwards?",
        opcoes: [
            "a) They went home",
            "b) They played a board game",
            "c) They watched TV",
            "d) They did homework"
        ],
        respostaCorreta: "b) They played a board game",
        justificativa: "O texto diz: 'Everyone played a board game happily afterwards' (Todos jogaram um jogo de tabuleiro felizmente depois)."
    }
];

