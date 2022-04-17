// import { Link } from "./Navigation.styled";
import { Link } from "stiles/Navigation.styled";

export default function Navigation() {
  return (
    <nav>
      <Link to="/">Home </Link>
      <Link to="/movies">Movies </Link>
    </nav>
  );
}