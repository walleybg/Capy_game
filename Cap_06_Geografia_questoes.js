// Questões do Capítulo 6 de Geografia - "De onde vêm e para onde vão as coisas que consumimos?"
const dadosDoQuizGeografia = [
    // --- GRUPO 1: MÚLTIPLA ESCOLHA (1-10) ---
    {
        tipo: "multipla_escolha",
        titulo: "Recursos Naturais e suas Funções",
        contexto: "Uma turma está estudando sobre recursos naturais e suas diferentes funções no meio ambiente e na sociedade.",
        pergunta: "Analisando as funções dos recursos naturais Sol, Ar, Água e Solo, todas as afirmativas estão corretas, EXCETO:",
        opcoes: [
            "O Sol é essencial para a produção de energia elétrica, além de sua luz e calor.",
            "O ar é importante para a respiração dos seres vivos.",
            "A água é utilizada na agricultura para o cultivo de diversos tipos de plantas.",
            "O solo serve para fazer produtos, mas esta função é atribuída à Água no diagrama."
        ],
        respostaCorreta: "O solo serve para fazer produtos, mas esta função é atribuída à Água no diagrama.",
        justificativa: "As afirmativas 1, 2 e 3 são corretas. A afirmativa 4 é incorreta, pois a função de fazer produtos é atribuída à Água no diagrama, não ao Solo."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Matéria-prima e Produto Final",
        contexto: "Os estudantes estão aprendendo sobre a relação entre matéria-prima e produtos finais através de exemplos práticos.",
        pergunta: "Qual associação correta entre matéria-prima e produto final está representada nas imagens?",
        opcoes: [
            "Algodão → Cadeira",
            "Morango → Geleia",
            "Madeira → Pão",
            "Trigo → Camiseta"
        ],
        respostaCorreta: "Morango → Geleia",
        justificativa: "A opção correta é Morango → Geleia. As outras associações estão incorretas: algodão é para camiseta, madeira para cadeira, e trigo para pão."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Produção Industrial vs Artesanal",
        contexto: "Uma discussão sobre as diferenças entre produção industrial e artesanal, e suas características específicas.",
        pergunta: "Sobre a produção industrial, é correto afirmar que:",
        opcoes: [
            "Utiliza instrumentos manuais e ferramentas simples.",
            "É caracterizada pela produção em pequena escala.",
            "Representa uma forma de transformação manual da matéria-prima.",
            "Cada produto é único e feito sob medida por um único artesão."
        ],
        respostaCorreta: "Cada produto é único e feito sob medida por um único artesão.",
        justificativa: "A produção industrial é caracterizada pelo uso de máquinas, produção em larga escala e padronização. A opção (d) descreve a produção artesanal, onde cada produto é único."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Impactos Ambientais da Industrialização",
        contexto: "Estudo sobre os impactos ambientais causados pela Revolução Industrial e suas consequências para o meio ambiente.",
        pergunta: "Qual foi o principal impacto ambiental positivo da industrialização?",
        opcoes: [
            "Poluição do ar por indústrias e veículos.",
            "Contaminação hídrica por resíduos industriais.",
            "Esgotamento de recursos naturais.",
            "Aumento da biodiversidade devido à criação de novas tecnologias."
        ],
        respostaCorreta: "Aumento da biodiversidade devido à criação de novas tecnologias.",
        justificativa: "As opções (a), (b) e (c) são impactos negativos. A opção (d) é o oposto dos impactos reais da Revolução Industrial, que causou devastação das florestas e desequilíbrio na fauna e flora."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Classificação de Matéria-prima",
        contexto: "Uma aula sobre os diferentes tipos de matéria-prima e sua classificação conforme sua origem e características.",
        pergunta: "Qual alternativa inclui corretamente elementos que NÃO são considerados matéria-prima?",
        opcoes: [
            "Minério de ferro, madeira, algodão.",
            "Petróleo, água, solo.",
            "Maquinários e eletricidade usados no processo de produção industrial.",
            "Plantas, animais, minerais."
        ],
        respostaCorreta: "Maquinários e eletricidade usados no processo de produção industrial.",
        justificativa: "Maquinários e eletricidade são insumos (elementos usados na produção), mas não são matéria-prima. Matéria-prima é o elemento-base para a produção de bens."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Destino Correto do Lixo",
        contexto: "Discussão sobre o descarte adequado de diferentes tipos de resíduos e suas consequências ambientais.",
        pergunta: "Qual é o destino correto para lixo hospitalar e eletrônico?",
        opcoes: [
            "Aterro sanitário comum.",
            "Lixões a céu aberto.",
            "Descarte no lixo hospitalar e eletrônico no lixo comum, misturado com outros resíduos.",
            "Compostagem caseira."
        ],
        respostaCorreta: "Descarte no lixo hospitalar e eletrônico no lixo comum, misturado com outros resíduos.",
        justificativa: "O lixo hospitalar e eletrônico deve ser separado e enviado a empresas responsáveis ou locais específicos, não no lixo comum, pois podem causar danos à saúde humana e ao meio ambiente."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Consumo Consciente",
        contexto: "Reflexão sobre práticas de consumo consciente e suas implicações para o meio ambiente e sociedade.",
        pergunta: "Qual prática NÃO representa consumo consciente?",
        opcoes: [
            "Preferir embalagens sustentáveis.",
            "Comprar a granel para reduzir embalagens.",
            "Adquirir bens desnecessários por impulso, que provavelmente acabarão na lixeira.",
            "Buscar produtos com selos de sustentabilidade."
        ],
        respostaCorreta: "Adquirir bens desnecessários por impulso, que provavelmente acabarão na lixeira.",
        justificativa: "O consumo por impulso de bens desnecessários é explicitamente o oposto do consumo consciente, pois contribui para o desperdício e acúmulo de lixo."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Recursos Naturais Renováveis e Não Renováveis",
        contexto: "Estudo sobre a classificação dos recursos naturais conforme sua capacidade de renovação na natureza.",
        pergunta: "Por que o petróleo é classificado como recurso natural não renovável?",
        opcoes: [
            "Porque é encontrado apenas em alguns países.",
            "Porque sua reposição ocorre em escala de tempo geológico, sendo limitado.",
            "Porque é usado principalmente para combustível.",
            "Porque causa poluição quando extraído."
        ],
        respostaCorreta: "Porque sua reposição ocorre em escala de tempo geológico, sendo limitado.",
        justificativa: "Recursos não renováveis são aqueles cujas reservas não se renovam naturalmente dentro da escala de tempo cronológico, e sua reposição acontece apenas em escala de tempo geológico."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Coleta Seletiva de Materiais",
        contexto: "Aprendizado sobre a importância da coleta seletiva e o destino adequado dos materiais recicláveis.",
        pergunta: "Qual é a principal função da coleta seletiva de materiais recicláveis?",
        opcoes: [
            "Reduzir o volume de lixo nos aterros sanitários.",
            "Garantir que os materiais recicláveis sejam separados e enviados para empresas que os transformam em novos produtos.",
            "Facilitar o trabalho dos coletores de lixo.",
            "Diminuir os custos de transporte de resíduos."
        ],
        respostaCorreta: "Garantir que os materiais recicláveis sejam separados e enviados para empresas que os transformam em novos produtos.",
        justificativa: "A função principal da coleta seletiva é separar materiais recicláveis para que sejam enviados a empresas que os transformem em novos produtos, conforme explicado no texto."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Compostagem Caseira",
        contexto: "Discussão sobre compostagem caseira como alternativa sustentável para o tratamento de resíduos orgânicos.",
        pergunta: "Quais materiais NÃO podem ser compostados em uma composteira caseira?",
        opcoes: [
            "Cascas de frutas e restos de vegetais.",
            "Folhas secas e galhos pequenos.",
            "Frutas cítricas, derivados de trigo, carne e laticínios.",
            "Borra de café e cascas de ovos."
        ],
        respostaCorreta: "Frutas cítricas, derivados de trigo, carne e laticínios.",
        justificativa: "Segundo o texto, frutas cítricas, derivados de trigo, carne, laticínio, arroz, cebola, alho, fezes de animais, plantas doentes e papel não podem ser compostados."
    },

    // --- GRUPO 2: VERDADEIRO/FALSO (11-20) ---
    {
        tipo: "verdadeiro_falso",
        titulo: "Matérias-primas e Produção",
        contexto: "Uma turma está estudando sobre diferentes tipos de matérias-primas e sua utilização na produção de diversos produtos.",
        pergunta: "Analise as afirmações sobre matérias-primas:",
        afirmacoes: [
            "O trigo é uma matéria-prima vegetal utilizada na fabricação de pães e outros alimentos.",
            "A cadeira, um produto final, é feita a partir da madeira, que é uma matéria-prima mineral.",
            "A camiseta é um produto feito de algodão, uma matéria-prima de origem animal.",
            "O morango, uma fruta, é uma matéria-prima vegetal que pode ser usada para fazer geleias."
        ],
        opcoes: [
            "V, F, F, V",
            "F, V, V, F",
            "V, V, F, F",
            "F, F, V, V"
        ],
        respostaCorreta: "V, F, F, V",
        justificativa: "I. Verdadeiro (trigo é vegetal). II. Falso (madeira é vegetal, não mineral). III. Falso (algodão é vegetal, não animal). IV. Verdadeiro (morango é vegetal)."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Lixo e seus Destinos",
        contexto: "Discussão sobre o destino adequado de diferentes tipos de lixo e suas implicações ambientais.",
        pergunta: "Considere as afirmações sobre o destino do lixo:",
        afirmacoes: [
            "O aterro sanitário é um local adequado para o lixo, onde ele é tratado de forma a minimizar a poluição do solo e da água.",
            "Lixões são áreas onde o lixo é descartado de forma inadequada, causando poluição e danos à saúde.",
            "As centrais de separação de material reciclável e cooperativas de catadores são locais onde o lixo misturado é descarregado.",
            "O lixo descartado de maneira errada pode poluir o meio ambiente e causar doenças."
        ],
        opcoes: [
            "V, V, F, V",
            "F, F, V, F",
            "V, F, V, F",
            "F, V, F, V"
        ],
        respostaCorreta: "V, V, F, V",
        justificativa: "I. Verdadeiro (aterro sanitário é adequado). II. Verdadeiro (lixões causam poluição). III. Falso (centrais separam materiais recicláveis). IV. Verdadeiro (descarte errado polui)."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Tipos de Matéria-prima",
        contexto: "Estudo sobre a classificação das matérias-primas conforme sua origem: mineral, vegetal ou animal.",
        pergunta: "Analise as classificações de matérias-primas:",
        afirmacoes: [
            "O minério de ferro, usado para fazer aço, é um exemplo de matéria-prima mineral.",
            "A lã, obtida de ovelhas, é um exemplo de matéria-prima vegetal.",
            "O algodão, usado para fazer tecidos, é um exemplo de matéria-prima animal.",
            "A madeira, extraída de árvores, é um exemplo de matéria-prima vegetal."
        ],
        opcoes: [
            "V, F, V, V",
            "F, V, F, V",
            "V, V, F, F",
            "V, F, F, V"
        ],
        respostaCorreta: "V, F, F, V",
        justificativa: "I. Verdadeiro (ferro é mineral). II. Falso (lã é animal, não vegetal). III. Falso (algodão é vegetal, não animal). IV. Verdadeiro (madeira é vegetal)."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Impactos da Produção Industrial",
        contexto: "Análise dos impactos ambientais causados pela Revolução Industrial e suas consequências para o meio ambiente.",
        pergunta: "Considere as afirmações sobre os impactos da Revolução Industrial:",
        afirmacoes: [
            "A Revolução Industrial, ao utilizar combustíveis fósseis em larga escala, contribuiu para o aquecimento global e chuvas ácidas.",
            "O crescimento urbano e industrial resultou na devastação de florestas e desequilíbrio da fauna e flora.",
            "A poluição da água é um impacto causado principalmente pela atividade industrial que despeja resíduos tóxicos em rios.",
            "A produção sustentável é um conceito antigo, já amplamente praticado pelas indústrias desde o início da Revolução Industrial."
        ],
        opcoes: [
            "V, V, V, F",
            "F, V, V, V",
            "V, F, V, V",
            "F, F, V, F"
        ],
        respostaCorreta: "V, V, V, F",
        justificativa: "I. Verdadeiro (combustíveis fósseis causam aquecimento). II. Verdadeiro (crescimento causou devastação). III. Verdadeiro (indústrias poluem água). IV. Falso (produção sustentável é conceito novo)."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Recursos Naturais no Brasil",
        contexto: "Estudo sobre a riqueza e diversidade de recursos naturais existentes no território brasileiro.",
        pergunta: "Analise as afirmações sobre recursos naturais no Brasil:",
        afirmacoes: [
            "O Brasil detém aproximadamente 12% das reservas de água doce do planeta, sendo a Região Amazônica a principal concentradora.",
            "A matriz elétrica brasileira é majoritariamente composta por usinas termelétricas, devido à escassez de recursos hídricos.",
            "O país possui vasta diversidade de recursos minerais, tanto metálicos (como ferro e ouro) quanto não metálicos (como calcário e areia).",
            "A superexploração dos recursos naturais no Brasil não tem causado grandes danos ambientais, apenas impulsionado a economia."
        ],
        opcoes: [
            "V, F, V, F",
            "V, V, F, V",
            "F, V, F, V",
            "F, F, V, F"
        ],
        respostaCorreta: "V, F, V, F",
        justificativa: "I. Verdadeiro (Brasil tem 12% da água doce). II. Falso (matriz é majoritariamente hidrelétrica). III. Verdadeiro (país tem diversidade mineral). IV. Falso (superexploração causa danos)."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Consumo e Geração de Lixo",
        contexto: "Reflexão sobre o consumo de produtos e a geração de lixo, e as atitudes responsáveis para diminuir o impacto ambiental.",
        pergunta: "Considere as afirmações sobre consumo e lixo:",
        afirmacoes: [
            "Reduzir o consumo e substituir embalagens são atitudes que ajudam a diminuir a quantidade de lixo produzida.",
            "Separar o lixo reciclável é uma das atitudes responsáveis para diminuir o lixo produzido.",
            "O descarte de pilhas e baterias na lixeira de casa é uma prática ambientalmente correta, pois são biodegradáveis.",
            "Consertar ou doar objetos que não se usa mais pode ajudar a preservar o meio ambiente."
        ],
        opcoes: [
            "V, V, F, V",
            "V, F, V, F",
            "F, V, F, V",
            "V, V, V, F"
        ],
        respostaCorreta: "V, V, F, V",
        justificativa: "I. Verdadeiro (reduzir consumo diminui lixo). II. Verdadeiro (separar recicláveis é responsável). III. Falso (pilhas devem ir para locais específicos). IV. Verdadeiro (consertar/doar preserva ambiente)."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Produção Artesanal e Manufatura",
        contexto: "Comparação entre diferentes formas de produção: artesanal, manufatura e industrial, e suas características específicas.",
        pergunta: "Analise as afirmações sobre produção artesanal e manufatura:",
        afirmacoes: [
            "No artesanato, o trabalhador utiliza instrumentos manuais e ferramentas simples, movidas pela força humana, animal ou natural.",
            "A manufatura é caracterizada pela produção em larga escala com o uso de máquinas a vapor, substituindo completamente o trabalho manual.",
            "A manufatura representa uma forma de transformação da matéria-prima em produto final, sendo uma etapa intermediária entre o artesanato e a indústria moderna.",
            "A Revolução Industrial eliminou completamente as formas de produção artesanal e manufatureira, substituindo-as exclusivamente pela produção em série."
        ],
        opcoes: [
            "V, F, V, F",
            "V, V, F, V",
            "F, V, V, F",
            "V, F, F, V"
        ],
        respostaCorreta: "V, F, V, F",
        justificativa: "I. Verdadeiro (artesanato usa ferramentas simples). II. Falso (manufatura não tinha mesma velocidade da indústria). III. Verdadeiro (manufatura é etapa intermediária). IV. Falso (formas coexistem historicamente)."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Matéria-prima vs. Insumos",
        contexto: "Diferenciação entre matéria-prima e insumos utilizados no processo produtivo industrial.",
        pergunta: "Considere as diferenças entre matéria-prima e insumos:",
        afirmacoes: [
            "Matéria-prima é um tipo de insumo, sendo a base para a produção industrial.",
            "Eletricidade e equipamentos são exemplos de insumos, mas não são considerados matérias-primas.",
            "Todos os elementos empregados na cadeia produtiva de um bem, desde os serviços contratados, são chamados de matéria-prima.",
            "O algodão, antes de ser transformado em tecido, é um exemplo de insumo e também de matéria-prima."
        ],
        opcoes: [
            "V, V, F, V",
            "F, V, V, F",
            "V, F, V, V",
            "F, F, F, V"
        ],
        respostaCorreta: "V, V, F, V",
        justificativa: "I. Verdadeiro (matéria-prima é tipo de insumo). II. Verdadeiro (eletricidade é insumo, não matéria-prima). III. Falso (são chamados de insumos). IV. Verdadeiro (algodão é ambos)."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Sustentabilidade e Meio Ambiente",
        contexto: "Discussão sobre conceitos de sustentabilidade, bem-estar e práticas que promovem a conexão com a natureza.",
        pergunta: "Analise as afirmações sobre sustentabilidade:",
        afirmacoes: [
            "O conceito de bem-estar (Wellbeing) e arquitetura regenerativa são tendências que promovem a conexão com a natureza e práticas mais sustentáveis.",
            "A superexploração dos recursos naturais se tornou um problema ambiental grave, ameaçando a manutenção de reservas não renováveis.",
            "A Revolução Industrial, com seus avanços tecnológicos, solucionou todos os problemas ambientais causados pela produção.",
            "Adotar práticas sustentáveis na produção e no consumo é essencial para garantir a disponibilidade de recursos para as futuras gerações."
        ],
        opcoes: [
            "V, V, F, V",
            "V, F, V, V",
            "F, V, V, F",
            "F, F, F, V"
        ],
        respostaCorreta: "V, V, F, V",
        justificativa: "I. Verdadeiro (bem-estar promove sustentabilidade). II. Verdadeiro (superexploração é problema grave). III. Falso (Revolução Industrial contribuiu para poluição). IV. Verdadeiro (práticas sustentáveis são essenciais)."
    },

    // --- GRUPO 3: PERGUNTAS ABERTAS (21-27) ---
    {
        tipo: "aberta",
        titulo: "Categorias de Matéria-prima",
        contexto: "Uma discussão sobre as diferentes categorias de matéria-prima e suas origens na natureza.",
        pergunta: "Quais são as três principais categorias de matéria-prima, de acordo com sua origem? Cite um exemplo para cada uma.",
        respostaCorreta: "As três categorias são: 1) Mineral (exemplo: ferro, ouro, petróleo); 2) Vegetal (exemplo: madeira, algodão, trigo); 3) Animal (exemplo: lã, couro, leite).",
        justificativa: "Resposta deve incluir as três categorias (mineral, vegetal, animal) com pelo menos um exemplo correto para cada categoria."
    },
    {
        tipo: "aberta",
        titulo: "Recursos Renováveis vs Não Renováveis",
        contexto: "Estudo sobre a diferença fundamental entre recursos naturais renováveis e não renováveis.",
        pergunta: "Explique a diferença fundamental entre recursos naturais renováveis e não renováveis.",
        respostaCorreta: "Recursos renováveis são aqueles que se renovam naturalmente em um período de tempo relativamente curto (como água, vento, energia solar). Recursos não renováveis são aqueles cujas reservas não se renovam naturalmente dentro da escala de tempo cronológico, levando milhões de anos para se formar (como petróleo, carvão, minerais).",
        justificativa: "Resposta deve explicar que renováveis se renovam rapidamente na natureza, enquanto não renováveis levam muito tempo (escala geológica) para se formar."
    },
    {
        tipo: "aberta",
        titulo: "Reaproveitamento de Embalagens",
        contexto: "Discussão sobre maneiras criativas e sustentáveis de reaproveitar embalagens em casa.",
        pergunta: "Cite duas maneiras de reaproveitar embalagens em casa, conforme sugerido pelos textos.",
        respostaCorreta: "Exemplos: usar potes de vidro para armazenar alimentos, transformar garrafas plásticas em vasos para plantas, usar caixas de papelão para organização, criar brinquedos com embalagens, usar embalagens como recipientes para organizar objetos.",
        justificativa: "Resposta deve citar pelo menos duas formas práticas de reutilizar embalagens domésticas, demonstrando criatividade e consciência ambiental."
    },
    {
        tipo: "aberta",
        titulo: "Compostagem Caseira",
        contexto: "Aprendizado sobre compostagem caseira como alternativa sustentável para tratamento de resíduos orgânicos.",
        pergunta: "O que é a compostagem caseira e qual seu principal benefício ambiental?",
        respostaCorreta: "Compostagem caseira é o processo de decomposição de resíduos orgânicos (como restos de frutas e vegetais) que transforma esses materiais em adubo natural. O principal benefício é reduzir a quantidade de lixo orgânico enviado para aterros e produzir fertilizante natural para plantas.",
        justificativa: "Resposta deve explicar o processo de decomposição de orgânicos e mencionar benefícios como redução de lixo e produção de adubo."
    },
    {
        tipo: "aberta",
        titulo: "Consumo por Impulso",
        contexto: "Reflexão sobre os problemas causados pelo consumo impulsivo e suas consequências ambientais.",
        pergunta: "De que forma o 'consumo por impulso' contribui para o problema do lixo?",
        respostaCorreta: "O consumo por impulso leva as pessoas a comprarem produtos desnecessários que muitas vezes não são utilizados e acabam sendo descartados rapidamente, aumentando a quantidade de lixo produzido. Isso contribui para o desperdício de recursos naturais e sobrecarga dos sistemas de descarte.",
        justificativa: "Resposta deve conectar compras desnecessárias com aumento de descarte e desperdício de recursos."
    },
    {
        tipo: "aberta",
        titulo: "Diferença entre Matéria-prima e Insumo",
        contexto: "Esclarecimento sobre a diferença conceitual entre matéria-prima e insumos no processo produtivo.",
        pergunta: "Qual a principal diferença entre matéria-prima e insumo? Dê um exemplo de algo que é insumo, mas não matéria-prima.",
        respostaCorreta: "Matéria-prima é o elemento-base que será transformado no produto final, enquanto insumo é qualquer elemento usado no processo produtivo. Exemplo de insumo que não é matéria-prima: eletricidade, maquinários, mão de obra, combustível para transporte.",
        justificativa: "Resposta deve distinguir que matéria-prima vira produto final, enquanto insumo é usado no processo, com exemplo correto."
    },
    {
        tipo: "aberta",
        titulo: "Impactos Ambientais da Revolução Industrial",
        contexto: "Análise dos principais impactos ambientais negativos causados pela Revolução Industrial.",
        pergunta: "Mencione dois impactos ambientais negativos causados pela Revolução Industrial, conforme descrito nos textos.",
        respostaCorreta: "Exemplos: poluição do ar por indústrias e veículos, devastação de florestas, desequilíbrio da fauna e flora, poluição da água por resíduos industriais, aquecimento global, chuvas ácidas, esgotamento de recursos naturais.",
        justificativa: "Resposta deve mencionar pelo menos dois impactos ambientais negativos listados nos textos sobre a Revolução Industrial."
    },

    // --- GRUPO 4: QUESTÕES DE OPINIÃO (28-30) ---
    {
        tipo: "opiniao",
        titulo: "Estudo de Caso: Consumo e Lixo - Bruno e os Tênis",
        contexto: "Bruno adora usar tênis novos. Todos os meses, ele vai com seu pai à loja de que mais gosta para comprar novos modelos e não perder nenhum lançamento. Ao todo, Bruno já possui trinta pares de tênis e costuma utilizar apenas o modelo que comprou por último, deixando os outros guardados em seu armário.",
        pergunta: "a) Qual a sua opinião sobre a forma como Bruno consome tênis? b) O que Bruno poderia fazer com os tênis que não usa mais? Proponha uma solução pensando na preservação.",
        respostaCorreta: "Resposta aberta - opinião pessoal",
        justificativa: "Esta é uma questão de opinião. O estudante deve expressar sua visão sobre consumo excessivo e sugerir alternativas sustentáveis como doação, venda, troca ou reutilização dos tênis não utilizados."
    },
    {
        tipo: "opiniao",
        titulo: "Estudo de Caso: Descarte de Lixo Escolar",
        contexto: "Na sua escola o descarte de lixo não está sendo feito de forma correta, com o lixo misturado e as lixeiras sempre transbordando. Isso gera mau cheiro, sujeira e proliferação de seres causadores de doenças.",
        pergunta: "Como você, junto com seus colegas, poderia propor uma solução para que o pátio da escola e o recreio fiquem limpos e que o descarte do lixo seja feito de maneira adequada?",
        respostaCorreta: "Resposta aberta - sugestões pessoais",
        justificativa: "Esta é uma questão de opinião. O estudante deve sugerir soluções como: implementar coleta seletiva, aumentar número de lixeiras, campanhas de conscientização, mutirões de limpeza, parcerias com cooperativas de reciclagem, etc."
    },
    {
        tipo: "opiniao",
        titulo: "Estudo de Caso: Restaurante e Desperdício",
        contexto: "Um restaurante popular serve centenas de refeições por dia. Ao final do expediente, há sempre uma grande quantidade de sobras de alimentos, como cascas de vegetais, restos de frutas e comida não consumida pelos clientes, que são descartadas no lixo comum.",
        pergunta: "Pensando nas dicas para um lar sustentável, que soluções o restaurante poderia adotar para lidar com essas sobras de alimentos de forma mais sustentável? Apresente pelo menos duas ideias.",
        respostaCorreta: "Resposta aberta - sugestões sustentáveis",
        justificativa: "Esta é uma questão de opinião. O estudante deve sugerir soluções como: compostagem dos restos orgânicos, doação de alimentos ainda próprios para consumo, parcerias com ONGs, redução de porções, aproveitamento integral dos alimentos, criação de horta com o adubo da compostagem, etc."
    }
];
