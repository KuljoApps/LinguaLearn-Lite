"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

interface RateAppDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function RateAppDialog({ open, onOpenChange }: RateAppDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md [&>button]:hidden">
        <DialogHeader className="items-center text-center space-y-4">
          <Star className="h-16 w-16 text-amber fill-amber" />
          <DialogTitle className="text-2xl font-bold">
            Podoba Ci się apka?
          </DialogTitle>
          <DialogDescription className="text-center pt-2">
            Jeśli tak, to super! Twoja opinia jest dla nas jak paliwo rakietowe. Jeśli nie... cóż, udawajmy, że tak. 😉 Pomóż nam wzlecieć wyżej!
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex-col sm:flex-row sm:justify-center gap-2 pt-4">
            <Button type="button" size="lg" onClick={() => onOpenChange(false)}>
              Oceń w sklepie
            </Button>
            <Button type="button" variant="secondary" onClick={() => onOpenChange(false)}>
              Może później
            </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
