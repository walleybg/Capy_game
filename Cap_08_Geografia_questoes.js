// Questões do Capítulo 8 de Geografia
const dadosDoQuizGeografiaCap8 = [
    {
        titulo: "Função da Vegetação",
        contexto: "Você está ajudando a Tainá e os Guardiões da Amazônia a entenderem como a vegetação protege o meio ambiente.",
        pergunta: "Qual função principal da vegetação é essencial para a respiração de todos os seres vivos?",
        opcoes: [
            "a) Ajudar a construir casas e móveis.",
            "b) Produção de oxigênio.",
            "c) Servir apenas como fonte de alimento.",
            "d) Fornecer celulose para produção de papel."
        ],
        respostaCorreta: "b) Produção de oxigênio.",
        explicacao: "A vegetação é responsável por produzir parte do oxigênio essencial para a respiração de todos os seres vivos.",
        tipo: "multipla_escolha"
    },
    {
        titulo: "Tipos de Plantas",
        contexto: "Em uma caminhada, você observa um campo com grama baixa e percebe que ela tem um caule frágil e pequeno, ficando bem perto do solo.",
        pergunta: "Escolha a alternativa que melhor reflete o conceito do tipo de planta que você observou:",
        opcoes: [
            "a) Plantas Arbustivas",
            "b) Plantas Arbóreas",
            "c) Plantas Rasteiras",
            "d) Vegetação de pântano"
        ],
        respostaCorreta: "c) Plantas Rasteiras",
        explicacao: "Plantas Rasteiras são aquelas que têm o caule frágil e pequeno e ficam bem perto do solo.",
        tipo: "multipla_escolha"
    },
    {
        titulo: "Desmatamento e Solo",
        contexto: "Imagine uma área que sofreu desmatamento para a criação de gado. Com a retirada da vegetação, o solo fica exposto.",
        pergunta: "Marque a opção que não reflete os conceitos abordados sobre os problemas que o desmatamento pode causar no solo:",
        opcoes: [
            "a) Erosão do solo.",
            "b) Perda de nutrientes.",
            "c) Desertificação.",
            "d) Aumento da infiltração da água no solo."
        ],
        respostaCorreta: "d) Aumento da infiltração da água no solo.",
        explicacao: "A retirada da vegetação (desmatamento) está ligada à erosão do solo, perda de nutrientes e desertificação. As raízes das plantas promovem a infiltração. A retirada delas diminui a proteção, e não causa o aumento da infiltração.",
        tipo: "multipla_escolha"
    },
    {
        titulo: "Poluição Atmosférica",
        contexto: "Você mora em uma cidade grande e nota uma grande quantidade de fumaça escura saindo das chaminés de fábricas e dos escapamentos de carros.",
        pergunta: "Qual é o nome dado a essa situação em que materiais e substâncias se misturam ao ar, diminuindo sua qualidade?",
        opcoes: [
            "a) Sedimentação",
            "b) Poluição atmosférica",
            "c) Tempestade de areia",
            "d) Infiltração"
        ],
        respostaCorreta: "b) Poluição atmosférica",
        explicacao: "A situação em que materiais e substâncias se misturam ao ar, diminuindo sua qualidade, é chamada de poluição atmosférica.",
        tipo: "multipla_escolha"
    },
    {
        titulo: "Vento e Energia",
        contexto: "O vento, que é o ar em movimento, é aproveitado pelos seres humanos de diversas formas.",
        pergunta: "Todas as afirmativas são corretas, exceto:",
        opcoes: [
            "a) A força do vento pode movimentar as pás de moinhos para realizar trabalhos.",
            "b) O vento é usado em veleiros e jangadas para movimentar os barcos.",
            "c) Os ventos produzem energia eólica, transformada em eletricidade.",
            "d) O vento é usado para proteger o solo contra a erosão, prendendo os pedaços de terra."
        ],
        respostaCorreta: "d) O vento é usado para proteger o solo contra a erosão, prendendo os pedaços de terra.",
        explicacao: "O vento é aproveitado para facilitar o trabalho (moinhos), produzir energia eólica e movimentar meios de transporte. A proteção do solo é uma função da vegetação (folhas e raízes), não do vento.",
        tipo: "multipla_escolha"
    },
    {
        titulo: "Proteção dos Rios",
        contexto: "Um fazendeiro planeja remover a vegetação nativa próxima à margem de um rio.",
        pergunta: "Escolha a alternativa que melhor reflete o conceito de como as raízes das plantas protegem os rios:",
        opcoes: [
            "a) Elas aumentam a velocidade da água para levá-la mais rápido.",
            "b) Elas ajudam a acumular pedaços de solo e rochas no fundo do rio, fazendo-o ficar mais raso.",
            "c) Elas mantêm as margens estáveis e evitam que grandes quantidades de solo e rochas sejam carregadas para dentro do rio.",
            "d) Elas purificam a água do rio, filtrando produtos químicos."
        ],
        respostaCorreta: "c) Elas mantêm as margens estáveis e evitam que grandes quantidades de solo e rochas sejam carregadas para dentro do rio.",
        explicacao: "As raízes das plantas nas margens dos rios seguram o solo e as rochas, mantendo as margens estáveis e evitando o acúmulo de sedimentos no fundo do rio, fazendo-o ficar mais raso.",
        tipo: "multipla_escolha"
    },
    {
        titulo: "Plantas Arbóreas",
        contexto: "Você está observando uma paisagem onde predominam Plantas Arbóreas.",
        pergunta: "Qual das características a seguir é típica desse tipo de planta?",
        opcoes: [
            "a) Possui vários caules finos saindo do solo, formando um arbusto.",
            "b) Tem um caule forte, conhecido como tronco, e pode atingir vários metros de altura.",
            "c) É pequena e tem um caule frágil, crescendo espalhada pelo chão.",
            "d) Não depende da luz solar para se desenvolver, crescendo bem em locais escuros."
        ],
        respostaCorreta: "b) Tem um caule forte, conhecido como tronco, e pode atingir vários metros de altura.",
        explicacao: "As Plantas Arbóreas são caracterizadas por terem um caule forte e grosso, chamado tronco, podendo ser muito altas.",
        tipo: "multipla_escolha"
    },
    {
        titulo: "Vegetação e Qualidade do Ar",
        contexto: "O capítulo menciona que a vegetação melhora a qualidade do ar.",
        pergunta: "Marque a opção que não reflete os conceitos abordados sobre essa função da vegetação:",
        opcoes: [
            "a) As folhas das plantas funcionam como filtros que absorvem impurezas carregadas pelo ar.",
            "b) A vegetação produz oxigênio essencial para a respiração.",
            "c) As plantas liberam fumaça que impede a entrada de poluentes externos.",
            "d) A vegetação ajuda a regular a temperatura local."
        ],
        respostaCorreta: "c) As plantas liberam fumaça que impede a entrada de poluentes externos.",
        explicacao: "A vegetação melhora a qualidade do ar ao produzir oxigênio e por suas folhas funcionarem como filtros que absorvem impurezas. As plantas não liberam fumaça.",
        tipo: "multipla_escolha"
    },
    {
        titulo: "Tempestade de Areia",
        contexto: "Em áreas de clima muito seco, quente e arenoso, o desmatamento pode intensificar um fenômeno perigoso.",
        pergunta: "O que acontece quando ventos fortes carregam grandes quantidades de areia solta, formando uma nuvem que pode prejudicar a respiração?",
        opcoes: [
            "a) Chuvas torrenciais.",
            "b) Assoreamento.",
            "c) Tempestade de areia.",
            "d) Infiltração."
        ],
        respostaCorreta: "c) Tempestade de areia.",
        explicacao: "Em locais secos, arenosos e sem cobertura vegetal, ventos fortes podem carregar grandes quantidades de areia solta, formando uma tempestade de areia. O desmatamento facilita a ocorrência deste fenômeno.",
        tipo: "multipla_escolha"
    },
    {
        titulo: "Motivos do Desmatamento",
        contexto: "A retirada da vegetação (desmatamento) está ligada a diversas atividades econômicas.",
        pergunta: "Escolha a alternativa que melhor reflete o conceito de um motivo comum para a retirada de árvores e outras plantas:",
        opcoes: [
            "a) Plantio de novas espécies nativas e reflorestamento.",
            "b) Criação de animais, cultivos de plantas e construção de moradias.",
            "c) Recuperação de ecossistemas perdidos.",
            "d) Aumento da biodiversidade local."
        ],
        respostaCorreta: "b) Criação de animais, cultivos de plantas e construção de moradias.",
        explicacao: "O desmatamento (retirada da vegetação) ocorre principalmente para fins econômicos como criação de animais, cultivos de plantas (produção de alimentos) e construção de moradias.",
        tipo: "multipla_escolha"
    },
    {
        titulo: "Vegetação e Água",
        contexto: "Pedro está estudando a relação entre a vegetação e a água. Ele listou quatro fatos importantes sobre esse tema.",
        pergunta: "Analise se as afirmações de Pedro sobre a relação entre vegetação e água estão corretas. Marque V para Verdadeiro ou F para Falso e, em seguida, assinale a combinação correta de respostas.",
        afirmacoes: [
            "I. As raízes das plantas abrem espaço no solo, permitindo que a água da chuva se infiltre e se acumule debaixo da terra.",
            "II. As águas dos rios não podem carregar pedaços de solo e rochas, mesmo sem a proteção da vegetação nas margens.",
            "III. Quando a vegetação é retirada, a proteção do solo diminui, facilitando a erosão.",
            "IV. As folhas das plantas não têm função na proteção do solo, pois o impacto da chuva só é sentido nas raízes."
        ],
        opcoes: [
            "a) V, V, F, V",
            "b) V, F, V, F",
            "c) F, V, V, F",
            "d) F, F, V, V"
        ],
        respostaCorreta: "b) V, F, V, F",
        explicacao: "I. (V) As raízes abrem espaço para a água se infiltrar e acumular debaixo da terra. II. (F) As águas podem carregar solo e rochas sem a proteção da vegetação, causando assoreamento. III. (V) A retirada da vegetação diminui a proteção do solo, facilitando a erosão. IV. (F) As folhas das plantas amenizam o impacto da chuva, protegendo o solo.",
        tipo: "verdadeiro_falso"
    },
    {
        titulo: "Características do Ar",
        contexto: "Lembre-se da lição sobre o ar. Analise se as afirmações de Ana sobre as características e usos do ar estão corretas.",
        pergunta: "Marque V para Verdadeiro ou F para Falso e, em seguida, assinale a combinação correta de respostas.",
        afirmacoes: [
            "I. O ar é um recurso natural invisível, sem cheiro e sem cor.",
            "II. O ar só é chamado de vento quando está parado.",
            "III. A força do vento pode ser usada para produzir eletricidade, chamada energia eólica.",
            "IV. A velocidade do vento não interfere na formação de tempestades de areia."
        ],
        opcoes: [
            "a) V, F, V, F",
            "b) F, V, V, F",
            "c) V, F, F, V",
            "d) V, V, V, F"
        ],
        respostaCorreta: "a) V, F, V, F",
        explicacao: "I. (V) O ar é um recurso natural invisível, sem cheiro e sem cor. II. (F) O vento é o ar em movimento. III. (V) O vento produz energia eólica, transformada em eletricidade. IV. (F) A velocidade dos ventos é crucial para a formação rápida das tempestades de areia.",
        tipo: "verdadeiro_falso"
    },
    {
        titulo: "Plantas Rasteiras e Arbustivas",
        contexto: "Compare as características das plantas rasteiras e arbustivas.",
        pergunta: "Marque V para Verdadeiro ou F para Falso e, em seguida, assinale a combinação correta de respostas.",
        afirmacoes: [
            "I. Plantas Rasteiras têm caules frágeis e pequenos, e por isso ficam bem perto do solo.",
            "II. Plantas Arbóreas e Arbustivas são o mesmo tipo de planta, apenas com nomes diferentes.",
            "III. Plantas Arbustivas costumam ter vários caules saindo do solo, o que lhes dá a forma de arbustos.",
            "IV. A vegetação de uma região pode ser formada pela mistura dos três tipos de plantas."
        ],
        opcoes: [
            "a) F, V, V, V",
            "b) V, F, V, V",
            "c) V, V, F, F",
            "d) F, V, F, V"
        ],
        respostaCorreta: "b) V, F, V, V",
        explicacao: "I. (V) Plantas Rasteiras têm caules frágeis e pequenos, próximos ao solo. II. (F) Plantas Arbóreas (tronco forte) e Arbustivas (vários caules) são tipos distintos de plantas. III. (V) Plantas Arbustivas costumam ter vários caules, formando arbustos. IV. (V) A vegetação em geral é formada pela combinação desses três tipos de plantas.",
        tipo: "verdadeiro_falso"
    },
    {
        titulo: "Poluição Atmosférica",
        contexto: "Analise as causas e consequências da poluição atmosférica.",
        pergunta: "Marque V para Verdadeiro ou F para Falso e, em seguida, assinale a combinação correta de respostas.",
        afirmacoes: [
            "I. A poluição do ar é causada pela mistura de fumaça, poeira e outras substâncias no ar.",
            "II. A poluição do ar só ocorre em locais com muitas fábricas e carros, não no campo.",
            "III. Queimadas e desmatamento são causas de poluição do ar no campo.",
            "IV. A poluição atmosférica pode causar irritação nos olhos e problemas respiratórios nos seres vivos."
        ],
        opcoes: [
            "a) V, F, V, V",
            "b) F, V, F, V",
            "c) V, F, V, F",
            "d) F, V, V, F"
        ],
        respostaCorreta: "a) V, F, V, V",
        explicacao: "I. (V) Poluição do ar é a mistura de fumaça, poeira e outras substâncias no ar. II. (F) A poluição pode ocorrer em qualquer lugar, inclusive no campo por desmatamento e queimadas. III. (V) Queimadas e desmatamento são causas de poluição do ar no campo. IV. (V) A poluição pode causar problemas de saúde, como irritação nos olhos e dificuldades respiratórias.",
        tipo: "verdadeiro_falso"
    },
    {
        titulo: "Impactos do Desmatamento",
        contexto: "O desmatamento afeta a natureza de várias maneiras. Verifique os impactos listados.",
        pergunta: "Marque V para Verdadeiro ou F para Falso e, em seguida, assinale a combinação correta de respostas.",
        afirmacoes: [
            "I. O desmatamento está relacionado à perda da biodiversidade e à perda de habitat.",
            "II. A perda da proteção do solo pode levar à desertificação.",
            "III. O desmatamento pode contribuir para a poluição do ar, da água e dos rios.",
            "IV. O desmatamento só traz problemas ambientais e não é usado para nenhuma atividade econômica importante."
        ],
        opcoes: [
            "a) V, F, V, F",
            "b) V, V, V, F",
            "c) F, V, V, V",
            "d) V, F, F, V"
        ],
        respostaCorreta: "b) V, V, V, F",
        explicacao: "I. (V) O desmatamento provoca perda de habitat e redução da biodiversidade. II. (V) A perda da proteção do solo pode levar à desertificação. III. (V) Desmatamento contribui para a poluição do ar (queimadas) e da água (erosão/resíduos). IV. (F) O desmatamento é usado para atividades econômicas como produção de alimentos, madeira e construção.",
        tipo: "verdadeiro_falso"
    },
    {
        titulo: "Funções da Vegetação",
        contexto: "A vegetação tem funções essenciais para a manutenção da vida.",
        pergunta: "Marque V para Verdadeiro ou F para Falso e, em seguida, assinale a combinação correta de respostas.",
        afirmacoes: [
            "I. A vegetação não serve de alimento para os seres vivos, apenas produz oxigênio.",
            "II. A vegetação melhora a qualidade do ar ao absorver impurezas.",
            "III. A principal função da vegetação é a extração de celulose para o uso industrial.",
            "IV. As plantas protegem o solo contra a ação da água e do vento."
        ],
        opcoes: [
            "a) F, V, F, V",
            "b) V, F, V, F",
            "c) F, F, V, V",
            "d) V, V, F, V"
        ],
        respostaCorreta: "a) F, V, F, V",
        explicacao: "I. (F) A vegetação é fonte de alimento para os seres vivos. II. (V) As plantas filtram impurezas carregadas pelo ar, melhorando a qualidade do ar. III. (F) A extração de celulose é uma atividade econômica, mas a função essencial é a produção de oxigênio e a proteção da vida. IV. (V) A vegetação protege o solo contra a ação da água da chuva e do vento.",
        tipo: "verdadeiro_falso"
    },
    {
        titulo: "Proteção dos Rios",
        contexto: "Pense na importância da vegetação para proteger os rios.",
        pergunta: "Marque V para Verdadeiro ou F para Falso e, em seguida, assinale a combinação correta de respostas.",
        afirmacoes: [
            "I. As raízes das plantas nas margens dos rios ajudam a manter essas margens estáveis.",
            "II. Sem a vegetação, a água pode carregar mais solo e rochas para o fundo do rio, causando assoreamento.",
            "III. Cuidar dos rios e das plantas é uma responsabilidade coletiva, assim como cuidar das plantas de todos os lugares.",
            "IV. A vegetação atua como uma barreira que impede que qualquer gota de chuva caia diretamente na água do rio."
        ],
        opcoes: [
            "a) V, F, V, F",
            "b) F, V, F, V",
            "c) V, V, V, F",
            "d) F, V, V, V"
        ],
        respostaCorreta: "c) V, V, V, F",
        explicacao: "I. (V) As raízes das plantas nas margens ajudam a manter a estabilidade. II. (V) A falta de proteção das margens facilita que o solo seja carregado para o rio, causando assoreamento. III. (V) Cuidar dos rios e das plantas é uma responsabilidade coletiva. IV. (F) A função da vegetação é proteger o solo e a água, mas o mecanismo é segurar as margens e diminuir o impacto da chuva, não impedir a queda de toda e qualquer gota.",
        tipo: "verdadeiro_falso"
    },
    {
        titulo: "Usos do Vento",
        contexto: "O uso da força do ar (vento) é antigo e variado.",
        pergunta: "Marque V para Verdadeiro ou F para Falso e, em seguida, assinale a combinação correta de respostas.",
        afirmacoes: [
            "I. A força do vento é usada para movimentar moinhos que transformam grãos em farinha.",
            "II. Barcos e veleiros modernos ainda usam a força do vento para se locomover.",
            "III. A produção de energia eólica é considerada mais prejudicial ao meio ambiente do que a queima de combustíveis.",
            "IV. O vento só pode ser sentido, mas não aproveitado para nenhuma atividade econômica."
        ],
        opcoes: [
            "a) F, V, F, V",
            "b) V, V, F, F",
            "c) V, F, V, V",
            "d) V, V, V, F"
        ],
        respostaCorreta: "b) V, V, F, F",
        explicacao: "I. (V) O vento é usado para movimentar as pás de moinhos. II. (V) Barcos, veleiros e jangadas usam a força do vento para se movimentar. III. (F) A produção de energia eólica é considerada menos prejudicial ao meio ambiente do que a queima de combustíveis. IV. (F) O vento é aproveitado para diversas atividades econômicas (energia e transporte).",
        tipo: "verdadeiro_falso"
    },
    {
        titulo: "Motivos do Desmatamento",
        contexto: "A retirada da vegetação ocorre por motivos diversos.",
        pergunta: "Marque V para Verdadeiro ou F para Falso e, em seguida, assinale a combinação correta de respostas.",
        afirmacoes: [
            "I. A extração de madeira para a produção de papel e móveis é um dos motivos do desmatamento.",
            "II. É comum remover a vegetação para conseguir mais espaço para construir casas e prédios.",
            "III. A criação de animais e o cultivo de plantas não exigem a remoção da vegetação nativa.",
            "IV. O desmatamento não causa aumentos de doenças respiratórias nas pessoas."
        ],
        opcoes: [
            "a) V, F, V, F",
            "b) V, V, F, F",
            "c) V, F, F, V",
            "d) V, V, F, F"
        ],
        respostaCorreta: "b) V, V, F, F",
        explicacao: "I. (V) A extração de madeira para papel e móveis é um motivo do desmatamento. II. (V) A retirada da vegetação é comum para a construção de casas e prédios. III. (F) A criação de animais e cultivo de plantas (agricultura) frequentemente exigem a remoção da vegetação nativa. IV. (F) O desmatamento (queimadas, poluição) pode causar aumentos de doenças respiratórias.",
        tipo: "verdadeiro_falso"
    },
    {
        titulo: "Tempestades de Areia",
        contexto: "Pense nos perigos das tempestades de areia.",
        pergunta: "Marque V para Verdadeiro ou F para Falso e, em seguida, assinale a combinação correta de respostas.",
        afirmacoes: [
            "I. As tempestades de areia são formadas em locais secos, arenosos e com pouca ou nenhuma vegetação.",
            "II. O desmatamento facilita a ocorrência de tempestades de areia, pois o solo fica mais solto.",
            "III. As tempestades de areia só acontecem longe da ação humana.",
            "IV. As tempestades de areia podem carregar a areia a grandes altitudes e distâncias."
        ],
        opcoes: [
            "a) V, V, F, V",
            "b) F, V, V, F",
            "c) V, V, V, V",
            "d) F, V, F, V"
        ],
        respostaCorreta: "a) V, V, F, V",
        explicacao: "I. (V) As tempestades de areia são formadas em locais secos, arenosos e sem cobertura vegetal. II. (V) O desmatamento facilita a ocorrência de tempestades de areia, pois o solo fica mais solto. III. (F) As tempestades de areia podem acontecer longe da ação humana, mas o desmatamento (ação humana) facilita sua ocorrência. IV. (V) As tempestades de areia podem carregar areia a grandes altitudes e distâncias.",
        tipo: "verdadeiro_falso"
    },
    {
        titulo: "Conceito de Vento",
        pergunta: "O que é o vento e como podemos perceber que ele está em movimento, já que ele é invisível e não pode ser tocado?",
        respostaEsperada: "O vento é o ar em movimento. Podemos perceber que ele está em movimento observando seus efeitos, como o movimento das folhas das árvores, das bandeiras, sentindo-o em nossa pele, ou vendo objetos leves sendo carregados.",
        tipo: "aberta"
    },
    {
        titulo: "Força do Vento",
        pergunta: "Cite um exemplo de como a força do vento pode ser aproveitada para movimentar objetos ou veículos.",
        respostaEsperada: "A força do vento pode ser aproveitada para movimentar as pás de moinhos (para moer grãos), para impulsionar veleiros e jangadas, ou para girar as turbinas dos aerogeradores (produção de energia eólica).",
        tipo: "aberta"
    },
    {
        titulo: "Proteção do Solo",
        pergunta: "O que significa a Proteção do Solo realizada pela vegetação, especificamente usando o exemplo das folhas das plantas?",
        respostaEsperada: "A Proteção do Solo realizada pela vegetação significa que as folhas das plantas amortecem o impacto das gotas de chuva, evitando que a água bata diretamente e com força no solo. As raízes seguram o solo, evitando que seja levado pela água ou pelo vento (erosão).",
        tipo: "aberta"
    },
    {
        titulo: "Consequências da Erosão",
        pergunta: "O que pode acontecer com o solo de uma área que foi desmatada se uma chuva forte cair nela, considerando que as raízes não estão mais segurando o solo?",
        respostaEsperada: "Se uma chuva forte cair em uma área desmatada, o solo pode ser levado pela água (erosão), pois as raízes não estão mais segurando-o. Isso pode causar perda de nutrientes, desertificação e assoreamento de rios.",
        tipo: "aberta"
    },
    {
        titulo: "Classificação de Plantas",
        pergunta: "Você vê uma planta que possui vários caules saindo do chão e ela forma um arbusto. Qual é a classificação dessa planta e qual sua característica de caule?",
        respostaEsperada: "A classificação dessa planta é Planta Arbustiva. Sua característica de caule é ter vários caules saindo do solo, formando um arbusto.",
        tipo: "aberta"
    },
    {
        titulo: "Infiltração da Água",
        pergunta: "Explique, de forma sucinta, o que é a infiltração da água no solo e qual papel as raízes desempenham nesse processo.",
        respostaEsperada: "A infiltração da água no solo é o processo pelo qual a água da chuva penetra no solo e se acumula debaixo da terra. As raízes das plantas abrem espaço no solo, facilitando a infiltração e o acúmulo de água.",
        tipo: "aberta"
    },
    {
        titulo: "Atitudes e Poluição",
        pergunta: "Cite duas atitudes humanas que, embora comuns, prejudicam a qualidade do ar, gerando a poluição atmosférica.",
        respostaEsperada: "Duas atitudes humanas que prejudicam a qualidade do ar são: 1) Queima de combustíveis fósseis em carros e fábricas, liberando fumaça e gases poluentes. 2) Queimadas e desmatamento, que liberam fumaça e partículas no ar.",
        tipo: "aberta"
    },
    {
        titulo: "Estudo de Caso - Poluição Urbana",
        contexto: "Você fez uma experiência e percebeu que o filtro de ar na janela da sua casa ficou sujo, indicando que a qualidade do ar no seu bairro está ruim.",
        pergunta: "Proponha duas atitudes que você e sua família poderiam adotar para diminuir a poluição atmosférica causada pelas fumaças na cidade.",
        respostaEsperada: "Duas atitudes para diminuir a poluição atmosférica: 1) Usar menos o carro particular e optar por transporte público, bicicleta ou caminhadas. 2) Evitar queimar lixo ou fazer fogueiras desnecessárias. 3) Plantar árvores e cuidar da vegetação urbana. (Qualquer resposta que demonstre consciência ambiental é válida)",
        tipo: "estudo_caso"
    },
    {
        titulo: "Estudo de Caso - Uso Consciente",
        contexto: "A tarefa de proteger as florestas é uma responsabilidade coletiva. Sabendo que a madeira é essencial para a vida humana (móveis, construção de casas), mas sua retirada causa desmatamento.",
        pergunta: "Dê sua opinião: É possível para o ser humano usar a madeira e outros recursos da vegetação de forma consciente, ou é necessário parar totalmente de explorá-los? Justifique sua opinião.",
        respostaEsperada: "É possível usar a madeira e outros recursos da vegetação de forma consciente, através de práticas sustentáveis como: reflorestamento, manejo florestal responsável, uso de madeira certificada, reciclagem de papel e móveis, e redução do desperdício. Não é necessário parar totalmente, mas sim usar com responsabilidade e planejamento. (Respostas que demonstrem reflexão crítica e consciência ambiental são válidas)",
        tipo: "estudo_caso"
    },
    {
        titulo: "Estudo de Caso - Rios e Assoreamento",
        contexto: "Um rio vizinho à sua cidade está ficando raso porque as pessoas removeram toda a vegetação de suas margens (matas ciliares). Isso fez com que o solo caísse no rio.",
        pergunta: "Qual é a solução baseada na função da vegetação para reverter esse problema e proteger a qualidade das águas?",
        respostaEsperada: "A solução é reflorestar as margens do rio (recuperar as matas ciliares). As raízes das plantas vão segurar o solo e evitar que mais sedimentos caiam no rio, permitindo que ele volte a ter profundidade adequada. Além disso, a vegetação protege a qualidade da água ao filtrar poluentes e evitar erosão.",
        tipo: "estudo_caso"
    }
];

