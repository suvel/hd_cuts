import { useContext } from "react";
import GlobalContext from "../../context/GlobalContext";
import "./style.css";

const Ribbon = () => {
  const { vMode } = useContext(GlobalContext);
  return <div className={`Ribbon ${vMode}`} />;
};

export default Ribbon;
