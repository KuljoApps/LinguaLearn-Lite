# Instrukcja Integracji Systemu Samouczka

Ten przewodnik wyjaśnia, jak przenieść i zintegrować system samouczka z nową aplikacją (`LinguaLearn PRO`).

## Wymagania wstępne

Aplikacja docelowa powinna używać:
*   Next.js z App Router
*   Komponentów Shadcn UI
*   Tailwind CSS
*   Lucide React dla ikon

---

## Krok 1: Kopiowanie Głównego Folderu

Skopiuj cały folder `src/app/tutorial/` z bieżącego projektu do `src/app/tutorial/` w projekcie docelowym. **Pomiń podfolder `Instalacja`**, który właśnie czytasz.

---

## Krok 2: Konfiguracja Globalna

Pliki w tej sekcji muszą zostać zaktualizowane, aby samouczek działał w całej aplikacji. Fragmenty kodu znajdziesz w folderze `1_Konfiguracja_Globalna`.

1.  **`src/app/layout.tsx`**:
    Zaimportuj `TutorialManager` i umieść go wewnątrz tagu `<body>`.
    *Zobacz: `1_Konfiguracja_Globalna/layout.tsx.snippet`*

2.  **`src/app/globals.css`**:
    Dodaj styl `.tutorial-spotlight`, który jest niezbędny do działania podświetlenia elementów.
    *Zobacz: `1_Konfiguracja_Globalna/globals.css.snippet`*

3.  **`src/lib/storage.ts`**:
    Dodaj interfejsy i funkcje związane ze stanem samouczka. Są to `TutorialState`, `getTutorialState`, `saveTutorialState`, `clearTutorialState`, `isTutorialCompleted` i `setTutorialCompleted`.
    *Zobacz: `1_Konfiguracja_Globalna/storage.ts.snippet`*

---

## Krok 3: Inicjalizacja Samouczka

Musisz dodać logikę, która uruchomi samouczek. Fragmenty kodu znajdziesz w folderze `2_Inicjalizacja_Samouczka`.

1.  **`src/app/page.tsx` (dla nowych użytkowników)**:
    Dodaj logikę w `useEffect`, która sprawdzi, czy samouczek został już ukończony, a jeśli nie, uruchomi go.
    *Zobacz: `2_Inicjalizacja_Samouczka/page.tsx.snippet`*

2.  **`src/components/settings.tsx` (uruchamianie ręczne)**:
    Dodaj przycisk i funkcję w panelu deweloperskim, aby móc ręcznie uruchomić samouczek w dowolnym momencie.
    *Zobacz: `2_Inicjalizacja_Samouczka/settings.tsx.snippet`*

---

## Krok 4: Oznaczanie Elementów (`data-tutorial-id`)

To najważniejszy i najbardziej czasochłonny krok. Musisz przejść przez pliki komponentów w nowej aplikacji i dodać atrybuty `data-tutorial-id="nazwa-elementu"` do elementów, które mają być podświetlane.

Poniżej znajduje się lista wszystkich `id` używanych w samouczku. Przykłady implementacji dla każdego z nich znajdziesz w odpowiednich plikach w folderze `3_Oznaczanie_Elementow`.

*   **Ekran główny (`page.tsx`)**:
    *   `language-switcher`
    *   `quiz-buttons`
    *   `learning-button`
    *   `toolbar`
*   **Ustawienia (`settings.tsx`)**:
    *   `settings-switches`
    *   `settings-eyecare`
*   **Statystyki (`statistics.tsx`)**:
    *   `stats-cards`
    *   `last-50-grid`
*   **Błędy (`errors.tsx`)**:
    *   `errors-controls`
    *   `errors-table`
*   **Osiągnięcia (`achievements.tsx`)**:
    *   `achievements-grid`
*   **Ekran Nauki (`learning/en/page.tsx`)**:
    *   `learning-card`
    *   `learning-question-base`
    *   `learning-main-modules`
    *   `learning-extras`
    *   `extras-trigger`
*   **Podstrony Nauki**:
    *   `phrases-airport`
    *   `airport-first-phrases`
    *   `dictionary-colors`
    *   `dictionary-word-list`
    *   `culture-about`, `culture-places`, `culture-history`
    *   `tongue-twisters-first-two`
    *   `phonetics-alphabet`, `phonetics-difficult`, `phonetics-first-item`
*   **Quiz**:
    *   `quiz-timer`
    *   `quiz-pause-button`
    *   `quiz-correct-answer`, `quiz-incorrect-answer`
    *   `irregular-quiz-part1`, `irregular-quiz-part2`, `irregular-quiz-hint`
    *   `quiz-results-summary`, `quiz-results-errors`, `quiz-results-actions`

Po wykonaniu tych kroków system samouczka powinien być w pełni zintegrowany.
