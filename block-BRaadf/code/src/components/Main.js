import Banner from "./Banner";
import Cards from "./Cards";
import Paragraph from "./Paragraph";
import Title from "./Title";
import { useAuth } from "./UserContext";

function Main() {
  const { isDarkMode} = useAuth()
  return (
    <>
      <Title text="Text Component" isDarkMode={isDarkMode} />
      <Paragraph isDarkMode={isDarkMode} />
      <Title text="Card Component" isDarkMode={isDarkMode} />
      <Cards />
      <Title text="Banner Component" isDarkMode={isDarkMode} />
      <Banner isDarkMode={isDarkMode} />
    </>
  );
}

export default Main;
