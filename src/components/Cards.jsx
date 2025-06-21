import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Cards() {
  return (
    <>
      <div className="flex flex-row gap-10 justify-center max-w-screen-lg">
        <div class="w-full max-w-xs overflow-hidden rounded-lg border border-slate-200 bg-white shadow-lg shadow-slate-950/5 h-[200px]">
          <div class="h-max w-full rounded px-3 py-2">
            <h6 class="font-sans text-base font-bold text-current antialiased md:text-lg lg:text-xl">
              Portfolio
            </h6>
            <p class="my-1 font-sans text-base text-slate-600 antialiased">
              I've made a few portfolio sites, but the most recent one is
              kimv.me.
            </p>
          </div>
          <div class="w-full rounded px-3 pb-3 pt-1.5">
            <Link to="https://www.kimv.me">
              <button
                class="w-full rounded-md border border-slate-800 bg-red px-4 py-2 text-center font-sans text-sm font-medium text-slate-50 transition-all duration-300 ease-in hover:border-slate-700 hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none text-red"
                style={{ color: "red" }}
              >
                Visit Here
              </button>
            </Link>
          </div>
        </div>
        <div class="w-full max-w-xs overflow-hidden rounded-lg border border-slate-200 bg-white shadow-lg shadow-slate-950/5 h-[200px]">
          <div class="h-max w-full rounded px-3 py-2">
            <h6 class="font-sans text-base font-bold text-current antialiased md:text-lg lg:text-xl">
              Github
            </h6>
            <p class="my-1 font-sans text-base text-slate-600 antialiased">
              Most projects for schoolwork, but I also like to create
              my own mini apps for fun.
            </p>
          </div>
          <div class="w-full rounded px-3 pb-3 pt-1.5">
            <Link to="https://github.com/dezineskv">
              <button
                class="w-full rounded-md border border-slate-800 bg-red px-4 py-2 text-center font-sans text-sm font-medium text-slate-50 transition-all duration-300 ease-in hover:border-slate-700 hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none text-red"
                style={{ color: "red" }}
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
