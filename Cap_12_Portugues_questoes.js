// Banco de questões do Capítulo 12 de Português - "No meio da gataria"
const dadosDoQuizPortugues12 = [
    // Grupo 1: Questões de Múltipla Escolha (1-10)
    {
        titulo: "Substantivo Coração",
        contexto: "Walley estava lendo para Helena e Gigi o livro \"A Fantástica Fábrica de Chocolate\", de Roald Dahl. Na história, o menino Charlie Bucket é muito pobre, mas tem um coração bom. A Sra. Gloop diz que seu filho, Augustus, está sempre comendo.",
        pergunta: "Qual das alternativas abaixo melhor descreve o substantivo \"coração\"?",
        opcoes: [
            "Um substantivo derivado, porque vem de \"cor\".",
            "Um substantivo coletivo, porque se refere a um conjunto.",
            "Um substantivo comum, que nomeia um ser em geral.",
            "Um substantivo próprio, porque nomeia um ser específico."
        ],
        respostaCorreta: "Um substantivo comum, que nomeia um ser em geral.",
        explicacao: "A palavra \"coração\" é um substantivo comum, pois se refere ao órgão de forma geral, não a um coração específico. A opção a) está errada, pois é um substantivo primitivo. As opções b) e d) também estão erradas, pois não é um coletivo nem um nome próprio.",
        tipo: "multipla_escolha"
    },
    {
        titulo: "Substantivo Próprio - Augustus",
        contexto: "No livro \"A Fantástica Fábrica de Chocolate\", Augustus Gloop é um menino guloso que adora comer doces. Seu nome é muito especial.",
        pergunta: "Por que \"Augustus\" é considerado um substantivo próprio?",
        opcoes: [
            "Porque é uma palavra grande e difícil de pronunciar.",
            "Porque nomeia uma pessoa específica, diferenciando-a das outras.",
            "Porque se refere a um grupo de pessoas.",
            "Porque é uma palavra que vem de outra palavra."
        ],
        respostaCorreta: "Porque nomeia uma pessoa específica, diferenciando-a das outras.",
        explicacao: "\"Augustus\" é um substantivo próprio porque é o nome específico de uma pessoa, diferenciando-a de todas as outras. Substantivos próprios sempre começam com letra maiúscula e nomeiam seres específicos.",
        tipo: "multipla_escolha"
    },
    {
        titulo: "Substantivo Abstrato - Felicidade",
        contexto: "Charlie Bucket, mesmo sendo pobre, sentia muita felicidade quando estava com sua família. A felicidade é algo que não podemos tocar, mas podemos sentir.",
        pergunta: "Por que \"felicidade\" é um substantivo abstrato?",
        opcoes: [
            "Porque é uma palavra muito bonita e especial.",
            "Porque nomeia algo que não podemos ver nem tocar, apenas sentir.",
            "Porque é uma palavra que vem de \"feliz\".",
            "Porque se refere a muitas pessoas ao mesmo tempo."
        ],
        respostaCorreta: "Porque nomeia algo que não podemos ver nem tocar, apenas sentir.",
        explicacao: "\"Felicidade\" é um substantivo abstrato porque nomeia um sentimento, algo que não tem forma física, que não podemos tocar ou ver, mas apenas sentir. Substantivos abstratos nomeiam sentimentos, qualidades, estados.",
        tipo: "multipla_escolha"
    },
    {
        titulo: "Substantivo Coletivo - Família",
        contexto: "A família de Charlie Bucket era muito unida. Mesmo com pouco dinheiro, eles se amavam muito. A palavra \"família\" tem um significado especial.",
        pergunta: "Por que \"família\" é considerado um substantivo coletivo?",
        opcoes: [
            "Porque é uma palavra grande e importante.",
            "Porque nomeia um conjunto de pessoas que vivem juntas.",
            "Porque se refere apenas a uma pessoa.",
            "Porque é uma palavra que não existe no singular."
        ],
        respostaCorreta: "Porque nomeia um conjunto de pessoas que vivem juntas.",
        explicacao: "\"Família\" é um substantivo coletivo porque, mesmo estando no singular, refere-se a um conjunto de pessoas (pai, mãe, filhos, etc.) que vivem juntas. Substantivos coletivos nomeiam grupos ou conjuntos.",
        tipo: "multipla_escolha"
    },
    {
        titulo: "Substantivo Derivado - Doceria",
        contexto: "Willy Wonka tinha uma doceria fantástica, cheia de doces maravilhosos. A palavra \"doceria\" vem de outra palavra.",
        pergunta: "De qual palavra vem o substantivo \"doceria\"?",
        opcoes: [
            "Da palavra \"doce\".",
            "Da palavra \"dor\".",
            "Da palavra \"doutor\".",
            "Da palavra \"doação\"."
        ],
        respostaCorreta: "Da palavra \"doce\".",
        explicacao: "\"Doceria\" é um substantivo derivado que vem da palavra \"doce\". Quando acrescentamos o sufixo \"-eria\" à palavra \"doce\", formamos \"doceria\", que significa o lugar onde se fazem ou vendem doces.",
        tipo: "multipla_escolha"
    },
    {
        titulo: "Substantivo Primitivo - Chocolate",
        contexto: "O chocolate era o produto mais famoso da fábrica de Willy Wonka. Era feito com muito carinho e ingredientes especiais.",
        pergunta: "Por que \"chocolate\" é considerado um substantivo primitivo?",
        opcoes: [
            "Porque é uma palavra muito antiga.",
            "Porque não vem de nenhuma outra palavra da língua portuguesa.",
            "Porque é uma palavra estrangeira.",
            "Porque é uma palavra muito doce."
        ],
        respostaCorreta: "Porque não vem de nenhuma outra palavra da língua portuguesa.",
        explicacao: "\"Chocolate\" é um substantivo primitivo porque não é formado a partir de nenhuma outra palavra da língua portuguesa. Substantivos primitivos são palavras que não derivam de outras palavras.",
        tipo: "multipla_escolha"
    },
    {
        titulo: "Gênero dos Substantivos - Menina",
        contexto: "Violet Beauregarde era uma menina que gostava muito de mascar chiclete. Ela era muito competitiva e queria sempre ganhar.",
        pergunta: "Qual é o gênero do substantivo \"menina\"?",
        opcoes: [
            "Masculino, porque se refere a crianças em geral.",
            "Feminino, porque se refere especificamente a uma criança do sexo feminino.",
            "Neutro, porque pode se referir a qualquer criança.",
            "Não tem gênero, porque é uma palavra simples."
        ],
        respostaCorreta: "Feminino, porque se refere especificamente a uma criança do sexo feminino.",
        explicacao: "\"Menina\" é um substantivo feminino porque se refere especificamente a uma criança do sexo feminino. O gênero feminino é indicado pela terminação \"-a\" e pelo artigo \"a\" que o acompanha.",
        tipo: "multipla_escolha"
    },
    {
        titulo: "Número dos Substantivos - Doces",
        contexto: "Na fábrica de Willy Wonka havia muitos doces diferentes: balas, chocolates, pirulitos e muito mais. A palavra \"doces\" indica quantidade.",
        pergunta: "A palavra \"doces\" está em que número?",
        opcoes: [
            "Singular, porque se refere a um tipo de alimento.",
            "Plural, porque se refere a mais de um doce.",
            "Não tem número, porque é uma palavra geral.",
            "Dual, porque se refere a dois doces."
        ],
        respostaCorreta: "Plural, porque se refere a mais de um doce.",
        explicacao: "\"Doces\" está no plural porque se refere a mais de um doce. O plural é indicado pela terminação \"-s\" acrescentada à palavra \"doce\". No singular seria \"doce\".",
        tipo: "multipla_escolha"
    },
    {
        titulo: "Substantivo Composto - Guarda-chuva",
        contexto: "Quando chovia, o avô Joe usava um guarda-chuva velho para se proteger. Essa palavra é formada por duas partes.",
        pergunta: "Por que \"guarda-chuva\" é um substantivo composto?",
        opcoes: [
            "Porque é uma palavra muito grande.",
            "Porque é formado por duas palavras: \"guarda\" + \"chuva\".",
            "Porque tem hífen no meio.",
            "Porque se refere a um objeto útil."
        ],
        respostaCorreta: "Porque é formado por duas palavras: \"guarda\" + \"chuva\".",
        explicacao: "\"Guarda-chuva\" é um substantivo composto porque é formado pela união de duas palavras: \"guarda\" (que protege) + \"chuva\". Substantivos compostos são formados pela união de duas ou mais palavras.",
        tipo: "multipla_escolha"
    },
    {
        titulo: "Substantivo Simples - Casa",
        contexto: "A casa de Charlie Bucket era pequena e simples, mas cheia de amor. Toda a família morava junta nessa casinha.",
        pergunta: "Por que \"casa\" é considerado um substantivo simples?",
        opcoes: [
            "Porque a casa de Charlie era simples e pequena.",
            "Porque é formado por apenas uma palavra.",
            "Porque é uma palavra fácil de pronunciar.",
            "Porque se refere a algo comum."
        ],
        respostaCorreta: "Porque é formado por apenas uma palavra.",
        explicacao: "\"Casa\" é um substantivo simples porque é formado por apenas uma palavra, não sendo resultado da união de duas ou mais palavras. Substantivos simples são aqueles que têm apenas um radical.",
        tipo: "multipla_escolha"
    },

    // Grupo 2: Questões de Verdadeiro ou Falso (11-20)
    {
        titulo: "Análise de Substantivos - Clarice Lispector",
        contexto: "Walley pediu para Helena analisar a frase de um livro de Clarice Lispector: \"A felicidade é uma invenção da minha imaginação\".",
        pergunta: "Analise as afirmações sobre os substantivos da frase:",
        afirmacoes: [
            "A palavra \"felicidade\" é um substantivo abstrato, porque não podemos tocá-la.",
            "A palavra \"invenção\" é um substantivo primitivo.",
            "A palavra \"imaginação\" é um substantivo derivado de \"imaginar\".",
            "As três palavras da frase são substantivos."
        ],
        opcoes: [
            "V, F, V, V",
            "V, F, F, V",
            "F, V, F, F",
            "F, V, V, V"
        ],
        respostaCorreta: "V, F, V, V",
        explicacao: "A palavra \"felicidade\" é um substantivo abstrato, pois não podemos tocá-la (V). A palavra \"invenção\" é um substantivo derivado de \"inventar\", não primitivo (F). A palavra \"imaginação\" é um substantivo derivado de \"imaginar\" (V). As três palavras da frase são substantivos (V).",
        tipo: "verdadeiro_falso"
    },
    {
        titulo: "O Pequeno Príncipe",
        contexto: "Lara e Gigi estavam montando um quebra-cabeça do livro \"O Pequeno Príncipe\", de Antoine de Saint-Exupéry. O avô Bolivar explicou que o título \"O Pequeno Príncipe\" tem duas palavras.",
        pergunta: "Analise as afirmações sobre as palavras do título:",
        afirmacoes: [
            "A palavra \"pequeno\" é um substantivo.",
            "A palavra \"príncipe\" é um substantivo comum.",
            "A palavra \"pequeno\" é um adjetivo que caracteriza o príncipe.",
            "A palavra \"príncipe\" é um substantivo masculino."
        ],
        opcoes: [
            "F, V, V, V",
            "V, F, F, F",
            "F, F, V, V",
            "V, V, F, F"
        ],
        respostaCorreta: "F, V, V, V",
        explicacao: "A palavra \"pequeno\" é um adjetivo, não um substantivo (F). A palavra \"príncipe\" é um substantivo comum (V). A palavra \"pequeno\" é um adjetivo que caracteriza o príncipe (V). A palavra \"príncipe\" é um substantivo masculino (V).",
        tipo: "verdadeiro_falso"
    },
    {
        titulo: "Substantivos Primitivos e Derivados",
        contexto: "Vovó Lilia gosta de substantivos primitivos e derivados. Ele pediu para Helena e Gigi analisarem algumas palavras.",
        pergunta: "Analise as afirmações sobre substantivos primitivos e derivados:",
        afirmacoes: [
            "A palavra \"pedra\" é um substantivo primitivo.",
            "A palavra \"pedreiro\" é um substantivo derivado de \"pedra\".",
            "A palavra \"jardim\" é um substantivo derivado de \"jardinar\".",
            "A palavra \"jardineiro\" é um substantivo derivado de \"jardim\"."
        ],
        opcoes: [
            "V, V, F, V",
            "F, F, V, F",
            "V, F, V, F",
            "F, V, F, V"
        ],
        respostaCorreta: "V, V, F, V",
        explicacao: "\"Pedra\" é um substantivo primitivo, pois não vem de outra palavra (V). \"Pedreiro\" é derivado de \"pedra\" (V). \"Jardim\" é primitivo, não vem de \"jardinar\" (F). \"Jardineiro\" é derivado de \"jardim\" (V).",
        tipo: "verdadeiro_falso"
    },
    {
        titulo: "Substantivos Masculinos e Femininos",
        contexto: "Tio Natan estava ensinando sobre gênero dos substantivos. Ele mostrou várias palavras para Helena e Gigi classificarem.",
        pergunta: "Analise as afirmações sobre o gênero dos substantivos:",
        afirmacoes: [
            "A palavra \"João\" é um substantivo masculino.",
            "A palavra \"mãe\" é um substantivo feminino.",
            "A palavra \"vaca\" é um substantivo feminino.",
            "A palavra \"feijão\" é um substantivo masculino."
        ],
        opcoes: [
            "V, V, V, V",
            "F, F, F, F",
            "V, F, V, F",
            "F, V, F, V"
        ],
        respostaCorreta: "V, V, V, V",
        explicacao: "O nome \"João\" é um nome próprio masculino (V). \"Mãe\" é um substantivo feminino (V). \"Vaca\" é um substantivo feminino (V). E \"feijão\" é um substantivo masculino (V).",
        tipo: "verdadeiro_falso"
    },
    {
        titulo: "Características dos Contos",
        contexto: "Gigi perguntou à mamãe Lara se a história de \"Chapeuzinho Vermelho\" era um conto. A mamãe explicou as características do gênero.",
        pergunta: "Analise as afirmações sobre contos:",
        afirmacoes: [
            "Contos são narrativas fictícias, ou seja, são histórias inventadas.",
            "Nos contos, sempre há muitos personagens e um narrador.",
            "As histórias dos contos são curtas e organizadas em começo, meio e fim.",
            "O conto lido no capítulo, \"A gatocleta do Miafino\", é uma narrativa fictícia, como a de Chapeuzinho Vermelho."
        ],
        opcoes: [
            "V, F, V, V",
            "F, V, V, F",
            "V, V, F, F",
            "F, F, V, V"
        ],
        respostaCorreta: "V, F, V, V",
        explicacao: "Contos são narrativas fictícias, ou seja, inventadas (V). Eles têm poucos personagens, não muitos (F). As histórias dos contos são curtas e têm começo, meio e fim (V). O conto de Miafino é fictício, como o da Chapeuzinho Vermelho (V).",
        tipo: "verdadeiro_falso"
    },
    {
        titulo: "O Menino Maluquinho",
        contexto: "O pacotinho estava lendo o livro \"O Menino Maluquinho\", de Ziraldo. A história fala sobre um menino alegre e cheio de vida. A palavra \"Maluquinho\" é um apelido carinhoso.",
        pergunta: "Analise as afirmações sobre as palavras do título:",
        afirmacoes: [
            "A palavra \"menino\" é um substantivo primitivo.",
            "A palavra \"Maluquinho\" é um substantivo próprio.",
            "A palavra \"livro\" é um substantivo comum.",
            "A palavra \"Ziraldo\" é um substantivo próprio."
        ],
        opcoes: [
            "V, F, V, V",
            "V, V, F, F",
            "F, V, V, F",
            "F, F, F, V"
        ],
        respostaCorreta: "V, F, V, V",
        explicacao: "\"Menino\" é uma palavra que não vem de nenhuma outra, é um substantivo primitivo (V). \"Maluquinho\" é um adjetivo, pois dá uma característica ao menino (F). \"Livro\" é um substantivo comum (V). \"Ziraldo\" é um nome próprio (V).",
        tipo: "verdadeiro_falso"
    },
    {
        titulo: "Substantivos Coletivos - Exércitos",
        contexto: "O avô Bolivar, que gosta de história, explicou que antigamente os exércitos eram formados por grupos de soldados.",
        pergunta: "Analise as afirmações sobre substantivos coletivos:",
        afirmacoes: [
            "O substantivo coletivo para um grupo de chaves é \"molho\".",
            "O substantivo coletivo para um grupo de elefantes é \"boiada\".",
            "O substantivo coletivo para um grupo de ilhas é \"arquipélago\".",
            "O substantivo coletivo para um grupo de bandidos é \"esquadrilha\"."
        ],
        opcoes: [
            "V, F, V, F",
            "F, F, V, V",
            "F, V, F, V",
            "V, V, F, F"
        ],
        respostaCorreta: "V, F, V, F",
        explicacao: "O substantivo coletivo para um grupo de chaves é \"molho\" (V). O substantivo coletivo para um grupo de elefantes é \"manada\", não \"boiada\" (F). O substantivo coletivo para um grupo de ilhas é \"arquipélago\" (V). O substantivo coletivo para um grupo de bandidos é \"bando\", não \"esquadrilha\" (F).",
        tipo: "verdadeiro_falso"
    },
    {
        titulo: "Substantivos Abstratos e Concretos",
        contexto: "Mamãe Lara estava explicando a diferença entre substantivos abstratos e concretos para Helena e Gigi, usando exemplos do dia a dia.",
        pergunta: "Analise as afirmações sobre substantivos abstratos e concretos:",
        afirmacoes: [
            "A palavra \"amor\" é um substantivo abstrato porque nomeia um sentimento.",
            "A palavra \"mesa\" é um substantivo concreto porque podemos tocá-la.",
            "A palavra \"tristeza\" é um substantivo concreto porque existe.",
            "A palavra \"cachorro\" é um substantivo concreto porque podemos vê-lo."
        ],
        opcoes: [
            "V, V, F, V",
            "F, F, V, F",
            "V, F, V, F",
            "F, V, F, V"
        ],
        respostaCorreta: "V, V, F, V",
        explicacao: "\"Amor\" é um substantivo abstrato porque nomeia um sentimento (V). \"Mesa\" é um substantivo concreto porque podemos tocá-la (V). \"Tristeza\" é um substantivo abstrato, não concreto, pois é um sentimento (F). \"Cachorro\" é um substantivo concreto porque podemos vê-lo (V).",
        tipo: "verdadeiro_falso"
    },
    {
        titulo: "Plural dos Substantivos",
        contexto: "Vovó Lilia estava ensinando sobre o plural dos substantivos. Ela mostrou várias palavras e pediu para formar o plural corretamente.",
        pergunta: "Analise as afirmações sobre o plural dos substantivos:",
        afirmacoes: [
            "O plural de \"animal\" é \"animais\".",
            "O plural de \"coração\" é \"corações\".",
            "O plural de \"lápis\" é \"lápis\".",
            "O plural de \"irmão\" é \"irmãos\"."
        ],
        opcoes: [
            "V, V, V, V",
            "F, F, F, F",
            "V, F, V, F",
            "F, V, F, V"
        ],
        respostaCorreta: "V, V, V, V",
        explicacao: "O plural de \"animal\" é \"animais\" (V). O plural de \"coração\" é \"corações\" (V). \"Lápis\" é uma palavra invariável, o plural é igual ao singular (V). O plural de \"irmão\" é \"irmãos\" (V).",
        tipo: "verdadeiro_falso"
    },
    {
        titulo: "Substantivos Próprios e Comuns",
        contexto: "Tio Natan estava organizando uma lista com nomes de pessoas, cidades e objetos para ensinar sobre substantivos próprios e comuns.",
        pergunta: "Analise as afirmações sobre substantivos próprios e comuns:",
        afirmacoes: [
            "\"Brasil\" é um substantivo próprio porque é o nome de um país específico.",
            "\"cidade\" é um substantivo comum porque se refere a qualquer cidade.",
            "\"Helena\" é um substantivo próprio porque é o nome de uma pessoa específica.",
            "\"gato\" é um substantivo próprio porque se refere ao gato da família."
        ],
        opcoes: [
            "V, V, V, F",
            "F, F, F, V",
            "V, F, V, F",
            "F, V, F, V"
        ],
        respostaCorreta: "V, V, V, F",
        explicacao: "\"Brasil\" é um substantivo próprio porque nomeia um país específico (V). \"Cidade\" é um substantivo comum porque se refere a qualquer cidade (V). \"Helena\" é um substantivo próprio porque é um nome específico (V). \"Gato\" é um substantivo comum, mesmo se referindo ao gato da família (F).",
        tipo: "verdadeiro_falso"
    },

    // Grupo 3: Questões Abertas (21-27)
    {
        titulo: "Importância da Própria Voz",
        contexto: "No conto, o gato Miafino era rejeitado por seu miado desafinado. No final, ele encontra seu verdadeiro talento.",
        pergunta: "Qual é a importância de a gente ter a nossa própria voz, mesmo que ela seja diferente da dos outros?",
        tipo: "aberta"
    },
    {
        titulo: "Superando as Diferenças",
        contexto: "Miafino se sentia triste porque seu miado era diferente dos outros gatos. Mas descobriu que sua diferença era especial.",
        pergunta: "Como podemos ajudar alguém que se sente diferente ou excluído por causa de suas características?",
        tipo: "aberta"
    },
    {
        titulo: "Descobrindo Talentos",
        contexto: "O gato Miafino descobriu que, mesmo com um miado estranho, ele tinha outros talentos especiais que ninguém mais tinha.",
        pergunta: "Conte sobre um talento especial que você tem ou gostaria de desenvolver. Como você pode usar esse talento para ajudar outras pessoas?",
        tipo: "aberta"
    },
    {
        titulo: "Aceitação e Amizade",
        contexto: "No final da história, os outros gatos passaram a aceitar e valorizar Miafino, reconhecendo suas qualidades únicas.",
        pergunta: "Por que é importante aceitar e valorizar as diferenças das pessoas ao nosso redor? Dê um exemplo de como você pode fazer isso.",
        tipo: "aberta"
    },
    {
        titulo: "Persistência e Autoestima",
        contexto: "Miafino não desistiu de ser ele mesmo, mesmo quando os outros gatos o rejeitavam. Ele continuou tentando encontrar seu lugar.",
        pergunta: "O que você faria se alguém dissesse que você não é bom em alguma coisa? Como você manteria sua autoestima?",
        tipo: "aberta"
    },
    {
        titulo: "Criando um Final Alternativo",
        contexto: "Imagine que você pudesse reescrever o final da história do gato Miafino de uma forma diferente.",
        pergunta: "Como seria o seu final para a história? O que aconteceria com Miafino e os outros gatos?",
        tipo: "aberta"
    },
    {
        titulo: "Reflexão sobre Identidade",
        contexto: "A história de Miafino nos ensina sobre a importância de sermos nós mesmos, mesmo quando somos diferentes.",
        pergunta: "O que significa \"ser você mesmo\"? Por que isso é importante na vida das pessoas?",
        tipo: "aberta"
    },

    // Grupo 4: Questões de Estudo de Caso (28-30)
    {
        titulo: "Criando um Livro de Contos",
        contexto: "Tio Natan quer que Helena e Gigi ajudem a criar um livro de contos sobre os talentos dos animais de estimação.",
        pergunta: "Qual seria o tema do seu miniconto? Qual seria o título? Escreva um pequeno texto de no máximo cinco linhas sobre o assunto.",
        tipo: "aberta"
    },
    {
        titulo: "Organizando uma Apresentação",
        contexto: "A escola de Helena vai fazer uma apresentação sobre diversidade e aceitação. Cada aluno deve contribuir com uma ideia.",
        pergunta: "Como você organizaria uma apresentação sobre o tema \"Todos somos especiais\"? Descreva sua ideia, incluindo o que você faria e como envolveria os colegas.",
        tipo: "aberta"
    },
    {
        titulo: "Projeto de Inclusão",
        contexto: "Inspirados na história de Miafino, os alunos da escola querem criar um projeto para incluir crianças que se sentem diferentes ou excluídas.",
        pergunta: "Descreva um projeto que você criaria para ajudar crianças que se sentem excluídas. Explique como funcionaria e que atividades você incluiria.",
        tipo: "aberta"
    }
];
