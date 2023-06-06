

// Retorna o primeiro elemento correspondente
let titulo = document.querySelector('h1')
let instrucoes = document.querySelector('#instrucoes')
let aviso = document.querySelector('#aviso')
//let respostaEsta = document.querySelector('#respostaEsta')
let pontos = 0 // pontos para o placar
let placar = 0 // placar

// PERGUNTA
let numQuestao = document.querySelector('#numQuestao')
let pergunta   = document.querySelector('#pergunta')

// ALTERNATIVAS
let a = document.querySelector('#a')
let b = document.querySelector('#b')


// article com a class questoes
let articleQuestoes = document.querySelector('.questoes')
// ol li com as alternativas
let alternativas = document.querySelector('#alternativas')

// Criação de json

const q0 = {
    numQuestao   : 0,
    pergunta     : "Pergunta",
    alternativaA : "Alternativa A",
    alternativaB : "Alternativa B",
    correta      : "0",
}

const q1 = {
    numQuestao   : 1,
    pergunta     : "Você gosta de couve-flor?",
    alternativaA : "Sim, eu gosto!",
    alternativaB : "Não, credo!",
    correta      : "Sim, eu gosto!",
}

const q2 = {
    numQuestao   : 2,
    pergunta     : "Você gosta de ervilha? ",
    alternativaA : "Sim, eu gosto!",
    alternativaB : "Não, saí pra lá!",
    correta      : "Sim, eu gosto!",
}

const q3 = {
    numQuestao   : 3,
    pergunta     : "Você gosta de abacate?",
    alternativaA : "Sim, eu gosto",
    alternativaB : "Não, é muito amargo",
    correta      : "Sim, eu gosto",
}

const q4 = {
    numQuestao   : 4,
    pergunta     : "Você gosta de beterraba?",
    alternativaA : "Sim, eu gosto",
    alternativaB : "Não, não tem gosto de nada!",
    correta      : "Sim, eu gosto",
}

const q5 = {
    numQuestao   : 5,
    pergunta     : "Você gosta de quiabo?",
    alternativaA : "Sim, eu gosto",
    alternativaB : "Não, acho péssimo!",
    correta      : "Sim, eu gosto",
}

const q6 = {
    numQuestao   : 6,
    pergunta     : "Você gosta de beringela?",
    alternativaA : "Sim, eu gosto",
    alternativaB : "Não, tem uma testura esquisita!",
    correta      : "Sim, eu gosto",
}

const q7 = {
    numQuestao   : 7,
    pergunta     : "Você gosta de rúcula?",
    alternativaA : "Sim, eu gosto",
    alternativaB : "Não, é ruim!",
    correta      : "Sim, eu gosto",
}

const q8 = {
    numQuestao   : 8,
    pergunta     : "Você gosta de chuchu?",
    alternativaA : "Sim, eu gosto",
    alternativaB : "Não, credo!",
    correta      : "Sim, eu gosto",
}

const q9 = {
    numQuestao   : 9,
    pergunta     : "Você gosta de pepino?",
    alternativaA : "Sim, eu gosto",
    alternativaB : "Não, tem um gosto estranho!",
    correta      : "Sim, eu gosto",
}

const q10 = {
    numQuestao   : 10,
    pergunta     : "Você gosta de café sem açúcar?",
    alternativaA : "Sim, até prefiro!",
    alternativaB : "Eu não, credo!",
    correta      : "Sim, até prefiro!",
}




// CONSTANTE COM UM ARRAY DE OBJETOS COM TODAS AS QUESTOES
const questoes = [q0, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10]

let numero = document.querySelector('#numero')
let total  = document.querySelector('#total')

numero.textContent = q1.numQuestao

// Pega a quantidade de questões - 1, porque começa no 0
let totalDeQuestoes = (questoes.length)-1
console.log("Total de questões " + totalDeQuestoes)
// Text content traz todo o conteúdo do texto incluindo o texto oculto pelo css 
total.textContent = totalDeQuestoes

// MONTAR A 1a QUESTAO COMPLETA, para iniciar o Quiz
numQuestao.textContent = q1.numQuestao
pergunta.textContent   = q1.pergunta
a.textContent = q1.alternativaA
b.textContent = q1.alternativaB


// CONFIGURAR O VALUE INICIAL DA 1a QUESTAO COMPLETA
a.setAttribute('value', '1A')
b.setAttribute('value', '1B')


// PARA MONTAR AS PROXIMAS QUESTOES
// Criou uma função com parametro e fez esse parametro de vetor
function proximaQuestao(nQuestao) {
    numero.textContent = nQuestao
    numQuestao.textContent = questoes[nQuestao].numQuestao
    pergunta.textContent   = questoes[nQuestao].pergunta
    a.textContent = questoes[nQuestao].alternativaA
    b.textContent = questoes[nQuestao].alternativaB
    // Adiciona um novo atributo ou modifica o valor de um atributo existente num elemento específico.
    a.setAttribute('value', nQuestao+'A')
    b.setAttribute('value', nQuestao+'B')
}

function bloquearAlternativas() {
    // Retorna a classe dos elementos bloqueando a questão
    a.classList.add('bloqueado')
    b.classList.add('bloqueado')
}

function desbloquearAlternativas() {
       // Retorna a classe dos elementos removendo a questão
    a.classList.remove('bloqueado')
    b.classList.remove('bloqueado')
}

function verificarSeAcertou(nQuestao, resposta) {

    let numeroDaQuestao = nQuestao.value
    console.log("Questão " + numeroDaQuestao)

    let respostaEscolhida = resposta.textContent
    //console.log("RespU " + respostaEscolhida)

    let certa = questoes[numeroDaQuestao].correta
    //console.log("RespC " + certa)

    if(respostaEscolhida == certa) {
        //console.log("Acertou")
        //respostaEsta.textContent = "Correta"
        pontos += 10 // pontos = pontos + 10
    } else {
        //console.log("Errou!")
        //respostaEsta.textContent = "Errada"
    }

    // atualizar placar
    placar = pontos
    instrucoes.textContent = "Pontos " + placar

    // bloquear a escolha de opcoes
    bloquearAlternativas()

    setTimeout(function() {
        //respostaEsta.textContent = '...'
        proxima = numeroDaQuestao+1

        if(proxima > totalDeQuestoes) {
            console.log('Fim do Jogo!')
            fimDoJogo()
        } else {
            proximaQuestao(proxima)
        }
    }, 250)
    desbloquearAlternativas()
}

function fimDoJogo() {
    instrucoes.textContent = "Fim de Jogo!"
    numQuestao.textContent = ""

    let pont = ''
    pontos == 0 ? pont = 'ponto' : pont = 'pontos'

    pergunta.textContent   = "Você conseguiu <br>" + pontos + " " + pont

    aviso.textContent = `Você conseguiu ${pontos} pontos! `;

    if (pontos <= 30) {
        aviso.textContent += `Você precisa reavaliar a sua alimentação!!`;
    }
    if (pontos >= 40 && pontos <=60) {
        aviso.textContent += `Você não está tão ruim, mas pode melhorar sua alimentação!!`;
    }
    if (pontos >= 70 && pontos <=80) {
        aviso.textContent += `Olha, você está quase lá, sua alimentação é boa! Mas que tal experimentar os alimentos que não gosta novamente?`;
    }
    if (pontos >= 90) {
        aviso.textContent += `Excelente! Parabéns, você come de tudo!`;
    }

    a.textContent = ""
    b.textContent = ""


    a.setAttribute('value', '0')
    b.setAttribute('value', '0')


    // OCULTAR O ARTICLE DA QUESTAO
    articleQuestoes.style.display = 'none'

    setTimeout(function() {
        pontos = 0 // zerar placar
        location.reload();
    }, 5000)
}

