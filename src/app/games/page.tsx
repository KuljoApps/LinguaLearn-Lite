"use client";

import { 
    ArrowLeft, Gamepad2, Swords, Puzzle, BrainCircuit,
    Rocket, Star, Atom, Flame, Droplets, Wind, Mountain, Trees, Sun, Castle, Crown, Shield,
    BookOpen, Pencil, Lightbulb, Heart, Smile, Users, Ship, Anchor, Map, Code,
    Terminal, GitBranch, Music, Film, Camera
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardFooter, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export default function GamesPage() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-4">
            <Card className="w-full max-w-md shadow-2xl">
                <CardHeader className="text-center p-6">
                    <div className="flex items-center justify-center gap-4">
                        <Gamepad2 className="h-8 w-8" />
                        <h1 className="text-3xl font-bold tracking-tight">Design Showcase</h1>
                    </div>
                     <p className="text-muted-foreground pt-2">Here is the chosen design applied to various themes.</p>
                </CardHeader>
                <CardContent className="flex flex-col space-y-6 p-6 pt-0 pb-4 max-h-[70vh] overflow-y-auto">
                    
                    {/* Proposal 1: Combat */}
                    <div>
                        <h2 className="text-lg font-semibold mb-2 text-center">Proposal 1: Combat</h2>
                        <div className="grid grid-cols-2 gap-4">
                            <Button className="w-full h-28 flex-col gap-2 text-lg text-white bg-gradient-to-br from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 hover:shadow-lg hover:shadow-indigo-500/50 transition-all pointer-events-none">
                                <Swords className="h-12 w-12" />
                                <span>Duel</span>
                            </Button>
                             <Button className="w-full h-28 flex-col gap-2 text-lg text-white bg-gradient-to-br from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 hover:shadow-lg hover:shadow-indigo-500/50 transition-all pointer-events-none">
                                <Puzzle className="h-12 w-12" />
                                <span>Puzzle</span>
                            </Button>
                        </div>
                        <div className="mt-4 flex flex-col space-y-2">
                             <Button className="w-full h-12 text-lg text-white bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 hover:shadow-md hover:shadow-indigo-500/40 transition-all pointer-events-none">
                                <BrainCircuit className="h-5 w-5 mr-2" />
                                <span>Logic Game</span>
                            </Button>
                        </div>
                    </div>

                    <Separator />
                    
                    {/* Proposal 2: Sci-Fi */}
                    <div>
                        <h2 className="text-lg font-semibold mb-2 text-center">Proposal 2: Sci-Fi</h2>
                        <div className="grid grid-cols-2 gap-4">
                            <Button className="w-full h-28 flex-col gap-2 text-lg text-white bg-gradient-to-br from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 hover:shadow-lg hover:shadow-indigo-500/50 transition-all pointer-events-none">
                                <Rocket className="h-12 w-12" />
                                <span>Space</span>
                            </Button>
                             <Button className="w-full h-28 flex-col gap-2 text-lg text-white bg-gradient-to-br from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 hover:shadow-lg hover:shadow-indigo-500/50 transition-all pointer-events-none">
                                <Star className="h-12 w-12" />
                                <span>Galaxy</span>
                            </Button>
                        </div>
                        <div className="mt-4 flex flex-col space-y-2">
                             <Button className="w-full h-12 text-lg text-white bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 hover:shadow-md hover:shadow-indigo-500/40 transition-all pointer-events-none">
                                <Atom className="h-5 w-5 mr-2" />
                                <span>Quantum Leap</span>
                            </Button>
                        </div>
                    </div>

                    <Separator />

                    {/* Proposal 3: Elements */}
                    <div>
                        <h2 className="text-lg font-semibold mb-2 text-center">Proposal 3: Elements</h2>
                        <div className="grid grid-cols-2 gap-4">
                            <Button className="w-full h-28 flex-col gap-2 text-lg text-white bg-gradient-to-br from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 hover:shadow-lg hover:shadow-indigo-500/50 transition-all pointer-events-none">
                                <Flame className="h-12 w-12" />
                                <span>Fire</span>
                            </Button>
                             <Button className="w-full h-28 flex-col gap-2 text-lg text-white bg-gradient-to-br from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 hover:shadow-lg hover:shadow-indigo-500/50 transition-all pointer-events-none">
                                <Droplets className="h-12 w-12" />
                                <span>Water</span>
                            </Button>
                        </div>
                        <div className="mt-4 flex flex-col space-y-2">
                             <Button className="w-full h-12 text-lg text-white bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 hover:shadow-md hover:shadow-indigo-500/40 transition-all pointer-events-none">
                                <Wind className="h-5 w-5 mr-2" />
                                <span>Elemental</span>
                            </Button>
                        </div>
                    </div>

                    <Separator />

                    {/* Proposal 4: Adventure */}
                    <div>
                        <h2 className="text-lg font-semibold mb-2 text-center">Proposal 4: Adventure</h2>
                        <div className="grid grid-cols-2 gap-4">
                            <Button className="w-full h-28 flex-col gap-2 text-lg text-white bg-gradient-to-br from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 hover:shadow-lg hover:shadow-indigo-500/50 transition-all pointer-events-none">
                                <Mountain className="h-12 w-12" />
                                <span>Explore</span>
                            </Button>
                             <Button className="w-full h-28 flex-col gap-2 text-lg text-white bg-gradient-to-br from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 hover:shadow-lg hover:shadow-indigo-500/50 transition-all pointer-events-none">
                                <Trees className="h-12 w-12" />
                                <span>Forest</span>
                            </Button>
                        </div>
                        <div className="mt-4 flex flex-col space-y-2">
                             <Button className="w-full h-12 text-lg text-white bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 hover:shadow-md hover:shadow-indigo-500/40 transition-all pointer-events-none">
                                <Sun className="h-5 w-5 mr-2" />
                                <span>Sunrise</span>
                            </Button>
                        </div>
                    </div>

                    <Separator />

                    {/* Proposal 5: Fantasy */}
                    <div>
                        <h2 className="text-lg font-semibold mb-2 text-center">Proposal 5: Fantasy</h2>
                        <div className="grid grid-cols-2 gap-4">
                            <Button className="w-full h-28 flex-col gap-2 text-lg text-white bg-gradient-to-br from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 hover:shadow-lg hover:shadow-indigo-500/50 transition-all pointer-events-none">
                                <Castle className="h-12 w-12" />
                                <span>Kingdom</span>
                            </Button>
                             <Button className="w-full h-28 flex-col gap-2 text-lg text-white bg-gradient-to-br from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 hover:shadow-lg hover:shadow-indigo-500/50 transition-all pointer-events-none">
                                <Crown className="h-12 w-12" />
                                <span>Royalty</span>
                            </Button>
                        </div>
                        <div className="mt-4 flex flex-col space-y-2">
                             <Button className="w-full h-12 text-lg text-white bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 hover:shadow-md hover:shadow-indigo-500/40 transition-all pointer-events-none">
                                <Shield className="h-5 w-5 mr-2" />
                                <span>Defense</span>
                            </Button>
                        </div>
                    </div>

                    <Separator />

                    {/* Proposal 6: Knowledge */}
                    <div>
                        <h2 className="text-lg font-semibold mb-2 text-center">Proposal 6: Knowledge</h2>
                        <div className="grid grid-cols-2 gap-4">
                            <Button className="w-full h-28 flex-col gap-2 text-lg text-white bg-gradient-to-br from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 hover:shadow-lg hover:shadow-indigo-500/50 transition-all pointer-events-none">
                                <BookOpen className="h-12 w-12" />
                                <span>Story</span>
                            </Button>
                             <Button className="w-full h-28 flex-col gap-2 text-lg text-white bg-gradient-to-br from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 hover:shadow-lg hover:shadow-indigo-500/50 transition-all pointer-events-none">
                                <Pencil className="h-12 w-12" />
                                <span>Create</span>
                            </Button>
                        </div>
                        <div className="mt-4 flex flex-col space-y-2">
                             <Button className="w-full h-12 text-lg text-white bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 hover:shadow-md hover:shadow-indigo-500/40 transition-all pointer-events-none">
                                <Lightbulb className="h-5 w-5 mr-2" />
                                <span>Idea</span>
                            </Button>
                        </div>
                    </div>
                    
                    <Separator />

                    {/* Proposal 7: Social */}
                    <div>
                        <h2 className="text-lg font-semibold mb-2 text-center">Proposal 7: Social</h2>
                        <div className="grid grid-cols-2 gap-4">
                            <Button className="w-full h-28 flex-col gap-2 text-lg text-white bg-gradient-to-br from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 hover:shadow-lg hover:shadow-indigo-500/50 transition-all pointer-events-none">
                                <Heart className="h-12 w-12" />
                                <span>Love</span>
                            </Button>
                             <Button className="w-full h-28 flex-col gap-2 text-lg text-white bg-gradient-to-br from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 hover:shadow-lg hover:shadow-indigo-500/50 transition-all pointer-events-none">
                                <Smile className="h-12 w-12" />
                                <span>Joy</span>
                            </Button>
                        </div>
                        <div className="mt-4 flex flex-col space-y-2">
                             <Button className="w-full h-12 text-lg text-white bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 hover:shadow-md hover:shadow-indigo-500/40 transition-all pointer-events-none">
                                <Users className="h-5 w-5 mr-2" />
                                <span>Community</span>
                            </Button>
                        </div>
                    </div>

                    <Separator />

                    {/* Proposal 8: Nautical */}
                    <div>
                        <h2 className="text-lg font-semibold mb-2 text-center">Proposal 8: Nautical</h2>
                        <div className="grid grid-cols-2 gap-4">
                            <Button className="w-full h-28 flex-col gap-2 text-lg text-white bg-gradient-to-br from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 hover:shadow-lg hover:shadow-indigo-500/50 transition-all pointer-events-none">
                                <Ship className="h-12 w-12" />
                                <span>Voyage</span>
                            </Button>
                             <Button className="w-full h-28 flex-col gap-2 text-lg text-white bg-gradient-to-br from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 hover:shadow-lg hover:shadow-indigo-500/50 transition-all pointer-events-none">
                                <Anchor className="h-12 w-12" />
                                <span>Harbor</span>
                            </Button>
                        </div>
                        <div className="mt-4 flex flex-col space-y-2">
                             <Button className="w-full h-12 text-lg text-white bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 hover:shadow-md hover:shadow-indigo-500/40 transition-all pointer-events-none">
                                <Map className="h-5 w-5 mr-2" />
                                <span>Exploration</span>
                            </Button>
                        </div>
                    </div>

                    <Separator />

                    {/* Proposal 9: Tech */}
                    <div>
                        <h2 className="text-lg font-semibold mb-2 text-center">Proposal 9: Tech</h2>
                        <div className="grid grid-cols-2 gap-4">
                            <Button className="w-full h-28 flex-col gap-2 text-lg text-white bg-gradient-to-br from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 hover:shadow-lg hover:shadow-indigo-500/50 transition-all pointer-events-none">
                                <Code className="h-12 w-12" />
                                <span>Code</span>
                            </Button>
                             <Button className="w-full h-28 flex-col gap-2 text-lg text-white bg-gradient-to-br from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 hover:shadow-lg hover:shadow-indigo-500/50 transition-all pointer-events-none">
                                <Terminal className="h-12 w-12" />
                                <span>Shell</span>
                            </Button>
                        </div>
                        <div className="mt-4 flex flex-col space-y-2">
                             <Button className="w-full h-12 text-lg text-white bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 hover:shadow-md hover:shadow-indigo-500/40 transition-all pointer-events-none">
                                <GitBranch className="h-5 w-5 mr-2" />
                                <span>Version Control</span>
                            </Button>
                        </div>
                    </div>

                    <Separator />

                    {/* Proposal 10: Media */}
                    <div>
                        <h2 className="text-lg font-semibold mb-2 text-center">Proposal 10: Media</h2>
                        <div className="grid grid-cols-2 gap-4">
                            <Button className="w-full h-28 flex-col gap-2 text-lg text-white bg-gradient-to-br from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 hover:shadow-lg hover:shadow-indigo-500/50 transition-all pointer-events-none">
                                <Music className="h-12 w-12" />
                                <span>Rhythm</span>
                            </Button>
                             <Button className="w-full h-28 flex-col gap-2 text-lg text-white bg-gradient-to-br from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 hover:shadow-lg hover:shadow-indigo-500/50 transition-all pointer-events-none">
                                <Film className="h-12 w-12" />
                                <span>Cinema</span>
                            </Button>
                        </div>
                        <div className="mt-4 flex flex-col space-y-2">
                             <Button className="w-full h-12 text-lg text-white bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 hover:shadow-md hover:shadow-indigo-500/40 transition-all pointer-events-none">
                                <Camera className="h-5 w-5 mr-2" />
                                <span>Snapshot</span>
                            </Button>
                        </div>
                    </div>


                </CardContent>
                <CardFooter className="flex justify-center p-6">
                    <Link href="/" passHref>
                        <Button variant="outline">
                            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
                        </Button>
                    </Link>
                </CardFooter>
            </Card>
        </main>
    );
}
