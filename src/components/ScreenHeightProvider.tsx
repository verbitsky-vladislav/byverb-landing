'use client';

import { useScreenHeight } from '../hooks/useScreenHeight';

export default function ScreenHeightProvider({ children }: { children: React.ReactNode }) {
  useScreenHeight();
  
  return <>{children}</>;
} 