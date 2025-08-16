import { useEffect, useState } from "react";
import { getApi } from "../../api/api";
import type { Homepage } from "../interfaces/Homepage";
import { Link } from "react-router-dom";

export default function Home() {
  const [homepage, setHomepage] = useState<Homepage | undefined>(undefined);

  useEffect(() => {
    getApi("globals/homepage").then((res) => setHomepage(res));
  }, [homepage?.id]);

  return (
    <div className="flex justify-center items-center h-full">
      <Link to="illustrations" className="w-full md:max-w-[40%]">
        <img
          id="home-img"
          className="opacity-0 transition-opacity duration-800"
          src="/annazzz-bg.png"
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
