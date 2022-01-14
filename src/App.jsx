import "./App.css";
import Footer from "./components/Footer";
import Info from "./components/Info";
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
        <Info />
        <Videos />
        <Footer />
      </GlobalProvider>
    </div>
  );
}

export default App;
