/* Crie uma função que recebe por parâmetro o tempo de duração de uma fábrica expressa em segundos e retorna esse tempo em horas,minutos e segundos. */

function horas(segundos) {
    let minutos = segundos / 60;
    let horas = segundos / 3600;

    console.log(segundos);
    console.log(minutos);
    console.log(horas);
}

console.log(horas(Number.parseInt(prompt('INFORME OS SEGUNDOS QUE DESEJA CONVERTER: '))));