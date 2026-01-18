import { ArrowLeft, AudioLines, CaseUpper } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';

export default function PhoneticsItPage() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-4">
            <Card className="w-full max-w-md shadow-2xl">
                <CardHeader className="text-center">
                    <div className="flex items-center justify-center gap-4">
                        <AudioLines className="h-8 w-8" />
                        <CardTitle className="text-3xl">Fonetica</CardTitle>
                    </div>
                </CardHeader>
                <CardContent className="p-6">
                     <Link href="/learning/it/phonetics/alphabet" passHref>
                        <Button variant="outline" className="w-full h-24 flex-col gap-2 text-lg border-2 border-primary">
                            <CaseUpper className="h-12 w-12 text-deep-purple" />
                            Alfabeto
                        </Button>
                    </Link>
                </CardContent>
                <CardFooter className="flex justify-center p-4">
                    <Link href="/learning/it" passHref>
                        <Button variant="outline">
                            <ArrowLeft className="mr-2 h-4 w-4" /> Torna ad Apprendimento
                        </Button>
                    </Link>
                </CardFooter>
            </Card>
        </main>
    );
}
