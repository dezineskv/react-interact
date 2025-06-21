import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Cards() {
  return (
    <>
      <div className="flex flex-row gap-5 justify-center ">
        <div className="w-full max-w-xs overflow-hidden rounded-lg border border-slate-200 bg-white shadow-lg shadow-slate-950/5 h-[200px]">
          <div className="h-max w-full rounded px-3 py-2">
            <h6 className="font-sans text-base font-bold text-current antialiased md:text-lg lg:text-xl">
              Portfolio
            </h6>
            <p className="my-1 font-sans text-base text-slate-600 antialiased">
              I've made a few portfolio sites, but the most recent one is
              kimv.me.
            </p>
          </div>
          <div className="w-full rounded px-3 pb-3 pt-1.5">
            <Link to="https://www.kimv.me">
              <button
                className="w-full rounded-md border border-red bg-red px-4 py-2 mx-auto text-center font-sans text-sm font-medium  transition-all duration-300 ease-in hover:border-slate-700 hover:bg-slate-700 disabled:cursor-not-allowed disabled:shadow-none text-red"
                style={{ color: "red", opacity: 1, maxHeight: "60px" }}
              >
                Visit Here
              </button>
            </Link>
          </div>
        </div>
        <div className="w-full max-w-xs overflow-hidden rounded-lg border border-slate-200 bg-white shadow-lg shadow-slate-950/5 h-[200px]">
          <div className="h-max w-full rounded px-3 py-2">
            <h6 className="font-sans text-base font-bold text-current antialiased md:text-lg lg:text-xl">
              Github
            </h6>
            <p className="my-1 font-sans text-base text-slate-600 antialiased">
              Most projects for schoolwork, but I also like to create my own
              mini apps for fun.
            </p>
          </div>
          <div className="w-full rounded px-3 pb-3 pt-1.5">
            <Link to="https://github.com/dezineskv">
              <button
                className="w-full rounded-md border border-red bg-red px-4 py-2 mx-auto text-center font-sans text-sm font-medium  transition-all duration-300 ease-in hover:border-slate-700 hover:bg-slate-700 disabled:cursor-not-allowed disabled:shadow-none text-red"
                style={{ color: "red", opacity: 1, maxHeight: "60px" }}
              >
                Github Here
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
