function verificarNumeroPositivo(numero1, numero2){
    if (numero1 == 0 || numero2 ==0){
        throw new Error ("Apenas numeros maiores de 0!");
    }
    return numero1/numero2
}
try{
    const numero = verificarNumero(1,2);
    console,log ("Valor da divisão é:");
} catch (error) {
    console.log("Ocorreu um erro:", error.message);
}