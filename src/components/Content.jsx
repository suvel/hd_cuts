import React, { useContext } from "react";
import "./Content.css";
import GlobalContext from "../context/GlobalContext";
const Header = ({ children }) => {
  return <div className="Header">{children}</div>;
};

const Content = () => {
  const { vMode, vModeTypes, theaterVideo } = useContext(GlobalContext);

  const isWidgetMode = vMode == vModeTypes.WIDGET;
  const isCascadeMode = vMode == vModeTypes.CASCADE;
  const isTheaterMode = vMode == vModeTypes.THEATER;

  return (
    <div className="Content">
      {isWidgetMode && (
        <>
          <Header>Hi!</Header>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s.
          </p>
        </>
      )}
      {isCascadeMode && <h1>Top 10 high rated videos🔥</h1>}
      {isTheaterMode && (
        <>
          <h2>{theaterVideo.title}</h2>
          <p>{theaterVideo.desc}</p>
        </>
      )}
    </div>
  );
};

export default Content;
