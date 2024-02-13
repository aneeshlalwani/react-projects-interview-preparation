import useLocalStorage from "./useLocalStorage";
import "./styles.css";

const LightDarkModeSwitch = () => {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  function handleToggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }
  // console.log(theme);
  return (
    <>
      <div className="light-dark-mode" data-theme={theme}>
        <div className="container">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
            architecto! Veritatis est sunt reprehenderit repellendus natus
            voluptate corporis earum, voluptatum quas quidem et necessitatibus
            blanditiis, temporibus ratione. Illo, dolores tenetur?
          </p>
          <button onClick={() => handleToggleTheme()}>Change Theme</button>
        </div>
      </div>
    </>
  );
};

export default LightDarkModeSwitch;
