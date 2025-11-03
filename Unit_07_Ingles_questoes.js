// Unit 7 - Inglês - School Clubs and English Skills
// 30 questões: 10 múltipla escolha + 10 V/F + 10 interpretação

const dadosDoQuizIngles7 = [
    // ===== MÚLTIPLA ESCOLHA (Q1-Q10) =====
    {
        pergunta: 'Based on the sentence "Walley and Vovo Bolivar watch a soccer game," choose the correct verb form for the simple past tense.',
        opcoes: ['watch', 'watching', 'watched', 'watches'],
        respostaCorreta: 2,
        tipo: 'multipla_escolha'
    },
    {
        pergunta: 'Complete the sentence with the correct option showing Luca\'s ability.\n\nLuca __________ build robots and new computer games.',
        opcoes: ['must', 'can', 'have to', 'will'],
        respostaCorreta: 1,
        tipo: 'multipla_escolha'
    },
    {
        pergunta: 'The verb tell in the past tense is:',
        opcoes: ['telling', 'told', 'teled', 'will tell'],
        respostaCorreta: 1,
        tipo: 'multipla_escolha'
    },
    {
        pergunta: 'Karol said: "I want to Sign Up for the Art Club!" What does Sign Up mean?',
        opcoes: ['To go home.', 'To enroll in an activity.', 'To feel tired.', 'To run away.'],
        respostaCorreta: 1,
        tipo: 'multipla_escolha'
    },
    {
        pergunta: 'Complete the phrase showing obligation:\n\nThey __________ finish the math exercises before watching TV.',
        opcoes: ['may', 'can', 'have to', 'funny'],
        respostaCorreta: 2,
        tipo: 'multipla_escolha'
    },
    {
        pergunta: 'All the alternatives describe activities you can find in school clubs, EXCEPT:',
        opcoes: ['Twirling and spinning our feet (Dance Club).', 'Creating stories (Play Club).', 'Sleeping for ten hours straight.', 'Learning new words and exploring books (Literacy Club).'],
        respostaCorreta: 2,
        tipo: 'multipla_escolha'
    },
    {
        pergunta: 'Based on the phrase "Pacotinho run very fast," choose the correct verb form for the simple past tense.',
        opcoes: ['runs', 'ran', 'runned', 'running'],
        respostaCorreta: 1,
        tipo: 'multipla_escolha'
    },
    {
        pergunta: 'Complete the sentence using the correct adjective:\n\nWalley said, "I feel very __________ after playing so much soccer."',
        opcoes: ['funny', 'tired', 'cool', 'happy'],
        respostaCorreta: 1,
        tipo: 'multipla_escolha'
    },
    {
        pergunta: 'Alliteration means:',
        opcoes: ['Two or more words that have different beginning sounds.', 'Two or more words with the same beginning sound.', 'A type of obligation.', 'A sport club activity.'],
        respostaCorreta: 1,
        tipo: 'multipla_escolha'
    },
    {
        pergunta: 'All of these modal verbs show obligation or a strong rule, EXCEPT:',
        opcoes: ['You must go to bed at 9 pm.', 'You have to brush your teeth.', 'You will clean your room tomorrow.', 'You may eat a candy.'],
        respostaCorreta: 3,
        tipo: 'multipla_escolha'
    },

    // ===== VERDADEIRO OU FALSO (Q11-Q20) =====
    {
        pergunta: 'Classify the statements below as True (V) or False (F). Then choose the correct combination of V and F.\nI. Aninha like to play volleyball.\nII. Alice likes to play basketball.\nIII. Rafa plays soccer every weekend.\nIV. Theo and Miguel plays guitar at the Music Club.',
        opcoes: ['F, V, V, F', 'V, V, V, F', 'F, V, F, V', 'V, F, V, V'],
        respostaCorreta: 0,
        tipo: 'multipla_escolha'
    },
    {
        pergunta: 'Classify the statements below as True (V) or False (F). Then choose the correct combination of V and F.\nI. The past of sing is sang.\nII. The past of run is runned.\nIII. The past of write is wrote.\nIV. The past of have is had.',
        opcoes: ['V, F, V, V', 'V, V, F, F', 'F, V, F, V', 'F, F, V, V'],
        respostaCorreta: 0,
        tipo: 'multipla_escolha'
    },
    {
        pergunta: 'Classify the statements below as True (V) or False (F). Then choose the correct combination of V and F.\nI. Sarah must do the dishes (Obligation).\nII. Malu can sleep late tomorrow (Ability).\nIII. They have to take care of Pacotinho (Obligation).\nIV. They will go to the park now (Future).',
        opcoes: ['V, V, V, V', 'F, V, F, V', 'V, F, V, F', 'V, V, F, F'],
        respostaCorreta: 0,
        tipo: 'multipla_escolha'
    },
    {
        pergunta: 'Classify the statements below as True (V) or False (F). Then choose the correct combination of V and F.\nI. Do (Present) -> Did (Past).\nII. Go (Present) -> Went (Past).\nIII. See (Present) -> Seed (Past).\nIV. Kick (Present) -> Kicked (Past).',
        opcoes: ['V, V, F, V', 'F, V, V, F', 'V, F, V, V', 'F, F, F, V'],
        respostaCorreta: 0,
        tipo: 'multipla_escolha'
    },
    {
        pergunta: 'Classify the statements below as True (V) or False (F). Then choose the correct combination of V and F.\nI. To join a club is to Try Out for it.\nII. If you help a friend, you can say "No Problem".\nIII. The hardest part of playing is always funny.\nIV. The Soccer Club is an example of a Sports Club.',
        opcoes: ['F, V, F, V', 'F, F, V, V', 'V, V, V, F', 'F, V, F, V'],
        respostaCorreta: 0,
        tipo: 'multipla_escolha'
    },
    {
        pergunta: 'Classify the statements below as True (V) or False (F). Then choose the correct combination of V and F.\nI. Giulia can draw beautiful pictures.\nII. Rafa can jumping high.\nIII. Vovo Bolivar cannot run fast now.\nIV. Helena can play soccer.',
        opcoes: ['V, F, V, V', 'F, V, V, V', 'V, F, F, V', 'V, V, F, F'],
        respostaCorreta: 0,
        tipo: 'multipla_escolha'
    },
    {
        pergunta: 'Classify the statements below as True (V) or False (F). Then choose the correct combination of V and F.\nI. Play (Present) -> Played (Past).\nII. Dance (Present) -> Danced (Past).\nIII. Clean (Present) -> Cleaned (Past).\nIV. Jump (Present) -> Jumped (Past).',
        opcoes: ['V, V, V, V', 'V, V, V, F', 'V, V, V, V', 'F, V, F, V'],
        respostaCorreta: 0,
        tipo: 'multipla_escolha'
    },
    {
        pergunta: 'Classify the statements below as True (V) or False (F). Then choose the correct combination of V and F.\nI. Tomorrow, Lara will visit Vovo Lilia (Future).\nII. Next year, Helena will be 9 years old (Future).\nIII. Will Walley travel next month? (Future Question).\nIV. Gigi will watched a movie later (Future Tense Error).',
        opcoes: ['V, V, V, F', 'F, V, V, V', 'V, F, V, F', 'V, V, F, F'],
        respostaCorreta: 0,
        tipo: 'multipla_escolha'
    },
    {
        pergunta: 'Classify the statements below as True (V) or False (F). Then choose the correct combination of V and F.\nI. Sarah has to share her toys.\nII. Miguel have to feed Pacotinho.\nIII. Luca has to help Baba Magna.\nIV. We have to be nice to everyone.',
        opcoes: ['V, F, V, V', 'V, V, F, F', 'F, V, V, V', 'V, F, F, V'],
        respostaCorreta: 0,
        tipo: 'multipla_escolha'
    },
    {
        pergunta: 'Classify the statements below as True (V) or False (F). Then choose the correct combination of V and F.\nI. Alliteration helps promote Language Awareness.\nII. Alliteration always uses \'M\' or \'P\'.\nIII. Alliteration can build confidence.\nIV. Alliteration makes language fun and enjoyment.',
        opcoes: ['V, F, V, V', 'F, V, V, F', 'V, V, V, V', 'V, F, F, F'],
        respostaCorreta: 0,
        tipo: 'multipla_escolha'
    },

    // ===== INTERPRETAÇÃO COM TEXTO FIXO (Q21-Q30) =====
    {
        textoBase: `School Club Fun

Sports Club is fun and fast,
We kick the ball, the time goes past.

Art Club makes colors shine so bright,
We draw and paint with all our might.

Reading Club has books galore,
We learn new words, and ask for more.

If you feel tired or need to play,
Come join a club right now today!`,
        pergunta: 'What are the three types of clubs mentioned in the poem?',
        opcoes: ['Sports Club, Art Club, and Reading Club', 'Dance Club, Music Club, and Play Club', 'Coding Club, Science Club, and Math Club', 'Soccer Club, Basketball Club, and Volleyball Club'],
        respostaCorreta: 0,
        tipo: 'interpretacao'
    },
    {
        textoBase: `School Club Fun

Sports Club is fun and fast,
We kick the ball, the time goes past.

Art Club makes colors shine so bright,
We draw and paint with all our might.

Reading Club has books galore,
We learn new words, and ask for more.

If you feel tired or need to play,
Come join a club right now today!`,
        pergunta: 'According to the poem, what two main activities do students do in the Art Club?',
        opcoes: ['They draw and paint', 'They kick and run', 'They read and write', 'They sing and dance'],
        respostaCorreta: 0,
        tipo: 'interpretacao'
    },
    {
        textoBase: `School Club Fun

Sports Club is fun and fast,
We kick the ball, the time goes past.

Art Club makes colors shine so bright,
We draw and paint with all our might.

Reading Club has books galore,
We learn new words, and ask for more.

If you feel tired or need to play,
Come join a club right now today!`,
        pergunta: 'What is the adjective used in the last stanza to describe a feeling someone might have before joining a club?',
        opcoes: ['happy', 'tired', 'excited', 'angry'],
        respostaCorreta: 1,
        tipo: 'interpretacao'
    },
    {
        textoBase: `School Club Fun

Sports Club is fun and fast,
We kick the ball, the time goes past.

Art Club makes colors shine so bright,
We draw and paint with all our might.

Reading Club has books galore,
We learn new words, and ask for more.

If you feel tired or need to play,
Come join a club right now today!`,
        pergunta: 'Which club is described by the action "We kick the ball"?',
        opcoes: ['Art Club', 'Reading Club', 'Sports Club', 'Music Club'],
        respostaCorreta: 2,
        tipo: 'interpretacao'
    },
    {
        textoBase: `School Club Fun

Sports Club is fun and fast,
We kick the ball, the time goes past.

Art Club makes colors shine so bright,
We draw and paint with all our might.

Reading Club has books galore,
We learn new words, and ask for more.

If you feel tired or need to play,
Come join a club right now today!`,
        pergunta: 'Based on the activities of the Reading Club, what kind of skills are children mastering there?',
        opcoes: ['Physical skills', 'English language skills', 'Mathematical skills', 'Musical skills'],
        respostaCorreta: 1,
        tipo: 'interpretacao'
    },
    {
        textoBase: `School Club Fun

Sports Club is fun and fast,
We kick the ball, the time goes past.

Art Club makes colors shine so bright,
We draw and paint with all our might.

Reading Club has books galore,
We learn new words, and ask for more.

If you feel tired or need to play,
Come join a club right now today!`,
        pergunta: 'The line "Reading Club has books galore" most likely suggests that the club has:',
        opcoes: ['Only one or two books.', 'Many, many books.', 'No books at all.', 'Only old books.'],
        respostaCorreta: 1,
        tipo: 'interpretacao'
    },
    {
        textoBase: `School Club Fun

Sports Club is fun and fast,
We kick the ball, the time goes past.

Art Club makes colors shine so bright,
We draw and paint with all our might.

Reading Club has books galore,
We learn new words, and ask for more.

If you feel tired or need to play,
Come join a club right now today!`,
        pergunta: 'If Alice decides to try out a club where she can use colors, which club should she join?',
        opcoes: ['Sports Club', 'Reading Club', 'Art Club', 'Science Club'],
        respostaCorreta: 2,
        tipo: 'interpretacao'
    },
    {
        textoBase: `School Club Fun

Sports Club is fun and fast,
We kick the ball, the time goes past.

Art Club makes colors shine so bright,
We draw and paint with all our might.

Reading Club has books galore,
We learn new words, and ask for more.

If you feel tired or need to play,
Come join a club right now today!`,
        pergunta: 'Based on the poem, what did Gigi most likely do at the Sports Club?',
        opcoes: ['She read books', 'She painted pictures', 'She kicked a ball', 'She learned new words'],
        respostaCorreta: 2,
        tipo: 'interpretacao'
    },
    {
        textoBase: `School Club Fun

Sports Club is fun and fast,
We kick the ball, the time goes past.

Art Club makes colors shine so bright,
We draw and paint with all our might.

Reading Club has books galore,
We learn new words, and ask for more.

If you feel tired or need to play,
Come join a club right now today!`,
        pergunta: 'This phrase, "fun and fast," is an example of Alliteration because:',
        opcoes: ['The words sound happy.', 'The words start with the same sound (F).', 'They are both nouns.', 'They describe colors.'],
        respostaCorreta: 1,
        tipo: 'interpretacao'
    },
    {
        textoBase: `School Club Fun

Sports Club is fun and fast,
We kick the ball, the time goes past.

Art Club makes colors shine so bright,
We draw and paint with all our might.

Reading Club has books galore,
We learn new words, and ask for more.

If you feel tired or need to play,
Come join a club right now today!`,
        pergunta: 'What is the main message of the poem regarding joining a club?',
        opcoes: ['Clubs are only for tired students', 'You should join a club right now today', 'Only Sports Club is fun', 'Reading is more important than playing'],
        respostaCorreta: 1,
        tipo: 'interpretacao'
    }
];

