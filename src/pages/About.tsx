import { getApi } from "../../api/api";
import { RichText } from "@payloadcms/richtext-lexical/react";
import type { About } from "../interfaces/About.ts";
import { getImagePath } from "../utils/utils.ts";
import { useQuery } from "@tanstack/react-query";
import Loader from "../components/Loader.tsx";

export default function About() {
  const { data: aboutDesc, isLoading } = useQuery({
    queryKey: ["about"],
    queryFn: () => getApi("globals/about"),
  });

  if (isLoading) {
    return <Loader></Loader>;
  }

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

function showImg() {
  const element = document.querySelector("#about-img");
  element?.classList.remove("opacity-0");
  element?.classList.add("opacity-100");
}
