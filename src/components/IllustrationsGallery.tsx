import { Link } from "react-router-dom";
import type { Illustration } from "../interfaces/Illustrations";
import { getImagePath } from "../utils/utils";

export default function IllustrationGallery({
  illustrations,
  cols = 4,
}: {
  illustrations: Illustration[];
  cols?: number;
}) {
  const gridStyle = "grid gap-4 " + setGridCols(cols);

  const illuGallery = illustrations?.map((illu, idx) => {
    return (
      <div
        key={illu.id}
        className={
          "opacity-0 transition-opacity duration-500 gallery-element-" + idx
        }
      >
        <Link to={illu.slug}>
          <img
            src={getImagePath(illu.images[0].image.url)}
            alt={illu.images[0].image.alt}
            className="h-full"
            onLoad={() => showImg(idx)}
          ></img>
        </Link>
      </div>
    );
  });

  return <div className={gridStyle}>{illuGallery}</div>;
}

function showImg(idx: number) {
  const element = document.querySelector(".gallery-element-" + idx);
  element?.classList.remove("opacity-0");
  element?.classList.add("opacity-100");
}

function setGridCols(cols: number) {
  switch (cols) {
    case 2:
      return "md:grid-cols-2";
    case 3:
      return "md:grid-cols-3";
    case 4:
      return "md:grid-cols-4";
    default:
      return "md:grid-cols-4";
  }
}
