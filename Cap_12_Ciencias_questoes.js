// Banco de questões do Capítulo 12 de Ciências - O dia e a noite
const dadosDoQuizCiencias12 = [
    // QUESTÕES DE MÚLTIPLA ESCOLHA (1-10)
    {
        titulo: "Transformação do Céu",
        contexto: "Ao amanhecer, há uma grande transformação do céu, que passa de muito escuro a muito claro. Várias cores podem ser vistas no céu nesse momento. Durante o dia, podem ser identificadas cores que vão do azul vivo ao acinzentado. Ao anoitecer, outras transformações de cores podem ser vistas no céu, que passa de muito claro a muito escuro.",
        pergunta: "Todas as afirmativas sobre a transformação do céu entre a noite e o dia estão corretas, exceto:",
        opcoes: [
            "A grande transformação do céu ocorre ao amanhecer, quando o céu passa de muito escuro a muito claro.",
            "Durante o dia, as cores do céu se limitam apenas ao azul vivo, desaparecendo os tons acinzentados.",
            "O anoitecer também é marcado por transformações de cores no céu, enquanto ele se torna mais escuro.",
            "Tanto no amanhecer quanto no anoitecer, várias cores podem ser vistas no céu."
        ],
        respostaCorreta: "Durante o dia, as cores do céu se limitam apenas ao azul vivo, desaparecendo os tons acinzentados.",
        explicacao: "O texto afirma que durante o dia podem ser identificadas cores que vão do azul vivo ao acinzentado. A alternativa (b) está incorreta porque sugere que as cores se limitam ao azul vivo, o que contradiz a fonte.",
        tipo: "multipla_escolha"
    },
    {
        titulo: "Conceitos do Céu Diurno",
        contexto: "O céu noturno é muito mais escuro do que o céu diurno, pois não tem a luz do Sol. Durante o dia, as estrelas e os planetas também estão no céu, mas não conseguimos vê-los, pois a luz deles é muito mais fraca do que a luz do Sol.",
        pergunta: "Marque a opção que não reflete conceitos abordados sobre o céu diurno no texto acima:",
        opcoes: [
            "A presença do Sol impede que vejamos estrelas e planetas durante o dia.",
            "A luz das estrelas e planetas é mais fraca do que a luz intensa do Sol, por isso eles não são visíveis no dia.",
            "A luz do Sol é essencial para que o céu fique claro durante o dia.",
            "As estrelas e os planetas deixam o céu durante o dia e só retornam à noite."
        ],
        respostaCorreta: "As estrelas e os planetas deixam o céu durante o dia e só retornam à noite.",
        explicacao: "O texto explica que as estrelas e os planetas também estão no céu durante o dia, mas não conseguimos vê-los porque a luz do Sol é muito mais forte do que a luz deles. A afirmação (d) de que eles 'deixam o céu' está incorreta.",
        tipo: "multipla_escolha"
    },
    {
        titulo: "O Planeta Vênus",
        contexto: "Um exemplo disso é o planeta Vênus, que é chamado de Estrela d'Alva. Isso acontece devido ao seu intenso brilho no céu, pois Vênus se aparece com uma estrela brilhante. Mas, como é um planeta, o brilho de Vênus aparece porque ele reflete a luz do Sol que chega até ele, já que planetas não emitem luz própria.",
        pergunta: "Sobre o Planeta Vênus (Estrela d'Alva), todas as afirmações abaixo estão corretas, exceto:",
        opcoes: [
            "Vênus é um planeta que, por refletir a luz do Sol, aparece com um brilho intenso no céu.",
            "Vênus é considerado uma estrela, pois, assim como elas, emite luz própria.",
            "É possível ver Vênus tanto ao anoitecer quanto ao amanhecer, dependendo da época do ano.",
            "Vênus é chamado de 'Estrela d'Alva' por parecer uma estrela brilhante."
        ],
        respostaCorreta: "Vênus é considerado uma estrela, pois, assim como elas, emite luz própria.",
        explicacao: "Vênus é um planeta e os planetas 'não emitem luz própria', apenas refletem a luz do Sol. A afirmação de que Vênus é uma estrela que emite luz própria está incorreta.",
        tipo: "multipla_escolha"
    },
    {
        titulo: "Raciocínio Lógico sobre a Noite",
        contexto: "Se uma criança está observando o céu noturno em uma noite sem nuvens, ela pode identificar vários corpos celestes.",
        pergunta: "Qual dos fatores abaixo, se presente, atrapalharia essa observação, conforme o texto?",
        opcoes: [
            "O movimento de rotação da Terra.",
            "O uso de um telescópio.",
            "A poluição luminosa de uma cidade grande.",
            "A Lua refletindo a luz do Sol."
        ],
        respostaCorreta: "A poluição luminosa de uma cidade grande.",
        explicacao: "O texto cita que a poluição luminosa das cidades grandes (excesso de lâmpadas acesas e outras fontes de luz) é um fator que 'dificulta ou até impede a visualização do céu noturno'.",
        tipo: "multipla_escolha"
    },
    {
        titulo: "Conceito de Atmosfera e Cor do Céu",
        contexto: "O miúdo do nosso planeta ganha um tom azulado durante o dia. Essa cor azul aparece devido à ação da atmosfera sobre os raios de luz do Sol.",
        pergunta: "Qual é o papel da atmosfera em relação à cor do céu, de acordo com o texto?",
        opcoes: [
            "A atmosfera é uma camada que emite a luz azul, colorindo o céu.",
            "A atmosfera impede que os raios do Sol cheguem à Terra, mantendo o céu sempre azul.",
            "A atmosfera direciona os raios solares e, ao mudar sua direção, faz com que pareçam azuis.",
            "A atmosfera reflete a luz da Lua, que é azulada."
        ],
        respostaCorreta: "A atmosfera direciona os raios solares e, ao mudar sua direção, faz com que pareçam azuis.",
        explicacao: "O texto explica que a cor azul do céu aparece devido à ação da atmosfera, que desvia a direção dos raios solares, fazendo com que pareçam azuis.",
        tipo: "multipla_escolha"
    },
    {
        titulo: "Causa do Dia e da Noite",
        contexto: "Por muito tempo, acreditou-se que o Sol girava em torno da Terra, causando o dia e a noite. No entanto, qual é o movimento responsável por esse ciclo, segundo as informações do texto?",
        pergunta: "Qual é o movimento responsável pelo ciclo de dia e noite?",
        opcoes: [
            "O movimento de translação do Sol em torno da Terra.",
            "O movimento de rotação da Terra em torno do seu próprio eixo.",
            "O movimento de translação da Terra em torno do Sol.",
            "O movimento de rotação do Sol em torno da Terra."
        ],
        respostaCorreta: "O movimento de rotação da Terra em torno do seu próprio eixo.",
        explicacao: "O dia e a noite são causados pelo movimento de rotação da Terra, que é o giro em torno de si mesma.",
        tipo: "multipla_escolha"
    },
    {
        titulo: "Hábitos Animais",
        contexto: "O camaleão é um exemplo de animal que fica mais tempo acordado durante o dia, ou seja, tem hábitos diurnos... O morcego é um animal que passa a maior parte do dia dormindo... Durante a noite, ele acorda para se alimentar e realizar outras atividades. Os morcegos costumam dormir durante o dia e têm hábitos noturnos.",
        pergunta: "Considerando os hábitos citados no texto, qual dos animais abaixo não tem hábitos diurnos?",
        opcoes: [
            "Camaleão.",
            "Tamanduá-bandeira.",
            "Quati.",
            "Morcego."
        ],
        respostaCorreta: "Morcego.",
        explicacao: "O Morcego é explicitamente citado como um animal que tem hábitos noturnos, passando a maior parte do dia dormindo e acordando à noite. Camaleão, Tamanduá-bandeira e Quati são citados como animais de hábitos diurnos.",
        tipo: "multipla_escolha"
    },
    {
        titulo: "Observação Noturna",
        contexto: "Para estudar os astros, como estrelas e planetas, e conseguir ver muitos pontos brilhantes no céu.",
        pergunta: "Qual dos seguintes instrumentos ou ações é sugerido no texto?",
        opcoes: [
            "Ir para um lugar com muita poluição luminosa.",
            "Usar um telescópio.",
            "Observar em uma noite nublada, pois as nuvens ajudam na visão.",
            "Confiar apenas no brilho intenso da Lua para guiar a observação."
        ],
        respostaCorreta: "Usar um telescópio.",
        explicacao: "O texto sugere o uso de telescópio como instrumento para estudar os astros e conseguir ver muitos pontos brilhantes no céu noturno.",
        tipo: "multipla_escolha"
    },
    {
        titulo: "Transição e Cores",
        contexto: "Enquanto o Sol nasce ou se põe, muitas cores podem ser vistas no céu, próximo ao horizonte... No nascer do Sol, o céu vai ficando cada vez mais claro, até amanhecer. No pôr do Sol, o céu vai ficando cada vez mais escuro, até anoitecer.",
        pergunta: "Qual é a característica comum tanto ao amanhecer quanto ao anoitecer, de acordo com o texto?",
        opcoes: [
            "O céu permanece na cor azul acinzentado.",
            "O céu está muito claro e com poucos pontos brilhantes.",
            "O céu sofre transformações de cores.",
            "Os raios solares chegam perfeitamente retos à Terra."
        ],
        respostaCorreta: "O céu sofre transformações de cores.",
        explicacao: "O texto indica que tanto no amanhecer quanto no anoitecer, muitas cores podem ser vistas no céu, caracterizando transformações de cores em ambos os momentos.",
        tipo: "multipla_escolha"
    },
    {
        titulo: "Atividades Diárias",
        contexto: "Qual das atividades abaixo é tipicamente realizada durante a noite, conforme o que é descrito sobre o ciclo de vida humano no capítulo?",
        pergunta: "Qual atividade é tipicamente noturna?",
        opcoes: [
            "Crianças vão à escola e adultos trabalham.",
            "Bancos e lojas fecham, e as pessoas vão para casa descansar.",
            "Pessoas correm, brincam e se exercitam.",
            "O tempo de receber a luz do Sol."
        ],
        respostaCorreta: "Bancos e lojas fecham, e as pessoas vão para casa descansar.",
        explicacao: "O texto descreve que durante a noite, bancos e lojas fecham, e é tempo para ir para casa, descansar e se preparar para o dia seguinte.",
        tipo: "multipla_escolha"
    },

    // QUESTÕES DE VERDADEIRO/FALSO (11-20)
    {
        titulo: "Céu Noturno e Luminosidade",
        contexto: "Durante a noite, o céu, a Lua parece muito mais brilhante, porém esse brilho não é produzido por ela. A Lua apenas reflete a luz do Sol, por isso nós a vemos iluminada.",
        pergunta: "Analise as afirmações sobre o céu noturno e luminosidade:",
        afirmacoes: [
            "A Lua produz o seu próprio brilho, sendo uma estrela durante a noite.",
            "O céu noturno é escuro porque não recebe a luz direta do Sol.",
            "O brilho intenso da Lua à noite é resultado da luz do Sol que ela reflete.",
            "Durante a noite, mesmo em dias claros, não podemos ver a Lua, apenas estrelas."
        ],
        opcoes: [
            "F, V, V, V",
            "V, F, F, V",
            "F, V, V, F",
            "V, V, F, F"
        ],
        respostaCorreta: "F, V, V, F",
        explicacao: "I. Falso - A Lua não produz luz própria, apenas reflete a luz do Sol. II. Verdadeiro - O céu noturno é escuro porque não recebe luz direta do Sol. III. Verdadeiro - O brilho da Lua é resultado da reflexão da luz solar. IV. Falso - A Lua pode ser vista durante a noite quando está iluminada.",
        tipo: "verdadeiro_falso"
    },
    {
        titulo: "Causas da Rotação",
        contexto: "Por volta do ano de 1530, um astrônomo, chamado Nicolau Copérnico, criou uma explicação que resolvia todas essas questões. Segundo ele, além de girar em torno do Sol, a Terra também gira em torno de si mesma. Esse movimento da Terra é conhecido como rotação.",
        pergunta: "Analise as afirmações sobre a rotação da Terra:",
        afirmacoes: [
            "O movimento de rotação da Terra foi explicado primeiramente por Nicolau Copérnico por volta de 1530.",
            "O movimento de rotação da Terra causa o ciclo de dia e noite, pois expõe regiões diferentes da superfície à luz solar.",
            "Rotação é o nome dado ao movimento da Terra ao redor do Sol, que leva um ano para ser concluído.",
            "Antes de Copérnico, a crença popular era de que o Sol girava em torno da Terra."
        ],
        opcoes: [
            "F, F, V, V",
            "V, V, F, V",
            "V, F, V, F",
            "F, V, F, V"
        ],
        respostaCorreta: "V, V, F, V",
        explicacao: "I. Verdadeiro - Copérnico explicou a rotação por volta de 1530. II. Verdadeiro - A rotação causa o ciclo dia/noite. III. Falso - Rotação é o giro da Terra em torno de si mesma, não ao redor do Sol. IV. Verdadeiro - Antes de Copérnico acreditava-se que o Sol girava em torno da Terra.",
        tipo: "verdadeiro_falso"
    },
    {
        titulo: "Diferenças entre Estrelas e Planetas",
        contexto: "É muito difícil saber a diferença entre uma estrela e um planeta apenas olhando para eles no céu. Essa diferença não está no formato ou no brilho que esses elementos apresentam, mas na posição em que estão no céu ao longo do dia. Portanto, ao olhar para uma estrela ou para um planeta, à noite, você não perceberá diferença, pois eles parecerão iguais.",
        pergunta: "Analise as afirmações sobre estrelas e planetas:",
        afirmacoes: [
            "Estrelas e planetas são fáceis de distinguir no céu noturno pelo seu formato diferente.",
            "Os planetas, diferentemente das estrelas, não emitem luz própria, apenas a refletem.",
            "A dificuldade em diferenciar estrelas e planetas está na sua aparência semelhante de brilho e posição.",
            "A posição dos astros no céu ao longo do dia é o fator que ajuda a diferenciar estrelas e planetas."
        ],
        opcoes: [
            "V, F, F, V",
            "F, V, V, F",
            "F, V, V, V",
            "V, V, F, F"
        ],
        respostaCorreta: "F, V, V, V",
        explicacao: "I. Falso - O texto diz que é muito difícil distingui-los pelo formato. II. Verdadeiro - Planetas não emitem luz própria. III. Verdadeiro - Eles parecem iguais em brilho e aparência. IV. Verdadeiro - A posição ao longo do dia ajuda a diferenciá-los.",
        tipo: "verdadeiro_falso"
    },
    {
        titulo: "Vida e Hábitos Noturnos",
        contexto: "Durante a noite, muitas outras coisas acontecem perto de nós. Crianças vão dormir, alguns adultos trabalham, outros descansam, lojas fecham, bancos também. É tempo para você ir para casa, tomar banho, preparar-se para o dia seguinte e descansar.",
        pergunta: "Analise as afirmações sobre vida e hábitos noturnos:",
        afirmacoes: [
            "Todas as atividades humanas cessam durante a noite, sendo este um período apenas de descanso.",
            "O ciclo de aproximadamente 24 horas inclui a duração do dia (cerca de 12 horas) e da noite (cerca de 12 horas).",
            "O período noturno é o momento em que lojas e bancos geralmente fecham.",
            "O tempo de duração do dia e da noite pode variar dependendo da época do ano."
        ],
        opcoes: [
            "F, F, V, V",
            "F, V, V, F",
            "V, F, F, V",
            "V, V, V, F"
        ],
        respostaCorreta: "F, V, V, V",
        explicacao: "I. Falso - Alguns adultos trabalham à noite. II. Verdadeiro - O ciclo é de aproximadamente 24 horas. III. Verdadeiro - Lojas e bancos fecham à noite. IV. Verdadeiro - A duração varia com as estações.",
        tipo: "verdadeiro_falso"
    },
    {
        titulo: "Fatores que Prejudicam a Observação Noturna",
        contexto: "Alguns fatores podem atrapalhar a visão do céu noturno. Um deles é a poluição luminosa das cidades grandes. Poluição luminosa é o excesso de lâmpadas acesas e outras fontes de luz próximas ao lugar em que você se encontra, o que dificulta ou até impede a visualização do céu noturno.",
        pergunta: "Analise as afirmações sobre fatores que prejudicam a observação noturna:",
        afirmacoes: [
            "A poluição luminosa, gerada por lâmpadas acesas, impede a visualização dos pontos brilhantes no céu noturno.",
            "O excesso de luz na cidade grande é o único fator que atrapalha a observação do céu noturno.",
            "Para ter uma boa visão do céu noturno, o ideal é procurar um local com pouca ou nenhuma poluição luminosa.",
            "As nuvens em uma noite nublada podem cobrir a Lua e atrapalhar a observação de estrelas e planetas."
        ],
        opcoes: [
            "V, F, F, V",
            "F, V, V, F",
            "V, V, F, V",
            "V, F, V, V"
        ],
        respostaCorreta: "V, F, V, V",
        explicacao: "I. Verdadeiro - A poluição luminosa impede a visualização. II. Falso - Não é o único fator, há outros como nuvens. III. Verdadeiro - Locais com pouca luz são ideais. IV. Verdadeiro - Nuvens podem atrapalhar a observação.",
        tipo: "verdadeiro_falso"
    },
    {
        titulo: "Hábitos Diurnos e Noturnos em Animais",
        contexto: "O camaleão é um exemplo de animal que fica mais tempo acordado durante o dia, ou seja, tem hábitos diurnos... Outros exemplos de animais de hábitos diurnos são o tamanduá-bandeira, o quati e o beija-flor. Outros exemplos de animais de hábitos noturnos são algumas corujas, a barata, o escorpião, o vaga-lume ou pirilampo, o tatu e o gambá.",
        pergunta: "Analise as afirmações sobre hábitos diurnos e noturnos em animais:",
        afirmacoes: [
            "Animais com hábitos diurnos, como o camaleão, realizam suas atividades principais durante a noite.",
            "O tatu e o gambá são classificados como animais de hábitos noturnos.",
            "O morcego utiliza a luz do Sol para se alimentar.",
            "O tamanduá-bandeira é um animal que está ativo, principalmente, durante o dia."
        ],
        opcoes: [
            "V, V, F, F",
            "F, F, V, V",
            "F, V, F, V",
            "V, F, V, F"
        ],
        respostaCorreta: "F, V, F, V",
        explicacao: "I. Falso - Animais diurnos são ativos durante o dia. II. Verdadeiro - Tatu e gambá são noturnos. III. Falso - Morcego é noturno, não usa luz solar. IV. Verdadeiro - Tamanduá-bandeira é diurno.",
        tipo: "verdadeiro_falso"
    },
    {
        titulo: "O Céu Diurno e o Céu Noturno em Comparação",
        contexto: "Durante o dia, podemos ver no céu azulado o Sol, algumas nuvens e, de vez em quando, a Lua. Durante a noite, podemos ver no céu escuro as estrelas, os planetas e, muitas vezes, a Lua.",
        pergunta: "Analise as afirmações sobre o céu diurno e noturno:",
        afirmacoes: [
            "O Sol e a Lua nunca podem ser vistos no céu ao mesmo tempo.",
            "O céu diurno é azulado, enquanto o céu noturno é escuro.",
            "Estrelas e planetas só podem ser vistos no céu noturno, pois a luz do Sol no dia os esconde.",
            "As nuvens podem ser vistas tanto durante o dia quanto durante a noite."
        ],
        opcoes: [
            "F, V, F, V",
            "F, V, V, F",
            "V, F, V, F",
            "V, V, F, F"
        ],
        respostaCorreta: "F, V, V, F",
        explicacao: "I. Falso - A Lua pode ser vista durante o dia. II. Verdadeiro - Céu diurno é azulado, noturno é escuro. III. Verdadeiro - Estrelas e planetas só são visíveis à noite. IV. Falso - O texto não menciona nuvens à noite especificamente.",
        tipo: "verdadeiro_falso"
    },
    {
        titulo: "O Movimento da Terra",
        contexto: "Enquanto em um lado da Terra é dia, no outro, é noite. Esses fenômenos são causados pelo movimento de rotação da Terra.",
        pergunta: "Analise as afirmações sobre o movimento da Terra:",
        afirmacoes: [
            "O movimento de rotação garante que, se for dia no Brasil, será noite no lado oposto do planeta.",
            "A rotação é o que permite que a Terra receba a luz do Sol de maneira desigual em diferentes regiões da superfície.",
            "Sem o movimento de rotação, não haveria ciclo de dia e noite na Terra.",
            "O movimento de rotação também é responsável pelas mudanças das estações do ano."
        ],
        opcoes: [
            "F, F, V, V",
            "V, V, V, F",
            "V, F, V, F",
            "F, V, F, V"
        ],
        respostaCorreta: "V, V, V, F",
        explicacao: "I. Verdadeiro - A rotação causa dia/noite em lados opostos. II. Verdadeiro - A rotação faz a Terra receber luz desigualmente. III. Verdadeiro - Sem rotação não haveria ciclo dia/noite. IV. Falso - As estações são causadas pela translação e inclinação do eixo.",
        tipo: "verdadeiro_falso"
    },
    {
        titulo: "A Lua e o Sol",
        contexto: "Em alguns dias do mês, a Lua também aparece no céu diurno. Isso acontece quando a parte da Lua que estamos vendo daqui da Terra está iluminada pela luz do Sol.",
        pergunta: "Analise as afirmações sobre a Lua e o Sol:",
        afirmacoes: [
            "A Lua é visível durante o dia porque ela tem luz própria muito intensa.",
            "A Lua sempre está iluminada, seja dia ou noite, pela luz do Sol.",
            "Quando a Lua aparece durante o dia, a parte que vemos é aquela que está recebendo a luz solar.",
            "A Lua só pode ser vista quando a parte da Terra em que estamos não está recebendo a luz do Sol."
        ],
        opcoes: [
            "V, F, F, V",
            "F, V, V, F",
            "F, F, V, V",
            "V, V, F, F"
        ],
        respostaCorreta: "F, V, V, F",
        explicacao: "I. Falso - A Lua não tem luz própria. II. Verdadeiro - A Lua sempre reflete a luz solar. III. Verdadeiro - Vemos a parte iluminada pelo Sol. IV. Falso - A Lua pode ser vista durante o dia também.",
        tipo: "verdadeiro_falso"
    },
    {
        titulo: "Plantas Diurnas e Noturnas",
        contexto: "As plantas também podem se comportar de maneiras diferentes durante o dia e a noite. Muitas plantas abrem suas flores coloridas e soltam seu perfume de dia, atraindo insetos e aves. Outras, geralmente de flores brancas, abrem-se e soltam seu perfume à noite, atraindo morcegos e insetos noturnos.",
        pergunta: "Analise as afirmações sobre plantas diurnas e noturnas:",
        afirmacoes: [
            "Plantas que florescem de dia geralmente usam cores e perfumes para atrair insetos diurnos.",
            "Morcegos e insetos noturnos são atraídos por plantas que abrem suas flores à noite e liberam perfume.",
            "Todas as plantas abrem suas flores e liberam perfume somente durante o dia.",
            "Flores que se abrem à noite tendem a ser brancas."
        ],
        opcoes: [
            "F, F, V, V",
            "V, V, F, V",
            "V, F, F, V",
            "F, V, V, F"
        ],
        respostaCorreta: "V, V, F, V",
        explicacao: "I. Verdadeiro - Plantas diurnas usam cores e perfumes para atrair insetos diurnos. II. Verdadeiro - Plantas noturnas atraem morcegos e insetos noturnos. III. Falso - Algumas plantas florescem à noite. IV. Verdadeiro - Flores noturnas tendem a ser brancas.",
        tipo: "verdadeiro_falso"
    },

    // QUESTÕES ABERTAS (21-27)
    {
        titulo: "Conceito de Atmosfera",
        contexto: "A atmosfera é uma camada de gases que envolve nosso planeta.",
        pergunta: "Segundo o texto, o que é a Atmosfera?",
        respostaEsperada: "A atmosfera é uma camada de gases que envolve a Terra e é responsável pela cor azul do céu devido à sua ação sobre os raios de luz do Sol.",
        tipo: "aberta"
    },
    {
        titulo: "Diferença entre Estrela e Planeta",
        contexto: "Estrelas e planetas têm características diferentes em relação à emissão de luz.",
        pergunta: "Qual é a principal diferença entre uma estrela e um planeta em relação à emissão de luz?",
        respostaEsperada: "As estrelas emitem luz própria, enquanto os planetas não emitem luz própria, apenas refletem a luz do Sol.",
        tipo: "aberta"
    },
    {
        titulo: "Corpos Celestes no Céu Diurno",
        contexto: "Durante o dia, alguns corpos celestes estão presentes no céu mas não conseguimos vê-los devido à luz do Sol.",
        pergunta: "Cite dois exemplos de corpos celestes que, embora estejam no céu diurno, não conseguimos ver devido à luz do Sol.",
        respostaEsperada: "Estrelas e planetas (exceto ocasionalmente a Lua e Vênus em condições específicas).",
        tipo: "aberta"
    },
    {
        titulo: "Movimento da Terra",
        contexto: "O ciclo de dia e noite é causado por um movimento específico da Terra.",
        pergunta: "Qual o nome do movimento da Terra que causa o ciclo de dia e noite?",
        respostaEsperada: "Rotação - o movimento da Terra girando em torno de seu próprio eixo.",
        tipo: "aberta"
    },
    {
        titulo: "Definição de Horizonte",
        contexto: "O horizonte é uma linha imaginária que separa o céu da terra.",
        pergunta: "O que é o horizonte, de acordo com a definição do texto?",
        respostaEsperada: "O horizonte é a linha imaginária onde o céu parece encontrar a terra, sendo o limite visual entre o céu e a superfície terrestre.",
        tipo: "aberta"
    },
    {
        titulo: "Poluição Luminosa",
        contexto: "Nas grandes cidades, um fator ambiental específico dificulta a observação do céu noturno.",
        pergunta: "Qual é um dos fatores ambientais citados que pode dificultar a visualização do céu noturno nas grandes cidades?",
        respostaEsperada: "A poluição luminosa - o excesso de lâmpadas acesas e outras fontes de luz que dificultam ou impedem a visualização do céu noturno.",
        tipo: "aberta"
    },
    {
        titulo: "Estrela d'Alva",
        contexto: "Um objeto celeste é popularmente conhecido como 'Estrela d'Alva' ou 'Estrela da Alvorada'.",
        pergunta: "Qual objeto é popularmente conhecido como 'Estrela d'Alva' ou 'Estrela da Alvorada' e por que ele brilha tanto?",
        respostaEsperada: "O planeta Vênus é conhecido como 'Estrela d'Alva'. Ele brilha tanto porque reflete intensamente a luz do Sol que chega até ele, já que planetas não emitem luz própria.",
        tipo: "aberta"
    },

    // QUESTÕES DE ESTUDO DE CASO (28-30)
    {
        titulo: "Estudo de Caso sobre Poluição Luminosa",
        contexto: "João mora em uma cidade grande, cheia de prédios altos e postes de luz muito fortes. Ele tentou usar seu novo telescópio para observar as estrelas, mas viu muito pouco, a não ser a Lua.",
        pergunta: "Se João quisesse ter uma observação melhor das estrelas e planetas, qual solução ele deveria buscar, e por quê?",
        respostaEsperada: "João deveria procurar um local com pouca ou nenhuma poluição luminosa, como áreas rurais ou afastadas da cidade. Isso porque o excesso de lâmpadas acesas e outras fontes de luz nas cidades grandes dificulta ou impede a visualização do céu noturno, já que a luz artificial ofusca o brilho mais fraco das estrelas e planetas.",
        tipo: "estudo_caso"
    },
    {
        titulo: "Estudo de Caso sobre Hábitos e Adaptação",
        contexto: "Imagine que um Morcego (animal noturno) e um Tamanduá-bandeira (animal diurno) trocassem de horário por um dia. Se o Morcego resolvesse acordar de dia para buscar alimento e o Tamanduá-bandeira resolvesse acordar à noite.",
        pergunta: "Quais seriam os problemas que cada um enfrentaria, considerando seus hábitos e a descrição das plantas no texto?",
        respostaEsperada: "O Morcego enfrentaria dificuldades porque está adaptado para se alimentar à noite, quando plantas noturnas (geralmente de flores brancas) liberam perfume atraindo insetos noturnos. Durante o dia, haveria menos insetos noturnos disponíveis. O Tamanduá-bandeira teria problemas porque está adaptado para atividades diurnas, quando há mais luz solar e plantas diurnas (flores coloridas) atraem insetos diurnos. À noite, teria dificuldade de visão e menos presas disponíveis.",
        tipo: "estudo_caso"
    },
    {
        titulo: "Opinião sobre o Tempo e a Rotação",
        contexto: "O texto explica que o dia e a noite duram, juntos, aproximadamente 24 horas, devido à rotação da Terra.",
        pergunta: "Você acha que seria bom ou ruim se o movimento de rotação da Terra fosse o dobro mais rápido? Dê sua opinião e justifique brevemente com base nas atividades do dia e da noite descritas no capítulo.",
        respostaEsperada: "Seria ruim se a rotação fosse o dobro mais rápida, pois os dias e noites durariam apenas 12 horas cada. Isso prejudicaria as atividades humanas: crianças teriam menos tempo na escola, adultos menos tempo para trabalhar, e menos tempo para descansar à noite. Os animais também seriam afetados, pois teriam menos tempo para suas atividades diurnas ou noturnas. As plantas teriam menos tempo para realizar a fotossíntese durante o dia e seus ciclos de florescimento seriam alterados.",
        tipo: "estudo_caso"
    }
];
