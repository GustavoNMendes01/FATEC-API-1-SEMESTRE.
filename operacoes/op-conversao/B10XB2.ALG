Algoritmo "B10XB2"

Var

   n, r, d: real
   resultado, S_N: caracter


Inicio

   repita

      escreva("Digite um n�mero para converter de Decimal para Bin�rio: ")
      leia(n)

      d <- n
      resultado <- ""

      repita

         se n % 2 = 1 entao

            resultado <- ("1") + resultado

         fimse

         se n % 2 = 0 entao

            resultado <- ("0") + resultado

         fimse

         r <- n/2

         n <- r

      ate n < 2

      se r >=1  entao

         resultado <- ("1") + resultado

      fimse

      escreval("A convers�o do n�mero decimal:", d)
      escreval("Corresponde ao n�mero bin�rio: ", resultado)
      escreval("-----------------------------")
      escreval("Deseja converter outro n�mero?")
      escreval("Sim - Digite (S) / N�o - Digite (N)")
      leia(S_N)

      se (S_N = "S") ou (S_N = "s") entao


         limpatela

      fimse

   ate (S_N = "N") ou (S_N = "n")

Fimalgoritmo