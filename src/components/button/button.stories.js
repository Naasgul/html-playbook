import "./button.css";
import buttonText from "./button-text.html";
import buttonLogo from "./button-logo.html";
import buttonFavorite from "./button-favorite.html";

//to center components
export default {
  title: "Components/Button",
  parameters: { layout: "centered" },
};

export const withText = () => buttonText;
export const withLogo = () => buttonLogo;
export const withFavorite = () => buttonFavorite;
