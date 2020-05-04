import React from "react";
import html2canvas from "html2canvas";

const ScreenGrab = () => {
  const handleScreenShot = () => {
    html2canvas(document.body).then(function (canvas) {
      document.body.appendChild(canvas);
    });
  };
  return <button onClick={handleScreenShot}>ScreenShot</button>;
};

export default ScreenGrab;
