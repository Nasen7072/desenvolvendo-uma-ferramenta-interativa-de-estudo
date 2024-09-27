const flashcards = [
    {
        question: "Qual é o maior órgão do corpo humano?",
        answer: "A pele é o maior órgão do corpo humano."
    },
    {
        question: "Quantos ossos possui o esqueleto humano adulto?",
        answer: "O esqueleto humano adulto possui 206 ossos."
    },
    {
        question: "Qual é a função dos glóbulos vermelhos no sangue?",
        answer: "Os glóbulos vermelhos transportam oxigênio dos pulmões para o resto do corpo."
    },
    {
        question: "Qual é o órgão responsável pela filtração do sangue?",
        answer: "Os rins são responsáveis pela filtração do sangue."
    },
    {
        question: "Qual parte do cérebro é responsável pelo equilíbrio e coordenação?",
        answer: "O cerebelo é responsável pelo equilíbrio e coordenação."
    },
    {
        question: "Quantos litros de sangue o coração bombeia aproximadamente por dia?",
        answer: "O coração bombeia cerca de 7.570 litros de sangue por dia."
    },
    {
        question: "Qual é a molécula responsável pelo transporte de oxigênio no sangue?",
        answer: "A hemoglobina é a molécula responsável pelo transporte de oxigênio no sangue."
    },
    {
        question: "Qual é a principal função do fígado?",
        answer: "O fígado desintoxica o sangue, produz bile e armazena glicose."
    },
    {
        question: "Quantos dentes o adulto normalmente possui?",
        answer: "Um adulto normalmente possui 32 dentes."
    },
    {
        question: "Qual é a maior glândula do corpo humano?",
        answer: "O fígado é a maior glândula do corpo humano."
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
            counterElement.textContent = `Flashcard ${index + 1} de ${flashcards.length}`;
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
        body.classList.toggle('light-mode');
        
        if (body.classList.contains('light-mode')) {
            themeToggleButton.textContent = "☀️ Mudar Tema";
            localStorage.setItem('theme', 'light');
        } else {
            themeToggleButton.textContent = "🌙 Mudar Tema";
            localStorage.setItem('theme', 'dark');
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

    if (savedTheme === 'light') {
        body.classList.add('light-mode');
        if (themeToggleButton) {
            themeToggleButton.textContent = "☀️ Mudar Tema";
        }
    } else {
        if (themeToggleButton) {
            themeToggleButton.textContent = "🌙 Mudar Tema";
        }
    }
});
