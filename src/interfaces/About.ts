import type { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";
import type { Media } from "./Illustrations";

export interface About {
  id: string;
  text: SerializedEditorState;
  image: Media;
}
