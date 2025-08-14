import { Link } from "react-router-dom";
import type { Illustration } from "../interfaces/Illustrations";
import { getImagePath } from "../utils/utils";

export default function IllustrationGallery({
  illustrations,
}: {
  illustrations: Illustration[];
}) {
  const illuGallery = illustrations?.map((illu, idx) => {
    return (
      <div
        key={illu.id}
        className={
          "opacity-0 transition-opacity duration-500 my-5 gallery-element-" +
          idx
        }
      >
        <Link to={illu.slug}>
          <img
            src={getImagePath(illu.images[0].image.url)}
            alt={illu.images[0].image.alt}
            className="hover:scale-102 transition-transform duration-250"
            onLoad={() => showImg(idx)}
          ></img>
        </Link>
      </div>
    );
  });

  return <div className="md:[column-count:4]">{illuGallery}</div>;
}

function showImg(idx: number) {
  const element = document.querySelector(".gallery-element-" + idx);
  element?.classList.remove("opacity-0");
  element?.classList.add("opacity-100");
}
