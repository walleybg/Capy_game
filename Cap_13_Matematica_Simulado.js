// Prova Simulada - Capítulo 13 - Matemática - 38 Questões
// Questões do Simulado - Capítulo 13 de Matemática
// Prova Simulada - 38 questões de múltipla escolha

const dadosDoSimuladoMatematica13 = [
    // Questão 1
    {
        questao: 'Paola resolveu a conta 13 x 9 decompondo o número 13 em 10 + 3, realizando as multiplicações 10 x 9 = 90 e 3 x 9 = 27, e somando os resultados para obter 117. Qual é o resultado correto da multiplicação 18 x 9, utilizando o mesmo procedimento de Paola?',
        opcoes: ['171', '162', '99', '180', '153'],
        respostaCorreta: 1,
        tipo: 'multipla_escolha'
    },
    // Questão 2
    {
        questao: 'Marque a alternativa incorreta sobre o cálculo de multiplicação usando a decomposição:',
        opcoes: [
            'O resultado de 16 x 7 pode ser encontrado somando 10 x 7 com 6 x 7, totalizando 70 + 42 = 112.',
            'Na resolução da multiplicação 25 x 4, o numero 2 escrito acima do algarismo 5 no 25 significa 2 dezenas.',
            'Ao resolver 42 x 5, o resultado será um produto maior do que 43 x 5.',
            '12 x 4 é igual a 48.',
            '5 x 60 é igual a 300.'
        ],
        respostaCorreta: 2,
        tipo: 'multipla_escolha'
    },
    // Questão 3
    {
        questao: 'Fernanda possui 4 embalagens de café, cada uma com 250 g. Se ela precisar de 1 quilograma de café, quantas embalagens ela deve comprar?',
        opcoes: [
            'Uma embalagem, pois 250 g é o suficiente para meio quilo.',
            'Duas embalagens, pois 250 g x 2 = 500 g (meio quilo).',
            'Quatro embalagens, pois 1 quilograma = 1000 gramas e 4 x 250 g = 1000 g.',
            'Três embalagens, pois é a metade de 1000 g.',
            'Cinco embalagens, pois é a parte que corresponde a 1000 g.'
        ],
        respostaCorreta: 2,
        tipo: 'multipla_escolha'
    },
    // Questão 4
    {
        questao: 'Todas estão corretas, exceto:',
        opcoes: [
            'A metade de um quilograma equivale a 500 g.',
            'A quarta parte de um quilograma corresponde a 250 g.',
            'O termo "meio quilo" é usado para representar 500 g.',
            'Se a balança está equilibrada com um peso de 1 kg e tem 7 maçãs em um prato e 5 maçãs no outro, então 7 + 5 = 12 maçãs pesam 1 kg.',
            'Uma balança de dois pratos é um instrumento de medição que não é mais utilizado em feiras e mercados.'
        ],
        respostaCorreta: 4,
        tipo: 'multipla_escolha'
    },
    // Questão 5
    {
        questao: 'Raul e Ana Julia resolveram a multiplicação 25 x 4. Raul decompôs 25 em 20 + 5, calculou 20 x 4 = 80 e 5 x 4 = 20, e somou 80 + 20 = 100. Qual método representa o uso da propriedade distributiva da multiplicação?',
        opcoes: [
            'A soma de 80 + 20.',
            'A decomposição de 25 em 20 + 5 seguida da multiplicação de cada parcela por 4.',
            'Apenas o resultado final, que é 100.',
            'A representação de 25 como 20 + 5 sem efetuar a multiplicação.',
            'O fato de terem usado o numero 4 como multiplicador.'
        ],
        respostaCorreta: 1,
        tipo: 'multipla_escolha'
    },
    // Questão 6
    {
        questao: 'Rodrigo tem um lancha com capacidade para 8 pessoas ou 600 kg. Rodrigo (110 kg), Ana (85 kg) e seis crianças que juntas tem massa igual a 211 kg querem passear. A massa total das pessoas é:',
        opcoes: ['406 kg', '396 kg.', '600 kg.', '416 kg.', '500 kg.'],
        respostaCorreta: 0,
        tipo: 'multipla_escolha'
    },
    // Questão 7
    {
        questao: 'Marque a alternativa correta:',
        opcoes: [
            'O resultado de 6 x 7 é 49.',
            '8 x 4 é igual a 36.',
            '9 x 6 = 54.',
            '7 x 7 = 42.',
            'O produto de 10 x 100 é 10000.'
        ],
        respostaCorreta: 2,
        tipo: 'multipla_escolha'
    },
    // Questão 8
    {
        questao: 'O elevador do prédio da Sofia tem capacidade para levar 5 pessoas ou 360 kg. Quatro crianças (Vitor, Gabi, Sofia e Andre) tem massas de 40 kg, 42 kg, 36 kg e 38 kg, respectivamente. Elas podem entrar juntas no elevador?',
        opcoes: [
            'Não, pois a massa total excede 360 kg.',
            'Sim, pois a soma das massas é 156 kg, que é inferior a 360 kg.',
            'Não, pois já são 4 pessoas, e faltaria 1 pessoa para completar a capacidade.',
            'Sim, mas apenas 3 delas, para garantir segurança.',
            'Não, porque 40+42+36+38 = 160 kg, que excede 156 kg.'
        ],
        respostaCorreta: 1,
        tipo: 'multipla_escolha'
    },
    // Questão 9
    {
        questao: 'Marque a alternativa que representa um animal com massa superior a 3010 kg, de acordo com a tabela do zoológico:',
        opcoes: [
            'Avestruz (110 kg).',
            'Leão (250 kg).',
            'Hipopótamo (2500 kg).',
            'Elefante (6000 kg).',
            'Rinoceronte (2010 kg).'
        ],
        respostaCorreta: 3,
        tipo: 'multipla_escolha'
    },
    // Questão 10
    {
        questao: 'Em uma lanchonete, há 3 tipos de pães e 4 tipos de carne. Combinando um pão com uma carne, quantas opções de sanduíche há na lanchonete?',
        opcoes: [
            'O numero total de combinações é encontrado pela multiplicação.',
            'Existem 12 opções de sanduíche.',
            'A operação é 3 x 4.',
            'Se a lanchonete adicionasse um tipo de pão, o total de sanduíches aumentaria para 16 (4 pães x 4 carnes = 16).',
            'A situação ilustra um problema de combinatória.'
        ],
        respostaCorreta: 4,
        tipo: 'multipla_escolha'
    },
    // Questão 11
    {
        questao: 'Marque a alternativa incorreta sobre as unidades de medida de massa:',
        opcoes: [
            'As unidades principais para determinar massas de corpos são o grama (g) e o quilograma (kg).',
            'O quilograma é mais adequado para medir a massa de objetos pequenos.',
            '1 quilograma = 1000 gramas.',
            'A tonelada (t) é usada para medir massas muito grandes.',
            '1 tonelada = 1000 quilogramas.'
        ],
        respostaCorreta: 1,
        tipo: 'multipla_escolha'
    },
    // Questão 12
    {
        questao: 'Marque a alternativa que apresenta o resultado da multiplicação 8 x 9:',
        opcoes: ['64', '72.', '81', '70', '17'],
        respostaCorreta: 1,
        tipo: 'multipla_escolha'
    },
    // Questão 13
    {
        questao: 'Qual das seguintes massas é a maior?',
        opcoes: [
            'Meio quilograma (500 g).',
            '1000 gramas (1 kg).',
            '1,5 kg (1500 g).',
            '400 g.',
            '3,2 kg (3200 g).'
        ],
        respostaCorreta: 4,
        tipo: 'multipla_escolha'
    },
    // Questão 14
    {
        questao: 'Qual é o resultado correto da multiplicação 63 x 5?',
        opcoes: ['305', '315', '320', '330', '325'],
        respostaCorreta: 1,
        tipo: 'multipla_escolha'
    },
    // Questão 15
    {
        questao: 'Se um saco de açúcar pesa 1200 gramas e outro pesa 1 kg e 200 gramas, qual tem a maior massa?',
        opcoes: [
            'O primeiro saco, pois 1200 g é maior que 1 kg e 200 g.',
            'O segundo saco, pois ele tem 1 kg.',
            'Ambos os pacotes tem a mesma massa, 1200 gramas ou 1,2 kg.',
            'O segundo saco, pois a soma de 1 kg + 200 g é 120 g.',
            'Nenhum dos pacotes, pois 1200 g é igual a 1000 g.'
        ],
        respostaCorreta: 2,
        tipo: 'multipla_escolha'
    },
    // Questão 16
    {
        questao: 'Todas estão corretas, exceto:',
        opcoes: [
            'Para descobrir o produto de um numero natural multiplicado por 10, podemos repetir o numero e acrescentar um zero à direita.',
            'Para calcular 400 x 5, podemos usar o fato básico 4 x 5 = 20 e acrescentar dois zeros, resultando em 2000.',
            'Ao multiplicar um numero natural por 100, devemos escrever o numero com três zeros à direita.',
            '3 x 100 = 300.',
            '10 x 1000 = 10000.'
        ],
        respostaCorreta: 2,
        tipo: 'multipla_escolha'
    },
    // Questão 17
    {
        questao: 'Marque a alternativa que mostra corretamente quantos pacotes de 250 g são necessários para formar 1 quilograma:',
        opcoes: ['2 pacotes.', '4 pacotes.', '5 pacotes.', '3 pacotes.', '1 pacote.'],
        respostaCorreta: 1,
        tipo: 'multipla_escolha'
    },
    // Questão 18
    {
        questao: 'Marque a alternativa incorreta sobre a decomposição na multiplicação:',
        opcoes: [
            '14 x 8 pode ser resolvido calculando 10 x 8 e 4 x 8.',
            'A soma dos produtos parciais 80 + 32 resulta no produto final de 14 x 8 (112).',
            'O numero 12 x 4 pode ser calculado usando a decomposição 10 x 2 x 4.',
            'O algoritmo convencional permite resolver multiplicações de números maiores.',
            'A decomposição é uma estratégia eficiente para calcular mentalmente.'
        ],
        respostaCorreta: 2,
        tipo: 'multipla_escolha'
    },
    // Questão 19
    {
        questao: 'Marque a alternativa correta sobre a operação de multiplicação.',
        opcoes: [
            'A multiplicação pode ser usada para descobrir quantas bolinhas há em um mural, contando-se o numero de bolas em cada prateleira (7) e multiplicando pela quantidade de prateleiras (4), resultando em 28.',
            'A multiplicação de 16 x 7 só pode ser resolvida usando o algoritmo convencional.',
            'Multiplicar por 100 é o mesmo que repetir o numero e acrescentar dois zeros à sua esquerda.',
            'Em um problema de contagem de possibilidades (combinatória), as opções de bases e coberturas são somadas para encontrar o total de combinações.',
            'A tabuada de Pitágoras mostra apenas os produtos da multiplicação de 1 a 5.'
        ],
        respostaCorreta: 0,
        tipo: 'multipla_escolha'
    },
    // Questão 20
    {
        questao: 'Um feirante levou 140 kg de frutas. Vendeu 15 kg de maça, 12 kg de banana e 9 kg de pera. Quantos quilogramas de frutas ele ainda tem para vender?',
        opcoes: ['140 kg', '104 kg', '106 kg', '36 kg', '176 kg'],
        respostaCorreta: 1,
        tipo: 'multipla_escolha'
    },
    // Questão 21
    {
        questao: 'Marque a alternativa que mostra corretamente o produto de 4 x 100:',
        opcoes: ['40', '400.', '4000', '100', '104'],
        respostaCorreta: 1,
        tipo: 'multipla_escolha'
    },
    // Questão 22
    {
        questao: 'Marque a alternativa incorreta:',
        opcoes: [
            'O quilograma é usado para medir massas de corpos.',
            'As balanças digitais e de ponteiro são instrumentos usados para medir massa.',
            'O grama é usado para medir massas pequenas.',
            'O peso refere-se à massa de um corpo.',
            '1 tonelada = 100 quilogramas.'
        ],
        respostaCorreta: 4,
        tipo: 'multipla_escolha'
    },
    // Questão 23
    {
        questao: 'Marque a alternativa incorreta sobre a Tabuada de Pitágoras (Tabela de Multiplicação):',
        opcoes: [
            'Na Tabuada de Pitágoras, o produto da multiplicação de um numero por 1 é sempre o próprio numero.',
            'A Tabuada de Pitágoras mostra os produtos da multiplicação de 1 a 10.',
            'Para calcular o resultado de uma multiplicação, como 5 x 6, pode-se encontrar a linha do 5 e a coluna do 6 na tabela.',
            'O numero 25 não se repete na Tabela de Pitágoras de 1 a 10.',
            'Multiplicar 27 x 4 é igual a multiplicar 4 x 27 (propriedade comutativa).'
        ],
        respostaCorreta: 3,
        tipo: 'multipla_escolha'
    },
    // Questão 24
    {
        questao: 'Em uma padaria, pães para cachorro-quente são vendidos em bandejas de 100 g. Se você comprar 4 bandejas, qual será a massa total dos pães em gramas?',
        opcoes: ['40 g', '400 g', '100 g', '1 kg', '250 g'],
        respostaCorreta: 1,
        tipo: 'multipla_escolha'
    },
    // Questão 25
    {
        questao: 'Marque a alternativa que representa a leitura por extenso de 3,2 kg:',
        opcoes: [
            'Três quilogramas e duzentas gramas.',
            'Trinta e dois quilogramas.',
            'Três quilogramas e dois quilogramas.',
            'Três quilogramas e duzentos gramas.',
            'Três e duas quilogramas.'
        ],
        respostaCorreta: 3,
        tipo: 'multipla_escolha'
    },
    // Questão 26
    {
        questao: 'Em uma malha quadriculada, se você tem 5 linhas de 4 azulejos cada, qual é o total de azulejos?',
        opcoes: [
            '5 + 4 = 9 azulejos.',
            '5 x 5 = 25 azulejos.',
            '4 x 4 = 16 azulejos.',
            '5 x 4 = 20 azulejos.',
            '5 + 5 + 5 + 5 = 20 azulejos.'
        ],
        respostaCorreta: 3,
        tipo: 'multipla_escolha'
    },
    // Questão 27
    {
        questao: 'Marque a alternativa correta para a equivalência de 1400 kg em toneladas:',
        opcoes: ['14 t.', '1,4 t.', '140 t.', '1400 t.', '0,14 t.'],
        respostaCorreta: 1,
        tipo: 'multipla_escolha'
    },
    // Questão 28
    {
        questao: 'Marque a alternativa correta para o resultado da operação 44 x 5:',
        opcoes: ['200', '220', '210', '240', '215'],
        respostaCorreta: 1,
        tipo: 'multipla_escolha'
    },
    // Questão 29
    {
        questao: 'Em um registro de massas, Joao tem 33 quilogramas e Ana tem 21 quilogramas. Qual é a diferença de massa entre eles?',
        opcoes: ['10 kg', '12 kg', '54 kg', '20 kg', '33 kg'],
        respostaCorreta: 1,
        tipo: 'multipla_escolha'
    },
    // Questão 30
    {
        questao: 'Todas estão corretas, exceto:',
        opcoes: [
            'Na multiplicação 1 x 6 = 6, o numero 1 é um fator.',
            '20 x 5 tem o mesmo resultado que 2 x 50.',
            '800 x 2 = 1600.',
            '9 x 7 é maior que 8 x 8.',
            'Na multiplicação por 1000, acrescentamos apenas dois zeros ao numero.'
        ],
        respostaCorreta: 4,
        tipo: 'multipla_escolha'
    },
    // Questão 31
    {
        questao: 'Quantos gramas há em seis quilogramas e meio?',
        opcoes: ['6000 g.', '650 g.', '6500 g.', '6005 g.', '5600 g.'],
        respostaCorreta: 2,
        tipo: 'multipla_escolha'
    },
    // Questão 32
    {
        questao: 'Em um auditório, há 36 fileiras com 7 cadeiras em cada uma. Quantas cadeiras há nesse auditório?',
        opcoes: ['216', '367', '252', '43', '360'],
        respostaCorreta: 2,
        tipo: 'multipla_escolha'
    },
    // Questão 33
    {
        questao: 'Uma lanchonete oferece sucos naturais onde você pode escolher 1 fruta (laranja, kiwi ou morango) e 1 líquido (leite, água mineral ou água de coco). Quantas combinações diferentes de suco são possíveis?',
        opcoes: [
            '3 opções de frutas + 3 opções de líquidos = 6 combinações.',
            '3 x 3 = 9 combinações.',
            'Apenas 3 combinações, pois são 3 frutas.',
            'Apenas 4 combinações, pois há 4 líquidos.',
            '12 combinações.'
        ],
        respostaCorreta: 1,
        tipo: 'multipla_escolha'
    },
    // Questão 34
    {
        questao: 'Quantos gramas (g) há em meio quilograma?',
        opcoes: ['1000 g.', '50 g.', '500 g.', '250 g.', '100 g.'],
        respostaCorreta: 2,
        tipo: 'multipla_escolha'
    },
    // Questão 35
    {
        questao: 'Marina, em uma biblioteca, está organizando 6 estantes com 8 prateleiras em cada uma. Em cada prateleira, ela quer colocar 7 livros. Qual operação ela deve resolver para saber quantos livros ela já colocou em uma única estante?',
        opcoes: ['9 + 7', '8 x 7.', '7 - 9', '9 x 7', '6 x 8'],
        respostaCorreta: 1,
        tipo: 'multipla_escolha'
    },
    // Questão 36
    {
        questao: 'Qual a alternativa que indica a massa de um animal que está entre 2 e 3 toneladas:',
        opcoes: [
            'Girafa (1400 kg = 1,4 t).',
            'Búfalo-asiático (800 kg).',
            'Rinoceronte-branco (2400 kg = 2,4 t).',
            'Elefante (6000 kg = 6 t).',
            'Hipopótamo (2500 kg = 2,5 t).'
        ],
        respostaCorreta: 2,
        tipo: 'multipla_escolha'
    },
    // Questão 37
    {
        questao: 'Qual é a operação que serve para contar a quantidade de bolinhas de basquete em uma estante com 7 prateleiras e 4 bolas em cada uma?',
        opcoes: ['7 + 4', '7 - 4', '7 x 4.', '7 / 4', '4 + 7'],
        respostaCorreta: 2,
        tipo: 'multipla_escolha'
    },
    // Questão 38
    {
        questao: 'Todas estão corretas, exceto:',
        opcoes: [
            'Grama e quilograma são unidades de massa.',
            'Um livro de 300 g deve ser guardado no fundo de uma mala se for o mais pesado de três objetos.',
            'O coelho tem a menor massa (5 kg) na balança que mede animais da fazenda.',
            '6 quilogramas equivalem a 6000 gramas.',
            'Se uma balança está equilibrada, os pratos tem a mesma massa.'
        ],
        respostaCorreta: 1,
        tipo: 'multipla_escolha'
    }
];

