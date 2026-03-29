import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getAccessToken() {
  return document.cookie
    .split("; ")
    .find((row) => row.startsWith("@pitang/accessToken="))
    ?.split("=")[1];
  }