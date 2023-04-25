import { useAuth } from "./UserContext";

function Header() {
  const { isDarkMode } = useAuth()

  return (
    <h1 className={`heading ${isDarkMode ? "heading-dark" : "heading-light"}`}>
      {isDarkMode ? "Dark Mode" : "Light Mode"}
    </h1>
  );
}

export default Header;
