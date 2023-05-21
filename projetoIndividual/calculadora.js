
function calculo () {
    var select = document.querySelector('#genero');
    var optionValue = select.options[select.selectedIndex];
    var nomeGenero = (select.value);

    var idade = Number(ipt_idade.value);
    var altura = Number(ipt_altura.value);
    var peso = Number(ipt_peso.value);

    var select1 = document.querySelector('#atividade');
    var optionValue1 = select1.options[select1.selectedIndex];
    var nomeAtividade = select1.value;
    var total = 0;

    if (nomeGenero == 'Masculino' && idade >= 0 && idade < 3) {
        total = (59.512 * peso) - 30.4;
        document.getElementById('ipt_taxaMb').value = `Você gasta ${total} calorias em repouso. `;
    }

    if (nomeGenero == 'Feminino' && idade >= 0 && idade < 3) {
        total = (58.317 * peso) - 31.1;
        document.getElementById('ipt_taxaMb').value = `Você gasta ${total} calorias em repouso`;
    }

    if (nomeGenero == 'Masculino' && idade >= 3 && idade < 10) {
        total = Number((22.706 * peso) + Number(504.3));
        document.getElementById('ipt_taxaMb').value = `Você gasta ${total} calorias em repouso`;
    }
    if (nomeGenero == 'Feminino' && idade >= 3 && idade < 10) {
        total = Number((20.315 * peso) + Number(485.9));
        document.getElementById('ipt_taxaMb').value = `Você gasta ${total} calorias em repouso`;
    }
    if (nomeGenero == 'Masculino' && idade >= 10 && idade < 18) {
        total = Number((17.686 * peso) + Number(658.2));
        document.getElementById('ipt_taxaMb').value = `Você gasta ${total} calorias em repouso`;
    }
    if (nomeGenero == 'Feminino' && idade >= 10 && idade < 18) {
        total = Number((13.384 * peso) + Number(692.6));
        document.getElementById('ipt_taxaMb').value = `Você gasta ${total} calorias em repouso`;
    }
    if (nomeGenero == 'Masculino' && idade >= 18 && idade < 30) {
        total = Number((15.057 * peso) + Number(692.2));
        document.getElementById('ipt_taxaMb').value = `Você gasta ${total} calorias em repouso`;
    }
    if (nomeGenero == 'Feminino' && idade >= 18 && idade < 30) {
        total = Number((14.818 * peso) + Number(486.6));
        document.getElementById('ipt_taxaMb').value = `Você gasta ${total} calorias em repouso`;
    }
    if (nomeGenero == 'Masculino' && idade >= 30 && idade < 60) {
        total = Number((11.472 * peso) + Number(873.1));
        document.getElementById('ipt_taxaMb').value = `Você gasta ${total} calorias em repouso`;
    }
    if (nomeGenero == 'Feminino' && idade >= 30 && idade < 60) {
        total = Number((8.126* peso) + Number(845.6));
        document.getElementById('ipt_taxaMb').value = `Você gasta ${total} calorias em repouso`;
    }
    if (nomeGenero == 'Masculino' && idade >= 60) {
        total = Number((11.711 * peso) + Number (587.7));
        document.getElementById('ipt_taxaMb').value = `Você gasta ${total} calorias em repouso`;
    }
    if (nomeGenero == 'Feminino' && idade >= 60) {
        total = Number((9.082 * peso) + Number(658.5));
        document.getElementById('ipt_taxaMb').value = `Você gasta ${total} calorias em repouso`;
    }


}