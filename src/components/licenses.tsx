
"use client";

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
import { useState, useEffect } from "react";
import { getLanguage, type Language } from "@/lib/storage";


const uiTexts = {
    title: { en: 'Third-Party Licenses', fr: 'Licences Tierces', de: 'Drittanbieter-Lizenzen', it: 'Licenze di Terze Parti', es: 'Licencias de Terceros' },
    description: {
        en: 'This application is built using the following open-source software. We are grateful to the developers and contributors for their work.',
        fr: 'Cette application est construite avec les logiciels open-source suivants. Nous sommes reconnaissants envers les développeurs et contributeurs pour leur travail.',
        de: 'Diese Anwendung wurde mit der folgenden Open-Source-Software erstellt. Wir sind den Entwicklern und Mitwirkenden für ihre Arbeit dankbar.',
        it: 'Questa applicazione è costruita utilizzando il seguente software open-source. Siamo grati agli sviluppatori e ai contributori per il loro lavoro.',
        es: 'Esta aplicación se ha creado con el siguiente software de código abierto. Agradecemos a los desarrolladores y colaboradores por su trabajo.'
    },
    version: { en: 'Version', fr: 'Version', de: 'Version', it: 'Versione', es: 'Versión' },
    repository: { en: 'Repository', fr: 'Dépôt', de: 'Repository', it: 'Repository', es: 'Repositorio' },
    back: { en: 'Back to About', fr: 'Retour à À propos', de: 'Zurück zu Über', it: 'Torna a Informazioni', es: 'Volver a Acerca de' },
};


export default function LicensesPage() {
    const [language, setLanguage] = useState<Language>('en');

    useEffect(() => {
        const handleLanguageChange = () => {
            setLanguage(getLanguage());
        };
        handleLanguageChange();
        window.addEventListener('language-changed', handleLanguageChange);
        return () => {
            window.removeEventListener('language-changed', handleLanguageChange);
        };
    }, []);

    const getUIText = (key: keyof typeof uiTexts) => {
        return uiTexts[key][language] || uiTexts[key]['en'];
    };

    return (
        <Card className="w-full max-w-2xl shadow-2xl">
            <CardHeader>
                <CardTitle className="text-center text-3xl">{getUIText('title')}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 max-h-[60vh] overflow-y-auto p-6">
                <p className="text-muted-foreground text-center pb-4">
                    {getUIText('description')}
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
                                        {getUIText('version')}: {pkg.version} | <a href={pkg.url} target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">{getUIText('repository')}</a>
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
                        <ArrowLeft className="mr-2 h-4 w-4" /> {getUIText('back')}
                    </Button>
                </Link>
            </CardFooter>
        </Card>
    );
}
