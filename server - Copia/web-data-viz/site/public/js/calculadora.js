var salvarResultado = 0;
var atividade = 0;


function calcular() {
    var select = document.querySelector('#genero');
    var optionValue = select.options[select.selectedIndex];
    var nomeGenero = (select.value);

    var idade = Number(ipt_idade.value);
    var altura = Number(ipt_altura.value);
    var peso = Number(ipt_peso.value);

    var select1 = document.querySelector('#atividade');
    var optionValue1 = select1.options[select1.selectedIndex];
    var nomeAtividade = select1.value;
    var total1 = (59.512 * peso) - 30.4;
    var total2 = (58.317 * peso) - 31.1;
    var total3 = Number((22.706 * peso) + Number(504.3));
    var total4 = Number((20.315 * peso) + Number(485.9));
    var total5 = Number((17.686 * peso) + Number(658.2));
    var total6 = Number((13.384 * peso) + Number(692.6));
    var total7 = Number((15.057 * peso) + Number(692.2));
    var total8 = Number((14.818 * peso) + Number(486.6));
    var total9 = Number((11.472 * peso) + Number(873.1));
    var total10 = Number((8.126 * peso) + Number(845.6));
    var total11 = Number((11.711 * peso) + Number(587.7));
    var total12 = Number((9.082 * peso) + Number(658.5));
    var imc = (peso / (altura * altura) * 10000);


    if (nomeGenero == 'Masculino' && idade >= 0 && idade < 3) {
        salvarResultado = total1;
        document.getElementById('ipt_taxaMb').value = `Você gasta ${total1} calorias em repouso. `;
    }
    if (nomeGenero == 'Feminino' && idade >= 0 && idade < 3) {
        salvarResultado = total2;
        document.getElementById('ipt_taxaMb').value = `Você gasta ${total2} calorias em repouso`;
    }
    if (nomeGenero == 'Masculino' && idade >= 3 && idade < 10) {
        salvarResultado = total3;
        document.getElementById('ipt_taxaMb').value = `Você gasta ${total3} calorias em repouso`;
    }
    if (nomeGenero == 'Feminino' && idade >= 3 && idade < 10) {
        salvarResultado = total4;
        document.getElementById('ipt_taxaMb').value = `Você gasta ${total4} calorias em repouso`;
    }
    if (nomeGenero == 'Masculino' && idade >= 10 && idade < 18) {
        salvarResultado = total5;
        document.getElementById('ipt_taxaMb').value = `Você gasta ${total5} calorias em repouso`;
    }
    if (nomeGenero == 'Feminino' && idade >= 10 && idade < 18) {
        salvarResultado = total6;
        document.getElementById('ipt_taxaMb').value = `Você gasta ${total6} calorias em repouso`;
    }
    if (nomeGenero == 'Masculino' && idade >= 18 && idade < 30) {
        salvarResultado = total7;
        document.getElementById('ipt_taxaMb').value = `Você gasta ${total7} calorias em repouso`;
    }
    if (nomeGenero == 'Feminino' && idade >= 18 && idade < 30) {
        salvarResultado = total8;
        document.getElementById('ipt_taxaMb').value = `Você gasta ${total8} calorias em repouso`;
    }
    if (nomeGenero == 'Masculino' && idade >= 30 && idade < 60) {
        salvarResultado = total9;
        document.getElementById('ipt_taxaMb').value = `Você gasta ${total9} calorias em repouso`;
    }
    if (nomeGenero == 'Feminino' && idade >= 30 && idade < 60) {
        salvarResultado = total10;
        document.getElementById('ipt_taxaMb').value = `Você gasta ${total10} calorias em repouso`;
    }
    if (nomeGenero == 'Masculino' && idade >= 60) {
        salvarResultado = total11;
        document.getElementById('ipt_taxaMb').value = `Você gasta ${total11} calorias em repouso`;
    }
    if (nomeGenero == 'Feminino' && idade >= 60) {
        salvarResultado = total12;
        document.getElementById('ipt_taxaMb').value = `Você gasta ${total12} calorias em repouso`;
    }

    if (nomeAtividade == 'sedentaria') {
        atividade = salvarResultado * 1.2;
        document.getElementById('ipt_tdee').value = `Você gasta ${atividade} em atividade física`;
    }
    else if (nomeAtividade == 'atvLeve') {
        atividade = salvarResultado * 1.375;
        document.getElementById('ipt_tdee').value = `Você gasta ${atividade} em atividade física`;
    }
    else if (nomeAtividade == 'atvModerada') {
        atividade = salvarResultado * 1.55;
        document.getElementById('ipt_tdee').value = `Você gasta ${atividade} em atividade física`;
    }
    else if (nomeAtividade == 'atvAlta') {
        atividade = salvarResultado * 1.725;
        document.getElementById('ipt_tdee').value = `Você gasta ${atividade} em atividade física`;
    }
    else if (nomeAtividade == 'atvExtrema') {
        atividade = salvarResultado * 1.9;
        document.getElementById('ipt_tdee').value = `Você gasta ${atividade} em atividade física`;
    }

    if (imc < 18.5) {
        document.getElementById('ipt_imc').value = `Seu imc é ${imc}`;
        document.getElementById('ipt_classificacao').value = `Magreza`;
    }
    else if (imc >= 18.5 && imc <= 24.9) {
        document.getElementById('ipt_imc').value = `Seu imc é ${imc}`;
        document.getElementById('ipt_classificacao').value = `Peso normal`;
    }
    else if (imc >= 25 && imc <= 29.9) {
        document.getElementById('ipt_imc').value = `Seu imc é ${imc}`;
        document.getElementById('ipt_classificacao').value = `SobrePeso`;
    }
    else if (imc >= 30 && imc <= 34.9) {
        document.getElementById('ipt_imc').value = `Seu imc é ${imc}`;
        document.getElementById('ipt_classificacao').value = `Obesidade grau I`;
    }
    else if (imc >= 35 && imc <= 40) {
        document.getElementById('ipt_imc').value = `Seu imc é ${imc}`;
        document.getElementById('ipt_classificacao').value = `Obesidade grau II`;
    }
    else if (imc >= 40) {
        document.getElementById('ipt_imc').value = `Seu imc é ${imc}`;
        document.getElementById('ipt_classificacao').value = `Obesidade grau III`;
    }




    //Recupere o valor da nova input pelo nome do id
    // Agora vá para o método fetch logo abaixo
    var idUsuarioVar = sessionStorage.ID_USUARIO;
    var imcVar = imc;
    var salvarResultadoVar = salvarResultado;
    var atividadeVar = atividade;

    if (idUsuarioVar == "" || imcVar == "" || salvarResultadoVar == "" || atividadeVar == "") {
        mensagem_erro.innerHTML = "Todos os seus campos estão em branco! Favor inserir os dados corretamente.";

        return false;
    }

    // Enviando o valor da nova input
    fetch("/usuarios/calcular", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            // crie um atributo que recebe o valor recuperado aqui
            // Agora vá para o arquivo routes/usuario.js
            salvarResultadoServer: salvarResultadoVar,
            atividadeServer: atividadeVar,
            imcServer: imcVar,
            idUsuarioServer: idUsuarioVar
        })
    }).then(function (resposta) {

        console.log("resposta: ", resposta);

        if (resposta.ok) {
            alert('inseriu');
            mensagem_erro.innerHTML = "Cadastro realizado com sucesso! Redirecionando para tela de Login...";


        } else {
            throw ("Houve um erro ao tentar realizar o cadastro!");
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    });

    return false;
}





