import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import Cards from "../components/Cards";

function Home() {
  return (
    <>
      <Cards />
      <div className="flex justify-center mx-auto mt-10 max-w-screen-md">
        <div className="rounded-lg border shadow-sm bg-white border-slate-200 shadow-slate-950/5 relative flex max-h-[30rem] w-full max-w-[41rem] flex-col items-end justify-center overflow-hidden text-center">
          <div className="p-2">
            <div className="absolute inset-0 m-0 h-full w-full rounded-none bg-cover bg-center">
              <img
                className="absolute top-0 left-0 w-full h-full opacity-90"
                src="https://wallpaperbat.com/img/832177-full-stack-wallpaper.jpg"
              />
              {/* <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-slate-800/80 via-black/50 to-slate-700/10 dark:from-black/90 dark:via-black/60 dark:to-black/20"></div> */}
            </div>
          </div>
          <div className="w-full rounded relative bottom-0 flex h-full flex-col items-center justify-startd px-6 py-14 md:px-12">
            <h6
              className="font-sans antialiased font-bold text-base md:text-lg lg:text-xl my-6"
              style={{ color: "red", fontWeight: 900, fontFamily: "cursive" }}
            >
              Kim Vidal
            </h6>
            <img
              className="inline-block object-cover object-center w-20 h-20 rounded-full border-2 border-white"
              src="https://static.wixstatic.com/media/ee7859_4ed4d118c1874005b0956f69d5aac9e5~mv2.jpg/v1/crop/x_0,y_2,w_100,h_95/fill/w_116,h_110,al_c,lg_1,q_80,enc_avif,quality_auto/1607922936020.jpg"
              alt="Kim"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
