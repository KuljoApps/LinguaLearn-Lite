"use client";

import React, { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { Button } from './ui/button';
import { saveTutorialState, clearTutorialState, getTutorialState } from '@/lib/storage';

interface Step {
    elementId?: string;
    title: string;
    description: string;
    path?: string;
    isModal?: boolean;
}

const initialSteps: Step[] = [
    {
        isModal: true,
        title: 'Witaj w\u00A0LinguaLearn!',
        description: 'Pozwól, że w\u00A0kilku krokach pokażę Ci najważniejsze funkcje.',
    },
    {
        elementId: 'language-switcher',
        title: 'Zmiana języka',
        description: 'Najpierw wybierz język, którego chcesz się uczyć. Możesz to zmienić w\u00A0każdej chwili.',
        path: '/',
    },
    {
        elementId: 'quiz-buttons',
        title: 'Główne quizy',
        description: 'To serce aplikacji! Wybierz jeden z\u00A0pięciu trybów, aby sprawdzić swoją wiedzę w\u00A0różnych kategoriach.',
        path: '/',
    },
    {
        elementId: 'learning-button',
        title: 'Baza wiedzy',
        description: 'Potrzebujesz powtórki? Tutaj znajdziesz moduły do nauki, w\u00A0tym gramatykę, słownictwo i\u00A0wiele więcej.',
        path: '/',
    },
    {
        elementId: 'toolbar',
        title: 'Narzędzia i\u00A0postępy',
        description: 'Tutaj możesz dostosować ustawienia, śledzić swoje statystyki, przeglądać błędy i\u00A0sprawdzać swoje osiągnięcia.',
        path: '/',
    },
];

const extendedSteps: Step[] = [
    {
        path: '/settings',
        elementId: 'settings-card',
        title: 'Ustawienia Aplikacji',
        description: 'W\u00A0Ustawieniach możesz włączyć/wyłączyć dźwięki, wibracje oraz dostosować filtr ochrony wzroku, aby nauka była bardziej komfortowa.',
    },
    {
        path: '/stats',
        elementId: 'stats-card',
        title: 'Śledzenie Statystyk',
        description: 'Na ekranie Statystyk możesz śledzić swoje postępy, w\u00A0tym ogólną skuteczność, najdłuższą serię i\u00A0ostatnie 50 wyników.',
    },
    {
        path: '/errors',
        elementId: 'errors-card',
        title: 'Twoje Błędy',
        description: 'Sekcja Błędów to Twój osobisty trener. Zapisuje pytania, na które odpowiedziałeś niepoprawnie, abyś mógł je łatwo powtórzyć.',
    },
    {
        path: '/achievements',
        elementId: 'achievements-card',
        title: 'Osiągnięcia',
        description: 'Zdobywaj Osiągnięcia za swoje postępy! Odblokuj je wszystkie, aby udowodnić swoje mistrzostwo.',
    },
    {
        path: '/learning/en',
        elementId: 'learning-card',
        title: 'Moduł Nauki',
        description: 'W\u00A0module nauki znajdziesz słowniki, zasady gramatyczne i\u00A0wiele więcej. To świetne miejsce, aby odświeżyć wiedzę przed quizem.',
    },
];

const uiTexts = {
    next: 'Dalej',
    finish: 'Zakończ',
    showMore: 'Pokaż więcej',
    start: 'Zacznij naukę!',
    finalTitle: 'Wszystko gotowe!',
    finalDesc: 'To wszystko! Jesteś gotów, aby w\u00A0pełni wykorzystać LinguaLearn. Powodzenia w\u00A0nauce!',
};

export default function OnboardingTutorial() {
    const router = useRouter();
    const pathname = usePathname();
    const tutorialState = getTutorialState();
    
    const [spotlightStyle, setSpotlightStyle] = useState({});
    const [bubbleStyle, setBubbleStyle] = useState({});

    const stage = tutorialState?.stage || 'initial';
    const currentStepIndex = tutorialState?.step || 0;
    
    const steps = stage === 'initial' ? initialSteps : extendedSteps;
    const currentStep = steps[currentStepIndex];

    useEffect(() => {
        if (!currentStep || currentStep.isModal || stage === 'decision') {
            setSpotlightStyle({ opacity: 0 });
            return;
        }

        const updatePosition = () => {
            if (!currentStep.elementId) return;
            const element = document.querySelector(`[data-tutorial-id="${currentStep.elementId}"]`);
            
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

                const bubbleHeight = 150;
                const spaceBelow = window.innerHeight - rect.bottom;
                if (spaceBelow > bubbleHeight + 20) {
                    setBubbleStyle({ top: `${rect.bottom + 15}px`, left: `${rect.left}px`, right: 'auto', bottom: 'auto' });
                } else {
                    setBubbleStyle({ bottom: `${window.innerHeight - rect.top + 15}px`, left: `${rect.left}px`, right: 'auto', top: 'auto' });
                }
            } else {
                // Retry if element not found yet
                setTimeout(updatePosition, 100);
            }
        };

        // Delay to allow layout to settle after navigation
        const timeoutId = setTimeout(updatePosition, 50);
        window.addEventListener('resize', updatePosition);
        
        return () => {
            clearTimeout(timeoutId);
            window.removeEventListener('resize', updatePosition);
        }
    }, [currentStep, pathname]);


    const handleNext = () => {
        const nextStepIndex = currentStepIndex + 1;
        if (stage === 'initial' && nextStepIndex >= steps.length) {
            saveTutorialState({ isActive: true, stage: 'decision', step: 0 });
            return;
        }
        
        if (stage === 'extended' && nextStepIndex >= steps.length) {
            saveTutorialState({ isActive: true, stage: 'decision', step: -1 }); // Final modal
            return;
        }

        const nextStep = steps[nextStepIndex];
        if (nextStep?.path && nextStep.path !== pathname) {
            router.push(nextStep.path);
        }
        saveTutorialState({ isActive: true, stage, step: nextStepIndex });
    };

    const handleFinish = () => {
        clearTutorialState();
    };
    
    const handleShowMore = () => {
        const firstExtendedStep = extendedSteps[0];
        if (firstExtendedStep.path !== pathname) {
            router.push(firstExtendedStep.path!);
        }
        saveTutorialState({ isActive: true, stage: 'extended', step: 0 });
    }

    if (!tutorialState?.isActive) return null;

    const isLastStep = currentStepIndex === steps.length - 1;

    // ----- RENDER LOGIC -----
    
    // Initial welcome modal
    if (stage === 'initial' && currentStep?.isModal) {
        return (
            <div className="fixed inset-0 z-50 animate-in fade-in-50 flex items-center justify-center p-4">
                <div className="absolute inset-0 bg-black/70" />
                <div className="relative bg-background p-6 rounded-lg shadow-xl text-center max-w-sm w-full">
                    <h2 className="text-2xl font-bold">{currentStep.title}</h2>
                    <h1 className="text-4xl font-bold tracking-tight whitespace-nowrap mt-2">
                        Lingua
                        <span className="relative inline-block">
                            Learn
                            <span className="absolute -right-1 -bottom-4 text-lg font-semibold tracking-normal text-amber">
                            Lite
                            </span>
                        </span>
                    </h1>
                    <p className="text-muted-foreground my-6">{currentStep.description}</p>
                    <Button onClick={handleNext}>{uiTexts.next}</Button>
                </div>
            </div>
        );
    }
    
    // Decision modal
    if (stage === 'decision' && currentStepIndex === 0) {
        return (
             <div className="fixed inset-0 z-50 animate-in fade-in-50 flex items-center justify-center p-4">
                <div className="absolute inset-0 bg-black/70" />
                <div className="relative bg-background p-6 rounded-lg shadow-xl text-center max-w-sm w-full">
                    <h2 className="text-2xl font-bold">Podstawy za nami!</h2>
                    <p className="text-muted-foreground my-6">Czy chcesz poznać więcej zaawansowanych funkcji, czy wolisz już zacząć naukę?</p>
                    <div className="flex flex-col sm:flex-row gap-2 justify-center">
                        <Button onClick={handleShowMore}>{uiTexts.showMore}</Button>
                        <Button variant="secondary" onClick={handleFinish}>{uiTexts.start}</Button>
                    </div>
                </div>
            </div>
        );
    }
    
    // Final modal
    if (stage === 'decision' && currentStepIndex === -1) {
        return (
            <div className="fixed inset-0 z-50 animate-in fade-in-50 flex items-center justify-center p-4">
                <div className="absolute inset-0 bg-black/70" />
                <div className="relative bg-background p-6 rounded-lg shadow-xl text-center max-w-sm w-full">
                    <h2 className="text-2xl font-bold">{uiTexts.finalTitle}</h2>
                    <p className="text-muted-foreground my-6">{uiTexts.finalDesc}</p>
                    <Button onClick={handleFinish}>{uiTexts.start}</Button>
                </div>
            </div>
        )
    }

    // Step-by-step overlay
    return (
        <div className="fixed inset-0 z-50 animate-in fade-in-50">
            <div className="absolute inset-0 bg-black/70" onClick={handleFinish} />
            
            {currentStep && !currentStep.isModal && (
                <>
                    <div 
                        className="tutorial-spotlight absolute rounded-lg transition-all duration-300 pointer-events-none" 
                        style={spotlightStyle}
                    />
                    <div
                        className="fixed bg-background p-4 rounded-lg shadow-xl w-64 transition-all duration-300 z-50"
                        style={bubbleStyle}
                    >
                        <h3 className="font-bold mb-1 text-lg">{currentStep.title}</h3>
                        <p className="text-sm text-muted-foreground mb-4">{currentStep.description}</p>
                        <div className="flex justify-between items-center">
                            <span className="text-xs text-muted-foreground">{currentStepIndex + 1} / {steps.length}</span>
                            <Button onClick={handleNext} size="sm">
                                {isLastStep ? uiTexts.finish : uiTexts.next}
                            </Button>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
