import { useEffect, useState } from "react";
import { getApi } from "../../api/api";
import { RichText } from "@payloadcms/richtext-lexical/react";
import type { About } from "../interfaces/About.ts";
import { getImagePath } from "../utils/utils.ts";

export default function About() {
  const [aboutDesc, setAboutDesc] = useState<About | undefined>(undefined);

  useEffect(() => {
    getApi("globals/about").then((res) => setAboutDesc(res));
  }, [aboutDesc?.id]);

  if (aboutDesc) {
    return (
      <div className="md:flex md:justify-between">
        <div className="pr-4 mb-4">
          {aboutDesc !== undefined ? <RichText data={aboutDesc.text} /> : ""}
        </div>
        <img
          id="about-img"
          className="opacity-0 transition-opacity duration-500 w-full"
          src={getImagePath(aboutDesc.image.url)}
          onLoad={() => {
            const element = document.querySelector("#about-img");
            element?.classList.remove("opacity-0");
            element?.classList.add("opacity-100");
          }}
        ></img>
      </div>
    );
  }

  return <></>;
}
