'use client'
import { usePathname } from "next/navigation";
export function useCurrentRoute() {
  const path = usePathname();
  return path === '/';
}



