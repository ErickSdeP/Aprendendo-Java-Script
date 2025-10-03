function imcCalc(peso, altura) {
    return peso / (altura * altura);
}

function classe(imc) {
    if (imc < 18.5) {
    return 'Abaixo do peso';
} else if (imc >= 18.5 && imc < 25) {
    return 'Peso normal';
} else if (imc >= 25 && imc < 30) {
    return 'Acima do peso';
} else if (imc >= 30 && imc < 40) {
    return 'Obeso';
} else {
    return 'Obesidade grave';
}
}

(function /*main*/() {
    const altura = 1.75;
    const peso = 75;
    const imc = imcCalc(peso, altura);

    console.log(imc.toFixed(2));
    console.log(classe(imc));
})(); //função imediatamente invocada





//main()  