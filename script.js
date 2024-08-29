function calculadoratri() {
    let h = parseFloat(prompt("digite a hipotenusa: "));
    let co = parseFloat(prompt("digite a cateto oposto: "));
    let ca = parseFloat(prompt("digite a cateto adjacente: "));
    if (ca <= 0 || co <= 0 || h <= 0) {
        alert("os valores são inválidos!");
    } else {
        if (h <= co || h <= ca) {
            alert("a hipotenusa é um valor inválido!");
        } else {
            if (h * h != co * co + ca * ca){
                alert(" os valores são inválidos! ")
            }else{
                let t,c,s;
                t = co/ca;
                c = ca/h;
                s = co/h;
                alert(`a tangente do angulo é de ${t.toFixed(2)}`);
                alert(`O cateto oposto do angulo é de ${s.toFixed(2)}`);
                alert(`O cateto adjasente do angulo é de ${c.toFixed(2)}`);
            }
        }
    }
}
