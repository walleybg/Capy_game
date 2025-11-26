// Simulado do Capítulo 15 de Português - Capítulos 14 e 15
// 130 questões de múltipla escolha

const dadosDoSimuladoPortugues15 = [
    {
        pergunta: "Qual é o principal elemento que diferencia um Poema Visual de um poema tradicional?",
        opcoes: [
            "a) O uso obrigatório de rimas longas.",
            "b) O uso de versos dispostos em várias direções, que podem formar figuras.",
            "c) O fato de ser sempre escrito com lápis de cor.",
            "d) O texto ser organizado obrigatoriamente em parágrafos.",
        ],
        respostaCorreta: "b) O uso de versos dispostos em várias direções, que podem formar figuras.",
        explicacao: "Resposta baseada no conteúdo dos capítulos 14 e 15.",
        tipo: "multipla_escolha"
    },
    {
        pergunta: "O que a cliente Laura utilizou para comprovar a falha do produto?",
        opcoes: [
            "a) Apenas a palavra.",
            "b) O e-mail.",
            "c) O cupom fiscal e as canetas estouradas (com defeito).",
            "d) O telefone.",
        ],
        respostaCorreta: "c) O cupom fiscal e as canetas estouradas (com defeito).",
        explicacao: "Resposta baseada no conteúdo dos capítulos 14 e 15.",
        tipo: "multipla_escolha"
    },
    {
        pergunta: "A arte do Origami surgiu originalmente em qual país?",
        opcoes: [
            "a) Brasil.",
            "b) China.",
            "c) Japão.",
            "d) Coreia.",
        ],
        respostaCorreta: "c) Japão.",
        explicacao: "Resposta baseada no conteúdo dos capítulos 14 e 15.",
        tipo: "multipla_escolha"
    },
    {
        pergunta: "O texto sobre o Origami afirma que "Toda forma de arte deve ser divulgada e cultivada, pois é também uma forma de conhecer e ter contato com a cultura do outro". Qual conceito essa afirmação enfatiza?",
        opcoes: [
            "a) A universalidade do passatempo.",
            "b) O valor cultural e a aproximação entre povos.",
            "c) A superioridade da arte manual sobre a digital.",
            "d) A disciplina exigida pelas escolas japonesas.",
        ],
        respostaCorreta: "b) O valor cultural e a aproximação entre povos.",
        explicacao: "Resposta baseada no conteúdo dos capítulos 14 e 15.",
        tipo: "multipla_escolha"
    },
    {
        pergunta: "A expressão "perder a cabeça" no poema "Falta de Sorte" significa, no contexto de má sorte, o mesmo que:",
        opcoes: [
            "a) Ficar rico e famoso.",
            "b) Perder a paciência ou ficar irritado.",
            "c) Encontrar um objeto que caiu da mão.",
            "d) Fugir para o Japão.",
        ],
        respostaCorreta: "b) Perder a paciência ou ficar irritado.",
        explicacao: "Resposta baseada no conteúdo dos capítulos 14 e 15.",
        tipo: "multipla_escolha"
    },
    {
        pergunta: "Qual sinal de pontuação é usado especificamente para indicar uma pergunta ou um questionamento?",
        opcoes: [
            "a) Ponto Final (.).",
            "b) Ponto de Exclamação (!).",
            "c) Ponto de Interrogação (?).",
            "d) Vírgula (,).",
        ],
        respostaCorreta: "c) Ponto de Interrogação (?).",
        explicacao: "Resposta baseada no conteúdo dos capítulos 14 e 15.",
        tipo: "multipla_escolha"
    },
    {
        pergunta: "No contexto do origami, o que significa a palavra "desempenhada" na frase: "E se tornou uma forma artística muito desempenhada"?",
        opcoes: [
            "a) Esquecida.",
            "b) Praticada ou realizada.",
            "c) Inventada.",
            "d) Modificada.",
        ],
        respostaCorreta: "b) Praticada ou realizada.",
        explicacao: "Resposta baseada no conteúdo dos capítulos 14 e 15.",
        tipo: "multipla_escolha"
    },
    {
        pergunta: "Qual das frases abaixo é um exemplo de Frase Negativa?",
        opcoes: [
            "a) Eu adoro a cultura japonesa.",
            "b) Você sabe fazer origami?",
            "c) Eu não quero perder a cabeça.",
            "d) Que origami incrível esse!",
        ],
        respostaCorreta: "c) Eu não quero perder a cabeça.",
        explicacao: "Resposta baseada no conteúdo dos capítulos 14 e 15.",
        tipo: "multipla_escolha"
    },
    {
        pergunta: "A tipografia (o tipo e tamanho da fonte) e as cores em um Poema Visual são usadas para:",
        opcoes: [
            "a) Garantir que o poema tenha sempre quatro versos.",
            "b) Apenas mostrar o nome do autor.",
            "c) Determinar o tom, o ritmo e o impacto emocional do poema.",
            "d) Assegurar que o texto seja lido em linha reta.",
        ],
        respostaCorreta: "c) Determinar o tom, o ritmo e o impacto emocional do poema.",
        explicacao: "Resposta baseada no conteúdo dos capítulos 14 e 15.",
        tipo: "multipla_escolha"
    },
    {
        pergunta: "Qual sinal de pontuação é usado para indicar o final de uma frase afirmativa e o encerramento de uma ideia?",
        opcoes: [
            "a) Ponto de Exclamação.",
            "b) Ponto Final.",
            "c) Ponto de Interrogação.",
            "d) Travessão.",
        ],
        respostaCorreta: "b) Ponto Final.",
        explicacao: "Resposta baseada no conteúdo dos capítulos 14 e 15.",
        tipo: "multipla_escolha"
    },
    {
        pergunta: "Qual é o propósito de leitura principal de um texto de reclamação?",
        opcoes: [
            "a) Informar sobre a qualidade do produto.",
            "b) Narrar um conto de ficção.",
            "c) Persuadir o destinatário a resolver o problema.",
            "d) Descrever o produto comprado.",
        ],
        respostaCorreta: "c) Persuadir o destinatário a resolver o problema.",
        explicacao: "Resposta baseada no conteúdo dos capítulos 14 e 15.",
        tipo: "multipla_escolha"
    },
    {
        pergunta: "Qual é uma das dicas mais importantes para o consumidor ter "Olho Vivo" ao conferir o troco?",
        opcoes: [
            "a) Contar o troco depois de chegar em casa.",
            "b) Calcule o troco antes de pagar a conta e confira imediatamente o valor recebido.",
            "c) Ignorar as moedas e focar apenas nas notas de maior valor.",
            "d) Pedir que o vendedor calcule o troco para você, sem conferir.",
        ],
        respostaCorreta: "b) Calcule o troco antes de pagar a conta e confira imediatamente o valor recebido.",
        explicacao: "Resposta baseada no conteúdo dos capítulos 14 e 15.",
        tipo: "multipla_escolha"
    },
    {
        pergunta: "Analise a Concordância Nominal: "Eu comprei duas caixas e um pacote de caneta vermelho." O adjetivo "vermelho" está:",
        opcoes: [
            "a) Incorreto, pois deveria concordar com \"caixas\" (duas caixas vermelhas).",
            "b) Incorreto, pois deveria concordar com todos os substantivos (caixas e pacote vermelhos).",
            "c) Correto, pois concorda com o substantivo mais próximo, \"pacote\" (pacote vermelho).",
            "d) Incorreto, pois deveria concordar com \"caneta\" (caneta vermelha).",
        ],
        respostaCorreta: "d) Incorreto, pois deveria concordar com \",
        explicacao: "Resposta baseada no conteúdo dos capítulos 14 e 15.",
        tipo: "multipla_escolha"
    },
    {
        pergunta: "Qual das opções é uma parte essencial da estrutura de um texto de reclamação?",
        opcoes: [
            "a) Introdução de um poema.",
            "b) Despedida educada.",
            "c) Título de um tutorial.",
            "d) Lista de concorrentes.",
        ],
        respostaCorreta: "b) Despedida educada.",
        explicacao: "Resposta baseada no conteúdo dos capítulos 14 e 15.",
        tipo: "multipla_escolha"
    },
    {
        pergunta: "Em um texto de reclamação, o uso de verbos no Passado (comprei, estava, percebi) serve para:",
        opcoes: [
            "a) Indicar que o problema será resolvido no futuro.",
            "b) Relatar ações e fatos que já aconteceram com o produto.",
            "c) Persuadir o cliente a não comprar mais na loja.",
            "d) Descrever as características atuais do produto.",
        ],
        respostaCorreta: "b) Relatar ações e fatos que já aconteceram com o produto.",
        explicacao: "Resposta baseada no conteúdo dos capítulos 14 e 15.",
        tipo: "multipla_escolha"
    },
    {
        pergunta: "Qual é o pronome pessoal que indica a 1ª pessoa do singular?",
        opcoes: [
            "a) Ele",
            "b) Nós",
            "c) Eu",
            "d) Tu",
        ],
        respostaCorreta: "c) Eu",
        explicacao: "Resposta baseada no conteúdo dos capítulos 14 e 15.",
        tipo: "multipla_escolha"
    },
    {
        pergunta: "Qual das ações abaixo NÃO é uma dica de "Olho Vivo" para o consumidor, segundo o texto?",
        opcoes: [
            "a) Exigir o comprovante de garantia do produto.",
            "b) Provar roupas e calçados, mesmo que sejam do seu número.",
            "c) Pedir ao vendedor para testar produtos eletrônicos na sua frente.",
            "d) Postar fotos do produto com defeito em todas as redes sociais imediatamente.",
        ],
        respostaCorreta: "d) Postar fotos do produto com defeito em todas as redes sociais imediatamente.",
        explicacao: "Resposta baseada no conteúdo dos capítulos 14 e 15.",
        tipo: "multipla_escolha"
    },
    {
        pergunta: "Em qual tipo de texto, segundo a seção de Interpretação, o propósito é persuadir (tentar convencer) o leitor a fazer algo?",
        opcoes: [
            "a) Texto Narrativo.",
            "b) Texto de Reclamação.",
            "c) Texto Informativo.",
            "d) Texto Descritivo.",
        ],
        respostaCorreta: "b) Texto de Reclamação.",
        explicacao: "Resposta baseada no conteúdo dos capítulos 14 e 15.",
        tipo: "multipla_escolha"
    },
    {
        pergunta: "Se a frase original é "O problema nos prejudicou", qual das opções abaixo apresenta a Concordância Verbal CORRETA se o sujeito for mudado para "Nós"?",
        opcoes: [
            "a) Nós prejudicou.",
            "b) Nós prejudicaram.",
            "c) Nós prejudicamos.",
            "d) Nós prejudico.",
        ],
        respostaCorreta: "c) Nós prejudicamos.",
        explicacao: "Resposta baseada no conteúdo dos capítulos 14 e 15.",
        tipo: "multipla_escolha"
    },
    {
        pergunta: "O que significa dizer que o consumidor deve se "conscientizar" (perceber a realidade à nossa volta) para se defender de tentativas de nos enganar?",
        opcoes: [
            "a) Que ele deve ignorar os preços.",
            "b) Que ele deve prestar atenção às aulas de História.",
            "c) Que ele deve buscar o conhecimento e a atenção plena sobre a situação de consumo.",
            "d) Que ele deve sempre brigar com o vendedor.",
        ],
        respostaCorreta: "c) Que ele deve buscar o conhecimento e a atenção plena sobre a situação de consumo.",
        explicacao: "Resposta baseada no conteúdo dos capítulos 14 e 15.",
        tipo: "multipla_escolha"
    },
    {
        pergunta: "Qual é o principal problema com as canetas compradas por Laura?",
        opcoes: [
            "a) Estavam com a cor errada.",
            "b) Estavam vazando/estouradas.",
            "c) Não tinham cupom fiscal.",
            "d) Eram muito caras.",
        ],
        respostaCorreta: "b) Estavam vazando/estouradas.",
        explicacao: "Resposta baseada no conteúdo dos capítulos 14 e 15.",
        tipo: "multipla_escolha"
    },
    {
        pergunta: "Qual é o prazo máximo estabelecido pelo fabricante para o procedimento de solução após a análise dos dados?",
        opcoes: [
            "a) Até 7 dias.",
            "b) Em 24 horas.",
            "c) Até 15 dias.",
            "d) Não há prazo definido.",
        ],
        respostaCorreta: "c) Até 15 dias.",
        explicacao: "Resposta baseada no conteúdo dos capítulos 14 e 15.",
        tipo: "multipla_escolha"
    },
    {
        pergunta: "De acordo com o texto, o consumidor deve usar conhecimentos matemáticos para evitar ser enganado, como calcular:",
        opcoes: [
            "a) O troco que devemos receber e conferir a soma dos preços.",
            "b) O tempo de uso do produto.",
            "c) A distância da loja até sua casa.",
            "d) O número de reclamações da empresa.",
        ],
        respostaCorreta: "a) O troco que devemos receber e conferir a soma dos preços.",
        explicacao: "Resposta baseada no conteúdo dos capítulos 14 e 15.",
        tipo: "multipla_escolha"
    },
    {
        pergunta: "A frase final da reclamação de Laura, "Agradeço, desde já, a atenção", mostra que a cliente:",
        opcoes: [
            "a) Está com bastante raiva.",
            "b) Não se importa com a resposta.",
            "c) É cordial, simpática e educada.",
            "d) Demonstra arrogância.",
        ],
        respostaCorreta: "c) É cordial, simpática e educada.",
        explicacao: "Resposta baseada no conteúdo dos capítulos 14 e 15.",
        tipo: "multipla_escolha"
    },
    {
        pergunta: "O fabricante das canetas solicita que a cliente envie fotos do cupom fiscal e:",
        opcoes: [
            "a) De sua filha.",
            "b) Do site da compra.",
            "c) Das canetas.",
            "d) Do e-mail de reclamação.",
        ],
        respostaCorreta: "c) Das canetas.",
        explicacao: "Resposta baseada no conteúdo dos capítulos 14 e 15.",
        tipo: "multipla_escolha"
    },
    {
        pergunta: "De acordo com as informações gerais do capítulo, o que a estrutura de uma reclamação geralmente apresenta no seu começo?",
        opcoes: [
            "a) O corpo do texto e a despedida.",
            "b) A identificação do cliente e uma saudação.",
            "c) Apenas a solução esperada.",
            "d) O título do produto e a data.",
        ],
        respostaCorreta: "b) A identificação do cliente e uma saudação.",
        explicacao: "Resposta baseada no conteúdo dos capítulos 14 e 15.",
        tipo: "multipla_escolha"
    },
    {
        pergunta: "A expressão "Olho vivo" no título de uma seção significa o mesmo que:",
        opcoes: [
            "a) Ter e-mail e telefone.",
            "b) Ter atenção e ser um consumidor consciente.",
            "c) Ter olhos grandes.",
            "d) Ser criança.",
        ],
        respostaCorreta: "b) Ter atenção e ser um consumidor consciente.",
        explicacao: "Resposta baseada no conteúdo dos capítulos 14 e 15.",
        tipo: "multipla_escolha"
    },
    {
        pergunta: "Por que é importante ter conhecimento das quatro operações matemáticas (adição, subtração, multiplicação e divisão) para exercer os direitos do consumidor?",
        opcoes: [
            "a) Para poder vender produtos.",
            "b) Porque é difícil defender os direitos sem saber fazer cálculos de preço e troco.",
            "c) Para saber o dia do pagamento.",
            "d) Para entender o poema visual.",
        ],
        respostaCorreta: "b) Porque é difícil defender os direitos sem saber fazer cálculos de preço e troco.",
        explicacao: "Resposta baseada no conteúdo dos capítulos 14 e 15.",
        tipo: "multipla_escolha"
    },
    {
        pergunta: "Ao observar a cena na página 1, que produto parece ter apresentado problema?",
        opcoes: [
            "a) A roupa das crianças.",
            "b) As canetas ou material para desenhar.",
            "c) O laptop.",
            "d) A cadeira.",
        ],
        respostaCorreta: "b) As canetas ou material para desenhar.",
        explicacao: "Resposta baseada no conteúdo dos capítulos 14 e 15.",
        tipo: "multipla_escolha"
    },
    {
        pergunta: "O círculo vermelho no poema "Falta de Sorte" cria uma relação visual com:",
        opcoes: [
            "a) A cor do e-mail do fabricante.",
            "b) A cor dos lápis de cor quebrados.",
            "c) A bandeira do Japão, país para onde o eu lírico quer fugir.",
            "d) A cor da letra \"i\" da palavra \"cai\".",
        ],
        respostaCorreta: "c) A bandeira do Japão, país para onde o eu lírico quer fugir.",
        explicacao: "Resposta baseada no conteúdo dos capítulos 14 e 15.",
        tipo: "multipla_escolha"
    },
    {
        pergunta: "Na frase: "O origami é uma arte muito praticada no Japão", o sinal de pontuação utilizado é o Ponto Final (.). Qual tipo de frase essa pontuação indica?",
        opcoes: [
            "a) Interrogativa.",
            "b) Negativa.",
            "c) Afirmativa.",
            "d) Exclamativa.",
        ],
        respostaCorreta: "c) Afirmativa.",
        explicacao: "Resposta baseada no conteúdo dos capítulos 14 e 15.",
        tipo: "multipla_escolha"
    },
    {
        pergunta: "Qual é a frase que expressa uma interrogação e uma negação ao mesmo tempo?",
        opcoes: [
            "a) Que problema!",
            "b) Você não viu o cupom fiscal?",
            "c) O produto nunca estragou.",
            "d) Nós resolvemos o problema.",
        ],
        respostaCorreta: "b) Você não viu o cupom fiscal?",
        explicacao: "Resposta baseada no conteúdo dos capítulos 14 e 15.",
        tipo: "multipla_escolha"
    },
    {
        pergunta: "A frase "Que bonito esse origami!" é um exemplo de Frase Exclamativa. Qual sinal de pontuação é usado ao final dessa frase?",
        opcoes: [
            "a) Ponto Final.",
            "b) Ponto de Interrogação.",
            "c) Ponto de Exclamação.",
            "d) Vírgula.",
        ],
        respostaCorreta: "c) Ponto de Exclamação.",
        explicacao: "Resposta baseada no conteúdo dos capítulos 14 e 15.",
        tipo: "multipla_escolha"
    },
    {
        pergunta: "Se a frase é "Eu comprei um pacote de canetas", e fosse transformada em uma Frase Interrogativa, como ficaria a pontuação?",
        opcoes: [
            "a) Eu comprei um pacote de canetas!",
            "b) Eu comprei um pacote de canetas?",
            "c) Eu comprei um pacote de canetas.",
            "d) Eu comprei um pacote de canetas...",
        ],
        respostaCorreta: "b) Eu comprei um pacote de canetas?",
        explicacao: "Resposta baseada no conteúdo dos capítulos 14 e 15.",
        tipo: "multipla_escolha"
    },
    {
        pergunta: "Qual é o propósito da Frase Negativa?",
        opcoes: [
            "a) Fazer um questionamento.",
            "b) Declarar ou informar algo.",
            "c) Fazer uma negação, usando não ou nunca.",
            "d) Transmitir surpresa.",
        ],
        respostaCorreta: "c) Fazer uma negação, usando não ou nunca.",
        explicacao: "Resposta baseada no conteúdo dos capítulos 14 e 15.",
        tipo: "multipla_escolha"
    },
    {
        pergunta: "O trecho "Hoje estou sem sorte. Tudo me cai da mão." utiliza o Ponto Final. Qual tipo de frase é esta, predominante no trecho?",
        opcoes: [
            "a) Interrogativa.",
            "b) Exclamativa.",
            "c) Afirmativa.",
            "d) Negativa.",
        ],
        respostaCorreta: "c) Afirmativa.",
        explicacao: "Resposta baseada no conteúdo dos capítulos 14 e 15.",
        tipo: "multipla_escolha"
    },
    {
        pergunta: "Qual a pontuação correta para a frase: "Com que roupa você vai"?",
        opcoes: [
            "a) Com que roupa você vai!",
            "b) Com que roupa você vai.",
            "c) Com que roupa você vai?",
            "d) Com que roupa você vai...",
        ],
        respostaCorreta: "c) Com que roupa você vai?",
        explicacao: "Resposta baseada no conteúdo dos capítulos 14 e 15.",
        tipo: "multipla_escolha"
    },
    {
        pergunta: "Qual tipo de frase tem a função de transmitir emoções como surpresa, alegria ou espanto?",
        opcoes: [
            "a) Afirmativa.",
            "b) Negativa.",
            "c) Interrogativa.",
            "d) Exclamativa.",
        ],
        respostaCorreta: "d) Exclamativa.",
        explicacao: "Resposta baseada no conteúdo dos capítulos 14 e 15.",
        tipo: "multipla_escolha"
    },
    {
        pergunta: "Qual sinal de pontuação é adequado para expressar surpresa na frase: "Como eu estou feliz"?",
        opcoes: [
            "a) Ponto Final (.).",
            "b) Ponto de Interrogação (?).",
            "c) Ponto de Exclamação (!).",
            "d) Vírgula (,).",
        ],
        respostaCorreta: "c) Ponto de Exclamação (!).",
        explicacao: "Resposta baseada no conteúdo dos capítulos 14 e 15.",
        tipo: "multipla_escolha"
    },
    {
        pergunta: "A frase "Nunca fiz um poema visual" é um exemplo de Frase:",
        opcoes: [
            "a) Afirmativa.",
            "b) Interrogativa.",
            "c) Negativa.",
            "d) Exclamativa.",
        ],
        respostaCorreta: "c) Negativa.",
        explicacao: "Resposta baseada no conteúdo dos capítulos 14 e 15.",
        tipo: "multipla_escolha"
    },
    {
        pergunta: "O Ponto Final (.), Ponto de Interrogação (?) e Ponto de Exclamação (!) são importantes para:",
        opcoes: [
            "a) Deixar o texto mais bonito.",
            "b) Sinalizar os sentidos do texto escrito.",
            "c) Usar a regra M antes de P e B.",
            "d) Indicar a cor do origami.",
        ],
        respostaCorreta: "b) Sinalizar os sentidos do texto escrito.",
        explicacao: "Resposta baseada no conteúdo dos capítulos 14 e 15.",
        tipo: "multipla_escolha"
    },
    {
        pergunta: "Se a frase "O origami não é praticado apenas no Brasil" fosse transformada em uma Frase Interrogativa, como ficaria?",
        opcoes: [
            "a) O origami não é praticado apenas no Brasil.",
            "b) O origami não é praticado apenas no Brasil!",
            "c) O origami é praticado apenas no Brasil?",
            "d) Que origami lindo!",
        ],
        respostaCorreta: "c) O origami é praticado apenas no Brasil?",
        explicacao: "Resposta baseada no conteúdo dos capítulos 14 e 15.",
        tipo: "multipla_escolha"
    },
    {
        pergunta: "Qual é a função principal do Ponto Final (.)?",
        opcoes: [
            "a) Indicar uma pergunta.",
            "b) Indicar uma emoção.",
            "c) Indicar o final de uma frase e de uma ideia.",
            "d) Separar elementos em uma lista.",
        ],
        respostaCorreta: "c) Indicar o final de uma frase e de uma ideia.",
        explicacao: "Resposta baseada no conteúdo dos capítulos 14 e 15.",
        tipo: "multipla_escolha"
    },
    {
        pergunta: "A frase "Eu encontrei minha amiga no parque" é um exemplo de Frase:",
        opcoes: [
            "a) Exclamativa, pois transmite alegria.",
            "b) Interrogativa, pois faz uma pergunta.",
            "c) Afirmativa, pois declara algo.",
            "d) Negativa, pois falta a palavra nunca.",
        ],
        respostaCorreta: "c) Afirmativa, pois declara algo.",
        explicacao: "Resposta baseada no conteúdo dos capítulos 14 e 15.",
        tipo: "multipla_escolha"
    },
    {
        pergunta: "Qual sinal de pontuação é adequado para expressar surpresa na frase: "Como eu estou feliz"?",
        opcoes: [
            "a) Ponto Final (.).",
            "b) Ponto de Interrogação (?).",
            "c) Ponto de Exclamação (!).",
            "d) Vírgula (,).",
        ],
        respostaCorreta: "c) Ponto de Exclamação (!).",
        explicacao: "Resposta baseada no conteúdo dos capítulos 14 e 15.",
        tipo: "multipla_escolha"
    },
    {
        pergunta: "Na frase: "Para não perder a cabeça", a presença do não torna essa frase:",
        opcoes: [
            "a) Interrogativa.",
            "b) Negativa.",
            "c) Afirmativa.",
            "d) Exclamativa.",
        ],
        respostaCorreta: "b) Negativa.",
        explicacao: "Resposta baseada no conteúdo dos capítulos 14 e 15.",
        tipo: "multipla_escolha"
    },
    {
        pergunta: "Qual é a função do Ponto de Interrogação (?) na frase: "Você viu meu cachorro?"?",
        opcoes: [
            "a) Indicar alegria.",
            "b) Indicar pergunta.",
            "c) Indicar o fim da história.",
            "d) Indicar negação.",
        ],
        respostaCorreta: "b) Indicar pergunta.",
        explicacao: "Resposta baseada no conteúdo dos capítulos 14 e 15.",
        tipo: "multipla_escolha"
    },
    {
        pergunta: "Se uma empresa escreve a frase: "Agradecemos o seu contato e nos mantemos à disposição", qual é a pontuação mais adequada para finalizar?",
        opcoes: [
            "a) Ponto de Exclamação, para mostrar surpresa.",
            "b) Ponto Final, para indicar o final de uma afirmação.",
            "c) Ponto de Interrogação, para fazer uma pergunta.",
            "d) Vírgula.",
        ],
        respostaCorreta: "b) Ponto Final, para indicar o final de uma afirmação.",
        explicacao: "Resposta baseada no conteúdo dos capítulos 14 e 15.",
        tipo: "multipla_escolha"
    },
    {
        pergunta: "Qual é a função do Ponto de Exclamação (!) na frase: "Que origami incrível esse que você fez"?",
        opcoes: [
            "a) Indicar pergunta.",
            "b) Indicar admiração ou espanto.",
            "c) Indicar negação.",
            "d) Indicar o final da frase.",
        ],
        respostaCorreta: "b) Indicar admiração ou espanto.",
        explicacao: "Resposta baseada no conteúdo dos capítulos 14 e 15.",
        tipo: "multipla_escolha"
    },
    {
        pergunta: "A frase "Primeiro vamos tentar entender um pouco sobre a história do origami?" expressa:",
        opcoes: [
            "a) Negação.",
            "b) Afirmação.",
            "c) Exclamação.",
            "d) Interrogação.",
        ],
        respostaCorreta: "d) Interrogação.",
        explicacao: "Resposta baseada no conteúdo dos capítulos 14 e 15.",
        tipo: "multipla_escolha"
    },
    {
        pergunta: "Qual a função principal dos Pronomes Possessivos?",
        opcoes: [
            "a) Evitar repetição.",
            "b) Indicar ação.",
            "c) Indicar posse.",
            "d) Indicar tempo.",
        ],
        respostaCorreta: "c) Indicar posse.",
        explicacao: "Resposta baseada no conteúdo dos capítulos 14 e 15.",
        tipo: "multipla_escolha"
    },
    {
        pergunta: "Na frase "A minha filha se chama Letícia", qual a pessoa do discurso que o pronome possessivo minha se refere?",
        opcoes: [
            "a) 3ª pessoa do plural (Elas).",
            "b) 2ª pessoa do singular (Tu).",
            "c) 1ª pessoa do singular (Eu).",
            "d) 3ª pessoa do singular (Ela).",
        ],
        respostaCorreta: "c) 1ª pessoa do singular (Eu).",
        explicacao: "Resposta baseada no conteúdo dos capítulos 14 e 15.",
        tipo: "multipla_escolha"
    },
    {
        pergunta: "O pronome meu é um exemplo de pronome:",
        opcoes: [
            "a) Pessoal.",
            "b) Interrogativo.",
            "c) Possessivo.",
            "d) Indefinido.",
        ],
        respostaCorreta: "c) Possessivo.",
        explicacao: "Resposta baseada no conteúdo dos capítulos 14 e 15.",
        tipo: "multipla_escolha"
    },
    {
        pergunta: "Qual é o pronome possessivo adequado para se referir a um objeto que pertence a "Eu e Laura"?",
        opcoes: [
            "a) Meu",
            "b) Nossa",
            "c) Sua",
            "d) Teu",
        ],
        respostaCorreta: "b) Nossa",
        explicacao: "Resposta baseada no conteúdo dos capítulos 14 e 15.",
        tipo: "multipla_escolha"
    },
    {
        pergunta: "Na frase: "Meu braço fica manchado", o pronome possessivo é:",
        opcoes: [
            "a) Braço.",
            "b) Fica.",
            "c) Manchado.",
            "d) Meu.",
        ],
        respostaCorreta: "d) Meu.",
        explicacao: "Resposta baseada no conteúdo dos capítulos 14 e 15.",
        tipo: "multipla_escolha"
    },
    {
        pergunta: "Qual frase NÃO contém um pronome possessivo?",
        opcoes: [
            "a) Nossa reclamação é simples: queremos nossos direitos.",
            "b) Teus pais devem abrir uma reclamação por causa das tuas canetas.",
            "c) Eu gostaria de ter sua opinião sobre nosso produto.",
            "d) Comprei uma carteira e ela começou a descascar.",
        ],
        respostaCorreta: "d) Comprei uma carteira e ela começou a descascar.",
        explicacao: "Resposta baseada no conteúdo dos capítulos 14 e 15.",
        tipo: "multipla_escolha"
    },
    {
        pergunta: "Qual pronome possessivo deve ser usado por Helena para se referir ao pacote de canetas que pertence a ela?",
        opcoes: [
            "a) Meu",
            "b) Sua",
            "c) Nosso",
            "d) Vosso",
        ],
        respostaCorreta: "a) Meu",
        explicacao: "Resposta baseada no conteúdo dos capítulos 14 e 15.",
        tipo: "multipla_escolha"
    },
    {
        pergunta: "O Pronome Possessivo Nosso se refere ao possuidor na:",
        opcoes: [
            "a) 3ª pessoa do singular.",
            "b) 2ª pessoa do plural.",
            "c) 1ª pessoa do plural.",
            "d) 3ª pessoa do plural.",
        ],
        respostaCorreta: "c) 1ª pessoa do plural.",
        explicacao: "Resposta baseada no conteúdo dos capítulos 14 e 15.",
        tipo: "multipla_escolha"
    },
    {
        pergunta: "Qual pronome possessivo indica posse na frase: "Veja nossas dicas"?",
        opcoes: [
            "a) Veja",
            "b) Dicas",
            "c) Nossas",
            "d) Seus",
        ],
        respostaCorreta: "c) Nossas",
        explicacao: "Resposta baseada no conteúdo dos capítulos 14 e 15.",
        tipo: "multipla_escolha"
    },
    {
        pergunta: "Qual é o pronome possessivo que se refere à 3ª pessoa (Ele/Ela)?",
        opcoes: [
            "a) Nosso",
            "b) Tua",
            "c) Seu/Sua",
            "d) Meu",
        ],
        respostaCorreta: "c) Seu/Sua",
        explicacao: "Resposta baseada no conteúdo dos capítulos 14 e 15.",
        tipo: "multipla_escolha"
    },
    {
        pergunta: "Qual pronome possessivo indica posse na frase: "A nossa bolsa está estragada"?",
        opcoes: [
            "a) Tempo",
            "b) Posse",
            "c) Ação",
            "d) Pessoa",
        ],
        respostaCorreta: "b) Posse",
        explicacao: "Resposta baseada no conteúdo dos capítulos 14 e 15.",
        tipo: "multipla_escolha"
    },
    {
        pergunta: "Em qual das opções abaixo, o pronome não está sendo usado para substituir um substantivo?",
        opcoes: [
            "a) Nós percebemos o problema.",
            "b) A tinta estava derramada. Ela sujou a tampa.",
            "c) Eu fui à loja.",
            "d) Meu meu celular está com problema.",
        ],
        respostaCorreta: "d) Meu meu celular está com problema.",
        explicacao: "Resposta baseada no conteúdo dos capítulos 14 e 15.",
        tipo: "multipla_escolha"
    },
    {
        pergunta: "Qual pronome possessivo deve ser usado por um cliente para se referir à sua experiência de compra (feminino singular)?",
        opcoes: [
            "a) Meu",
            "b) Minha",
            "c) Meu (masculino)",
            "d) Nossas",
        ],
        respostaCorreta: "b) Minha",
        explicacao: "Resposta baseada no conteúdo dos capítulos 14 e 15.",
        tipo: "multipla_escolha"
    },
    {
        pergunta: "Qual é o pronome possessivo adequado para a 2ª pessoa do plural (Vós)?",
        opcoes: [
            "a) Vossa",
            "b) Nossa",
            "c) Minha",
            "d) Sua",
        ],
        respostaCorreta: "a) Vossa",
        explicacao: "Resposta baseada no conteúdo dos capítulos 14 e 15.",
        tipo: "multipla_escolha"
    },
    {
        pergunta: "Na frase: "Minha mãe comprou [..] canetas", o pronome possessivo é:",
        opcoes: [
            "a) Mãe",
            "b) Comprou",
            "c) Minha",
            "d) Canetas",
        ],
        respostaCorreta: "c) Minha",
        explicacao: "Resposta baseada no conteúdo dos capítulos 14 e 15.",
        tipo: "multipla_escolha"
    },
    {
        pergunta: "Qual pronome possessivo indica a posse de um objeto que pertence à 2ª pessoa do singular (Tu)?",
        opcoes: [
            "a) Nossa",
            "b) Meu",
            "c) Teus/Tuas",
            "d) Seu/Sua",
        ],
        respostaCorreta: "c) Teus/Tuas",
        explicacao: "Resposta baseada no conteúdo dos capítulos 14 e 15.",
        tipo: "multipla_escolha"
    },
    {
        pergunta: "Na frase "Eu gostaria de ter sua opinião sobre nosso produto", quantos pronomes possessivos existem?",
        opcoes: [
            "a) Um.",
            "b) Dois.",
            "c) Três.",
            "d) Quatro.",
        ],
        respostaCorreta: "b) Dois.",
        explicacao: "Resposta baseada no conteúdo dos capítulos 14 e 15.",
        tipo: "multipla_escolha"
    },
    {
        pergunta: "Qual frase utiliza o pronome possessivo corretamente?",
        opcoes: [
            "a) As sua canetas estavam com defeito.",
            "b) Meus pais devem ir à loja.",
            "c) Nosso solução é a melhor.",
            "d) Tua pedido foi entregue.",
        ],
        respostaCorreta: "b) Meus pais devem ir à loja.",
        explicacao: "Resposta baseada no conteúdo dos capítulos 14 e 15.",
        tipo: "multipla_escolha"
    },
    {
        pergunta: "O pronome possessivo Minhas deve ser usado para indicar posse de um substantivo no:",
        opcoes: [
            "a) Singular e feminino.",
            "b) Singular e masculino.",
            "c) Plural e feminino.",
            "d) Plural e masculino.",
        ],
        respostaCorreta: "c) Plural e feminino.",
        explicacao: "Resposta baseada no conteúdo dos capítulos 14 e 15.",
        tipo: "multipla_escolha"
    },
    {
        pergunta: "Qual pronome possessivo deve ser usado pelo vendedor para se referir à luminária que a cliente Luísa levou para consertar?",
        opcoes: [
            "a) Minha",
            "b) Nossa",
            "c) Sua",
            "d) Teu",
        ],
        respostaCorreta: "c) Sua",
        explicacao: "Resposta baseada no conteúdo dos capítulos 14 e 15.",
        tipo: "multipla_escolha"
    },
    {
        pergunta: "Na palavra "co___pra", qual letra deve ser usada para completar corretamente?",
        opcoes: [
            "a) N",
            "b) M",
            "c) P",
            "d) B",
        ],
        respostaCorreta: "b) M",
        explicacao: "Resposta baseada no conteúdo dos capítulos 14 e 15.",
        tipo: "multipla_escolha"
    },
    {
        pergunta: "Qual das palavras abaixo NÃO segue a regra de usar M antes de P ou B?",
        opcoes: [
            "a) Lâ___pada",
            "b) Pa___peis",
            "c) Es___panto",
            "d) Ca___to",
        ],
        respostaCorreta: "d) Ca___to",
        explicacao: "Resposta baseada no conteúdo dos capítulos 14 e 15.",
        tipo: "multipla_escolha"
    },
    {
        pergunta: "Qual é a regra gramatical para o uso da letra M antes de consoantes?",
        opcoes: [
            "a) M é usado antes de T e S.",
            "b) M é usado antes de P e B.",
            "c) M é usado antes de todas as consoantes.",
            "d) M é usado no final das palavras.",
        ],
        respostaCorreta: "b) M é usado antes de P e B.",
        explicacao: "Resposta baseada no conteúdo dos capítulos 14 e 15.",
        tipo: "multipla_escolha"
    },
    {
        pergunta: "Na palavra "bo___deiro", a letra correta para o espaço é:",
        opcoes: [
            "a) N",
            "b) M",
            "c) V",
            "d) R",
        ],
        respostaCorreta: "a) N",
        explicacao: "Resposta baseada no conteúdo dos capítulos 14 e 15.",
        tipo: "multipla_escolha"
    },
    {
        pergunta: "Na palavra "bo___ba", qual letra deve ser usada?",
        opcoes: [
            "a) N",
            "b) M",
            "c) S",
            "d) P",
        ],
        respostaCorreta: "b) M",
        explicacao: "Resposta baseada no conteúdo dos capítulos 14 e 15.",
        tipo: "multipla_escolha"
    },
    {
        pergunta: "Qual das frases abaixo está CORRETA em relação à regra de M antes de P e B?",
        opcoes: [
            "a) Eu enviei o e-mail no tempo certo.",
            "b) O envelopamento está completo.",
            "c) A compra estava no comferto.",
            "d) Ela espantou-se com o inverno.",
        ],
        respostaCorreta: "a) Eu enviei o e-mail no tempo certo.",
        explicacao: "Resposta baseada no conteúdo dos capítulos 14 e 15.",
        tipo: "multipla_escolha"
    },
    {
        pergunta: "Qual palavra está escrita corretamente com M antes de P ou B?",
        opcoes: [
            "a) Encontrado",
            "b) Bomba",
            "c) Consertar",
            "d) Tentar",
        ],
        respostaCorreta: "b) Bomba",
        explicacao: "Resposta baseada no conteúdo dos capítulos 14 e 15.",
        tipo: "multipla_escolha"
    },
    {
        pergunta: "Em qual das palavras abaixo, o espaço deve ser preenchido com N?",
        opcoes: [
            "a) Bo___deiro",
            "b) Co___prar",
            "c) Es___panto",
            "d) Te___tar",
        ],
        respostaCorreta: "d) Te___tar",
        explicacao: "Resposta baseada no conteúdo dos capítulos 14 e 15.",
        tipo: "multipla_escolha"
    },
    {
        pergunta: "Na palavra "te___po", qual letra deve ser usada?",
        opcoes: [
            "a) N",
            "b) M",
            "c) R",
            "d) S",
        ],
        respostaCorreta: "b) M",
        explicacao: "Resposta baseada no conteúdo dos capítulos 14 e 15.",
        tipo: "multipla_escolha"
    },
    {
        pergunta: "A regra M antes de P e B se aplica à palavra:",
        opcoes: [
            "a) Antes.",
            "b) Impresso.",
            "c) Contar.",
            "d) Santo.",
        ],
        respostaCorreta: "b) Impresso.",
        explicacao: "Resposta baseada no conteúdo dos capítulos 14 e 15.",
        tipo: "multipla_escolha"
    },
    {
        pergunta: "Qual palavra completa corretamente a frase: "Eu vou co___prar um brinquedo novo"?",
        opcoes: [
            "a) N",
            "b) M",
            "c) S",
            "d) R",
        ],
        respostaCorreta: "b) M",
        explicacao: "Resposta baseada no conteúdo dos capítulos 14 e 15.",
        tipo: "multipla_escolha"
    },
    {
        pergunta: "Qual é a única palavra abaixo que está escrita com M antes da consoante seguinte?",
        opcoes: [
            "a) Construir",
            "b) Tentar",
            "c) Lâmpada",
            "d) Canto",
        ],
        respostaCorreta: "c) Lâmpada",
        explicacao: "Resposta baseada no conteúdo dos capítulos 14 e 15.",
        tipo: "multipla_escolha"
    },
    {
        pergunta: "Para a palavra "bo___beiro", qual letra deve ser usada?",
        opcoes: [
            "a) N",
            "b) M",
            "c) V",
            "d) R",
        ],
        respostaCorreta: "b) M",
        explicacao: "Resposta baseada no conteúdo dos capítulos 14 e 15.",
        tipo: "multipla_escolha"
    },
    {
        pergunta: "Qual palavra usa a letra N antes da consoante T?",
        opcoes: [
            "a) Bombeiro",
            "b) Espanto",
            "c) Tentar",
            "d) Lâmpada",
        ],
        respostaCorreta: "c) Tentar",
        explicacao: "Resposta baseada no conteúdo dos capítulos 14 e 15.",
        tipo: "multipla_escolha"
    },
    {
        pergunta: "Na palavra "co___putador", a letra correta é:",
        opcoes: [
            "a) N",
            "b) M",
            "c) P",
            "d) B",
        ],
        respostaCorreta: "b) M",
        explicacao: "Resposta baseada no conteúdo dos capítulos 14 e 15.",
        tipo: "multipla_escolha"
    },
    {
        pergunta: "A palavra "espalhando" é escrita com N porque:",
        opcoes: [
            "a) O dígrafo LH vem antes.",
            "b) A letra seguinte ao som nasal é L, e o N é usado antes de L.",
            "c) A letra seguinte ao som nasal é D, e D exige N.",
            "d) A letra seguinte ao som nasal é H.",
        ],
        respostaCorreta: "b) A letra seguinte ao som nasal é L, e o N é usado antes de L.",
        explicacao: "Resposta baseada no conteúdo dos capítulos 14 e 15.",
        tipo: "multipla_escolha"
    },
    {
        pergunta: "Qual a letra correta para "co___prar"?",
        opcoes: [
            "a) N",
            "b) M",
            "c) S",
            "d) R",
        ],
        respostaCorreta: "b) M",
        explicacao: "Resposta baseada no conteúdo dos capítulos 14 e 15.",
        tipo: "multipla_escolha"
    },
    {
        pergunta: "Se a palavra primitiva é pomba, qual o derivado que segue a regra M antes de P/B?",
        opcoes: [
            "a) Pombinha",
            "b) Pombal",
            "c) Pombeiro",
            "d) Pombo",
        ],
        respostaCorreta: "a) Pombinha",
        explicacao: "Resposta baseada no conteúdo dos capítulos 14 e 15.",
        tipo: "multipla_escolha"
    },
    {
        pergunta: "Qual a letra correta para "e___xemplo"?",
        opcoes: [
            "a) N",
            "b) M",
            "c) X",
            "d) S",
        ],
        respostaCorreta: "c) X",
        explicacao: "Resposta baseada no conteúdo dos capítulos 14 e 15.",
        tipo: "multipla_escolha"
    },
    {
        pergunta: "Qual das palavras abaixo está incorreta quanto ao uso de M e N?",
        opcoes: [
            "a) Comprei",
            "b) Bambolê",
            "c) Enviei",
            "d) Canpo",
        ],
        respostaCorreta: "b) Bambolê",
        explicacao: "Resposta baseada no conteúdo dos capítulos 14 e 15.",
        tipo: "multipla_escolha"
    },
    {
        pergunta: "Qual a função principal dos Pronomes Possessivos?",
        opcoes: [
            "a) Evitar repetição.",
            "b) Indicar ação.",
            "c) Indicar posse.",
            "d) Indicar tempo.",
        ],
        respostaCorreta: "c) Indicar posse.",
        explicacao: "Resposta baseada no conteúdo dos capítulos 14 e 15.",
        tipo: "multipla_escolha"
    },
    {
        pergunta: "Qual das frases abaixo apresenta um erro de Concordância Nominal?",
        opcoes: [
            "a) O caderno e a caneta nova.",
            "b) A caneta e o caderno novos.",
            "c) O caderno novo e a caneta nova.",
            "d) Os cadernos novos.",
        ],
        respostaCorreta: "b) A caneta e o caderno novos.",
        explicacao: "Resposta baseada no conteúdo dos capítulos 14 e 15.",
        tipo: "multipla_escolha"
    },
    {
        pergunta: "Qual é o tipo de frase que faz uma declaração ou informa algo, fazendo uma afirmação?",
        opcoes: [
            "a) Interrogativa",
            "b) Negativa",
            "c) Afirmativa",
            "d) Exclamativa",
        ],
        respostaCorreta: "b) Negativa",
        explicacao: "Resposta baseada no conteúdo dos capítulos 14 e 15.",
        tipo: "multipla_escolha"
    },
    {
        pergunta: "Qual das ações abaixo faz parte da etapa de Revisão de um texto de reclamação?",
        opcoes: [
            "a) Escolher o produto que será reclamado.",
            "b) Verificar se o problema e a solicitação de solução foram apresentados de forma clara.",
            "c) Identificar quem é o vendedor.",
            "d) Decidir se o texto será enviado por e-mail ou carta.",
        ],
        respostaCorreta: "c) Identificar quem é o vendedor.",
        explicacao: "Resposta baseada no conteúdo dos capítulos 14 e 15.",
        tipo: "multipla_escolha"
    },
    {
        pergunta: "Qual a função do Ponto de Exclamação (!) em uma frase como "Que lindo dia!"?",
        opcoes: [
            "a) Indicar uma pergunta.",
            "b) Indicar uma afirmação.",
            "c) Indicar emoção (surpresa, alegria).",
            "d) Indicar o final da frase.",
        ],
        respostaCorreta: "c) Indicar emoção (surpresa, alegria).",
        explicacao: "Resposta baseada no conteúdo dos capítulos 14 e 15.",
        tipo: "multipla_escolha"
    },
    {
        pergunta: "Em qual das palavras abaixo deve ser usada a letra N, e NÃO a letra M, antes da consoante seguinte?",
        opcoes: [
            "a) Bo____ba",
            "b) Co____prar",
            "c) E____pacote",
            "d) Ca____to",
        ],
        respostaCorreta: "b) Co____prar",
        explicacao: "Resposta baseada no conteúdo dos capítulos 14 e 15.",
        tipo: "multipla_escolha"
    },
    {
        pergunta: "Na despedida de uma reclamação, qual é o tom que deve ser demonstrado?",
        opcoes: [
            "a) Raiva e indignação.",
            "b) Arrogância e exigência.",
            "c) Cordialidade e respeito.",
            "d) Tristeza e desânimo.",
        ],
        respostaCorreta: "c) Cordialidade e respeito.",
        explicacao: "Resposta baseada no conteúdo dos capítulos 14 e 15.",
        tipo: "multipla_escolha"
    },
    {
        pergunta: "Qual frase utiliza corretamente o verbo no passado para o sujeito "Laura e eu"?",
        opcoes: [
            "a) Laura e eu percebem o problema.",
            "b) Laura e eu percebemos o problema.",
            "c) Laura e eu percebeu o problema.",
            "d) Laura e eu perceberei o problema.",
        ],
        respostaCorreta: "d) Laura e eu perceberei o problema.",
        explicacao: "Resposta baseada no conteúdo dos capítulos 14 e 15.",
        tipo: "multipla_escolha"
    },
    {
        pergunta: "Qual das frases abaixo é um exemplo de Frase Interrogativa?",
        opcoes: [
            "a) Eu não vou viajar.",
            "b) Você gostou do origami?",
            "c) Que susto!",
            "d) Eu gosto de origami.",
        ],
        respostaCorreta: "b) Você gostou do origami?",
        explicacao: "Resposta baseada no conteúdo dos capítulos 14 e 15.",
        tipo: "multipla_escolha"
    },
    {
        pergunta: "O que a cliente Laura fez que se alinha com a dica de "Olho Vivo" de guardar o recibo/cupom fiscal?",
        opcoes: [
            "a) Ela tentou ligar para a loja.",
            "b) Ela se apresentou como Laura Silva.",
            "c) Ela disse: \"Estou com o cupom fiscal da compra e com as canetas estouradas\".",
            "d) Ela reclamou no site \"Fala, consumidor\".",
        ],
        respostaCorreta: "c) Ela disse: \",
        explicacao: "Resposta baseada no conteúdo dos capítulos 14 e 15.",
        tipo: "multipla_escolha"
    },
    {
        pergunta: "Qual tipo de texto tem o propósito de instruir o leitor a fazer algo?",
        opcoes: [
            "a) Conto de fadas.",
            "b) Manual de instruções ou tutorial.",
            "c) Poema.",
            "d) Reclamação.",
        ],
        respostaCorreta: "c) Poema.",
        explicacao: "Resposta baseada no conteúdo dos capítulos 14 e 15.",
        tipo: "multipla_escolha"
    },
    {
        pergunta: "Na frase: "Os seus pais devem abrir uma reclamação", o pronome destacado (seus) é um pronome:",
        opcoes: [
            "a) Pessoal.",
            "b) Indefinido.",
            "c) Possessivo.",
            "d) Interrogativo.",
        ],
        respostaCorreta: "b) Indefinido.",
        explicacao: "Resposta baseada no conteúdo dos capítulos 14 e 15.",
        tipo: "multipla_escolha"
    },
    {
        pergunta: "Qual das palavras abaixo deve ser usada a letra M antes da consoante seguinte?",
        opcoes: [
            "a) Mo____tante",
            "b) I____diota",
            "c) Te____po",
            "d) Co____struir",
        ],
        respostaCorreta: "c) Te____po",
        explicacao: "Resposta baseada no conteúdo dos capítulos 14 e 15.",
        tipo: "multipla_escolha"
    },
    {
        pergunta: "O que a Concordância Verbal exige na frase "Os alunos [verbo] um poema"?",
        opcoes: [
            "a) Que o verbo esteja no singular (aluno escreveu).",
            "b) Que o verbo esteja no plural e no passado (alunos escreveram).",
            "c) Que o verbo seja sempre \"é\".",
            "d) Que o verbo concorde com o objeto (aluno escreve o livro).",
        ],
        respostaCorreta: "c) Que o verbo seja sempre \",
        explicacao: "Resposta baseada no conteúdo dos capítulos 14 e 15.",
        tipo: "multipla_escolha"
    },
    {
        pergunta: "Um dos verbos no passado mais comuns em relatos de reclamação é:",
        opcoes: [
            "a) Comprar.",
            "b) Comprarei.",
            "c) Comprei.",
            "d) Comprando.",
        ],
        respostaCorreta: "b) Comprarei.",
        explicacao: "Resposta baseada no conteúdo dos capítulos 14 e 15.",
        tipo: "multipla_escolha"
    },
    {
        pergunta: "Na Concordância Nominal, na frase "Comprei uma bolsa e uma carteira nova", o adjetivo "nova" está:",
        opcoes: [
            "a) Correto, pois concorda com o substantivo mais próximo (\"carteira nova\").",
            "b) Correto, pois concorda com o sujeito da frase.",
            "c) Incorreto, pois deveria estar no plural (bolsa e carteira novas).",
            "d) Incorreto, pois o adjetivo deve vir antes dos substantivos.",
        ],
        respostaCorreta: "b) Correto, pois concorda com o sujeito da frase.",
        explicacao: "Resposta baseada no conteúdo dos capítulos 14 e 15.",
        tipo: "multipla_escolha"
    },
    {
        pergunta: "Qual a finalidade principal do e-mail ou formulário de reclamação?",
        opcoes: [
            "a) Mostrar ao vendedor que você é um cliente frequente.",
            "b) Solicitar uma solução para o defeito ou problema no produto/serviço.",
            "c) Contar uma história sobre sua vida.",
            "d) Fazer um desenho artístico.",
        ],
        respostaCorreta: "c) Contar uma história sobre sua vida.",
        explicacao: "Resposta baseada no conteúdo dos capítulos 14 e 15.",
        tipo: "multipla_escolha"
    },
    {
        pergunta: "Em qual das opções há um erro de Concordância Verbal?",
        opcoes: [
            "a) Nós fomos ao mercado.",
            "b) Eu comprei o livro.",
            "c) Eles ganhou o jogo.",
            "d) Tu és meu amigo.",
        ],
        respostaCorreta: "c) Eles ganhou o jogo.",
        explicacao: "Resposta baseada no conteúdo dos capítulos 14 e 15.",
        tipo: "multipla_escolha"
    },
    {
        pergunta: "Qual dos pronomes abaixo é um Pronome Pessoal?",
        opcoes: [
            "a) Seu",
            "b) Nossa",
            "c) Minha",
            "d) Ela.",
        ],
        respostaCorreta: "c) Minha",
        explicacao: "Resposta baseada no conteúdo dos capítulos 14 e 15.",
        tipo: "multipla_escolha"
    },
    {
        pergunta: "Na frase: "O time de futebol ganhou a partida", qual é o sujeito que o verbo ganhou concorda?",
        opcoes: [
            "a) A partida.",
            "b) Time de futebol.",
            "c) O.",
            "d) Futebol.",
        ],
        respostaCorreta: "b) Time de futebol.",
        explicacao: "Resposta baseada no conteúdo dos capítulos 14 e 15.",
        tipo: "multipla_escolha"
    },
    {
        pergunta: "Qual das frases abaixo expressa uma Negação de forma clara?",
        opcoes: [
            "a) Meu origami é simples.",
            "b) Eu gosto de origami.",
            "c) Eu não quero perder.",
            "d) Que lindo origami!",
        ],
        respostaCorreta: "c) Eu não quero perder.",
        explicacao: "Resposta baseada no conteúdo dos capítulos 14 e 15.",
        tipo: "multipla_escolha"
    },
    {
        pergunta: "Qual a importância de manter a Cordialidade e o Respeito em um texto de reclamação?",
        opcoes: [
            "a) Para que a empresa desista de resolver o problema.",
            "b) Para garantir que o texto não seja enviado.",
            "c) Para manter a comunicação eficaz e aumentar a chance de uma resposta positiva.",
            "d) Para usar o máximo de verbos no passado.",
        ],
        respostaCorreta: "c) Para manter a comunicação eficaz e aumentar a chance de uma resposta positiva.",
        explicacao: "Resposta baseada no conteúdo dos capítulos 14 e 15.",
        tipo: "multipla_escolha"
    },
    {
        pergunta: "Qual das ações é uma dica de "Olho Vivo" ao comprar roupas e calçados?",
        opcoes: [
            "a) Guardar o recibo.",
            "b) Não provar a roupa, mesmo que seja do seu número.",
            "c) Prová-los, mesmo que sejam do seu número.",
            "d) Deixar o celular no provador.",
        ],
        respostaCorreta: "c) Prová-los, mesmo que sejam do seu número.",
        explicacao: "Resposta baseada no conteúdo dos capítulos 14 e 15.",
        tipo: "multipla_escolha"
    },
    {
        pergunta: "O pronome pessoal "elas" em uma frase como "As canetas estavam com defeito, e elas vazaram" substitui:",
        opcoes: [
            "a) A cliente.",
            "b) A loja.",
            "c) O cupom fiscal.",
            "d) As canetas.",
        ],
        respostaCorreta: "d) As canetas.",
        explicacao: "Resposta baseada no conteúdo dos capítulos 14 e 15.",
        tipo: "multipla_escolha"
    },
    {
        pergunta: "Na frase: "A batedeira parou", o verbo está em qual tempo verbal?",
        opcoes: [
            "a) Presente",
            "b) Futuro",
            "c) Passado",
            "d) Indefinido",
        ],
        respostaCorreta: "c) Passado",
        explicacao: "Resposta baseada no conteúdo dos capítulos 14 e 15.",
        tipo: "multipla_escolha"
    },
    {
        pergunta: "Se a frase original é 'O meu braço fica manchado de marrom', e o sujeito for 'As minhas mãos', a Concordância Nominal correta seria:",
        opcoes: [
            "a) As minhas mãos ficam manchados de marrom.",
            "b) As minhas mãos ficam manchada de marrom.",
            "c) As minhas mãos ficam manchadas de marrom.",
            "d) As minhas mãos ficam manchado de marrom.",
        ],
        respostaCorreta: "c) As minhas mãos ficam manchadas de marrom.",
        explicacao: "Resposta baseada no conteúdo dos capítulos 14 e 15.",
        tipo: "multipla_escolha"
    },
    {
        pergunta: "Qual a regra de ortografia para preencher o espaço na palavra "e____pacote"?",
        opcoes: [
            "a) Usar N, pois P e B não estão presentes após o som nasal.",
            "b) Usar M, pois P está presente após o som nasal.",
            "c) Usar N, pois é a regra geral.",
            "d) Usar A.",
        ],
        respostaCorreta: "a) Usar N, pois P e B não estão presentes após o som nasal.",
        explicacao: "Resposta baseada no conteúdo dos capítulos 14 e 15.",
        tipo: "multipla_escolha"
    },
    {
        pergunta: "Qual das frases abaixo apresenta o uso correto da Concordância Verbal?",
        opcoes: [
            "a) Nós percebeu o valor errado.",
            "b) Eu e ele compramos o mesmo produto.",
            "c) Eles fui ao mercado.",
            "d) Tu somos amigos.",
        ],
        respostaCorreta: "b) Eu e ele compramos o mesmo produto.",
        explicacao: "Resposta baseada no conteúdo dos capítulos 14 e 15.",
        tipo: "multipla_escolha"
    },
    {
        pergunta: "Na frase: "Meu origami está pronto", o pronome possessivo é:",
        opcoes: [
            "a) Origami",
            "b) Está",
            "c) Meu",
            "d) Pronto",
        ],
        respostaCorreta: "c) Meu",
        explicacao: "Resposta baseada no conteúdo dos capítulos 14 e 15.",
        tipo: "multipla_escolha"
    },
    {
        pergunta: "Qual é o pronome possessivo que se refere à 2ª pessoa do singular (Tu)?",
        opcoes: [
            "a) Meu",
            "b) Nossa",
            "c) Teu",
            "d) Seu",
        ],
        respostaCorreta: "c) Teu",
        explicacao: "Resposta baseada no conteúdo dos capítulos 14 e 15.",
        tipo: "multipla_escolha"
    },
    {
        pergunta: "Qual a dica de consumo relacionada a verificar o preço na etiqueta e no caixa?",
        opcoes: [
            "a) Exigir a garantia.",
            "b) Conferir se o preço cobrado é o mesmo que está na etiqueta.",
            "c) Focar apenas no produto.",
            "d) Deixar o troco para o vendedor.",
        ],
        respostaCorreta: "b) Conferir se o preço cobrado é o mesmo que está na etiqueta.",
        explicacao: "Resposta baseada no conteúdo dos capítulos 14 e 15.",
        tipo: "multipla_escolha"
    },
    {
        pergunta: "Qual das frases abaixo apresenta um erro de Concordância Nominal?",
        opcoes: [
            "a) O caderno e a caneta nova.",
            "b) A caneta e o caderno novos.",
            "c) O caderno novo e a caneta nova.",
            "d) Os cadernos novos.",
        ],
        respostaCorreta: "a) O caderno e a caneta nova.",
        explicacao: "Resposta baseada no conteúdo dos capítulos 14 e 15.",
        tipo: "multipla_escolha"
    },
    {
        pergunta: "Qual das frases abaixo está no tempo futuro?",
        opcoes: [
            "a) Eu compro canetas todo mês.",
            "b) Eu comprei canetas ontem.",
            "c) Eu comprarei canetas amanhã.",
            "d) Eu comprava canetas.",
        ],
        respostaCorreta: "c) Eu comprarei canetas amanhã.",
        explicacao: "Resposta baseada no conteúdo dos capítulos 14 e 15.",
        tipo: "multipla_escolha"
    },
    {
        pergunta: "Qual é o tipo de texto que tem o propósito principal de narrar (contar) uma história?",
        opcoes: [
            "a) Texto de reclamação.",
            "b) Texto expositivo.",
            "c) Conto ou miniconto.",
            "d) Texto de instruções.",
        ],
        respostaCorreta: "c) Conto ou miniconto.",
        explicacao: "Resposta baseada no conteúdo dos capítulos 14 e 15.",
        tipo: "multipla_escolha"
    },
    {
        pergunta: "Qual a palavra que substitui o substantivo "canetas" na frase "As canetas estouraram. Elas estavam com defeito"?",
        opcoes: [
            "a) Ele",
            "b) Nós",
            "c) Elas",
            "d) Tu",
        ],
        respostaCorreta: "c) Elas",
        explicacao: "Resposta baseada no conteúdo dos capítulos 14 e 15.",
        tipo: "multipla_escolha"
    },
    {
        pergunta: "Qual frase apresenta um erro de Concordância Verbal?",
        opcoes: [
            "a) Os alunos estudamos para a prova.",
            "b) O aluno estuda para a prova.",
            "c) Nós estudamos para a prova.",
            "d) Eu estudei para a prova.",
        ],
        respostaCorreta: "a) Os alunos estudamos para a prova.",
        explicacao: "Resposta baseada no conteúdo dos capítulos 14 e 15.",
        tipo: "multipla_escolha"
    },
    {
        pergunta: "Qual dos pronomes abaixo indica posse?",
        opcoes: [
            "a) Tu",
            "b) Eles",
            "c) Sua",
            "d) Ela",
        ],
        respostaCorreta: "c) Sua",
        explicacao: "Resposta baseada no conteúdo dos capítulos 14 e 15.",
        tipo: "multipla_escolha"
    },
    {
        pergunta: "Se a frase original é 'Eu e ele fizemos um origami', e o verbo for passado para o futuro, qual seria a forma correta?",
        opcoes: [
            "a) Eu e ele fará um origami.",
            "b) Eu e ele fazerei um origami.",
            "c) Eu e ele faremos um origami.",
            "d) Eu e ele fazemos um origami.",
        ],
        respostaCorreta: "c) Eu e ele faremos um origami.",
        explicacao: "Resposta baseada no conteúdo dos capítulos 14 e 15.",
        tipo: "multipla_escolha"
    },
    {
        pergunta: "Qual é a última etapa na estrutura da escrita de uma reclamação?",
        opcoes: [
            "a) Saudação.",
            "b) Relato do problema.",
            "c) Edição e Revisão.",
            "d) Devolução do dinheiro.",
        ],
        respostaCorreta: "c) Edição e Revisão.",
        explicacao: "Resposta baseada no conteúdo dos capítulos 14 e 15.",
        tipo: "multipla_escolha"
    },
    {
        pergunta: "A Concordância Nominal é fundamental em qual das frases abaixo?",
        opcoes: [
            "a) Eu comprou o livro.",
            "b) As canetas novos e o caderno novo.",
            "c) Nós fomos ao cinema.",
            "d) Eu e ele percebemos a falha. Gabarito explicativo:",
        ],
        respostaCorreta: "b) As canetas novos e o caderno novo.",
        explicacao: "Resposta baseada no conteúdo dos capítulos 14 e 15.",
        tipo: "multipla_escolha"
    }
];