// Unit 6 - Game 2 - Adverbs, Past Tense, Irregular Verbs
// Castle of Words (English)
// 40 questões de múltipla escolha
// Temas: Simple Past Tense, Irregular Verbs, Adverbs, Modal Verb "can"

const dadosDoQuizIngles06Jogo2 = [
    {
        tipo: "multipla_escolha",
        titulo: "Question 1",
        contexto: "",
        pergunta: "What is the simple past tense form of the irregular verb 'go'?",
        opcoes: [
            "a) goed",
            "b) went",
            "c) gone",
            "d) going"
        ],
        respostaCorreta: "b) went",
        explicacao: "The irregular verb 'go' changes to 'went' in the simple past tense."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Question 2",
        contexto: "",
        pergunta: "The adverb 'politely' is an example of an Adverb of Manner. Adverbs of manner often end in:",
        opcoes: [
            "a) -en",
            "b) -ing",
            "c) -ly",
            "d) -s"
        ],
        respostaCorreta: "c) -ly",
        explicacao: "Adverbs of manner typically end in -ly (e.g., quickly, slowly, politely)."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Question 3",
        contexto: "",
        pergunta: "What is the simple past tense form of the regular verb 'wash'?",
        opcoes: [
            "a) washing",
            "b) washed",
            "c) washen",
            "d) washly"
        ],
        respostaCorreta: "b) washed",
        explicacao: "Regular verbs form the past tense by adding -ed: wash → washed."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Question 4",
        contexto: "",
        pergunta: "Which question is used to identify an Adverb of Manner, which describes how an action is performed?",
        opcoes: [
            "a) When",
            "b) Where",
            "c) How",
            "d) How Often"
        ],
        respostaCorreta: "c) How",
        explicacao: "Adverbs of Manner answer the question 'How?' (e.g., How did she sing? → She sang beautifully)."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Question 5",
        contexto: "",
        pergunta: "The opposite of expressing ability using 'can' is expressed by using:",
        opcoes: [
            "a) not able",
            "b) must not",
            "c) cannot",
            "d) will not"
        ],
        respostaCorreta: "c) cannot",
        explicacao: "Cannot (or can't) expresses lack of ability or capability."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Question 6",
        contexto: "In 'The four otter pups were sleeping quite peacefully'",
        pergunta: "The adverb 'quite' modifies:",
        opcoes: [
            "a) The noun pups",
            "b) The verb sleeping",
            "c) The adjective four",
            "d) Another adverb, peacefully"
        ],
        respostaCorreta: "d) Another adverb, peacefully",
        explicacao: "'Quite' is an adverb of degree that modifies another adverb (peacefully)."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Question 7",
        contexto: "",
        pergunta: "What is the simple past tense form of the irregular verb 'think'?",
        opcoes: [
            "a) thinked",
            "b) thanked",
            "c) thought",
            "d) thinking"
        ],
        respostaCorreta: "c) thought",
        explicacao: "The irregular verb 'think' changes to 'thought' in the past tense."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Question 8",
        contexto: "In the sentence 'Oliver waited patiently for Peter'",
        pergunta: "Which word does the adverb 'patiently' talk about?",
        opcoes: [
            "a) Oliver",
            "b) waited",
            "c) Peter",
            "d) for"
        ],
        respostaCorreta: "b) waited",
        explicacao: "The adverb 'patiently' modifies the verb 'waited', describing how Oliver waited."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Question 9",
        contexto: "",
        pergunta: "What is the simple past tense form of the irregular verb 'come'?",
        opcoes: [
            "a) comed",
            "b) coming",
            "c) came",
            "d) camed"
        ],
        respostaCorreta: "c) came",
        explicacao: "The irregular verb 'come' changes to 'came' in the simple past tense."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Question 10",
        contexto: "",
        pergunta: "The Simple Past Tense is used to show that a(n) ________ took place at a specific time in the past.",
        opcoes: [
            "a) ongoing action",
            "b) future action",
            "c) completed action",
            "d) routine action"
        ],
        respostaCorreta: "c) completed action",
        explicacao: "The Simple Past Tense indicates a completed action that happened at a specific time in the past."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Question 11",
        contexto: "",
        pergunta: "What is the simple past tense form of the regular verb 'climb'?",
        opcoes: [
            "a) climbly",
            "b) clombed",
            "c) climbed",
            "d) climbing"
        ],
        respostaCorreta: "c) climbed",
        explicacao: "Regular verbs add -ed to form the past tense: climb → climbed."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Question 12",
        contexto: "",
        pergunta: "If a regular verb, like 'wash', follows the Simple Past Tense rule, it ___ the -ed ending.",
        opcoes: [
            "a) can't need",
            "b) can use",
            "c) cannot follow",
            "d) may to"
        ],
        respostaCorreta: "b) can use",
        explicacao: "Regular verbs can use (and do use) the -ed ending to form the past tense."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Question 13",
        contexto: "",
        pergunta: "The irregular verb 'dig' (cavar) changes into which word in the past tense?",
        opcoes: [
            "a) digged",
            "b) dug",
            "c) dag",
            "d) dought"
        ],
        respostaCorreta: "b) dug",
        explicacao: "The irregular verb 'dig' changes to 'dug' in the past tense."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Question 14",
        contexto: "",
        pergunta: "Choose the correct form to complete the question: '___ you change the verb get into its past tense form, got?'",
        opcoes: [
            "a) Do",
            "b) Will",
            "c) Are",
            "d) Can"
        ],
        respostaCorreta: "d) Can",
        explicacao: "'Can' is used to ask about ability or capability: 'Can you change...?'"
    },
    {
        tipo: "multipla_escolha",
        titulo: "Question 15",
        contexto: "",
        pergunta: "What is the simple past tense form of the irregular verb 'eat'?",
        opcoes: [
            "a) eated",
            "b) ate",
            "c) eating",
            "d) eaten"
        ],
        respostaCorreta: "b) ate",
        explicacao: "The irregular verb 'eat' changes to 'ate' in the simple past tense."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Question 16",
        contexto: "",
        pergunta: "Which sentence correctly uses the word 'can' to express ability?",
        opcoes: [
            "a) She can went to the zoo yesterday.",
            "b) They can quickly climbing up the tree.",
            "c) He can speak English and Portuguese.",
            "d) We can decided to meet the lion later."
        ],
        respostaCorreta: "c) He can speak English and Portuguese.",
        explicacao: "'Can' is followed by the base form of the verb (speak), not past tense or -ing forms."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Question 17",
        contexto: "In the sentence 'The two boys visited the zoo frequently'",
        pergunta: "The adverb 'frequently' answers the question:",
        opcoes: [
            "a) How",
            "b) When",
            "c) Where",
            "d) How Often"
        ],
        respostaCorreta: "d) How Often",
        explicacao: "'Frequently' is an adverb of frequency that answers 'How Often?'"
    },
    {
        tipo: "multipla_escolha",
        titulo: "Question 18",
        contexto: "",
        pergunta: "What is the simple past tense form of the irregular verb 'get'?",
        opcoes: [
            "a) getted",
            "b) got",
            "c) gotten",
            "d) getting"
        ],
        respostaCorreta: "b) got",
        explicacao: "The irregular verb 'get' changes to 'got' in the simple past tense."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Question 19",
        contexto: "",
        pergunta: "Which Adverb of Time indicating a precise moment is mentioned, related to a past event?",
        opcoes: [
            "a) Slowly",
            "b) Nearby",
            "c) Yesterday",
            "d) Happily"
        ],
        respostaCorreta: "c) Yesterday",
        explicacao: "'Yesterday' is an adverb of time that indicates a specific moment in the past."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Question 20",
        contexto: "",
        pergunta: "What is the simple past tense form of the irregular verb 'have'?",
        opcoes: [
            "a) haved",
            "b) having",
            "c) has",
            "d) had"
        ],
        respostaCorreta: "d) had",
        explicacao: "The irregular verb 'have' changes to 'had' in the simple past tense."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Question 21",
        contexto: "In the sentence 'The Bell ___ pancakes'",
        pergunta: "Which word in the simple past tense (of the verb cook) makes the sentence past tense?",
        opcoes: [
            "a) cooks",
            "b) cooking",
            "c) cooken",
            "d) cooked"
        ],
        respostaCorreta: "d) cooked",
        explicacao: "'Cooked' is the past tense form of the regular verb 'cook'."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Question 22",
        contexto: "",
        pergunta: "What is the simple past tense form of the irregular verb 'see'?",
        opcoes: [
            "a) seed",
            "b) seen",
            "c) saw",
            "d) seeing"
        ],
        respostaCorreta: "c) saw",
        explicacao: "The irregular verb 'see' changes to 'saw' in the simple past tense."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Question 23",
        contexto: "",
        pergunta: "The phrase 'You can call me Ed' is an example of 'can' expressing:",
        opcoes: [
            "a) Ability to shout",
            "b) Future action",
            "c) Permission or possibility",
            "d) Necessity"
        ],
        respostaCorreta: "c) Permission or possibility",
        explicacao: "In this context, 'can' expresses permission or possibility to use a different name."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Question 24",
        contexto: "",
        pergunta: "If you want to ask someone if they are capable of performing an action, you usually start the sentence with:",
        opcoes: [
            "a) Do you",
            "b) Are you",
            "c) Can you",
            "d) Will you"
        ],
        respostaCorreta: "c) Can you",
        explicacao: "'Can you' is the standard structure to ask about someone's ability or capability."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Question 25",
        contexto: "",
        pergunta: "The verb 'keep' (manter/guardar) changes into which word when conjugated in the past?",
        opcoes: [
            "a) kept",
            "b) keeped",
            "c) keept",
            "d) kape"
        ],
        respostaCorreta: "a) kept",
        explicacao: "The irregular verb 'keep' changes to 'kept' in the simple past tense."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Question 26",
        contexto: "",
        pergunta: "Which of the following expresses a lack of ability or capability?",
        opcoes: [
            "a) I can understand adverbs.",
            "b) We can try to make past tense sentences.",
            "c) You can call me Ed.",
            "d) She cannot remember all the irregular verbs."
        ],
        respostaCorreta: "d) She cannot remember all the irregular verbs.",
        explicacao: "'Cannot' (or can't) expresses lack of ability or capability."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Question 27",
        contexto: "",
        pergunta: "What class of words modify verbs, adjectives, other adverbs, or complete sentences?",
        opcoes: [
            "a) Nouns",
            "b) Pronouns",
            "c) Adverbs",
            "d) Prepositions"
        ],
        respostaCorreta: "c) Adverbs",
        explicacao: "Adverbs are words that modify verbs, adjectives, other adverbs, or complete sentences."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Question 28",
        contexto: "",
        pergunta: "What is the simple past tense form of the regular verb 'walk'?",
        opcoes: [
            "a) walking",
            "b) walks",
            "c) walken",
            "d) walked"
        ],
        respostaCorreta: "d) walked",
        explicacao: "Regular verbs add -ed to form the past tense: walk → walked."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Question 29",
        contexto: "",
        pergunta: "The general rule for regular verbs in the Simple Past Tense is to add:",
        opcoes: [
            "a) -ing",
            "b) -s",
            "c) -ed",
            "d) -en"
        ],
        respostaCorreta: "c) -ed",
        explicacao: "Regular verbs form the past tense by adding -ed to the base form."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Question 30",
        contexto: "",
        pergunta: "In questions with modal verbs, where is the modal verb 'Can' placed?",
        opcoes: [
            "a) After the verb.",
            "b) At the end of the sentence.",
            "c) Before the subject.",
            "d) After the subject."
        ],
        respostaCorreta: "c) Before the subject.",
        explicacao: "In questions, the modal verb 'Can' is placed before the subject: Can + Subject + Verb...?"
    },
    {
        tipo: "multipla_escolha",
        titulo: "Question 31",
        contexto: "",
        pergunta: "Which modal verb expresses ability or capability to perform an action?",
        opcoes: [
            "a) must",
            "b) can",
            "c) should",
            "d) will"
        ],
        respostaCorreta: "b) can",
        explicacao: "The modal verb 'can' expresses ability or capability to perform an action."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Question 32",
        contexto: "",
        pergunta: "What is the simple past tense form of the regular verb 'kick'?",
        opcoes: [
            "a) kicking",
            "b) kicks",
            "c) kicked",
            "d) kicken"
        ],
        respostaCorreta: "c) kicked",
        explicacao: "Regular verbs add -ed to form the past tense: kick → kicked."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Question 33",
        contexto: "",
        pergunta: "Which of the following is an Adverb of Time that can act as a sentence adverb?",
        opcoes: [
            "a) Quickly",
            "b) Nearby",
            "c) Happily",
            "d) Finally"
        ],
        respostaCorreta: "d) Finally",
        explicacao: "'Finally' is an adverb of time that can modify an entire sentence."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Question 34",
        contexto: "In 'She was extremely happy'",
        pergunta: "The Adverb of Degree 'extremely' modifies:",
        opcoes: [
            "a) The verb was",
            "b) The noun She",
            "c) The adjective happy",
            "d) Nothing"
        ],
        respostaCorreta: "c) The adjective happy",
        explicacao: "The adverb of degree 'extremely' modifies the adjective 'happy'."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Question 35",
        contexto: "In 'The animals live underground'",
        pergunta: "'Underground' is an Adverb of Place that answers the question:",
        opcoes: [
            "a) How",
            "b) Where",
            "c) When",
            "d) How Often"
        ],
        respostaCorreta: "b) Where",
        explicacao: "'Underground' is an adverb of place that answers the question 'Where?'"
    },
    {
        tipo: "multipla_escolha",
        titulo: "Question 36",
        contexto: "",
        pergunta: "Irregular verbs do NOT follow which rule?",
        opcoes: [
            "a) Changing vowels",
            "b) Adding -ed",
            "c) Staying the same",
            "d) Completely changing form"
        ],
        respostaCorreta: "b) Adding -ed",
        explicacao: "Irregular verbs do NOT follow the regular rule of adding -ed to form the past tense."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Question 37",
        contexto: "",
        pergunta: "Which of the following is an Adverb of Time?",
        opcoes: [
            "a) Quickly",
            "b) Nearby",
            "c) Later",
            "d) Happily"
        ],
        respostaCorreta: "c) Later",
        explicacao: "'Later' is an adverb of time that indicates when something happens."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Question 38",
        contexto: "",
        pergunta: "Which modal verb expresses the ability to perform an action?",
        opcoes: [
            "a) can",
            "b) must",
            "c) should",
            "d) might"
        ],
        respostaCorreta: "a) can",
        explicacao: "'Can' is the modal verb that expresses ability or capability."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Question 39",
        contexto: "In 'The children walked excitedly to the park'",
        pergunta: "Which adverb modifies the verb 'walked'?",
        opcoes: [
            "a) children",
            "b) the",
            "c) park",
            "d) excitedly"
        ],
        respostaCorreta: "d) excitedly",
        explicacao: "'Excitedly' is an adverb of manner that modifies the verb 'walked'."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Question 40",
        contexto: "",
        pergunta: "Verbs that add -ed in the past tense are called:",
        opcoes: [
            "a) Irregular",
            "b) Regular",
            "c) Modal",
            "d) Auxiliary"
        ],
        respostaCorreta: "b) Regular",
        explicacao: "Verbs that follow the rule of adding -ed in the past tense are called Regular verbs."
    }
];
