"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";
import { PortableTextRenderer } from "@/components/ui/PortableTextRenderer";
import type { PortableTextBlock } from "@portabletext/react";

interface LocaleBlockValue {
  en?: PortableTextBlock[];
  te?: PortableTextBlock[];
}

interface LocaleBlockProps {
  value: LocaleBlockValue | null | undefined;
}

export function LocaleBlock({ value }: LocaleBlockProps) {
  const { lang } = useLanguage();
  const blocks = value?.[lang] ?? value?.en;
  if (!blocks) return null;
  return <PortableTextRenderer body={blocks} />;
}
