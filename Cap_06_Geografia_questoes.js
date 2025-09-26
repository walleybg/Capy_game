// Questões do Capítulo 6 de Geografia - "De onde vem e para onde vão as coisas que consumimos"
const dadosDoQuizGeografia = [
    // --- GRUPO 1: MÚLTIPLA ESCOLHA (10 questões) ---
    {
        tipo: "multipla_escolha",
        titulo: "Recursos Naturais e suas Funções",
        contexto: "Com base na imagem apresentada na fonte \"Cap 06 - Geografia.pdf\", página 91, no item 1 \"Relacione cada recurso natural à sua função...\", que relaciona recursos naturais à sua função, observe as afirmativas abaixo:",
        pergunta: "1. O Sol é essencial para a produção de energia elétrica, além de sua luz e calor.\n2. O ar é importante para a respiração dos seres vivos.\n3. A água é utilizada na agricultura para o cultivo de diversos tipos de plantas.\n4. O solo serve para beber e fazer produtos.\n\nTodas as afirmativas são corretas, exceto:",
        opcoes: [
            "1 e 4",
            "2 e 3",
            "1 e 2",
            "3 e 4"
        ],
        respostaCorreta: "1 e 4",
        justificativa: "A afirmativa 4 está incorreta. O solo não serve para beber e fazer produtos - essa função é da água. O solo é usado para plantio e construção."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Matérias-primas e Produtos Finais",
        contexto: "Observe as imagens e o quadro de matérias-primas na fonte \"Cap 06 - Geografia.pdf\", página 91, no item 2 \"Observe as matérias-primas citadas no quadro abaixo.\", que mostra \"trigo – madeira – morango – algodão\".",
        pergunta: "Marque a opção mais adequada que associa corretamente uma matéria-prima ao produto final correspondente, considerando as imagens fornecidas na mesma página:",
        opcoes: [
            "Algodão – Cadeira (imagem d)",
            "Morango – Geleia (imagem b)",
            "Madeira – Pão (imagem c)",
            "Trigo – Camiseta (imagem a)"
        ],
        respostaCorreta: "Morango – Geleia (imagem b)",
        justificativa: "A associação correta é Morango → Geleia. As outras opções estão incorretas: algodão faz camiseta, madeira faz cadeira, e trigo faz pão."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Produção Industrial",
        contexto: "A fonte \"Cap 06 - Geografia.pdf\", página 92, no item 4, descreve que \"na produção industrial, é possível fabricar uma grande quantidade de itens de uma só vez\".",
        pergunta: "Marque a opção que não reflete conceitos abordados sobre a produção industrial:",
        opcoes: [
            "Utiliza máquinas e processos padronizados para alta velocidade de produção.",
            "Permite a fabricação de um grande volume de produtos em pouco tempo.",
            "Geralmente envolve menor custo por unidade produzida devido à escala.",
            "Cada produto é único e feito sob medida por um único artesão."
        ],
        respostaCorreta: "Cada produto é único e feito sob medida por um único artesão.",
        justificativa: "A opção (d) descreve a produção artesanal, não a industrial. A produção industrial é caracterizada pela padronização e produção em massa."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Impactos Ambientais da Revolução Industrial",
        contexto: "O texto \"OS IMPACTOS AMBIENTAIS DA REVOLUÇÃO INDUSTRIAL: MUDANÇAS ECONÔMICAS E SOCIAIS\", página 48, no terceiro parágrafo de \"Resultados e Discussão\", afirma que \"Esse processo de industrialização afetou o meio ambiente com o aumento do desmatamento e da queima de combustível para movimentar as máquinas. Esse desenvolvimento se espalhou pelo mundo possibilitando a consolidação do capitalismo. O resultado foi o estímulo a exploração dos recursos naturais de maneira excessiva.\"",
        pergunta: "Com base neste trecho, qual das opções abaixo NÃO é um impacto ambiental direto da Revolução Industrial mencionado ou implícito?",
        opcoes: [
            "Poluição do ar devido à queima de combustíveis.",
            "Contaminação dos recursos hídricos por resíduos industriais.",
            "Redução da camada de ozônio e mudanças climáticas.",
            "Aumento da biodiversidade devido à criação de novas tecnologias."
        ],
        respostaCorreta: "Aumento da biodiversidade devido à criação de novas tecnologias.",
        justificativa: "A Revolução Industrial causou redução da biodiversidade, não aumento. O desmatamento e a poluição prejudicaram os ecossistemas naturais."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Conceito de Matéria-prima",
        contexto: "O texto \"Matéria-prima: o que é, exemplos, tipos, importância - Brasil Escola\", página 25, no primeiro parágrafo, define matéria-prima como \"o elemento-base para a produção de bens industriais intermediários e mercadorias finalizadas\". Também menciona que \"Podem ser, além disso, empregadas na produção tanto na sua forma in natura quanto após terem passado por algum processo de beneficiamento.\"",
        pergunta: "Todas as afirmativas sobre matéria-prima são corretas, exceto:",
        opcoes: [
            "É a base para a fabricação de todos os produtos que usamos no dia a dia.",
            "Pode ser utilizada diretamente da natureza, sem qualquer transformação.",
            "Inclui maquinários e eletricidade usados no processo de produção industrial.",
            "É classificada em mineral, animal e vegetal, de acordo com sua origem."
        ],
        respostaCorreta: "Inclui maquinários e eletricidade usados no processo de produção industrial.",
        justificativa: "Maquinários e eletricidade são insumos do processo produtivo, não matérias-primas. Matérias-primas são os elementos básicos transformados em produtos."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Reaproveitamento de Resíduos",
        contexto: "A fonte \"Cap 06 - Geografia.pdf\", página 93, no quadro \"As cascas de frutas podem ser reaproveitadas...\", exemplifica diferentes tipos de lixo e como podem ser reaproveitados. É dito que \"As cascas de frutas podem ser reaproveitadas em diversas receitas, como geleias, tortas, doces e bolos.\"",
        pergunta: "Marque a opção que não reflete um conceito de reaproveitamento adequado do lixo, conforme os exemplos fornecidos nos textos:",
        opcoes: [
            "Utilizar potes de vidro de geleia para armazenar novos alimentos caseiros.",
            "Transformar sacolas plásticas usadas para transporte de produtos em novos itens.",
            "Descartar o lixo hospitalar e eletrônico no lixo comum, misturado com outros resíduos.",
            "Usar talos e folhas de vegetais para fazer caldos e sucos."
        ],
        respostaCorreta: "Descartar o lixo hospitalar e eletrônico no lixo comum, misturado com outros resíduos.",
        justificativa: "Lixo hospitalar e eletrônico são perigosos e devem ter descarte especial, nunca misturados com lixo comum. Isso pode causar contaminação e danos ambientais."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Consumo Consciente",
        contexto: "Segundo o texto \"Como reduzir o lixo em casa? 11 dicas para um lar sustentável - Pointer\", página 12, acima da Dica 1 \"Assuma uma atitude de consumo consciente\", \"Consumir de forma consciente é o primeiro passo para começar a ter uma atitude positiva com o meio ambiente\".",
        pergunta: "Qual das seguintes ações NÃO se alinha com o princípio do consumo consciente?",
        opcoes: [
            "Preferir produtos com embalagens de papel, vidro ou metal em vez de plástico.",
            "Comprar produtos a granel para reduzir a quantidade de embalagens.",
            "Adquirir bens desnecessários por impulso, que provavelmente acabarão na lixeira.",
            "Procurar selos de orgânico, vegano, cruelty free e sustentável ao fazer compras."
        ],
        respostaCorreta: "Adquirir bens desnecessários por impulso, que provavelmente acabarão na lixeira.",
        justificativa: "Comprar por impulso produtos desnecessários vai contra o consumo consciente, pois gera desperdício e mais lixo desnecessário."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Recursos Naturais Renováveis e Não Renováveis",
        contexto: "O texto \"Recursos naturais: o que são, tipos, importância - Brasil Escola\", página 60, no primeiro parágrafo, afirma que \"'Recursos naturais são todos os elementos da natureza utilizados pelos seres humanos para a sua subsistência e para seu desenvolvimento socioeconômico. Podem ser classificados em renováveis e não renováveis de acordo com a sua capacidade de reposição na natureza.'\"",
        pergunta: "Considerando a classificação de recursos naturais, marque a opção que apresenta um exemplo de recurso não renovável e a justificativa correta:",
        opcoes: [
            "Água – Porque é reposta pelos ciclos naturais, sendo abundante.",
            "Petróleo – Porque sua reposição ocorre em escala de tempo geológico, sendo limitado.",
            "Vento – Porque é uma fonte de energia que se esgota rapidamente com o uso.",
            "Solo – Porque é um recurso biológico que pode ser cultivado infinitamente."
        ],
        respostaCorreta: "Petróleo – Porque sua reposição ocorre em escala de tempo geológico, sendo limitado.",
        justificativa: "O petróleo é um recurso não renovável porque sua formação leva milhões de anos, muito além da escala de tempo humana, tornando-o limitado."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Coleta Seletiva de Lixo",
        contexto: "A fonte \"Cap 06 - Geografia.pdf\", página 94, no quadro \"Em alguns lugares, existe um serviço muito importante: a coleta seletiva de lixo...\", menciona a coleta seletiva e diz que \"Em alguns lugares, existe um serviço muito importante: a coleta seletiva de lixo. Nesse tipo de serviço, um caminhão de coleta costuma passar em um dia específico da semana só para recolher os materiais recicláveis, como papel, plástico, metal e vidro.\"",
        pergunta: "Marque a opção que descreve a importância da coleta seletiva de forma mais adequada:",
        opcoes: [
            "Permite que todos os tipos de lixo, incluindo orgânicos, sejam misturados para facilitar o descarte.",
            "Garante que os materiais recicláveis sejam separados e enviados para empresas que os transformam em novos produtos.",
            "É um serviço disponível apenas em grandes cidades, não sendo relevante para municípios menores.",
            "Tem como principal objetivo reduzir o volume de lixo enviado para lixões, sem foco na reciclagem."
        ],
        respostaCorreta: "Garante que os materiais recicláveis sejam separados e enviados para empresas que os transformam em novos produtos.",
        justificativa: "A coleta seletiva tem como principal função separar materiais recicláveis para que sejam reprocessados em novos produtos, fechando o ciclo da reciclagem."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Lixo Orgânico e Compostagem",
        contexto: "O texto \"Como reduzir o lixo em casa? 11 dicas para um lar sustentável - Pointer\", página 11, no primeiro parágrafo, informa que \"Os dados mais recentes divulgados pelo Instituto de Pesquisa Econômica Aplicada (Ipea) demonstram que os materiais orgânicos representam 57,41% do total de resíduo sólido produzido no Brasil\". O mesmo texto, na página 16, na Dica 8 \"Invista na compostagem caseira\", apresenta a compostagem caseira como forma de \"transformar alimentos em adubo\".",
        pergunta: "Todas as afirmativas sobre o lixo orgânico e a compostagem são corretas, exceto:",
        opcoes: [
            "O lixo orgânico é o tipo de resíduo sólido de maior volume produzido no Brasil.",
            "A compostagem é um processo que transforma resíduos orgânicos em adubo rico em nutrientes para o solo.",
            "Frutas cítricas, derivados de trigo, carne e laticínios podem ser compostados em uma composteira caseira sem problemas (conforme a página 17).",
            "Uma composteira caseira, quando montada corretamente, não atrai insetos e não exala mau cheiro (conforme a página 17)."
        ],
        respostaCorreta: "Frutas cítricas, derivados de trigo, carne e laticínios podem ser compostados em uma composteira caseira sem problemas (conforme a página 17).",
        justificativa: "Frutas cítricas, derivados de trigo, carne e laticínios NÃO devem ser compostados em composteiras caseiras, pois podem atrair pragas e causar problemas no processo."
    },

    // --- GRUPO 2: VERDADEIRO OU FALSO (10 questões) ---
    {
        tipo: "verdadeiro_falso",
        titulo: "Matérias-primas e Produção",
        contexto: "A fonte \"Cap 06 - Geografia.pdf\", página 91, no quadro do item 2, mostra exemplos de matérias-primas como trigo, madeira, morango e algodão, e os produtos que delas derivam. O texto \"Matéria-prima: o que é, exemplos, tipos, importância - Brasil Escola\", página 25, no primeiro parágrafo, complementa que as matérias-primas são o elemento-base para a produção de bens e são de origem primária.",
        pergunta: "Analise as afirmações abaixo e marque V para verdadeiro e F para falso:",
        afirmacoes: [
            "O trigo é uma matéria-prima vegetal utilizada na fabricação de pães e outros alimentos.",
            "A cadeira, um produto final, é feita a partir da madeira, que é uma matéria-prima mineral.",
            "A camiseta é um produto feito de algodão, uma matéria-prima de origem animal.",
            "O morango, uma fruta, é uma matéria-prima vegetal que pode ser usada para fazer geleias."
        ],
        opcoes: [
            "V F F V",
            "V V F F",
            "F V V F",
            "F F V V"
        ],
        respostaCorreta: "V F F V",
        justificativa: "I. Verdadeiro (trigo é vegetal). II. Falso (madeira é vegetal, não mineral). III. Falso (algodão é vegetal, não animal). IV. Verdadeiro (morango é vegetal)."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Lixo e seus Destinos",
        contexto: "O texto \"Destinos do lixo\" na fonte \"Cap 06 - Geografia.pdf\", página 95, no primeiro parágrafo, descreve diferentes lugares para onde o lixo pode ir: \"Depois que o lixo que não é separado é recolhido, ele precisa ser levado a um lugar adequado. No entanto, em alguns casos, isso não acontece. Em certos municípios brasileiros, por exemplo, os caminhões de coleta jogam o lixo em um lugar conhecido como lixão.\"",
        pergunta: "Analise as afirmações abaixo e marque V para verdadeiro e F para falso:",
        afirmacoes: [
            "O aterro sanitário é um local adequado para o lixo, onde ele é tratado de forma a minimizar a poluição do solo e da água (conforme página 95, segundo parágrafo).",
            "Lixões são áreas onde o lixo é descartado de forma inadequada, causando poluição e danos à saúde (conforme página 95, primeiro parágrafo).",
            "As centrais de separação de material reciclável e cooperativas de catadores são locais onde o lixo misturado é descarregado (conforme página 95, terceiro parágrafo, elas recebem lixo coletado).",
            "O lixo descartado de maneira errada pode poluir o meio ambiente e causar doenças (conforme página 95, último parágrafo)."
        ],
        opcoes: [
            "V V F V",
            "F V F V",
            "V F V F",
            "F F V V"
        ],
        respostaCorreta: "V V F V",
        justificativa: "I. Verdadeiro (aterros são adequados). II. Verdadeiro (lixões são inadequados). III. Falso (centrais separam, não apenas recebem lixo misturado). IV. Verdadeiro (descarte errado polui)."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Tipos de Matéria-prima",
        contexto: "De acordo com o texto \"Matéria-prima: o que é, exemplos, tipos, importância - Brasil Escola\", página 30, no quinto parágrafo da seção \"Tipos de matéria-prima\", \"as matérias-primas podem ser classificadas de acordo com o setor ou com a natureza do elemento a ser utilizado em três categorias: mineral, animal e vegetal.\"",
        pergunta: "Analise as afirmações abaixo e marque V para verdadeiro e F para falso:",
        afirmacoes: [
            "O minério de ferro, usado para fazer aço, é um exemplo de matéria-prima mineral (conforme página 31).",
            "O leite, que pode ser consumido diretamente ou transformado em laticínios, é uma matéria-prima vegetal (conforme página 32, é animal).",
            "A soja, cultivada por meio da agricultura, é uma matéria-prima vegetal para a produção de óleo e ração animal (conforme página 33).",
            "A lã, obtida da criação de animais, é uma matéria-prima de origem animal utilizada na indústria têxtil (conforme página 32)."
        ],
        opcoes: [
            "V F V V",
            "F V F V",
            "V V F F",
            "F F V V"
        ],
        respostaCorreta: "V F V V",
        justificativa: "I. Verdadeiro (ferro é mineral). II. Falso (leite é animal, não vegetal). III. Verdadeiro (soja é vegetal). IV. Verdadeiro (lã é animal)."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Redução do Lixo",
        contexto: "O documento \"Como reduzir o lixo em casa? 11 dicas para um lar sustentável - Pointer\", página 11, no primeiro parágrafo, destaca a importância de reduzir o lixo gerado em casa. O \"Cap 06 - Geografia.pdf\", página 100, nos quadros \"Pensar antes de comprar\" e \"Separar os materiais recicláveis\", também menciona ações como \"Pensar antes de comprar\" e \"Separar os materiais recicláveis\".",
        pergunta: "Analise as afirmações abaixo e marque V para verdadeiro e F para falso:",
        afirmacoes: [
            "Assumir uma atitude de consumo consciente, repensando o que se compra e suas embalagens, ajuda a reduzir o lixo (conforme Pointer, página 12, Dica 1).",
            "Evitar embalagens de plástico e isopor não contribui significativamente para a redução do lixo, pois esses materiais se decompõem rapidamente (conforme Pointer, página 13, Dica 3, esses materiais demoram muito para se decompor).",
            "O reaproveitamento de embalagens para armazenamento de outros produtos é uma prática eficaz para diminuir o lixo (conforme Pointer, página 15, Dica 5).",
            "A compostagem caseira é uma forma de transformar alimentos em adubo, contribuindo para a redução do volume de lixo orgânico (conforme Pointer, página 16, Dica 8)."
        ],
        opcoes: [
            "V F V V",
            "V V F F",
            "F V V V",
            "F F F V"
        ],
        respostaCorreta: "V F V V",
        justificativa: "I. Verdadeiro (consumo consciente reduz lixo). II. Falso (plástico e isopor demoram muito para se decompor). III. Verdadeiro (reaproveitamento é eficaz). IV. Verdadeiro (compostagem reduz lixo orgânico)."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Impactos da Produção Industrial",
        contexto: "O texto \"OS IMPACTOS AMBIENTAIS DA REVOLUÇÃO INDUSTRIAL: MUDANÇAS ECONÔMICAS E SOCIAIS\", página 48, no terceiro parágrafo de \"Resultados e Discussão\", descreve que o processo de industrialização \"afetou o meio ambiente com o aumento do desmatamento e da queima de combustível para movimentar as máquinas.\"",
        pergunta: "Analise as afirmações abaixo e marque V para verdadeiro e F para falso:",
        afirmacoes: [
            "A Revolução Industrial, ao utilizar combustíveis fósseis em larga escala, contribuiu para o aquecimento global e chuvas ácidas (conforme página 53, primeiro parágrafo).",
            "O crescimento urbano e industrial resultou na devastação de florestas e desequilíbrio da fauna e flora (conforme página 54, primeiro parágrafo).",
            "A poluição da água é um impacto causado principalmente pela atividade industrial que despeja resíduos tóxicos em rios (conforme página 53, segundo parágrafo).",
            "A produção sustentável é um conceito antigo, já amplamente praticado pelas indústrias desde o início da Revolução Industrial (conforme página 55, primeiro parágrafo, produção sustentável é um novo desafio)."
        ],
        opcoes: [
            "V V V F",
            "F V V V",
            "V F F V",
            "V V F F"
        ],
        respostaCorreta: "V V V F",
        justificativa: "I. Verdadeiro (combustíveis fósseis causam aquecimento e chuva ácida). II. Verdadeiro (crescimento industrial devastou florestas). III. Verdadeiro (indústrias poluem água). IV. Falso (produção sustentável é conceito novo)."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Recursos Naturais no Brasil",
        contexto: "O texto \"Recursos naturais: o que são, tipos, importância - Brasil Escola\", página 71, no primeiro parágrafo da seção \"Recursos naturais no Brasil\", afirma que \"O Brasil é um dos países com maior riqueza e diversidade de recursos naturais existente em todo o mundo\".",
        pergunta: "Analise as afirmações abaixo e marque V para verdadeiro e F para falso:",
        afirmacoes: [
            "O Brasil detém aproximadamente 12% das reservas de água doce do planeta, sendo a Região Amazônica a principal concentradora (conforme página 71, segundo parágrafo).",
            "A matriz elétrica brasileira é majoritariamente composta por usinas termelétricas, devido à escassez de recursos hídricos (conforme página 72, primeiro parágrafo, é majoritariamente hidrelétrica).",
            "O país possui vasta diversidade de recursos minerais, tanto metálicos (como ferro e ouro) quanto não metálicos (como calcário e areia) (conforme página 72, segundo parágrafo).",
            "A superexploração dos recursos naturais no Brasil não tem causado grandes danos ambientais, apenas impulsionado a economia (conforme página 73, segundo parágrafo, a exploração intensiva tem causado danos)."
        ],
        opcoes: [
            "V F V F",
            "V V F V",
            "F V F V",
            "F F V F"
        ],
        respostaCorreta: "V F V F",
        justificativa: "I. Verdadeiro (Brasil tem 12% da água doce). II. Falso (matriz é hidrelétrica, não termelétrica). III. Verdadeiro (país tem recursos minerais diversos). IV. Falso (superexploração causa danos ambientais)."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Consumo e Geração de Lixo",
        contexto: "A fonte \"Cap 06 - Geografia.pdf\", página 93, no primeiro parágrafo da seção \"O consumo de produtos e a geração de lixo\", aborda \"O consumo de produtos e a geração de lixo\", explicando que \"Fazemos o descarte de diversos materiais diariamente.\"",
        pergunta: "Analise as afirmações abaixo e marque V para verdadeiro e F para falso:",
        afirmacoes: [
            "Reduzir o consumo e substituir embalagens são atitudes que ajudam a diminuir a quantidade de lixo produzida (conforme página 105, último parágrafo).",
            "Separar o lixo reciclável é uma das atitudes responsáveis para diminuir o lixo produzido (conforme página 100, quadro \"Separar os materiais recicláveis\").",
            "O descarte de pilhas e baterias na lixeira de casa é uma prática ambientalmente correta, pois são biodegradáveis (conforme página 98, lixo eletrônico, devem ser enviados para empresas responsáveis).",
            "Consertar ou doar objetos que não se usa mais pode ajudar a preservar o meio ambiente (conforme página 100, quadro \"Consertar ou doar\")."
        ],
        opcoes: [
            "V V F V",
            "V F V F",
            "F V F V",
            "V V V F"
        ],
        respostaCorreta: "V V F V",
        justificativa: "I. Verdadeiro (reduzir consumo diminui lixo). II. Verdadeiro (separar recicláveis é responsável). III. Falso (pilhas e baterias são tóxicas, não biodegradáveis). IV. Verdadeiro (consertar e doar preserva ambiente)."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Produção Artesanal e Manufatura",
        contexto: "O texto \"OS IMPACTOS AMBIENTAIS DA REVOLUÇÃO INDUSTRIAL: MUDANÇAS ECONÔMICAS E SOCIAIS\", página 51, no terceiro parágrafo, diferencia artesanato e manufatura. O artesanato é a \"forma de produção mais antiga\" e a manufatura \"antecedeu a indústria\".",
        pergunta: "Analise as afirmações abaixo e marque V para verdadeiro e F para falso:",
        afirmacoes: [
            "No artesanato, o trabalhador utiliza instrumentos manuais e ferramentas simples, movidas pela força humana, animal ou natural (conforme página 51, terceiro parágrafo).",
            "A manufatura é caracterizada pela produção em larga escala com o uso de máquinas a vapor, substituindo completamente o trabalho manual (conforme página 51, terceiro parágrafo, ainda usa trabalho manual).",
            "O artesanato representa uma forma de transformação manual da matéria-prima, onde cada produto é único (conforme página 51, terceiro parágrafo).",
            "A manufatura antecedeu a indústria e já utilizava a divisão do trabalho, mas ainda dependia principalmente da força humana (conforme página 51, terceiro parágrafo)."
        ],
        opcoes: [
            "V F V V",
            "F V F V",
            "V V F F",
            "F F V V"
        ],
        respostaCorreta: "V F V V",
        justificativa: "I. Verdadeiro (artesanato usa ferramentas simples). II. Falso (manufatura ainda usa trabalho manual, não máquinas a vapor). III. Verdadeiro (artesanato é manual e único). IV. Verdadeiro (manufatura antecedeu indústria)."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Insumos e Matérias-primas",
        contexto: "O texto \"Matéria-prima: o que é, exemplos, tipos, importância - Brasil Escola\", página 37, apresenta uma tabela que diferencia matéria-prima de insumos, explicando que insumos incluem \"todos os elementos empregados na cadeia produtiva de um bem\".",
        pergunta: "Analise as afirmações abaixo e marque V para verdadeiro e F para falso:",
        afirmacoes: [
            "A energia elétrica utilizada no processo produtivo é considerada um insumo, não uma matéria-prima (conforme página 37, tabela).",
            "Todos os elementos empregados na cadeia produtiva de um bem, desde os serviços contratados, são chamados de matéria-prima (conforme página 37, tabela, são chamados de insumos).",
            "O algodão, antes de ser transformado em tecido, é um exemplo de insumo e também de matéria-prima (conforme página 33, segundo parágrafo, e tabela da página 37)."
        ],
        opcoes: [
            "V F V",
            "F V F",
            "V V F",
            "F F V"
        ],
        respostaCorreta: "V F V",
        justificativa: "I. Verdadeiro (energia é insumo). II. Falso (todos os elementos são insumos, não matérias-primas). III. Verdadeiro (algodão pode ser ambos dependendo do contexto)."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Sustentabilidade e Meio Ambiente",
        contexto: "O texto \"Como reduzir o lixo em casa? 11 dicas para um lar sustentável - Pointer\", página 11, no último parágrafo, destaca que \"a sustentabilidade é uma necessidade urgente\" e que \"pequenas ações podem fazer grande diferença\".",
        pergunta: "Analise as afirmações abaixo e marque V para verdadeiro e F para falso:",
        afirmacoes: [
            "Preferir produtos com embalagens retornáveis ou reutilizáveis contribui para a sustentabilidade (conforme página 14, Dica 4).",
            "Comprar produtos a granel aumenta a geração de lixo, pois requer mais embalagens individuais (conforme página 13, Dica 2, reduz embalagens).",
            "Procurar selos de certificação ambiental ao fazer compras é uma prática sustentável (conforme página 12, Dica 1).",
            "A sustentabilidade depende apenas de grandes empresas e governos, não de ações individuais (conforme página 11, pequenas ações fazem diferença)."
        ],
        opcoes: [
            "V F V F",
            "F V F V",
            "V V F F",
            "F F V V"
        ],
        respostaCorreta: "V F V F",
        justificativa: "I. Verdadeiro (embalagens retornáveis são sustentáveis). II. Falso (produtos a granel reduzem embalagens). III. Verdadeiro (selos de certificação são importantes). IV. Falso (ações individuais também fazem diferença)."
    }
];
