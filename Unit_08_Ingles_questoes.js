// Unit 8 - May, Homophones, Will
const dadosDoQuizInglesUnit8 = [
    // PARTE 1: QUESTÕES DE MÚLTIPLA ESCOLHA (1-10)
    {
        tipo: "multipla_escolha",
        titulo: "Question 1",
        contexto: "Gigi and Helena are helping their parents set up the camp.",
        pergunta: "Based on the sentence 'They help to set up the camp,' choose the correct verb form for the simple past tense.",
        opcoes: [
            "a) helping",
            "b) helped",
            "c) helps",
            "d) will help"
        ],
        respostaCorreta: 1,
        explicacao: "O verbo 'help' (ajudar) é regular, e a forma correta no Simple Past (passado simples) é adicionando -ed."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Question 2",
        contexto: "Vovo Bolivar thinks it is possible that Pacotinho is hiding under the sleeping bag.",
        pergunta: "Complete the sentence using the modal verb for Possibility: Pacotinho __________ be under the sleeping bag right now.",
        opcoes: [
            "a) must",
            "b) can",
            "c) may",
            "d) have to"
        ],
        respostaCorreta: 2,
        explicacao: "O modal verb 'May' é usado para expressar Possibilidade (Possibility), indicando algo que é possível, mas não certo (not certain)."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Question 3",
        contexto: "Malu and Sarah found a lot of beautiful flowers while they were hiking yesterday.",
        pergunta: "The verb 'find' in the past tense is:",
        opcoes: [
            "a) found",
            "b) finded",
            "c) finds",
            "d) finding"
        ],
        respostaCorreta: 0,
        explicacao: "O verbo 'find' (encontrar) é irregular, e sua forma correta no passado simples é 'found'."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Question 4",
        contexto: "Lara is talking about the rules of the camp. They are very strict.",
        pergunta: "Complete the phrase showing a strong Obligation: Everyone __________ keep the area clean before going to sleep.",
        opcoes: [
            "a) may",
            "b) must",
            "c) can",
            "d) wishes"
        ],
        respostaCorreta: 1,
        explicacao: "O modal verb 'Must' é usado para indicar uma Obrigação Forte (Strong Obligation), como uma regra que deve ser seguida."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Question 5",
        contexto: "The children are discussing the fun activities they can do during the day at camp.",
        pergunta: "All the alternatives describe activities mentioned in the camping text, EXCEPT:",
        opcoes: [
            "a) Hike to see wildlife.",
            "b) Paddle canoes.",
            "c) Go fishing.",
            "d) Watch TV and play video games."
        ],
        respostaCorreta: 3,
        explicacao: "As atividades listadas para o acampamento incluem hike to see wildlife, paddle canoes, go fishing, make a campfire, roast marshmallows e tell spooky stories. Assistir TV não está entre elas."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Question 6",
        contexto: "Miguel wants to know if he is allowed to use Vovo Lilia's camera to take a picture of the campfire.",
        pergunta: "Choose the correct way to ask for Permission: __________ I take a picture of the fire?",
        opcoes: [
            "a) Must",
            "b) Can",
            "c) May",
            "d) Have to"
        ],
        respostaCorreta: 2,
        explicacao: "O modal verb 'May' é usado para Pedir Permissão (Ask for Permission) de forma educada, como: 'May I take a picture?'."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Question 7",
        contexto: "Walley and Vovo Bolivar went fishing, but they did not catch anything.",
        pergunta: "Based on the phrase 'Walley and Vovo Bolivar go fishing,' choose the correct verb form for the simple past tense.",
        opcoes: [
            "a) going",
            "b) go",
            "c) went",
            "d) goed"
        ],
        respostaCorreta: 2,
        explicacao: "O verbo 'go' (ir) é irregular, e sua forma no passado simples é 'went'."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Question 8",
        contexto: "Baba Magna is preparing the food, and she needs help from Karol and Carol.",
        pergunta: "Complete the sentence showing Necessity/Obligation: Karol and Carol __________ help roast the marshmallows and hot dogs.",
        opcoes: [
            "a) may",
            "b) have to",
            "c) can",
            "d) will"
        ],
        respostaCorreta: 1,
        explicacao: "O modal verb 'Have To' é usado para indicar Necessidade ou Obrigação."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Question 9",
        contexto: "Maria Clara and Giulia are talking about the possibility of rain later.",
        pergunta: "The best word to indicate a Possibility that is not certain is:",
        opcoes: [
            "a) Must",
            "b) Can",
            "c) May",
            "d) Will"
        ],
        respostaCorreta: 2,
        explicacao: "O modal verb 'May' é a melhor opção para indicar uma Possibilidade incerta."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Question 10",
        contexto: "Vovo Denise is reviewing the uses of the modal verb MAY.",
        pergunta: "All of these are uses of the word MAY, EXCEPT:",
        opcoes: [
            "a) Possibility.",
            "b) Request.",
            "c) Wish.",
            "d) Past Ability."
        ],
        respostaCorreta: 3,
        explicacao: "Os usos listados para 'May' incluem Possibilidade, Pedido de Permissão (Ask for Permission), Concessão de Permissão (Give Permission) e Desejo (Wish). Habilidade passada usa 'Could', não 'May'."
    },
    // PARTE 2: QUESTÕES DE VERDADEIRO OU FALSO (11-20)
    {
        tipo: "verdadeiro_falso",
        titulo: "Question 11",
        contexto: "Luca and Theo are practicing conjugating regular verbs from the camp activities.",
        pergunta: "1. The past of unpack is unpacked.\n2. The past of paddle is paddled.\n3. The past of hike is hikeed.\n4. The past of explore is explored.\n\nChoose the correct combination:",
        opcoes: [
            "a) V, V, F, V",
            "b) F, V, V, F",
            "c) V, F, V, V",
            "d) V, V, V, F"
        ],
        respostaCorreta: 0,
        explicacao: "A, B e D são verbos regulares com conjugação correta (paddle canoes, explore). C é Falso, pois verbos terminados em 'e' (hike) levam apenas 'd' (hiked)."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Question 12",
        contexto: "Helena is learning about irregular verbs from the text.",
        pergunta: "1. The past of see (ver) is saw.\n2. The past of make (fazer) is made.\n3. The past of sing (cantar) is sung.\n4. The past of tell (contar) is told.\n\nChoose the correct combination:",
        opcoes: [
            "a) V, V, F, V",
            "b) F, V, V, F",
            "c) V, F, V, V",
            "d) V, V, V, V"
        ],
        respostaCorreta: 0,
        explicacao: "A, B e D são conjugações corretas de verbos irregulares (see wildlife, make a campfire, tell spooky stories). C é Falso, pois o Simple Past de 'sing' é 'sang'."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Question 13",
        contexto: "Rafa and Aninha are discussing the strict rules (Obligations) of the camp.",
        pergunta: "1. Rafa has to carry his own sleeping bag.\n2. Aninha must go to bed when it gets dark.\n3. We must not throw trash on the ground.\n4. Gigi have to wear her coat.\n\nChoose the correct combination:",
        opcoes: [
            "a) V, V, V, F",
            "b) V, F, V, V",
            "c) F, V, F, V",
            "d) V, V, F, F"
        ],
        respostaCorreta: 0,
        explicacao: "A, B e C estão corretas no uso e conjugação de 'Must' e 'Has to' (para 3ª pessoa do singular) para obrigação. D é Falso, pois Gigi (She) exige 'has to', não 'have to'."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Question 14",
        contexto: "Vovo Denise is defining the uses of May.",
        pergunta: "1. May is used to grant permission (Give permission).\n2. May is used to indicate a future certainty (Will).\n3. May is used politely to make a request (Request).\n4. May is used for ability (Can).\n\nChoose the correct combination:",
        opcoes: [
            "a) V, F, V, F",
            "b) V, V, F, F",
            "c) F, V, F, V",
            "d) V, F, V, V"
        ],
        respostaCorreta: 0,
        explicacao: "A e C estão corretas (conceder permissão e fazer um pedido educado). B é Falso, pois 'May' é incerteza (Possibility), e 'Will' é certeza. D é Falso, pois 'Can' é usado para Habilidade (Ability)."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Question 15",
        contexto: "Alice and Helena Cerigato are describing things they encounter at the camp.",
        pergunta: "1. At night, children see the stars.\n2. Wildlife refers to animals in nature (e.g., a deer or a fish).\n3. They sleep in blankets instead of sleeping bags.\n4. Setting up the camp is the first activity.\n\nChoose the correct combination:",
        opcoes: [
            "a) V, V, F, V",
            "b) F, V, V, F",
            "c) V, F, F, V",
            "d) F, V, V, V"
        ],
        respostaCorreta: 0,
        explicacao: "A e D estão corretas (see the stars e set up the camp é a primeira atividade). B é Verdadeiro (wildlife são animais na natureza). C é Falso, pois eles dormem em sleeping bags (sacos de dormir)."
    },


    {
        tipo: "verdadeiro_falso",
        titulo: "Question 16",
        contexto: "Giulia is testing her knowledge of verb conjugation with the third person singular (He/She/It).",
        pergunta: "1. Lara roasts the hot dogs.\n2. Walley go fishing.\n3. Helena sees the wildlife.\n4. Pacotinho sleeps in his little tent.\n\nChoose the correct combination:",
        opcoes: [
            "a) V, F, V, V",
            "b) V, V, V, F",
            "c) F, V, V, V",
            "d) V, F, F, F"
        ],
        respostaCorreta: 0,
        explicacao: "A, C e D estão corretas (verbos no Present Simple com -s para 3ª pessoa do singular). B é Falso, pois Walley (He) deve ser 'goes' (go + es)."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Question 17",
        contexto: "Miguel and Theo are reviewing what they should do in the evening at camp.",
        pergunta: "1. They make a campfire in the evening.\n2. They tell spooky stories after dark.\n3. They go to sleep immediately after unpacking the backpacks.\n4. They sing songs around the campfire.\n\nChoose the correct combination:",
        opcoes: [
            "a) V, V, F, V",
            "b) F, V, V, F",
            "c) V, F, V, V",
            "d) V, V, V, V"
        ],
        respostaCorreta: 0,
        explicacao: "As atividades noturnas incluem make a campfire, roast marshmallows, sing songs e tell spooky stories. C é Falso; eles só vão dormir quando get tired e it gets dark."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Question 18",
        contexto: "Karol is asking for help with a Request.",
        pergunta: "1. May I have some water, please? (Request)\n2. May you go to the party? (Request error)\n3. Can you help me set up the tent? (Request)\n4. May I enter the room? (Ask for Permission)\n\nChoose the correct combination:",
        opcoes: [
            "a) V, F, V, V",
            "b) V, V, F, F",
            "c) F, V, V, V",
            "d) V, F, V, F"
        ],
        respostaCorreta: 0,
        explicacao: "A, C e D são formas válidas de fazer um pedido ou pedir permissão. B é Falso, pois 'May' geralmente não é usado com 'you' para um pedido."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Question 19",
        contexto: "Vovo Bolivar wants the kids to identify the error in the sentence structure.",
        pergunta: "1. Malu can runs fast. (Error: 'runs')\n2. Sarah must do her duties.\n3. Luca may find pretty flowers.\n4. We have to pack our bags now.\n\nChoose the correct combination:",
        opcoes: [
            "a) V, V, V, F",
            "b) F, V, V, F",
            "c) V, F, F, V",
            "d) F, V, V, V"
        ],
        respostaCorreta: 3,
        explicacao: "A é Falso, pois os modais (can, must, may) são seguidos pela forma base do verbo (run), não 'runs'. B, C e D estão corretas no uso dos modais Must, May e Have to."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Question 20",
        contexto: "The children are talking about the steps to make S'mores.",
        pergunta: "1. S'mores are typically roasted over the campfire.\n2. S'mores are mentioned in the book's listening section.\n3. S'mores are a common camping treat.\n4. Roasting marshmallows is part of making S'mores.\n\nChoose the correct combination:",
        opcoes: [
            "a) V, V, V, V",
            "b) F, V, V, F",
            "c) V, F, V, V",
            "d) V, V, F, F"
        ],
        respostaCorreta: 0,
        explicacao: "Fazer S'mores é o tópico de uma atividade de listening, e as atividades do acampamento incluem roast marshmallows (torrar marshmallows), o que confirma ser uma guloseima comum de acampamento."
    },
    // PARTE 3: QUESTÕES DE INTERPRETAÇÃO (21-30) - COM TEXTO FIXO
    {
        tipo: "interpretacao",
        titulo: "Reading Comprehension - Our Camping Light",
        contexto: "Read the short poem about a camping trip and answer the questions that follow.",
        textoBase: `<strong>Our Camping Light</strong>

The forest is <strong>green</strong>, the air is so <strong>clear</strong>,
We <strong>must</strong> be quiet so animals can hear.
We <strong>have to</strong> build our tent so high,
Before the dark clouds pass us by.

We <strong>may</strong> see a squirrel or a little gray fish,
Paddling the water, making a wish.
When the sun is gone and stars are bright,
We <strong>can</strong> tell stories throughout the night.`,
        pergunta: "What two adjectives are used in the first stanza to describe the forest and the air?",
        opcoes: [
            "a) Dark and cloudy",
            "b) Green and clear",
            "c) Bright and high",
            "d) Quiet and gray"
        ],
        respostaCorreta: "b) Green and clear",
        justificativa: "O poema diz na primeira estrofe: 'The forest is green, the air is so clear' (A floresta é verde, o ar é tão claro)."
    },
    {
        tipo: "interpretacao",
        titulo: "Reading Comprehension - Our Camping Light",
        contexto: "Read the short poem about a camping trip and answer the questions that follow.",
        textoBase: `<strong>Our Camping Light</strong>

The forest is <strong>green</strong>, the air is so <strong>clear</strong>,
We <strong>must</strong> be quiet so animals can hear.
We <strong>have to</strong> build our tent so high,
Before the dark clouds pass us by.

We <strong>may</strong> see a squirrel or a little gray fish,
Paddling the water, making a wish.
When the sun is gone and stars are bright,
We <strong>can</strong> tell stories throughout the night.`,
        pergunta: "According to the poem, why must the campers be quiet?",
        opcoes: [
            "a) So they can sleep",
            "b) So animals can hear",
            "c) So they can see the stars",
            "d) So they can build the tent"
        ],
        respostaCorreta: "b) So animals can hear",
        justificativa: "O poema diz: 'We must be quiet so animals can hear' (Devemos ficar quietos para que os animais possam ouvir). O uso de 'Must' indica que esta é uma regra essencial (obrigação)."
    },
    {
        tipo: "interpretacao",
        titulo: "Reading Comprehension - Our Camping Light",
        contexto: "Read the short poem about a camping trip and answer the questions that follow.",
        textoBase: `<strong>Our Camping Light</strong>

The forest is <strong>green</strong>, the air is so <strong>clear</strong>,
We <strong>must</strong> be quiet so animals can hear.
We <strong>have to</strong> build our tent so high,
Before the dark clouds pass us by.

We <strong>may</strong> see a squirrel or a little gray fish,
Paddling the water, making a wish.
When the sun is gone and stars are bright,
We <strong>can</strong> tell stories throughout the night.`,
        pergunta: "What are the two types of wildlife mentioned that may be seen?",
        opcoes: [
            "a) A deer and a bird",
            "b) A squirrel and a fish",
            "c) A rabbit and a frog",
            "d) A bear and a snake"
        ],
        respostaCorreta: "b) A squirrel and a fish",
        justificativa: "O poema menciona: 'We may see a squirrel or a little gray fish' (Podemos ver um esquilo ou um pequeno peixe cinza). O uso de 'May' indica que eles talvez os vejam (possibilidade)."
    },
    {
        tipo: "interpretacao",
        titulo: "Reading Comprehension - Our Camping Light",
        contexto: "Read the short poem about a camping trip and answer the questions that follow.",
        textoBase: `<strong>Our Camping Light</strong>

The forest is <strong>green</strong>, the air is so <strong>clear</strong>,
We <strong>must</strong> be quiet so animals can hear.
We <strong>have to</strong> build our tent so high,
Before the dark clouds pass us by.

We <strong>may</strong> see a squirrel or a little gray fish,
Paddling the water, making a wish.
When the sun is gone and stars are bright,
We <strong>can</strong> tell stories throughout the night.`,
        pergunta: "What important task must the friends complete before the dark clouds arrive?",
        opcoes: [
            "a) Tell stories",
            "b) See wildlife",
            "c) Build the tent",
            "d) Paddle the water"
        ],
        respostaCorreta: "c) Build the tent",
        justificativa: "O poema diz: 'We have to build our tent so high, Before the dark clouds pass us by' (Temos que construir nossa barraca bem alta, Antes que as nuvens escuras passem por nós). O 'Have to' indica a necessidade de completar a tarefa."
    },
    {
        tipo: "interpretacao",
        titulo: "Reading Comprehension - Our Camping Light",
        contexto: "Read the short poem about a camping trip and answer the questions that follow.",
        textoBase: `<strong>Our Camping Light</strong>

The forest is <strong>green</strong>, the air is so <strong>clear</strong>,
We <strong>must</strong> be quiet so animals can hear.
We <strong>have to</strong> build our tent so high,
Before the dark clouds pass us by.

We <strong>may</strong> see a squirrel or a little gray fish,
Paddling the water, making a wish.
When the sun is gone and stars are bright,
We <strong>can</strong> tell stories throughout the night.`,
        pergunta: "Which activity mentioned in the Unit 8 reading is related to 'paddling the water'?",
        opcoes: [
            "a) Hiking",
            "b) Fishing",
            "c) Paddle canoes",
            "d) Swimming"
        ],
        respostaCorreta: "c) Paddle canoes",
        justificativa: "A atividade relacionada a 'paddling the water' (remar na água) é 'Paddle canoes' (Remar em canoas), mencionada nas atividades do acampamento da Unit 8."
    },
    {
        tipo: "interpretacao",
        titulo: "Reading Comprehension - Our Camping Light",
        contexto: "Read the short poem about a camping trip and answer the questions that follow.",
        textoBase: `<strong>Our Camping Light</strong>

The forest is <strong>green</strong>, the air is so <strong>clear</strong>,
We <strong>must</strong> be quiet so animals can hear.
We <strong>have to</strong> build our tent so high,
Before the dark clouds pass us by.

We <strong>may</strong> see a squirrel or a little gray fish,
Paddling the water, making a wish.
When the sun is gone and stars are bright,
We <strong>can</strong> tell stories throughout the night.`,
        pergunta: "The line 'We may see a squirrel...' indicates:",
        opcoes: [
            "a) A strong rule",
            "b) An ability",
            "c) A possibility",
            "d) A request"
        ],
        respostaCorreta: "c) A possibility",
        justificativa: "O modal 'May' é usado para indicar que algo é possível, mas não certo (a possibility)."
    },
    {
        tipo: "interpretacao",
        titulo: "Reading Comprehension - Our Camping Light",
        contexto: "Read the short poem about a camping trip and answer the questions that follow.",
        textoBase: `<strong>Our Camping Light</strong>

The forest is <strong>green</strong>, the air is so <strong>clear</strong>,
We <strong>must</strong> be quiet so animals can hear.
We <strong>have to</strong> build our tent so high,
Before the dark clouds pass us by.

We <strong>may</strong> see a squirrel or a little gray fish,
Paddling the water, making a wish.
When the sun is gone and stars are bright,
We <strong>can</strong> tell stories throughout the night.`,
        pergunta: "What activity do the campers do at night when the stars are bright, using the modal verb Can (ability)?",
        opcoes: [
            "a) Build the tent",
            "b) See wildlife",
            "c) Tell stories",
            "d) Paddle canoes"
        ],
        respostaCorreta: "c) Tell stories",
        justificativa: "O poema diz: 'When the sun is gone and stars are bright, We can tell stories throughout the night' (Quando o sol se vai e as estrelas brilham, Podemos contar histórias durante toda a noite)."
    },
    {
        tipo: "interpretacao",
        titulo: "Reading Comprehension - Our Camping Light",
        contexto: "Read the short poem about a camping trip and answer the questions that follow.",
        textoBase: `<strong>Our Camping Light</strong>

The forest is <strong>green</strong>, the air is so <strong>clear</strong>,
We <strong>must</strong> be quiet so animals can hear.
We <strong>have to</strong> build our tent so high,
Before the dark clouds pass us by.

We <strong>may</strong> see a squirrel or a little gray fish,
Paddling the water, making a wish.
When the sun is gone and stars are bright,
We <strong>can</strong> tell stories throughout the night.`,
        pergunta: "The modal verb 'Have to' in the sentence 'We have to build our tent so high' shows:",
        opcoes: [
            "a) Permission",
            "b) Ability",
            "c) Necessity/Obligation",
            "d) Future action"
        ],
        respostaCorreta: "c) Necessity/Obligation",
        justificativa: "O 'Have to' é usado para expressar o que é necessário ou obrigatório fazer (Necessity/Obligation)."
    },
    {
        tipo: "interpretacao",
        titulo: "Reading Comprehension - Our Camping Light",
        contexto: "Read the short poem about a camping trip and answer the questions that follow.",
        textoBase: `<strong>Our Camping Light</strong>

The forest is <strong>green</strong>, the air is so <strong>clear</strong>,
We <strong>must</strong> be quiet so animals can hear.
We <strong>have to</strong> build our tent so high,
Before the dark clouds pass us by.

We <strong>may</strong> see a squirrel or a little gray fish,
Paddling the water, making a wish.
When the sun is gone and stars are bright,
We <strong>can</strong> tell stories throughout the night.`,
        pergunta: "What general type of activity described in the Unit 8 text requires quietness to be successful?",
        opcoes: [
            "a) Making a campfire",
            "b) Roasting marshmallows",
            "c) Hike to see wildlife",
            "d) Singing songs"
        ],
        respostaCorreta: "c) Hike to see wildlife",
        justificativa: "Caminhar para ver a vida selvagem (Hike to see wildlife) requer silêncio, pois ser barulhento assustaria os animais."
    },
    {
        tipo: "interpretacao",
        titulo: "Reading Comprehension - Our Camping Light",
        contexto: "Read the short poem about a camping trip and answer the questions that follow.",
        textoBase: `<strong>Our Camping Light</strong>

The forest is <strong>green</strong>, the air is so <strong>clear</strong>,
We <strong>must</strong> be quiet so animals can hear.
We <strong>have to</strong> build our tent so high,
Before the dark clouds pass us by.

We <strong>may</strong> see a squirrel or a little gray fish,
Paddling the water, making a wish.
When the sun is gone and stars are bright,
We <strong>can</strong> tell stories throughout the night.`,
        pergunta: "What element of the camping experience is emphasized at the end of the poem as something they can do at night?",
        opcoes: [
            "a) Building the tent",
            "b) Seeing wildlife",
            "c) Telling stories",
            "d) Being quiet"
        ],
        respostaCorreta: "c) Telling stories",
        justificativa: "O final do poema enfatiza a habilidade/oportunidade de contar histórias (tell stories throughout the night), uma atividade de convívio noturna, como mencionado nas leituras da Unit 8."
    }
];

