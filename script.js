document.addEventListener("DOMContentLoaded", function () {
    
    // ==========================================
    // 1. MODO NOTURNO COM MEMÓRIA (localStorage)
    // ==========================================
    const btnModoNoturno = document.getElementById("btn-dark-mode");
    
    // Verifica se o usuário já tinha deixado o modo noturno ativo antes
    if (localStorage.getItem("modoNoturno") === "ativo") {
        document.body.classList.add("dark-mode");
    }
    
    if (btnModoNoturno) {
        btnModoNoturno.addEventListener("click", function () {
            document.body.classList.toggle("dark-mode");
            
            // Salva a escolha do usuário na memória do navegador
            if (document.body.classList.contains("dark-mode")) {
                localStorage.setItem("modoNoturno", "ativo");
            } else {
                localStorage.setItem("modoNoturno", "inativo");
            }
        });
    }

    // ==========================================
    // 2. AUMENTAR E DIMINUIR FONTE
    // ==========================================
    const btnAumentar = document.getElementById("btn-font-increase");
    const btnDiminuir = document.getElementById("btn-font-decrease");
    
    let tamanhoAtual = 100; 

    if (btnAumentar) {
        btnAumentar.addEventListener("click", function () {
            if (tamanhoAtual < 140) {
                tamanhoAtual += 10;
                document.body.style.fontSize = tamanhoAtual + "%";
            }
        });
    }

    if (btnDiminuir) {
        btnDiminuir.addEventListener("click", function () {
            if (tamanhoAtual > 80) {
                tamanhoAtual -= 10;
                document.body.style.fontSize = tamanhoAtual + "%";
            }
        });
    }
});

// 3. CARROSSEL DE FOTOS (PÁGINA SOBRE MIM)
const slides = document.querySelector(".carousel-slides");
const btnPrev = document.getElementById("prev-slide");
const btnNext = document.getElementById("next-slide");

if (slides && btnPrev && btnNext) {
    let indexAtual = 0;
    const totalImagens = 3; // Quantidade de fotos no carrossel

    function atualizarCarrossel() {
        // Desloca o container das fotos para a esquerda com base no index
        slides.style.transform = `translateX(${-indexAtual * 33.333}%)`;
    }

    btnNext.addEventListener("click", function() {
        if (indexAtual < totalImagens - 1) {
            indexAtual++;
        } else {
            indexAtual = 0; // Volta para a primeira se chegar no fim
        }
        atualizarCarrossel();
    });

    btnPrev.addEventListener("click", function() {
        if (indexAtual > 0) {
            indexAtual--;
        } else {
            indexAtual = totalImagens - 1; // Vai para a última se clicar pra voltar na primeira
        }
        atualizarCarrossel();
    });
}