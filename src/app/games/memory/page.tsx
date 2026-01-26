'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, Brain, Award } from 'lucide-react';
import { cn } from '@/lib/utils';

const words = [
  { en: 'cat', pl: 'kot' },
  { en: 'dog', pl: 'pies' },
  { en: 'house', pl: 'dom' },
  { en: 'book', pl: 'książka' },
  { en: 'sun', pl: 'słońce' },
  { en: 'water', pl: 'woda' },
];

type CardInfo = {
  id: number;
  value: string;
  pairId: number;
  isFlipped: boolean;
  isMatched: boolean;
};

const MemoryGamePage = () => {
  const [cards, setCards] = useState<CardInfo[]>([]);
  const [flippedCards, setFlippedCards] = useState<CardInfo[]>([]);
  const [moves, setMoves] = useState(0);
  const [isGameWon, setIsGameWon] = useState(false);

  const initializeGame = () => {
    const gameCards = words.flatMap((word, index) => [
      { id: index * 2, value: word.en, pairId: index, isFlipped: false, isMatched: false },
      { id: index * 2 + 1, value: word.pl, pairId: index, isFlipped: false, isMatched: false },
    ]);

    // Shuffle cards
    for (let i = gameCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [gameCards[i], gameCards[j]] = [gameCards[j], gameCards[i]];
    }

    setCards(gameCards);
    setFlippedCards([]);
    setMoves(0);
    setIsGameWon(false);
  };

  useEffect(() => {
    initializeGame();
  }, []);

  useEffect(() => {
    if (flippedCards.length === 2) {
      const [first, second] = flippedCards;
      if (first.pairId === second.pairId) {
        // Match
        setCards(prevCards =>
          prevCards.map(card =>
            card.pairId === first.pairId ? { ...card, isMatched: true, isFlipped: true } : card
          )
        );
        setFlippedCards([]);
      } else {
        // No match
        setTimeout(() => {
          setCards(prevCards =>
            prevCards.map(card =>
              flippedCards.some(fc => fc.id === card.id) ? { ...card, isFlipped: false } : card
            )
          );
          setFlippedCards([]);
        }, 1000);
      }
      setMoves(prev => prev + 1);
    }
  }, [flippedCards]);

  useEffect(() => {
    if (cards.length > 0 && cards.every(card => card.isMatched)) {
      setIsGameWon(true);
    }
  }, [cards]);

  const handleCardClick = (clickedCard: CardInfo) => {
    if (flippedCards.length === 2 || clickedCard.isFlipped) {
      return;
    }

    setCards(prevCards =>
      prevCards.map(card =>
        card.id === clickedCard.id ? { ...card, isFlipped: true } : card
      )
    );
    setFlippedCards(prev => [...prev, { ...clickedCard, isFlipped: true }]);
  };
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <Card className="w-full max-w-2xl shadow-2xl">
        <CardHeader className="text-center p-6">
          <div className="flex items-center justify-center gap-4">
            <Brain className="h-8 w-8" />
            <CardTitle className="text-3xl font-bold tracking-tight">Memory Game</CardTitle>
          </div>
          <p className="text-muted-foreground pt-2">Moves: {moves}</p>
        </CardHeader>
        <CardContent className="p-6">
          {isGameWon ? (
            <div className="text-center space-y-4">
              <Award className="h-16 w-16 mx-auto text-amber" />
              <h2 className="text-2xl font-bold">You won!</h2>
              <p>Congratulations! You matched all the pairs in {moves} moves.</p>
              <Button onClick={initializeGame}>Play Again</Button>
            </div>
          ) : (
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
              {cards.map(card => (
                <div
                  key={card.id}
                  onClick={() => handleCardClick(card)}
                  className={cn(
                    "h-24 sm:h-32 flex items-center justify-center rounded-lg cursor-pointer transition-colors duration-300",
                    card.isFlipped ? 'bg-card border-2 border-primary' : 'bg-primary text-primary-foreground',
                    card.isMatched && 'bg-success/20 border-success cursor-default',
                  )}
                >
                  {card.isFlipped && <span className="text-lg sm:text-xl font-bold p-2 text-center">{card.value}</span>}
                </div>
              ))}
            </div>
          )}
        </CardContent>
        <CardFooter className="flex justify-center p-6 border-t">
          <Link href="/games" passHref>
            <Button variant="outline" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Game Center</span>
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </main>
  );
};

export default MemoryGamePage;
