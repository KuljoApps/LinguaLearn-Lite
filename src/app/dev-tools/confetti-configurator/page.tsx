
"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { ArrowLeft, Beaker, CheckCircle, Clock, Palette, Shapes, SlidersHorizontal, Sparkles, ShieldX, Trophy, Save, ClipboardCopy, PlusCircle, Trash2, FolderOpen, Upload, FileDown, Wind, MoveVertical, MoveHorizontal, MapPin } from 'lucide-react';
import Confetti from '@/components/Confetti';
import { Label } from '@/components/ui/label';
import { Slider } from "@/components/ui/slider";
import { Separator } from "@/components/ui/separator";
import { cn } from '@/lib/utils';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { HexColorPicker } from 'react-colorful';
import { Textarea } from "@/components/ui/textarea";
import { useToast } from '@/hooks/use-toast';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";
import { Checkbox } from '@/components/ui/checkbox';
import { useWindowSize } from '@react-hook/window-size';


type ConfettiShape = 'square' | 'circle' | 'triangle' | 'star' | 'line' | 'heart';

interface ConfettiConfig {
  pieces: number;
  gravity: number;
  wind: number;
  shapes: ConfettiShape[];
  colors: string[];
  initialVelocityX: number;
  initialVelocityY: number;
  confettiSource: {
    x: number; // percentage
    y: number; // percentage
    w: number; // pixels
    h: number; // pixels
  };
}

const CONFIGS_STORAGE_KEY = 'linguaLearnConfettiConfigs_v3';
const PALETTES_STORAGE_KEY = 'linguaLearnConfettiPalettes_v3';
const LAST_CONFIG_KEY = 'linguaLearnLastConfettiConfigName_v3';

const defaultColors = ['#a864fd', '#29cdff', '#78ff44', '#ff718d', '#fdff6a'];

const presetPalettes: Record<string, string[]> = {
    'Rainbow': ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3'],
    'Pastel': ['#a8e6cf', '#dcedc1', '#ffd3b6', '#ffaaa5', '#ff8b94'],
    'Ocean': ['#003f5c', '#2f4b7c', '#665191', '#a05195', '#d45087'],
    'Forest': ['#004225', '#588157', '#a3b18a', '#dad7cd', '#3a5a40'],
};

const drawTriangle = (ctx: CanvasRenderingContext2D) => {
    ctx.beginPath(); ctx.moveTo(-5, 5); ctx.lineTo(5, 5); ctx.lineTo(0, -8); ctx.fill(); ctx.closePath();
};
const drawStar = (ctx: CanvasRenderingContext2D) => {
    const p=5, or=7, ir=3; ctx.beginPath(); for (let i=0; i<2*p; i++) { const r=i%2===0?or:ir; const a=(i*Math.PI)/p - Math.PI/2; ctx.lineTo(r*Math.cos(a), r*Math.sin(a)); } ctx.fill(); ctx.closePath();
};
const drawCircle = (ctx: CanvasRenderingContext2D) => {
    ctx.beginPath(); ctx.arc(0, 0, 5, 0, 2*Math.PI); ctx.fill(); ctx.closePath();
};
const drawLine = (ctx: CanvasRenderingContext2D) => {
    ctx.fillRect(-1, -10, 2, 20);
};
const drawHeart = (ctx: CanvasRenderingContext2D) => {
    const s = 0.5; ctx.scale(s,s); ctx.beginPath(); ctx.moveTo(0, 4); ctx.bezierCurveTo(-12, -20, -20, 0, 0, 15); ctx.bezierCurveTo(20, 0, 12, -20, 0, 4); ctx.fill(); ctx.closePath();
};

const drawFunctions: Record<ConfettiShape, (ctx: CanvasRenderingContext2D) => void> = {
    square: (ctx: CanvasRenderingContext2D) => ctx.fillRect(-5, -5, 10, 10),
    circle: drawCircle,
    triangle: drawTriangle,
    star: drawStar,
    line: drawLine,
    heart: drawHeart,
};

export default function ConfettiConfiguratorPage() {
    const { toast } = useToast();
    const [width, height] = useWindowSize();
    const [config, setConfig] = useState<ConfettiConfig>({
        pieces: 200, gravity: 0.2, wind: 0,
        shapes: ['square', 'circle'],
        colors: defaultColors,
        initialVelocityX: 0, initialVelocityY: -10,
        confettiSource: { x: 50, y: 50, w: 10, h: 10 },
    });
    const [isExploding, setIsExploding] = useState(false);
    const [customColor, setCustomColor] = useState('#a864fd');
    const [outputJson, setOutputJson] = useState('');
    
    const [savedConfigs, setSavedConfigs] = useState<Record<string, ConfettiConfig>>({});
    const [newConfigName, setNewConfigName] = useState('');
    const [activeConfigName, setActiveConfigName] = useState<string | null>(null);

    const [savedPalettes, setSavedPalettes] = useState<Record<string, string[]>>({});
    const [newPaletteName, setNewPaletteName] = useState('');
    
    const [deleteDialog, setDeleteDialog] = useState<{ open: boolean; type: 'config' | 'palette' | null; name: string | null }>({ open: false, type: null, name: null });

    const presets: Record<string, Partial<ConfettiConfig>> = {
      'Explosion': { pieces: 500, gravity: 0.3, initialVelocityY: -15, confettiSource: { x: 50, y: 50, w: 20, h: 20 }, colors: ['#ff0000', '#ffa500', '#ffff00', '#ff4500'], shapes: ['star', 'triangle'] },
      'Fountain': { pieces: 400, gravity: 0.1, initialVelocityY: -25, confettiSource: { x: 50, y: 80, w: 20, h: 10 }, shapes: ['line', 'circle'] },
      'Rain': { pieces: 600, gravity: 0.5, wind: 2, confettiSource: { x: 50, y: 0, w: 100, h: 0 }, colors: ['#4dabf7', '#1971c2', '#a5d8ff'], shapes: ['line'] },
      'Side Cannons': { pieces: 500, gravity: 0, initialVelocityX: 20, confettiSource: { x: 50, y: 50, w: 0, h: 100 }, colors: ['#f03e3e', '#12b886', '#fab005'], shapes: ['square'] },
    };

    useEffect(() => {
        try {
            const configsJson = localStorage.getItem(CONFIGS_STORAGE_KEY);
            const loadedConfigs = configsJson ? JSON.parse(configsJson) : {};
            setSavedConfigs(loadedConfigs);

            const palettesJson = localStorage.getItem(PALETTES_STORAGE_KEY);
            if (palettesJson) setSavedPalettes(JSON.parse(palettesJson));

            const lastConfigName = localStorage.getItem(LAST_CONFIG_KEY);
            if (lastConfigName && loadedConfigs[lastConfigName]) {
                setConfig(prev => ({...prev, ...loadedConfigs[lastConfigName]}));
                setActiveConfigName(lastConfigName);
            }
        } catch (e) { console.error("Failed to load confetti data:", e); }
    }, []);

    const handleTestClick = () => { if (isExploding) return; setIsExploding(true); };
    
    const onConfettiCompleteHandler = () => {
        setIsExploding(false);
    };

    const getDrawShapeFunction = () => {
        if (config.shapes.length === 0) return undefined;
        return (ctx: CanvasRenderingContext2D) => {
            const randomShape = config.shapes[Math.floor(Math.random() * config.shapes.length)];
            const drawFn = drawFunctions[randomShape];
            if (drawFn) drawFn(ctx);
        };
    };
    
    const handleGenerateJson = () => setOutputJson(JSON.stringify(config, null, 2));
    const handleCopyToClipboard = () => { if (!outputJson) return; navigator.clipboard.writeText(outputJson); toast({ title: 'Copied to clipboard!' }); };
    
    const handleAddColor = () => { if (!config.colors.includes(customColor)) { setConfig(prev => ({ ...prev, colors: [...prev.colors, customColor] })); } };
    const handleRemoveColor = (colorToRemove: string) => { setConfig(prev => ({ ...prev, colors: prev.colors.filter(c => c !== colorToRemove) })); };
    const handleLoadPalette = (palette: string[]) => { setConfig(prev => ({...prev, colors: palette})); };
    const handleSavePalette = () => { if (!newPaletteName.trim()) { toast({ title: 'Error', description: 'Please enter a name for the palette.', variant: 'destructive' }); return; } const newPalettes = { ...savedPalettes, [newPaletteName]: config.colors }; setSavedPalettes(newPalettes); localStorage.setItem(PALETTES_STORAGE_KEY, JSON.stringify(newPalettes)); toast({ title: 'Palette Saved!', description: `Saved as "${newPaletteName}".` }); setNewPaletteName(''); };
    const handleDeletePalette = (name: string) => { const newPalettes = { ...savedPalettes }; delete newPalettes[name]; setSavedPalettes(newPalettes); localStorage.setItem(PALETTES_STORAGE_KEY, JSON.stringify(newPalettes)); toast({ title: 'Palette Deleted!', description: `"${name}" has been removed.` }); setDeleteDialog({ open: false, type: null, name: null }); };
    
    const handleSaveConfig = () => { if (!newConfigName.trim()) { toast({ title: 'Error', description: 'Please enter a name for the configuration.', variant: 'destructive' }); return; } const newConfigs = { ...savedConfigs, [newConfigName]: config }; setSavedConfigs(newConfigs); localStorage.setItem(CONFIGS_STORAGE_KEY, JSON.stringify(newConfigs)); setActiveConfigName(newConfigName); localStorage.setItem(LAST_CONFIG_KEY, newConfigName); toast({ title: 'Configuration Saved!', description: `Saved as "${newConfigName}".` }); setNewConfigName(''); };
    const handleLoadConfig = (name: string) => { if (savedConfigs[name]) { setConfig(prev => ({...prev, ...savedConfigs[name]})); setActiveConfigName(name); localStorage.setItem(LAST_CONFIG_KEY, name); toast({ title: 'Configuration Loaded!', description: `"${name}" is now active.` }); } };
    const handleDeleteConfig = (name: string) => { const newConfigs = { ...savedConfigs }; delete newConfigs[name]; setSavedConfigs(newConfigs); localStorage.setItem(CONFIGS_STORAGE_KEY, JSON.stringify(newConfigs)); if (activeConfigName === name) { setActiveConfigName(null); localStorage.removeItem(LAST_CONFIG_KEY); } toast({ title: 'Configuration Deleted!', description: `"${name}" has been removed.` }); setDeleteDialog({ open: false, type: null, name: null }); };
    
    const openDeleteDialog = (type: 'config' | 'palette', name: string) => { setDeleteDialog({ open: true, type, name }); };
    const confirmDelete = () => { if (!deleteDialog.name || !deleteDialog.type) return; if (deleteDialog.type === 'config') { handleDeleteConfig(deleteDialog.name); } else if (deleteDialog.type === 'palette') { handleDeletePalette(deleteDialog.name); } };
    
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-muted/40">
            {isExploding && <Confetti recycle={false} numberOfPieces={config.pieces} gravity={config.gravity} wind={config.wind} initialVelocityX={config.initialVelocityX} initialVelocityY={config.initialVelocityY} colors={config.colors} confettiSource={{ w: config.confettiSource.w, h: config.confettiSource.h, x: width * (config.confettiSource.x / 100), y: height * (config.confettiSource.y / 100) }} drawShape={getDrawShapeFunction()} onConfettiComplete={onConfettiCompleteHandler} />}
             <Card className="w-full max-w-lg shadow-2xl pointer-events-none mb-8">
                <CardHeader className="items-center text-center pb-4"><Trophy className="h-16 w-16 text-amber" /><CardTitle className="text-3xl font-bold">Perfect Score!</CardTitle><CardDescription>Amazing! You answered all questions correctly.</CardDescription></CardHeader>
                <CardContent className="space-y-4"><Card className="bg-muted/50"><CardHeader className="pb-2 pt-4"><CardTitle className="text-xl text-center">Summary</CardTitle></CardHeader><CardContent className="grid grid-cols-2 gap-4 text-center"><div className="flex flex-col items-center justify-center p-2 rounded-lg bg-background"><span className="text-2xl font-bold">30 / 30</span><span className="text-xs text-muted-foreground">Score</span></div><div className="flex flex-col items-center justify-center p-2 rounded-lg bg-background"><span className="text-2xl font-bold">100%</span><span className="text-xs text-muted-foreground">Success Rate</span></div><div className="flex flex-col items-center justify-center p-2 rounded-lg bg-background"><div className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-success"/><span className="text-2xl font-bold">30</span></div><span className="text-xs text-muted-foreground">Correct</span></div><div className="flex flex-col items-center justify-center p-2 rounded-lg bg-background"><div className="flex items-center gap-2"><ShieldX className="h-4 w-4 text-destructive"/><span className="text-2xl font-bold">0</span></div><span className="text-xs text-muted-foreground">Mistakes</span></div><div className="flex flex-col items-center justify-center p-2 rounded-lg bg-background col-span-2"><div className="flex items-center gap-2"><Clock className="h-4 w-4 text-muted-foreground"/><span className="text-2xl font-bold">02:15</span></div><span className="text-xs text-muted-foreground">Total Time</span></div></CardContent></Card></CardContent>
            </Card>

            <Card className="w-full max-w-6xl shadow-2xl">
                 <CardHeader className="p-4 text-center border-b"><div className="flex items-center justify-center gap-4"><Beaker className="h-8 w-8" /><CardTitle className="text-2xl">Confetti Configurator</CardTitle></div>
                    <div className="pt-4"><Button onClick={handleTestClick} disabled={isExploding} className="w-full max-w-xs"><Sparkles className="mr-2 h-4 w-4"/> Test Animation</Button></div>
                 </CardHeader>
                 <CardContent className="p-6 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                    {/* Left Column */}
                    <div className="space-y-6">
                        <div className="space-y-4"><h3 className="text-lg font-semibold text-center flex items-center justify-center gap-2"><SlidersHorizontal className="h-5 w-5"/> Parameters</h3><div><Label htmlFor="amount">Amount: {config.pieces}</Label><Slider id="amount" value={[config.pieces]} onValueChange={(v) => setConfig(p => ({...p, pieces: v[0]}))} min={10} max={1000} step={10} /></div></div>
                        <Separator/>
                        <div className="space-y-4"><h3 className="text-lg font-semibold text-center flex items-center justify-center gap-2"><Wind className="h-5 w-5"/> Physics</h3><div><Label>Gravity: {config.gravity.toFixed(2)}</Label><Slider value={[config.gravity]} onValueChange={(v) => setConfig(p => ({...p, gravity: v[0]}))} min={0} max={1} step={0.05} /></div><div><Label>Wind: {config.wind.toFixed(1)}</Label><Slider value={[config.wind]} onValueChange={(v) => setConfig(p => ({...p, wind: v[0]}))} min={-10} max={10} step={0.5} /></div><div className="grid grid-cols-2 gap-4"><div><Label>Initial Velocity X: {config.initialVelocityX}</Label><Slider value={[config.initialVelocityX]} onValueChange={(v) => setConfig(p => ({...p, initialVelocityX: v[0]}))} min={-30} max={30} step={1} /></div><div><Label>Initial Velocity Y: {config.initialVelocityY}</Label><Slider value={[config.initialVelocityY]} onValueChange={(v) => setConfig(p => ({...p, initialVelocityY: v[0]}))} min={-30} max={30} step={1} /></div></div></div>
                        <Separator/>
                        <div className="space-y-4"><h3 className="text-lg font-semibold text-center flex items-center justify-center gap-2"><MapPin className="h-5 w-5"/> Source Position</h3><div className="grid grid-cols-2 gap-4"><div><Label>X Position: {config.confettiSource.x}%</Label><Slider value={[config.confettiSource.x]} onValueChange={(v) => setConfig(p => ({...p, confettiSource: {...p.confettiSource, x: v[0]}}))} /></div><div><Label>Y Position: {config.confettiSource.y}%</Label><Slider value={[config.confettiSource.y]} onValueChange={(v) => setConfig(p => ({...p, confettiSource: {...p.confettiSource, y: v[0]}}))} /></div></div><div className="grid grid-cols-2 gap-4"><div><Label>Width (w): {config.confettiSource.w}px</Label><Slider value={[config.confettiSource.w]} onValueChange={(v) => setConfig(p => ({...p, confettiSource: {...p.confettiSource, w: v[0]}}))} min={0} max={500} step={5} /></div><div><Label>Height (h): {config.confettiSource.h}px</Label><Slider value={[config.confettiSource.h]} onValueChange={(v) => setConfig(p => ({...p, confettiSource: {...p.confettiSource, h: v[0]}}))} min={0} max={500} step={5} /></div></div></div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-6">
                        <div className="space-y-4"><h3 className="text-lg font-semibold text-center flex items-center justify-center gap-2"><Sparkles className="h-5 w-5"/> Presets</h3><div className="flex justify-center gap-2 flex-wrap">{Object.keys(presets).map(name => <Button key={name} variant="outline" size="sm" onClick={() => setConfig(prev => ({...prev, ...presets[name]}))}>{name}</Button>)}</div></div>
                        <Separator/>
                        <div className="space-y-4"><h3 className="text-lg font-semibold text-center flex items-center justify-center gap-2"><Shapes className="h-5 w-5"/> Shapes</h3><div className="flex justify-center gap-2 flex-wrap">{(Object.keys(drawFunctions) as ConfettiShape[]).map(shape => <div key={shape} className="flex items-center space-x-2"><Checkbox id={shape} checked={config.shapes.includes(shape)} onCheckedChange={(checked) => setConfig(p => ({...p, shapes: checked ? [...p.shapes, shape] : p.shapes.filter(s => s !== shape)}))} /><Label htmlFor={shape} className="text-sm font-medium capitalize">{shape}</Label></div>)}</div></div>
                        <Separator/>
                        <div className="space-y-4"><h3 className="text-lg font-semibold text-center flex items-center justify-center gap-2"><Palette className="h-5 w-5"/> Colors</h3><div className="flex justify-center gap-2 flex-wrap">{Object.entries(presetPalettes).map(([name]) => (<Button key={name} variant="outline" size="sm" onClick={() => handleLoadPalette(presetPalettes[name])}>{name}</Button>))}</div>{Object.keys(savedPalettes).length > 0 && <div className="flex justify-center gap-2 flex-wrap">{Object.entries(savedPalettes).map(([name, colors]) => (<div key={name} className="relative group"><Button variant="outline" size="sm" onClick={() => handleLoadPalette(colors)}>{name}</Button><button onClick={() => openDeleteDialog('palette', name)} className="absolute -top-1 -right-1 flex items-center justify-center bg-destructive rounded-full h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity"><Trash2 className="h-2.5 w-2.5 text-destructive-foreground"/></button></div>))}</div>}<div className="flex flex-wrap items-center justify-center gap-4"><Popover><PopoverTrigger asChild><div className="w-10 h-10 rounded-full border-2 cursor-pointer" style={{ backgroundColor: customColor }}/></PopoverTrigger><PopoverContent className="w-auto"><HexColorPicker color={customColor} onChange={setCustomColor} /></PopoverContent></Popover><Button size="sm" onClick={handleAddColor}><PlusCircle className="mr-2 h-4 w-4" /> Add Custom Color</Button></div><div className="flex flex-wrap gap-3 justify-center min-h-[36px] rounded-md border p-2">{config.colors.map(color => (<div key={color} className="relative group"><div style={{backgroundColor: color}} className="h-7 w-7 rounded-full border" /><button onClick={() => handleRemoveColor(color)} className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"><Trash2 className="h-4 w-4 text-white"/></button></div>))}</div><div className="flex gap-2"><Input placeholder="Custom palette name..." value={newPaletteName} onChange={(e) => setNewPaletteName(e.target.value)} /><Button onClick={handleSavePalette}><Save className="mr-2 h-4 w-4"/>Save</Button></div></div>
                        <Separator/>
                        <div className="space-y-4"><h3 className="text-lg font-semibold text-center flex items-center justify-center gap-2"><FolderOpen className="h-5 w-5"/>Saved Configurations</h3><div className="space-y-2">{Object.keys(savedConfigs).length === 0 ? <p className="text-sm text-center text-muted-foreground">No saved configurations.</p> : <div className="max-h-24 overflow-y-auto space-y-2 pr-2">{Object.keys(savedConfigs).map(name => (<div key={name} className={cn("flex items-center justify-between p-2 rounded-md border", activeConfigName === name ? "bg-accent border-primary" : "bg-muted/30")}><span className="font-semibold">{name}</span><div className="flex gap-1"><Button size="sm" variant="ghost" onClick={() => handleLoadConfig(name)}><Upload className="h-4 w-4"/></Button><Button size="sm" variant="ghost" onClick={() => openDeleteDialog('config', name)}><Trash2 className="h-4 w-4 text-destructive"/></Button></div></div>))}</div>}</div><div className="flex gap-2"><Input placeholder="New configuration name..." value={newConfigName} onChange={(e) => setNewConfigName(e.target.value)} /><Button onClick={handleSaveConfig}><Save className="mr-2 h-4 w-4"/>Save</Button></div></div>
                        <Separator/>
                        <div className="space-y-4"><h3 className="text-lg font-semibold text-center flex items-center justify-center gap-2"><FileDown className="h-5 w-5" /> Generate & Export</h3><Button className="w-full" onClick={handleGenerateJson}>Generate JSON</Button>{outputJson && (<div className="relative"><Textarea value={outputJson} readOnly className="h-24 font-mono text-xs"/><Button size="icon" variant="ghost" className="absolute top-2 right-2 h-7 w-7" onClick={handleCopyToClipboard}><ClipboardCopy className="h-4 w-4" /></Button></div>)}</div>
                    </div>
                 </CardContent>
                 <CardFooter className="flex justify-center p-6 border-t">
                    <Link href="/listening" passHref><Button variant="outline"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Listening</Button></Link>
                 </CardFooter>
            </Card>

            <AlertDialog open={deleteDialog.open} onOpenChange={(open) => setDeleteDialog({ ...deleteDialog, open })}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                            This will permanently delete the {deleteDialog.type} named "{deleteDialog.name}". This action cannot be undone.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel onClick={() => setDeleteDialog({ open: false, type: null, name: null })}>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={confirmDelete} className="bg-destructive hover:bg-destructive/90">Delete</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </main>
    );
}
