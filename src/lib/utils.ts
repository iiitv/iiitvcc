import { type ClassValue, clsx } from "clsx";
import sharp from "sharp";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getPublicUrl = (path: string) => {
  return `https://${process.env.NEXT_PUBLIC_PROJECT_ID}.supabase.co/storage/v1/object/public/${process.env.NEXT_PUBLIC_BUCKET}${path}`;
};
