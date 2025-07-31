import type { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";

export interface About {
  id: string;
  text: SerializedEditorState;
  image: {
    id: string;
    url: string;
    alt: string;
  };
}
