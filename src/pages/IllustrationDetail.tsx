import { stringify } from "qs-esm";
import { useEffect, useState } from "react";
import { getApi } from "../../api/api";
import type { Illustration } from "../interfaces/Illustrations.tsx";
import { RichText } from "@payloadcms/richtext-lexical/react";

export default function IllustrationDetail() {
  const imgRemoteUrl = import.meta.env.VITE_PAYLOAD_REMOTE_URL;
  const slug = window.location.pathname.split("/").pop();
  const [illustration, setIllustration] = useState<Illustration | undefined>();

  // get the correct object from the collection
  const query = stringify(
    {
      where: {
        slug: {
          equals: slug,
        },
      },
    },
    { addQueryPrefix: true }
  );

  useEffect(() => {
    getApi("disegni", query).then((res) => setIllustration(res[0]));
  }, [illustration?.id, query]);

  if (illustration) {
    return (
      <>
        <div className="max-w-6/10">
          <h1 className="text-xl">{illustration.name}</h1>
          <p className="text-sm italic mb-1">{illustration.year}</p>
          <RichText data={illustration.richDesc}></RichText>
          {illustration.images.map((img, idx) => {
            return (
              <img
                key={idx}
                className={
                  "image-" +
                  idx +
                  " w-full my-6 opacity-0 transition-opacity duration-700"
                }
                src={imgRemoteUrl + img.image.url}
                alt={img.image.alt}
                onLoad={() => {
                  const element = document.querySelector(".image-" + idx);
                  console.log("image-" + idx);
                  element?.classList.remove("opacity-0");
                  element?.classList.add("opacity-100");
                }}
              ></img>
            );
          })}
        </div>
      </>
    );
  } else {
    return <></>;
  }
}
