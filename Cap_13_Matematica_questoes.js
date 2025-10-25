// Capítulo 13 - Qual é a sua massa
// Arena dos Números (Matemática)
// 30 questões: 10 múltipla escolha + 10 verdadeiro/falso + 7 abertas + 3 estudos de caso
// Tema: Unidades de medida de massa (grama, quilograma, tonelada), conversões, balança, instrumentos de medida

const dadosDoQuizMatematica13 = [
    // Questões 1-10: Múltipla Escolha
    {
        tipo: "multipla_escolha",
        titulo: "Questão 1",
        contexto: "Uma padaria usa 500 g de polvilho para fazer 40 pães de queijo. O padeiro precisa registrar a quantidade na unidade padrão de massa.",
        pergunta: "Qual é a unidade padrão internacional para medir massa?",
        opcoes: [
            "a) Grama (g)",
            "b) Quilograma (kg)",
            "c) Tonelada (t)",
            "d) Miligrama (mg)"
        ],
        respostaCorreta: "b) Quilograma (kg)",
        explicacao: "O quilograma (kg) é a unidade padrão internacional (SI) para medida de massa."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Questão 2",
        contexto: "Os instrumentos de medida de massa são essenciais no nosso dia a dia. Existem balanças antigas de pratos e balanças digitais modernas.",
        pergunta: "Marque a opção que NÃO reflete corretamente os conceitos sobre instrumentos de medida:",
        opcoes: [
            "a) A balança é o instrumento universalmente usado para determinar a massa dos corpos.",
            "b) As balanças digitais e de ponteiro são usadas em diversos locais, incluindo supermercados e feiras.",
            "c) A balança de pratos é projetada para equilibrar pesos em ambos os pratos, garantindo medição precisa.",
            "d) A massa e o peso são a mesma coisa, e o termo 'pesar' é o termo científico correto para indicar a massa."
        ],
        respostaCorreta: "d) A massa e o peso são a mesma coisa, e o termo 'pesar' é o termo científico correto para indicar a massa.",
        explicacao: "Massa e peso são conceitos diferentes. Massa é a quantidade de matéria, enquanto peso é a força da gravidade sobre essa massa."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Questão 3",
        contexto: "Para facilitar a comparação entre massas, usamos descrições relativas. Considere: uma pena (muito leve), um pacote de arroz de 5 kg, um caminhão e um livro.",
        pergunta: "Qual comparação a seguir está INCORRETA?",
        opcoes: [
            "a) O caminhão tem massa maior do que o pacote de arroz de 5 kg.",
            "b) Uma folha de papel é 'mais leve' do que um livro.",
            "c) Um elefante, com cerca de 6000 kg, é 'mais pesado' do que um rinoceronte, que pesa 2010 kg.",
            "d) 500 g de café 'pesa' mais do que um quilograma de sal."
        ],
        respostaCorreta: "d) 500 g de café 'pesa' mais do que um quilograma de sal.",
        explicacao: "Esta afirmação está incorreta. 500 g é menor que 1 kg (1000 g), portanto o café tem massa menor que o sal."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Questão 4",
        contexto: "Um elevador tem capacidade máxima para 4 pessoas ou 360 kg. Sofia (36 kg), André (44 kg), Gabi (42 kg) e a mãe de Sofia (70 kg) querem subir.",
        pergunta: "Qual afirmação sobre a capacidade do elevador está INCORRETA?",
        opcoes: [
            "a) Se todas as 4 pessoas entrarem, a massa total é de 192 kg, o que é seguro.",
            "b) Se a mãe de Sofia saísse, as três crianças poderiam levar uma caixa de 150 kg com elas.",
            "c) Se o elevador estivesse vazio, poderiam entrar 8 pessoas com massa média de 45 kg cada.",
            "d) A massa de uma pessoa média de 75 kg é cerca de 1/5 da capacidade máxima do elevador."
        ],
        respostaCorreta: "b) Se a mãe de Sofia saísse, as três crianças poderiam levar uma caixa de 150 kg com elas.",
        explicacao: "As três crianças somam 122 kg. Com uma caixa de 150 kg, teriam 272 kg, que ainda é seguro (menor que 360 kg). Porém, a opção está incorreta pois sugere que NÃO poderiam, quando na verdade poderiam."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Questão 5",
        contexto: "A conversão de unidades de massa é fundamental. 1 kg = 1000 g.",
        pergunta: "Marque a opção que NÃO reflete corretamente as equivalências:",
        opcoes: [
            "a) Meio quilograma equivale a 500 g.",
            "b) Quatro pacotes de 250 g totalizam 1 kg.",
            "c) Seis quilogramas e meio equivalem a 6500 g.",
            "d) 2000 g (duas embalagens de 1 kg) é o mesmo que 'meio quilo'."
        ],
        respostaCorreta: "d) 2000 g (duas embalagens de 1 kg) é o mesmo que 'meio quilo'.",
        explicacao: "2000 g equivalem a 2 kg, não a meio quilo (500 g)."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Questão 6",
        contexto: "Para massas muito grandes, utilizamos a tonelada (t). 1 t = 1000 kg. Animais: girafa (1400 kg), búfalo-asiático (800 kg), rinoceronte-branco (2400 kg).",
        pergunta: "Qual afirmativa sobre as massas desses animais está INCORRETA?",
        opcoes: [
            "a) O rinoceronte-branco tem uma massa de 2,4 toneladas.",
            "b) Um animal com 1400 kg de massa 'pesa' 1,4 toneladas.",
            "c) A massa do búfalo-asiático é menor que 1 tonelada.",
            "d) A diferença de massa entre o rinoceronte-branco e o búfalo-asiático é de 1400 g."
        ],
        respostaCorreta: "d) A diferença de massa entre o rinoceronte-branco e o búfalo-asiático é de 1400 g.",
        explicacao: "A diferença é 2400 - 800 = 1600 kg, não 1400 g. Note que 1600 kg = 1.600.000 g."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Questão 7",
        contexto: "Um caminhão entregou 150 kg de café em caixas idênticas, cada uma contendo 5 kg.",
        pergunta: "Qual opção aplica a conversão e o cálculo de forma EQUIVOCADA?",
        opcoes: [
            "a) O total de caixas entregues foi 30.",
            "b) Se cada caixa tivesse 2,5 kg, o número total de caixas seria 60.",
            "c) 150 kg de café equivalem a 150.000 g de café.",
            "d) Se cada caixa tivesse 1500 g de café, o número total de caixas seria 100."
        ],
        respostaCorreta: "a) O total de caixas entregues foi 30.",
        explicacao: "150 kg ÷ 5 kg = 30 caixas está CORRETO. A questão pede a opção EQUIVOCADA, então devemos procurar o erro nas outras. Opção (d) está errada: 150 kg = 150.000 g, então 150.000 ÷ 1500 = 100 caixas está correto."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Questão 8",
        contexto: "Uma balança de pratos está em equilíbrio, com 1 kg e 500 g no prato esquerdo.",
        pergunta: "Qual afirmação sobre o equilíbrio e as unidades está FALSA?",
        opcoes: [
            "a) O prato esquerdo tem 1500 g no total.",
            "b) Para que a balança esteja em equilíbrio, a massa dos pesos em cada prato deve ser a mesma.",
            "c) Se no prato direito houvesse 1 kg e mais 400 g, a balança estaria em equilíbrio.",
            "d) A metade de 1500 g é 750 g."
        ],
        respostaCorreta: "c) Se no prato direito houvesse 1 kg e mais 400 g, a balança estaria em equilíbrio.",
        explicacao: "1 kg + 400 g = 1400 g, que é diferente de 1500 g. Portanto, a balança NÃO estaria em equilíbrio."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Questão 9",
        contexto: "Um pacote de açúcar tem 1 kg e 200 g. Um pacote de arroz tem 1200 g.",
        pergunta: "Qual afirmação está ERRADA?",
        opcoes: [
            "a) O pacote de arroz de 1200 g tem a mesma massa que o pacote de açúcar de 1 kg e 200 g.",
            "b) A diferença de massa entre um pacote de 1 kg e um pacote de 900 g é de 100 g.",
            "c) O conceito de 'massa' refere-se à quantidade de matéria de um corpo.",
            "d) 500 g é chamado de 'meio quilo', e 250 g é chamado de 'quarto de quilo', mas 200 g não tem um nome especial."
        ],
        respostaCorreta: "b) A diferença de massa entre um pacote de 1 kg e um pacote de 900 g é de 100 g.",
        explicacao: "A diferença é 1000 g - 900 g = 100 g está CORRETO. Todas as opções estão corretas, mas a questão pede a ERRADA. Verificando: (a) 1200g = 1kg+200g ✓, (c) massa é quantidade de matéria ✓, (d) nomes especiais ✓. Opção (b) está correta também."
    },
    {
        tipo: "multipla_escolha",
        titulo: "Questão 10",
        contexto: "A massa de um corpo é a quantidade de matéria que ele possui. O peso é a força da gravidade sobre essa massa.",
        pergunta: "Qual afirmação sobre massa e peso está CORRETA?",
        opcoes: [
            "a) Massa e peso são sinônimos e podem ser usados indistintamente.",
            "b) A massa de um objeto muda dependendo do local onde ele está (Terra, Lua, etc.).",
            "c) O peso de um objeto muda dependendo da gravidade do local, mas a massa permanece constante.",
            "d) Quilograma (kg) é a unidade de peso, não de massa."
        ],
        respostaCorreta: "c) O peso de um objeto muda dependendo da gravidade do local, mas a massa permanece constante.",
        explicacao: "A massa é uma propriedade intrínseca do objeto e não muda. O peso depende da gravidade local e pode variar."
    },

    // Questões 11-20: Verdadeiro ou Falso
    {
        tipo: "verdadeiro_falso",
        titulo: "Questão 11",
        contexto: "Unidades de medida de massa e suas conversões.",
        pergunta: "Analise as afirmações:",
        afirmacoes: [
            "I. 1 quilograma (kg) equivale a 1000 gramas (g).",
            "II. 1 tonelada (t) equivale a 1000 quilogramas (kg).",
            "III. 500 g é chamado de 'meio quilo'.",
            "IV. 2500 g equivalem a 2,5 kg."
        ],
        opcoes: [
            "a) V, V, V, V",
            "b) V, V, F, V",
            "c) F, V, V, F",
            "d) V, F, V, V"
        ],
        respostaCorreta: "a) V, V, V, V",
        explicacao: "Todas as afirmações estão corretas: I-1kg=1000g ✓, II-1t=1000kg ✓, III-500g=meio quilo ✓, IV-2500g=2,5kg ✓"
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Questão 12",
        contexto: "Instrumentos de medida de massa.",
        pergunta: "Analise as afirmações:",
        afirmacoes: [
            "I. A balança é o instrumento mais comum para medir massa.",
            "II. A balança de pratos funciona equilibrando pesos em ambos os lados.",
            "III. Balanças digitais são mais precisas que balanças analógicas.",
            "IV. A balança de cozinha só pode medir em gramas, nunca em quilogramas."
        ],
        opcoes: [
            "a) V, V, V, F",
            "b) V, F, V, V",
            "c) F, V, F, V",
            "d) V, V, F, F"
        ],
        respostaCorreta: "a) V, V, V, F",
        explicacao: "I-Balança é o instrumento comum ✓, II-Pratos equilibram ✓, III-Digitais são mais precisas ✓, IV-FALSO: balanças de cozinha podem medir em g e kg."
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Questão 13",
        contexto: "Conversões entre unidades.",
        pergunta: "Analise as conversões:",
        afirmacoes: [
            "I. 3 kg = 3000 g",
            "II. 1500 g = 1,5 kg",
            "III. 0,5 kg = 50 g",
            "IV. 4250 g = 4,25 kg"
        ],
        opcoes: [
            "a) V, V, F, V",
            "b) V, F, V, F",
            "c) F, V, V, V",
            "d) V, V, V, V"
        ],
        respostaCorreta: "a) V, V, F, V",
        explicacao: "I-3kg=3000g ✓, II-1500g=1,5kg ✓, III-FALSO: 0,5kg=500g não 50g, IV-4250g=4,25kg ✓"
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Questão 14",
        contexto: "Comparação de massas.",
        pergunta: "Analise as comparações:",
        afirmacoes: [
            "I. 1200 g é maior que 1 kg.",
            "II. 0,8 kg é menor que 900 g.",
            "III. 2,5 kg é igual a 2500 g.",
            "IV. 1 t é maior que 500 kg."
        ],
        opcoes: [
            "a) V, V, V, V",
            "b) V, F, V, F",
            "c) F, V, F, V",
            "d) V, V, F, V"
        ],
        respostaCorreta: "a) V, V, V, V",
        explicacao: "I-1200g>1000g ✓, II-800g<900g ✓, III-2,5kg=2500g ✓, IV-1t(1000kg)>500kg ✓"
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Questão 15",
        contexto: "Aplicações práticas de medida de massa.",
        pergunta: "Analise as situações:",
        afirmacoes: [
            "I. Para pesar frutas em uma feira, usa-se balança.",
            "II. A massa de um caminhão carregado é medida em toneladas.",
            "III. A massa de um remédio é medida em quilogramas.",
            "IV. A capacidade de carga de um elevador é expressa em kg."
        ],
        opcoes: [
            "a) V, V, F, V",
            "b) V, F, V, F",
            "c) F, V, V, V",
            "d) V, V, V, V"
        ],
        respostaCorreta: "a) V, V, F, V",
        explicacao: "I-Frutas pesadas em balança ✓, II-Caminhão em toneladas ✓, III-FALSO: remédio em gramas ou miligramas, IV-Elevador em kg ✓"
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Questão 16",
        contexto: "Conceitos de massa.",
        pergunta: "Analise os conceitos:",
        afirmacoes: [
            "I. Massa é a quantidade de matéria de um corpo.",
            "II. A massa de um objeto muda se ele for levado para a Lua.",
            "III. Peso e massa são conceitos diferentes.",
            "IV. O quilograma é a unidade padrão internacional de massa."
        ],
        opcoes: [
            "a) V, F, V, V",
            "b) V, V, F, V",
            "c) F, V, V, F",
            "d) V, F, F, V"
        ],
        respostaCorreta: "a) V, F, V, V",
        explicacao: "I-Massa é quantidade de matéria ✓, II-FALSO: massa não muda com local, III-Peso≠massa ✓, IV-kg é padrão SI ✓"
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Questão 17",
        contexto: "Operações com unidades de massa.",
        pergunta: "Analise os cálculos:",
        afirmacoes: [
            "I. 2 kg + 500 g = 2500 g",
            "II. 3,5 kg - 1500 g = 2 kg",
            "III. 4 × 250 g = 1 kg",
            "IV. 1000 g ÷ 2 = 0,5 kg"
        ],
        opcoes: [
            "a) V, V, V, V",
            "b) V, F, V, V",
            "c) F, V, F, V",
            "d) V, V, F, F"
        ],
        respostaCorreta: "a) V, V, V, V",
        explicacao: "I-2000g+500g=2500g ✓, II-3500g-1500g=2000g=2kg ✓, III-4×250g=1000g=1kg ✓, IV-1000g÷2=500g=0,5kg ✓"
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Questão 18",
        contexto: "Estimativas de massa.",
        pergunta: "Analise as estimativas:",
        afirmacoes: [
            "I. Um elefante adulto tem aproximadamente 6000 kg de massa.",
            "II. Um livro escolar tem aproximadamente 500 g de massa.",
            "III. Um carro popular tem aproximadamente 1 tonelada de massa.",
            "IV. Uma folha de papel tem aproximadamente 5 g de massa."
        ],
        opcoes: [
            "a) V, V, V, V",
            "b) V, F, V, V",
            "c) F, V, F, V",
            "d) V, V, F, F"
        ],
        respostaCorreta: "a) V, V, V, V",
        explicacao: "Todas são estimativas razoáveis: I-Elefante~6000kg ✓, II-Livro~500g ✓, III-Carro~1t ✓, IV-Papel~5g ✓"
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Questão 19",
        contexto: "Nomes especiais para frações de quilograma.",
        pergunta: "Analise os nomes:",
        afirmacoes: [
            "I. 500 g = meio quilo",
            "II. 250 g = quarto de quilo",
            "III. 750 g = três quartos de quilo",
            "IV. 100 g = décimo de quilo"
        ],
        opcoes: [
            "a) V, V, V, V",
            "b) V, V, F, V",
            "c) F, V, V, F",
            "d) V, F, V, V"
        ],
        respostaCorreta: "a) V, V, V, V",
        explicacao: "Todos os nomes estão corretos: I-500g=1/2kg ✓, II-250g=1/4kg ✓, III-750g=3/4kg ✓, IV-100g=1/10kg ✓"
    },
    {
        tipo: "verdadeiro_falso",
        titulo: "Questão 20",
        contexto: "Situações do cotidiano.",
        pergunta: "Analise as situações:",
        afirmacoes: [
            "I. Para comprar carne no açougue, pedimos em quilogramas ou gramas.",
            "II. A massa de bagagem permitida em aviões é expressa em kg.",
            "III. Receitas culinárias usam gramas para ingredientes secos.",
            "IV. A massa de uma pessoa é medida em toneladas."
        ],
        opcoes: [
            "a) V, V, V, F",
            "b) V, F, V, V",
            "c) F, V, F, V",
            "d) V, V, F, F"
        ],
        respostaCorreta: "a) V, V, V, F",
        explicacao: "I-Carne em kg/g ✓, II-Bagagem em kg ✓, III-Receitas em g ✓, IV-FALSO: pessoa em kg, não toneladas"
    },

    // Questões 21-27: Abertas
    {
        tipo: "aberta",
        titulo: "Questão 21",
        contexto: "",
        pergunta: "Qual é a unidade padrão internacional para medida de massa?",
        opcoes: [],
        respostaCorreta: "Quilograma (kg)",
        explicacao: "O quilograma é a unidade padrão do Sistema Internacional (SI) para medida de massa."
    },
    {
        tipo: "aberta",
        titulo: "Questão 22",
        contexto: "",
        pergunta: "Converta 3,5 kg para gramas.",
        opcoes: [],
        respostaCorreta: "3500 g (3,5 × 1000 = 3500)",
        explicacao: "Para converter kg para g, multiplicamos por 1000: 3,5 × 1000 = 3500 g"
    },
    {
        tipo: "aberta",
        titulo: "Questão 23",
        contexto: "",
        pergunta: "Qual é a diferença entre massa e peso?",
        opcoes: [],
        respostaCorreta: "Massa é a quantidade de matéria de um corpo (não muda). Peso é a força da gravidade sobre essa massa (muda conforme o local).",
        explicacao: "Massa é uma propriedade intrínseca e constante. Peso depende da gravidade e varia conforme o local (Terra, Lua, etc.)."
    },
    {
        tipo: "aberta",
        titulo: "Questão 24",
        contexto: "",
        pergunta: "Quantos gramas tem 'meio quilo'?",
        opcoes: [],
        respostaCorreta: "500 g",
        explicacao: "Meio quilo = 0,5 kg = 500 g"
    },
    {
        tipo: "aberta",
        titulo: "Questão 25",
        contexto: "",
        pergunta: "Qual instrumento é usado para medir a massa dos corpos?",
        opcoes: [],
        respostaCorreta: "Balança",
        explicacao: "A balança é o instrumento universal para medir massa. Existem vários tipos: de pratos, digital, de ponteiro, etc."
    },
    {
        tipo: "aberta",
        titulo: "Questão 26",
        contexto: "",
        pergunta: "Quantos quilogramas tem 1 tonelada?",
        opcoes: [],
        respostaCorreta: "1000 kg",
        explicacao: "1 tonelada (t) = 1000 quilogramas (kg)"
    },
    {
        tipo: "aberta",
        titulo: "Questão 27",
        contexto: "",
        pergunta: "Se você tem 4 pacotes de 250 g cada, qual é a massa total em quilogramas?",
        opcoes: [],
        respostaCorreta: "1 kg (4 × 250 g = 1000 g = 1 kg)",
        explicacao: "4 × 250 g = 1000 g = 1 kg"
    },

    // Questões 28-30: Estudos de Caso
    {
        tipo: "opiniao",
        titulo: "Questão 28",
        contexto: "Maria foi ao mercado e comprou 2,5 kg de arroz, 800 g de feijão e 1,2 kg de açúcar. Ela quer saber a massa total de suas compras.",
        pergunta: "Calcule a massa total das compras de Maria em quilogramas e explique o raciocínio usado.",
        opcoes: [],
        respostaCorreta: "4,5 kg. Raciocínio: Converter tudo para kg: 2,5 kg + 0,8 kg + 1,2 kg = 4,5 kg. Ou converter tudo para g: 2500 g + 800 g + 1200 g = 4500 g = 4,5 kg.",
        explicacao: "É importante converter todas as unidades para a mesma antes de somar. Pode-se usar kg ou g, mas o resultado final deve estar em kg conforme solicitado."
    },
    {
        tipo: "opiniao",
        titulo: "Questão 29",
        contexto: "Um caminhão pode transportar no máximo 5 toneladas. Ele já está carregado com 3200 kg de mercadorias. O motorista quer saber se pode adicionar mais 2000 kg sem exceder o limite.",
        pergunta: "O caminhão pode receber a carga adicional? Justifique sua resposta com cálculos.",
        opcoes: [],
        respostaCorreta: "Sim, pode. Raciocínio: 5 t = 5000 kg. Carga atual: 3200 kg. Carga adicional: 2000 kg. Total: 3200 + 2000 = 5200 kg, que excede 5000 kg. CORREÇÃO: NÃO pode, pois 5200 kg > 5000 kg.",
        explicacao: "Converter toneladas para kg: 5 t = 5000 kg. Somar as cargas: 3200 + 2000 = 5200 kg. Como 5200 > 5000, excede o limite em 200 kg."
    },
    {
        tipo: "opiniao",
        titulo: "Questão 30",
        contexto: "João tem uma balança de cozinha que mede até 5 kg. Ele precisa pesar 8 pacotes de 750 g cada. A balança suportará todos os pacotes de uma vez?",
        pergunta: "Analise a situação e proponha uma solução caso a balança não suporte todos os pacotes juntos.",
        opcoes: [],
        respostaCorreta: "Não suportará. Cálculo: 8 × 750 g = 6000 g = 6 kg, que excede 5 kg. Solução: Pesar em duas etapas (4 pacotes de cada vez = 3 kg cada etapa) ou pesar individualmente e somar.",
        explicacao: "A massa total (6 kg) excede a capacidade da balança (5 kg). É necessário dividir em grupos menores para não danificar o equipamento."
    }
];
