"use strict";
function op66(id) {
    //INÍCIO - PARTE PADRÃO
    var myWindow = window.open('', 'Calculadora Científica', 'toolbar=0,location=0,menubar=0,width=500,height=300');
    var nomeOp = document.getElementsByTagName('a')[id].innerHTML;
    myWindow === null || myWindow === void 0 ? void 0 : myWindow.document.write(`<html><head><title>${nomeOp}</title></head></html>`);
    function leia(texto) {
        return (myWindow === null || myWindow === void 0 ? void 0 : myWindow.prompt(texto));
    }
    function escreva(texto) {
        return (myWindow === null || myWindow === void 0 ? void 0 : myWindow.alert(texto));
    }
    function fechar() {
        return myWindow === null || myWindow === void 0 ? void 0 : myWindow.close();
    }
    //FIM - PARTE PADRÃO
    function potencia(x, y) {
        var res = 1, i = 1;
        do {
            res = res * x;
            i += i;
        } while (i <= y);
        return res;
    }
    var j = Number(leia('Deseja realizar qual operação?\n1) Juros Simples\n2) Juros Composto'));
    switch (j) {
        case 1:
            var capI = Number(leia("Insira o Capital Inicial:"));
            var taxa = Number(leia("Insira a Taxa de Juros (em %):"));
            var temp = Number(leia("Insira o Prazo (em meses):"));
            var juroVal = capI * (taxa / 100) * temp;
            escreva(`O valor do juros total será de: R$ ${juroVal.toFixed(2)}`);
            fechar();
            break;
        case 2:
            var capI = Number(leia("Insira o Capital Inicial:"));
            var taxa = Number(leia("Insira a Taxa de Juros (em %):"));
            var temp = Number(leia("Insira o Prazo (em meses):"));
            var juroVal = capI * potencia((1 + (taxa / 100)), temp);
            escreva(`O valor do juros total será de: R$ ${juroVal.toFixed(2)}`);
            fechar();
            break;
        default:
            escreva("Opção não disponível.");
            fechar();
            break;
    }
}
