import { Link } from "react-router-dom";
import type { Illustration } from "../interfaces/Illustrations";

export default function IllustrationGallery({
  illustrations,
  cols = 4,
}: {
  illustrations: Illustration[];
  cols?: number;
}) {
  const imgRemoteUrl = import.meta.env.VITE_PAYLOAD_REMOTE_URL;
  const gridStyle = "grid gap-4 " + setGridCols(cols);

  const illuGallery = illustrations?.map((illu, idx) => {
    return (
      <div
        key={idx}
        className={
          "opacity-0 transition-opacity duration-500 gallery-element-" + idx
        }
      >
        <Link to={illu.slug}>
          <img
            src={imgRemoteUrl + illu.images[0].image.url}
            alt={illu.images[0].image.alt}
            onLoad={() => {
              const element = document.querySelector(".gallery-element-" + idx);
              element?.classList.remove("opacity-0");
              element?.classList.add("opacity-100");
            }}
          ></img>
        </Link>
      </div>
    );
  });

  return <div className={gridStyle}>{illuGallery}</div>;
}

function setGridCols(cols: number) {
  switch (cols) {
    case 2:
      return "grid-cols-2";
      break;
    case 3:
      return "grid-cols-3";
      break;
    case 4:
      return "grid-cols-4";
      break;
    default:
      return "grid-cols-4";
  }
}
