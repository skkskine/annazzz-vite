import type { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";

interface PayloadArtifact {
  id: string;
  slug: string;
}

export interface Media {
  id: string;
  image: {
    id: string;
    url: string;
    alt: string;
  };
}

export interface Illustration extends PayloadArtifact {
  name: string;
  category: number;
  year: string;
  images: Media[];
  richDesc: SerializedEditorState;
}
