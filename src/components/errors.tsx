import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const commonErrors = [
    { id: 1, word: 'Environment', userAnswer: 'Miasto', correctAnswer: 'Środowisko', quiz: 'English - Polish' },
    { id: 2, word: 'Opportunity', userAnswer: 'Problem', correctAnswer: 'Okazja', quiz: 'English - Polish' },
    { id: 3, word: 'Wyrafinowany', userAnswer: 'Simple', correctAnswer: 'Sophisticated', quiz: 'Polish - English' },
    { id: 4, word: 'Odporny', userAnswer: 'Weak', correctAnswer: 'Resilient', quiz: 'Polish - English' },
    { id: 5, word: 'Accomplish', userAnswer: 'Ponieść porażkę', correctAnswer: 'Osiągnąć', quiz: 'English - Polish' },
];

export default function ErrorsPage() {
    return (
        <Card className="w-full max-w-lg shadow-2xl">
            <CardHeader>
                <CardTitle className="text-center text-3xl">Common Errors</CardTitle>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Word</TableHead>
                            <TableHead>Your Answer</TableHead>
                            <TableHead>Correct Answer</TableHead>
                            <TableHead>Quiz</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {commonErrors.map((error) => (
                            <TableRow key={error.id}>
                                <TableCell className="font-medium">{error.word}</TableCell>
                                <TableCell className="text-destructive">{error.userAnswer}</TableCell>
                                <TableCell className="text-success">{error.correctAnswer}</TableCell>
                                <TableCell>{error.quiz}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
            <CardFooter className="flex justify-center pt-6">
                <Link href="/" passHref>
                    <Button variant="outline">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
                    </Button>
                </Link>
            </CardFooter>
        </Card>
    );
}
