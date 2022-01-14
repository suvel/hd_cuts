import { useEffect, useContext } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Content from "./components/Content";
import Videos from "./components/Videos";


import GlobalContext, { GlobalProvider } from "./context/GlobalContext";

function Ribbon() {
  const { vMode } = useContext(GlobalContext);
  return <div className={`black-ribbon ${vMode}`} />;
}

function App() {


  return (
    <div className="App">
      <GlobalProvider>
        <Ribbon />
        <Content />
        <Videos />
        <Footer />
      </GlobalProvider>
    </div>
  );
}

export default App;
