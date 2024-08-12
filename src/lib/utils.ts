import { type ClassValue, clsx } from "clsx";
import sharp from "sharp";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getPublicUrl = (path: string) => {
  return `https://${process.env.PROJECT_ID}.supabase.co/storage/v1/object/public/${process.env.BUCKET}${path}`;
};
