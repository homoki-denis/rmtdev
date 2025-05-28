import BookmarksButton from "../bookmark/BookmarksButton";
import Logo from "../common/Logo";

export default function HeaderTop() {
  return (
    <div className="header__top">
      <Logo />
      <BookmarksButton />
    </div>
  );
}
