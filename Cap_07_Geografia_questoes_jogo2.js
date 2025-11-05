// Geografia Capítulo 7 - Game 2
// 40 questões: 10 V/F + 30 Múltipla Escolha

const dadosDoQuizGeografia7Jogo2 = [
    // ===== GRUPO 1: Questões V/F (Q1-Q10) =====
    
    // Questão 1
    {
        pergunta: "Contexto: Uso Indireto da Água (Fabricação de Produtos)\n\nA água é utilizada em grande quantidade na indústria, como na fabricação de papel, camisetas e carros, sendo este o \"uso que não percebemos\". Pense sobre o que é mais sustentável.\n\nClassifique as afirmações:\nI. A camiseta de algodão, que gasta 2.700 litros de água para ser fabricada, tem um gasto de água que é maior do que a água necessária para produzir um quilo de carne bovina.\nII. Economizar água em casa, como fechar a torneira ao escovar os dentes, é a única forma de reduzir o consumo de água, já que o consumo industrial é fixo e imutável.\nIII. Um quilo de carne bovina exige cerca de 15.500 litros de água, o que mostra que nossas escolhas alimentares também estão ligadas ao consumo de recursos hídricos.\nIV. O uso da água para a fabricação de produtos é chamado de uso indireto, pois a água é misturada a outras substâncias, como no processo de diluição industrial.",
        titulo: "Questão 1",
        opcoes: [
            "V - F - V - V",
            "F - V - F - V",
            "V - F - F - V",
            "V - V - V - F"
        ],
        respostaCorreta: 0,
        explicacao: "I. Falso - A produção de 1 quilo de carne bovina gasta 15.500 litros de água, sendo muito maior do que os 2.700 litros necessários para fabricar uma camiseta de algodão. II. Falso - O consumo industrial e na agricultura é altíssimo (um carro gasta 400.000 litros). Portanto, economizar em casa não é a única forma; reduzir o consumo indireto (industrial e de produção) também é fundamental. III. Verdadeiro - A alta demanda de água para a carne (15.500 litros) confirma a ligação direta entre as escolhas alimentares e o consumo de recursos hídricos. IV. Verdadeiro - O uso da água para a fabricação de produtos é chamado de uso indireto, sendo a diluição (mistura com outras substâncias) um exemplo dessa aplicação industrial.",
        tipo: "multipla_escolha"
    },
    
    // Questão 2
    {
        pergunta: "Contexto: Agricultura e Técnicas de Irrigação\n\nNa agricultura, a água é fundamental para o crescimento das plantações. Existem técnicas, como gotejamento e aspersão, que ajudam a irrigar. Pense sobre a eficiência dessas técnicas.\n\nClassifique as afirmações:\nI. A técnica de irrigação por gotejamento é considerada menos eficiente do que a aspersão, pois o gotejamento umedece apenas a terra ao redor da planta, enquanto a aspersão molha toda a plantação com grandes jatos.\nII. Se um agricultor usa a aspersão em um dia de vento forte, há um risco maior de desperdício de água, já que o vento pode levar a água para fora das plantações.\nIII. O cultivo de alimentos exige a água para que as plantas tenham nutrientes e possam crescer, sendo a chuva um recurso natural importante para a maioria das culturas.\nIV. A água usada na agricultura e na pecuária é um uso direto no campo, diferenciando-se do uso indireto para a geração de eletricidade.",
        titulo: "Questão 2",
        opcoes: [
            "F - V - V - F",
            "V - V - F - V",
            "F - V - V - V",
            "F - F - V - V"
        ],
        respostaCorreta: 2,
        explicacao: "I. Falso - A irrigação por gotejamento é mais eficiente, pois leva água por pequenos furos diretamente perto das plantas. A aspersão, que usa grandes jatos, molha todo o terreno, sendo menos precisa e mais propensa a desperdício. II. Verdadeiro - A aspersão borrifa água em jatos. Se houver vento forte, a água pode ser desviada das plantas, aumentando o desperdício. III. Verdadeiro - A água (incluindo a das chuvas) é fundamental para o crescimento das plantações, pois fornece nutrientes. IV. Falso - O uso na agricultura e pecuária é classificado como \"uso direto\". A geração de eletricidade é um \"uso indireto e indústria\".",
        tipo: "multipla_escolha"
    },
    
    // Questão 3
    {
        pergunta: "Contexto: Poluição e Desperdício da Água\n\nO desperdício e a poluição são dois grandes problemas que afetam a água. Reflita sobre a diferença entre eles e suas consequências.\n\nClassifique as afirmações:\nI. O desperdício ocorre quando a água usada em indústrias, casas ou plantações não é aproveitada da melhor maneira, como um cano furado jogando água limpa fora.\nII. A poluição acontece apenas quando empresas jogam resíduos químicos diretamente nos rios e nunca tem relação com o esgoto não tratado que vem das cidades.\nIII. Rios e córregos que não são considerados próprios para banho provavelmente foram afetados pela poluição, que acontece quando elementos impróprios são jogados na água.\nIV. Se uma pessoa deixa a torneira aberta enquanto lava as mãos, ela está causando desperdício, mas não necessariamente poluição, a menos que a água suja volte ao rio sem tratamento.",
        titulo: "Questão 3",
        opcoes: [
            "V - F - V - V",
            "F - V - F - V",
            "V - V - F - F",
            "F - F - V - V"
        ],
        respostaCorreta: 0,
        explicacao: "I. Verdadeiro - O desperdício ocorre quando a água usada (em casas, indústrias ou plantações) não é aproveitada da melhor forma, como em um encanamento furado. II. Falso - O esgoto não tratado, que vem das cidades, é uma das principais causas de poluição da água. III. Verdadeiro - Rios e córregos que não são próprios para banho foram afetados pela poluição, que acontece quando elementos impróprios são jogados na água. IV. Verdadeiro - Deixar a torneira aberta é desperdício. A poluição ocorreria se a água suja (contaminada com sabão/vírus) voltasse ao rio sem tratamento, pois a poluição é o lançamento de elementos impróprios.",
        tipo: "multipla_escolha"
    },
    
    // Questão 4
    {
        pergunta: "Contexto: Características e Formação do Solo\n\nO solo, ou o \"chão da Terra\", se forma com o tempo pela ação do clima, vento e água, que quebram as rochas. Diferentes solos têm diferentes usos.\n\nClassifique as afirmações:\nI. Solos arenosos, encontrados em praias, geralmente são duros e secos, o que os torna ideais para o plantio de qualquer tipo de vegetação.\nII. O solo que se forma em áreas de floresta, como a Mata Atlântica, é geralmente macio e fofo, pois é coberto por restos de plantas e animais, sendo rico em nutrientes.\nIII. O solo é um recurso natural que se renova muito rapidamente, bastando apenas alguns dias para que os pedaços pequenos de rochas se juntem novamente.\nIV. Solos argilosos e vermelhos, como os usados pelos povos indígenas Kaxinawá para cerâmica, são valorizados pela sua maleabilidade na produção de objetos.",
        titulo: "Questão 4",
        opcoes: [
            "F - V - F - V",
            "V - F - V - F",
            "F - F - F - V",
            "V - V - V - F"
        ],
        respostaCorreta: 0,
        explicacao: "I. Falso - Solos arenosos são formados por grãos de areia e ficam secos, o que os torna geralmente inadequados para o plantio de qualquer tipo de vegetal. II. Verdadeiro - O solo da floresta é coberto por restos de plantas e animais, tornando-o fofo e favorável ao desenvolvimento vegetal. III. Falso - O solo se forma lentamente, a partir da quebra das rochas pela ação do vento, chuva e clima, levando milhares de anos para se desenvolver. IV. Verdadeiro - Argila (solo) era a matéria-prima usada pelos povos de Itararé para cerâmica, valorizada por sua maleabilidade na produção de potes e vasos.",
        tipo: "multipla_escolha"
    },
    
    // Questão 5
    {
        pergunta: "Contexto: Usos do Solo e Atividades Humanas\n\nO solo é vital, não só para a natureza, mas também para o ser humano, que o utiliza para plantar, construir e extrair materiais.\n\nClassifique as afirmações:\nI. É possível construir moradias em qualquer tipo de solo, incluindo áreas muito inclinadas e próximas a encostas, sem risco de deslizamentos.\nII. O solo é crucial para a criação de animais, pois é onde o pasto cresce para que eles se alimentem e onde as instalações são construídas.\nIII. No passado, povos como os do povoado Itararé utilizavam o solo (argila) para fazer objetos como panelas, vasos e outros utensílios domésticos.\nIV. Quando o solo é usado para plantar, ele não precisa ser cuidado, pois a própria natureza sempre repõe os nutrientes que a planta absorve.",
        titulo: "Questão 5",
        opcoes: [
            "V - F - V - F",
            "F - V - V - F",
            "V - V - F - V",
            "F - F - V - V"
        ],
        respostaCorreta: 1,
        explicacao: "I. Falso - Moradias não devem ser construídas em áreas de risco (próximas a morros), pois isso afeta a vegetação, causa erosão e pode provocar deslizamentos, colocando vidas em perigo. II. Verdadeiro - O solo é necessário para o pasto (alimento) crescer e para a construção das instalações da pecuária. III. Verdadeiro - Povos antigos, como os do povoado Itararé, usavam a argila do solo para fazer cerâmicas, vasos e utensílios. IV. Falso - A plantação contínua do mesmo tipo de cultura causa o esgotamento do solo (falta de nutrientes). Técnicas como a rotação de culturas são necessárias para o cuidado e recuperação.",
        tipo: "multipla_escolha"
    },
    
    // Questão 6
    {
        pergunta: "Contexto: O Escasseamento da Água Doce\n\nApesar de a água estar presente em todo o globo terrestre, a água doce e potável, essencial para a sobrevivência humana e vegetal, é uma parcela pequena do total.\n\nClassifique as afirmações:\nI. A maior parte da água existente na Terra é salgada, localizada nos mares e oceanos, sendo inadequada para o consumo humano e agricultura sem tratamento especial.\nII. A água subterrânea, encontrada em poços, não faz parte da água doce e, por isso, não precisa ser protegida contra a poluição.\nIII. O derretimento das geleiras é uma ameaça, pois a água delas, que é doce e estava congelada, pode se misturar à água salgada dos oceanos, perdendo-se para o consumo.\nIV. Se não houver desperdício, nunca teremos problemas de escassez de água doce, mesmo com o aumento da poluição.",
        titulo: "Questão 6",
        opcoes: [
            "V - F - V - F",
            "F - V - V - V",
            "V - F - F - F",
            "V - F - V - V"
        ],
        respostaCorreta: 0,
        explicacao: "I. Verdadeiro - A maior parte da água na Terra é salgada (mares e oceanos), inadequada para consumo sem tratamento. II. Falso - A água subterrânea (lençol freático), retirada por poços, é água doce e deve ser protegida da poluição, que pode contaminá-la. III. Verdadeiro - A água doce está armazenada nas geleiras. O derretimento, com a mistura subsequente no oceano, perde esse recurso para o consumo. IV. Falso - A água está ficando escassa. A poluição torna a água imprópria (por esgoto, lixo, etc.), contribuindo para a falta de água limpa, mesmo que não haja desperdício.",
        tipo: "multipla_escolha"
    },
    
    // Questão 7
    {
        pergunta: "Contexto: Consequências do Desperdício\n\nDesperdício é usar a água de maneira inadequada. Pense sobre as ações que podemos tomar para evitar que a água se perca.\n\nClassifique as afirmações:\nI. Para garantir que a água esteja sempre disponível e limpa, a principal medida é evitar apenas o desperdício, pois a poluição afeta apenas uma pequena parte dos rios.\nII. Quando enxaguamos a louça ou a roupa, fechar a torneira enquanto passamos o sabão é uma maneira de reduzir o desperdício de água.\nIII. A água é usada para gerar eletricidade em usinas hidrelétricas, portanto, o desperdício de água em casa não afeta a produção de energia.\nIV. Se a estratégia de Cebolinha, de não lavar as mãos para economizar água, fosse adotada, isso traria mais problemas de saúde do que economia de água, pois é essencial para a higiene.",
        titulo: "Questão 7",
        opcoes: [
            "F - V - F - V",
            "V - F - V - F",
            "F - V - V - V",
            "V - V - F - F"
        ],
        respostaCorreta: 0,
        explicacao: "I. Falso - Tanto o desperdício quanto a poluição são grandes problemas que afetam a água. É preciso combater ambos. II. Verdadeiro - Fechar a torneira enquanto se ensaboa as mãos ou passa o sabão na louça é uma dica de economia. III. Falso - A água é usada para gerar eletricidade em usinas hidrelétricas. O desperdício e a escassez do recurso afetam o volume disponível para todas as atividades. IV. Verdadeiro - A higiene pessoal (lavar as mãos) é fundamental para evitar doenças. A estratégia de Cebolinha prejudicaria a saúde.",
        tipo: "multipla_escolha"
    },
    
    // Questão 8
    {
        pergunta: "Contexto: Erosão e Falta de Vegetação\n\nA erosão é um processo natural que remove pedaços do solo, mas que é acelerado pela ação humana, especialmente quando há desmatamento.\n\nClassifique as afirmações:\nI. Quando uma floresta é desmatada, as raízes das plantas, que ajudam a segurar o solo, desaparecem, aumentando o risco de erosão e deslizamento.\nII. A prática do reflorestamento ajuda a combater o problema da erosão, pois plantar novas mudas de árvores recupera a proteção natural do solo.\nIII. A erosão do solo é causada apenas pela ação do vento e da chuva, não sendo afetada por atividades humanas como a retirada da vegetação.\nIV. Um deslizamento de terra, como o ocorrido em Petrópolis (RJ), é um evento que causa prejuízos a pessoas e moradias, sendo resultado direto da intervenção humana em áreas de risco.",
        titulo: "Questão 8",
        opcoes: [
            "V - V - F - V",
            "F - V - V - F",
            "V - F - V - V",
            "V - V - F - F"
        ],
        respostaCorreta: 0,
        explicacao: "I. Verdadeiro - As raízes da vegetação ajudam a segurar o solo. A retirada da vegetação acelera a erosão. II. Verdadeiro - O reflorestamento (plantar novas mudas) é uma forma de cuidar do solo e ajuda a prevenir o seu desaparecimento (erosão). III. Falso - A erosão é um processo natural, mas é \"acelerada pela ação da água e dos ventos, porém, quando a vegetação de um lugar é retirada\" (ação humana). IV. Verdadeiro - Os deslizamentos (como em Petrópolis) são frequentemente causados por construções em áreas de risco que afetam a vegetação e a estabilidade do solo.",
        tipo: "multipla_escolha"
    },
    
    // Questão 9
    {
        pergunta: "Contexto: Compactação e Esgotamento do Solo\n\nO uso excessivo ou inadequado do solo pode causar problemas como a compactação (endurecimento) e o esgotamento (falta de nutrientes).\n\nClassifique as afirmações:\nI. O esgotamento do solo ocorre porque, mesmo plantando a mesma cultura várias vezes no mesmo local, o solo sempre consegue reter todos os nutrientes necessários para o crescimento da planta.\nII. A compactação do solo torna mais difícil a entrada de água das chuvas, pois o solo fica mais duro, prejudicando o desenvolvimento das raízes.\nIII. A rotação de culturas, onde se planta diferentes tipos de vegetais em sequência, é uma técnica usada para evitar o esgotamento do solo, permitindo que o terreno descanse.\nIV. Solos compactados pela passagem de máquinas pesadas têm menos capacidade de absorver a água, o que aumenta o risco de inundações.",
        titulo: "Questão 9",
        opcoes: [
            "F - V - V - V",
            "V - F - V - F",
            "F - V - F - V",
            "V - V - V - F"
        ],
        respostaCorreta: 0,
        explicacao: "I. Falso - O esgotamento do solo ocorre justamente porque, ao plantar a mesma cultura repetidamente, o solo perde os nutrientes necessários para aquela planta. II. Verdadeiro - A compactação torna o solo mais duro, dificultando a entrada de água da chuva e prejudicando o desenvolvimento das raízes. III. Verdadeiro - A rotação de culturas, plantando diferentes vegetais em sequência, é uma técnica usada para que o solo \"descanse\" e reponha os nutrientes, evitando o esgotamento. IV. Verdadeiro - Solos compactados absorvem pouca água da chuva, aumentando a quantidade de água na superfície e o risco de inundações.",
        tipo: "multipla_escolha"
    },
    
    // Questão 10
    {
        pergunta: "Contexto: Pecuária e Consumo de Água\n\nA água é vital na pecuária (criação de animais) para saciar a sede, limpeza de instalações e produção de ração.\n\nClassifique as afirmações:\nI. A pecuária exige água principalmente para irrigar as grandes plantações de capim, sendo este o maior gasto de água na atividade.\nII. Se um rebanho de gado não consegue pastar por falta de alimento (esgotamento do solo), isso pode levar à queda na produção de leite, demonstrando a ligação entre solo e água.\nIII. A água utilizada para produzir a ração dos animais é considerada parte do uso indireto da água na pecuária.\nIV. A principal função da água na pecuária é a diluição de materiais para fabricação de produtos derivados do animal.",
        titulo: "Questão 10",
        opcoes: [
            "F - V - V - F",
            "V - F - V - V",
            "F - V - F - V",
            "V - V - F - F"
        ],
        respostaCorreta: 0,
        explicacao: "I. Falso - O uso da água na pecuária é para saciar a sede, limpeza e rações. Irrigar o capim é um uso na agricultura, não diretamente na pecuária. II. Verdadeiro - A falta de pasto (causada pela falta de chuva e esgotamento do solo) levou à queda de 80% na produção de leite, demonstrando a ligação entre solo, água e produção animal. III. Verdadeiro - O preparo da ração, assim como a fabricação de outros produtos, utiliza a água como solvente/diluente, um uso indireto do recurso na atividade. IV. Falso - As principais funções são saciar a sede, limpar e preparar rações.",
        tipo: "multipla_escolha"
    },


    
    // ===== GRUPO 2: Questões de Múltipla Escolha (Q11-Q40) =====
    
    // Questão 11
    {
        pergunta: "Uso Consciente da Água e Higiene\n\nPor que a atitude de fechar a torneira enquanto ensaboa as mãos, como sugerido nas práticas de economia de água, é mais inteligente do que a estratégia de Cascão (que evitava lavar as mãos)?",
        titulo: "Questão 11",
        opcoes: [
            "a) Porque ensaboar com a torneira aberta garante que o sabão seja removido mais rapidamente.",
            "b) Porque a água que seria gasta ao ensaboar é totalmente compensada pelo gasto de água na produção de sabão.",
            "c) Porque economizar água sem prejudicar a higiene (fechando a torneira enquanto ensaboa) evita doenças e o desperdício, cumprindo a dupla função da água: saúde e sustentabilidade.",
            "d) Porque a água gasta ao lavar as mãos é desprezível e não faz diferença no consumo diário."
        ],
        respostaCorreta: 2,
        explicacao: "A água é vital para a saúde e higiene. Fechar a torneira ao ensaboar é um método de economia (evitando desperdício) que não compromete a higiene, ao contrário da atitude de Cascão, que coloca a saúde em risco.",
        tipo: "multipla_escolha"
    },
    
    // Questão 12
    {
        pergunta: "Água Subterrânea e Superficial\n\nPor que a poluição superficial (como jogar lixo em rios) é uma ameaça séria não apenas para a vida aquática, mas também para a água subterrânea que usamos em poços?",
        titulo: "Questão 12",
        opcoes: [
            "a) Porque a água subterrânea não tem conexão alguma com a água superficial, então o lixo no rio não importa.",
            "b) Porque o lixo nos rios atrai animais que bebem água dos poços.",
            "c) Porque a água suja e contaminada na superfície pode se infiltrar no solo e contaminar o lençol freático, que é a reserva de água subterrânea.",
            "d) Porque a poluição superficial faz com que o sol evapore a água subterrânea mais rápido."
        ],
        respostaCorreta: 2,
        explicacao: "A água subterrânea (lençol freático) é água doce e acessível. A poluição na superfície pode se infiltrar pelo solo e contaminar essa reserva subterrânea.",
        tipo: "multipla_escolha"
    },
    
    // Questão 13
    {
        pergunta: "Conexão entre Solo, Água e Alimentação\n\nImagine uma região onde o solo está esgotado, sem nutrientes suficientes para o pasto. Como a falta de cuidado com o solo pode, indiretamente, aumentar o consumo de água na pecuária?",
        titulo: "Questão 13",
        opcoes: [
            "a) Aumenta o número de gado, que passa a beber mais água.",
            "b) O agricultor precisa usar mais água para diluir fertilizantes químicos, tentando compensar a falta de nutrientes naturais do solo.",
            "c) A água da chuva aumenta, compensando a falta de nutrientes.",
            "d) Os rios próximos secam por causa do esgotamento do solo."
        ],
        respostaCorreta: 1,
        explicacao: "O esgotamento do solo é a perda de nutrientes. Para que o pasto cresça em solo pobre, o agricultor precisaria usar mais fertilizantes ou aditivos, que, ao serem aplicados, são frequentemente diluídos em água, aumentando o consumo.",
        tipo: "multipla_escolha"
    },
    
    // Questão 14
    {
        pergunta: "Usos da Água na Indústria e Diluição\n\nSe uma fábrica de papel decide reduzir a quantidade de água utilizada no processo de diluição para produzir cada folha de papel (que atualmente gasta 10 litros), qual seria a principal consequência imediata?",
        titulo: "Questão 14",
        opcoes: [
            "a) O carro da família gastaria menos água para ser produzido.",
            "b) O processo de mistura de substâncias na fábrica seria comprometido, podendo afetar a qualidade do produto final.",
            "c) A água da chuva aumentaria na região da fábrica.",
            "d) O gotejamento na agricultura se tornaria mais caro."
        ],
        respostaCorreta: 1,
        explicacao: "A água é usada na indústria para diluição (misturar substâncias). Reduzir drasticamente a água no processo de diluição pode impedir a mistura correta das substâncias, comprometendo a qualidade do papel.",
        tipo: "multipla_escolha"
    },
    
    // Questão 15
    {
        pergunta: "Comparação de Impacto Ambiental (Água)\n\nSe uma família decide não comprar um novo carro (que exige 400.000 litros de água para ser produzido), mas sim uma nova camiseta de algodão (2.700L), qual o impacto ambiental indireto em termos de economia de água que essa decisão, em comparação, representa?",
        titulo: "Questão 15",
        opcoes: [
            "a) É uma economia muito pequena, quase irrelevante, pois o consumo de água para a carne bovina é muito maior.",
            "b) A economia é enorme, pois o consumo para um carro é muitas vezes superior ao consumo de uma camiseta, demonstrando que bens duráveis têm um impacto hídrico gigante.",
            "c) O impacto é neutro, pois a água da indústria sempre volta limpa para o rio.",
            "d) A economia de água é maior se a família optar por não escovar os dentes por um mês."
        ],
        respostaCorreta: 1,
        explicacao: "A fabricação de um carro exige 400.000 litros de água. A camiseta exige apenas 2.700 litros. Evitar a compra do carro resulta em uma economia de água indireta muito maior.",
        tipo: "multipla_escolha"
    },
    
    // Questão 16
    {
        pergunta: "Formação do Solo e Fatores Naturais\n\nImagine um deserto onde há pouca água e muito vento. Como esses fatores ambientais afetam a formação do solo nesse local, em comparação com uma floresta úmida?",
        titulo: "Questão 16",
        opcoes: [
            "a) No deserto, o solo se forma mais rapidamente porque há mais sol.",
            "b) O solo do deserto tende a ser mais arenoso e seco, formado pela quebra das rochas e movimentação da areia pelo vento, enquanto na floresta é mais rico em matéria orgânica.",
            "c) O solo do deserto é sempre fofo e macio devido à ausência de chuvas.",
            "d) A água não tem influência na formação do solo, apenas o sol."
        ],
        respostaCorreta: 1,
        explicacao: "O solo é formado pelo clima e pelos seres vivos. Em desertos (pouca água, muito vento), a formação é mais lenta e o solo é arenoso. Em florestas úmidas, ele é fofo, rico em restos de plantas e animais.",
        tipo: "multipla_escolha"
    },
    
    // Questão 17
    {
        pergunta: "Erosão e Cuidado com o Meio Ambiente\n\nSe em uma encosta de morro a vegetação nativa for completamente removida para a construção de casas (o que é proibido), qual o risco mais grave que essa ação gera para os moradores e por quê?",
        titulo: "Questão 17",
        opcoes: [
            "a) O solo ficará compactado e as plantas não poderão crescer.",
            "b) O risco de deslizamento de terra aumenta muito, pois sem as raízes para segurar o solo, a água das chuvas o carrega ladeira abaixo.",
            "c) O esgotamento dos nutrientes do solo.",
            "d) A água do rio próximo se tornará salgada."
        ],
        respostaCorreta: 1,
        explicacao: "A retirada da vegetação elimina as raízes que seguram o solo. A água da chuva carrega esse solo desprotegido, causando erosão e, em áreas inclinadas, graves deslizamentos de terra.",
        tipo: "multipla_escolha"
    },
    
    // Questão 18
    {
        pergunta: "Poluição e Saúde Pública\n\nPor que o problema de poluição em rios e córregos, causado pelo lançamento de esgoto sem tratamento, é um problema de saúde pública que afeta mais do que apenas os peixes?",
        titulo: "Questão 18",
        opcoes: [
            "a) Porque a poluição impede a geração de eletricidade nas usinas hidrelétricas.",
            "b) Porque a água contaminada pode transmitir doenças para as pessoas que a utilizam, mesmo que indiretamente.",
            "c) Porque a água suja evapora e não volta mais para a atmosfera.",
            "d) Porque a poluição apenas prejudica o cheiro, mas não a qualidade da água."
        ],
        respostaCorreta: 1,
        explicacao: "A poluição, causada por esgoto e resíduos, torna a água imprópria. Essa água contaminada é fonte de doenças, afetando a saúde da população.",
        tipo: "multipla_escolha"
    },
    
    // Questão 19
    {
        pergunta: "Conservação do Solo (Rotação de Culturas)\n\nUm agricultor utiliza a rotação de culturas em sua fazenda. Qual é o principal benefício dessa prática em comparação com plantar sempre a mesma coisa no mesmo lugar?",
        titulo: "Questão 19",
        opcoes: [
            "a) A rotação de culturas aumenta o risco de erosão pelo vento.",
            "b) A técnica evita o esgotamento do solo, garantindo que os nutrientes sejam repostos, e previne o ataque de pragas que só se alimentam de uma única planta.",
            "c) A rotação de culturas exige mais água para a irrigação.",
            "d) Isso causa a compactação do solo e dificulta a colheita."
        ],
        respostaCorreta: 1,
        explicacao: "A rotação de culturas é uma técnica de manejo que evita plantar o mesmo vegetal seguidamente. Isso permite que o solo reponha nutrientes (evitando o esgotamento) e ajuda a controlar pragas específicas.",
        tipo: "multipla_escolha"
    },
    
    // Questão 20
    {
        pergunta: "Tema: Geração de Eletricidade e Água\n\nPor que a construção de grandes usinas hidrelétricas, embora essencial para a energia, requer um planejamento muito cuidadoso do uso da água?",
        titulo: "Questão 20",
        opcoes: [
            "a) Porque o desperdício de água em casa impede que a usina funcione.",
            "b) Porque a água da usina é salgada e não pode ser usada para consumo.",
            "c) Porque o represamento da água em um rio pode alterar o ambiente local (tanto a fauna quanto a flora) e a disponibilidade de água para outras regiões.",
            "d) Porque a energia gerada pela água não é considerada limpa."
        ],
        respostaCorreta: 2,
        explicacao: "Usinas hidrelétricas represam rios. Esse represamento altera o ambiente local e a distribuição de água, exigindo planejamento para garantir o equilíbrio ecológico e hídrico.",
        tipo: "multipla_escolha"
    },
    
    // Questão 21
    {
        pergunta: "Água e Sobrevivência\n\nSe a água doce se tornasse drasticamente escassa em todo o planeta, qual seria a consequência mais imediata e devastadora para as populações humanas?",
        titulo: "Questão 21",
        opcoes: [
            "a) A dificuldade em produzir novas camisetas.",
            "b) O colapso da produção de alimentos, já que a agricultura e a pecuária exigem muita água, e a impossibilidade de manter a hidratação e higiene básicas.",
            "c) O aumento da produção de carros.",
            "d) A formação de novos solos arenosos nas florestas."
        ],
        respostaCorreta: 1,
        explicacao: "A água é essencial para a sobrevivência humana e vegetal. A agricultura e a pecuária, que exigem vastos volumes de água para a produção de alimentos, entrariam em colapso sem água doce, assim como a higiene básica.",
        tipo: "multipla_escolha"
    },
    
    // Questão 22
    {
        pergunta: "Uso Indígena do Solo (Pensamento Histórico)\n\nQual habilidade de pensamento crítico você precisaria usar para entender a importância do solo para os povos indígenas do passado, como os que faziam cerâmicas em Itararé?",
        titulo: "Questão 22",
        opcoes: [
            "a) Medir a quantidade de água que eles gastavam para beber.",
            "b) Entender que o solo não serve apenas para plantar, mas também como matéria-prima para a criação de objetos essenciais para a vida diária e cultural.",
            "c) Calcular a distância entre Itararé e a usina de Itaipu.",
            "d) Comparar a eficiência das técnicas de gotejamento na época."
        ],
        respostaCorreta: 1,
        explicacao: "Os povos antigos de Itararé utilizavam o solo (argila) como matéria-prima para objetos essenciais como vasos e potes de cerâmica, mostrando a importância do solo além do plantio ou construção de moradias.",
        tipo: "multipla_escolha"
    },
    
    // Questão 23
    {
        pergunta: "Compactação do Solo e Máquinas\n\nUm agricultor observa que a água da chuva não está sendo bem absorvida pelo seu terreno, e as plantas estão com dificuldade de crescer. Se ele usa tratores grandes e pesados frequentemente, qual seria a causa mais provável desse problema?",
        titulo: "Questão 23",
        opcoes: [
            "a) O solo está esgotado por falta de adubo.",
            "b) A ausência de erosão no solo.",
            "c) O solo está compactado pela passagem repetida das máquinas, o que impede a água de se infiltrar e as raízes de se desenvolverem.",
            "d) A rotação de culturas está sendo feita de forma errada."
        ],
        respostaCorreta: 2,
        explicacao: "A passagem frequente de máquinas pesadas causa a compactação do solo, tornando-o duro. Isso impede a água de se infiltrar e as raízes de crescerem.",
        tipo: "multipla_escolha"
    },
    
    // Questão 24
    {
        pergunta: "Água e Diluição na Pecuária\n\nSe uma fazenda de gado decide produzir sua própria ração para os animais, qual uso específico da água na indústria (mencionado no contexto geral do capítulo) é aplicado nesse processo de fabricação da ração?",
        titulo: "Questão 24",
        opcoes: [
            "a) Uso da água para gerar eletricidade.",
            "b) Uso da água para irrigar as plantações de capim.",
            "c) Uso da água para diluição, pois a água é misturada a ingredientes secos no preparo da ração.",
            "d) Uso da água para lavar os animais."
        ],
        respostaCorreta: 2,
        explicacao: "Na produção da ração, a água é misturada a ingredientes secos. O uso da água para misturar e incorporar substâncias é a definição de diluição na indústria.",
        tipo: "multipla_escolha"
    },
    
    // Questão 25
    {
        pergunta: "Solo Enfraquecido e Construções\n\nPor que construir moradias em encostas de morros, onde o solo já foi enfraquecido pelo desmatamento, é considerado uma ação de alto risco?",
        titulo: "Questão 25",
        opcoes: [
            "a) Porque o solo ficará mais fértil e atrairá muitos insetos.",
            "b) Porque o solo enfraquecido pode desabar durante chuvas, o que causa prejuízos e risco de vida.",
            "c) Porque a água do rio próximo ficará salgada.",
            "d) Porque o esgotamento do solo impedirá o crescimento de árvores."
        ],
        respostaCorreta: 1,
        explicacao: "Construir em áreas de risco leva ao desmatamento e à erosão. O solo enfraquecido pode desabar durante chuvas, o que causa prejuízos e risco de vida.",
        tipo: "multipla_escolha"
    },


    
    // Questão 26
    {
        pergunta: "Poluição e Ciclo da Água\n\nSe a água de um rio é poluída por esgoto e lixo, como essa poluição pode afetar não apenas o rio local, mas também outras partes do ciclo da água?",
        titulo: "Questão 26",
        opcoes: [
            "a) A poluição fica restrita ao rio e não se espalha.",
            "b) A água que é poluída (com esgoto ou lixo) afeta o rio local e pode ser transportada. A água suja é devolvida à natureza sem tratamento, poluindo rios, lagos, mares e o solo, afetando o meio ambiente como um todo.",
            "c) A água poluída evapora mais rápido e não retorna ao ciclo.",
            "d) A poluição apenas muda a cor da água, mas não afeta sua qualidade."
        ],
        respostaCorreta: 1,
        explicacao: "A água que é poluída (com esgoto ou lixo) afeta o rio local e pode ser transportada. A água suja é devolvida à natureza sem tratamento, poluindo rios, lagos, mares e o solo, afetando o meio ambiente como um todo.",
        tipo: "multipla_escolha"
    },
    
    // Questão 27
    {
        pergunta: "Irrigação Eficiente\n\nEntre as técnicas de irrigação apresentadas (gotejamento e aspersão), qual é considerada mais eficiente em termos de economia de água e por quê?",
        titulo: "Questão 27",
        opcoes: [
            "a) A aspersão, pois molha toda a plantação de uma vez.",
            "b) A aspersão, pois usa menos água que o gotejamento.",
            "c) O gotejamento, pois direciona a água por mangueiras com furos pequenos diretamente perto da planta, evitando que a água se perca por evaporação ou escoamento inútil, o que o torna mais econômico que a aspersão.",
            "d) Ambas são igualmente eficientes em qualquer situação."
        ],
        respostaCorreta: 2,
        explicacao: "O gotejamento direciona a água por mangueiras com furos pequenos diretamente perto da planta, evitando que a água se perca por evaporação ou escoamento inútil, o que o torna mais econômico que a aspersão.",
        tipo: "multipla_escolha"
    },
    
    // Questão 28
    {
        pergunta: "Desperdício vs. Economia\n\nUm vizinho deixa a mangueira ligada o dia inteiro para regar o jardim. Sua ação de fechar o registro é um exemplo de economia. A ação do vizinho (mangueira ligada) é:",
        titulo: "Questão 28",
        opcoes: [
            "a) Economia, pois a água voltará ao rio.",
            "b) Desperdício, o que prejudica o recurso hídrico, afetando a disponibilidade geral.",
            "c) Poluição, pois a água está sendo contaminada.",
            "d) Diluição, pois a água está sendo misturada ao solo."
        ],
        respostaCorreta: 1,
        explicacao: "Sua ação de fechar o registro é um exemplo de economia. A ação do vizinho (mangueira ligada) é desperdício, o que prejudica o recurso hídrico, afetando a disponibilidade geral.",
        tipo: "multipla_escolha"
    },
    
    // Questão 29
    {
        pergunta: "Solo e Desenvolvimento de Plantas\n\nPor que um solo rochoso e duro é menos favorável para o desenvolvimento de plantas do que um solo fofo e rico em matéria orgânica?",
        titulo: "Questão 29",
        opcoes: [
            "a) Porque o solo rochoso tem mais nutrientes.",
            "b) Solos rochosos e duros tornam difícil a infiltração da água da chuva e impedem o desenvolvimento profundo das raízes, mesmo com chuva adequada. Solos fofos (floresta) são mais favoráveis.",
            "c) Porque o solo fofo impede o crescimento das raízes.",
            "d) Porque a água da chuva não cai em solos rochosos."
        ],
        respostaCorreta: 1,
        explicacao: "Solos rochosos e duros tornam difícil a infiltração da água da chuva e impedem o desenvolvimento profundo das raízes, mesmo com chuva adequada. Solos fofos (floresta) são mais favoráveis.",
        tipo: "multipla_escolha"
    },
    
    // Questão 30
    {
        pergunta: "Ligação entre Água, Solo e Produção Animal\n\nSegundo o texto das fontes, como a falta de chuva (água) e o solo esgotado podem afetar diretamente a produção de leite em uma fazenda de gado?",
        titulo: "Questão 30",
        opcoes: [
            "a) A falta de chuva aumenta a produção de leite.",
            "b) O solo esgotado não afeta a produção de leite.",
            "c) O texto das fontes indica que a falta de chuva (água) e o solo esgotado causaram a falta de pasto. Sem pasto para comer, o gado teve a produção de leite reduzida em 80%.",
            "d) A água da chuva contamina o leite."
        ],
        respostaCorreta: 2,
        explicacao: "O texto das fontes indica que a falta de chuva (água) e o solo esgotado causaram a falta de pasto. Sem pasto para comer, o gado teve a produção de leite reduzida em 80%.",
        tipo: "multipla_escolha"
    },
    
    // Questão 31
    {
        pergunta: "Reflorestamento e Benefícios Ambientais\n\nAlém de combater a erosão, qual outro benefício importante o reflorestamento (plantar novas árvores) traz para o meio ambiente?",
        titulo: "Questão 31",
        opcoes: [
            "a) Aumenta a poluição dos rios.",
            "b) O reflorestamento (plantar novas árvores) ajuda a prevenir a erosão. Além disso, a vegetação contribui para manter a umidade do solo e desempenha um papel importante na regulação climática e no ciclo das chuvas.",
            "c) Causa a compactação do solo.",
            "d) Reduz a quantidade de oxigênio no ar."
        ],
        respostaCorreta: 1,
        explicacao: "O reflorestamento (plantar novas árvores) ajuda a prevenir a erosão. Além disso, a vegetação contribui para manter a umidade do solo e desempenha um papel importante na regulação climática e no ciclo das chuvas.",
        tipo: "multipla_escolha"
    },
    
    // Questão 32
    {
        pergunta: "Diluição no Cotidiano\n\nQuando você lava a louça em casa, a água se mistura ao sabão/detergente para dissolvê-los e promover a limpeza. Esse processo é um exemplo de qual conceito relacionado ao uso da água?",
        titulo: "Questão 32",
        opcoes: [
            "a) Erosão.",
            "b) Diluição.",
            "c) Compactação.",
            "d) Esgotamento."
        ],
        respostaCorreta: 1,
        explicacao: "A diluição é a mistura da água com outra substância. Ao lavar louças ou roupas, a água se mistura ao sabão/detergente para dissolvê-los e promover a limpeza.",
        tipo: "multipla_escolha"
    },
    
    // Questão 33
    {
        pergunta: "Solo e Agricultura\n\nPor que o solo é considerado um recurso fundamental para a agricultura e, consequentemente, para a alimentação humana?",
        titulo: "Questão 33",
        opcoes: [
            "a) Porque o solo é usado apenas para construir moradias.",
            "b) Porque o solo não tem relação com a produção de alimentos.",
            "c) O solo é onde grande parte da agricultura acontece (cultivo de alimentos). Sem solo fértil, não haveria onde plantar a maioria dos alimentos, e a construção de moradias seguras seria impossível.",
            "d) Porque o solo é usado apenas para extrair minerais."
        ],
        respostaCorreta: 2,
        explicacao: "O solo é onde grande parte da agricultura acontece (cultivo de alimentos). Sem solo fértil, não haveria onde plantar a maioria dos alimentos, e a construção de moradias seguras seria impossível.",
        tipo: "multipla_escolha"
    },
    
    // Questão 34
    {
        pergunta: "Combate à Poluição e ao Desperdício\n\nImagine que um município consegue reduzir significativamente o desperdício de água em casas e indústrias, mas continua lançando esgoto sem tratamento nos rios. Por que o problema da qualidade da água ainda persistiria?",
        titulo: "Questão 34",
        opcoes: [
            "a) Porque o desperdício é o único problema que afeta a água.",
            "b) Se o município apenas combate o desperdício, mas continua lançando esgoto sem tratamento nos rios, o problema da poluição persiste. Isso compromete a qualidade da água, afetando diretamente a saúde pública.",
            "c) Porque a água tratada não volta ao rio.",
            "d) Porque o esgoto não afeta a qualidade da água."
        ],
        respostaCorreta: 1,
        explicacao: "Se o município apenas combate o desperdício, mas continua lançando esgoto sem tratamento nos rios, o problema da poluição persiste. Isso compromete a qualidade da água, afetando diretamente a saúde pública.",
        tipo: "multipla_escolha"
    },
    
    // Questão 35
    {
        pergunta: "Formação do Solo e Tempo\n\nPor que é importante cuidar do solo e evitar sua degradação (erosão, esgotamento, compactação), considerando o tempo necessário para sua formação?",
        titulo: "Questão 35",
        opcoes: [
            "a) O processo de formação do solo a partir da quebra das rochas leva \"milhares de anos\". A degradação (erosão, esgotamento) causada pela ação humana é muito mais rápida, fazendo com que o solo se esgote em relação à escala de tempo humana.",
            "b) Porque o solo se forma em poucos dias.",
            "c) Porque a erosão não afeta o solo.",
            "d) Porque o solo não é importante para a agricultura."
        ],
        respostaCorreta: 0,
        explicacao: "O processo de formação do solo a partir da quebra das rochas leva \"milhares de anos\". A degradação (erosão, esgotamento) causada pela ação humana é muito mais rápida, fazendo com que o solo se esgote em relação à escala de tempo humana.",
        tipo: "multipla_escolha"
    },
    
    // Questão 36
    {
        pergunta: "Técnicas de Irrigação e Desperdício\n\nUm agricultor quer minimizar o desperdício de água ao irrigar sua plantação. Qual técnica seria mais adequada e por quê?",
        titulo: "Questão 36",
        opcoes: [
            "a) Aspersão, pois molha toda a área de uma vez.",
            "b) A água deve ser aproveitada da melhor maneira. O bebedouro foca o uso na sede, minimizando o desperdício, enquanto o aspersor molharia desnecessariamente uma grande área.",
            "c) Usar mangueiras sem controle de vazão.",
            "d) Irrigar apenas durante o dia, quando há mais evaporação."
        ],
        respostaCorreta: 1,
        explicacao: "A água deve ser aproveitada da melhor maneira. O bebedouro foca o uso na sede, minimizando o desperdício, enquanto o aspersor molharia desnecessariamente uma grande área.",
        tipo: "multipla_escolha"
    },
    
    // Questão 37
    {
        pergunta: "Consequências da Falta de Cuidado com o Solo\n\nQuais são as duas principais consequências negativas de não cuidar adequadamente do solo em áreas agrícolas?",
        titulo: "Questão 37",
        opcoes: [
            "a) Aumento da fertilidade e redução da erosão.",
            "b) Compactação e aumento da absorção de água.",
            "c) Não usar a rotação de culturas leva ao esgotamento do solo (perda de nutrientes). Evitar o reflorestamento (retirada de vegetação) acelera a erosão.",
            "d) Melhoria da qualidade do ar e aumento da biodiversidade."
        ],
        respostaCorreta: 2,
        explicacao: "Não usar a rotação de culturas leva ao esgotamento do solo (perda de nutrientes). Evitar o reflorestamento (retirada de vegetação) acelera a erosão.",
        tipo: "multipla_escolha"
    },
    
    // Questão 38
    {
        pergunta: "Água Doce e Atividades Humanas\n\nPor que rios, lagos e lençóis freáticos (água subterrânea em poços) são considerados recursos essenciais para as atividades humanas diárias?",
        titulo: "Questão 38",
        opcoes: [
            "a) Porque são fontes de água salgada.",
            "b) Rios, lagos e lençóis freáticos (água subterrânea em poços) representam a maior parte da água doce que está em estado líquido e que é acessível para as atividades diárias, agricultura e indústria.",
            "c) Porque não são afetados pela poluição.",
            "d) Porque são usados apenas para lazer."
        ],
        respostaCorreta: 1,
        explicacao: "Rios, lagos e lençóis freáticos (água subterrânea em poços) representam a maior parte da água doce que está em estado líquido e que é acessível para as atividades diárias, agricultura e indústria.",
        tipo: "multipla_escolha"
    },
    
    // Questão 39
    {
        pergunta: "Erosão e Deslizamentos\n\nPor que áreas desmatadas em encostas de morros têm maior risco de sofrer deslizamentos de terra durante períodos de chuva intensa?",
        titulo: "Questão 39",
        opcoes: [
            "a) Porque a vegetação aumenta o peso do solo.",
            "b) Em áreas desmatadas, não há raízes para segurar o solo e absorver a água. A água escoa rapidamente pela superfície, aumentando o risco de erosão (o solo é levado) e de inundações.",
            "c) Porque a chuva não cai em áreas desmatadas.",
            "d) Porque o solo desmatado é mais resistente."
        ],
        respostaCorreta: 1,
        explicacao: "Em áreas desmatadas, não há raízes para segurar o solo e absorver a água. A água escoa rapidamente pela superfície, aumentando o risco de erosão (o solo é levado) e de inundações.",
        tipo: "multipla_escolha"
    },
    
    // Questão 40
    {
        pergunta: "Uso Consciente da Água\n\nPara economizar água ao lavar a louça, o que você deve fazer para aplicar o conceito de \"não desperdiçar a água\"?",
        titulo: "Questão 40",
        opcoes: [
            "a) Usar a máquina de lavar louça apenas quando está parcialmente cheia.",
            "b) Lavar um prato de cada vez, mantendo a torneira aberta.",
            "c) Fechar a torneira enquanto passa o sabão em todos os pratos, e só reabri-la para o enxágue final, evitando que a água potável escorra inutilmente.",
            "d) Usar apenas a água que seria usada para fabricar um carro."
        ],
        respostaCorreta: 2,
        explicacao: "Desperdício é usar a água de forma não aproveitada. Fechar a torneira enquanto ensaboa é uma dica de economia que evita que a água potável escorra inutilmente, sendo um uso consciente do recurso.",
        tipo: "multipla_escolha"
    }
];

