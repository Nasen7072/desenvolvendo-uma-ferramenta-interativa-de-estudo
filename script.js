const flashcards = [
    {
        question: "Qual é o carro mais vendido no Brasil?",
        answer: "O Chevrolet Onix é o carro mais vendido no Brasil nos últimos anos."
    },
    {
        question: "Qual é a principal função de um filtro de ar?",
        answer: "O filtro de ar limpa o ar que entra no motor, aumentando a eficiência."
    },
    {
        question: "O que significa ABS em carros?",
        answer: "ABS significa Sistema Antibloqueio de Freios, que impede o travamento das rodas."
    },
    {
        question: "Qual a diferença entre carro híbrido e elétrico?",
        answer: "Carros híbridos usam um motor de combustão e um elétrico, enquanto os elétricos são 100% elétricos."
    },
    {
        question: "Qual é o carro mais rápido do mundo?",
        answer: "O Bugatti Chiron Super Sport 300+ é um dos carros mais rápidos do mundo."
    },
    {
        question: "O que é torque em um carro?",
        answer: "Torque é a força que faz o carro acelerar, influenciando a performance."
    },
    {
        question: "O que faz um catalisador?",
        answer: "O catalisador reduz a emissão de poluentes do escapamento do carro."
    },
    {
        question: "Qual é a função do óleo do motor?",
        answer: "O óleo do motor lubrifica as peças e ajuda a resfriar o motor."
    },
    {
        question: "O que é um carro SUV?",
        answer: "SUV significa 'Sport Utility Vehicle', um carro utilitário esportivo."
    },
    {
        question: "O que é uma transmissão automática?",
        answer: "A transmissão automática troca as marchas sem intervenção do motorista."
    }
];

let currentFlashcardIndex = 0;

// Função para exibir o flashcard
function showFlashcard(index) {
    const flashcard = flashcards[index];
    const questionElement = document.getElementById('question');
    const answerElement = document.getElementById('answer');
    const flashcardElement = document.getElementById('flashcard');

    if (questionElement && answerElement && flashcardElement) {
        questionElement.textContent = flashcard.question;
        answerElement.textContent = ""; // Limpa a resposta ao mostrar a nova pergunta

        const counterElement = document.getElementById('counter');
        if (counterElement) {
            counterElement.textContent = `Flashcard ${index + 1} de ${flashcards.length}`;
        }

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

    body.classList.toggle('light-mode');
    
    if (body.classList.contains('light-mode')) {
        themeToggleButton.textContent = "☀️ Mudar Tema";
        localStorage.setItem('theme', 'light');
    } else {
        themeToggleButton.textContent = "🌙 Mudar Tema";
        localStorage.setItem('theme', 'dark');
    }
}

// Evento para o botão de mudança de tema
document.getElementById('theme-toggle').addEventListener('click', toggleTheme);

// Evento para virar o flashcard
document.getElementById('flip').addEventListener('click', () => {
    const flashcard = document.getElementById('flashcard');
    const answerElement = document.getElementById('answer');

    flashcard.classList.toggle('flipped');

    const flashcardData = flashcards[currentFlashcardIndex];
    answerElement.textContent = flashcard.classList.contains('flipped') ? flashcardData.answer : "";
});

// Inicializa o primeiro flashcard e aplica a preferência de tema
document.addEventListener('DOMContentLoaded', () => {
    showFlashcard(currentFlashcardIndex);

    const savedTheme = localStorage.getItem('theme');
    const body = document.body;
    const themeToggleButton = document.getElementById('theme-toggle');

    if (savedTheme === 'light') {
        body.classList.add('light-mode');
        themeToggleButton.textContent = "☀️ Mudar Tema";
    } else {
        themeToggleButton.textContent = "🌙 Mudar Tema";
    }
});
