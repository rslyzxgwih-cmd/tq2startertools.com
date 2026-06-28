import type { Metadata } from "next";
import type { PageDefinition } from "@/components/page-shell";

export function metadataFor(page: PageDefinition): Metadata {
  return {
    title: page.title,
    description: page.description
  };
}
