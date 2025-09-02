import { getApi } from "../../api/api";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

export default function Home() {
  // call this api to wake Vercel sleepy service (free cloud delights......)
  useQuery({
    queryKey: ["homepage"],
    queryFn: () => getApi("globals/homepage"),
  });

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
