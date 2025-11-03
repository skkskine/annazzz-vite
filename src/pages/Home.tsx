import { getApi } from "../../api/api";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import type { Illustration } from "../interfaces/Illustrations";
import { getImagePath } from "../utils/utils";

export default function Home() {
  // preload and cache all the illustration images

  const { data } = useQuery<Illustration[]>({
    queryKey: ["illustrations"],
    queryFn: () => getApi("disegni"),
  });

  data?.forEach((illustration) => {
    const img = new Image();
    img.src = getImagePath(illustration.images[0].image.url);
  });

  return (
    <div className="flex justify-center items-center h-full">
      <Link to="illustrations" className="w-full md:max-w-[40%]">
        <img
          id="home-img"
          className="opacity-0 transition-opacity duration-800"
          src="/annazzz-bg.jpg"
          onLoad={() => showImg()}
        ></img>
      </Link>
    </div>
  );
}

function showImg() {
  const element = document.querySelector("#home-img");
  element?.classList.remove("opacity-0");
  element?.classList.add("opacity-100");
}
