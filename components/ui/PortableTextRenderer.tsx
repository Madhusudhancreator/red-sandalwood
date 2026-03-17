import { PortableText, type PortableTextComponents, type PortableTextBlock } from "@portabletext/react";
import Image from "next/image";
import { urlFor } from "@/lib/sanity/image";

const components: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset) return null;
      return (
        <figure className="my-6">
          <Image
            src={urlFor(value).width(800).url()}
            alt={value.alt ?? ""}
            width={800}
            height={450}
            className="rounded-lg w-full h-auto"
          />
          {value.caption && (
            <figcaption className="text-center text-sm text-gray-500 mt-2">{value.caption}</figcaption>
          )}
        </figure>
      );
    },
  },
  block: {
    h2: ({ children }) => (
      <h2 className="text-2xl font-bold text-forest-800 mt-8 mb-4">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-semibold text-forest-700 mt-6 mb-3">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-lg font-semibold text-forest-600 mt-4 mb-2">{children}</h4>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-sandalwood-500 pl-4 italic text-gray-600 my-4">
        {children}
      </blockquote>
    ),
    normal: ({ children }) => <p className="text-gray-700 leading-relaxed mb-4">{children}</p>,
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc list-inside space-y-1 mb-4 text-gray-700">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal list-inside space-y-1 mb-4 text-gray-700">{children}</ol>
    ),
  },
  marks: {
    link: ({ children, value }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sandalwood-600 underline hover:text-sandalwood-800"
      >
        {children}
      </a>
    ),
    strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
  },
};

export function PortableTextRenderer({ body }: { body: PortableTextBlock[] }) {
  if (!body) return null;
  return (
    <div className="prose-custom max-w-none">
      <PortableText value={body} components={components} />
    </div>
  );
}
