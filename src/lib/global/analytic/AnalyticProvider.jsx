'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import * as gtag from '@/lib/global/ga/gtag';

export default function AnalyticsProvider() {
	const pathname = usePathname();

	useEffect(() => {
		gtag.pageview(pathname);
	}, [pathname]);

	return null;
}
