import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function SettingsPage() {
    return (
        <Card className="w-full max-w-md shadow-2xl">
            <CardHeader>
                <CardTitle className="text-center text-3xl">Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                    <Label htmlFor="sounds-switch" className="text-lg">Sounds</Label>
                    <Switch id="sounds-switch" />
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                    <Label htmlFor="vibrations-switch" className="text-lg">Vibrations</Label>
                    <Switch id="vibrations-switch" />
                </div>
                <Separator />
                <div>
                    <h3 className="text-lg font-semibold mb-2">About</h3>
                    <p className="text-sm text-muted-foreground">
                        LinguaLearn is an app designed to help you learn new languages in a fun and interactive way.
                        <br />
                        Version 1.0.0
                    </p>
                </div>
            </CardContent>
            <CardFooter className="flex justify-center">
                <Link href="/" passHref>
                    <Button variant="outline">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
                    </Button>
                </Link>
            </CardFooter>
        </Card>
    );
}
