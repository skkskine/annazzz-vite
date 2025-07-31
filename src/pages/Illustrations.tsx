import { useEffect, useState } from "react";
import { getApi } from "../../api/api";
import type { Illustration } from "../interfaces/Illustrations.tsx";
import IllustrationGallery from "../components/IllustrationsGallery.tsx";

export default function Illustrations() {
  const [illustrations, setIllustrations] = useState<Illustration[]>([]);

  useEffect(() => {
    getApi("disegni").then((res) => setIllustrations(res));
  }, []);

  return (
    <>
      <IllustrationGallery illustrations={illustrations}></IllustrationGallery>
    </>
  );
}
