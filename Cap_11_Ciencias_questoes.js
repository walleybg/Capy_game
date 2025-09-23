// Capítulo 11 de Ciências - O Planeta Terra
// 10 questões de múltipla escolha + 10 questões V/F + 5 questões abertas

const dadosDoQuizCiencias11 = [
    // === QUESTÕES DE MÚLTIPLA ESCOLHA (1-10) ===
    {
        tipo: "multipla_escolha",
        titulo: "Primeiras Ideias sobre o Formato da Terra",
        contexto: "Na Antiguidade, diversos povos tinham diferentes ideias sobre o formato da Terra e como ela era sustentada no universo.",
        pergunta: "Sobre as primeiras ideias a respeito do formato da Terra, todas as afirmativas são corretas, exceto:",
        opcoes: [
            "Na Antiguidade, diversos povos, como os hindus, acreditavam que a Terra tinha o formato de um disco.",
            "Os hindus acreditavam que esse disco era sustentado por grandes colunas fixadas no universo.",
            "Segundo os hindus, o disco da Terra era sustentado por elefantes, os quais, por sua vez, eram sustentados por uma tartaruga gigante.",
            "Outros povos da Antiguidade acreditavam que a Terra tinha a forma de um disco, como se fosse uma pizza, sustentado por grandes colunas."
        ],
        respostaCorreta: "Os hindus acreditavam que esse disco era sustentado por grandes colunas fixadas no universo.",
        justificativa: "A alternativa está incorreta porque a crença de que a Terra era sustentada por colunas pertence a outros povos da Antiguidade, não aos hindus. A crença hindu era que o disco terrestre era sustentado por elefantes sobre uma tartaruga gigante."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Representações da Terra",
        contexto: "Existem diferentes formas de representar nosso planeta, cada uma com suas características e limitações específicas.",
        pergunta: "A respeito das representações da Terra, marque a opção que não reflete conceitos corretos sobre a sua verdadeira forma e suas representações:",
        opcoes: [
            "A verdadeira forma da Terra é esférica, e uma das formas de representá-la é o globo terrestre.",
            "O mapa-múndi é uma representação plana da superfície terrestre onde é possível ver todos os continentes de uma só vez.",
            "O globo terrestre representa a Terra em seu formato esférico e é a única maneira de se observar a divisão entre continentes e oceanos.",
            "A primeira foto da Terra que comprovou seu formato esférico, conhecida como a Bolinha Azul, foi tirada pelos astronautas em 1972, na missão Apollo 17."
        ],
        respostaCorreta: "O globo terrestre representa a Terra em seu formato esférico e é a única maneira de se observar a divisão entre continentes e oceanos.",
        justificativa: "A alternativa é incorreta ao afirmar que o globo terrestre é a única maneira de observar a divisão de continentes e oceanos. O mapa-múndi também cumpre essa função, representando a Terra de forma plana."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Sistema Solar e Planetas",
        contexto: "O Sistema Solar é composto pelo Sol e diversos planetas, cada um com características únicas e específicas.",
        pergunta: "Sobre o Sistema Solar e os planetas, todas as afirmações estão corretas, exceto:",
        opcoes: [
            "O Sol é uma estrela e o centro do Sistema Solar, e a Terra é um planeta que gira em torno dele.",
            "Júpiter é o maior de todos os planetas do Sistema Solar, possuindo uma massa 320 vezes maior que a da Terra.",
            "Mercúrio é o menor planeta e o mais próximo do Sol, e é o único planeta conhecido por possuir vida.",
            "Urano e Netuno são chamados de \"gigantes gelados\" e são compostos por uma mistura de gases, poeira e rochas."
        ],
        respostaCorreta: "Mercúrio é o menor planeta e o mais próximo do Sol, e é o único planeta conhecido por possuir vida.",
        justificativa: "A afirmativa está errada porque atribui a Mercúrio a característica de possuir vida. O único planeta conhecido que abriga vida é a Terra. Mercúrio é, de fato, o menor planeta e o mais próximo do Sol."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Superfície da Terra Vista do Espaço",
        contexto: "A superfície da Terra é coberta majoritariamente por água, e isso pode ser observado claramente em imagens do planeta vista do espaço.",
        pergunta: "A superfície da Terra é coberta majoritariamente por água. Analisando a imagem do planeta vista do espaço, qual é a afirmativa incorreta?",
        opcoes: [
            "As áreas de vegetação aparecem predominantemente em verde e amarelo claro.",
            "A maior parte da superfície (a grande área azul) é coberta por água.",
            "As manchas brancas podem ser nuvens ou gelo, dependendo de onde estão localizadas.",
            "Os continentes são as únicas regiões que não possuem nenhum tipo de mancha branca em suas superfícies."
        ],
        respostaCorreta: "Os continentes são as únicas regiões que não possuem nenhum tipo de mancha branca em suas superfícies.",
        justificativa: "É incorreto afirmar que os continentes não possuem manchas brancas. As calotas polares, como na Antártida (um continente), são grandes massas de gelo e aparecem como manchas brancas nas imagens de satélite, assim como as nuvens."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Descoberta do Formato Esférico da Terra",
        contexto: "Ao longo da história, diversos fatos e descobertas contribuíram para que os cientistas chegassem à conclusão de que a Terra possui formato esférico.",
        pergunta: "Qual dos fatos a seguir não contribuiu para que os cientistas modernos chegassem à conclusão de que a Terra possui formato esférico (ou de bola)?",
        opcoes: [
            "O registro de fotos da Terra feitas por satélites e naves espaciais, como a foto conhecida como a Bolinha Azul.",
            "As observações feitas por Aristóteles, que apresentou argumentos para provar o formato de uma bola.",
            "O mapa do mundo construído por Hecateu, que representava a Terra com um disco chato e plano.",
            "Os cálculos feitos pelo grego Eratóstenes, que observou que a Terra poderia ser esférica ao comparar a formação das sombras em diferentes cidades."
        ],
        respostaCorreta: "O mapa do mundo construído por Hecateu, que representava a Terra com um disco chato e plano.",
        justificativa: "O mapa de Hecateu é um exemplo de uma ideia antiga e incorreta sobre o formato da Terra (um disco plano). Portanto, ele não contribuiu para a conclusão de que o planeta é esférico; pelo contrário, representa a visão que foi superada."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Continentes e Oceanos",
        contexto: "Observando o mapa-múndi ou um globo terrestre, é possível perceber que o planeta possui grandes áreas de terra envolvidas por água.",
        pergunta: "Leia o texto e marque a opção que não reflete o conteúdo apresentado: \"Observando o mapa-múndi apresentado ou um globo terrestre, é possível perceber que o planeta possui grandes áreas de terra que estão envolvidas por água. Elas são chamadas de continentes e são, ao todo, seis. África, América, Antártida, Ásia, Europa e Oceania. Conformando os continentes, estão os oceanos, que recebem os seguintes nomes: Atlântico, Índico, Pacífico, Glacial Ártico e Glacial Antártico.\"",
        opcoes: [
            "A Terra possui seis continentes: África, América, Antártida, Ásia, Europa e Oceania.",
            "Os oceanos contornam os continentes e são eles: Atlântico, Índico, Pacífico, Glacial Ártico e Glacial Antártico.",
            "Um globo terrestre permite a visualização das grandes áreas de terra envolvidas por água.",
            "Os oceanos e os continentes não podem ser representados em um mapa-múndi."
        ],
        respostaCorreta: "Os oceanos e os continentes não podem ser representados em um mapa-múndi.",
        justificativa: "O próprio texto-base afirma que tanto o mapa-múndi quanto o globo terrestre são ferramentas que permitem a observação dos continentes e oceanos, tornando a alternativa uma contradição direta ao que foi apresentado."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Observação de Eratóstenes sobre as Sombras",
        contexto: "Eratóstenes foi um dos primeiros a usar observações científicas para deduzir o formato da Terra através do estudo das sombras.",
        pergunta: "Sobre a observação feita por Eratóstenes a respeito das sombras, marque a alternativa que explica corretamente seu raciocínio:",
        opcoes: [
            "Eratóstenes observou que, se a Terra fosse plana, as sombras seriam diferentes em horários e lugares distintos.",
            "Eratóstenes notou que, em um mesmo horário, as sombras eram iguais em lugares diferentes, provando o formato plano.",
            "Eratóstenes percebeu que, em um mesmo horário, havia sombras diferentes em diferentes lugares, o que sugere que a Terra não é plana, mas sim esférica.",
            "A observação das sombras em diferentes cidades foi o método usado por Pitágoras para calcular o diâmetro da Terra."
        ],
        respostaCorreta: "Eratóstenes percebeu que, em um mesmo horário, havia sombras diferentes em diferentes lugares, o que sugere que a Terra não é plana, mas sim esférica.",
        justificativa: "O raciocínio de Eratóstenes foi que, se a Terra fosse plana, os raios de sol chegariam de forma paralela em todos os lugares, e as sombras projetadas por objetos iguais no mesmo horário seriam idênticas. Como ele observou sombras diferentes, concluiu que a superfície da Terra deveria ser curva (esférica)."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Consciência Socioambiental",
        contexto: "A importância de cuidar do planeta Terra é um tema fundamental para a preservação da vida e do meio ambiente.",
        pergunta: "Sobre a importância de cuidar do planeta Terra, marque a opção que não reflete os conceitos de consciência socioambiental:",
        opcoes: [
            "A Terra é um lugar muito bonito, mas não precisamos de consciência socioambiental para cuidar dela, pois ela se regenera naturalmente.",
            "O texto \"Pálido Ponto Azul\" destaca que o planeta é o único lugar conhecido que abriga a vida e, por isso, a responsabilidade de cuidar dele é nossa.",
            "Nossas ações diárias impactam a natureza e, consequentemente, o planeta Terra.",
            "É necessário adotar uma atitude de cuidado, elaborando projetos e propondo soluções para problemas relacionados à manutenção da vida na Terra."
        ],
        respostaCorreta: "A Terra é um lugar muito bonito, mas não precisamos de consciência socioambiental para cuidar dela, pois ela se regenera naturalmente.",
        justificativa: "A alternativa contradiz o conceito de consciência socioambiental, que prega a necessidade de cuidado ativo com o planeta. A ideia de que a Terra se regenera sozinha e não precisa de nossas ações é o oposto da mensagem de responsabilidade do capítulo."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Conceito de Orbitar no Sistema Solar",
        contexto: "No Sistema Solar, os planetas realizam movimentos específicos em relação ao Sol, seguindo leis físicas bem definidas.",
        pergunta: "No contexto do Sistema Solar, o que significa o conceito de \"orbitar\"?",
        opcoes: [
            "É o movimento que o planeta faz ao girar em torno do seu próprio eixo, gerando dias e noites.",
            "É o movimento de \"girar em torno de algo\", como os planetas que giram em torno do Sol.",
            "É a capacidade que o Sol tem de ser o centro do sistema.",
            "É a atração gravitacional entre os planetas."
        ],
        respostaCorreta: "É o movimento de \"girar em torno de algo\", como os planetas que giram em torno do Sol.",
        justificativa: "O termo \"orbitar\" descreve o movimento que um corpo celeste faz ao girar em torno de outro devido à força da gravidade. No Sistema Solar, os planetas orbitam o Sol."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Mensagem do Texto Pálido Ponto Azul",
        contexto: "O texto \"Pálido Ponto Azul\" apresenta uma reflexão profunda sobre a Terra vista de uma perspectiva cósmica.",
        pergunta: "De acordo com a reflexão apresentada no texto \"Pálido Ponto Azul\", qual a principal mensagem transmitida pela imagem da Terra vista de longe?",
        opcoes: [
            "A imagem serve apenas para provar que a Terra tem formato esférico.",
            "A imagem mostra que o Sol é o centro do Sistema Solar e ilumina a Terra.",
            "A imagem enfatiza a responsabilidade humana de proteger a Terra, o único lar que abriga a vida.",
            "A imagem comprova que a Terra é o planeta mais próximo do Sol."
        ],
        respostaCorreta: "A imagem enfatiza a responsabilidade humana de proteger a Terra, o único lar que abriga a vida.",
        justificativa: "O texto \"Pálido Ponto Azul\" usa a imagem da Terra como um pequeno ponto para ressaltar sua fragilidade e singularidade como o único lar que conhecemos, apelando para a nossa responsabilidade de cuidar dele e uns dos outros."
    },

    // === QUESTÕES VERDADEIRO OU FALSO (11-20) ===
    {
        tipo: "verdadeiro_falso",
        titulo: "Formato da Terra na Antiguidade",
        contexto: "Diversos pensadores da Antiguidade contribuíram para o desenvolvimento das ideias sobre o formato da Terra.",
        pergunta: "Leia as afirmações sobre o formato da Terra na Antiguidade:",
        afirmacoes: [
            "O grego Pitágoras, por volta de 550 a.C., foi um dos primeiros pensadores a sugerir que a Terra tinha o formato de uma bola.",
            "A ideia de que a Terra era um disco plano foi aceita por muitos anos, mas Aristóteles apresentou argumentos para provar o formato de uma bola.",
            "Os povos hindus acreditavam que o planeta era um disco apoiado diretamente na água do oceano.",
            "Se a Terra fosse plana, as sombras em cidades diferentes, observadas no mesmo horário, teriam sempre o mesmo tamanho."
        ],
        opcoes: [
            "V, V, F, V",
            "F, V, V, F",
            "V, F, F, V",
            "F, F, V, V"
        ],
        respostaCorreta: "V, V, F, V",
        justificativa: "I (V): Pitágoras foi um dos primeiros a propor a esfericidade da Terra. II (V): Aristóteles usou observações para argumentar a favor de um planeta esférico. III (F): A crença hindu era que a Terra era sustentada por elefantes e uma tartaruga, não diretamente pela água. IV (V): Em uma superfície plana, raios de sol paralelos produziriam sombras idênticas em todos os lugares no mesmo instante."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Planetas do Sistema Solar",
        contexto: "O Sistema Solar possui diversos planetas, cada um com características únicas que os distinguem uns dos outros.",
        pergunta: "Sobre os planetas do Sistema Solar:",
        afirmacoes: [
            "Júpiter é o planeta mais próximo do Sol e o maior de todos os planetas.",
            "Vênus é um planeta que atinge temperaturas superiores a 450 graus Celsius.",
            "A Terra é o único planeta onde, até agora, foi encontrado algum organismo vivo.",
            "Mercúrio é o menor e mais próximo do Sol, sendo menor que a Terra."
        ],
        opcoes: [
            "F, V, V, V",
            "V, F, V, F",
            "F, F, V, V",
            "V, V, F, F"
        ],
        respostaCorreta: "F, V, V, V",
        justificativa: "I (F): Júpiter é o maior planeta, mas o mais próximo do Sol é Mercúrio. II (V): Vênus tem uma atmosfera densa que causa um efeito estufa extremo, resultando em temperaturas altíssimas. III (V): Até o momento, a Terra é o único local onde a existência de vida foi confirmada. IV (V): Mercúrio é o menor planeta do Sistema Solar e o que tem a órbita mais próxima do Sol."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Formas de Representar a Terra",
        contexto: "Existem diferentes maneiras de representar nosso planeta, cada uma com suas vantagens e limitações específicas.",
        pergunta: "A respeito das diferentes formas de representar a Terra:",
        afirmacoes: [
            "O globo terrestre representa a Terra em seu formato esférico.",
            "No mapa-múndi, não é possível representar a parte da Terra composta de água, apenas os continentes.",
            "O mapa construído por Hecateu representava a Terra com formato de círculo e era composto apenas pela Europa, Ásia e Líbia.",
            "O mapa-múndi é a primeira forma de representação do nosso planeta."
        ],
        opcoes: [
            "V, F, V, F",
            "F, V, F, V",
            "V, V, F, F",
            "F, F, V, V"
        ],
        respostaCorreta: "V, F, V, F",
        justificativa: "I (V): O globo é a representação que melhor imita o formato real da Terra. II (F): O mapa-múndi representa tanto os continentes (terra) quanto os oceanos (água). III (V): O mapa de Hecateu é uma das primeiras representações cartográficas conhecidas e mostrava o mundo como um disco com apenas essas três regiões. IV (F): Mapas como o de Hecateu são muito antigos, mas não há como afirmar que foram a primeira forma de representação."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Comprovação do Formato da Terra",
        contexto: "Ao longo da história, diversas evidências foram acumuladas para comprovar o formato esférico da Terra.",
        pergunta: "Sobre a comprovação do formato da Terra:",
        afirmacoes: [
            "Hoje, existem diversas maneiras de comprovar que a Terra tem formato esférico, incluindo fotos feitas por satélites.",
            "A foto da Terra conhecida como a \"Bolinha Azul\" foi tirada pelos astronautas em 1972, durante a missão Apollo 17.",
            "Essa foto mostrou o planeta totalmente plano, contrariando o que os pensadores gregos já previam.",
            "A nave Voyager 1 tirou a foto do \"Pálido Ponto Azul\", que mostra a Terra parecendo um ponto azul muito pequeno."
        ],
        opcoes: [
            "V, V, F, V",
            "F, F, V, F",
            "V, F, F, V",
            "F, V, V, F"
        ],
        respostaCorreta: "V, V, F, V",
        justificativa: "I (V): Imagens de satélite são uma prova visual e direta do formato esférico da Terra. II (V): A foto \"The Blue Marble\" (Bolinha Azul) foi tirada pela tripulação da Apollo 17 em 1972. III (F): A foto confirmou, e não contrariou, as ideias dos pensadores gregos sobre a esfericidade da Terra. IV (V): A foto \"Pale Blue Dot\" (Pálido Ponto Azul) foi tirada pela sonda Voyager 1 em 1990, mostrando a Terra de uma distância imensa."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Características da Superfície Terrestre",
        contexto: "A superfície da Terra apresenta diversas características que podem ser observadas em imagens do planeta vista do espaço.",
        pergunta: "Analise as características da superfície terrestre, como vistas do espaço:",
        afirmacoes: [
            "A grande área azul vista do espaço corresponde à parte da superfície terrestre coberta por água.",
            "O verde e o amarelo claro na superfície representam áreas de vegetação e florestas.",
            "As manchas brancas na imagem da Terra sempre representam neve ou gelo nas regiões mais frias.",
            "O deserto é uma característica da superfície que aparece em tons de marrom ou ocre."
        ],
        opcoes: [
            "V, V, F, V",
            "F, F, V, F",
            "V, F, V, F",
            "F, V, F, V"
        ],
        respostaCorreta: "V, V, F, V",
        justificativa: "I (V): A água cobre cerca de 71% da superfície terrestre, dando ao planeta sua cor azul predominante. II (V): Essas cores geralmente indicam a presença de vegetação. III (F): As manchas brancas podem ser gelo/neve, mas também podem ser nuvens na atmosfera. IV (V): Grandes áreas desérticas, como o Saara, são claramente visíveis do espaço com essas tonalidades."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Estrutura e Movimentos no Sistema Solar",
        contexto: "O Sistema Solar é organizado de forma específica, com o Sol no centro e os planetas realizando movimentos orbitais.",
        pergunta: "Sobre a estrutura e os movimentos no Sistema Solar:",
        afirmacoes: [
            "O Sol é o centro do Sistema Solar e é a estrela que fornece luz e calor aos planetas.",
            "Os planetas do Sistema Solar giram em torno do Sol, realizando o movimento de orbitar.",
            "Urano é cerca de quatro vezes maior que a Terra e é o planeta mais próximo do Sol.",
            "A Terra é um satélite que orbita em torno do Sol."
        ],
        opcoes: [
            "V, V, F, F",
            "F, F, V, V",
            "V, F, V, F",
            "F, V, F, V"
        ],
        respostaCorreta: "V, V, F, F",
        justificativa: "I (V): O Sol é uma estrela e seu campo gravitacional mantém os planetas em órbita. II (V): Este é o conceito fundamental de órbita planetária. III (F): Urano é, de fato, cerca de quatro vezes maior que a Terra, mas está muito distante do Sol, sendo o sétimo planeta em ordem de afastamento. IV (F): A Terra é um planeta. Satélites são corpos que orbitam planetas (como a Lua)."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Consciência Socioambiental",
        contexto: "A consciência socioambiental é fundamental para a preservação da Terra e a manutenção da vida no planeta.",
        pergunta: "Considerando a Consciência Socioambiental e a importância de cuidar da Terra:",
        afirmacoes: [
            "A Terra é o lar de todos os seres vivos e, para que continue assim, é importante que tenhamos a atitude de preservá-la.",
            "Segundo o texto \"Pálido Ponto Azul\", a Terra é o único lugar que conhecemos que abriga a vida, o que reforça nossa responsabilidade de cuidado.",
            "Ações diárias simples não têm impacto na natureza, pois só grandes indústrias causam problemas ambientais.",
            "Precisamos ter consciência de que o que fazemos diariamente tem consequências para o planeta Terra."
        ],
        opcoes: [
            "V, V, F, V",
            "F, F, V, F",
            "V, F, V, F",
            "F, V, F, V"
        ],
        respostaCorreta: "V, V, F, V",
        justificativa: "I (V): Esta é a premissa básica da sustentabilidade e consciência ambiental. II (V): O texto enfatiza a singularidade da Terra como um oásis de vida, aumentando nossa responsabilidade. III (F): Pequenas ações diárias, quando somadas, têm um grande impacto (positivo ou negativo) no meio ambiente. IV (V): A consciência socioambiental parte do reconhecimento de que nossas ações têm consequências."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Mapa-múndi e Globo Terrestre",
        contexto: "O mapa-múndi e o globo terrestre são duas formas diferentes de representar a Terra, cada uma com suas características específicas.",
        pergunta: "Comparando o mapa-múndi e o globo terrestre:",
        afirmacoes: [
            "O globo terrestre permite visualizar todos os continentes e oceanos ao mesmo tempo, de uma só vez.",
            "O mapa-múndi e o globo terrestre são as duas únicas maneiras conhecidas de representar a Terra.",
            "O mapa-múndi representa o planeta em uma superfície plana e colorida para destacar as divisões.",
            "A primeira forma de representação do planeta foram os mapas, que depois evoluíram para outros formatos."
        ],
        opcoes: [
            "F, F, V, V",
            "V, V, F, F",
            "F, V, V, F",
            "V, F, F, V"
        ],
        respostaCorreta: "F, F, V, V",
        justificativa: "I (F): O globo, por ser esférico, só permite a visualização de um hemisfério por vez. II (F): Existem outras formas de representação, como imagens de satélite e projeções cartográficas diversas. III (V): Esta é a definição de um mapa-múndi. IV (V): A cartografia (criação de mapas) é uma prática antiga que evoluiu ao longo do tempo."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Pensadores Gregos e o Formato da Terra",
        contexto: "Os pensadores gregos da Antiguidade fizeram importantes contribuições para o entendimento do formato da Terra.",
        pergunta: "Sobre os pensadores gregos e o formato da Terra:",
        afirmacoes: [
            "Eratóstenes notou que, se a Terra fosse plana, as sombras em locais diferentes e no mesmo horário seriam iguais.",
            "Aristóteles foi o primeiro a sugerir que a Terra tinha o formato de uma bola.",
            "A ideia da Terra plana persistiu por muito tempo, mesmo após as descobertas dos gregos.",
            "Eratóstenes conseguiu estimar a medida aproximada do tamanho do nosso planeta."
        ],
        opcoes: [
            "V, F, V, V",
            "F, V, F, F",
            "V, V, V, F",
            "F, F, F, V"
        ],
        respostaCorreta: "V, F, V, V",
        justificativa: "I (V): Esta foi a base de seu experimento: a diferença nas sombras indicava uma superfície curva. II (F): Pitágoras foi um dos primeiros a sugerir a esfericidade, antes de Aristóteles. III (V): A ideia da Terra plana persistiu por muito tempo, mesmo após as descobertas dos gregos. IV (V): Eratóstenes usou a diferença das sombras e a distância entre duas cidades para calcular a circunferência da Terra com notável precisão para a época."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Planeta Azul",
        contexto: "A Terra é conhecida como o \"Planeta Azul\" devido às suas características visuais quando observada do espaço.",
        pergunta: "A Terra é conhecida como o \"Planeta Azul\". Sobre a origem desse nome:",
        afirmacoes: [
            "A Terra é chamada de Planeta Azul porque a grande quantidade de água em sua superfície a faz parecer azul.",
            "A maior parte da superfície do nosso planeta é coberta por terra firme (continentes).",
            "A área azul que observamos na superfície da Terra é composta exclusivamente pelos oceanos Atlântico e Pacífico.",
            "O motivo da aparência azul é o fato de o planeta ser iluminado pelo Sol."
        ],
        opcoes: [
            "V, F, F, F",
            "F, V, V, V",
            "V, V, F, F",
            "F, F, V, V"
        ],
        respostaCorreta: "V, F, F, F",
        justificativa: "I (V): A vasta cobertura de água reflete a luz solar de uma forma que faz o planeta parecer azul do espaço. II (F): A maior parte da superfície é coberta por água, não por terra. III (F): A área azul é composta por todos os oceanos (Pacífico, Atlântico, Índico, Glacial Ártico e Antártico). IV (F): A iluminação do Sol é necessária para vermos a cor, mas a cor azul em si deve-se à presença da água."
    },

    // === QUESTÕES ABERTAS (21-25) ===
    {
        tipo: "aberta",
        titulo: "Crença Hindu sobre a Terra",
        contexto: "Os povos hindus da Antiguidade tinham uma visão muito específica sobre o formato da Terra e como ela era sustentada no universo.",
        pergunta: "Qual ideia muito antiga os povos hindus tinham sobre o formato da Terra e como ela era sustentada?",
        respostaCorreta: "Os hindus acreditavam que a Terra tinha o formato de um disco, que era sustentado por quatro elefantes, e estes, por sua vez, estavam sobre as costas de uma tartaruga gigante.",
        justificativa: "Resposta deve incluir: formato de disco, sustentação por elefantes e tartaruga gigante como base."
    },
    {
        tipo: "aberta",
        titulo: "Descoberta de Eratóstenes",
        contexto: "Eratóstenes fez uma importante observação sobre as sombras que o levou a questionar se a Terra realmente era plana.",
        pergunta: "O que levou Eratóstenes a observar que a Terra não poderia ser plana?",
        respostaCorreta: "Eratóstenes observou que, no mesmo dia e horário, as sombras projetadas por objetos eram diferentes em duas cidades distintas. Em Siena o sol não projetava sombra (estava a pino), enquanto em Alexandria havia sombra. Isso só seria possível se a superfície da Terra fosse curva.",
        justificativa: "Resposta deve mencionar: observação de sombras diferentes no mesmo horário em cidades diferentes, indicando superfície curva."
    },
    {
        tipo: "aberta",
        titulo: "Características da Superfície Terrestre",
        contexto: "Quando observamos a Terra do espaço, podemos identificar diversas características físicas da superfície do planeta.",
        pergunta: "Além de estar coberta por água, liste três outras características físicas da superfície terrestre que podem ser observadas em uma imagem do planeta vista de longe.",
        respostaCorreta: "Três características observáveis são: áreas de vegetação (manchas verdes/amareladas), desertos (manchas marrons/ocres) e gelo/neve ou nuvens (manchas brancas).",
        justificativa: "Resposta deve mencionar pelo menos três características: vegetação, desertos, gelo/neve, nuvens, montanhas, etc."
    },
    {
        tipo: "aberta",
        titulo: "Característica Única da Terra",
        contexto: "Entre todos os planetas conhecidos no universo, a Terra possui uma característica que a torna especial e única.",
        pergunta: "Qual é a característica única do planeta Terra mencionada no texto, que não foi encontrada em outro lugar no Universo?",
        respostaCorreta: "A Terra é o único planeta conhecido que abriga vida (organismos vivos).",
        justificativa: "Resposta deve mencionar que a Terra é o único planeta conhecido que possui vida ou organismos vivos."
    },
    {
        tipo: "aberta",
        titulo: "Continentes da Terra",
        contexto: "O planeta Terra é dividido em grandes massas de terra cercadas por água, que recebem um nome específico.",
        pergunta: "O que são os \"continentes\" e quais são seus nomes, de acordo com o texto?",
        respostaCorreta: "Continentes são as grandes áreas de terra do planeta, cercadas por água. Seus nomes são: África, América, Antártida, Ásia, Europa e Oceania.",
        justificativa: "Resposta deve incluir: definição de continentes como grandes áreas de terra cercadas por água e listar os seis continentes mencionados."
    }
];
