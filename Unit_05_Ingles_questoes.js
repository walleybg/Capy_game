// Questões do Unit 5 de Inglês - Helping Verbs, Suffixes, Modal Verbs
const dadosDoQuizIngles = [
    // PARTE 1: QUESTÕES DE INTERPRETAÇÃO (1-10) - COM TEXTO FIXO
    {
        id: 1,
        tipo: "interpretacao",
        titulo: "Reading Comprehension - The Computer",
        contexto: "Read the text carefully and answer the questions based on the information provided.",
        textoBase: `The Computer

A computer is a helpful machine. It is a truly wonderful tool for learning and playing games. The main part of a computer is the CPU, or Central Processing Unit. It is the computer's brain. Without the CPU, a computer is a useless box. It does not work at all.

Computers have many important parts. You have to use the screen to look at pictures and words. The keyboard is the part you use for typing. Its usefulness is incredible. Every part is essential for the machine to be functional.

To make a computer work, a person must turn it on. The computer does not do everything by itself. You have to tell it what to do by clicking the mouse or typing. The computer does what you tell it. You must follow the instructions to make things happen. The goodness of a computer's performance depends on how well all its parts work together.`,
        pergunta: "What is the main part of a computer, according to the text?",
        opcoes: [
            "The screen",
            "The keyboard", 
            "The CPU",
            "The mouse"
        ],
        respostaCorreta: "The CPU",
        justificativa: "O texto diz no primeiro parágrafo: 'The main part of a computer is the CPU, or Central Processing Unit. It is the computer's brain.' (A parte principal de um computador é a CPU... É o cérebro do computador.)"
    },
    {
        id: 2,
        tipo: "interpretacao",
        titulo: "Reading Comprehension - The Computer",
        contexto: "Read the text carefully and answer the questions based on the information provided.",
        textoBase: `The Computer

A computer is a helpful machine. It is a truly wonderful tool for learning and playing games. The main part of a computer is the CPU, or Central Processing Unit. It is the computer's brain. Without the CPU, a computer is a useless box. It does not work at all.

Computers have many important parts. You have to use the screen to look at pictures and words. The keyboard is the part you use for typing. Its usefulness is incredible. Every part is essential for the machine to be functional.

To make a computer work, a person must turn it on. The computer does not do everything by itself. You have to tell it what to do by clicking the mouse or typing. The computer does what you tell it. You must follow the instructions to make things happen. The goodness of a computer's performance depends on how well all its parts work together.`,
        pergunta: "What is the CPU compared to?",
        opcoes: [
            "A box",
            "A screen",
            "A brain",
            "A game"
        ],
        respostaCorreta: "A brain",
        justificativa: "O texto compara a CPU ao cérebro do computador, indicando sua importância central."
    },
    {
        id: 3,
        tipo: "interpretacao",
        titulo: "Reading Comprehension - The Computer",
        contexto: "Read the text carefully and answer the questions based on the information provided.",
        textoBase: `The Computer

A computer is a helpful machine. It is a truly wonderful tool for learning and playing games. The main part of a computer is the CPU, or Central Processing Unit. It is the computer's brain. Without the CPU, a computer is a useless box. It does not work at all.

Computers have many important parts. You have to use the screen to look at pictures and words. The keyboard is the part you use for typing. Its usefulness is incredible. Every part is essential for the machine to be functional.

To make a computer work, a person must turn it on. The computer does not do everything by itself. You have to tell it what to do by clicking the mouse or typing. The computer does what you tell it. You must follow the instructions to make things happen. The goodness of a computer's performance depends on how well all its parts work together.`,
        pergunta: "What part of the computer do you use to look at pictures and words?",
        opcoes: [
            "The keyboard",
            "The CPU",
            "The mouse",
            "The screen"
        ],
        respostaCorreta: "The screen",
        justificativa: "O segundo parágrafo afirma: 'You have to use the screen to look at pictures and words.' (Você tem que usar a tela para olhar figuras e palavras.)"
    },
    {
        id: 4,
        tipo: "interpretacao",
        titulo: "Reading Comprehension - The Computer",
        contexto: "Read the text carefully and answer the questions based on the information provided.",
        textoBase: `The Computer

A computer is a helpful machine. It is a truly wonderful tool for learning and playing games. The main part of a computer is the CPU, or Central Processing Unit. It is the computer's brain. Without the CPU, a computer is a useless box. It does not work at all.

Computers have many important parts. You have to use the screen to look at pictures and words. The keyboard is the part you use for typing. Its usefulness is incredible. Every part is essential for the machine to be functional.

To make a computer work, a person must turn it on. The computer does not do everything by itself. You have to tell it what to do by clicking the mouse or typing. The computer does what you tell it. You must follow the instructions to make things happen. The goodness of a computer's performance depends on how well all its parts work together.`,
        pergunta: "According to the text, what is a computer without a CPU?",
        opcoes: [
            "A helpful tool",
            "A useless box",
            "A wonderful machine",
            "A brain"
        ],
        respostaCorreta: "A useless box",
        justificativa: "O texto diz que, sem a CPU, o computador é uma 'useless box' (uma caixa inútil)."
    },
    {
        id: 5,
        tipo: "interpretacao",
        titulo: "Reading Comprehension - The Computer",
        contexto: "Read the text carefully and answer the questions based on the information provided.",
        textoBase: `The Computer

A computer is a helpful machine. It is a truly wonderful tool for learning and playing games. The main part of a computer is the CPU, or Central Processing Unit. It is the computer's brain. Without the CPU, a computer is a useless box. It does not work at all.

Computers have many important parts. You have to use the screen to look at pictures and words. The keyboard is the part you use for typing. Its usefulness is incredible. Every part is essential for the machine to be functional.

To make a computer work, a person must turn it on. The computer does not do everything by itself. You have to tell it what to do by clicking the mouse or typing. The computer does what you tell it. You must follow the instructions to make things happen. The goodness of a computer's performance depends on how well all its parts work together.`,
        pergunta: "What do you have to do to tell the computer what to do?",
        opcoes: [
            "Talk to it",
            "Click the mouse or type",
            "Turn it off",
            "Look at the screen"
        ],
        respostaCorreta: "Click the mouse or type",
        justificativa: "O terceiro parágrafo explica: 'You have to tell it what to do by clicking the mouse or typing.' (Você tem que dizer a ele o que fazer clicando no mouse ou digitando.)"
    },
    {
        id: 6,
        tipo: "interpretacao",
        titulo: "Reading Comprehension - The Computer",
        contexto: "Read the text carefully and answer the questions based on the information provided.",
        textoBase: `The Computer

A computer is a helpful machine. It is a truly wonderful tool for learning and playing games. The main part of a computer is the CPU, or Central Processing Unit. It is the computer's brain. Without the CPU, a computer is a useless box. It does not work at all.

Computers have many important parts. You have to use the screen to look at pictures and words. The keyboard is the part you use for typing. Its usefulness is incredible. Every part is essential for the machine to be functional.

To make a computer work, a person must turn it on. The computer does not do everything by itself. You have to tell it what to do by clicking the mouse or typing. The computer does what you tell it. You must follow the instructions to make things happen. The goodness of a computer's performance depends on how well all its parts work together.`,
        pergunta: "The text says the computer's goodness depends on what?",
        opcoes: [
            "The color of the machine",
            "How well its parts work together",
            "How many games it has",
            "How new it is"
        ],
        respostaCorreta: "How well its parts work together",
        justificativa: "A última frase do texto diz: 'The goodness of a computer's performance depends on how well all its parts work together.' (A qualidade do desempenho de um computador depende de quão bem suas partes trabalham juntas.)"
    },
    {
        id: 7,
        tipo: "interpretacao",
        titulo: "Reading Comprehension - The Computer",
        contexto: "Read the text carefully and answer the questions based on the information provided.",
        textoBase: `The Computer

A computer is a helpful machine. It is a truly wonderful tool for learning and playing games. The main part of a computer is the CPU, or Central Processing Unit. It is the computer's brain. Without the CPU, a computer is a useless box. It does not work at all.

Computers have many important parts. You have to use the screen to look at pictures and words. The keyboard is the part you use for typing. Its usefulness is incredible. Every part is essential for the machine to be functional.

To make a computer work, a person must turn it on. The computer does not do everything by itself. You have to tell it what to do by clicking the mouse or typing. The computer does what you tell it. You must follow the instructions to make things happen. The goodness of a computer's performance depends on how well all its parts work together.`,
        pergunta: "What is one thing a person must do to make a computer work?",
        opcoes: [
            "Play games",
            "Click the mouse",
            "Turn it on",
            "Buy new parts"
        ],
        respostaCorreta: "Turn it on",
        justificativa: "O texto diz que, para fazer o computador funcionar, uma pessoa 'must turn it on' (deve ligá-lo)."
    },
    {
        id: 8,
        tipo: "interpretacao",
        titulo: "Reading Comprehension - The Computer",
        contexto: "Read the text carefully and answer the questions based on the information provided.",
        textoBase: `The Computer

A computer is a helpful machine. It is a truly wonderful tool for learning and playing games. The main part of a computer is the CPU, or Central Processing Unit. It is the computer's brain. Without the CPU, a computer is a useless box. It does not work at all.

Computers have many important parts. You have to use the screen to look at pictures and words. The keyboard is the part you use for typing. Its usefulness is incredible. Every part is essential for the machine to be functional.

To make a computer work, a person must turn it on. The computer does not do everything by itself. You have to tell it what to do by clicking the mouse or typing. The computer does what you tell it. You must follow the instructions to make things happen. The goodness of a computer's performance depends on how well all its parts work together.`,
        pergunta: "What does the suffix \"-ful\" in the word \"helpful\" mean?",
        opcoes: [
            "Full of",
            "Without",
            "Capable of",
            "State of being"
        ],
        respostaCorreta: "Full of",
        justificativa: "O sufixo '-ful' significa 'cheio de'. A palavra 'helpful' (útil) significa 'cheio de ajuda'."
    },
    {
        id: 9,
        tipo: "interpretacao",
        titulo: "Reading Comprehension - The Computer",
        contexto: "Read the text carefully and answer the questions based on the information provided.",
        textoBase: `The Computer

A computer is a helpful machine. It is a truly wonderful tool for learning and playing games. The main part of a computer is the CPU, or Central Processing Unit. It is the computer's brain. Without the CPU, a computer is a useless box. It does not work at all.

Computers have many important parts. You have to use the screen to look at pictures and words. The keyboard is the part you use for typing. Its usefulness is incredible. Every part is essential for the machine to be functional.

To make a computer work, a person must turn it on. The computer does not do everything by itself. You have to tell it what to do by clicking the mouse or typing. The computer does what you tell it. You must follow the instructions to make things happen. The goodness of a computer's performance depends on how well all its parts work together.`,
        pergunta: "The text says a computer is a wonderful tool. What does that mean?",
        opcoes: [
            "It is a boring tool.",
            "It is a tool that causes delight.",
            "It is a tool that doesn't work.",
            "It is a difficult tool to use."
        ],
        respostaCorreta: "It is a tool that causes delight.",
        justificativa: "A palavra 'wonderful' significa algo que causa deleite ou admiração, como uma ferramenta incrível."
    },
    {
        id: 10,
        tipo: "interpretacao",
        titulo: "Reading Comprehension - The Computer",
        contexto: "Read the text carefully and answer the questions based on the information provided.",
        textoBase: `The Computer

A computer is a helpful machine. It is a truly wonderful tool for learning and playing games. The main part of a computer is the CPU, or Central Processing Unit. It is the computer's brain. Without the CPU, a computer is a useless box. It does not work at all.

Computers have many important parts. You have to use the screen to look at pictures and words. The keyboard is the part you use for typing. Its usefulness is incredible. Every part is essential for the machine to be functional.

To make a computer work, a person must turn it on. The computer does not do everything by itself. You have to tell it what to do by clicking the mouse or typing. The computer does what you tell it. You must follow the instructions to make things happen. The goodness of a computer's performance depends on how well all its parts work together.`,
        pergunta: "The text says a computer is functional. What does that mean?",
        opcoes: [
            "It is capable of working.",
            "It is not capable of working.",
            "It is without a function.",
            "It has too many functions."
        ],
        respostaCorreta: "It is capable of working.",
        justificativa: "O sufixo '-able' significa 'capaz de'. Portanto, 'functional' (funcional) significa 'capaz de funcionar'."
    },

    // PARTE 2: QUESTÕES DE GRAMÁTICA (11-20) - SEM TEXTO FIXO
    {
        id: 11,
        tipo: "multipla_escolha",
        titulo: "Grammar - Negative Forms",
        contexto: "Choose the correct negative form of the sentence.",
        pergunta: "Which sentence is the correct negative form of \"The computer is a machine.\"?",
        opcoes: [
            "The computer not is a machine.",
            "The computer is not a machine.",
            "The computer do not is a machine.",
            "The computer are not a machine."
        ],
        respostaCorreta: "The computer is not a machine.",
        justificativa: "Para formar a negativa do verbo 'to be' no presente, basta adicionar 'not' depois dele."
    },
    {
        id: 12,
        tipo: "multipla_escolha",
        titulo: "Grammar - Verb Forms",
        contexto: "Choose the sentence with the correct verb form.",
        pergunta: "Which sentence uses the correct verb form?",
        opcoes: [
            "He have to follow instructions.",
            "He must to follow instructions.",
            "He has to follow instructions.",
            "He have follow instructions."
        ],
        respostaCorreta: "He has to follow instructions.",
        justificativa: "Para 'He', 'She' e 'It', a forma correta do verbo auxiliar 'to have' é 'has'."
    },
    {
        id: 13,
        tipo: "multipla_escolha",
        titulo: "Grammar - Past Tense",
        contexto: "Choose the correct past tense form.",
        pergunta: "Which sentence is the correct past tense of \"The computer does not work.\"?",
        opcoes: [
            "The computer did not work.",
            "The computer do not worked.",
            "The computer does not worked.",
            "The computer will not work."
        ],
        respostaCorreta: "The computer did not work.",
        justificativa: "Para formar a negativa no passado do verbo 'to do', usamos 'did not' (ou 'didn't')."
    },
    {
        id: 14,
        tipo: "multipla_escolha",
        titulo: "Grammar - Error Identification",
        contexto: "Identify the error in the sentence.",
        pergunta: "Look at the sentence: \"A computer have many parts.\" What is the error?",
        opcoes: [
            "The word \"A\" is wrong.",
            "The verb \"have\" is wrong. It should be \"has\".",
            "The word \"many\" is wrong.",
            "The word \"parts\" is wrong."
        ],
        respostaCorreta: "The verb \"have\" is wrong. It should be \"has\".",
        justificativa: "Para o sujeito singular 'A computer', a forma correta do verbo 'to have' é 'has', não 'have'."
    },
    {
        id: 15,
        tipo: "multipla_escolha",
        titulo: "Grammar - Question Forms",
        contexto: "Choose the correct interrogative form.",
        pergunta: "Which sentence is the correct interrogative (question) form of \"A computer is a machine.\"?",
        opcoes: [
            "Is a computer a machine?",
            "Do a computer is a machine?",
            "Does a computer is a machine?",
            "What a computer is a machine?"
        ],
        respostaCorreta: "Is a computer a machine?",
        justificativa: "Para fazer uma pergunta com o verbo 'to be', invertemos a ordem, colocando o verbo antes do sujeito."
    },
    {
        id: 16,
        tipo: "multipla_escolha",
        titulo: "Grammar - Helping Verbs",
        contexto: "Identify the helping verb from the \"to be\" family.",
        pergunta: "Which of these words is a helping verb from the family \"to be\"?",
        opcoes: [
            "has",
            "do",
            "were",
            "will"
        ],
        respostaCorreta: "were",
        justificativa: "'Were' é a forma no passado do plural do verbo 'to be'. As outras opções são de famílias diferentes."
    },
    {
        id: 17,
        tipo: "multipla_escolha",
        titulo: "Grammar - Suffixes",
        contexto: "Identify the word with the \"-able\" suffix.",
        pergunta: "Which of these words uses the suffix \"-able\"?",
        opcoes: [
            "goodness",
            "wonderful",
            "useless",
            "functional"
        ],
        respostaCorreta: "functional",
        justificativa: "'Functional' é a única palavra que termina com o sufixo '-able'."
    },
    {
        id: 18,
        tipo: "multipla_escolha",
        titulo: "Grammar - Negative with \"have to\"",
        contexto: "Choose the correct negative form.",
        pergunta: "Look at the sentence: \"You have to tell it what to do.\" How can you make this sentence negative?",
        opcoes: [
            "You have not to tell it what to do.",
            "You do not have to tell it what to do.",
            "You are not have to tell it what to do.",
            "You must not have to tell it what to do."
        ],
        respostaCorreta: "You do not have to tell it what to do.",
        justificativa: "Para formar a negativa de 'have to', usamos o verbo auxiliar 'do' na forma negativa ('do not') antes de 'have'."
    },
    {
        id: 19,
        tipo: "multipla_escolha",
        titulo: "Grammar - Subject-Verb Agreement",
        contexto: "Choose the grammatically correct sentence.",
        pergunta: "Which sentence is grammatically correct?",
        opcoes: [
            "She do her homework every day.",
            "They does their homework every day.",
            "He do his homework every day.",
            "She does her homework every day."
        ],
        respostaCorreta: "She does her homework every day.",
        justificativa: "Para o sujeito 'She', a forma correta do verbo 'to do' no presente é 'does'."
    },
    {
        id: 20,
        tipo: "multipla_escolha",
        titulo: "Grammar - Past Tense of \"have\"",
        contexto: "Choose the correct past tense form.",
        pergunta: "What is the correct past tense of \"He has a computer.\"?",
        opcoes: [
            "He had a computer.",
            "He have a computer.",
            "He does a computer.",
            "He is a computer."
        ],
        respostaCorreta: "He had a computer.",
        justificativa: "O verbo 'to have' no passado (para todos os sujeitos) é 'had'."
    }
];
