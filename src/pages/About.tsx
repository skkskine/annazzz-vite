import { useEffect, useState } from "react";
import { getApi } from "../../api/api";
import { RichText } from "@payloadcms/richtext-lexical/react";
import type { About } from "../interfaces/About.ts";

export default function About() {
  const [aboutDesc, setAboutDesc] = useState<About | undefined>(undefined);

  useEffect(() => {
    getApi("globals/about").then((res) => setAboutDesc(res));
  }, [aboutDesc?.id]);

  return (
    <>{aboutDesc !== undefined ? <RichText data={aboutDesc.text} /> : ""}</>
  );
}
