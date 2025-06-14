// componente de UI placeholder
// components/ui/button.jsx
"use client";

import { cn } from "@/lib/utils";

export function Button({ className, variant = "default", ...props }) {
  const base = "inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-medium shadow-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
  const variants = {
    default: "bg-indigo-600 text-white hover:bg-indigo-700",
    outline: "border border-gray-300 text-gray-800 hover:bg-gray-100 dark:text-white dark:border-white/20 dark:hover:bg-white/10"
  };
  return <button className={cn(base, variants[variant], className)} {...props} />;
}"

// components/ui/card.jsx
"use client";

export function Card({ className = "", ...props }) {
  return <div className={`rounded-2xl border bg-white dark:bg-gray-800 ${className}`} {...props} />;
}

export function CardContent({ className = "", ...props }) {
  return <div className={`p-4 ${className}`} {...props} />;
}"

// components/ui/slider.jsx
"use client";

import * as React from "react";

export function Slider({ value, onValueChange, min, max, step }) {
  return (
    <input
      type="range"
      min={min}
      max={max}
      step={step}
      value={value[0]}
      onChange={(e) => onValueChange([parseInt(e.target.value)])}
      className="w-full mt-2 appearance-none bg-transparent [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-runnable-track]:bg-gray-300 dark:[&::-webkit-slider-runnable-track]:bg-gray-600 h-2 rounded"
    />
  );
}
