import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Content from "./components/Content";
import Videos from "./components/Videos";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="black-ribbon" />
      <Content />
      <Videos />
      <Footer />
    </div>
  );
}

export default App;
