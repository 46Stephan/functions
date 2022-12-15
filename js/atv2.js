/* Crie uma função que recebe um valor inteiro e retorne verdadeiro se
for ímpar ou falso se for par. */

function isPrime(value) {
    if (value % 2 == 0) {
        document.write('PAR')
    } else {
        document.write('IMPAR')
    }
}
isPrime(parseInt(prompt('DIGITE UM VALOR:')));
