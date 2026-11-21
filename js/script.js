// 1. Seleção dos elementos do DOM
const form = document.getElementById('form-simulacao');
const inputNome = document.getElementById('nome');
const selectCurso = document.getElementById('curso');
const inputRenda = document.getElementById('renda');
const divResultado = document.getElementById('resultado');
const textoResultado = document.getElementById('texto-resultado');

// 2. Escutador de evento (Submit do formulário)
form.addEventListener('submit', (evento) => {
    // Previne o recarregamento da página
    evento.preventDefault();

    // 3. Coleta dos valores
    const nome = inputNome.value.trim();
    const curso = selectCurso.value;
    const renda = parseFloat(inputRenda.value);

    // 4. Validação básica
    if (nome === '' || curso === '' || isNaN(renda)) {
        alert('Por favor, preencha todos os campos corretamente.');
        return;
    }

    // 5. Lógica de Negócio (Resolução do problema)
    let mensagem = '';
    let temBolsa = false;

    if (renda <= 1500) {
        temBolsa = true;
        mensagem = `Parabéns, <strong>${nome}</strong>! Como sua renda é de R$ ${renda.toFixed(2)}, você tem direito a <strong>100% de bolsa</strong> no curso de ${getNomeCurso(curso)}.`;
    } else if (renda > 1500 && renda <= 3000) {
        temBolsa = true;
        mensagem = `Olá, <strong>${nome}</strong>! Com a renda de R$ ${renda.toFixed(2)}, você tem direito a <strong>50% de desconto</strong> no curso de ${getNomeCurso(curso)}.`;
    } else {
        mensagem = `Olá, <strong>${nome}</strong>. Infelizmente, com a renda de R$ ${renda.toFixed(2)}, você não se enquadra nos critérios para bolsa integral. Mas ainda pode se inscrever no curso de ${getNomeCurso(curso)} no valor regular.`;
    }

    // 6. Manipulação do DOM (Exibindo o resultado)
    textoResultado.innerHTML = mensagem;
    divResultado.style.display = 'block'; // Mostra a div que estava oculta

    // Modifica a borda do resultado baseado na bolsa
    if (temBolsa) {
        divResultado.style.borderLeftColor = '#22c55e'; // Verde
    } else {
        divResultado.style.borderLeftColor = '#e63946'; // Vermelho
    }
});

// Função auxiliar para formatar o nome do curso
function getNomeCurso(valorCurso) {
    const cursos = {
        'informatica': 'Técnico em Informática',
        'enfermagem': 'Técnico em Enfermagem',
        'computacao': 'Licenciatura em Computação',
        'administracao': 'Técnico em Administração'
    };
    return cursos[valorCurso];
}