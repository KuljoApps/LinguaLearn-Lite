"use client";

import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import { Language, getLanguage, setTutorialCompleted } from '@/lib/storage';

interface OnboardingTutorialProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

interface Step {
    elementId: string;
    title: Record<Language, string>;
    description: Record<Language, string>;
}

const steps: Step[] = [
    {
        elementId: 'language-switcher',
        title: { en: 'Change Language', fr: 'Changer de langue', de: 'Sprache ändern', it: 'Cambia lingua', es: 'Cambiar idioma' },
        description: { en: 'First, select the language you want to learn. You can change this at any time.', fr: 'D\'abord, sélectionnez la langue que vous voulez apprendre. Vous pouvez changer à tout moment.', de: 'Wähle zuerst die Sprache, die du lernen möchtest. Du kannst dies jederzeit ändern.', it: 'Per prima cosa, seleziona la lingua che vuoi imparare. Puoi cambiarla in qualsiasi momento.', es: 'Primero, selecciona el idioma que quieres aprender. Puedes cambiarlo en cualquier momento.' },
    },
    {
        elementId: 'quiz-buttons',
        title: { en: 'Main Quizzes', fr: 'Quiz principaux', de: 'Hauptquiz', it: 'Quiz principali', es: 'Cuestionarios principales' },
        description: { en: 'This is the heart of the app! Choose one of the five modes to test your knowledge in different categories.', fr: 'C\'est le cœur de l\'application ! Choisissez l\'un des cinq modes pour tester vos connaissances dans différentes catégories.', de: 'Das ist das Herz der App! Wähle einen der fünf Modi, um dein Wissen in verschiedenen Kategorien zu testen.', it: 'Questo è il cuore dell\'app! Scegli una delle cinque modalità per testare le tue conoscenze in diverse categorie.', es: '¡Este es el corazón de la aplicación! Elige uno de los cinco modos para poner a prueba tus conocimientos en diferentes categorías.' },
    },
    {
        elementId: 'learning-button',
        title: { en: 'Learning Base', fr: 'Base d\'apprentissage', de: 'Lernbasis', it: 'Base di apprendimento', es: 'Base de aprendizaje' },
        description: { en: 'Need a refresher? Here you will find modules for learning, including grammar, vocabulary, and much more.', fr: 'Besoin d\'un rappel ? Vous trouverez ici des modules d\'apprentissage, y compris la grammaire, le vocabulaire, et bien plus encore.', de: 'Brauchst du eine Auffrischung? Hier findest du Lernmodule, einschließlich Grammatik, Wortschatz und vielem mehr.', it: 'Hai bisogno di un ripasso? Qui troverai moduli per l\'apprendimento, tra cui grammatica, vocabolario e molto altro.', es: '¿Necesitas un repaso? Aquí encontrarás módulos de aprendizaje, incluyendo gramática, vocabulario y mucho más.' },
    },
    {
        elementId: 'toolbar',
        title: { en: 'Tools & Progress', fr: 'Outils et progression', de: 'Werkzeuge & Fortschritt', it: 'Strumenti e progressi', es: 'Herramientas y progreso' },
        description: { en: 'Here you can adjust settings, track your stats, review your errors, and check your achievements.', fr: 'Ici, vous pouvez ajuster les paramètres, suivre vos statistiques, examiner vos erreurs et vérifier vos succès.', de: 'Hier kannst du Einstellungen anpassen, deine Statistiken verfolgen, deine Fehler überprüfen und deine Erfolge einsehen.', it: 'Qui puoi regolare le impostazioni, monitorare le tue statistiche, rivedere i tuoi errori e controllare i tuoi successi.', es: 'Aquí puedes ajustar la configuración, seguir tus estadísticas, revisar tus errores y ver tus logros.' },
    },
];

const uiTexts = {
    next: { en: 'Next', fr: 'Suivant', de: 'Weiter', it: 'Avanti', es: 'Siguiente' },
    finish: { en: 'Finish', fr: 'Terminer', de: 'Beenden', it: 'Fine', es: 'Finalizar' },
    welcomeTitle: { en: 'Welcome to LinguaLearn!', fr: 'Bienvenue sur LinguaLearn !', de: 'Willkommen bei LinguaLearn!', it: 'Benvenuto in LinguaLearn!', es: '¡Bienvenido a LinguaLearn!' },
    welcomeDesc: { en: 'Let me quickly show you the most important features.', fr: 'Laissez-moi vous montrer rapidement les fonctionnalités les plus importantes.', de: 'Lass mich dir kurz die wichtigsten Funktionen zeigen.', it: 'Lascia che ti mostri rapidamente le funzionalità più importanti.', es: 'Déjame mostrarte rápidamente las características más importantes.' }
}

export default function OnboardingTutorial({ open, onOpenChange }: OnboardingTutorialProps) {
    const [currentStep, setCurrentStep] = useState(-1); // -1 for welcome screen
    const [spotlightStyle, setSpotlightStyle] = useState({});
    const [bubbleStyle, setBubbleStyle] = useState({});
    const [language, setLanguage] = useState<Language>('en');

    useEffect(() => {
        setLanguage(getLanguage());
        const handleLanguageChange = () => setLanguage(getLanguage());
        window.addEventListener('language-changed', handleLanguageChange);
        return () => window.removeEventListener('language-changed', handleLanguageChange);
    }, []);

    useEffect(() => {
        if (!open || currentStep < 0 || currentStep >= steps.length) {
            setSpotlightStyle({ opacity: 0 });
            return;
        }

        const updatePosition = () => {
            const element = document.querySelector(`[data-tutorial-id="${steps[currentStep].elementId}"]`);
            if (element) {
                const rect = element.getBoundingClientRect();
                const padding = 10;
                setSpotlightStyle({
                    width: `${rect.width + padding}px`,
                    height: `${rect.height + padding}px`,
                    top: `${rect.top - padding / 2}px`,
                    left: `${rect.left - padding / 2}px`,
                    opacity: 1,
                });

                // Position bubble
                const bubbleHeight = 150; // Approximate height
                const spaceBelow = window.innerHeight - rect.bottom;
                if (spaceBelow > bubbleHeight + 20) {
                    setBubbleStyle({ top: `${rect.bottom + 15}px`, left: `${rect.left}px` });
                } else {
                    setBubbleStyle({ bottom: `${window.innerHeight - rect.top + 15}px`, left: `${rect.left}px` });
                }
            }
        };

        updatePosition();
        window.addEventListener('resize', updatePosition);
        return () => window.removeEventListener('resize', updatePosition);

    }, [currentStep, open]);

    if (!open) return null;

    const handleNext = () => {
        setCurrentStep(prev => prev + 1);
    };

    const handleFinish = () => {
        setTutorialCompleted();
        onOpenChange(false);
    };

    const isLastStep = currentStep === steps.length - 1;

    const currentStepData = currentStep >= 0 ? steps[currentStep] : null;

    return (
        <div className="fixed inset-0 z-50 animate-in fade-in-50">
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/70" onClick={handleFinish} />
            
            {/* Spotlight */}
            {currentStepData && (
                <div 
                    className="tutorial-spotlight absolute rounded-lg transition-all duration-300 pointer-events-none" 
                    style={spotlightStyle}
                />
            )}
            
            {/* Content */}
            <div className="absolute z-50">
                {currentStep === -1 ? (
                    <div className="fixed inset-0 flex items-center justify-center p-4">
                        <div className="bg-background p-6 rounded-lg shadow-xl text-center max-w-sm w-full">
                            <h2 className="text-2xl font-bold mb-2">{uiTexts.welcomeTitle[language]}</h2>
                            <p className="text-muted-foreground mb-4">{uiTexts.welcomeDesc[language]}</p>
                            <Button onClick={handleNext}>{uiTexts.next[language]}</Button>
                        </div>
                    </div>
                ) : (
                    currentStepData && (
                        <div
                            className="bg-background p-4 rounded-lg shadow-xl w-64 transition-all duration-300"
                            style={bubbleStyle}
                        >
                            <h3 className="font-bold mb-1 text-lg">{currentStepData.title[language]}</h3>
                            <p className="text-sm text-muted-foreground mb-4">{currentStepData.description[language]}</p>
                            <div className="flex justify-between items-center">
                                <span className="text-xs text-muted-foreground">{currentStep + 1} / {steps.length}</span>
                                <Button onClick={isLastStep ? handleFinish : handleNext} size="sm">
                                    {isLastStep ? uiTexts.finish[language] : uiTexts.next[language]}
                                </Button>
                            </div>
                        </div>
                    )
                )}
            </div>
        </div>
    );
}