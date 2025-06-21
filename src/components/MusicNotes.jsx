import { useState } from "react";
import React from "react";
import img2 from "../assets/images2.png";
import img7 from "../assets/images7.jpg";
import img4 from "../assets/images4.jpg";
import img5 from "../assets/images5.jpg";
import img6 from "../assets/images6.jpg";
import audioFile2 from "/ping.mp3";
import audioFile from "/raw-drum-beat-memphis-phonk-straight-loop_120bpm_C_major.wav";
import "../App.css";

const images = [img2, img7, img4, img5, img6];

function MusicNotes() {
  const [clickedIndexes, setClickedIndexes] = useState([]);

  const handleClick = () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    setClickedIndexes((prev) => [...prev, randomIndex]);
  };

  return (
    <>
      <div className="w-full flex flex-col mx-auto">
        <h6 class="font-sans text-base font-bold text-current antialiased md:text-lg lg:text-xl mb-10">
          Add music to the sheet
        </h6>
        <div className="flex flex-row gap-10 justify-center max-w-screen-lg">
          <div class="w-full max-w-[200px] overflow-hidden rounded-lg border border-slate-200 bg-white shadow-lg shadow-slate-950/5">
            <div class="flex flex-col justify-center items-center h-full w-full rounded px-3 py-0 my-0">
              <h6 class="flex items-start justify-center font-sans text-base font-bold text-current antialiased md:text-lg lg:text-xl mb-5 mt-5">
                Sheet music controller
              </h6>
              <div
                className="flex justify-center items-center border-4 border-solid border-gray-600 rounded-full p-3 mb-2 w-[85px] h-[85px]"
                onClick={handleClick}
              >
                <div className="text-xs">Compose</div>
              </div>
              <div
                className="thumbnail--TvKkc lg--swle8 interactive--RyOh5 w-[150px] mb-10 mt-5"
                role="button"
              >
                Drum backbeat
                <audio controls style={{ width: "150px" }}>
                  <source
                    id="audio-player"
                    name="audio-player"
                    src={audioFile}
                    type="audio/mp3"
                    alt="music"
                  />
                </audio>
                <br />
                Sample Note
                <audio controls style={{ width: "150px" }}>
                  <source
                    id="audio-player2"
                    name="audio-player2"
                    src={audioFile2}
                    type="audio/mp3"
                    alt="music"
                  />
                </audio>
              </div>
            </div>
     
          </div>
          <div class="w-full max-w-[500px] overflow-hidden rounded-lg border border-slate-200 bg-white shadow-lg shadow-slate-950/5">
            <div class="h-max w-full rounded px-3 py-2">
              <div
                className="w-11/12 flex flex-row flex-wrap justify-start items-center gap-1 ml-5 h-full"
                style={{
                  backgroundImage:
                    'url("https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F174866398021532430%2F&psig=AOvVaw2tZZDipipzk8lfQkIF0wDx&ust=1750560529652000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJisrbzAgY4DFQAAAAAdAAAAABA4")',
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              >
                <div className="grid grid-cols-3 md:grid-cols-4 gap-2">
                  {clickedIndexes.map((index, i) => (
                    <img
                      key={i}
                      src={images[index]}
                      alt={`Clicked ${index}`}
                      className="w-64 h-44 object-cover rounded shadow-lg transition duration-300"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default MusicNotes;
