import { JsonLd } from "./JsonLd";
import { siteConfig } from "@/lib/utils";

interface BreadcrumbSchemaProps {
  items: { name: string; path: string }[];
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.path}`,
    })),
  };

  return <JsonLd data={schema} />;
}
