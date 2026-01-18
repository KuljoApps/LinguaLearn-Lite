"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from '@/components/ui/scroll-area';
import { ArrowLeft, Volume2, LoaderCircle } from 'lucide-react';
import { textToSpeech } from '@/ai/flows/text-to-speech-flow';
import type { AlphabetData } from '@/lib/alphabet';

interface AlphabetPageProps {
  data: AlphabetData;
}

export default function AlphabetPage({ data }: AlphabetPageProps) {
  const [loadingLetter, setLoadingLetter] = useState<string | null>(null);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [audioCache, setAudioCache] = useState<Record<string, string>>({});

  useEffect(() => {
    // This effect is currently not used but can be a place
    // for pre-loading or other initializations if needed in the future.
  }, []);

  const handlePlaySound = async (letter: string) => {
    if (loadingLetter) return;

    if (audio) {
        audio.pause();
        audio.currentTime = 0;
    }

    const cacheKey = `audio-${data.lang}-${letter}`;
    
    // Check cache first
    const cachedAudio = localStorage.getItem(cacheKey);
    if (cachedAudio) {
      const newAudio = new Audio(cachedAudio);
      setAudio(newAudio);
      newAudio.play();
      return;
    }

    // If not in cache, fetch from API
    setLoadingLetter(letter);

    try {
        const promptText = `Please pronounce the letter: ${letter}`;
        const response = await textToSpeech({ text: promptText });
        
        // Save to cache
        localStorage.setItem(cacheKey, response.media);
        
        const newAudio = new Audio(response.media);
        setAudio(newAudio);
        newAudio.play();
        newAudio.onended = () => setLoadingLetter(null);
    } catch (error) {
        console.error("Error generating speech:", error);
        setLoadingLetter(null);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <Card className="w-full max-w-4xl shadow-2xl">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl">{data.ui.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-96 w-full pr-4">
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
              {data.alphabet.map((item) => (
                <Button
                  key={item.letter}
                  variant="outline"
                  className="h-32 flex-col gap-1 text-lg border-2 border-primary"
                  onClick={() => handlePlaySound(item.letter)}
                  disabled={!!loadingLetter}
                >
                  <div className="flex-grow flex items-center justify-center">
                    <span className="text-5xl font-bold">{item.letter}</span>
                  </div>
                  <div className="flex items-center justify-between w-full px-2 pb-1">
                      <span className="text-xs text-muted-foreground">{item.phonetic}</span>
                      {loadingLetter === item.letter ? (
                          <LoaderCircle className="h-5 w-5 animate-spin" />
                      ) : (
                          <Volume2 className="h-5 w-5" />
                      )}
                  </div>
                </Button>
              ))}
            </div>
          </ScrollArea>
        </CardContent>
        <CardFooter className="flex justify-center p-6 border-t">
          <Link href={`/learning/${data.lang}/phonetics`} passHref>
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" /> {data.ui.backButton}
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </main>
  );
}
