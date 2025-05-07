import Footer from "./components/Footer";
import Header from "./components/Header";
import JSXRules from "./components/JSXRules";
import Main from "./components/Main";
import WelcomeMessage from "./components/WelcomeMessage";

const App = () => {
  return (

    //JSX expressions must have one parent element
    //This is why we wrap everything in a div
    
  <div>
    <JSXRules/>
  </div>
  );
}

export default App;