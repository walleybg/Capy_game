// Banco de questões para o Capítulo 8 de História - Patrimônios Culturais do Brasil
const dadosDoQuizHistoria8 = [
    // ========== MÚLTIPLA ESCOLHA (Q1-Q10) ==========
    {
        numero: 1,
        tipo: "multipla",
        titulo: "Patrimônio Cultural",
        contexto: "",
        pergunta: "O que é Patrimônio Cultural?",
        opcoes: [
            "a) Apenas monumentos antigos e museus.",
            "b) Somente festas e celebrações populares.",
            "c) O conjunto de bens materiais, imateriais e naturais que representam a história e a identidade de um povo.",
            "d) Apenas construções religiosas como igrejas e templos."
        ],
        respostaCorreta: 2,
        explicacao: "Patrimônio Cultural é o conjunto de bens materiais, imateriais e naturais que carregam a história, a cultura e a identidade de um povo ou nação."
    },
    {
        numero: 2,
        tipo: "multipla",
        titulo: "Patrimônio Material",
        contexto: "",
        pergunta: "Qual das alternativas apresenta um exemplo de Patrimônio Material?",
        opcoes: [
            "a) A dança do frevo em Pernambuco.",
            "b) O ofício de violeiro.",
            "c) A Igreja de São Francisco de Assis em Ouro Preto.",
            "d) As lendas e histórias contadas pelos povos indígenas."
        ],
        respostaCorreta: 2,
        explicacao: "A Igreja de São Francisco de Assis é um exemplo de Patrimônio Material, pois é uma construção física que representa a história e a arte do período colonial brasileiro."
    },
    {
        numero: 3,
        tipo: "multipla",
        titulo: "Patrimônio Imaterial",
        contexto: "",
        pergunta: "Qual das alternativas apresenta um exemplo de Patrimônio Imaterial?",
        opcoes: [
            "a) O Mercado Modelo em Salvador.",
            "b) A roda de samba.",
            "c) O Teatro Amazonas em Manaus.",
            "d) As ruínas de São Miguel das Missões."
        ],
        respostaCorreta: 1,
        explicacao: "A roda de samba é um exemplo de Patrimônio Imaterial, pois representa uma manifestação cultural e artística transmitida de geração em geração."
    },
    {
        numero: 4,
        tipo: "multipla",
        titulo: "Patrimônio Natural",
        contexto: "",
        pergunta: "Qual das alternativas apresenta um exemplo de Patrimônio Natural?",
        opcoes: [
            "a) O Pelourinho em Salvador.",
            "b) A Festa do Divino.",
            "c) O Parque Nacional da Serra do Espinhaço.",
            "d) A Igreja Matriz de Nossa Senhora do Pilar."
        ],
        respostaCorreta: 2,
        explicacao: "O Parque Nacional da Serra do Espinhaço é um exemplo de Patrimônio Natural, valorizado por suas características geológicas e biológicas únicas."
    },
    {
        numero: 5,
        tipo: "multipla",
        titulo: "Cidades Históricas",
        contexto: "",
        pergunta: "Por que as cidades históricas são importantes?",
        opcoes: [
            "a) Apenas porque atraem turistas.",
            "b) Porque preservam construções que revelam a história de uma época e permitem imaginar como era a vida no passado.",
            "c) Apenas pelo aspecto estético das construções antigas.",
            "d) Porque são locais onde não se pode fazer modificações."
        ],
        respostaCorreta: 1,
        explicacao: "As cidades históricas são importantes porque preservam construções que revelam os característicos da época em que foram construídas, permitindo compreender como a população vivia em outros tempos."
    },
    {
        numero: 6,
        tipo: "multipla",
        titulo: "Ouro Preto",
        contexto: "",
        pergunta: "Qual era o nome original de Ouro Preto?",
        opcoes: [
            "a) Belo Horizonte.",
            "b) Vila Rica.",
            "c) Diamantina.",
            "d) Mariana."
        ],
        respostaCorreta: 1,
        explicacao: "O nome original de Ouro Preto era Vila Rica, devido à busca por ouro e pedras preciosas na região durante o período colonial."
    },
    {
        numero: 7,
        tipo: "multipla",
        titulo: "Inconfidência Mineira",
        contexto: "",
        pergunta: "O que foi a Inconfidência Mineira?",
        opcoes: [
            "a) Uma festa popular em Minas Gerais.",
            "b) A primeira vez que um grupo de brasileiros tentou combater o domínio português no Brasil.",
            "c) Um movimento artístico liderado por Aleijadinho.",
            "d) A fundação da cidade de Ouro Preto."
        ],
        respostaCorreta: 1,
        explicacao: "A Inconfidência Mineira foi a primeira vez que um grupo de brasileiros tentou combater o domínio português no Brasil, sendo um acontecimento marcante na história do país."
    },
    {
        numero: 8,
        tipo: "multipla",
        titulo: "Tiradentes",
        contexto: "",
        pergunta: "Quem foi Tiradentes?",
        opcoes: [
            "a) Um artista que criou esculturas em Ouro Preto.",
            "b) Um inconfidente mineiro cuja morte é um acontecimento marcante na história brasileira.",
            "c) O fundador da cidade de Paraty.",
            "d) Um governador de Minas Gerais."
        ],
        respostaCorreta: 1,
        explicacao: "Tiradentes foi um inconfidente mineiro e sua morte é um acontecimento marcante na história brasileira, sendo considerado um mártir da luta pela independência."
    },
    {
        numero: 9,
        tipo: "multipla",
        titulo: "Aleijadinho e Mestre Ataíde",
        contexto: "",
        pergunta: "Quem foram Aleijadinho e Mestre Ataíde?",
        opcoes: [
            "a) Líderes da Inconfidência Mineira.",
            "b) Grandes artistas que criaram obras importantes em Ouro Preto, atraídos pelos quilos de ouro descobertos na região.",
            "c) Governadores de Minas Gerais.",
            "d) Fundadores de cidades históricas."
        ],
        respostaCorreta: 1,
        explicacao: "Muitos quilos de ouro foram usados na região, o que atraiu grandes artistas como Aleijadinho (escultor) e Mestre Ataíde (pintor), que contribuíram para as obras de arte nas igrejas."
    },
    {
        numero: 10,
        tipo: "multipla",
        titulo: "Festas e Manifestações Culturais",
        contexto: "",
        pergunta: "Qual das alternativas apresenta manifestações culturais típicas da região Norte do Brasil?",
        opcoes: [
            "a) O samba e o Mercado Modelo.",
            "b) Os festejos de Parintins e Marabaixo.",
            "c) O frevo e o maracatu.",
            "d) A Festa do Divino e o carnaval do Rio de Janeiro."
        ],
        respostaCorreta: 1,
        explicacao: "O texto afirma que Parintins e Marabaixo existem 'para os lados do Norte', sendo manifestações culturais características da região Norte do Brasil."
    },

    // ========== VERDADEIRO OU FALSO (Q11-Q20) ==========
    {
        numero: 11,
        tipo: "verdadeiroFalso",
        titulo: "Patrimônio Material e Imaterial",
        contexto: "",
        afirmacoes: [
            {
                texto: "O Patrimônio Imaterial inclui as edificações históricas.",
                resposta: false,
                explicacao: "Edificações e ruínas arqueológicas são bens Materiais, não Imateriais."
            },
            {
                texto: "O forró e a ciranda podem ser considerados Patrimônio Imaterial.",
                resposta: false,
                explicacao: "Cantos e festividades são exemplos de bens imateriais."
            },
            {
                texto: "Cidades históricas são importantes porque permitem imaginar como era a vida no passado.",
                resposta: true,
                explicacao: "Caminhar por elas permite 'imaginar como a população vivia em outros tempos'."
            },
            {
                texto: "O Teatro Amazonas e o Mercado Modelo são exemplos de Patrimônio Natural.",
                resposta: false,
                explicacao: "São exemplos de Patrimônio Material (construções)."
            }
        ]
    },
    {
        numero: 12,
        tipo: "verdadeiroFalso",
        titulo: "Ouro Preto e História",
        contexto: "",
        afirmacoes: [
            {
                texto: "O nome original de Ouro Preto era Vila Rica.",
                resposta: true,
                explicacao: "O nome anterior era Vila Rica, devido à busca por ouro e pedras preciosas."
            },
            {
                texto: "A Inconfidência Mineira foi o primeiro evento em que um grupo de brasileiros tentou se opor ao domínio português.",
                resposta: true,
                explicacao: "O texto a descreve como 'a primeira vez que um grupo de brasileiros tentou combater o domínio português no Brasil'."
            },
            {
                texto: "Tiradentes foi um dos inconfidentes mineiros.",
                resposta: true,
                explicacao: "Tiradentes foi um inconfidente e sua morte é um acontecimento marcante."
            },
            {
                texto: "As igrejas de Ouro Preto não possuem grande valor artístico.",
                resposta: false,
                explicacao: "São importantes por seu valor histórico e artístico, com obras de Aleijadinho e Mestre Ataíde."
            }
        ]
    },
    {
        numero: 13,
        tipo: "verdadeiroFalso",
        titulo: "Regiões e Patrimônios",
        contexto: "",
        afirmacoes: [
            {
                texto: "O samba e o Mercado Modelo são manifestações culturais típicas da região Norte.",
                resposta: false,
                explicacao: "São citados no contexto da Bahia/Salvador."
            },
            {
                texto: "O Rio de Janeiro é mencionado como um lugar onde se pode observar o Pão de Açúcar.",
                resposta: true,
                explicacao: "O texto de abertura cita o Pão de Açúcar no Rio de Janeiro."
            },
            {
                texto: "Os festejos de Parintins e Marabaixo são característicos da região Norte do Brasil.",
                resposta: true,
                explicacao: "O texto afirma que Parintins e Marabaixo existem 'para os lados do Norte'."
            },
            {
                texto: "Paraty é uma cidade histórica localizada em Minas Gerais.",
                resposta: false,
                explicacao: "Paraty é citada no Rio de Janeiro."
            }
        ]
    },
    {
        numero: 14,
        tipo: "verdadeiroFalso",
        titulo: "Preservação e Tombamento",
        contexto: "",
        afirmacoes: [
            {
                texto: "Tombamento é um ato que permite que o proprietário faça modificações profundas no bem.",
                resposta: false,
                explicacao: "O tombamento visa conservar e proteger o bem para que não sofra modificações."
            },
            {
                texto: "O Tribunal de Justiça pode suspender obras que ameacem a preservação do patrimônio.",
                resposta: true,
                explicacao: "A fonte cita a suspensão do asfaltamento em Ouro Preto pela Justiça."
            },
            {
                texto: "A arquitetura em Ouro Preto é marcada pela influência portuguesa.",
                resposta: true,
                explicacao: "As construções datam da época em que o Brasil era administrado por Portugal."
            },
            {
                texto: "Cidades históricas são importantes apenas pelo aspecto estético.",
                resposta: false,
                explicacao: "São valiosas porque revelam a história de um lugar e de uma época."
            }
        ]
    },
    {
        numero: 15,
        tipo: "verdadeiroFalso",
        titulo: "Patrimônios Específicos",
        contexto: "",
        afirmacoes: [
            {
                texto: "O Pelourinho, em Salvador, é conhecido por suas ruas estreitas e inclinadas.",
                resposta: true,
                explicacao: "O Pelourinho é descrito como tendo ruas estreitas e preservando a arquitetura portuguesa."
            },
            {
                texto: "Goiás, a capital do estado de Goiás, se tornou Patrimônio Mundial em 2001.",
                resposta: true,
                explicacao: "Goiás é citada como Patrimônio Mundial em 2001."
            },
            {
                texto: "O centro histórico de São Luís possui grande número de casarões de influência portuguesa.",
                resposta: true,
                explicacao: "São Luís é descrita com 'grande número de casarões de influência portuguesa'."
            },
            {
                texto: "Brasília é uma cidade tombada, mas é exceção, pois não é uma construção antiga.",
                resposta: true,
                explicacao: "Brasília é listada entre as cidades consideradas Patrimônio Mundial."
            }
        ]
    },
    {
        numero: 16,
        tipo: "verdadeiroFalso",
        titulo: "Importância dos Patrimônios",
        contexto: "",
        afirmacoes: [
            {
                texto: "Patrimônios são importantes apenas para os turistas.",
                resposta: false,
                explicacao: "São importantes para a história, a identidade cultural e a educação."
            },
            {
                texto: "A palavra 'resplandecentes' significa brilhantes e luzentes.",
                resposta: true,
                explicacao: "A fonte define 'resplandecentes' como 'brilhantes, luzentes'."
            },
            {
                texto: "O patrimônio natural foca na proteção de espécies e ecossistemas, como em Fernando de Noronha.",
                resposta: true,
                explicacao: "Fernando de Noronha é um Patrimônio Natural valorizado pela biodiversidade."
            },
            {
                texto: "As danças e cantos de Parintins e Marabaixo fazem parte dos festejos do Norte do Brasil.",
                resposta: true,
                explicacao: "Ambos são citados como festejos do Norte."
            }
        ]
    },
    {
        numero: 17,
        tipo: "verdadeiroFalso",
        titulo: "História e Cultura",
        contexto: "",
        afirmacoes: [
            {
                texto: "O descobrimento do ouro na região de Ouro Preto fez com que a cidade recebesse muitos arquitetos e artesãos.",
                resposta: true,
                explicacao: "Muitos quilos de ouro foram usados, o que atraiu grandes artistas como Aleijadinho e Mestre Ataíde."
            },
            {
                texto: "Mestre Ataíde foi um artista importante na construção da Igreja de São Francisco de Assis.",
                resposta: true,
                explicacao: "Ele contribuiu para as pinturas na igreja."
            },
            {
                texto: "A cidade de Paraty (RJ) já foi muito importante para a história do Brasil, sendo um ponto de entrada para o escoamento de riquezas.",
                resposta: true,
                explicacao: "Paraty serviu como 'ponto de entrada e saída para o escoamento do ouro e das riquezas'."
            },
            {
                texto: "O patrimônio cultural de um povo está ligado ao conhecimento e fortalecimento de sua identidade.",
                resposta: true,
                explicacao: "A preservação está ligada ao fortalecimento da identidade cultural e à transmissão de valores."
            }
        ]
    },
    {
        numero: 18,
        tipo: "verdadeiroFalso",
        titulo: "Bens Materiais e Imateriais",
        contexto: "",
        afirmacoes: [
            {
                texto: "As celebrações e festividades são classificadas como Bens Materiais.",
                resposta: false,
                explicacao: "São classificadas como Bens Imateriais."
            },
            {
                texto: "O carnaval e a Folia de Reis são exemplos de festejos patrimoniais.",
                resposta: true,
                explicacao: "Festejos fazem parte do calendário patrimonial brasileiro."
            },
            {
                texto: "O modo como se toca a viola caipira é um saber tradicional, considerado patrimônio imaterial.",
                resposta: true,
                explicacao: "O ofício de violeiro ('Tem violeiro fazendo moda') é citado como saber tradicional."
            },
            {
                texto: "Os festejos populares só ocorrem no Brasil.",
                resposta: false,
                explicacao: "O texto afirma que as cidades históricas brasileiras são importantes para outras nações ao redor do mundo, o que sugere que o conceito de patrimônio se aplica globalmente."
            }
        ]
    },
    {
        numero: 19,
        tipo: "verdadeiroFalso",
        titulo: "Calendário de Festejos",
        contexto: "",
        afirmacoes: [
            {
                texto: "O Brasil tem um calendário de festejos que abrange todo o território, de norte a sul.",
                resposta: true,
                explicacao: "O texto afirma que os festejos 'ocorrem todos os anos, de norte a sul de seu território'."
            },
            {
                texto: "O IPHAN é a organização internacional responsável por listar o Patrimônio Cultural da Humanidade.",
                resposta: false,
                explicacao: "Essa função é da UNESCO; o IPHAN é a organização brasileira."
            },
            {
                texto: "O patrimônio é importante para a educação, pois transmite conhecimentos e referências históricas.",
                resposta: true,
                explicacao: "Um dos usos do patrimônio é a 'Educação e transmissão de valores'."
            },
            {
                texto: "A Igreja Matriz de Nossa Senhora do Pilar, em Ouro Preto, se destaca pela grandiosidade de seus elementos internos.",
                resposta: true,
                explicacao: "Ela 'se destaca pela grandiosidade e a importância dos elementos construídos em ouro'."
            }
        ]
    },
    {
        numero: 20,
        tipo: "verdadeiroFalso",
        titulo: "Paisagem e Preservação",
        contexto: "",
        afirmacoes: [
            {
                texto: "Em cidades como Diamantina, é possível notar na paisagem a mistura de marcas do passado e do presente.",
                resposta: true,
                explicacao: "A atividade proposta com a imagem de Diamantina pede para o leitor identificar essa mistura."
            },
            {
                texto: "As casas e igrejas de Ouro Preto foram produzidas em uma época em que o Brasil era administrado por Portugal.",
                resposta: true,
                explicacao: "A arquitetura da cidade reflete a época em que o país era administrado por Portugal."
            },
            {
                texto: "As cidades históricas são consideradas patrimônios culturais e devem ser modificadas para se parecerem com cidades modernas.",
                resposta: false,
                explicacao: "Devem ser 'conservadas e protegidas para não sofrerem modificações'."
            },
            {
                texto: "Patrimônios Naturais, como a Serra do Espinhaço, são valorizados pela sua importância geológica e biológica.",
                resposta: true,
                explicacao: "A Serra do Espinhaço é listada como Patrimônio Natural e valorizada por características biológicas e geológicas."
            }
        ]
    },

    // ========== PERGUNTAS ABERTAS (Q21-Q27) ==========
    {
        numero: 21,
        tipo: "aberta",
        titulo: "Definição de Patrimônio Cultural",
        contexto: "",
        pergunta: "O que é Patrimônio Cultural?",
        respostaEsperada: "É o conjunto de bens (materiais, imateriais ou naturais) que carregam a história, a cultura e a identidade de um povo ou nação.",
        explicacao: "A preservação desses bens é crucial para a História e Identidade do Brasil."
    },
    {
        numero: 22,
        tipo: "aberta",
        titulo: "Exemplos de Bens Materiais e Imateriais",
        contexto: "",
        pergunta: "Dê um exemplo de bem material e um exemplo de bem imaterial mencionados no texto.",
        respostaEsperada: "Material: O Mercado Modelo ou a Igreja de São Pedro de Cenário (Bahia). Imaterial: Roda de samba ou o ofício de violeiro. (Outras respostas válidas: Teatro Amazonas (M), Parintins (I)).",
        explicacao: "Os exemplos de bens materiais e imateriais são fornecidos na página de abertura."
    },
    {
        numero: 23,
        tipo: "aberta",
        titulo: "Importância das Cidades Históricas",
        contexto: "",
        pergunta: "Por que as cidades históricas são valiosas?",
        respostaEsperada: "Elas são valiosas porque preservam construções que revelam a história de uma época importante (o Brasil administrado por Portugal) e permitem imaginar a vida no passado.",
        explicacao: "As casas e ruas históricas preservam os 'característicos da época em que foram construídas'."
    },
    {
        numero: 24,
        tipo: "aberta",
        titulo: "Festejos de Parintins e Marabaixo",
        contexto: "",
        pergunta: "Quais são os festejos mencionados como característicos da região Norte do Brasil?",
        respostaEsperada: "Os festejos de Parintins e Marabaixo.",
        explicacao: "O poema de abertura dedica versos aos festejos 'para os lados do Norte', citando Parintins e Marabaixo."
    },
    {
        numero: 25,
        tipo: "aberta",
        titulo: "Substituição de Ouro Preto",
        contexto: "",
        pergunta: "Qual capital substituiu Ouro Preto (Vila Rica)?",
        respostaEsperada: "Belo Horizonte, uma cidade planejada, sendo este um acontecimento importante na história administrativa do país.",
        explicacao: "Ouro Preto foi substituída por Belo Horizonte, a atual capital mineira."
    },
    {
        numero: 26,
        tipo: "aberta",
        titulo: "Significado de Acervo Histórico",
        contexto: "",
        pergunta: "O que significa dizer que um local funciona como um acervo ou museu a céu aberto?",
        respostaEsperada: "A comparação significa que o local funciona como um acervo ou museu onde a história (prédios, arquitetura, ruas) está exposta a céu aberto, permitindo conhecer o passado.",
        explicacao: "Cidades históricas permitem 'conhecer os locais onde ocorreram importantes acontecimentos históricos'."
    },
    {
        numero: 27,
        tipo: "aberta",
        titulo: "Interpretação do Poema",
        contexto: "",
        pergunta: "O que o poema de abertura quer dizer ao falar de 'lugares resplandecentes' e festejos?",
        respostaEsperada: "Reflete a ideia de que o Brasil é um lugar de grande riqueza cultural e histórica, com 'lugares resplandecentes' (brilhantes) e muitos festejos.",
        explicacao: "A expressão faz parte do poema que descreve 'lugares resplandecentes e de festejos sem fim'."
    },

    // ========== ESTUDOS DE CASO (Q28-Q30) ==========
    {
        numero: 28,
        tipo: "estudo",
        titulo: "Caso: Calçadas de Pedra em Ouro Preto",
        contexto: "A Justiça suspendeu o asfaltamento de uma rua em Ouro Preto porque a decisão judicial é clara: 'a preservação do patrimônio histórico deve prevalecer'.",
        pergunta: "Imagine que você é o prefeito de Ouro Preto e precisa decidir entre asfaltar uma rua histórica (facilitando o trânsito) ou manter as calçadas de pedra originais. Qual seria sua decisão e por quê?",
        principioOrientador: "O foco deve ser em soluções que preservem o patrimônio (as calçadas de pedra), pois a decisão judicial é clara: 'a preservação do patrimônio histórico deve prevalecer'. A solução deve buscar facilitar a circulação (ex: criação de rotas específicas acessíveis para pessoas com dificuldade de locomoção, uso de bondes turísticos que se adaptam, ou melhoria na manutenção das pedras).",
        explicacao: "A preservação do patrimônio histórico deve ter prioridade, mas soluções criativas podem facilitar o acesso sem comprometer a integridade histórica."
    },
    {
        numero: 29,
        tipo: "estudo",
        titulo: "Caso: Festa do Divino",
        contexto: "A Festa do Divino é uma celebração tradicional que ocorre em várias cidades históricas brasileiras, mas está perdendo relevância entre os jovens.",
        pergunta: "Como você proporia tornar a Festa do Divino mais atraente para o público jovem, mantendo suas tradições?",
        principioOrientador: "A proposta deve visar o conhecimento e o fortalecimento da identidade cultural. Para tornar a festa relevante, deve-se usar a educação e a transmissão de valores, mostrando a origem, o significado histórico e a beleza da Festa do Divino, relacionando-a com a cultura local e utilizando meios de comunicação que atinjam o público jovem.",
        explicacao: "É importante usar estratégias modernas de comunicação (redes sociais, vídeos) para transmitir o valor histórico e cultural da festa, conectando-a com a identidade local."
    },
    {
        numero: 30,
        tipo: "estudo",
        titulo: "Caso: Desenvolvimento Econômico vs. Preservação",
        contexto: "Uma empresa quer construir um shopping center em uma área próxima ao centro histórico de Ouro Preto, argumentando que isso trará empregos e desenvolvimento econômico.",
        pergunta: "Você é membro do conselho de patrimônio histórico. Qual seria sua posição sobre essa proposta?",
        principioOrientador: "A fidelidade total à arquitetura original deve ter mais peso. A importância do Patrimônio Material reside em sua capacidade de contar a história de uma época (o Brasil administrado por Portugal), e a sua preservação é crucial para que não sofra modificações. Embora a necessidade econômica seja importante, o Patrimônio é um bem coletivo para as futuras gerações, e a conservação histórica deve ser prioridade.",
        explicacao: "A preservação histórica deve prevalecer sobre interesses econômicos de curto prazo, pois o patrimônio é um bem coletivo que deve ser protegido para as futuras gerações."
    }
];

