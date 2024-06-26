function op111(id: number){
    var myWindow = window.open('', 'Calculadora Científica', 'toolbar=0,location=0,menubar=0,width=500,height=300');
    var nomeOp = document.getElementsByTagName('a')[id].innerHTML;
    myWindow?.document.write(`<html><head><title>${nomeOp}</title></head></html>`);

    function leia(texto: string){
        return(myWindow?.prompt(texto))
    }

    function escreva(texto: string){
        return(myWindow?.alert(texto))
    }

    function fechar(){
        return myWindow?.close()
    }

    var op = Number(leia("Qual operação deseja realizar?\n 1-Adição \n 2-Subtração \n 3-Multiplicação \n 4-Divisão"))

    switch (op) {
        case 1:
            var num1 = Number(leia("Insira o primeiro valor:"));
            var num2 = Number(leia("Insira o segundo valor:"));
            
            var total = num1 + num2;
            
            escreva("A SOMA dos números é:" + total);
            fechar();
            
            break;
            
        case 2:
            var num1 = Number(leia("Insira o primeiro valor:"));
            var num2 = Number(leia("Insira o segundo valor:"));
            
            var total = num1 - num2;
            
            escreva("A SUBTRAÇÃO dos números é:" + total);
            fechar();
            
            break;
            
        case 3:
            var num1 = Number(leia("Insira o primeiro valor:"));
            var num2 = Number(leia("Insira o segundo valor:"));
            
            var total = num1 * num2;
            
            escreva("A MULTIPLICAÇÃO dos números é:" + total);
            fechar();
            
            break;
            
        case 4:
            var num1 = Number(leia("Insira o primeiro valor:"));
            var num2 = Number(leia("Insira o segundo valor:"));
            
            var total = num1 / num2;
            
            escreva("A DIVISÃO dos números é:" + total);
            fechar();
            
            break;
            
        default:
            escreva(`Operação inválida.`);
            fechar();
            break;
    }
}
function op2222(id) {
    // INÍCIO - PARTE PADRÃO
    var myWindow = window.open('', 'Calculadora Científica', 'toolbar=0,location=0,menubar=0,width=500,height=300');
    var nomeOp = document.getElementsByTagName('a')[id].innerHTML;
    myWindow?.document.write(`<html><head><title>${nomeOp}</title></head></html>`);

    function leia(texto) {
        return myWindow?.prompt(texto);
    }

    function escreva(texto) {
        return myWindow?.alert(texto);
    }

    function fechar() {
        return myWindow?.close();
    }

    var numero = Number(leia("Insira um número"));

    if (numero <= 0) {
        escreva("Insira um número maior que zero.");
        fechar();
    } else {
        var resultado = 1;
        for (var i = 1; i <= numero; i++) {
            resultado *= i;
        }
        escreva("O fatorial é " + resultado);
        fechar();
    }
}

function op4444(id: number) {
    //INÍCIO - PARTE PADRÃO
    let myWindow = window.open('', 'Calculadora Científica', 'toolbar=0,location=0,menubar=0,width=500,height=300');
    function leia(texto: string) {
        return (myWindow?.prompt(texto))
    }
    function escreva(texto: string) {
        return (myWindow?.alert(texto))
    }
    function fechar() {
        return myWindow?.close()
    };

    let op = Number(leia(`Conversão de Bases Númericas. 
    1 - B10XB2 - Decimal para Binário. 
    2 - B2XB10 - Binário para Decimal. 
    3 - B2XB8 - Binário para Octal. ***
    4 - B8XB2 - Octal para Binário. ***
    5 - B2XB16 - Binário para Hexadecimal.
    6 - B16XB2 - Hexadecimal para Binário.***`))

    switch (op) {
        case 1:
            function B10XB2() {
                let d = String(leia("Conversão de Decimal para Binário. \nDigite um número para converter de Decimal para Binário: "));
                let n = Number(d);
                let dec = Number(d);
                let resultado = String();
                while (n > 0) {
                    if (n % 2 === 1) {
                        resultado = ('1') + resultado;
                    }
                    else {
                        resultado = ('0') + resultado;
                    }
                    n = Math.floor(n / 2);
                }
                escreva(`A conversão do número decimal: ${dec}\nCorresponde ao número binário: ${resultado}`);
                fechar();
            };
            B10XB2()
      
            break;

        case 2:
            function B2XB10() {
                let b = String(leia(`Conversão de Binário para Decimal.\nLembre-se que um número binário é composto apenas por (0 e 1).\nDigite um número para converter de Binário para Decimal: `));
                let b1 = parseInt(b);
                let base = (1);
                let x = (0);
                let dec = Number()

                while (b1 > base) {

                    let bin = Math.floor(b1 / base) % 10

                    if (bin >= 1) {
                        dec = dec + (2 ** x)
                    };

                    x = x + 1
                    base = base * 10
                }

                escreva(`A conversão do número binário: ${b1}\nCorresponde ao número decimal: ${dec}`);
                fechar();
            };
            B2XB10()
            break;

        case 3:
            function B2XB8() {

            };

            escreva(`Falta implementar o algortimo`)
            B2XB8()
            fechar()
            break;

        case 4:
            function B8XB2() {

            };

            escreva(`Falta implementar o algortimo`)
            B8XB2()
            fechar()
            break;

        case 5:
            function B2XB16() {

                let b = String(leia(`Conversão de Binário para Hexadecimal.\nLembre-se que um número bínario é composto apenas por (0 e 1).\nDigite um número para converter de binário para hexadecimal. `));
                let b1 = parseFloat(b)
                let base = 1
                let resultado = String("")
                let hexad = Number()
                let hexa = Number()
                let x = Number()

                while (base <= b1) {

                    for (x = 0; x < 4; x++) {

                        hexa = Math.floor(b1 / base) % 10

                        if (hexa >= 1) {
                            hexad = hexad + (1 * (2 ** x))
                        };

                        base = base * 10
                    }

                    if (x = 4) {
                        switch (hexad) {
                            case 1:
                                resultado = ("1") + resultado;
                                break;
                            case 2:
                                resultado = ("2") + resultado;
                                break;
                            case 3:
                                resultado = ("3") + resultado;
                                break;
                            case 4:
                                resultado = ("4") + resultado;
                                break;
                            case 5:
                                resultado = ("5") + resultado;
                                break;
                            case 6:
                                resultado = ("6") + resultado;
                                break;
                            case 7:
                                resultado = ("7") + resultado;
                                break;
                            case 8:
                                resultado = ("8") + resultado;
                                break;
                            case 9:
                                resultado = ("9") + resultado;
                                break;
                            case 10:
                                resultado = ("A") + resultado;
                                break;
                            case 11:
                                resultado = ("B") + resultado;
                                break;
                            case 12:
                                resultado = ("C") + resultado;
                                break;
                            case 13:
                                resultado = ("D") + resultado;
                                break;
                            case 14:
                                resultado = ("E") + resultado;
                                break;
                            case 15:
                                resultado = ("F") + resultado;
                                break;
                        }
                        x = 0
                        hexad = 0
                        hexa = 0
                    }
                }

                escreva(`O valor em hexadecimal para o número binário: ${b1}\nCorresponde a: ${resultado}-h`);
                fechar();
            } B2XB16()
            break;
        case 6:
            function B16XB2() {

            }
            escreva(`Falta implementar o algortimo`)
            B16XB2()
            break;
        default:
            escreva('Inválido')
            fechar()
            break;
    }
}

function op6666(id: number){

    //INÍCIO - PARTE PADRÃO

    var myWindow = window.open('', 'Calculadora Científica', 'toolbar=0,location=0,menubar=0,width=500,height=300');
    var nomeOp = document.getElementsByTagName('a')[id].innerHTML;
    myWindow?.document.write(`<html><head><title>${nomeOp}</title></head></html>`);

    function leia(texto: string){
        return(myWindow?.prompt(texto))
    }

    function escreva(texto: string){
        return(myWindow?.alert(texto))
    }

    function fechar(){
        return myWindow?.close()
    }

    //FIM - PARTE PADRÃO

    function potencia(x:number ,y:number){
        var res = 1, i = 1

        do {
            res = res * x
            i += i
        } while (i<=y); 

        return res
    }

    var j = Number(leia('Deseja realizar qual operação?\n1) Juros Simples\n2) Juros Composto'))

    switch (j){
        case 1:
            var capI = Number(leia("Insira o Capital Inicial:"))
            var taxa = Number(leia("Insira a Taxa de Juros (em %):"))
            var temp = Number(leia("Insira o Prazo (em meses):"))
        
            var juroVal = capI * (taxa/100) * temp

            escreva(`O valor do juros total será de: R$ ${juroVal.toFixed(2)}`)
            fechar() 

            break

        case 2:
            var capI = Number(leia("Insira o Capital Inicial:"))
            var taxa = Number(leia("Insira a Taxa de Juros (em %):"))
            var temp = Number(leia("Insira o Prazo (em meses):"))

            var juroVal = capI * potencia((1 + (taxa/100)),temp)

            escreva(`O valor do juros total será de: R$ ${juroVal.toFixed(2)}`)
            fechar() 

            break

        default:
            escreva("Opção não disponível.")
            fechar()
            break
    }
}
