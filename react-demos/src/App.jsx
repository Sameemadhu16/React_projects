import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import WelcomeMessage from "./components/WelcomeMessage";

const App = () => {
  return (

    //JSX expressions must have one parent element
    //This is why we wrap everything in a div
    
  <div>
    {/* <Header/>
    <Main/>
    <Footer/> */}
    <WelcomeMessage/>
  </div>
  );
}

export default App;