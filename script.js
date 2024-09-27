const flashcards = [
    {
        question: "Qual é o carro mais vendido do mundo?",
        answer: "O Toyota Corolla é frequentemente o carro mais vendido do mundo."
    },
    {
        question: "Qual é a principal função do motor em um carro?",
        answer: "O motor converte combustível em energia para mover o veículo."
    },
    {
        question: "Qual é a diferença entre um carro elétrico e um carro a gasolina?",
        answer: "Carros elétricos usam baterias para energia, enquanto os a gasolina usam combustão."
    },
    {
        question: "O que é um carro híbrido?",
        answer: "Um carro híbrido combina um motor a gasolina com um motor elétrico."
    },
    {
        question: "Qual é a velocidade máxima de um Bugatti Veyron?",
        answer: "O Bugatti Veyron pode atingir até 400 km/h."
    },
    {
        question: "O que significa ABS em um carro?",
        answer: "ABS significa sistema de freios antibloqueio, que ajuda a evitar o bloqueio das rodas."
    },
    {
        question: "Qual é a importância da manutenção regular em um carro?",
        answer: "Manutenção regular ajuda a garantir a segurança e a eficiência do veículo."
    },
    {
        question: "Qual foi o primeiro carro produzido em massa?",
        answer: "O Ford Model T é considerado o primeiro carro produzido em massa."
    },
    {
        question: "O que é torque em um carro?",
        answer: "Torque é a força que faz o carro acelerar, importante para desempenho."
    },
    {
        question: "Qual é o carro mais rápido do mundo?",
        answer: "O Bugatti Chiron Super Sport 300+ detém o recorde de carro mais rápido."
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
