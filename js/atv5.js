/*Crie uma função que recebe um valor inteiro e retorne verdadeiro se é um valor perfeito ou falso se não for. Um valor é dito perfeito
quando ele é igual a soma dos seus divisores excetuando ele próprio. */

function perfeito(value) {
    let soma = 0;
    let metade = value / 2;

    for (let i = 1; i <= metade; i++) {
        if (value % i == 0) {
            soma = soma + i
        }
    }
    if (soma == value) {
        document.write('PERFEITO!');
    } else {
        document.write('IMPERFEITO!');
    }
}

perfeito(parseInt(prompt('INFORME UM NÚMERO')));