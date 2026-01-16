import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { packageLicenses } from "@/lib/licenses";

export default function LicensesPage() {
    return (
        <Card className="w-full max-w-2xl shadow-2xl">
            <CardHeader>
                <CardTitle className="text-center text-3xl">Third-Party Licenses</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 max-h-[60vh] overflow-y-auto p-6">
                <p className="text-muted-foreground text-center pb-4">
                    This application is built using the following open-source software. We are grateful to the developers and contributors for their work.
                </p>
                <Accordion type="single" collapsible className="w-full">
                    {packageLicenses.map((pkg) => (
                        <AccordionItem value={pkg.name} key={pkg.name}>
                            <AccordionTrigger className="hover:no-underline">
                                <div className="flex justify-between w-full pr-4">
                                    <span className="font-semibold">{pkg.name}</span>
                                    <span className="text-sm text-muted-foreground">{pkg.license}</span>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent>
                                <div className="space-y-3">
                                    <p className="text-xs text-muted-foreground">
                                        Version: {pkg.version} | <a href={pkg.url} target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">Repository</a>
                                    </p>
                                    <pre className="text-xs whitespace-pre-wrap font-code bg-muted p-3 rounded-md max-h-48 overflow-y-auto">
                                        {pkg.licenseText}
                                    </pre>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </CardContent>
            <CardFooter className="flex justify-center p-6 border-t">
                <Link href="/settings/about" passHref>
                    <Button variant="outline">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to About
                    </Button>
                </Link>
            </CardFooter>
        </Card>
    );
}
