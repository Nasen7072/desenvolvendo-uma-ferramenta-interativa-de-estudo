const flashcards = [
    {
        question: "Qual fabricante japonês produz o modelo Supra?",
        answer: "A Toyota produz o modelo Supra."
    },
    {
        question: "Qual é o motor original utilizado no Nissan GT-R R35?",
        answer: "O Nissan GT-R R35 utiliza o motor VR38DETT de 3.8 litros."
    },
    {
        question: "O que significa a sigla JDM?",
        answer: "JDM significa Japanese Domestic Market, referindo-se a produtos destinados ao mercado japonês."
    },
    {
        question: "Qual carro é conhecido como o 'Godzilla' das estradas?",
        answer: "O Nissan GT-R é conhecido como o 'Godzilla' das estradas."
    },
    {
        question: "Qual é o principal concorrente do Honda Civic no mercado JDM?",
        answer: "O Toyota Corolla é o principal concorrente do Honda Civic no mercado JDM."
    },
    {
        question: "Qual carro é famoso por sua configuração boxer e tração traseira?",
        answer: "O Subaru Impreza é famoso por sua configuração boxer e tração traseira."
    },
    {
        question: "Qual modelo da Mazda é conhecido por seu motor rotativo?",
        answer: "O Mazda RX-7 é conhecido por seu motor rotativo."
    },
    {
        question: "Qual é o carro compacto esportivo produzido pela Honda?",
        answer: "O Honda S2000 é o carro compacto esportivo produzido pela Honda."
    },
    {
        question: "Qual é o principal mercado-alvo do Toyota AE86?",
        answer: "O Toyota AE86 é popular entre entusiastas de drift e corridas de rua."
    },
    {
        question: "Qual carro é conhecido por seu desempenho no circuito Super GT?",
        answer: "O Lexus LC é conhecido por seu desempenho no circuito Super GT."
    }
];

let currentFlashcardIndex = 0;

// Função para exibir o flashcard
function showFlashcard(index) {
    const flashcard = flashcards[index];
    const questionElement = document.getElementById('question');
    const answerElement = document.getElementById('answer');
    const flashcardElement = document.getElementById('flashcard');

    // Verifica se os elementos existem
    if (questionElement && answerElement && flashcardElement) {
        questionElement.textContent = flashcard.question;
        answerElement.textContent = ""; // Limpa a resposta ao mostrar a nova pergunta

        // Atualiza o contador
        const counterElement = document.getElementById('counter');
        if (counterElement) {
            counterElement.textContent = Flashcard ${index + 1} de ${flashcards.length};
        }

        // Rotaciona o card de volta
        flashcardElement.classList.remove('flipped');
    } else {
        console.error("Elementos necessários não encontrados no DOM.");
    }
}

// Navegação entre os flashcards
document.getElementById('prev').addEventListener('click', () => {
    currentFlashcardIndex = (currentFlashcardIndex > 0) ? currentFlashcardIndex - 1 : flashcards.length - 1;
    showFlashcard(currentFlashcardIndex);
});

document.getElementById('next').addEventListener('click', () => {
    currentFlashcardIndex = (currentFlashcardIndex < flashcards.length - 1) ? currentFlashcardIndex + 1 : 0;
    showFlashcard(currentFlashcardIndex);
});

// Função para mudar o tema
function toggleTheme() {
    const body = document.body;
    const themeToggleButton = document.getElementById('theme-toggle');

    if (body && themeToggleButton) {
        body.classList.toggle('alt-mode');

        if (body.classList.contains('alt-mode')) {
            themeToggleButton.textContent = "🔵 Alterar Tema";
            localStorage.setItem('theme', 'alt');
        } else {
            themeToggleButton.textContent = "🔴 Alterar Tema";
            localStorage.setItem('theme', 'default');
        }
    } else {
        console.error("Elementos necessários para mudar o tema não encontrados no DOM.");
    }
}

// Evento para o botão de mudança de tema
document.getElementById('theme-toggle').addEventListener('click', toggleTheme);

// Evento para virar o flashcard
document.getElementById('flip').addEventListener('click', () => {
    const flashcard = document.getElementById('flashcard');
    const answerElement = document.getElementById('answer');

    if (flashcard && answerElement) {
        flashcard.classList.toggle('flipped');

        const flashcardData = flashcards[currentFlashcardIndex];
        if (flashcard.classList.contains('flipped')) {
            answerElement.textContent = flashcardData.answer;
        } else {
            answerElement.textContent = "";
        }
    } else {
        console.error("Elementos necessários para virar o flashcard não encontrados no DOM.");
    }
});

// Inicializa o primeiro flashcard e aplica a preferência de tema
document.addEventListener('DOMContentLoaded', () => {
    showFlashcard(currentFlashcardIndex);

    // Aplica a preferência de tema armazenada
    const savedTheme = localStorage.getItem('theme');
    const body = document.body;
    const themeToggleButton = document.getElementById('theme-toggle');

    if (savedTheme === 'alt') {
        body.classList.add('alt-mode');
        if (themeToggleButton) {
            themeToggleButton.textContent = "🔵 Alterar Tema";
        }
    } else {
        if (themeToggleButton) {
            themeToggleButton.textContent = "🔴 Alterar Tema";
        }
    }
});
