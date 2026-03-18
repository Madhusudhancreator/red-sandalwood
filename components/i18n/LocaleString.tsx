"use client";

import React from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

interface LocaleStringValue {
  en?: string;
  te?: string;
}

interface LocaleStringProps {
  value: LocaleStringValue | null | undefined;
  tag?: keyof React.JSX.IntrinsicElements;
  className?: string;
  fallback?: string;
}

export function LocaleString({ value, tag: Tag = "span", className, fallback = "" }: LocaleStringProps) {
  const { lang } = useLanguage();
  const text = value?.[lang] ?? value?.en ?? fallback;
  return <Tag className={className}>{text}</Tag>;
}
