import SwitchButton from "./Button";
import Header from "./Header";
import Main from "./Main";
import { useAuth } from "./UserContext";

function App() {
  const { isDarkMode, changeMode } = useAuth()

  return (
    <div className={`bg ${isDarkMode ? "bg-dark" : "bg-light"}`}>
      <Header />
      <Main />
      <SwitchButton />
    </div>
  )
}

export default App;
