import React from "react";
import "./Videos.css";

function Video({ style }) {
  return <div className="Video" style={style} />;
}
//styles={marginLeft: "10px", marginTop: "10px" }

function Videos() {
  return (
    <div className="Videos">
      <Video style={{ marginLeft: "40px", marginTop: "40px" }} />
      <Video style={{ marginLeft: "20px", marginTop: "20px" }} />
      <Video />
    </div>
  );
}

export default Videos;
