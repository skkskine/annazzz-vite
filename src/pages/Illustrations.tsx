import { getApi } from "../../api/api";
import IllustrationGallery from "../components/IllustrationsGallery.tsx";
import { useQuery } from "@tanstack/react-query";
import Loader from "../components/Loader.tsx";

export default function Illustrations() {
  const { data: illustrations, isLoading } = useQuery({
    queryKey: ["illustrations"],
    queryFn: () => getApi("disegni"),
  });

  if (isLoading) {
    return <Loader></Loader>;
  }

  return (
    <>
      <IllustrationGallery illustrations={illustrations}></IllustrationGallery>
    </>
  );
}
