import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mt-5 flex justify-center items-center py-4 text-sm">
      Annazzz - {new Date().getFullYear()} - Code by&nbsp;
      <Link to="https://www.instagram.com/swarming_sky/" target="_blank">
        . ݁₊ ⊹ . ݁ ⟡ ݁ . ⊹ ₊ ݁.
      </Link>
    </footer>
  );
}
