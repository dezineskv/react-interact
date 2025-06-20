import { useState } from "react";
// import "./App.css";
// import squaresdata from "./js/squares.json";

function Draggable (props) {
  const [squares, setSquares] = useState(squaresdata);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);


  const handleMouseDown = (e) => {
    setIsDragging(true);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    setPosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };
  return (
    <>
      <div className="min-h-screen w-screen flex items-center justify-center mx-auto px-6">
        <div className="bg-black flex flex-col md:flex-row justify-center gap-2 rounded-xlg mx-auto p-10 max-w-3xl">
          <div className="w-2/12 min-w-[180px]flex flex-col justify-center gap-4  bg-white rounded-lg items-center mx-auto my-2">
            <div className="w-[180px] ">
              <h5 className="text-black text-xs font-bold py-4 px-2">
                CONTROLLER
              </h5>
            </div>

            <div className="flex flex-col items-center w-[180px] bg-white text-black px-2">
              <div
                className="items-center border-4 border-solid border-gray-600 rounded-full p-2 mb-2 size-14"
                onClick={turnAllOff}
              >
                <span className="text-sm">Turn All Off</span>
              </div>
              <div
                className="items-center border-4 border-solid border-gray-600 rounded-full p-2 mb-2 size-14"
                onClick={turnAllOn}
              >
                <span className="text-sm">Turn All On</span>
              </div>
            </div>
          </div>
          <div className="w-10/12 flex flex-row flex-wrap justify-center items-center gap-1 mx-auto">
            {props.buttonElements.map((button, index) => {
              return (
                <div
                  key={index}
                  className="w-[180px] h-[180px] bg-white rounded-lg flex flex-col justify-center items-center cursor-move"
                  style={{
                    position: "relative",
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                  }}
                  onMouseDown={handleMouseDown}
                  onMouseMove={handleMouseMove}
                  onMouseUp={handleMouseUp}
                  onMouseLeave={handleMouseUp}
                >
                 
                  {button}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Draggable;
