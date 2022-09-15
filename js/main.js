const convertir = () => {
    var pesos = (document.getElementById("valor").value);
    var resultado = 0;
    var dolar = 274;
    var euro = 295;
    if (document.getElementById("uno").checked) {
        resultado = pesos / dolar;
        var decimales2 = resultado.toFixed(2);
        alert(`Tus pesos valen: ${decimales2} dolares`)
    }
    else if (document.getElementById("dos").checked) {
        resultado = pesos / euro;
        var decimales2 = resultado.toFixed(2);
        alert(`tus pesos valen:  ${decimales2} euros` )
    }
    else{
        alert("selecciona euros o dolares")
    }
}