function validaSoma() {
    const soma = document.getElementById("soma").value;
    if (soma != 8) {
        alert("Soma Inválida");
        return false;
    }

    console.log("Validou");
}