import { useEffect, useState } from "react";
import "./App.css";
import Pads from "./components/Pads";
import squaresdata from "./js/squares.json";
import Cards from "./components/Cards";
import MainLayout from "./layouts/MainLayout";
import MusicNotes from "./components/MusicNotes";
import Nav from "./components/Nav";
import Editing from "./components/Editing";
import Home from "./pages/Home";
import { Link, Routes, Route } from "react-router-dom";

function App() {
  const [squares, setSquares] = useState(squaresdata);
  const [visible, setVisible] = useState(true);
  const [boxes, setBoxes] = useState([1, 2, 3, 4, 5]);

  const addBox = () => {
    const nextId = boxes.length ? Math.max(...boxes) + 1 : 1;
    setBoxes([...boxes, nextId]);
  };
  const removeBox = () => {
    setBoxes((prev) => prev.slice(0, -1));
  };

  const buttonElements = squares.map((square) => (
    <Pads
      key={square.id}
      id={square.id}
      toggle={toggle}
      colorspads={square.padcolor}
      on={square.on}
    />
  ));

  function toggle(id) {
    // map over squares to match & then flip the value
    setSquares((prevSquares) =>
      prevSquares.map((item) => {
        return item.id === id ? { ...item, on: !item.on } : item;
      })
    );
  }
  function turnAllOff() {
    setSquares((prevSquares) =>
      prevSquares.map((square) => ({
        ...square,
        on: false,
      }))
    );
  }
  function turnAllOn() {
    setSquares((prevSquares) =>
      prevSquares.map((square) => ({
        ...square,
        on: true,
      }))
    );
  }

  return (
    <>
      <Nav />
      <Routes>
        <Route element={<MainLayout />} />
        <Route path="/home" element={<Home />} />
        <Route path="/music-notes" element={<MusicNotes />} />
        <Route path="/" element={<Cards />} />
      </Routes>

      <div className="w-full flex flex-col items-center justify-center">
        <h2 className="w-full text-2xl font-bold text-black mt-10 mb-2 ml-2">
          Color Power
        </h2>
        <div className="w-full flex items-center justify-center mx-auto mb-5">
          <div className="bg-black flex flex-col md:flex-row justify-center gap-2 rounded-xlg mx-auto p-10 max-w-10/12">
            <div className="w-9/12 min-w-[160px] flex flex-col justify-center gap-4  bg-white rounded-lg items-center mx-auto my-2 pb-2">
              <div className="w-full mx-auto">
                <h5 className="text-black text-xs font-bold pt-3 px-2">
                  BOARD CONTROLLER
                </h5>
              </div>

              <div className="flex flex-row justify-center items-center gap-10 w-full mx-auto bg-white text-black">
                <div
                  className="w-[80px] h-[80px] items-center border-4 border-solid border-gray-600 rounded-full px-2 py-5 mb-2 size-16"
                  onClick={turnAllOff}
                >
                  <div className="h-full text-xs my-auto inline-flex">Switch Off</div>
                </div>
                <div
                  className="w-[80px] h-[80px] items-center border-4 border-solid border-gray-600 rounded-full px-2 py-5 mb-2 size-16"
                  onClick={turnAllOn}
                >
                  <div className="h-full text-xs my-auto inline-flex">Switch On</div>
                </div>
              </div>
            </div>
            <div className="w-10/12 flex flex-row flex-wrap justify-center items-center gap-1 mx-auto">
              {buttonElements}
            </div>
          </div>
        </div>
        {/* next section */}
        {/* <div className="w-full flex items-center justify-center mx-auto px-6 mb-5">
          <div className="bg-black flex flex-col md:flex-row justify-center gap-2 rounded-xlg mx-auto p-10 max-w-4xl">
            <div className="w-[200px] min-w-[160px] flex flex-col justify-center gap-4 bg-white rounded-lg items-center mx-auto my-2 pb-2 ml-2">
              <div className="w-[160px]">
                <h5 className="text-black text-xs font-bold pt-3 px-2">
                  BOARD CONTROLLER
                </h5>
              </div>

              <div className="flex flex-col items-center w-[160px] bg-white text-black px-2">
                <div
                  className="items-center border-4 border-solid border-gray-600 rounded-full p-2 mb-2 size-16 pt-3"
                  onClick={() => setVisible(false)}
                >
                  <div className="text-xs inline-flex">Clear</div>
                </div>
                <div
                  className="items-center border-4 border-solid border-gray-600 rounded-full p-2 mb-2 size-16 pt-3"
                  onClick={() => setVisible(true)}
                >
                  <div className="text-xs inline-flex">Show</div>
                </div>
                <div
                  className="items-center border-4 border-solid border-gray-600 rounded-full p-2 mb-2 size-16"
                  onClick={addBox}
                >
                  <div className="text-xs/3 inline-flex">Add One</div>
                </div>
                <div
                  className="items-center border-4 border-solid border-gray-600 rounded-full p-2 mb-2 size-16"
                  onClick={removeBox}
                >
                  <div className="text-xs/3 inline-flex">Remove One</div>
                </div>
              </div>
            </div>
            <div className="w-10/12 flex flex-row flex-wrap justify-center items-center gap-1 mx-auto">
              <Editing
                // key={box}
                boxes={boxes}
                visible={visible}
                setVisible={setVisible}
                addBox={addBox}
                removeBox={removeBox}
              />
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}

export default App;
