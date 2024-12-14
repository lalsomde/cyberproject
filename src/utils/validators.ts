// src/utils/validators.ts
export const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

export const isValidPassword = (password: string): boolean => {
    return password.length >= 8;
};

// src/App.tsx
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import QuizSection from './components/QuizSection';

const App: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col bg-gray-100">
            <Header />
            <main className="flex-grow container mx-auto py-8 px-4">
                <QuizSection />
            </main>
            <Footer />
        </div>
    );
};

export default App;