// src/components/QuizSection.tsx
import React, { useState } from 'react';

const QuizSection: React.FC = () => {
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

    const handleAnswerSelect = (answer: string) => {
        setSelectedAnswer(answer);
        alert(`You selected: ${answer}`);
    };

    const question = "What is the most secure password?";
    const options = ["123456", "password", "QwErTy2024!", "admin"];

    return (
        <section className="bg-gray-50 shadow-lg rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Quiz</h2>
            <p className="mb-4 text-gray-700">{question}</p>
            <ul className="space-y-2">
                {options.map((option) => (
                    <li
                        key={option}
                        className={`p-3 border rounded cursor-pointer ${selectedAnswer === option ? 'bg-blue-200 border-blue-400' : 'hover:bg-gray-200'}`}
                        onClick={() => handleAnswerSelect(option)}
                    >
                        {option}
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default QuizSection;