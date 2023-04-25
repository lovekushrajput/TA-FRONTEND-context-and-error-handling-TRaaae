import { useAuth } from "./UserContext";


export default function SwitchButton() {

  const { isDarkMode, changeMode } = useAuth()

  return (
    <button
      className={`btn ${isDarkMode ? "btn-dark" : "btn-light"}`}
      onClick={changeMode}
    >
      {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
    </button>
  );
}
