
// 1. ALERTA DE BOAS-VINDAS
function alerta() {
    alert("Bem-vindo à Barbearia Duran! Estamos felizes por recebê-lo.");
}


const campoData = document.getElementById("data");

if (campoData) {
    const hoje = new Date();

    const ano = hoje.getFullYear();
    const mes = String(hoje.getMonth() + 1).padStart(2, "0");
    const dia = String(hoje.getDate()).padStart(2, "0");

    campoData.min = `${ano}-${mes}-${dia}`;
}


const campoServico = document.getElementById("servico");
const campoValor = document.getElementById("valor");

if (campoServico && campoValor) {

    const precos = {
        corte: 3000,
        barba: 1500,
        hidratacao: 3500,
        completo: 4000
    };

    campoServico.addEventListener("change", function () {

        const servicoSelecionado = this.value;

        if (precos[servicoSelecionado]) {
            campoValor.value = precos[servicoSelecionado];
        } else {
            campoValor.value = "";
        }
    });
}

const formularioAgendamento = document.querySelector(
    'form input[name="telefone"]'
);

if (formularioAgendamento) {

    const formulario = formularioAgendamento.closest("form");

    formulario.addEventListener("submit", function (evento) {

        const telefone = document.getElementById("tel").value.trim();
        const valor = Number(document.getElementById("valor").value);

        // if (!/^[0-9+\s()-]{9,20}$/.test(telefone)) {
        //     evento.preventDefault();
        //     alert("Introduza um número de telefone válido.");
        //     return;
        // }

        if (valor <= 0 || !Number.isFinite(valor)) {
            evento.preventDefault();
            alert("Seleccione um serviço para obter o preço.");
            return;
        }

        const confirmar = confirm(
            "Deseja realmente confirmar o seu agendamento?"
        );

        if (!confirmar) {
            evento.preventDefault();
        }
    });
}


// VALIDAR FORMULÁRIO DE RECLAMAÇÕES
const formularioReclamacao = document.querySelector(
    'form textarea[name="mensagem"]'
);

if (formularioReclamacao) {

    const formulario = formularioReclamacao.closest("form");

    formulario.addEventListener("submit", function (evento) {

        const mensagem = formularioReclamacao.value.trim();

        if (mensagem.length < 10) {
            evento.preventDefault();
            alert("A mensagem deve conter pelo menos 10 caracteres.");
            return;
        }

        const confirmar = confirm(
            "Deseja realmente enviar esta mensagem?"
        );

        if (!confirmar) {
            evento.preventDefault();
        }
    });
}


//  MENSAGEM NO CONSOLE
console.log("Barbearia Duran: JavaScript carregado com sucesso!");
