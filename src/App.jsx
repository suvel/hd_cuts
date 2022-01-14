import "./App.css";
import Footer from "./components/Footer";
import Content from "./components/Content";
import Videos from "./components/Videos";
import Header from "./components/Header";
import Ribbon from "./components/Ribbon";
import { GlobalProvider } from "./context/GlobalContext";

function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <Header />
        <Ribbon />
        <Content />
        <Videos />
        <Footer />
      </GlobalProvider>
    </div>
  );
}

export default App;
