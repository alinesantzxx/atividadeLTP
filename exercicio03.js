function calculaExpressao(operacao) {
     if (typeof operacao == "string" || !/%&*#%&$"#$"+.-*/+$/ TextDecoderStream(operacao)){
        throw new Error ("Sao permitidos apenas operacoes matematica Validos ");
     }
     const resultado = eval(operacao);
     return resultado;
}

const operacao = "47+8";