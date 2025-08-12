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
      <div className="md:grid md:grid-cols-2">
        <img
          id="about-img"
          className="opacity-0 transition-opacity duration-500 w-full"
          src={getImagePath(aboutDesc.image.url)}
          alt={aboutDesc.image.alt}
          onLoad={() => showImg()}
        ></img>
        <div className="md:pl-4 mt-4 md:mt-0">
          <RichText data={aboutDesc.text} />
        </div>
      </div>
    );
  }

  return <></>;
}

function showImg() {
  const element = document.querySelector("#about-img");
  element?.classList.remove("opacity-0");
  element?.classList.add("opacity-100");
}
