/* Crie uma função que recebe por parâmetro um valor inteiro e positivo e retorne verdadeiro se o número for primo ou falso se não for. */

function isPrime2(value) {
    if (value > 0) {
        for (let divisor = 2; divisor < value; divisor++) {
            if (value % divisor === 0) {
                return document.write('PRIMO');
            } else {
                return document.write('NÃO É PRIMO');
            }
        }
    }
}

isPrime2(parseInt(prompt('INFORME UM VALOR: ')));