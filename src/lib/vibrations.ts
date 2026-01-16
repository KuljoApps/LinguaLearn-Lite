'use client';

import { getSettings } from './storage';

/**
 * Triggers haptic feedback based on the answer type.
 * @param type - 'correct' for a short vibration, 'incorrect' for a longer pattern.
 */
export const vibrate = (type: 'correct' | 'incorrect') => {
    const settings = getSettings();
    if (!settings.vibrationsEnabled || typeof window === 'undefined' || !('vibrate' in navigator)) {
        return;
    }

    try {
        if (type === 'correct') {
            // A short, crisp vibration for success.
            window.navigator.vibrate(100);
        } else { 
            // A longer, more noticeable pattern for an error.
            window.navigator.vibrate([200, 50, 200]);
        }
    } catch (error) {
        console.error("Vibration failed", error);
    }
};
