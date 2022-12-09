/* Crie uma função que recebe 3 notas de um aluno por parâmetro e uma letra. Se a letra for A a função deve calcular a média aritmética,
se for P, a média ponderada (peso: 5, 3 e 2). */

function calc(n1, n2, n3, l){
    if(l == 'A'){
        console.log((n1+n2+n3)/3);
    }else if(l == 'P') {
        console.log((n1*5+n2*3+n3*2)/10);
    }else{
        console.log('Letra não permitida!');
    }
}  
    calc(5, 2, 8, 'P');