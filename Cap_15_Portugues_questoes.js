// Capítulo 15: Meus Direitos
// Torre das Palavras (Português)
// 30 questões: 10 múltipla escolha + 10 verdadeiro/falso + 7 abertas + 3 estudos de caso

const dadosDoQuizPortugues15 = [
    // ===== QUESTÕES DE MÚLTIPLA ESCOLHA (1-10) =====
    {
        tipo: "multipla_escolha",
        titulo: "Questão 1",
        contexto: "Vovô Bolivar está na loja comprando um produto eletrônico novo. Ele deve seguir dicas importantes antes de fechar a compra.",
        pergunta: "Selecione a melhor resposta dentre as opções abaixo sobre a ação que Vovô Bolivar NÃO precisa realizar como um consumidor cauteloso, de acordo com as dicas apresentadas no capítulo:",
        opcoes: [
            "a) Testar o produto eletrônico para garantir seu funcionamento.",
            "b) Conferir o troco e confirmar o preço antes de pagar.",
            "c) Fazer um selfie com a embalagem para postar nas redes sociais.",
            "d) Se fosse uma roupa, provar e calçar antes de levar."
        ],
        respostaCorreta: "c) Fazer um selfie com a embalagem para postar nas redes sociais.",
        explicacao: "As dicas importantes para o consumidor incluem testar produtos eletrônicos, confirmar preço, conferir troco, e provar roupas e calçados. Tirar selfie não é mencionado como dica de cautela ao consumidor."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Questão 2",
        contexto: "Leia o trecho abaixo, extraído de uma resposta a uma reclamação enviada a Lara: 'Após a análise dos dados que a senhora nos enviar, informaremos a loja mais próxima para que realize a troca dos itens presencialmente. O prazo para esse procedimento é de até 15 dias.'",
        pergunta: "Marque a opção que NÃO reflete um conceito abordado no texto acima ou na estrutura de uma reclamação:",
        opcoes: [
            "a) A empresa orienta sobre o que deve ser feito para resolver a situação.",
            "b) A palavra 'senhora' refere-se à identificação do cliente na reclamação.",
            "c) O trecho acima é um exemplo de saudação inicial de uma reclamação.",
            "d) Há um prazo estabelecido (15 dias) para a resolução do problema após o envio dos dados."
        ],
        respostaCorreta: "c) O trecho acima é um exemplo de saudação inicial de uma reclamação.",
        explicacao: "O trecho é uma resposta da empresa a uma reclamação (conforme a resposta dada à Lara nas fontes). A saudação inicial faz parte da estrutura da reclamação escrita pelo cliente, e não da resposta da empresa, que já dá continuidade ao contato."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Questão 3",
        contexto: "Gigi e a irmã compraram uma caixa de lápis de cor que veio com algumas pontas quebradas. Elas enviaram uma reclamação e a loja respondeu: 'Nós, da Canetas Intensa Brasileiras, sentimos muito pelo problema dos lápis de cor. Para que possamos resolver seu problema o mais rápido possível, solicitamos que nos envie fotos do cupom fiscal e dos lápis.'",
        pergunta: "Se, na resposta, a empresa tivesse usado o pronome pessoal 'ela' para se referir à Gigi, qual seria a função principal desse pronome?",
        opcoes: [
            "a) Indicar posse do objeto mencionado.",
            "b) Substituir um substantivo, evitando repetição, e indicar a pessoa do discurso (sujeito).",
            "c) Conectar duas orações.",
            "d) Exprimir uma ação no passado."
        ],
        respostaCorreta: "b) Substituir um substantivo, evitando repetição, e indicar a pessoa do discurso (sujeito).",
        explicacao: "Os pronomes pessoais (eu, tu, ele, ela, etc.) são usados para substituir substantivos, indicam as pessoas do discurso e ajudam a evitar repetições no texto."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Questão 4",
        contexto: "Walley escreveu uma reclamação detalhada sobre um fone de ouvido que parou de funcionar na primeira semana de uso.",
        pergunta: "Todas as afirmativas são corretas sobre os verbos que ele usou na reclamação, exceto:",
        opcoes: [
            "a) Verbos como comprei, fui e percebemos são comuns em textos de reclamação por estarem no passado, relatando a situação.",
            "b) Verbos no passado ajudam o consumidor a relatar o problema e as ações que já ocorreram.",
            "c) Em um texto de reclamação, o verbo deve concordar em gênero e número com o sujeito (Concordância Verbal).",
            "d) A maioria dos verbos utilizados na parte da solução esperada deve estar no passado, pois o produto já foi trocado."
        ],
        respostaCorreta: "d) A maioria dos verbos utilizados na parte da solução esperada deve estar no passado, pois o produto já foi trocado.",
        explicacao: "É muito comum que, em textos de reclamação, os verbos sejam usados no passado (como comprei ou percebi), pois relatam o problema e fatos já ocorridos. A solução esperada, no entanto, é uma solicitação para o futuro (troca ou devolução), e geralmente não é expressa no passado."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Questão 5",
        contexto: "A estrutura de uma reclamação bem planejada e educada é essencial para o sucesso da comunicação.",
        pergunta: "Todas as afirmativas abaixo descrevem corretamente as partes da estrutura de uma reclamação, exceto:",
        opcoes: [
            "a) Saudação: Cumprimento cordial e início formal.",
            "b) Identificação do Cliente: Informações necessárias sobre quem está reclamando.",
            "c) Corpo do Texto: Onde se explica o ocorrido, como o problema foi percebido e a solicitação de solução (troca ou devolução do valor).",
            "d) Análise Crítica: Parte dedicada a julgar a qualidade da empresa em relação a seus concorrentes, sem foco na solução do problema."
        ],
        respostaCorreta: "d) Análise Crítica: Parte dedicada a julgar a qualidade da empresa em relação a seus concorrentes, sem foco na solução do problema.",
        explicacao: "A estrutura da reclamação é composta por identificação do cliente, saudação, corpo do texto (relatando o problema e solicitando a solução), e despedida. A 'Análise Crítica' com foco no julgamento da empresa, sem visar a solução direta, não é citada como parte essencial da estrutura de produção de texto de reclamação."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Questão 6",
        contexto: "Helena está estudando a interpretação de textos. Ela aprendeu que o propósito de leitura é o motivo pelo qual o texto foi escrito ou lido.",
        pergunta: "Qual é o propósito de leitura principal de um texto de reclamação, como os apresentados no Capítulo 15?",
        opcoes: [
            "a) Informar, pois apenas apresenta dados sobre a compra.",
            "b) Instruir, pois ensina o leitor a usar o produto.",
            "c) Persuadir, pois tenta convencer o destinatário a resolver o problema e cumprir os direitos do consumidor.",
            "d) Narrar, pois conta apenas uma história sem solicitar uma ação."
        ],
        respostaCorreta: "c) Persuadir, pois tenta convencer o destinatário a resolver o problema e cumprir os direitos do consumidor.",
        explicacao: "O propósito de leitura de um texto de reclamação é persuadir o destinatário (o vendedor/fabricante) a solucionar o problema e cumprir o direito do consumidor."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Questão 7",
        contexto: "Imagine que Vovó Lilia comprou uma luminária nova e grande para ler à noite.",
        pergunta: "Selecione a opção em que a Concordância Nominal entre o substantivo (luminária) e os adjetivos está correta:",
        opcoes: [
            "a) Vovó Lilia comprou uma luminária novo e grande.",
            "b) Vovó Lilia comprou uma luminária nova e grande.",
            "c) Vovó Lilia comprou uma luminária novos e grandes.",
            "d) Vovó Lilia comprou uma luminária nova e grandes."
        ],
        respostaCorreta: "b) Vovó Lilia comprou uma luminária nova e grande.",
        explicacao: "A Concordância Nominal exige que o substantivo concorde com o adjetivo em gênero e número. 'Luminária' é feminino singular, e deve concordar com os adjetivos 'nova' (feminino singular) e 'grande' (feminino singular, adjetivo uniforme)."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Questão 8",
        contexto: "Vovó Denise está preenchendo o formulário de reclamação para a loja. Ela precisa usar um pronome que indique posse sobre a bolsa que comprou.",
        pergunta: "Marque a opção que contém apenas Pronomes Possessivos:",
        opcoes: [
            "a) Eu, tu, ele, nós.",
            "b) Seu, sua, meu, nossa, vossas.",
            "c) O, a, os, as.",
            "d) Me, te, o, a."
        ],
        respostaCorreta: "b) Seu, sua, meu, nossa, vossas.",
        explicacao: "Pronomes possessivos são aqueles que indicam posse, como meu, minha, teu, tua, seu, sua, nosso, nossa, vosso, vossa."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Questão 9",
        contexto: "Leia o trecho de um relato de consumo: 'Comprei uma carteira e ela começou a descascar. Eu pedi um lanche, e ele veio errado. Estou bem chateado.'",
        pergunta: "No trecho acima, a palavra destacada 'ela' é um pronome pessoal que se refere ao objeto:",
        opcoes: [
            "a) Carteira.",
            "b) Lanche.",
            "c) Eu.",
            "d) Chateado."
        ],
        respostaCorreta: "a) Carteira.",
        explicacao: "O pronome pessoal 'ela' está substituindo o substantivo feminino singular que o antecede, que é a 'carteira' (para evitar repetição: 'Comprei uma carteira e a carteira começou a descascar')."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Questão 10",
        contexto: "Ao planejar a escrita de um texto de reclamação, é importante seguir uma ordem lógica de ações.",
        pergunta: "Qual das sequências abaixo representa a ordem correta das ações ao planejar a escrita de um texto de reclamação?",
        opcoes: [
            "a) Editar o texto. Coletar informações. Escrever o texto. Revisar.",
            "b) Coletar informações e documentos. Identificar o destinatário. Escrever o texto. Revisar e editar.",
            "c) Escrever o texto. Coletar informações. Planejar a solução.",
            "d) Revisar. Coletar informações. Estruturar os argumentos."
        ],
        respostaCorreta: "b) Coletar informações e documentos. Identificar o destinatário. Escrever o texto. Revisar e editar.",
        explicacao: "As etapas para a produção de um texto de reclamação envolvem: planejar o texto (coletar informações e documentos, identificar o destinatário), escrever o texto, revisar o texto e editar o texto."
    },

    // ===== QUESTÕES VERDADEIRO/FALSO (11-20) =====
    {
        tipo: "verdadeiro_falso",
        titulo: "Questão 11",
        contexto: "O planejamento do texto de reclamação é a primeira etapa para garantir que a mensagem seja clara e eficaz.",
        pergunta: "Julgue as afirmativas abaixo sobre o planejamento e a estrutura da reclamação:\n\nI. O texto de reclamação deve ser sempre individual, e o objetivo é solicitar uma solução, como troca ou devolução do valor.\nII. O segundo parágrafo da reclamação deve detalhar o ocorrido e como o problema foi percebido.\nIII. A saudação (início) e a despedida (final) devem ser educadas e cordiais.\nIV. Reclamações podem ser enviadas por e-mail, carta ou por meio de formulários próprios.",
        opcoes: [
            "a) V, V, V, V",
            "b) F, V, V, F",
            "c) V, F, V, F",
            "d) F, F, V, V"
        ],
        respostaCorreta: "a) V, V, V, V",
        explicacao: "I. O objetivo é solicitar uma solução para o problema (troca ou devolução). II. O segundo parágrafo é destinado a relatar o ocorrido e como o problema foi percebido. III. O texto de reclamação deve demonstrar cordialidade e respeito na saudação e despedida. IV. Reclamações podem ser enviadas por e-mails, cartas ou formulários."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Questão 12",
        contexto: "Pronomes Pessoais e Possessivos.",
        pergunta: "Leia as afirmações sobre o uso de pronomes no Capítulo 15:\n\nI. Os pronomes pessoais (eu, tu, ele, etc.) servem para indicar as pessoas e objetos citados, evitando repetições de substantivos no texto.\nII. Os pronomes possessivos (meu, teu, sua, nossa) indicam a quem algo pertence.\nIII. A frase: 'Nosso pedido chegará amanhã' contém um pronome pessoal.\nIV. A frase: 'A minha filha se chama Letícia' contém um pronome possessivo.",
        opcoes: [
            "a) V, V, F, V",
            "b) V, F, F, V",
            "c) F, V, V, F",
            "d) V, V, V, F"
        ],
        respostaCorreta: "a) V, V, F, V",
        explicacao: "I. Pronomes pessoais substituem substantivos e evitam repetição. II. Pronomes possessivos indicam posse. III. 'Nosso' é um pronome possessivo. IV. 'Minha' é um pronome possessivo."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Questão 13",
        contexto: "Interpretação de Textos e Tipos de Textos.",
        pergunta: "Julgue as afirmações relativas aos conceitos de interpretação de textos:\n\nI. O propósito da leitura pode ser apenas informar ou instruir, mas nunca persuadir.\nII. A identificação de informações e a análise crítica são etapas da interpretação de textos.\nIII. Tipos de texto incluem o Narrativo, Descritivo, Argumentativo e Expositivo.\nIV. Para uma boa interpretação, é necessário ter uma compreensão global do que está escrito.",
        opcoes: [
            "a) V, F, V, F",
            "b) F, V, V, V",
            "c) V, V, F, F",
            "d) F, F, V, V"
        ],
        respostaCorreta: "b) F, V, V, V",
        explicacao: "I. O propósito de leitura inclui informar, instruir e, no caso da reclamação, persuadir. II. A identificação de informações e a análise crítica são etapas da interpretação de textos. III. Os tipos de texto incluem Narrativo, Descritivo, Argumentativo e Expositivo. IV. A interpretação de textos exige compreensão global."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Questão 14",
        contexto: "Verbos no Passado e a Reclamação.",
        pergunta: "Sobre o uso dos verbos em um texto que relata um problema com um produto:\n\nI. Em textos de reclamação, é muito comum o uso de verbos no passado, pois o cliente está contando o que aconteceu com o produto.\nII. Verbos no passado incluem comprei, fui, percebemos e estávamos.\nIII. A frase 'Eu comprei um pacote de canetas' usa um verbo no passado.\nIV. O verbo deve sempre concordar com o objeto direto, e não com o sujeito (Concordância Verbal).",
        opcoes: [
            "a) V, V, V, F",
            "b) F, V, F, V",
            "c) V, F, V, V",
            "d) F, V, V, F"
        ],
        respostaCorreta: "a) V, V, V, F",
        explicacao: "I. O uso de verbos no passado é comum para contar o que aconteceu. II e III. Comprei, fui e percebemos são exemplos de verbos no passado, usados em reclamações. IV. Na Concordância Verbal, o verbo deve concordar com o sujeito em gênero e número (Concordância Verbal)."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Questão 15",
        contexto: "Direito do Consumidor e Reclamação.",
        pergunta: "Sobre a forma de exercer os direitos do consumidor e fazer uma reclamação:\n\nI. Fazer reclamação é uma forma de o consumidor reivindicar seus direitos e solicitar soluções.\nII. Antes de comprar, o consumidor deve ter 'Olho vivo' para verificar o preço e a qualidade.\nIII. Uma reclamação deve conter a identificação do cliente, uma saudação, o corpo do texto e uma despedida.\nIV. A etapa de 'Conferir troco' deve ser feita após a reclamação ser enviada e resolvida.",
        opcoes: [
            "a) V, V, V, F",
            "b) F, V, V, V",
            "c) V, F, V, F",
            "d) F, V, F, V"
        ],
        respostaCorreta: "a) V, V, V, F",
        explicacao: "I. Fazer reclamação é reivindicar direitos. II. 'Olho vivo' é uma dica ao consumidor. III. A reclamação deve ter saudação, identificação, corpo e despedida. IV. Conferir o troco é uma dica para ser feita durante a compra, não após a resolução da reclamação."
    },


    {
        tipo: "verdadeiro_falso",
        titulo: "Questão 16",
        contexto: "Concordância.",
        pergunta: "Analise as regras de Concordância Verbal e Nominal apresentadas no capítulo:\n\nI. Na Concordância Verbal, o verbo deve concordar em gênero e número com o sujeito.\nII. O exemplo de Concordância Verbal é: 'O menino comeu a maçã'.\nIII. Na Concordância Nominal, o substantivo deve concordar com o adjetivo, como em 'Casa bonita'.\nIV. Na Concordância Nominal, os valores precisam ser corretos, como em 'Coisas valiosas'.",
        opcoes: [
            "a) V, V, F, V",
            "b) V, V, V, V",
            "c) F, F, V, F",
            "d) F, V, V, F"
        ],
        respostaCorreta: "d) F, V, V, F",
        explicacao: "I. Falso. A Concordância Verbal trata da concordância do verbo com o sujeito. II. Certo. 'O menino comeu a maçã' é um exemplo de Concordância Verbal. III. Certo. 'Casa bonita' é um exemplo de Concordância Nominal. IV. Falso. 'Coisas valiosas' é um exemplo de Concordância Nominal, onde o substantivo concorda com o adjetivo, não se referindo a valores monetários."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Questão 17",
        contexto: "Releia o trecho de uma reclamação: 'No mês passado, comprei uma bolsa em uma das lojas físicas desse vendedor, em um shopping de Fortaleza, mas só comecei a usar o produto este mês. Na semana passada, percebi que a bolsa está perdendo a cor. Uma parte da costura da alça também se desfez, e percebi que meu braço fica manchado de marrom sempre que a utilizo.'",
        pergunta: "Sobre os elementos da reclamação e a gramática:\n\nI. O pronome possessivo destacado é 'meu', indicando posse.\nII. A maioria dos verbos destacados (comprei, percebi, desfez) está no presente, pois o problema é atual.\nIII. O trecho descreve o problema no passado e o resultado no presente ('fica manchado').\nIV. O texto demonstra cordialidade e respeito.",
        opcoes: [
            "a) V, F, V, V",
            "b) F, F, V, V",
            "c) V, F, V, F",
            "d) F, V, F, V"
        ],
        respostaCorreta: "a) V, F, V, V",
        explicacao: "I. 'Meu' é um Pronome Possessivo que indica posse sobre o braço. II. Verbos como comprei, percebi e desfez estão no passado, contando fatos ocorridos. III. O problema é descrito no passado (comprei, desfez) e o resultado atual ('fica manchado') está no presente. IV. O texto de reclamação deve demonstrar cordialidade e respeito."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Questão 18",
        contexto: "Revisão e Edição de um texto de Reclamação. A revisão é uma etapa crucial antes de enviar a reclamação.",
        pergunta: "Julgue as ações corretas de revisão:\n\nI. Deve-se verificar se o produto e o problema foram bem apresentados.\nII. Deve-se garantir que a solicitação de resolução (troca ou devolução) foi clara.\nIII. Não é necessário verificar se você se identificou no início e usou uma saudação, pois isso é irrelevante.\nIV. É preciso ter cuidado com o tom e garantir que a despedida foi de forma educada.",
        opcoes: [
            "a) V, V, F, V",
            "b) V, V, V, F",
            "c) F, V, V, V",
            "d) F, F, F, V"
        ],
        respostaCorreta: "a) V, V, F, V",
        explicacao: "I, II, IV. A revisão e edição envolvem verificar se o problema e produto foram apresentados, se a solicitação foi clara e se a despedida foi educada. III. É fundamental verificar a identificação e saudação (Início/1º parágrafo), pois faz parte da estrutura da reclamação."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Questão 19",
        contexto: "O texto de reclamação é um gênero que precisa de clareza para atingir seu objetivo.",
        pergunta: "Sobre o que é essencial para que o texto de reclamação seja eficaz:\n\nI. Deve-se ser sucinto, mas incluir informações detalhadas sobre a compra e o defeito.\nII. É importante estruturar os argumentos de forma lógica.\nIII. Para ter sucesso, a reclamação deve conter o propósito de persuadir a empresa a resolver o problema.\nIV. A cordialidade e o respeito devem ser priorizados no tom do texto.",
        opcoes: [
            "a) V, V, V, V",
            "b) F, F, V, V",
            "c) V, F, V, F",
            "d) V, V, F, V"
        ],
        respostaCorreta: "a) V, V, V, V",
        explicacao: "I. O corpo do texto deve ser claro e detalhado. II. A escrita exige estrutura lógica. III. O propósito de um texto de reclamação é persuadir o destinatário a agir. IV. O texto deve ser escrito com cordialidade e respeito."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Questão 20",
        contexto: "Gêneros e Propósitos Textuais.",
        pergunta: "Qual a natureza dos textos de reclamação segundo o Capítulo 15?\n\nI. Textos de reclamação são primariamente narrativos, pois contam o que aconteceu.\nII. Reclamações podem conter características de textos argumentativos, pois tentam defender o direito do consumidor.\nIII. O uso de verbos no passado é exclusivo de textos narrativos e não descritivos.\nIV. A análise crítica faz parte da interpretação de textos, pois envolve julgar a informação recebida.",
        opcoes: [
            "a) V, V, F, V",
            "b) F, V, F, V",
            "c) V, F, V, V",
            "d) F, V, F, F"
        ],
        respostaCorreta: "b) F, V, F, F",
        explicacao: "I. O texto de reclamação é primariamente Argumentativo ou Expositivo, com elementos narrativos, mas não é primariamente narrativo. II. Reclamações podem conter características de textos argumentativos (defender o direito). III. O uso de verbos no passado é comum em textos de reclamação, que não são apenas narrativos. IV. A Análise Crítica é uma etapa da Interpretação de Textos."
    },

    // ===== PERGUNTAS ABERTAS (21-27) =====
    {
        tipo: "aberta",
        titulo: "Questão 21",
        pergunta: "Qual é o objetivo final de quem escreve um texto de reclamação?",
        respostaEsperada: "O objetivo final é solicitar uma solução para o problema, que pode ser a troca do produto ou a devolução do valor da quantia paga.",
        explicacao: "O objetivo final é solicitar uma solução para o problema, que pode ser a troca do produto ou a devolução do valor da quantia paga."
    },
    {
        tipo: "aberta",
        titulo: "Questão 22",
        pergunta: "A Concordância Verbal ocorre quando o verbo concorda com o sujeito. Dê um exemplo prático de Concordância Verbal, utilizando o nome Vovô Bolivar.",
        respostaEsperada: "A Concordância Verbal ocorre quando o verbo concorda com o sujeito. Exemplo: Vovô Bolivar reclamou do produto. (O verbo reclamou concorda com o sujeito Vovô Bolivar).",
        explicacao: "A Concordância Verbal ocorre quando o verbo concorda com o sujeito. Exemplo: Vovô Bolivar reclamou do produto. (O verbo reclamou concorda com o sujeito Vovô Bolivar)."
    },
    {
        tipo: "aberta",
        titulo: "Questão 23",
        pergunta: "O que são Pronomes Pessoais e qual a principal utilidade deles em um texto, como um relato de reclamação?",
        respostaEsperada: "Pronomes Pessoais são palavras que indicam as pessoas que participam da história e ajudam a evitar repetições no texto, substituindo os substantivos. Exemplos: Eu, tu, ele, ela, nós, vós, eles, elas.",
        explicacao: "Pronomes Pessoais são palavras que indicam as pessoas que participam da história e ajudam a evitar repetições no texto, substituindo os substantivos. Exemplos: Eu, tu, ele, ela, nós, vós, eles, elas."
    },
    {
        tipo: "aberta",
        titulo: "Questão 24",
        pergunta: "Cite três propósitos diferentes de leitura (ou tipos de texto) que são mencionados na seção de 'Interpretação de textos'.",
        respostaEsperada: "Três propósitos de leitura (ou tipos de texto) mencionados são: Informar, Instruir e Persuadir. (Outros tipos de texto mencionados são Narrativo, Descritivo, Argumentativo e Expositivo).",
        explicacao: "Três propósitos de leitura (ou tipos de texto) mencionados são: Informar, Instruir e Persuadir. (Outros tipos de texto mencionados são Narrativo, Descritivo, Argumentativo e Expositivo)."
    },
    {
        tipo: "aberta",
        titulo: "Questão 25",
        pergunta: "No planejamento da reclamação (Planejando o texto), o que o consumidor deve escrever na seção 'Sobre o quê?'.",
        respostaEsperada: "O consumidor deve escrever que o assunto é 'Um produto com defeito'.",
        explicacao: "O consumidor deve escrever que o assunto é 'Um produto com defeito'."
    },
    {
        tipo: "aberta",
        titulo: "Questão 26",
        pergunta: "Qual é a dica essencial para o consumidor, como Walley, se ele estiver em uma loja e desconfiar que o preço anunciado não é o mesmo que o cobrado no caixa?",
        respostaEsperada: "A dica essencial é confirmar o preço. Isso deve ser feito antes de pagar para garantir que o preço do produto é o mesmo cobrado no caixa.",
        explicacao: "A dica essencial é confirmar o preço. Isso deve ser feito antes de pagar para garantir que o preço do produto é o mesmo cobrado no caixa."
    },
    {
        tipo: "aberta",
        titulo: "Questão 27",
        pergunta: "Os pronomes possessivos indicam posse. Qual pronome possessivo deve ser usado por Gigi para se referir ao seu pacote de canetas?",
        respostaEsperada: "Gigi deve usar o pronome possessivo: 'Meu pacote de canetas' ou 'Minha caixa de canetas', dependendo do substantivo.",
        explicacao: "Gigi deve usar o pronome possessivo: 'Meu pacote de canetas' ou 'Minha caixa de canetas', dependendo do substantivo."
    },

    // ===== ESTUDOS DE CASO (28-30) =====
    {
        tipo: "estudo_caso",
        titulo: "Questão 28",
        contexto: "Vovô Bolivar comprou uma cadeira de escritório pela internet. A foto mostrava uma cadeira ergonômica e de couro sintético de alta qualidade. No entanto, quando a cadeira chegou, era de um material mais fraco e menor do que o anunciado. Vovô Bolivar ligou para a loja e eles se recusaram a fazer a troca, alegando que ele deveria ter lido as 'letras miúdas'.",
        pergunta: "Que solução ou passo a passo você proporia a Vovô Bolivar para que ele exerça seu direito e consiga resolver o problema da cadeira?",
        respostaEsperada: "Para Vovô Bolivar exercer seu direito, ele deve fazer uma reclamação formal. A solução proposta deve envolver os passos da produção de texto:\n\n1. Coleta de informações: Obter o comprovante de compra e, se possível, a foto original do anúncio (para comparar o produto idealizado com o recebido).\n\n2. Escrita da Reclamação: Redigir um texto (por e-mail ou formulário) que, no corpo do texto, deve relatar o ocorrido (o recebimento da cadeira de material fraco) e argumentar que a qualidade do produto não corresponde ao que foi anunciado.\n\n3. Solicitação de Solução: No terceiro parágrafo, ele deve solicitar a troca por um produto de acordo com o anunciado ou a devolução da quantia paga. Ele deve manter o tom de cordialidade e respeito para garantir a resposta.",
        explicacao: "Para Vovô Bolivar exercer seu direito, ele deve fazer uma reclamação formal. A solução proposta deve envolver os passos da produção de texto: coletar informações, escrever a reclamação relatando o ocorrido e argumentando sobre a qualidade, e solicitar a troca ou devolução mantendo cordialidade."
    },
    {
        tipo: "estudo_caso",
        titulo: "Questão 29",
        contexto: "Gigi e Helena compraram ingressos para um show online. O site cobrou uma taxa de serviço muito alta, mas elas precisavam dos ingressos. Após a compra, descobriram que a taxa era ilegal. A loja disse que não devolveria o valor da taxa porque o serviço já foi prestado.",
        pergunta: "Emita sua opinião: Gigi e Helena têm o direito de reclamar da taxa de serviço abusiva? Por quê? Baseie sua resposta no conceito de Direitos do Consumidor.",
        respostaEsperada: "Sim, Gigi e Helena têm o direito de reclamar. Fazer uma reclamação é a forma de o consumidor reivindicar seus direitos e solicitar soluções dos fabricantes e vendedores.\n\nNo contexto do Direito do Consumidor, se a taxa cobrada for considerada ilegal ou abusiva (violando o princípio de 'Olho vivo' e a qualidade do serviço ou preço), elas podem buscar a devolução da quantia paga (reembolso) referente a essa taxa, conforme previsto na solicitação de solução em uma reclamação.",
        explicacao: "Sim, Gigi e Helena têm o direito de reclamar. Fazer uma reclamação é a forma de o consumidor reivindicar seus direitos. Se a taxa for ilegal ou abusiva, elas podem buscar a devolução da quantia paga (reembolso) referente a essa taxa."
    },
    {
        tipo: "estudo_caso",
        titulo: "Questão 30",
        contexto: "Lara comprou um pacote de canetas azuis, vermelhas e pretas. Ela queria apenas as cores básicas para os estudos. No entanto, o pacote que ela recebeu veio com canetas fluorescentes e a tinta estava derramada.\n\nLara decidiu escrever uma reclamação por e-mail, exigindo a troca do produto ou a devolução do dinheiro.",
        pergunta: "Se você fosse Lara: Quais seriam os três argumentos mais importantes que você usaria no corpo do texto para persuadir a empresa a aceitar sua solicitação? Justifique a escolha desses argumentos com base na estrutura de uma reclamação.",
        respostaEsperada: "Se fosse Lara, os três argumentos mais importantes a serem usados no corpo do texto da reclamação (onde se relata o problema e se solicita a solução) seriam:\n\n1. Produto Incompatível com o Pedido: Argumentar que ela comprou cores básicas, mas recebeu canetas fluorescentes. Este argumento foca na falha da entrega do produto exato, relatando o que aconteceu.\n\n2. Defeito do Produto: Mencionar que a tinta estava derramada no pacote. Este argumento relata o problema percebido no produto. A empresa deve ser persuadida a resolver a falha na qualidade do produto.\n\n3. Exigência de Solução (Troca/Devolução): Argumentar que, devido à falha na compra e ao defeito (defeito no produto e problema de entrega), Lara solicita a troca do produto por um pacote correto e em perfeitas condições, ou a devolução do valor pago. Este argumento cumpre a função do 3º parágrafo do corpo do texto.",
        explicacao: "Os três argumentos mais importantes seriam: 1) Produto incompatível com o pedido (falha na entrega); 2) Defeito do produto (tinta derramada); 3) Exigência de solução (troca ou devolução). Esses argumentos seguem a estrutura da reclamação: relatar o problema e solicitar a solução."
    }
];

