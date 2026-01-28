"use client";

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { ArrowLeft, Beaker, CheckCircle, Clock, Palette, Shapes, SlidersHorizontal, Sparkles, ShieldX, Trophy, Save, ClipboardCopy, PlusCircle, Trash2 } from 'lucide-react';
import Confetti from '@/components/Confetti';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { HexColorPicker } from 'react-colorful';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

type ConfettiShape = 'square' | 'circle' | 'triangle' | 'star';

interface ConfettiConfig {
  pieces: number;
  gravity: number;
  duration: number; // in seconds
  shape: ConfettiShape;
  colors: string[];
}

const STORAGE_KEY = 'linguaLearnConfettiConfig';

const defaultColors = ['#a864fd', '#29cdff', '#78ff44', '#ff718d', '#fdff6a'];

const presetColors: Record<string, string[]> = {
    'Rainbow': ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3'],
    'Pastel': ['#a8e6cf', '#dcedc1', '#ffd3b6', '#ffaaa5', '#ff8b94'],
    'Ocean': ['#003f5c', '#2f4b7c', '#665191', '#a05195', '#d45087'],
    'Forest': ['#004225', '#588157', '#a3b18a', '#dad7cd', '#3a5a40'],
};

// --- Shape drawing functions ---
const drawTriangle = (ctx: CanvasRenderingContext2D) => {
    ctx.beginPath();
    ctx.moveTo(-5, 5);
    ctx.lineTo(5, 5);
    ctx.lineTo(0, -8);
    ctx.fill();
    ctx.closePath();
};

const drawStar = (ctx: CanvasRenderingContext2D) => {
    const points = 5;
    const outerRadius = 7;
    const innerRadius = 3;
    ctx.beginPath();
    for (let i = 0; i < 2 * points; i++) {
        const radius = i % 2 === 0 ? outerRadius : innerRadius;
        const angle = (i * Math.PI) / points - Math.PI / 2;
        ctx.lineTo(radius * Math.cos(angle), radius * Math.sin(angle));
    }
    ctx.fill();
    ctx.closePath();
};

const drawCircle = (ctx: CanvasRenderingContext2D) => {
    ctx.beginPath();
    ctx.arc(0, 0, 5, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();
};


export default function ConfettiConfiguratorPage() {
    const { toast } = useToast();
    const [config, setConfig] = useState<ConfettiConfig>({
        pieces: 200,
        gravity: 0.2,
        duration: 5,
        shape: 'square',
        colors: defaultColors,
    });
    const [isExploding, setIsExploding] = useState(false);
    const [customColor, setCustomColor] = useState('#a864fd');
    const [outputJson, setOutputJson] = useState('');
    
    useEffect(() => {
        try {
            const savedConfig = localStorage.getItem(STORAGE_KEY);
            if (savedConfig) {
                setConfig(JSON.parse(savedConfig));
            }
        } catch (e) {
            console.error("Failed to load confetti config:", e);
        }
    }, []);
    
    const handleSave = () => {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
            toast({ title: 'Config saved!', description: 'Your confetti settings have been saved locally.' });
        } catch (e) {
            console.error("Failed to save confetti config:", e);
        }
    };

    const handleTestClick = () => {
        if (isExploding) return;
        setIsExploding(true);
        setTimeout(() => setIsExploding(false), config.duration * 1000);
    };

    const handleAddColor = () => {
        if (!config.colors.includes(customColor)) {
            setConfig(prev => ({ ...prev, colors: [...prev.colors, customColor] }));
        }
    };

    const handleRemoveColor = (colorToRemove: string) => {
        setConfig(prev => ({
            ...prev,
            colors: prev.colors.filter(c => c !== colorToRemove)
        }));
    };
    
    const handlePresetClick = (presetName: string) => {
        setConfig(prev => ({...prev, colors: presetColors[presetName]}));
    };

    const handleGenerateJson = () => {
        setOutputJson(JSON.stringify(config, null, 2));
    };

    const handleCopyToClipboard = () => {
        if (!outputJson) return;
        navigator.clipboard.writeText(outputJson);
        toast({ title: 'Copied to clipboard!' });
    };

    const getShapeFunction = () => {
        switch (config.shape) {
            case 'circle':
                return drawCircle;
            case 'triangle':
                return drawTriangle;
            case 'star':
                return drawStar;
            case 'square':
            default:
                return undefined; // Default is square
        }
    };
    
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-muted/40">
            {isExploding && (
                <Confetti
                    recycle={true}
                    numberOfPieces={config.pieces}
                    gravity={config.gravity}
                    colors={config.colors}
                    confettiSource={{ w: 10, h: 10, x: window.innerWidth / 2, y: window.innerHeight / 2 }}
                    drawShape={getShapeFunction()}
                />
            )}
             <Card className="w-full max-w-lg shadow-2xl pointer-events-none mb-8">
                <CardHeader className="items-center text-center pb-4">
                    <Trophy className="h-16 w-16 text-amber" />
                    <CardTitle className="text-3xl font-bold">Perfect Score!</CardTitle>
                    <CardDescription>Amazing! You answered all questions correctly.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <Card className="bg-muted/50">
                        <CardHeader className="pb-2 pt-4"><CardTitle className="text-xl text-center">Summary</CardTitle></CardHeader>
                        <CardContent className="grid grid-cols-2 gap-4 text-center">
                            <div className="flex flex-col items-center justify-center p-2 rounded-lg bg-background"><span className="text-2xl font-bold">30 / 30</span><span className="text-xs text-muted-foreground">Score</span></div>
                            <div className="flex flex-col items-center justify-center p-2 rounded-lg bg-background"><span className="text-2xl font-bold">100%</span><span className="text-xs text-muted-foreground">Success Rate</span></div>
                            <div className="flex flex-col items-center justify-center p-2 rounded-lg bg-background"><div className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-success"/><span className="text-2xl font-bold">30</span></div><span className="text-xs text-muted-foreground">Correct</span></div>
                            <div className="flex flex-col items-center justify-center p-2 rounded-lg bg-background"><div className="flex items-center gap-2"><ShieldX className="h-4 w-4 text-destructive"/><span className="text-2xl font-bold">0</span></div><span className="text-xs text-muted-foreground">Mistakes</span></div>
                            <div className="flex flex-col items-center justify-center p-2 rounded-lg bg-background col-span-2"><div className="flex items-center gap-2"><Clock className="h-4 w-4 text-muted-foreground"/><span className="text-2xl font-bold">02:15</span></div><span className="text-xs text-muted-foreground">Total Time</span></div>
                        </CardContent>
                    </Card>
                </CardContent>
            </Card>

            <Card className="w-full max-w-3xl shadow-2xl">
                 <CardHeader className="p-4 pb-2 text-center">
                    <div className="flex items-center justify-center gap-4"><Beaker className="h-8 w-8" /><CardTitle className="text-2xl">Confetti Configurator</CardTitle></div>
                </CardHeader>
                 <CardContent className="p-6 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                    <div className="space-y-6">
                        <h3 className="text-lg font-semibold text-center flex items-center justify-center gap-2"><SlidersHorizontal className="h-5 w-5"/> Parameters</h3>
                        <div className="space-y-4"><Label htmlFor="amount">Amount: {config.pieces}</Label><Slider id="amount" value={[config.pieces]} onValueChange={(v) => setConfig(p => ({...p, pieces: v[0]}))} min={10} max={800} step={10} /></div>
                        <div className="space-y-4"><Label htmlFor="duration">Duration: {config.duration}s</Label><Slider id="duration" value={[config.duration]} onValueChange={(v) => setConfig(p => ({...p, duration: v[0]}))} min={1} max={15} step={1} /></div>
                        <div className="space-y-4"><Label htmlFor="gravity">Gravity: {config.gravity.toFixed(2)}</Label><Slider id="gravity" value={[config.gravity]} onValueChange={(v) => setConfig(p => ({...p, gravity: v[0]}))} min={0.05} max={0.7} step={0.01} /></div>
                    </div>
                    <div className="space-y-6">
                        <h3 className="text-lg font-semibold text-center flex items-center justify-center gap-2"><Shapes className="h-5 w-5"/> Shape</h3>
                         <RadioGroup value={config.shape} onValueChange={(v) => setConfig(p => ({...p, shape: v as ConfettiShape}))} className="flex justify-center gap-4">
                            <Label htmlFor="square" className="cursor-pointer flex flex-col items-center gap-2 p-3 rounded-md border-2 has-[:checked]:border-primary"><div className="h-8 w-8 bg-foreground rounded-sm" /><div className="flex items-center gap-2"><RadioGroupItem value="square" id="square" />Square</div></Label>
                            <Label htmlFor="circle" className="cursor-pointer flex flex-col items-center gap-2 p-3 rounded-md border-2 has-[:checked]:border-primary"><div className="h-8 w-8 bg-foreground rounded-full" /><div className="flex items-center gap-2"><RadioGroupItem value="circle" id="circle" />Circle</div></Label>
                            <Label htmlFor="triangle" className="cursor-pointer flex flex-col items-center gap-2 p-3 rounded-md border-2 has-[:checked]:border-primary"><div className="h-8 w-8 bg-foreground" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }} /><div className="flex items-center gap-2"><RadioGroupItem value="triangle" id="triangle" />Triangle</div></Label>
                            <Label htmlFor="star" className="cursor-pointer flex flex-col items-center gap-2 p-3 rounded-md border-2 has-[:checked]:border-primary"><div className="h-8 w-8 bg-foreground" style={{ clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' }} /><div className="flex items-center gap-2"><RadioGroupItem value="star" id="star" />Star</div></Label>
                        </RadioGroup>
                    </div>
                    <div className="md:col-span-2 space-y-6">
                        <Separator />
                        <h3 className="text-lg font-semibold text-center flex items-center justify-center gap-2"><Palette className="h-5 w-5"/> Colors</h3>
                        <div className="flex justify-center gap-2">
                            {Object.entries(presetColors).map(([name]) => (<Button key={name} variant="outline" size="sm" onClick={() => handlePresetClick(name)}>{name}</Button>))}
                        </div>
                        <div className="flex items-center justify-center gap-4">
                           <Popover>
                              <PopoverTrigger asChild><div className="w-10 h-10 rounded-full border-2 cursor-pointer" style={{ backgroundColor: customColor }}/></PopoverTrigger>
                              <PopoverContent className="w-auto"><HexColorPicker color={customColor} onChange={setCustomColor} /></PopoverContent>
                            </Popover>
                             <Button size="sm" onClick={handleAddColor}><PlusCircle className="mr-2 h-4 w-4" /> Add Custom Color</Button>
                        </div>
                        <div className="flex flex-wrap gap-3 justify-center min-h-[36px] rounded-md border p-2">
                            {config.colors.map(color => (
                                <div key={color} className="relative group">
                                    <div style={{backgroundColor: color}} className="h-7 w-7 rounded-full border" />
                                    <button onClick={() => handleRemoveColor(color)} className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                                        <Trash2 className="h-4 w-4 text-white"/>
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                     <div className="md:col-span-2 space-y-4">
                         <Separator />
                        <h3 className="text-lg font-semibold text-center flex items-center justify-center gap-2"><Save className="h-5 w-5" /> Generate & Save</h3>
                        <div className="flex gap-2 justify-center">
                            <Button className="w-full max-w-xs" onClick={handleGenerateJson}>Generate JSON</Button>
                            <Button className="w-full max-w-xs" onClick={handleSave}>Save Config</Button>
                        </div>
                        {outputJson && (
                             <div className="relative">
                                 <Textarea value={outputJson} readOnly className="h-32 font-mono text-xs"/>
                                 <Button size="icon" variant="ghost" className="absolute top-2 right-2 h-7 w-7" onClick={handleCopyToClipboard}><ClipboardCopy className="h-4 w-4" /></Button>
                             </div>
                        )}
                    </div>
                 </CardContent>
                 <CardFooter className="flex-col gap-4 p-6 border-t">
                    <Button onClick={handleTestClick} disabled={isExploding} className="w-full max-w-xs">
                        <Sparkles className="mr-2 h-4 w-4"/> Test Animation
                    </Button>
                    <Link href="/listening" passHref>
                        <Button variant="outline"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Listening</Button>
                    </Link>
                </CardFooter>
            </Card>
        </main>
    );
}