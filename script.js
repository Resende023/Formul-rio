const formulario = document.getElementById("quizform");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    let acertos = 0;
    let erros = 0;
    const totalQuestoes = 10;

    // Verifica as respostas
    for (let i = 1; i <= totalQuestoes; i++) {

        const resposta = document.querySelector(
            'input[name="p' + i + '"]:checked'
        );

        if (resposta) {

            if (resposta.value === "y") {
                acertos++;
            } else {
                erros++;
            }

        } else {
            erros++;
        }
    }

    // Calcula a porcentagem
    const porcentagem = (acertos / totalQuestoes) * 100;

    // Cria o resultado
    let resultado = "";

    resultado += "RESULTADO DO QUESTIONÁRIO\n\n";
    resultado += "Total de questões: " + totalQuestoes + "\n";
    resultado += "Total de acertos: " + acertos + "\n";
    resultado += "Total de erros: " + erros + "\n";
    resultado += "Porcentagem de acertos: " + porcentagem + "%\n";

    // Cria o arquivo TXT
    const arquivo = new Blob([resultado], {
        type: "text/plain;charset=utf-8"
    });

    // Cria o download automaticamente
    const url = URL.createObjectURL(arquivo);
    const link = document.createElement("a");

    link.href = url;
    link.download = "resultado_questionario.txt";

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
    URL.revokeObjectURL(url);
});