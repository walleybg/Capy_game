// Questões do Capítulo 7 - História: Vida e trabalho nos espaços urbanos
const dadosDoQuizHistoriaCap7 = [
    // PARTE 1: QUESTÕES DE MÚLTIPLA ESCOLHA (1-10)
    {
        id: 1,
        tipo: "multipla_escolha",
        titulo: "Surgimento das Fábricas",
        contexto: "O trabalho urbano no Brasil sofreu grandes transformações, desde as atividades de agricultores e comerciantes até o investimento de ricos que levou ao surgimento das fábricas.",
        pergunta: "Todas as afirmativas sobre o surgimento das fábricas são corretas, EXCETO:",
        opcoes: [
            "a) A produção em massa de produtos, como tecidos e vestuário, tornou-se o novo modelo de trabalho.",
            "b) O foco principal das fábricas era em produção de papel, máquinas, vestuário e têxteis.",
            "c) O surgimento das fábricas não teve relação com as transformações sociais e econômicas do país.",
            "d) O investimento de ricos foi o fator econômico que impulsionou o surgimento desses novos locais de produção."
        ],
        respostaCorreta: "c) O surgimento das fábricas não teve relação com as transformações sociais e econômicas do país.",
        explicacao: "O surgimento das fábricas reflete transformações sociais e econômicas, conforme o resumo da evolução do trabalho urbano no Brasil. O investimento de ricos foi o fator econômico que impulsionou a produção em massa de têxteis, vestuário, papel e máquinas."
    },
    {
        id: 2,
        tipo: "multipla_escolha",
        titulo: "Contribuição para a Sociedade",
        contexto: "Muitos profissionais, como médicos, professores e engenheiros, são considerados essenciais pois fornecem serviços de Saúde e Bem-Estar e contribuem para a sociedade.",
        pergunta: "Marque a opção que NÃO reflete os conceitos abordados sobre a Contribuição para a Sociedade nas profissões atuais:",
        opcoes: [
            "a) Os profissionais atuais buscam a sustentabilidade ambiental e utilizam tecnologia e inovação.",
            "b) A diversidade de funções inclui áreas como Educação e Conhecimento.",
            "c) As profissões atuais não se preocupam mais com os serviços essenciais, focando apenas em entretenimento.",
            "d) Arquitetos e Engenheiros, assim como Médicos, fazem parte das profissões atuais."
        ],
        respostaCorreta: "c) As profissões atuais não se preocupam mais com os serviços essenciais, focando apenas em entretenimento.",
        explicacao: "O conceito de Profissões Atuais inclui o foco em Serviços Essenciais, Saúde e Bem-Estar, Educação e Conhecimento, além de Sustentabilidade Ambiental e Tecnologia e Inovação. A opção (c) está incorreta porque os serviços essenciais são uma parte fundamental da contribuição para a sociedade."
    },
    {
        id: 3,
        tipo: "multipla_escolha",
        titulo: "Condições de Trabalho no Passado",
        contexto: "No passado, a vida dos operários urbanos era marcada por condições de trabalho muito difíceis, como jornadas exaustivas e salários muito baixos.",
        pergunta: "Todas as afirmativas são corretas sobre as antigas Condições de Trabalho, EXCETO:",
        opcoes: [
            "a) Era comum que homens, mulheres e crianças trabalhassem em jornadas longas.",
            "b) A moradia precária incluía aluguéis de quartos e falta de higiene e conforto.",
            "c) Os salários baixos atendiam completamente todas as necessidades básicas da família.",
            "d) As necessidades dos operários muitas vezes não eram atendidas pelos baixos salários."
        ],
        respostaCorreta: "c) Os salários baixos atendiam completamente todas as necessidades básicas da família.",
        explicacao: "As Condições de Trabalho no passado incluíam 'Salários Baixos' que 'Não Atendiam Necessidades' dos operários e suas famílias. As jornadas eram exaustivas e a moradia precária (quartos alugados) era comum."
    },
    {
        id: 4,
        tipo: "multipla_escolha",
        titulo: "Lutas e Conquistas",
        contexto: "O mapa mental mostra que as Lutas e Conquistas dos operários foram essenciais para garantir melhores condições de vida.",
        pergunta: "Escolha a alternativa que melhor reflete o conceito de 'Lutas e Conquistas' no trabalho urbano:",
        opcoes: [
            "a) A aceitação imediata de qualquer salário imposto pelos donos das fábricas.",
            "b) O resultado de manifestações e organização dos operários para exigir melhores condições.",
            "c) O desaparecimento de todas as profissões antigas da noite para o dia.",
            "d) O aumento das horas de trabalho por dia para obter mais produção."
        ],
        respostaCorreta: "b) O resultado de manifestações e organização dos operários para exigir melhores condições.",
        explicacao: "As Lutas e Conquistas foram o resultado da 'Organização dos Operários' e da 'Exigência de Melhores Condições,' que incluíam a busca por assistência médica e redução do número de horas."
    },
    {
        id: 5,
        tipo: "multipla_escolha",
        titulo: "Variedade de Profissões nos Espaços Urbanos",
        contexto: "Em um espaço urbano, vemos locais como um Hospital e um Teatro. Cada um desses lugares precisa de uma variedade de profissionais para funcionar.",
        pergunta: "Marque a opção que NÃO reflete os conceitos abordados sobre a variedade de profissões nos espaços urbanos:",
        opcoes: [
            "a) Profissionais de saúde trabalham no Hospital para cuidar dos moradores.",
            "b) Profissões ligadas à arte e cultura se concentram em locais como o Teatro.",
            "c) A vida no Teatro e no Hospital não depende de nenhuma profissão ligada à tecnologia.",
            "d) Há uma grande variedade de profissões desempenhando funções diferentes para atender às necessidades urbanas."
        ],
        respostaCorreta: "c) A vida no Teatro e no Hospital não depende de nenhuma profissão ligada à tecnologia.",
        explicacao: "As Profissões Atuais dependem da Tecnologia e Inovação, listada como um componente central da Contribuição para a Sociedade. Portanto, o Hospital e o Teatro, como parte da vida urbana, também têm relação com a tecnologia."
    },
    {
        id: 6,
        tipo: "multipla_escolha",
        titulo: "Inspiração Profissional para Crianças",
        contexto: "Isabella de Oliveira, 9 anos, quer ser médica, pensando em cardiologia e em cuidar de crianças.",
        pergunta: "Qual alternativa melhor reflete o conceito de inspiração profissional para crianças?",
        opcoes: [
            "a) A inspiração só pode vir de profissões que desapareceram, como o Boticiário.",
            "b) O desejo de ser médico ou veterinário reflete a importância do cuidado com a saúde e o bem-estar.",
            "c) A maioria das crianças sonha apenas em ser pianista de cinema.",
            "d) A inspiração profissional deve vir apenas da família, sem influência da TV ou internet."
        ],
        respostaCorreta: "b) O desejo de ser médico ou veterinário reflete a importância do cuidado com a saúde e o bem-estar.",
        explicacao: "O desejo de Isabella de Oliveira (médica) e Valentina Duran (veterinária) reflete a importância do cuidado com a Saúde e Bem-Estar, uma área de contribuição das Profissões Atuais."
    },
    {
        id: 7,
        tipo: "multipla_escolha",
        titulo: "Profissões Desaparecidas",
        contexto: "Com o passar do tempo, muitas profissões desapareceram por causa das mudanças na tecnologia ou na forma como a sociedade se organiza.",
        pergunta: "Todas as afirmativas listam profissões que desapareceram ou que se transformaram radicalmente, EXCETO:",
        opcoes: [
            "a) Boticiário (preparador de remédios).",
            "b) Operador de Telefonia (conexão manual de chamadas).",
            "c) Pintores (que trabalhavam transmitindo conhecimento e arte).",
            "d) Pianista de Cinema (música ao vivo para filmes)."
        ],
        respostaCorreta: "c) Pintores (que trabalhavam transmitindo conhecimento e arte).",
        explicacao: "Pintores são listados como exemplos de Profissões Antigas que transmitiam conhecimento. O Boticiário, o Operador de Telefonia (conexão manual de chamadas) e o Pianista de Cinema são listados como Profissões Desaparecidas."
    },
    {
        id: 8,
        tipo: "multipla_escolha",
        titulo: "Profissão de Veterinária",
        contexto: "Valentina Duran, 6 anos, mora em Jandaia do Sul e quer ser veterinária. Ela diz que gosta muito de cuidar de cães.",
        pergunta: "Escolha a alternativa que melhor reflete o conceito da profissão que Valentina escolheu:",
        opcoes: [
            "a) É uma profissão antiga que não existe mais.",
            "b) É um trabalho que exige apenas esforço físico, sem estudo.",
            "c) É uma profissão ligada à saúde e ao bem-estar, aplicada aos animais.",
            "d) É uma profissão que só existe nas fábricas."
        ],
        respostaCorreta: "c) É uma profissão ligada à saúde e ao bem-estar, aplicada aos animais.",
        explicacao: "Valentina escolheu ser veterinária, uma profissão ligada à Saúde e Bem-Estar, aplicável aos animais."
    },
    {
        id: 9,
        tipo: "multipla_escolha",
        titulo: "Profissões Antigas",
        contexto: "Algumas profissões antigas, como Sapateiros e Alfaiates, transmitiam conhecimento dentro da Família ou Comunidade e atendiam necessidades urbanas básicas.",
        pergunta: "Todas as afirmativas são corretas sobre as Profissões Antigas, EXCETO:",
        opcoes: [
            "a) Pintores e Barbeiros são exemplos de profissões antigas.",
            "b) O conhecimento era transmitido de uma forma comunitária ou familiar.",
            "c) Essas profissões não tinham importância para a vida dos moradores urbanos.",
            "d) Eram ofícios que produziam bens e serviços necessários para o dia a dia."
        ],
        respostaCorreta: "c) Essas profissões não tinham importância para a vida dos moradores urbanos.",
        explicacao: "Profissões Antigas (como Alfaiates e Sapateiros) eram essenciais para atender às necessidades urbanas, e o conhecimento era transmitido na 'Família ou Comunidade'."
    },
    {
        id: 10,
        tipo: "multipla_escolha",
        titulo: "Profissões Atuais e Tecnologia",
        contexto: "Alice Wink, 8 anos, se inspira no trabalho de seus pais e deseja ser Youtuber/Digital Influencer.",
        pergunta: "Qual alternativa melhor reflete a relação entre as aspirações de Alice e o conceito de Profissões Atuais?",
        opcoes: [
            "a) O trabalho de Alice é um exemplo de profissão que depende totalmente da Tecnologia e Inovação e da internet.",
            "b) O trabalho dela é um exemplo de profissão que está desaparecendo.",
            "c) O trabalho de Youtuber não tem nenhuma relação com a transmissão de conhecimento.",
            "d) O trabalho dela só é possível porque as leis trabalhistas proíbem o uso da internet."
        ],
        respostaCorreta: "a) O trabalho de Alice é um exemplo de profissão que depende totalmente da Tecnologia e Inovação e da internet.",
        explicacao: "Alice deseja ser Youtuber/Digital Influencer, uma profissão que utiliza a Tecnologia e Inovação como ferramenta principal."
    },

    // PARTE 2: QUESTÕES DE VERDADEIRO OU FALSO (11-20)
    {
        id: 11,
        tipo: "verdadeiro_falso",
        titulo: "Lutas e Conquistas do Trabalhador Urbano",
        contexto: "As lutas dos trabalhadores urbanos foram fundamentais para garantir direitos e melhores condições de vida.",
        pergunta: "Analise as afirmações sobre as Lutas e Conquistas do Trabalhador Urbano:",
        afirmacoes: [
            "I. As reivindicações por melhores condições incluíam a organização dos operários e a exigência de assistência médica.",
            "II. O Salário Mínimo e as Leis Trabalhistas foram estabelecidos sem nenhuma luta ou esforço dos trabalhadores.",
            "III. A redução do número de horas trabalhadas por dia foi uma conquista importante dos operários.",
            "IV. A organização dos trabalhadores levou à instituição de um feriado mundial, o 1º de Maio (Dia do Trabalho)."
        ],
        opcoes: [
            "a) V – F – V – V",
            "b) F – V – V – F",
            "c) V – V – F – F",
            "d) F – F – V – V"
        ],
        respostaCorreta: "a) V – F – V – V",
        explicacao: "I. Verdadeiro - As reivindicações incluíam organização e exigência de assistência médica. II. Falso - O Salário Mínimo e as Leis Trabalhistas foram conquistados através de lutas. III. Verdadeiro - A redução de horas foi uma conquista importante. IV. Verdadeiro - O 1º de Maio foi instituído como Dia do Trabalho."
    },
    {
        id: 12,
        tipo: "verdadeiro_falso",
        titulo: "Aspirações Profissionais das Crianças",
        contexto: "As crianças têm diferentes aspirações profissionais, inspiradas por diversas fontes.",
        pergunta: "Analise as afirmações sobre as Aspirações Profissionais das Crianças:",
        afirmacoes: [
            "I. Valentina, Isabella e Alice têm o mesmo sonho profissional, que é trabalhar apenas com animais.",
            "II. A maioria das crianças busca inspiração em astronauta, cantora, artista, ou mesmo em seus pais e personagens da internet.",
            "III. Isabella se interessou por medicina após estudar sobre o corpo humano e ter um primo que é cardiologista.",
            "IV. O desejo de Alice em ser Youtuber/Influencer não tem relação alguma com a saúde, mesmo após a chegada de sua cadelinha Nina."
        ],
        opcoes: [
            "a) F – V – V – V",
            "b) V – V – F – F",
            "c) F – V – V – F",
            "d) V – F – V – V"
        ],
        respostaCorreta: "c) F – V – V – F",
        explicacao: "I. Falso - Cada criança tem sonhos diferentes (veterinária, médica, youtuber). II. Verdadeiro - As crianças se inspiram em diversas fontes. III. Verdadeiro - Isabella se interessou por medicina através de estudos e influência familiar. IV. Falso - O desejo pode ter relação com a chegada da cadelinha Nina."
    },
    {
        id: 13,
        tipo: "verdadeiro_falso",
        titulo: "Profissões Antigas e Transmissão de Conhecimento",
        contexto: "As profissões antigas tinham formas específicas de transmitir conhecimento.",
        pergunta: "Analise as afirmações sobre Profissões Antigas e Transmissão de Conhecimento:",
        afirmacoes: [
            "I. Profissões Antigas como o Alfaiate e o Sapateiro não tinham importância, pois todos faziam suas próprias roupas e sapatos.",
            "II. A transmissão do conhecimento nesses ofícios era geralmente feita dentro da família ou da comunidade.",
            "III. O barbeiro é um exemplo de profissão antiga que ainda existe, mas de forma modernizada.",
            "IV. Essas profissões não estão ligadas à transmissão de conhecimento."
        ],
        opcoes: [
            "a) F – V – V – F",
            "b) V – F – V – F",
            "c) F – F – V – V",
            "d) V – V – F – F"
        ],
        respostaCorreta: "a) F – V – V – F",
        explicacao: "I. Falso - Essas profissões eram importantes e essenciais. II. Verdadeiro - O conhecimento era transmitido na família ou comunidade. III. Verdadeiro - O barbeiro ainda existe de forma modernizada. IV. Falso - Essas profissões estão intimamente ligadas à transmissão de conhecimento."
    },
    {
        id: 14,
        tipo: "verdadeiro_falso",
        titulo: "Condições Precárias de Moradia e Vida dos Operários",
        contexto: "Os operários urbanos enfrentavam condições muito difíceis de moradia e trabalho.",
        pergunta: "Analise as afirmações sobre as Condições Precárias de Moradia e Vida dos Operários:",
        afirmacoes: [
            "I. Os operários viviam em moradias precárias, como quartos alugados, que não ofereciam conforto.",
            "II. A falta de higiene e conforto nas moradias precárias era um problema comum.",
            "III. As condições de trabalho incluíam a exploração de homens, mulheres e crianças em jornadas longas.",
            "IV. A moradia era chamada de Monarquia Precária, um termo que descreve as casas luxuosas dos trabalhadores."
        ],
        opcoes: [
            "a) V – V – V – F",
            "b) F – V – V – V",
            "c) V – F – F – V",
            "d) F – F – V – F"
        ],
        respostaCorreta: "a) V – V – V – F",
        explicacao: "I. Verdadeiro - Os operários viviam em moradias precárias. II. Verdadeiro - A falta de higiene e conforto era comum. III. Verdadeiro - Homens, mulheres e crianças eram explorados. IV. Falso - O termo correto é 'Moradia Precária', não 'Monarquia Precária', e não se refere a casas luxuosas."
    },
    {
        id: 15,
        tipo: "verdadeiro_falso",
        titulo: "Surgimento das Fábricas e Início do Trabalho Urbano",
        contexto: "O trabalho urbano no Brasil passou por grandes transformações com o surgimento das fábricas.",
        pergunta: "Analise as afirmações sobre o Surgimento das Fábricas e o Início do Trabalho Urbano:",
        afirmacoes: [
            "I. O início do trabalho urbano no Brasil foi impulsionado apenas pelos agricultores.",
            "II. O investimento de ricos foi fundamental para o surgimento de fábricas e produção em massa.",
            "III. O papel e as máquinas não estavam entre os primeiros itens de produção fabril.",
            "IV. A evolução do trabalho urbano reflete transformações sociais e econômicas."
        ],
        opcoes: [
            "a) V – V – F – V",
            "b) F – V – F – V",
            "c) V – F – V – F",
            "d) F – F – V – V"
        ],
        respostaCorreta: "b) F – V – F – V",
        explicacao: "I. Falso - O trabalho urbano foi impulsionado por diversos fatores, não apenas agricultores. II. Verdadeiro - O investimento de ricos foi fundamental. III. Falso - Papel e máquinas estavam entre os primeiros itens de produção. IV. Verdadeiro - A evolução reflete transformações sociais e econômicas."
    },
    {
        id: 16,
        tipo: "verdadeiro_falso",
        titulo: "Importância das Profissões Desaparecidas",
        contexto: "Muitas profissões desapareceram ao longo do tempo devido às mudanças tecnológicas e sociais.",
        pergunta: "Analise as afirmações sobre a Importância das Profissões Desaparecidas:",
        afirmacoes: [
            "I. O Boticiário preparava remédios, uma função que hoje é desempenhada por outros profissionais em farmácias.",
            "II. O Pianista de Cinema parou de ser necessário com o desenvolvimento da trilha sonora.",
            "III. A profissão de Operador de Telefonia, que fazia conexões manuais, se tornou obsoleta com o avanço da tecnologia.",
            "IV. Uma profissão só desaparece se ninguém mais gostar de exercê-la."
        ],
        opcoes: [
            "a) V – F – V – F",
            "b) F – V – V – V",
            "c) V – V – V – F",
            "d) V – F – F – V"
        ],
        respostaCorreta: "c) V – V – V – F",
        explicacao: "I. Verdadeiro - O Boticiário preparava remédios, função hoje desempenhada por farmacêuticos. II. Verdadeiro - O Pianista de Cinema se tornou desnecessário com trilhas sonoras. III. Verdadeiro - O Operador de Telefonia se tornou obsoleto com a tecnologia. IV. Falso - Profissões desaparecem principalmente por mudanças tecnológicas e sociais, não apenas por falta de interesse."
    },
    {
        id: 17,
        tipo: "verdadeiro_falso",
        titulo: "Profissões Atuais e o Meio Ambiente",
        contexto: "As profissões atuais incorporam preocupações com sustentabilidade e meio ambiente.",
        pergunta: "Analise as afirmações sobre Profissões Atuais e o Meio Ambiente:",
        afirmacoes: [
            "I. A Sustentabilidade Ambiental é um conceito que passou a influenciar a atuação das Profissões Atuais.",
            "II. Médicos, Professores e Arquitetos são exemplos de Profissões Atuais que possuem Diversidade de Funções.",
            "III. A Tecnologia e Inovação não têm relação com as Profissões Atuais, apenas com as antigas.",
            "IV. O Bem-Estar e a Saúde são temas centrais na contribuição para a sociedade dos profissionais de hoje."
        ],
        opcoes: [
            "a) V – V – F – V",
            "b) F – V – V – F",
            "c) V – F – F – V",
            "d) F – F – V – V"
        ],
        respostaCorreta: "a) V – V – F – V",
        explicacao: "I. Verdadeiro - A Sustentabilidade Ambiental influencia as Profissões Atuais. II. Verdadeiro - Médicos, Professores e Arquitetos possuem Diversidade de Funções. III. Falso - A Tecnologia e Inovação são fundamentais para as Profissões Atuais. IV. Verdadeiro - Bem-Estar e Saúde são temas centrais."
    },
    {
        id: 18,
        tipo: "verdadeiro_falso",
        titulo: "O que as Profissões Desempenham",
        contexto: "As profissões desempenham diferentes funções nos espaços urbanos.",
        pergunta: "Analise as afirmações sobre o que as Profissões Desempenham:",
        afirmacoes: [
            "I. As atividades de um profissional de Hospital envolvem o cuidado com a saúde dos moradores urbanos.",
            "II. A importância de uma profissão para a vida urbana se mede pelo quanto ela contribui para o funcionamento e bem-estar da cidade.",
            "III. O Teatro é um local que necessita de profissionais que promovam a cultura e o entretenimento.",
            "IV. Em um espaço urbano, todas as profissões são exatamente iguais em suas funções."
        ],
        opcoes: [
            "a) V – V – V – F",
            "b) F – V – V – V",
            "c) V – F – F – V",
            "d) V – V – F – F"
        ],
        respostaCorreta: "a) V – V – V – F",
        explicacao: "I. Verdadeiro - Profissionais de Hospital cuidam da saúde dos moradores. II. Verdadeiro - A importância se mede pela contribuição ao funcionamento e bem-estar. III. Verdadeiro - O Teatro necessita de profissionais de cultura e entretenimento. IV. Falso - As profissões têm funções diferentes e específicas."
    },
    {
        id: 19,
        tipo: "verdadeiro_falso",
        titulo: "Organização Inicial dos Trabalhadores",
        contexto: "A organização dos trabalhadores foi fundamental para conquistar direitos.",
        pergunta: "Analise as afirmações sobre a Organização Inicial dos Trabalhadores:",
        afirmacoes: [
            "I. A organização dos operários tinha como objetivo principal negociar a redução do número de horas trabalhadas.",
            "II. A organização dos operários levou à exigência de melhores condições e à obtenção de assistência médica.",
            "III. O termo Monarquia Precatória era usado para descrever a organização dos operários.",
            "IV. Antes da organização, os trabalhadores já tinham leis trabalhistas garantindo seus direitos."
        ],
        opcoes: [
            "a) V – V – F – F",
            "b) F – V – V – V",
            "c) V – F – F – V",
            "d) V – V – V – F"
        ],
        respostaCorreta: "a) V – V – F – F",
        explicacao: "I. Verdadeiro - A redução de horas era um dos objetivos principais. II. Verdadeiro - A organização levou à exigência de melhores condições e assistência médica. III. Falso - O termo correto é 'Moradia Precária', não 'Monarquia Precatória'. IV. Falso - As leis trabalhistas foram conquistadas após a organização."
    },
    {
        id: 20,
        tipo: "verdadeiro_falso",
        titulo: "Tipos de Profissões",
        contexto: "As profissões podem ser classificadas em antigas, desaparecidas e atuais.",
        pergunta: "Analise as afirmações sobre os Tipos de Profissões:",
        afirmacoes: [
            "I. Alfaiates e Sapateiros são exemplos de Profissões Antigas.",
            "II. Boticiário e Conexão Manual de Chamadas são Profissões Desaparecidas.",
            "III. Arquitetos e Engenheiros são Profissões Atuais importantes para infraestrutura urbana.",
            "IV. Nenhuma profissão antiga deixou de existir com o tempo."
        ],
        opcoes: [
            "a) V – V – V – F",
            "b) F – V – V – V",
            "c) V – F – V – F",
            "d) V – V – F – V"
        ],
        respostaCorreta: "a) V – V – V – F",
        explicacao: "I. Verdadeiro - Alfaiates e Sapateiros são Profissões Antigas. II. Verdadeiro - Boticiário e Conexão Manual de Chamadas são Profissões Desaparecidas. III. Verdadeiro - Arquitetos e Engenheiros são Profissões Atuais importantes. IV. Falso - Muitas profissões antigas deixaram de existir ou se transformaram."
    },

    // PARTE 3: PERGUNTAS ABERTAS (21-27)
    {
        id: 21,
        tipo: "aberta",
        titulo: "Produção em Massa",
        contexto: "",
        pergunta: "O que é a Produção em Massa e como ela se diferencia do trabalho feito por um único artesão? Cite um exemplo inicial de produto fabricado dessa forma.",
        respostaCorreta: "A Produção em Massa é um sistema de fabricação em grande quantidade de produtos padronizados, diferente do trabalho artesanal onde um único profissional faz todo o produto. Exemplos iniciais incluem tecidos, vestuário, papel e máquinas.",
        explicacao: "A Produção em Massa revolucionou o trabalho urbano ao permitir a fabricação de grandes quantidades de produtos padronizados em fábricas, substituindo o trabalho individual e artesanal. Os primeiros produtos fabricados em massa no Brasil incluíam têxteis, vestuário, papel e máquinas."
    },
    {
        id: 22,
        tipo: "aberta",
        titulo: "Conquistas Históricas dos Operários",
        contexto: "",
        pergunta: "Se a sua cidade precisasse de novas leis para proteger os trabalhadores, qual conquista histórica dos operários urbanos você usaria como exemplo para sua reivindicação?",
        respostaCorreta: "Exemplos incluem: Salário Mínimo, Leis Trabalhistas, redução do número de horas trabalhadas, assistência médica, ou o estabelecimento do 1º de Maio como Dia do Trabalho.",
        explicacao: "As conquistas históricas dos operários urbanos incluem o Salário Mínimo, as Leis Trabalhistas, a redução da jornada de trabalho, o direito à assistência médica e a instituição do 1º de Maio como Dia do Trabalho. Todas essas conquistas foram resultado de lutas e organização dos trabalhadores."
    },
    {
        id: 23,
        tipo: "aberta",
        titulo: "Diversidade de Funções",
        contexto: "",
        pergunta: "O que significa o termo Diversidade de Funções dentro do contexto das Profissões Atuais e cite duas profissões que refletem essa diversidade?",
        respostaCorreta: "Diversidade de Funções significa que as profissões atuais abrangem diferentes áreas como Saúde, Educação, Tecnologia, Cultura, etc. Exemplos: Médicos (Saúde), Professores (Educação), Arquitetos (Infraestrutura), Engenheiros (Tecnologia).",
        explicacao: "A Diversidade de Funções nas Profissões Atuais refere-se à variedade de áreas de atuação que contribuem para a sociedade, incluindo Saúde e Bem-Estar, Educação e Conhecimento, Sustentabilidade Ambiental, Tecnologia e Inovação, entre outras."
    },
    {
        id: 24,
        tipo: "aberta",
        titulo: "Áreas de Atuação",
        contexto: "",
        pergunta: "Valentina é Veterinária e Isabella deseja ser Médica. Qual a principal área de atuação de cada uma delas, mesmo que ambas se dediquem ao cuidado e à saúde?",
        respostaCorreta: "Valentina (Veterinária) atua na saúde e bem-estar dos animais. Isabella (Médica) atua na saúde e bem-estar dos seres humanos.",
        explicacao: "Ambas as profissões estão ligadas à Saúde e Bem-Estar, mas com focos diferentes: a veterinária cuida da saúde dos animais, enquanto a médica cuida da saúde das pessoas."
    },
    {
        id: 25,
        tipo: "aberta",
        titulo: "Problemas nas Condições de Trabalho",
        contexto: "",
        pergunta: "Além dos salários baixos e das jornadas longas, o que era um grande problema nas Condições de Trabalho que levou os operários a exigirem Assistência Médica?",
        respostaCorreta: "A falta de segurança no trabalho, acidentes frequentes, doenças causadas pelas condições insalubres e a exploração de trabalhadores (incluindo crianças) eram problemas que levaram à exigência de assistência médica.",
        explicacao: "As condições de trabalho precárias incluíam ambientes insalubres, falta de segurança, acidentes frequentes e doenças ocupacionais. Essas condições levaram os operários a se organizarem e exigirem assistência médica como parte de suas reivindicações."
    },
    {
        id: 26,
        tipo: "aberta",
        titulo: "Profissões Desaparecidas",
        contexto: "",
        pergunta: "O que a profissão de Operador de Telefonia (conexão manual de chamadas) e a profissão de Pianista de Cinema têm em comum para serem consideradas 'Profissões Desaparecidas'?",
        respostaCorreta: "Ambas desapareceram devido aos avanços tecnológicos: o Operador de Telefonia foi substituído pela telefonia automática, e o Pianista de Cinema foi substituído pelas trilhas sonoras gravadas.",
        explicacao: "Essas profissões desapareceram porque a tecnologia tornou suas funções obsoletas. O Operador de Telefonia fazia conexões manuais de chamadas, função substituída pela automação. O Pianista de Cinema tocava música ao vivo durante filmes mudos, sendo substituído pelas trilhas sonoras quando o cinema sonoro foi desenvolvido."
    },
    {
        id: 27,
        tipo: "aberta",
        titulo: "Tecnologia e Serviços Essenciais",
        contexto: "",
        pergunta: "Alice, a Youtuber, usa a Tecnologia e Inovação para seu trabalho. Qual serviço essencial você acha que a tecnologia poderia melhorar muito na sua cidade, e por quê?",
        respostaCorreta: "Respostas podem incluir: Saúde (telemedicina, prontuários eletrônicos), Educação (ensino online, plataformas educacionais), Transporte (aplicativos de mobilidade), Saneamento (monitoramento de água e esgoto), Segurança (câmeras, sistemas de alerta), etc.",
        explicacao: "A tecnologia pode melhorar diversos serviços essenciais nas cidades. Por exemplo: na Saúde, através de telemedicina e prontuários eletrônicos; na Educação, com plataformas de ensino online; no Transporte, com aplicativos de mobilidade; no Saneamento, com sistemas de monitoramento; e na Segurança, com câmeras e sistemas de alerta."
    },

    // PARTE 4: ESTUDOS DE CASO (28-30)
    {
        id: 28,
        tipo: "opiniao",
        titulo: "Estudo de Caso: Saneamento Básico",
        contexto: "A Família Silva mora em um bairro urbano onde há muitos prédios e empresas, mas falta um bom sistema de coleta de lixo e tratamento de água, essenciais para o Saneamento Básico.",
        pergunta: "Na sua opinião, qual área das Profissões Atuais é a mais importante para resolver a falta desses serviços (como coleta de lixo e tratamento de água) e garantir a saúde do bairro? Proponha uma ação que essa profissão poderia fazer para solucionar o problema.",
        respostaCorreta: "Respostas podem incluir: Engenheiros (projetar sistemas de saneamento), Profissionais de Saúde Pública (conscientização), Gestores Públicos (implementar políticas), Arquitetos Urbanistas (planejar infraestrutura). Ações: construir estações de tratamento, implementar coleta seletiva, educar a população, fiscalizar serviços.",
        explicacao: "O problema de saneamento básico requer a atuação de diversas profissões atuais, especialmente Engenheiros (que podem projetar e construir sistemas de tratamento de água e esgoto), Profissionais de Saúde Pública (que podem conscientizar sobre a importância do saneamento), e Gestores Públicos (que podem implementar políticas e fiscalizar os serviços)."
    },
    {
        id: 29,
        tipo: "opiniao",
        titulo: "Estudo de Caso: Preservação de Conhecimentos Antigos",
        contexto: "Imagine que um grupo de Alfaiates e Sapateiros percebe que, com o surgimento das fábricas, a forma de transmitir seu conhecimento tradicional (de pai para filho) está se perdendo.",
        pergunta: "Qual sua opinião sobre a importância de preservar esses conhecimentos antigos? Proponha uma maneira de usar a Tecnologia e Inovação de hoje para garantir que a Família ou Comunidade continue aprendendo esses ofícios.",
        respostaCorreta: "Respostas podem incluir: Importância - preservar cultura, técnicas artesanais, identidade. Propostas: criar vídeos tutoriais, plataformas online de ensino, documentários, aplicativos de aprendizagem, redes sociais para compartilhar conhecimento, cursos online.",
        explicacao: "Preservar conhecimentos antigos é importante para manter a cultura, as técnicas artesanais e a identidade das comunidades. A Tecnologia e Inovação podem ajudar através de vídeos tutoriais, plataformas de ensino online, documentários, aplicativos educacionais e redes sociais, permitindo que o conhecimento seja transmitido de forma moderna mas preservando a essência tradicional."
    },
    {
        id: 30,
        tipo: "opiniao",
        titulo: "Estudo de Caso: Feira de Profissões",
        contexto: "Seu professor está organizando uma Feira de Profissões e pediu sua ajuda. Ele quer que as crianças entendam que, mesmo tendo sonhos modernos como Youtuber, é fundamental valorizar os serviços essenciais (Saúde e Educação).",
        pergunta: "Dê a sua opinião: Por que é importante que a sociedade urbana valorize tanto o trabalho de um Médico ou Professor quanto o trabalho de um Engenheiro ou de um profissional de Tecnologia e Inovação?",
        respostaCorreta: "Respostas podem incluir: Todas as profissões são importantes para o funcionamento da sociedade; Médicos e Professores cuidam da saúde e educação (essenciais); Engenheiros e profissionais de Tecnologia constroem infraestrutura e inovação; A sociedade precisa de diversidade de profissões; Todas contribuem para o bem-estar coletivo.",
        explicacao: "É importante valorizar todas as profissões porque cada uma contribui de forma essencial para o funcionamento da sociedade urbana. Médicos e Professores cuidam da saúde e educação, bases fundamentais da sociedade. Engenheiros e profissionais de Tecnologia constroem a infraestrutura e promovem inovação. Todas as profissões, desde as tradicionais até as modernas, são necessárias para garantir o bem-estar, o desenvolvimento e a qualidade de vida da população."
    }
];

