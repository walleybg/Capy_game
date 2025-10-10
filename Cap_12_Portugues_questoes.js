// Questões do Capítulo 12 de Português - No meio da gataria
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
        titulo: "Substantivo Derivado de Pedra",
        contexto: "Vovó Denise explicou para Helena a diferença entre substantivo primitivo e derivado. No conto \"A gatocleta do Miafino\", a palavra \"gataria\" é derivada de \"gato\".",
        pergunta: "Qual das alternativas abaixo apresenta um substantivo derivado do substantivo primitivo \"pedra\"?",
        opcoes: [
            "Pedreiro.",
            "Tijolo.",
            "Rocha.",
            "Concreto."
        ],
        respostaCorreta: "Pedreiro.",
        explicacao: "A palavra \"pedreiro\" é um substantivo derivado que se refere à pessoa que trabalha with pedras. As outras opções, \"tijolo\", \"rocha\" e \"concreto\", são substantivos primitivos, mas não são derivados de \"pedra\".",
        tipo: "multipla_escolha"
    },
    {
        titulo: "Substantivos Coletivos",
        contexto: "Bolivar gosta de ler textos sobre mitologia grega. No livro \"Odisseia\", de Homero, o herói Ulisses, durante sua viagem, encontra-se com um grande número de ninfas e fadas que vivem em um bosque.",
        pergunta: "Qual das alternativas abaixo apresenta apenas substantivos coletivos, assim como \"bosque\"?",
        opcoes: [
            "Manada, feixe, livro.",
            "Matilha, cardume, resma.",
            "Multidão, artista, família.",
            "Rebanho, revoada, pássaro."
        ],
        respostaCorreta: "Matilha, cardume, resma.",
        explicacao: "A alternativa correta apresenta apenas substantivos coletivos. \"Matilha\" é um conjunto de cães, \"cardume\" é um conjunto de peixes, e \"resma\" é um conjunto de papéis. As outras opções incluem substantivos comuns, como \"livro\" e \"pássaro\".",
        tipo: "multipla_escolha"
    },
    {
        titulo: "Analogia com Gateando",
        contexto: "No conto, a palavra \"gateando\" significa \"fazendo coisas de gato\". Se aplicássemos a mesma lógica à vida de Helena, qual das alternativas abaixo descreveria o que ela faz na escola, \"estudando\"?",
        pergunta: "Qual das alternativas abaixo descreveria o que ela faz na escola, \"estudando\"?",
        opcoes: [
            "Brincando com os amigos.",
            "Aprendendo com o professor.",
            "Pintando desenhos.",
            "Lendo um livro de aventuras."
        ],
        respostaCorreta: "Aprendendo com o professor.",
        explicacao: "Assim como \"gateando\" significa \"fazendo coisas de gato\", \"estudando\" significa \"aprendendo com o professor\". É uma analogia para o ato de aprender e se dedicar.",
        tipo: "multipla_escolha"
    },
    {
        titulo: "Substantivos Comuns",
        contexto: "Gigi adora o livro \"O Gato de Botas\". No conto, o gato usa um par de botas e um chapéu para enganar as pessoas e ajudar seu dono. A palavra \"chapéu\" é um substantivo comum.",
        pergunta: "Qual das alternativas abaixo apresenta apenas substantivos que também são comuns?",
        opcoes: [
            "Mestre Lin, pandeiro, telhado.",
            "Pantera, cidade, felicidade.",
            "Rio de Janeiro, Brasil, Helena.",
            "Rua, Miafino, pandeiro."
        ],
        respostaCorreta: "Pantera, cidade, felicidade.",
        explicacao: "As palavras \"pantera\", \"cidade\" e \"felicidade\" são substantivos comuns porque nomeiam seres, lugares e sentimentos de forma geral. As outras opções incluem substantivos próprios, como \"Mestre Lin\", \"Rio de Janeiro\" e \"Helena\", ou nomes que se referem a seres específicos.",
        tipo: "multipla_escolha"
    },
    {
        titulo: "Substantivo Coletivo de Músicos",
        contexto: "Vovó Lilia pediu a Helena para reescrever uma frase usando um substantivo coletivo. A frase era: \"O grupo de músicos se apresentou em Fernando de Noronha\".",
        pergunta: "Qual das opções abaixo reescreve a frase usando a palavra correta?",
        opcoes: [
            "A matilha se apresentou em Fernando de Noronha.",
            "A orquestra se apresentou em Fernando de Noronha.",
            "O elenco se apresentou em Fernando de Noronha.",
            "A tripulação se apresentou em Fernando de Noronha."
        ],
        respostaCorreta: "A orquestra se apresentou em Fernando de Noronha.",
        explicacao: "O substantivo coletivo de um grupo de músicos é \"orquestra\". A opção a) está errada, pois \"matilha\" é um coletivo de cães. A opção c) está errada, pois \"elenco\" é um coletivo de artistas. E a opção d) está errada, pois \"tripulação\" é um coletivo de pessoas a bordo de um navio.",
        tipo: "multipla_escolha"
    },
    {
        titulo: "Sufixo -aria",
        contexto: "As palavras podem ser formadas com o uso de sufixos. Na palavra \"sapataria\", o sufixo \"-aria\" indica o lugar onde se vendem sapatos.",
        pergunta: "Qual das alternativas abaixo apresenta uma palavra que também é formada com o sufixo \"-aria\"?",
        opcoes: [
            "Ladrão.",
            "Padaria.",
            "Escada.",
            "Camisa."
        ],
        respostaCorreta: "Padaria.",
        explicacao: "A palavra \"padaria\" é formada pelo substantivo primitivo \"pão\" com o sufixo \"-aria\", que indica um lugar. O sufixo \"-aria\" na palavra \"gataria\" também indica um conjunto de seres.",
        tipo: "multipla_escolha"
    },
    {
        titulo: "Atitude de Miafino",
        contexto: "No livro \"Harry Potter e a Pedra Filosofal\", de J. K. Rowling, o protagonista se sente um pouco deslocado no mundo da magia. Ele tem que descobrir seu lugar. Assim como Harry, o gato Miafino na história precisa encontrar seu talento.",
        pergunta: "Qual das alternativas abaixo melhor representa uma atitude de Miafino ao procurar seu talento?",
        opcoes: [
            "Ele desiste de miar e se esconde de todos.",
            "Ele aceita a ajuda de Mestre Lin e constrói a \"gatocleta\".",
            "Ele tenta miar ainda mais alto para provar que é bom.",
            "Ele sai em busca de outro gato para competir."
        ],
        respostaCorreta: "Ele aceita a ajuda de Mestre Lin e constrói a \"gatocleta\".",
        explicacao: "Miafino, ao aceitar a ajuda de Mestre Lin, demonstra que está aberto a novas oportunidades e disposto a encontrar seu talento de uma forma diferente, em vez de desistir ou competir.",
        tipo: "multipla_escolha"
    },
    {
        titulo: "Coletivo de Estrelas",
        contexto: "Os substantivos coletivos podem nomear conjuntos de seres. Ele deu o exemplo de \"cacho\", que é o coletivo de frutas.",
        pergunta: "Qual das opções abaixo apresenta a palavra correta para o substantivo coletivo de \"estrelas\"?",
        opcoes: [
            "Esquadrilha.",
            "Constelação.",
            "Cardume.",
            "Multidão."
        ],
        respostaCorreta: "Constelação.",
        explicacao: "O substantivo coletivo de \"estrelas\" é \"constelação\". As outras opções estão incorretas: \"esquadrilha\" é um coletivo de aviões, \"cardume\" é um coletivo de peixes, e \"multidão\" é um coletivo de pessoas.",
        tipo: "multipla_escolha"
    },
    {
        titulo: "Responsabilidade com Animais",
        contexto: "Gigi e a Helena estavam conversando sobre a responsabilidade de ter um animal de estimação. No texto, aprendemos que \"optar por conviver com um animal de estimação deveria ser uma das decisões mais importantes da nossa vida\".",
        pergunta: "Qual das alternativas abaixo não é uma responsabilidade de quem tem um animal de estimação?",
        opcoes: [
            "Dar comida e água.",
            "Levar para passear.",
            "Deixar o animal na casa de um amigo por uma semana.",
            "Visitar o veterinário para exames."
        ],
        respostaCorreta: "Deixar o animal na casa de um amigo por uma semana.",
        explicacao: "O texto afirma que ter um animal é uma das decisões mais importantes da vida. Cuidar da alimentação, higiene e levar ao veterinário são responsabilidades essenciais. Deixar o animal por muito tempo na casa de um amigo sem a devida responsabilidade não é uma atitude responsável.",
        tipo: "multipla_escolha"
    },

    // Grupo 2: Questões de Verdadeiro ou Falso (11-20)
    {
        titulo: "Análise de Substantivos - Clarice Lispector",
        contexto: "Walley pediu para Helena analisar a frase de um livro de Clarice Lispector: \"A felicidade é uma invenção da minha imaginação\".",
        pergunta: "Analise as afirmações sobre os substantivos da frase:",
        opcoes: [
            "I. A palavra \"felicidade\" é um substantivo abstrato, porque não podemos tocá-la.\nII. A palavra \"invenção\" é um substantivo primitivo.\nIII. A palavra \"imaginação\" é um substantivo derivado de \"imaginar\".\nIV. As três palavras da frase são substantivos.",
            "V - F - V - V",
            "V - F - F - V",
            "F - V - F - F",
            "F - V - V - V"
        ],
        respostaCorreta: "V - F - V - V",
        explicacao: "A palavra \"felicidade\" é um sentimento, portanto é um substantivo abstrato (V). A palavra \"invenção\" é um substantivo derivado do verbo \"inventar\", não é primitiva (F). A palavra \"imaginação\" é um substantivo derivado de \"imaginar\" (V). E as três palavras da frase são substantivos (V).",
        tipo: "verdadeiro_falso"
    },
    {
        titulo: "O Pequeno Príncipe",
        contexto: "Lara e Gigi estavam montando um quebra-cabeça do livro \"O Pequeno Príncipe\", de Antoine de Saint-Exupéry. O avô Bolivar explicou que o título \"O Pequeno Príncipe\" tem duas palavras.",
        pergunta: "Analise as afirmações sobre as palavras do título:",
        opcoes: [
            "I. A palavra \"Pequeno\" é um adjetivo, pois dá uma qualidade ao substantivo.\nII. A palavra \"Príncipe\" é um substantivo próprio.\nIII. Se a história fosse sobre uma princesa, o substantivo seria feminino.\nIV. Os substantivos \"príncipe\" e \"raposa\" são comuns.",
            "V - F - V - V",
            "F - V - V - F",
            "V - F - F - V",
            "V - V - F - V"
        ],
        respostaCorreta: "V - F - V - V",
        explicacao: "A palavra \"Pequeno\" é um adjetivo, pois dá uma qualidade ao substantivo (V). A palavra \"Príncipe\" é um substantivo comum, não próprio, pois se refere a qualquer príncipe (F). Se a história fosse sobre uma princesa, o substantivo seria feminino (V). Os substantivos \"príncipe\" e \"raposa\" são comuns (V).",
        tipo: "verdadeiro_falso"
    },
    {
        titulo: "Substantivos Primitivos e Derivados",
        contexto: "Vovó Lilia gosta de substantivos primitivos e derivados. Ele pediu para Helena e Gigi analisarem algumas palavras.",
        pergunta: "Analise as afirmações sobre substantivos primitivos e derivados:",
        opcoes: [
            "I. A palavra \"jornalista\" é derivada de \"jornal\".\nII. A palavra \"perfumista\" é derivada de \"perfume\".\nIII. A palavra \"sapataria\" é derivada de \"sapato\".\nIV. A palavra \"livraria\" é primitiva.",
            "V - F - V - F",
            "V - V - F - V",
            "V - V - V - F",
            "V - V - V - V"
        ],
        respostaCorreta: "V - V - V - F",
        explicacao: "A palavra \"jornalista\" é derivada de \"jornal\" (V). \"Perfumista\" é derivada de \"perfume\" (V). \"Sapataria\" é derivada de \"sapato\" (V). \"Livraria\" é um substantivo derivado de \"livro\", e não primitivo (F).",
        tipo: "verdadeiro_falso"
    },
    {
        titulo: "João e o Pé de Feijão",
        contexto: "Vovó Denise estava contando a história de \"João e o Pé de Feijão\". A história conta sobre João, um menino que vive com sua mãe e que vende sua vaca por feijões mágicos.",
        pergunta: "Analise as afirmações sobre os substantivos da história:",
        opcoes: [
            "I. O nome \"João\" é um substantivo próprio.\nII. O substantivo \"mãe\" é um substantivo comum.\nIII. O substantivo \"vaca\" é um substantivo feminino.\nIV. O substantivo \"feijão\" é um substantivo masculino.",
            "V - V - V - V",
            "F - V - F - V",
            "V - F - V - F",
            "F - F - F - V"
        ],
        respostaCorreta: "V - V - V - V",
        explicacao: "O nome \"João\" é um nome próprio, pois é um nome específico (V). \"Mãe\" é um substantivo comum, pois se refere a qualquer mãe (V). \"Vaca\" é um substantivo feminino (V). E \"feijão\" é um substantivo masculino (V).",
        tipo: "verdadeiro_falso"
    },
    {
        titulo: "Características dos Contos",
        contexto: "Gigi perguntou à mamãe Lara se a história de \"Chapeuzinho Vermelho\" era um conto. A mamãe explicou as características do gênero.",
        pergunta: "Analise as afirmações sobre contos:",
        opcoes: [
            "I. Contos são narrativas fictícias, ou seja, são histórias inventadas.\nII. Nos contos, sempre há muitos personagens e um narrador.\nIII. As histórias dos contos são curtas e organizadas em começo, meio e fim.\nIV. O conto lido no capítulo, \"A gatocleta do Miafino\", é uma narrativa fictícia, como a de Chapeuzinho Vermelho.",
            "V - V - F - F",
            "F - V - V - F",
            "V - F - V - V",
            "F - F - V - V"
        ],
        respostaCorreta: "V - F - V - V",
        explicacao: "Contos são narrativas fictícias, ou seja, inventadas (V). Eles têm poucos personagens, não muitos (F). As histórias dos contos são curtas e têm começo, meio e fim (V). O conto de Miafino é fictício, como o da Chapeuzinho Vermelho (V).",
        tipo: "verdadeiro_falso"
    },
    {
        titulo: "O Menino Maluquinho",
        contexto: "O pacotinho estava lendo o livro \"O Menino Maluquinho\", de Ziraldo. A história fala sobre um menino alegre e cheio de vida. A palavra \"Maluquinho\" é um apelido carinhoso.",
        pergunta: "Analise as afirmações sobre as palavras do título:",
        opcoes: [
            "I. A palavra \"menino\" é um substantivo primitivo.\nII. A palavra \"Maluquinho\" é um substantivo próprio.\nIII. A palavra \"livro\" é um substantivo comum.\nIV. A palavra \"Ziraldo\" é um substantivo próprio.",
            "V - V - F - F",
            "V - F - V - V",
            "F - V - V - F",
            "F - F - F - V"
        ],
        respostaCorreta: "V - F - V - V",
        explicacao: "\"Menino\" é uma palavra que não vem de nenhuma outra, é um substantivo primitivo (V). \"Maluquinho\" é um adjetivo, pois dá uma característica ao menino (F). \"Livro\" é um substantivo comum (V). \"Ziraldo\" é um nome próprio (V).",
        tipo: "verdadeiro_falso"
    },
    {
        titulo: "Substantivos Coletivos - Exércitos",
        contexto: "O avô Bolivar, que gosta de história, explicou que antigamente os exércitos eram formados por grupos de soldados.",
        pergunta: "Analise as afirmações sobre substantivos coletivos:",
        opcoes: [
            "I. O substantivo coletivo para um grupo de chaves é \"molho\".\nII. O substantivo coletivo para um grupo de elefantes é \"boiada\".\nIII. O substantivo coletivo para um grupo de ilhas é \"arquipélago\".\nIV. O substantivo coletivo para um grupo de bandidos é \"esquadrilha\".",
            "F - V - F - V",
            "F - F - V - V",
            "V - F - V - F",
            "V - V - F - F"
        ],
        respostaCorreta: "V - F - V - F",
        explicacao: "O substantivo coletivo para um grupo de chaves é \"molho\" (V). O substantivo coletivo para um grupo de elefantes é \"manada\", não \"boiada\" (F). O substantivo coletivo para um grupo de ilhas é \"arquipélago\" (V). O substantivo coletivo para um grupo de bandidos é \"bando\", não \"esquadrilha\" (F).",
        tipo: "verdadeiro_falso"
    },
    {
        titulo: "Gato de Botas - Análise",
        contexto: "Walley e Gigi estavam conversando sobre a história de \"O Gato de Botas\". O papai Walley explicou que, na história, o gato é muito esperto.",
        pergunta: "Analise as afirmações sobre as palavras da história:",
        opcoes: [
            "I. O personagem \"Gato de Botas\" é um substantivo composto.\nII. A palavra \"esperto\" é um substantivo que dá uma característica ao gato.\nIII. A palavra \"botas\" é um substantivo derivado.\nIV. As palavras \"chapéu\" e \"botas\" são substantivos comuns.",
            "V - F - V - F",
            "V - F - F - V",
            "F - V - F - V",
            "F - V - F - F"
        ],
        respostaCorreta: "V - F - F - V",
        explicacao: "O nome \"Gato de Botas\" é um substantivo composto por ter duas palavras (V). A palavra \"esperto\" é um adjetivo, não um substantivo (F). A palavra \"botas\" é um substantivo primitivo, não derivado (F). As palavras \"chapéu\" e \"botas\" são substantivos comuns (V).",
        tipo: "verdadeiro_falso"
    },
    {
        titulo: "Álbum de Fotos",
        contexto: "A mamãe Lara estava mostrando fotos de família para Helena e Gigi. O vovó Denise comentou que o conjunto de fotos formava um álbum.",
        pergunta: "Analise as afirmações sobre as palavras relacionadas:",
        opcoes: [
            "I. A palavra \"álbum\" é um substantivo coletivo.\nII. A palavra \"família\" também é um substantivo coletivo.\nIII. A palavra \"foto\" é um substantivo primitivo.\nIV. A palavra \"vovó\" é um substantivo derivado.",
            "V - F - F - F",
            "F - F - V - V",
            "V - V - V - F",
            "F - V - F - F"
        ],
        respostaCorreta: "V - V - V - F",
        explicacao: "A palavra \"álbum\" é um substantivo coletivo (V). A palavra \"família\" também é um substantivo coletivo (V). A palavra \"foto\" é um substantivo primitivo (V). A palavra \"vovó\" é um substantivo primitivo, não derivado (F).",
        tipo: "verdadeiro_falso"
    },
    {
        titulo: "O Patinho Feio",
        contexto: "A vovó Lilia, que gosta de contos, falou para Helena sobre o conto \"O Patinho Feio\", de Hans Christian Andersen. A história fala sobre um patinho que era diferente dos outros.",
        pergunta: "Analise as afirmações sobre a história:",
        opcoes: [
            "I. O patinho se sentia rejeitado por ser diferente.\nII. No final, o patinho descobre que é um cisne, e não um pato.\nIII. A história nos ensina que não devemos julgar os outros pela aparência.\nIV. A história nos ensina que é importante a gente se valorizar e encontrar o nosso lugar.",
            "V - F - F - F",
            "V - F - V - V",
            "V - V - V - V",
            "V - V - F - F"
        ],
        respostaCorreta: "V - V - V - V",
        explicacao: "O patinho se sentia rejeitado por ser diferente (V). No final, o patinho descobre que é um cisne, e não um pato (V). A história nos ensina que não devemos julgar os outros pela aparência (V). A história nos ensina que é importante a gente se valorizar e encontrar o nosso lugar (V).",
        tipo: "verdadeiro_falso"
    },

    // Grupo 3: Perguntas Abertas (21-27)
    {
        titulo: "Importância da Própria Voz",
        contexto: "No conto, o gato Miafino era rejeitado por seu miado desafinado. No final, ele encontra seu verdadeiro talento.",
        pergunta: "Qual é a importância de a gente ter a nossa própria voz, mesmo que ela seja diferente da dos outros?",
        opcoes: [],
        respostaCorreta: "",
        explicacao: "Resposta pessoal. Espera-se que o aluno reflita sobre a importância da individualidade, da autenticidade e de valorizar suas próprias características únicas, mesmo quando são diferentes do padrão esperado.",
        tipo: "aberta"
    },
    {
        titulo: "Olhar com o Coração",
        contexto: "O livro \"O Pequeno Príncipe\" nos ensina a olhar para o mundo com o coração e não apenas com os olhos.",
        pergunta: "Explique com suas próprias palavras o que essa frase significa.",
        opcoes: [],
        respostaCorreta: "",
        explicacao: "Resposta pessoal. Espera-se que o aluno compreenda que olhar com o coração significa ver além das aparências, valorizar sentimentos, emoções e a essência das pessoas e situações, não apenas o que é visível superficialmente.",
        tipo: "aberta"
    },
    {
        titulo: "Substantivos Derivados de Árvore",
        contexto: "A vovó Dedê explicou que o substantivo \"árvore\" é primitivo.",
        pergunta: "Escreva dois substantivos derivados de \"árvore\" e o que eles significam.",
        opcoes: [],
        respostaCorreta: "",
        explicacao: "Exemplos possíveis: arvoredo (conjunto de árvores), arborização (ação de plantar árvores), arboricultura (cultivo de árvores), etc. O aluno deve demonstrar compreensão de como palavras derivadas são formadas a partir de uma palavra primitiva.",
        tipo: "aberta"
    },
    {
        titulo: "Bom Coração - Pinóquio",
        contexto: "No livro \"Pinóquio\", o boneco de madeira tem o desejo de se tornar um menino de verdade. Ele precisa provar que tem um bom coração.",
        pergunta: "O que você acha que significa ter um \"bom coração\"?",
        opcoes: [],
        respostaCorreta: "",
        explicacao: "Resposta pessoal. Espera-se que o aluno associe \"bom coração\" a qualidades como bondade, generosidade, empatia, honestidade, capacidade de ajudar os outros e fazer o bem.",
        tipo: "aberta"
    },
    {
        titulo: "Miniconto vs Conto",
        contexto: "De acordo com o texto, o que é um miniconto e por que ele é diferente de um conto normal?",
        pergunta: "De acordo com o texto, o que é um miniconto e por que ele é diferente de um conto normal?",
        opcoes: [],
        respostaCorreta: "",
        explicacao: "O miniconto é uma narrativa muito breve, mais curta que um conto tradicional, mas que mantém os elementos essenciais de uma história (começo, meio e fim). A diferença principal é a extensão: o miniconto é extremamente conciso.",
        tipo: "aberta"
    },
    {
        titulo: "Gato de Botas - Personagem e Primitivo",
        contexto: "Gigi adora o livro \"O Gato de Botas\".",
        pergunta: "Qual é o nome do personagem principal e qual é o substantivo primitivo que dá origem à palavra \"botas\"?",
        opcoes: [],
        respostaCorreta: "",
        explicacao: "O personagem principal é o Gato de Botas. O substantivo primitivo que dá origem à palavra \"botas\" é \"bota\" (no singular).",
        tipo: "aberta"
    },
    {
        titulo: "Mensagem do Conto",
        contexto: "O conto \"A gatocleta do Miafino\" termina com uma mensagem: \"Cada um é cada um / E, talentos, todos têm\".",
        pergunta: "Como essa frase se conecta com a história de Miafino e com a sua vida?",
        opcoes: [],
        respostaCorreta: "",
        explicacao: "Resposta pessoal. Espera-se que o aluno conecte a mensagem com a jornada de Miafino para descobrir seu talento único (a gatocleta) e reflita sobre seus próprios talentos e individualidade.",
        tipo: "aberta"
    },

    // Grupo 4: Opiniões e Estudos de Caso (28-30)
    {
        titulo: "Criando um Livro de Contos",
        contexto: "Tio Natan quer que Helena e Gigi ajudem a criar um livro de contos sobre os talentos dos animais de estimação.",
        pergunta: "Qual seria o tema do seu miniconto? Qual seria o título? Escreva um pequeno texto de no máximo cinco linhas sobre o assunto.",
        opcoes: [],
        respostaCorreta: "",
        explicacao: "Resposta criativa e pessoal. O aluno deve demonstrar criatividade na criação de um tema, título e texto breve sobre talentos de animais de estimação, seguindo a estrutura de um miniconto.",
        tipo: "estudo_caso"
    },
    {
        titulo: "Adoção de Tartaruga",
        contexto: "Helena está pensando em adotar uma tartaruga para a família.",
        pergunta: "Qual é a sua opinião sobre ter um animal de estimação? Quais são as responsabilidades que a família inteira deve ter com o novo membro da casa?",
        opcoes: [],
        respostaCorreta: "",
        explicacao: "Resposta pessoal. Espera-se que o aluno reflita sobre as responsabilidades de ter um animal de estimação, como alimentação, cuidados veterinários, carinho, espaço adequado, e o compromisso de longo prazo que isso representa.",
        tipo: "estudo_caso"
    },
    {
        titulo: "Importância dos Substantivos",
        contexto: "A irmã Gigi te perguntou por que é importante aprender sobre substantivos (primitivos, derivados e coletivos).",
        pergunta: "Explique para ela a importância de conhecer esses conceitos. O que podemos fazer para que a Gigi e outras crianças aprendam sobre o assunto de uma forma mais divertida?",
        opcoes: [],
        respostaCorreta: "",
        explicacao: "Resposta pessoal. Espera-se que o aluno explique a importância dos substantivos para a comunicação e compreensão da língua, e sugira métodos lúdicos de ensino como jogos, histórias, músicas ou atividades práticas.",
        tipo: "estudo_caso"
    }
];
