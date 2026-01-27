'use client';

// This file is no longer in use and can be deleted.
// The logic has been moved to src/app/fill-the-gap/gap-words/page.tsx
// to create a single-page experience.

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function DeprecatedGapWordPage() {
    const router = useRouter();
    useEffect(() => {
        router.replace('/fill-the-gap/gap-words');
    }, [router]);
    
    return null;
}
